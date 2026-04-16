# Atom Beacon — Pre-Launch Checklist & Roadmap

**Last updated:** April 2026  
**Purpose:** Items that should be addressed before going live, plus future improvements.

---

## 🔴 CRITICAL — Must Complete Before Launch

### AdSense Setup
- [x] Replace `ca-pub-XXXXXXXXXXXXXXXX` in `index.html` with your real Google AdSense publisher ID *(repo: `ca-pub-4575124953371835`)*
- [x] Replace `ca-pub-XXXXXXXXXXXXXXXX` in `public/ads.txt` with your real publisher ID *(matches `pub-4575124953371835`)*
- [x] Replace placeholder `data-ad-client` and `data-ad-slot` values in `src/components/AdSlot.tsx` *(no manual ad units — Auto Ads + reserved `AdSlot` regions only; no placeholder client/slot attrs)*
- [ ] Apply for AdSense approval (requires live site with real content — may need to launch without ads first, then add)
- [ ] Enable Auto Ads in AdSense dashboard after approval
- [ ] Test that ads render correctly on mobile and desktop
- [x] Verify ads.txt is accessible at `https://atombeacon.com/ads.txt` *(HTTP 200; body matches repo — re-checked 2026-04-13)*

### GDPR / Privacy Compliance
- [~] Cookie consent system now gates GA4/AdSense loading and writes Google consent states; still need a Google-certified CMP for EEA/UK/Switzerland personalized ads
- [ ] Recommended CMPs: Cookiebot, OneTrust, Quantcast Choice, or Google's own Funding Choices
- [x] Update Privacy Policy page with specific Google Analytics/AdSense disclosures and consent withdrawal path
- [x] Update Cookie Policy page with explicit analytics/advertising cookie categories and examples
- [x] Ensure cookie consent blocks GA4 and AdSense script loading until "Accept All" is granted

#### GDPR implementation status (detailed handoff notes)

**Current implementation in repo (as of Apr 2026):**
- Added `src/lib/consent.ts` as a centralized consent controller.
- Consent state is stored under localStorage key `atom-beacon-cookie-consent`.
- Consent choices:
  - `all` -> loads Google Analytics + AdSense scripts and updates Google consent state to granted.
  - `essential` -> keeps non-essential consent denied and does not load GA/AdSense scripts.
- Google script loading has been removed from `index.html` head and is now dynamic after consent.
- App startup now initializes consent defaults in `src/main.tsx` via `initializeConsentSystem()`.
- Cookie banner (`src/components/CookieConsent.tsx`) now calls consent APIs rather than just writing raw localStorage.
- Footer includes a "Cookie Preferences" control (`src/components/Layout.tsx`) to reopen consent UI.

**Files changed for GDPR baseline:**
- `src/lib/consent.ts` (new) - consent state, Google consent updates, script injection.
- `src/main.tsx` - consent initialization on app boot.
- `src/components/CookieConsent.tsx` - consent wiring + updated banner copy.
- `src/components/Layout.tsx` - persistent "Cookie Preferences" reopen control.
- `index.html` - removed unconditional GA4 and AdSense script tags.
- `src/pages/Privacy.tsx` - expanded GA/AdSense, legal basis, rights, transfers, withdrawal language.
- `src/pages/Cookies.tsx` - expanded cookie categories and Google cookie examples.

**What is now operational:**
- The banner is connected to behavior (no longer cosmetic).
- GA4 and AdSense scripts are blocked until user grants "Accept All".
- Google consent mode state is written/updated in client code.
- Users have a persistent path to revisit consent settings from the footer.
- Policy pages now align with implemented site behavior (consent-gated analytics/ads).

**What is still NOT complete for full Google ad compliance in EEA/UK/CH:**
- A Google-certified TCF CMP has NOT been configured yet.
- Without certified CMP integration, personalized ads eligibility/compliance for EEA/UK/CH remains incomplete.
- Geo-specific handling and full TCF consent-string handling are not yet implemented via CMP.

**Risk callout (must understand):**
- Current implementation is a strong technical baseline but is not the final compliance endpoint for AdSense personalized ads in EEA/UK/Switzerland.
- Google policy requires a certified CMP integrated with IAB TCF for those regions.

#### GDPR remaining actions (execution order)

1. Pick CMP path (recommended: Google Funding Choices for fastest Google-stack path).
2. Configure and publish certified CMP message(s) for EEA/UK/Switzerland traffic.
3. Ensure CMP is live on production domain `atombeacon.com`.
4. Validate consent behavior:
   - No GA/AdSense before opt-in.
   - Consent updates after user choice.
   - Proper behavior for "essential only".
5. Confirm policy wording still matches final CMP behavior/copy exactly.
6. Re-test production with regional traffic simulation and browser tag debugging.

#### Exact Google locations user must visit (where to get required setup details)

