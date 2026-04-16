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
        Google Analytics and AdSense load on each page with{" "}
        <a
          href="https://developers.google.com/tag-platform/security/concepts/consent-mode"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consent Mode
        </a>{" "}
        defaults that deny non-essential cookies until you choose otherwise.
      </p>
      <p>
        <strong className="text-foreground">EEA/UK/Switzerland:</strong> Google&apos;s certified TCF
        consent message (from AdSense Privacy &amp; messaging) collects your choices. When you do not
        allow personalization, ads may still be shown in a non-personalized or limited form per
        Google&apos;s configuration.
      </p>
      <p>
        <strong className="text-foreground">Other regions:</strong> we may show our own banner:
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
        Use &quot;Cookie Preferences&quot; in the footer to reopen Google&apos;s consent options (when
        available on your device) or our banner where applicable.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Managing Cookies</h2>
      <p>
        You can also manage cookies through your browser settings. Most browsers let you block,
        delete, or clear cookies. Blocking cookies may affect site behavior and some features.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">EEA/UK/Switzerland</h2>
      <p>
        For visitors in the EEA, UK, and Switzerland, non-essential cookies are used only in line
        with the choices you make in Google&apos;s European regulations message. The AdSense script
        must be on the page for that message to appear — see{" "}
        <a
          href="https://support.google.com/adsense/answer/10960768"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create a European regulations message
        </a>.
      </p>
    </div>
  </div>
);
export default Cookies;
