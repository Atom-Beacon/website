import { useState, useEffect } from "react";
import { ExternalLink, Search, Loader2, RefreshCw } from "lucide-react";

type Category = "all" | "technology" | "business" | "government" | "environment" | "research" | "general";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "government", label: "Government" },
  { id: "environment", label: "Environment" },
  { id: "research", label: "Research" },
  { id: "general", label: "General" },
];

interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  category: Category;
  date: string;
  snippet: string;
  isLive: boolean;
}

const CATEGORY_KEYWORDS: Record<Exclude<Category, "all" | "general">, string[]> = {
  technology: ["reactor", "smr", "fusion", "technology", "design", "innovation", "modular", "advanced"],
  business: ["invest", "company", "market", "deal", "contract", "utility", "cost", "stock", "billion", "million"],
  government: ["regulation", "policy", "government", "congress", "commission", "nrc", "doe", "legislation", "law", "eu", "senate"],
  environment: ["climate", "carbon", "emission", "environment", "clean", "green", "water", "waste", "sustainability"],
  research: ["study", "research", "university", "scientist", "lab", "experiment", "breakthrough", "journal"],
};

function categorizeArticle(title: string, snippet: string): Category {
  const text = `${title} ${snippet}`.toLowerCase();
  let bestCategory: Category = "general";
  let bestScore = 0;
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const score = keywords.filter((kw) => text.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestCategory = cat as Category;
    }
  }
  return bestCategory;
}

// Fallback placeholder data
const placeholderNews: NewsItem[] = [
  {
    id: "p1", title: "Next-Generation Small Modular Reactors Pass Key Safety Review",
    source: "World Nuclear News", url: "https://world-nuclear-news.org", category: "technology",
    date: "2026-04-05", snippet: "Several SMR designs have cleared regulatory hurdles, bringing factory-built reactors closer to commercial deployment worldwide.", isLive: false,
  },
  {
    id: "p2", title: "US Department of Energy Announces $2B Nuclear Innovation Fund",
    source: "Energy.gov", url: "https://energy.gov", category: "government",
    date: "2026-04-04", snippet: "The funding aims to accelerate advanced reactor development and support the nuclear workforce pipeline.", isLive: false,
  },
  {
    id: "p3", title: "Major Utility Signs Agreement for Nuclear-Powered Data Centers",
    source: "Reuters", url: "https://reuters.com", category: "business",
    date: "2026-04-03", snippet: "Tech companies increasingly turn to nuclear for reliable, carbon-free baseload power to meet AI computing demands.", isLive: false,
  },
  {
    id: "p4", title: "New Study Confirms Nuclear's Lowest Lifecycle Carbon Footprint",
    source: "Nature Energy", url: "https://nature.com", category: "research",
    date: "2026-04-02", snippet: "Comprehensive lifecycle analysis shows nuclear produces fewer emissions per kWh than any other energy source including solar and wind.", isLive: false,
  },
  {
    id: "p5", title: "EU Includes Nuclear in Green Taxonomy, Boosting Investment",
    source: "Euronews", url: "https://euronews.com", category: "government",
    date: "2026-04-01", snippet: "The European Commission's decision opens new financing pathways for nuclear projects across member states.", isLive: false,
  },
  {
    id: "p6", title: "Fusion Breakthrough: Sustained Plasma Achieved for Record Duration",
    source: "IAEA", url: "https://iaea.org", category: "technology",
    date: "2026-03-30", snippet: "The international fusion experiment maintained plasma for over 10 minutes, marking a significant step toward practical fusion energy.", isLive: false,
  },
  {
    id: "p7", title: "Nuclear Desalination Plants Expand Access to Fresh Water",
    source: "World Nuclear Association", url: "https://world-nuclear.org", category: "environment",
    date: "2026-03-28", snippet: "Dual-purpose nuclear plants in arid regions now provide both electricity and millions of gallons of desalinated water daily.", isLive: false,
  },
  {
    id: "p8", title: "Canadian Provinces Partner on Nuclear Grid Modernization",
    source: "CBC", url: "https://cbc.ca", category: "business",
    date: "2026-03-27", snippet: "Ontario, New Brunswick, and Saskatchewan announce joint procurement of small modular reactors for provincial grids.", isLive: false,
  },
  {
    id: "p9", title: "Advanced Nuclear Fuel Recycling Reduces Waste by 90%",
    source: "MIT Technology Review", url: "https://technologyreview.com", category: "research",
    date: "2026-03-25", snippet: "New pyroprocessing techniques demonstrate ability to recycle spent fuel, dramatically reducing long-term storage requirements.", isLive: false,
  },
];

