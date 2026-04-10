import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AdSlot from "./AdSlot";

/**
 * ArticleTemplate — consistent layout for article/learn pages.
 * Provides breadcrumb, heading, intro, ad-after-intro, body sections
 * with mid-article ad, and optional sources/footnotes.
 *
 * @todo: Add JSON-LD Article structured data automatically per page
 * @todo: Add reading-time estimate in header
 * @todo: Add social share buttons
 */

interface ArticleSection {
  title?: string;
  content: React.ReactNode;
}

interface ArticleTemplateProps {
  /** Page title (used in h1) */
  title: string;
  /** Icon element shown beside the title */
  icon?: React.ReactNode;
  /** Short intro paragraph shown above the first ad slot */
  intro?: React.ReactNode;
  /** Breadcrumb back-link */
  backLink?: { to: string; label: string };
  /** Main content sections — an ad is inserted mid-way */
  sections: ArticleSection[];
  /** Optional footer block (sources, disclaimers) */
  footer?: React.ReactNode;
  /** Structured data JSON-LD to inject */
  jsonLd?: Record<string, unknown>;
}

const ArticleTemplate = ({
  title,
  icon,
  intro,
  backLink,
  sections,
  footer,
  jsonLd,
}: ArticleTemplateProps) => {
  const midpoint = Math.floor(sections.length / 2);

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {backLink && (
          <Link
            to={backLink.to}
            className="inline-flex items-center gap-1 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> {backLink.label}
          </Link>
        )}

        <div className="flex items-center gap-3 mb-6">
          {icon && (
            <div className="p-3 rounded-lg bg-primary/10">{icon}</div>
          )}
          <h1 className="font-heading text-4xl font-bold text-foreground">
            {title}
          </h1>
        </div>

        {intro && (
          <div className="retro-card mb-8">
            <div className="text-muted-foreground leading-relaxed">{intro}</div>
          </div>
        )}

        {/* Ad slot: after intro */}
        <AdSlot placement="after-intro" className="mb-8" />

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <section className="retro-card">
                {section.title && (
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                )}
                <div className="text-muted-foreground leading-relaxed">
                  {section.content}
                </div>
              </section>

              {/* Ad slot: mid-article (after the midpoint section) */}
              {i === midpoint && sections.length > 2 && (
                <AdSlot placement="mid-article" className="mt-8" />
              )}
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-10 retro-card bg-primary/5">{footer}</div>
        )}

        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleTemplate;
