import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowLeft, ExternalLink, TrendingUp, Building2, MapPin, ArrowRight, AlertTriangle, DollarSign } from "lucide-react";
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

const TradingViewWidget = ({ symbol, exchange }: { symbol: string; exchange?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const tvSymbol = exchange === "TSX" ? `TSX:${symbol}` 
      : exchange === "LSE" ? `LSE:${symbol}`
      : symbol;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [[tvSymbol]],
      chartOnly: false,
      width: "100%",
      height: 400,
      locale: "en",
      colorTheme: "light",
      autosize: true,
      showVolume: true,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "Space Grotesk, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
    });
    containerRef.current.appendChild(script);
  }, [symbol, exchange]);

  return (
    <div className="tradingview-widget-container rounded-md overflow-hidden border border-border">
      <div ref={containerRef} />
      <p className="text-[10px] text-muted-foreground text-center py-1">
        Market data by <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TradingView</a>
      </p>
    </div>
  );
};

const CompanyProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    return (
      <div className="container py-12 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Company Not Found</h1>
        <Link to="/business" className="text-primary hover:underline">← Back to Companies</Link>
      </div>
    );
  }

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

            <TradingViewWidget symbol={company.ticker} exchange={company.exchange} />

            <div className="flex flex-wrap gap-3 text-sm mt-4">
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
