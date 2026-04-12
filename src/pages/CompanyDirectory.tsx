import { Link } from "react-router-dom";
import { Building2, TrendingUp, MapPin, ExternalLink } from "lucide-react";
import { companies } from "./Business";

const CompanyDirectory = () => {
  const publicCompanies = companies.filter((c) => c.isPublic);
  const privateCompanies = companies.filter((c) => !c.isPublic);

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h1 className="font-heading text-4xl font-bold text-foreground">Company Profiles</h1>
        </div>
        <p className="text-muted-foreground mb-8 text-lg">
          Detailed investor profiles for nuclear energy companies — market data for public companies, funding details for private ones.
        </p>
        <p className="text-sm text-muted-foreground mb-12 bg-primary/5 p-4 rounded-md">
          <strong>Disclaimer:</strong> This section is for informational purposes only and does not constitute investment advice. Always conduct your own research and consult a qualified financial advisor.
        </p>

        {/* Public Companies */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Publicly Traded Companies</h2>
        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {publicCompanies.map((company) => (
            <Link
              key={company.slug}
              to={`/companies/${company.slug}`}
              className="retro-card hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-foreground font-mono font-medium">
                  {company.exchange}: {company.ticker}
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                <MapPin className="h-3 w-3" /> {company.hq}
              </p>
              <p className="text-sm text-muted-foreground">{company.focus}</p>
            </Link>
          ))}
        </div>

        {/* Private Companies */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Private Companies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {privateCompanies.map((company) => (
            <Link
              key={company.slug}
              to={`/companies/${company.slug}`}
              className="retro-card hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">Private</span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                <MapPin className="h-3 w-3" /> {company.hq}
              </p>
              <p className="text-sm text-muted-foreground">{company.focus}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDirectory;
