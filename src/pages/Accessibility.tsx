import { BRAND_MARK, LEGAL_ENTITY } from "@/lib/brand";

const Accessibility = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="font-heading text-4xl font-bold text-foreground mb-6">Accessibility Statement</h1>
    <div className="retro-card space-y-4 text-muted-foreground leading-relaxed">
      <p><strong className="text-foreground">Last updated:</strong> April 2026</p>
      <p>
        {LEGAL_ENTITY} is committed to ensuring digital accessibility on the {BRAND_MARK} website for all users, including those with disabilities. We strive to conform to WCAG 2.1 Level AA standards.
      </p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Our Efforts</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Semantic HTML structure for screen readers</li>
        <li>Sufficient color contrast ratios</li>
        <li>Keyboard-navigable interface</li>
        <li>Alt text on images</li>
        <li>Responsive design for all devices</li>
        <li>Clear and readable typography</li>
      </ul>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Feedback</h2>
      <p>If you encounter accessibility barriers on this site, please let us know. We take all feedback seriously and are committed to continuous improvement.</p>
    </div>
  </div>
);
export default Accessibility;
