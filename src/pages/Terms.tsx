import { BRAND_MARK, LEGAL_ENTITY } from "@/lib/brand";

const Terms = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="font-heading text-4xl font-bold text-foreground mb-6">Terms of Use</h1>
    <div className="retro-card space-y-4 text-muted-foreground leading-relaxed">
      <p><strong className="text-foreground">Last updated:</strong> April 2026</p>
      <p>
        This website is operated by {LEGAL_ENTITY}. By using this site, you agree to these Terms of Use. If you do not agree, please do not use this site.
      </p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Content</h2>
      <p>All content on this site is provided for informational and educational purposes only. Blog posts and editorials represent the opinions of their authors and do not constitute professional energy policy advice.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">External Links</h2>
      <p>This site links to third-party news sources and resources. We do not control and are not responsible for the content of external sites.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Intellectual Property</h2>
      <p>
        Unless otherwise noted, original content on this site is © {LEGAL_ENTITY}. {BRAND_MARK} is a trademark of {LEGAL_ENTITY}. You may share and reference our content with proper attribution.
      </p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Limitation of Liability</h2>
      <p>{BRAND_MARK} is provided &quot;as is&quot; without warranties of any kind. We are not liable for any decisions made based on information provided on this site.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Governing Law</h2>
      <p>These terms are governed by applicable laws. For international users, we strive to comply with relevant local regulations.</p>
    </div>
  </div>
);
export default Terms;
