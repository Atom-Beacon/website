# Atom Beacon — Pre-Launch Checklist & Roadmap

**Last updated:** April 2026  
**Purpose:** Items that should be addressed before going live, plus future improvements.

---

## 🔴 CRITICAL — Must Complete Before Launch

### AdSense Setup
- [ ] Replace `ca-pub-XXXXXXXXXXXXXXXX` in `index.html` with your real Google AdSense publisher ID
- [ ] Replace `ca-pub-XXXXXXXXXXXXXXXX` in `public/ads.txt` with your real publisher ID
- [ ] Replace placeholder `data-ad-client` and `data-ad-slot` values in `src/components/AdSlot.tsx`
- [ ] Apply for AdSense approval (requires live site with real content — may need to launch without ads first, then add)
- [ ] Enable Auto Ads in AdSense dashboard after approval
- [ ] Test that ads render correctly on mobile and desktop
- [ ] Verify ads.txt is accessible at `https://atombeacon.dev/ads.txt`

### GDPR / Privacy Compliance
- [ ] Cookie consent banner currently stores consent in localStorage — consider integrating a Google-certified Consent Management Platform (CMP) for EEA/UK/Switzerland traffic (required for personalized AdSense ads)
- [ ] Recommended CMPs: Cookiebot, OneTrust, Quantcast Choice, or Google's own Funding Choices
- [ ] Update Privacy Policy page with specific AdSense data collection disclosures
- [ ] Update Cookie Policy page to list specific Google advertising cookies
- [ ] Ensure cookie consent banner blocks AdSense script until consent is granted (required by GDPR)

### Domain & Hosting
- [ ] Verify `atombeacon.dev` domain is registered and configured
- [ ] Update `<link rel="canonical">` in index.html if using a different domain
- [ ] Update all sitemap.xml URLs if domain differs from `atombeacon.dev`
- [ ] Set up HTTPS (mandatory for AdSense and SEO)
- [ ] Publish the site and verify all routes load correctly

### SEO — Core Setup
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Submit sitemap.xml to Bing Webmaster Tools
- [ ] Verify structured data using Google's Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Replace placeholder OG image (`lovable.dev/opengraph-image-p98pqg.png`) with a branded Atom Beacon image
- [ ] Add unique `<title>` and `<meta description>` per page (currently only the homepage has them)
- [ ] Test pages with Google's PageSpeed Insights

### Content Accuracy
- [ ] Verify all company profile information on the Business page is current (HQ, focus, recent news)
- [ ] Verify all external links work (company websites, news links)
- [ ] Review Learn section content for factual accuracy — key areas flagged with `@todo`:
  - Reactor Types page: Gen IV details, fusion progress section
  - Environment page: mining environmental impacts, biodiversity section
  - Fuel & Waste page: advanced fuel cycles, recycling details
- [ ] Proofread all pages for spelling, grammar, and tone consistency
- [ ] Ensure the "Disclaimer" in the footer is legally reviewed

### Legal
- [ ] Have a lawyer review Privacy Policy, Terms of Use, and Cookie Policy
- [ ] Add a clear editorial independence disclaimer on the Blog page
- [ ] Verify accessibility compliance (WCAG 2.1 AA minimum)

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
- [ ] The news feed relies on rss2json.com (free tier) — monitor for rate limits
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

- All `@todo` markers in the codebase can be found by searching for `@todo` across `src/` and `public/`
- The AdSense integration uses Auto Ads — one script tag handles all placement. The `AdSlot` component provides reserved positions that Auto Ads can use as hints, but Google may also place ads in other suitable locations.
- The `ArticleTemplate` component (`src/components/ArticleTemplate.tsx`) standardizes page layout with consistent ad slot placement (after-intro and mid-article).
- Structured data currently includes Organization, WebSite, and BreadcrumbList schemas in index.html. Per-page Article and FAQPage schemas should be added as content matures.
