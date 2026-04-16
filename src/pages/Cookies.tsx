const Cookies = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="font-heading text-4xl font-bold text-foreground mb-6">Cookie Policy</h1>
    <div className="retro-card space-y-4 text-muted-foreground leading-relaxed">
      <p><strong className="text-foreground">Last updated:</strong> April 2026</p>
      <p>
        This policy explains how {`Atom Beacon`} uses cookies and similar technologies.
        Cookies are small text files stored in your browser.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Cookie Categories</h2>
      <p>
        <strong className="text-foreground">Essential cookies/storage:</strong> Needed for core
        site operation and security, including saving your cookie preference choice.
      </p>
      <p>
        <strong className="text-foreground">Analytics cookies:</strong> Used by Google Analytics 4
        to understand traffic and site usage trends.
      </p>
      <p>
        <strong className="text-foreground">Advertising cookies:</strong> Used by Google AdSense
        to support ad delivery, measurement, and personalization where permitted.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Google Cookies and Technologies</h2>
      <p>
        Depending on your consent and Google configuration, Google services may use cookies
        and identifiers such as `_ga`, `_gid`, `_gcl_*`, and DoubleClick-related identifiers.
        The exact cookies can vary over time based on Google product settings and experiments.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">How Consent Works on This Site</h2>
      <p>
        We show a consent banner that allows you to choose:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong className="text-foreground">Accept All</strong>: enables analytics and advertising cookies.
        </li>
        <li>
          <strong className="text-foreground">Essential Only</strong>: keeps non-essential analytics/advertising disabled.
        </li>
      </ul>
      <p>
        You can reopen these controls at any time using the &quot;Cookie Preferences&quot; link in
        the footer.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Managing Cookies</h2>
      <p>
        You can also manage cookies through your browser settings. Most browsers let you block,
        delete, or clear cookies. Blocking cookies may affect site behavior and some features.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">EEA/UK/Switzerland</h2>
      <p>
        For visitors in the EEA, UK, and Switzerland, non-essential cookies are intended to be
        used only with consent. We are implementing a Google-certified TCF-compatible CMP path
        for personalized ad compliance in these regions.
      </p>
    </div>
  </div>
);
export default Cookies;
