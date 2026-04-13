import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, TrendingUp, TrendingDown, Building2, MapPin, ArrowRight, AlertTriangle, DollarSign } from "lucide-react";
import { BRAND_MARK } from "@/lib/brand";
import { companies } from "./Business";

/* @todo: 
   - Add more detailed press release sections per company (currently links to newsrooms)
   - Add competitor comparison tables
   - Add historical funding timeline visualization for private companies
   - Add analyst ratings/consensus where available
   - Consider adding SEC filing links (10-K, 10-Q) for public companies
   - Add insider transaction data links
*/

interface StockQuote {
  symbol: string;
  regularMarketPrice: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  marketCap: number;
  shortName: string;
}

const formatMarketCap = (cap: number): string => {
  if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
  if (cap >= 1e6) return `$${(cap / 1e6).toFixed(1)}M`;
  return `$${cap.toLocaleString()}`;
};

const formatVolume = (vol: number): string => {
  if (vol >= 1e6) return `${(vol / 1e6).toFixed(2)}M`;
  if (vol >= 1e3) return `${(vol / 1e3).toFixed(1)}K`;
  return vol.toLocaleString();
};

/*
  @todo: Stock data integration notes
  -----------------------------------------
  Yahoo Finance's unofficial v8 API (query2.finance.yahoo.com) is used here.
  It is free but unofficial and may break or be rate-limited without notice.
  
  For production, consider:
  - Financial Modeling Prep (financialmodelingprep.com) — free tier: 250 requests/day
  - Alpha Vantage (alphavantage.co) — free tier: 25 requests/day
  - Twelve Data (twelvedata.com) — free tier: 800 requests/day
  - Polygon.io — free tier: 5 requests/min
  
  All these have CORS issues from browser — would need a serverless proxy.
  For now we link to external financial data providers as a reliable fallback.
*/

const CompanyProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const company = companies.find((c) => c.slug === slug);
  const [quote, setQuote] = useState<StockQuote | null>(null);
  const [quoteError, setQuoteError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!company?.ticker || !company.isPublic) return;

    const fetchQuote = async () => {
      setLoading(true);
      try {
        // Use a CORS-friendly proxy for Yahoo Finance API
        // @todo: Replace with a dedicated edge function or serverless proxy for production
        const res = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${company.ticker}?interval=1d&range=1d`,
          { headers: { 'User-Agent': 'Mozilla/5.0' } }
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const result = data?.chart?.result?.[0];
        const meta = result?.meta;
        if (meta) {
          setQuote({
            symbol: meta.symbol,
            regularMarketPrice: meta.regularMarketPrice,
            regularMarketChange: meta.regularMarketPrice - meta.chartPreviousClose,
            regularMarketChangePercent: ((meta.regularMarketPrice - meta.chartPreviousClose) / meta.chartPreviousClose) * 100,
            regularMarketDayHigh: meta.regularMarketDayHigh || meta.regularMarketPrice,
            regularMarketDayLow: meta.regularMarketDayLow || meta.regularMarketPrice,
            regularMarketVolume: meta.regularMarketVolume || 0,
            fiftyTwoWeekHigh: meta.fiftyTwoWeekHigh || 0,
            fiftyTwoWeekLow: meta.fiftyTwoWeekLow || 0,
            marketCap: 0, // Not available in chart endpoint
            shortName: company.name,
          });
        } else {
          setQuoteError(true);
        }
      } catch {
        setQuoteError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [company]);

  if (!company) {
    return (
      <div className="container py-12 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Company Not Found</h1>
        <Link to="/business" className="text-primary hover:underline">← Back to Companies</Link>
      </div>
    );
  }

  const isPositive = quote && quote.regularMarketChange >= 0;

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link to="/business" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Companies
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{company.name}</h1>
            {company.purePlay && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Pure Nuclear</span>
            )}
            {company.isPublic && company.ticker && (
              <span className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground font-mono font-semibold">
                {company.exchange}: {company.ticker}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {company.hq}</span>
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
              <ExternalLink className="h-3.5 w-3.5" /> Official Website
            </a>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-2">{company.focus}</p>
        </div>

        {/* Market Data Section */}
        {company.isPublic && company.ticker ? (
          <section className="retro-card mb-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Market Data
            </h2>

            {loading && <p className="text-muted-foreground text-sm">Loading market data...</p>}

            {quote && !loading && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-background p-3 rounded-md border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Price</p>
                  <p className="text-xl font-bold text-foreground">${quote.regularMarketPrice.toFixed(2)}</p>
                  <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}{quote.regularMarketChange.toFixed(2)} ({isPositive ? '+' : ''}{quote.regularMarketChangePercent.toFixed(2)}%)
                  </p>
                </div>
                <div className="bg-background p-3 rounded-md border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Day Range</p>
                  <p className="text-sm font-medium text-foreground">${quote.regularMarketDayLow.toFixed(2)} – ${quote.regularMarketDayHigh.toFixed(2)}</p>
                </div>
                <div className="bg-background p-3 rounded-md border border-border">
                  <p className="text-xs text-muted-foreground mb-1">52-Week Range</p>
                  <p className="text-sm font-medium text-foreground">${quote.fiftyTwoWeekLow.toFixed(2)} – ${quote.fiftyTwoWeekHigh.toFixed(2)}</p>
                </div>
                <div className="bg-background p-3 rounded-md border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Volume</p>
                  <p className="text-sm font-medium text-foreground">{formatVolume(quote.regularMarketVolume)}</p>
                </div>
              </div>
            )}

            {quoteError && !loading && (
              <div className="bg-muted/50 p-4 rounded-md mb-4">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Live market data is temporarily unavailable. View current data on the links below.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={`https://finance.yahoo.com/quote/${company.ticker}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                Yahoo Finance <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={`https://www.google.com/finance/quote/${company.ticker}:${company.exchange}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                Google Finance <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={`https://www.marketwatch.com/investing/stock/${company.ticker.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                MarketWatch <ExternalLink className="h-3 w-3" />
              </a>
              {/* @todo: Add link to SEC EDGAR filings for U.S.-listed companies */}
            </div>
          </section>
        ) : (
          <section className="retro-card mb-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" /> Funding & Ownership
            </h2>
            <p className="text-muted-foreground leading-relaxed">{company.fundingInfo || "Ownership and funding details not yet available."}</p>
            {/* @todo: Add structured funding round timeline with dates, amounts, and lead investors */}
          </section>
        )}

        {/* Company Synopsis */}
        <section className="retro-card mb-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" /> Company Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{company.description}</p>

          <h3 className="font-semibold text-foreground mb-2">What Makes Them Exciting</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{company.exciting}</p>

          <h3 className="font-semibold text-foreground mb-2">Challenges</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{company.challenges}</p>
        </section>

        {/* News & Press */}
        <section className="retro-card mb-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Recent Headlines & Press</h2>
          <ul className="space-y-2 mb-4">
            {company.recentNews.map((news, j) => (
              <li key={j}>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-start gap-1"
                >
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  {news.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(company.name + ' nuclear energy news')}&tbm=nws`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              More news on Google <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              Company Newsroom <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="retro-card bg-primary/5">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" /> Important Disclaimer
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The information on this page is provided for educational and informational purposes only and does not constitute investment advice, financial advice, or a recommendation to buy or sell any security. Market data may be delayed or inaccurate. Always conduct your own due diligence and consult with a qualified financial advisor before making investment decisions. {BRAND_MARK} is not a registered broker-dealer or investment advisor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
