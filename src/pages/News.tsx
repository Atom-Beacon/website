import { useState, useEffect } from "react";
import { ExternalLink, Search, Loader2 } from "lucide-react";

type Category = "all" | "technology" | "business" | "government" | "environment" | "research";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "government", label: "Government" },
  { id: "environment", label: "Environment" },
  { id: "research", label: "Research" },
];

interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  category: Category;
  date: string;
  snippet: string;
}

// Simulated news data — in production this would come from a news API
const generateNews = (): NewsItem[] => [
  {
    id: "1", title: "Next-Generation Small Modular Reactors Pass Key Safety Review",
    source: "World Nuclear News", url: "https://world-nuclear-news.org", category: "technology",
    date: "2026-04-05", snippet: "Several SMR designs have cleared regulatory hurdles, bringing factory-built reactors closer to commercial deployment worldwide."
  },
  {
    id: "2", title: "US Department of Energy Announces $2B Nuclear Innovation Fund",
    source: "Energy.gov", url: "https://energy.gov", category: "government",
    date: "2026-04-04", snippet: "The funding aims to accelerate advanced reactor development and support the nuclear workforce pipeline."
  },
  {
    id: "3", title: "Major Utility Signs Agreement for Nuclear-Powered Data Centers",
    source: "Reuters", url: "https://reuters.com", category: "business",
    date: "2026-04-03", snippet: "Tech companies increasingly turn to nuclear for reliable, carbon-free baseload power to meet AI computing demands."
  },
  {
    id: "4", title: "New Study Confirms Nuclear's Lowest Lifecycle Carbon Footprint",
    source: "Nature Energy", url: "https://nature.com", category: "research",
    date: "2026-04-02", snippet: "Comprehensive lifecycle analysis shows nuclear produces fewer emissions per kWh than any other energy source including solar and wind."
  },
  {
    id: "5", title: "EU Includes Nuclear in Green Taxonomy, Boosting Investment",
    source: "Euronews", url: "https://euronews.com", category: "government",
    date: "2026-04-01", snippet: "The European Commission's decision opens new financing pathways for nuclear projects across member states."
  },
  {
    id: "6", title: "Fusion Breakthrough: Sustained Plasma Achieved for Record Duration",
    source: "IAEA", url: "https://iaea.org", category: "technology",
    date: "2026-03-30", snippet: "The international fusion experiment maintained plasma for over 10 minutes, marking a significant step toward practical fusion energy."
  },
  {
    id: "7", title: "Nuclear Desalination Plants Expand Access to Fresh Water",
    source: "World Nuclear Association", url: "https://world-nuclear.org", category: "environment",
    date: "2026-03-28", snippet: "Dual-purpose nuclear plants in arid regions now provide both electricity and millions of gallons of desalinated water daily."
  },
  {
    id: "8", title: "Canadian Provinces Partner on Nuclear Grid Modernization",
    source: "CBC", url: "https://cbc.ca", category: "business",
    date: "2026-03-27", snippet: "Ontario, New Brunswick, and Saskatchewan announce joint procurement of small modular reactors for provincial grids."
  },
  {
    id: "9", title: "Advanced Nuclear Fuel Recycling Reduces Waste by 90%",
    source: "MIT Technology Review", url: "https://technologyreview.com", category: "research",
    date: "2026-03-25", snippet: "New pyroprocessing techniques demonstrate ability to recycle spent fuel, dramatically reducing long-term storage requirements."
  },
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    const timer = setTimeout(() => {
      setNews(generateNews());
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
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
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Nuclear Energy News</h1>
        <p className="text-muted-foreground mb-8">
          The latest developments in nuclear energy from around the world, updated regularly.
        </p>

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
            💡 News is aggregated from trusted global sources. Links open in a new tab to the original publisher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
