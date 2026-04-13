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
- [x] Verify ads.txt is accessible at `https://atombeacon.com/ads.txt` *(HTTP 200; body matches repo — checked 2026-04-13)*

### GDPR / Privacy Compliance
- [ ] Cookie consent banner currently stores consent in localStorage — consider integrating a Google-certified Consent Management Platform (CMP) for EEA/UK/Switzerland traffic (required for personalized AdSense ads)
- [ ] Recommended CMPs: Cookiebot, OneTrust, Quantcast Choice, or Google's own Funding Choices
- [ ] Update Privacy Policy page with specific AdSense data collection disclosures
- [ ] Update Cookie Policy page to list specific Google advertising cookies
- [ ] Ensure cookie consent banner blocks AdSense script until consent is granted (required by GDPR)

### Domain & Hosting
- [ ] Verify `atombeacon.com` domain is registered and DNS configured for hosting
- [x] Confirm production URLs: `<link rel="canonical">` and JSON-LD in `index.html` use `https://atombeacon.com`
- [x] Confirm `public/sitemap.xml` and `public/robots.txt` reference `https://atombeacon.com`
- [x] Set up HTTPS (mandatory for AdSense and SEO) *(live responses use HTTPS + `strict-transport-security` — checked 2026-04-13)*
- [ ] Publish the site and verify all routes load correctly *(production returns **404** on direct URLs like `/news`, `/blog` — missing SPA fallback / `_redirects`; `npm run build` succeeds locally)*

### SEO — Core Setup
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Submit sitemap.xml to Bing Webmaster Tools
- [ ] Verify structured data using Google's Rich Results Test (https://search.google.com/test/rich-results)
- [x] Replace placeholder OG image (`lovable.dev/opengraph-image-p98pqg.png`) with a branded Atom Beacon image *(repo: `og:image` → `https://atombeacon.com/og_image1.jpg`, asset `public/og_image1.jpg`; **deployed site returned 404 for that URL** at last check — redeploy needed)*
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

### Automated validation log (2026-04-13)

- **Repo / build:** `npm run build` succeeds; AdSense client ID and `ads.txt` use real publisher `4575124953371835` (not placeholders). `AdSlot.tsx` uses Auto Ads–style reserved regions only.
- **Live (https://atombeacon.com):** `ads.txt` OK; HTTPS/HSTS OK; **`/news`, `/blog`, `/privacy`, `/learn/reactor-types` return 404** on direct fetch — add Netlify/Vite SPA rewrite (`/*` → `/index.html`) or equivalent before claiming “all routes load.” **`/og_image1.jpg` 404** on live while present in `public/` — redeploy.
- **GDPR / ads:** AdSense script loads in `index.html` unconditionally; cookie banner does not gate it. Privacy/Cookie pages do not yet list AdSense-specific disclosures.
- **Per-route SEO:** No per-page `<title>` / meta in app code; checklist item remains open.

- All `@todo` markers in the codebase can be found by searching for `@todo` across `src/` and `public/`
- The AdSense integration uses Auto Ads — one script tag handles all placement. The `AdSlot` component provides reserved positions that Auto Ads can use as hints, but Google may also place ads in other suitable locations.
- The `ArticleTemplate` component (`src/components/ArticleTemplate.tsx`) standardizes page layout with consistent ad slot placement (after-intro and mid-article).
- Structured data currently includes Organization, WebSite, and BreadcrumbList schemas in index.html. Per-page Article and FAQPage schemas should be added as content matures.