**A) Google AdSense (primary)**
- Go to: [https://www.google.com/adsense](https://www.google.com/adsense)
- In AdSense left nav, open **Privacy & messaging**.
- Create/configure a **European regulations message** (this is Google's CMP path/Funding Choices style flow for web publishers).
- During setup you will choose behavior/options and publish to your site.
- This section is where account-specific message configuration lives; if Google provides any script/config IDs, copy them from here.

**B) Google AdSense Help for certified CMP policy requirement**
- Publisher requirement details: [https://support.google.com/adsense/answer/13554116](https://support.google.com/adsense/answer/13554116)
- CMP requirement details: [https://support.google.com/adsense/answer/13554020](https://support.google.com/adsense/answer/13554020)
- Use these to confirm the certified CMP/TCF requirement for EEA/UK/Switzerland.

**C) Google Analytics (verification)**
- Go to: [https://analytics.google.com](https://analytics.google.com)
- Verify your GA4 property (`G-4V1LPN0KS0`) receives data only after consent in your expected mode.
- Review consent/collection behavior with Google's consent mode docs:
  - [https://support.google.com/analytics/answer/13802165](https://support.google.com/analytics/answer/13802165)
  - [https://developers.google.com/tag-platform/security/concepts/consent-mode](https://developers.google.com/tag-platform/security/concepts/consent-mode)

#### Information needed from site owner (to finish final integration)

- CMP decision:
  - "Use Google Funding Choices / AdSense Privacy & messaging" OR
  - "Use third-party certified CMP (name: ___)".
- Any account-specific IDs/snippets generated in AdSense Privacy & messaging setup (if provided).
- Final ad behavior decision for EEA/UK/CH:
  - personalized ads when consented?
  - non-personalized ads fallback when denied?
- Public privacy contact channel to display in policy text (email/contact page URL).
- Confirmation that legal review approves current policy wording and consent UX text.

### Domain & Hosting
- [x] Verify `atombeacon.com` domain is registered and DNS configured for hosting
- [x] Confirm production URLs: `<link rel="canonical">` and JSON-LD in `index.html` use `https://atombeacon.com`
- [x] Confirm `public/sitemap.xml` and `public/robots.txt` reference `https://atombeacon.com`
- [x] Set up HTTPS (mandatory for AdSense and SEO) *(live: HTTPS + HSTS — re-checked 2026-04-13)*
- [ ] Publish the site and verify all routes load correctly *(repo: `public/_redirects` → `/* /index.html 200` copied to `dist/` on build; **redeploy** Netlify and re-test **direct** `/news`, `/blog`, `/privacy`, `/learn/reactor-types` — should return **200** with app shell, not Netlify “Page not found”)*

### SEO — Core Setup
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Submit sitemap.xml to Bing Webmaster Tools
- [ ] Verify structured data using Google's Rich Results Test (https://search.google.com/test/rich-results)
- [x] Replace placeholder OG image (`lovable.dev/opengraph-image-p98pqg.png`) with a branded Atom Beacon image *(repo + live: `https://atombeacon.com/og_image1.jpg` returns **200** `image/jpeg` — re-checked 2026-04-13)*
- [ ] Add unique `<title>` and `<meta description>` per page (currently only the homepage has them) *(confirmed: no `react-helmet` / per-route meta in `src/` — SPA still uses `index.html` defaults for all routes)*
- [ ] Test pages with Google's PageSpeed Insights

### Content Accuracy
- [ ] Verify all company profile information on the Business page is current (HQ, focus, recent news)
- [ ] Verify all external links work (company websites, news links)
- [ ] Review Learn section content for factual accuracy — key areas flagged with `@todo`:
  - Reactor Types page: Gen IV details, fusion progress section
  - Environment page: mining environmental impacts, biodiversity section
  - Fuel & Waste page: advanced fuel cycles, recycling details
  *(grep in `src/` still finds these `@todo` markers — not cleared)*
- [ ] Proofread all pages for spelling, grammar, and tone consistency
- [ ] Ensure the "Disclaimer" in the footer is legally reviewed

### Legal
- [ ] Have a lawyer review Privacy Policy, Terms of Use, and Cookie Policy
- [x] Add a clear editorial independence disclaimer on the Blog page *(Blog footer: opinions are authors’; managed by site operator — not a formal legal “independence” statement)*
- [ ] Verify accessibility compliance (WCAG 2.1 AA minimum) *(Accessibility page states WCAG 2.1 AA intent; no audit evidence in repo)*

---

## 🟡 IMPORTANT — Should Address Soon After Launch

### Content Gaps (flagged with @todo in code)
- [ ] Complete remaining Business page company profiles:
  - Korea Hydro & Nuclear Power (KHNP)
  - Rosatom
  - China National Nuclear Corporation (CNNC)
  - EDF (Électricité de France)
  - Commonwealth Fusion Systems
  - General Atomics
- [ ] Add a "Fusion Pioneers" subsection to the Business page
- [ ] Expand Learn section with deeper content on:
  - Gen IV reactor designs (detailed comparison)
  - Fusion energy progress and timeline
  - Nuclear mining environmental impacts
  - Nuclear economics (LCOE comparisons, financing models)
  - Nuclear history timeline
- [ ] Add real blog posts (currently placeholder structure)
- [ ] Kids Zone — verify age-appropriate language with educators; add interactive elements

### News Feed Reliability
- [ ] The news feed relies on rss2json.com (free tier) — monitor for rate limits *(implementation uses rss2json — see `src/pages/News.tsx`)*
- [ ] Consider a server-side proxy or edge function to fetch news (eliminates CORS issues entirely)
- [ ] Add caching to avoid redundant fetches on every page load
- [ ] Consider NewsAPI.org paid plan for better article metadata

### SEO — Ongoing
- [ ] Add per-page JSON-LD Article schema to Learn sub-pages and Blog posts
- [ ] Add FAQPage schema to relevant Learn pages
- [ ] Add BreadcrumbList schema dynamically per page (not just homepage)
- [ ] Implement dynamic meta tags per route (react-helmet-async or similar)
- [ ] Add internal linking strategy between related Learn topics
- [ ] Monitor Core Web Vitals in Search Console

### ArticleTemplate Adoption
- [ ] Migrate existing Learn sub-pages to use `ArticleTemplate` component for consistency
- [ ] Migrate Blog posts to use `ArticleTemplate` when blog CMS is implemented
- [ ] Add reading-time estimates to article headers
- [ ] Add social share buttons (Twitter/X, LinkedIn, Facebook)

---

### Company Profiles / Investor Section
- [ ] Stock data: Yahoo Finance unofficial API may be blocked by CORS in production — set up a serverless edge function proxy or switch to Financial Modeling Prep / Alpha Vantage free tier
- [ ] Add SEC EDGAR filing links for U.S.-listed companies
- [ ] Add structured funding timeline visualization for private companies
- [ ] Add analyst ratings/consensus links where available
- [ ] Add insider transaction data links
- [ ] Verify all company funding amounts, valuations, and ticker symbols are current
- [ ] Add competitor comparison tables per company profile
- [ ] Review and update all company news links — current links point to newsroom landing pages, not specific articles

## 🟢 NICE TO HAVE — Future Enhancements

### Features
- [ ] Search functionality across all content
- [ ] Newsletter signup (email collection with double opt-in)
- [ ] Contact form
- [ ] Dark mode toggle (CSS variables already support dark mode)
- [ ] Glossary page (nuclear energy terminology: fission, fusion, HALEU, SMR, TRISO, MOX, etc.)
- [ ] Interactive nuclear timeline
- [ ] Business page: geographic filtering, pure-play vs conglomerate toggle
- [ ] User comments on blog posts (consider Disqus or similar)
- [ ] RSS feed for blog content
- [ ] Multi-language support (starting with Spanish, French, Japanese)

### Performance
- [ ] Implement code splitting / lazy loading for routes
- [ ] Add image optimization pipeline (WebP/AVIF)
- [ ] Consider SSR or pre-rendering for SEO-critical pages
- [ ] Add service worker for offline reading of Learn content

### Analytics
- [ ] Set up Google Analytics 4 (with consent-gated loading)
- [ ] Set up conversion tracking for newsletter signups
- [ ] Monitor ad revenue vs user experience metrics

### Design
- [ ] Create branded OG/social images for each major page
- [ ] Design a proper logo (currently using Lucide Atom icon)
- [ ] Add hero illustrations for Learn section pages
- [ ] Animate the retro-futuristic theme elements (atomic orbitals, radiation symbols)

---

## 📝 Notes

### Automated validation log

**Re-evaluation (2026-04-13, after deploy sync):**

- **Live `https://atombeacon.com`:** `/` **200**; `/ads.txt` **200**; `/og_image1.jpg` **200** (`image/jpeg`). HTTPS + HSTS unchanged.
- **SPA / deep links:** **In-repo fix:** `public/_redirects` with `/* /index.html 200` (see `CODEBASE_REVIEW.md` §6.2). **Live:** after the next production deploy, re-fetch those paths; if they still **404**, confirm Netlify **Publish directory** is `dist` and that no conflicting redirect rules exist in the Netlify UI.
- **Repo:** AdSense ID + `ads.txt` unchanged; no `react-helmet` / per-route meta in `src/`; GDPR/CMP/AdSense-disclosure items still open. `index.html` includes GA4 (`gtag`) without consent gating — “Analytics → GA4 (consent-gated)” checklist row still applies.

**Earlier snapshot (2026-04-13, first pass):** OG image was404 on live before the later deploy; that gap is **closed** as of re-check.

- All `@todo` markers in the codebase can be found by searching for `@todo` across `src/` and `public/`
- The AdSense integration uses Auto Ads — one script tag handles all placement. The `AdSlot` component provides reserved positions that Auto Ads can use as hints, but Google may also place ads in other suitable locations.
- The `ArticleTemplate` component (`src/components/ArticleTemplate.tsx`) standardizes page layout with consistent ad slot placement (after-intro and mid-article).
- Structured data currently includes Organization, WebSite, and BreadcrumbList schemas in index.html. Per-page Article and FAQPage schemas should be added as content matures.
