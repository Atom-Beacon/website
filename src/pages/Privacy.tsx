import { BRAND_MARK, LEGAL_ENTITY } from "@/lib/brand";

const Privacy = () => (
  <div className="container py-12 max-w-3xl mx-auto">
    <h1 className="font-heading text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
    <div className="retro-card space-y-4 text-muted-foreground leading-relaxed">
      <p><strong className="text-foreground">Last updated:</strong> April 2026</p>
      <p>
        {LEGAL_ENTITY} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the {BRAND_MARK} website and
        is committed to protecting your privacy. This Privacy Policy explains what
        information we process, why we process it, and the choices available to you.
      </p>
      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Information We Collect</h2>
      <p>
        We collect limited technical and usage information required to operate and improve
        the site, including page views, approximate location (country/region), device/browser
        metadata, and referral data. We do not intentionally collect special-category personal
        data. If you voluntarily submit information to us in the future (for example by email,
        a contact form, or newsletter form), we process that information only for the stated purpose.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">How We Use Data</h2>
      <p>We use data for the following purposes:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Deliver and secure the website and core functionality.</li>
        <li>Measure performance and usage trends with Google Analytics.</li>
        <li>Support advertising with Google AdSense (once enabled).</li>
        <li>Comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Legal Basis (GDPR/UK GDPR)</h2>
      <p>
        For users in the EEA, UK, and Switzerland, we rely on consent for non-essential
        analytics and advertising cookies/technologies. Essential storage and security-related
        processing are used to provide the site and protect against abuse.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Google Services We Use</h2>
      <p>
        We use Google Analytics 4 and Google AdSense. These services may process identifiers,
        device/browser metadata, and interaction data for measurement and advertising. The Google
        tag and AdSense script are present on our pages; we use{" "}
        <a
          href="https://developers.google.com/tag-platform/security/concepts/consent-mode"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Consent Mode
        </a>{" "}
        so non-essential storage defaults to denied until you make a choice. In the EEA, UK, and
        Switzerland, choices are collected through Google&apos;s European regulations (TCF) consent
        message. Elsewhere, you may use our cookie banner to grant or deny analytics and ads storage.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Consent Choices and Withdrawal</h2>
      <p>
        In the EEA/UK/Switzerland, use Google&apos;s consent dialog to accept or decline personalized
        advertising and related processing; when personalization is not allowed, Google may still
        serve limited or non-personalized ads depending on your choices and Google&apos;s settings.
        Outside those regions, you can choose &quot;Accept All&quot; or &quot;Essential Only&quot; in our cookie
        banner. Use &quot;Cookie Preferences&quot; in the footer to reopen Google&apos;s message (where
        available) or our banner. You can also block or delete cookies in your browser settings.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Data Sharing</h2>
      <p>
        We may share limited data with service providers that help operate the site, including
        Google (Analytics/AdSense) when enabled by your consent choice. We do not sell personal
        information in exchange for money.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">International Transfers</h2>
      <p>
        We are based in the United States. Information may be processed in the U.S. and other
        countries where our providers operate. Where required, transfers are subject to
        appropriate safeguards under applicable law.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Retention</h2>
      <p>
        We retain information only as long as needed for the purposes described above, legal
        requirements, dispute resolution, and service security/operations.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict
        processing of personal data, and to object to certain processing. You may also have the
        right to lodge a complaint with your local data protection authority.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Third-Party Links</h2>
      <p>
        Our site links to third-party websites. Their privacy practices are governed by their
        own policies, not this one.
      </p>

      <h2 className="font-heading text-xl font-semibold text-foreground pt-4">Contact</h2>
      <p>
        For privacy-related requests, please contact {LEGAL_ENTITY} at{" "}
        <a href="mailto:privacy@atombeacon.com" className="text-primary hover:underline">
          privacy@atombeacon.com
        </a>.
      </p>
    </div>
  </div>
);
export default Privacy;
