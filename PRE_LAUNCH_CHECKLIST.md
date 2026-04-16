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
- [~] Google Consent Mode + AdSense on every page (required for Funding Choices / European regulations CMP); verify TCF live in EEA/UK/CH after deploy
- [x] European regulations message: published in AdSense Privacy & messaging (publisher-side); **site must still satisfy Google's technical prerequisites** (see handoff notes below)
- [x] Update Privacy Policy page with GA/AdSense, Consent Mode, regional CMP vs ROW banner, and contact `privacy@atombeacon.com`
- [x] Update Cookie Policy page with categories, Consent Mode, and link to Google's European regulations help
- [x] Rest-of-world: optional cookie banner updates Google consent via `applyConsent()`; EEA/UK/CH: banner suppressed when `__tcfapi` is present

#### GDPR implementation status (detailed handoff notes)

**Why "Published" in AdSense did not show the TCF CMP on-site (root causes — cumulative):**
1. **Missing AdSense on first paint (fixed earlier):** Google's help for European regulations messages requires **[the AdSense code on your site](https://support.google.com/adsense/answer/10960768)**. Deferring `adsbygoogle.js` until after a custom "Accept All" meant **no hook for Funding Choices** even when the message was Published.
2. **Missing `wait_for_update` on consent defaults (fixed now):** Google's [Consent Mode guide](https://developers.google.com/tag-platform/security/guides/consent) states that for **asynchronous** CMPs you should set **`wait_for_update`** with a millisecond window so the CMP can call `gtag('consent','update',…)` **before** tags proceed. Without it, measurement/ad tags can proceed out of sync with the TCF layer.
3. **Tag order:** `adsbygoogle.js` is now placed **before** `gtag/js` so the **ad-stack** (where Privacy & messaging attaches) initializes ahead of GA config.
4. **`adsbygoogle` queue:** `window.adsbygoogle = window.adsbygoogle || []` is set **before** the async AdSense script (Google's async tagging pattern) so early calls queue correctly.
5. **AdSense account / message targeting (not fixable in repo):** In Privacy & messaging, the European message must apply to **`atombeacon.com`**. Under [EU user consent FAQ](https://support.google.com/adsense/answer/11546682), if you use the IAB framework you must include **"Google Advertising Products"** as a vendor in the CMP configuration — verify in the AdSense message **Settings**, not only "Published" status.

**Architecture after fix (intended behavior):**
- `index.html` loads, in order:
  1. Inline `gtag('consent','default', …)` with **all ad/analytics-related types denied** plus **`wait_for_update: 3000`** (Consent Mode + time for async CMP to call `consent update`).
  2. `window.adsbygoogle = …` queue initializer, then **AdSense** `adsbygoogle.js` (before `gtag/js`) so Privacy & messaging can attach to the ad stack.
  3. `gtag.js` (GA4) + `gtag('config', …)` — measurement respects consent / wait window (see [Consent mode reference](https://support.google.com/analytics/answer/13802165)).
- **Automated contract test (no browser, no deploy):** `src/index-html.consent.test.ts` asserts load order, `wait_for_update`, and publisher ID. Run: `npm test -- src/index-html.consent.test.ts` (or `npx vitest run src/index-html.consent.test.ts`).
- `<meta name="referrer" content="strict-origin-when-cross-origin">` added per [European regulations message](https://support.google.com/adsense/answer/10960768) guidance on referrer policy eligibility.
- `src/lib/consent.ts`:
  - **`initializeConsentSystem()`** (from `src/main.tsx`): only reapplies **stored** ROW choice from `localStorage` (`atom-beacon-cookie-consent`) via `gtag('consent','update',…)`. Does **not** re-set defaults (those live in `index.html`).
  - **`applyConsent()`**: used by the ROW banner only; persists choice + `consent update`.
  - **`openCookieOrCmpPreferences()`**: calls `window.googlefc.showRevocationMessage()` when available ([Funding Choices API](https://developers.google.com/funding-choices/fc-api-docs#googlefc-showRevocationMessage)); otherwise dispatches the event that opens the local banner.
  - **`CookieConsent`**: starts a short timer to show the ROW banner, but **polls for `__tcfapi`**; if Google's CMP appears, the local banner is **cancelled or dismissed** (avoids double prompts in EEA/UK/CH).
- `src/components/CookieConsent.tsx`: ROW-only banner (after TCF check); copy explains regional split.
- `src/components/Layout.tsx`: footer **Cookie Preferences** → `openCookieOrCmpPreferences()`.

**Files to read for a future agent:**
- `index.html` — Consent Mode defaults + GA4 + AdSense load order.
- `src/lib/consent.ts` — consent updates, TCF wait, Funding Choices reopen.
- `src/main.tsx` — `initializeConsentSystem()`.
- `src/components/CookieConsent.tsx` — ROW vs EEA behavior.
- `src/components/Layout.tsx` — footer preferences.
- `src/pages/Privacy.tsx`, `src/pages/Cookies.tsx` — legal copy aligned to this model.

**Non-personalized ads when personalization is denied:**
- Configured in **AdSense → Privacy & messaging → European regulations** (and related account ad serving / privacy settings), not only in front-end code.
- After deploy, confirm in an EEA VPN session: deny personalization → expect **non-personalized or limited ads** per Google's behavior for that choice; grant → personalized eligible.

#### GDPR remaining actions (execution order)

1. **Deploy** the commit that restores AdSense + Consent defaults in `index.html` (until live, EEA CMP may still be broken).
2. In **AdSense → Privacy & messaging**, keep European regulations message **Published** for `atombeacon.com` (already done).
3. **Verify in EEA/UK/CH** (VPN):
   - Within a few seconds of load, `typeof __tcfapi === "function"` in DevTools console.
   - Network tab: requests to Funding Choices / Google messaging hosts (e.g. `fundingchoicesmessages.google.com`) may appear when the CMP runs.
4. **Test Google's forced preview** (works only with AdSense on page): add `?fc=alwaysshow&fctype=gdpr` to a URL ([docs](https://support.google.com/adsense/answer/10924669)).
5. **Cookie Preferences** link: should call `googlefc.showRevocationMessage()` when loaded; if nothing happens, CMP not initialized — recheck AdSense on page and domain association.
6. **ROW regression:** with VPN off, local banner should still appear after ~1s (if no `__tcfapi`) and **Accept All** / **Essential Only** should still update consent.
7. Confirm **European regulations** "Do not consent" / non-personalized paths in the AdSense UI match product intent; re-test ads behavior.

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

- [x] CMP decision: **Google AdSense Privacy & messaging** (European regulations / Funding Choices) — *publisher confirmed Published*.
- [ ] After next **production deploy** of this repo: confirm EEA/UK/CH session shows **`__tcfapi`** and Google's consent UI (see steps above).
- [ ] Confirm in AdSense UI that when users **deny personalization**, behavior matches intent (**non-personalized / limited ads** as configured).
- [x] Public privacy contact: **`privacy@atombeacon.com`** (in `Privacy.tsx` after deploy).
- [ ] Legal review sign-off on updated Privacy/Cookie copy (Consent Mode + dual-path consent).

#### Live validation snapshot (post-deploy check)

**Last validation:** 2026-04-16 (identified missing AdSense-on-page as root cause); **re-validate after deploying `index.html` fix**.

**Pre-fix live observation (historical):**
- Homepage HTML had **no** static AdSense/GA in `<head>`; scripts were injected only after ROW "Accept All" → **European regulations CMP could not run** despite "Published" in AdSense.

**Post-fix expected on `https://atombeacon.com` (verify after deploy):**
- View page source: `<head>` contains inline **Consent Mode default**, **`gtag/js`**, and **`adsbygoogle.js`** (same publisher ID as `ads.txt`).
- EEA VPN: `typeof __tcfapi === "function"` within a few seconds; consent dialog appears without requiring ROW banner first.
- Optional: `https://atombeacon.com/?fc=alwaysshow&fctype=gdpr` forces GDPR message preview ([AdSense help](https://support.google.com/adsense/answer/10924669)).

**Owner-provided privacy contact (approved):**
- `privacy@atombeacon.com` (use in policy/legal pages and privacy requests handling).

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
- [ ] Set up Google Analytics 4 (Consent Mode: tags present; non-essential storage denied until consent — verify reporting matches expectations)
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
- **Repo (2026-04-16+):** `index.html` includes GA4 + AdSense with **Google Consent Mode defaults (denied)** before any Google URL loads; European regulations CMP requires AdSense on-page. See **GDPR** section above for EEA verification steps. `react-helmet` / per-route meta still absent in `src/`.

**Earlier snapshot (2026-04-13, first pass):** OG image was404 on live before the later deploy; that gap is **closed** as of re-check.

- All `@todo` markers in the codebase can be found by searching for `@todo` across `src/` and `public/`
- The AdSense integration uses Auto Ads — one script tag handles all placement. The `AdSlot` component provides reserved positions that Auto Ads can use as hints, but Google may also place ads in other suitable locations.
- The `ArticleTemplate` component (`src/components/ArticleTemplate.tsx`) standardizes page layout with consistent ad slot placement (after-intro and mid-article).
- Structured data currently includes Organization, WebSite, and BreadcrumbList schemas in index.html. Per-page Article and FAQPage schemas should be added as content matures.