async function fetchGoogleNewsRSS(): Promise<NewsItem[]> {
  // Use a CORS proxy to fetch Google News RSS
  const query = encodeURIComponent("nuclear energy");
  const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=en&gl=US&ceid=US:en`;
  
  // Try multiple CORS proxies
  const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
    `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`,
  ];

  let xmlText = "";
  for (const proxyUrl of proxies) {
    try {
      const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        xmlText = await res.text();
        if (xmlText.includes("<item>")) break;
      }
    } catch {
      continue;
    }
  }

  if (!xmlText || !xmlText.includes("<item>")) {
    throw new Error("Could not fetch RSS feed");
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const items = doc.querySelectorAll("item");

  const newsItems: NewsItem[] = [];
  items.forEach((item, i) => {
    if (i >= 20) return; // limit to 20
    const title = item.querySelector("title")?.textContent ?? "";
    const link = item.querySelector("link")?.textContent ?? "";
    const pubDate = item.querySelector("pubDate")?.textContent ?? "";
    const source = item.querySelector("source")?.textContent ?? "Google News";
    const description = item.querySelector("description")?.textContent ?? "";
    // Strip HTML tags from description
    const snippet = description.replace(/<[^>]*>/g, "").slice(0, 200);

    const date = pubDate ? new Date(pubDate).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
    const category = categorizeArticle(title, snippet);

    newsItems.push({
      id: `live-${i}`,
      title,
      source,
      url: link,
      category,
      date,
      snippet: snippet || "Click to read the full article.",
      isLive: true,
    });
  });

  return newsItems;
}

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiveData, setIsLiveData] = useState(false);

  const loadNews = async () => {
    setLoading(true);
    try {
      const liveNews = await fetchGoogleNewsRSS();
      if (liveNews.length > 0) {
        setNews(liveNews);
        setIsLiveData(true);
      } else {
        throw new Error("No articles");
      }
    } catch {
      setNews(placeholderNews);
      setIsLiveData(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const filtered = news.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="font-heading text-4xl font-bold text-foreground">Nuclear Energy News</h1>
          <button
            onClick={loadNews}
            disabled={loading}
            className="shrink-0 mt-1 p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
            aria-label="Refresh news"
          >
            <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
        <div className="flex items-center gap-2 mb-8">
          <p className="text-muted-foreground">
            The latest developments in nuclear energy from around the world.
          </p>
          {isLiveData ? (
            <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/15 text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" /> Live
            </span>
          ) : (
            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              Sample data
            </span>
          )}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <span className="ml-3 text-muted-foreground">Fetching latest news...</span>
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">No articles found matching your criteria.</p>
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <article key={item.id} className="retro-card hover:scale-[1.01] transition-transform">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary capitalize">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.snippet}</p>
                    <p className="text-xs text-muted-foreground">Source: {item.source}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`Read full article: ${item.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 rounded-lg bg-muted text-center">
          <p className="text-sm text-muted-foreground">
            💡 {isLiveData
              ? "News is fetched live from Google News. Links open in a new tab to the original publisher."
              : "Showing sample articles. Live news feed is temporarily unavailable — check back soon!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
