# Atom Beacon — Codebase & deployment review

**Scope:** Structure, TypeScript/React practices, Netlify deployment fit, Lovable.dev footprint, and maintainability.  
**Review date:** 2026-04-13  
**Stack observed:** Vite 5, React 18, React Router 6, Tailwind CSS 3, shadcn/ui (Radix), TanStack Query, Vitest, Playwright (config present).

---

## 1. Executive summary

The project is a **well-organized client-only SPA** with a clear `src/pages` + `src/components` split, consistent Tailwind styling, and thoughtful SEO touches (`index.html` meta, JSON-LD, `public/sitemap.xml`, `robots.txt`). Production builds succeed (`npm run build`).

Highest-impact gaps for Netlify and operations: **Playwright references a package that is not installed**, and **TypeScript strictness is largely disabled**. **SPA fallback** for deep links is **implemented** via `public/_redirects` (see §6.2). Branding still leaks **Lovable-hosted Open Graph images** in `index.html`. A large **shadcn/ui surface area appears unused**, increasing bundle size and maintenance noise.

---

## 2. Architecture & code structure

### Strengths

- **Routing** is centralized in `src/App.tsx` with explicit routes; nested learn routes are readable.
- **Layout** (`Layout.tsx`) owns global chrome (header, footer, cookie banner) — good separation.
- **Styling** uses CSS variables + Tailwind (`src/index.css`, `tailwind.config.ts`) with a coherent “retro” palette.
- **Static assets** under `public/` for crawler-facing files (`ads.txt`, `robots.txt`, `sitemap.xml`) is appropriate for a static host.

### Gaps

- **`ArticleTemplate.tsx` is never imported.** Learn pages (`src/pages/learn/*.tsx`) duplicate the same container, back link, icon + `h1`, and `retro-card` section pattern by hand. The template already documents planned JSON-LD and ads — adopting it would reduce drift and make learn pages easier to change in one place.
- **`@tanstack/react-query` is wired in `App.tsx` but no hooks (`useQuery`, `useMutation`, etc.) appear under `src/`.** Either plan to use it for future API-driven content or remove `QueryClientProvider` and the dependency to shrink the graph and mental overhead.
- **`package.json` `name` is still `vite_react_shadcn_ts`.** Renaming to `atom-beacon` (or similar) improves clarity in logs and tooling; it does not affect Lovable as long as the repo remains a valid Vite project.

---

## 3. TypeScript & tooling

| Topic | Current state | Recommendation |
|--------|----------------|----------------|
| **Strict mode** | `tsconfig.app.json` has `"strict": false`, `noImplicitAny: false` | Gradually enable `strict`, `noImplicitAny`, `strictNullChecks`; fix errors incrementally for fewer runtime surprises. |
| **Root `tsconfig.json`** | Very loose (`strictNullChecks: false`) | Align with app config or rely on project references only — avoid two conflicting “sources of truth.” |
| **ESLint** | `typescript-eslint` recommended + hooks; unused-vars off | Consider turning `@typescript-eslint/no-unused-vars` to `warn` to catch dead imports during refactors. |
| **Tests** | `src/test/example.test.ts` is a placeholder | Replace with a minimal render test for `App` or `Layout` once routing/SEO utilities exist. |
| **Browserslist** | Build warns that `caniuse-lite` is stale | Run `npx update-browserslist-db@latest` periodically so autoprefixer targets stay current. |

---

## 4. CSS & Tailwind

- **`tailwind.config.ts` `content` paths** include `./pages/**`, `./components/**`, `./app/**` — this repo uses `src/` only. Trimming obsolete globs avoids confusion; impact on build output is likely minimal because unused classes are purged anyway.
- **`src/index.css`:** Google Fonts are loaded via `@import` **after** `@tailwind` directives. Vite warns: *“@import must precede all other statements”*. **Fix:** move the `@import url('https://fonts.googleapis.com/...')` to the **top of the file** (before `@tailwind`), or load fonts via `<link>` in `index.html` (often preferable for caching and to avoid blocking CSS parsing).

---

## 5. UI components (shadcn / Radix)

The app shell uses **Sonner**, **Toaster** (toast stack), and **TooltipProvider** from `@/components/ui`. **No page under `src/pages/` imports shadcn primitives directly** — navigation, cookie UI, and content are mostly custom markup + Tailwind.

**Implication:** Dozens of `@radix-ui/*` dependencies and matching files under `src/components/ui/` are likely **unused by application code** (they remain as the standard shadcn “full kit”). Options:

- **Pragmatic:** Keep the kit if the team expects rapid UI expansion; accept larger `node_modules` and occasional dependency updates.
- **Lean:** Remove unused components and radix packages (or use shadcn CLI to add only what you need going forward). Run bundle analysis (`vite build --report` or `rollup-plugin-visualizer`) before/after to validate impact.

---

## 6. Netlify-specific review

Netlify works well with **Vite’s default output directory `dist`** and **`npm run build`**. There is **no `netlify.toml`** in the repository; configuration may live entirely in the Netlify UI — that is valid, but **documenting it in-repo** helps teams and CI.

### 6.1 Build settings (verify in Netlify UI or codify in `netlify.toml`)

| Setting | Typical value for this repo |
|--------|-------------------------------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | Pin with `.nvmrc` or `engines` in `package.json` so local and Netlify match (avoids “works on my machine” issues). |

References: [Netlify — Configure builds](https://docs.netlify.com/configure-builds/overview/), [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/).

### 6.2 Single Page App (SPA) routing — **addressed (2026-04-13)**

This app uses **React Router `BrowserRouter`**. Direct requests to paths like `/learn/safety` must serve **`index.html`** so the client router can run. Netlify’s default for static sites is to return **404** for unknown paths unless a **redirect rule** exists.

**Implemented:** `public/_redirects` with a rewrite rule (Vite copies `public/` into `dist/`, so the deployed site includes `dist/_redirects`):

```text
/*    /index.html   200
```

Reference: [Netlify — Redirects and rewrites](https://docs.netlify.com/routing/redirects/), [Page not found — SPA redirect](https://docs.netlify.com/resources/troubleshooting/page-not-found-error-guide/).

**Verification:** After `npm run build`, confirm `dist/_redirects` contains the rule above. On Netlify, keep **Publish directory** set to `dist` so this file is deployed.

**Residual risks / caveats:**

- If the Netlify UI defines **conflicting** redirect rules, resolve duplicates so one clear SPA fallback remains authoritative.
- If **Publish directory** is not `dist` (or build output is customized), ensure `_redirects` still lands in the published root.
- **Other environments** (e.g. some static file servers, S3 without error-document routing) do not read `_redirects`; behavior is Netlify-specific unless you add equivalent config elsewhere.

### 6.3 Headers (optional hardening)

Consider security headers via `netlify.toml` (`Content-Security-Policy`, `X-Frame-Options`, etc.) — balanced against **Google Tag Manager / AdSense / Google Fonts** requirements. Start with Netlify’s defaults and tighten incrementally.

### 6.4 Deploy previews

Branch/PR previews align with Netlify’s workflow; no code change required. See [Deploy previews](https://docs.netlify.com/deploy/deploy-overview/) and review tooling if stakeholders use the Netlify Drawer for feedback.

### 6.5 Environment variables

No server secrets are required for the current static build. If you later add **Netlify Functions** or **build-time** API keys, use Netlify’s env UI and avoid committing secrets.

---

## 7. SEO & analytics

- **Canonical and meta** in `index.html` are a solid baseline for a CSR app; crawlers that execute JS will still see route-specific content after hydration.
- **Structured data** in `index.html` uses `logo: https://atombeacon.com/placeholder.svg` — replace with a real logo asset when ready.
- **`public/sitemap.xml`** lists major routes but **does not include** `/companies` or dynamic `/companies/:slug` URLs. If those pages should be indexed, extend the sitemap or generate it at build time.
- **Third-party scripts:** `gtag.js` and AdSense are in the document head; ensure **cookie consent** (`CookieConsent.tsx`) and privacy copy stay aligned with actual tags (GA/AdSense often count as non-essential until consented — confirm with your legal/privacy policy).

---

## 8. Lovable.dev — references and how to “de-Lovable” without losing Lovable

### 8.1 Inventory of Lovable-related references

| Location | What it is |
|----------|------------|
| `README.md` | Title: “Welcome to your Lovable project”; placeholder body. |
| `index.html` | `og:image` and `twitter:image` point to `https://lovable.dev/opengraph-image-p98pqg.png`. |
| `PRE_LAUNCH_CHECKLIST.md` | Mentions replacing that OG image. |
| `package.json` | `lovable-tagger` in `devDependencies`. |
| `vite.config.ts` | Imports `componentTagger` from `lovable-tagger`; enabled only when `mode === "development"`. |
| `playwright.config.ts` | `createLovableConfig` from `lovable-agent-playwright-config/config`. |
| `playwright-fixture.ts` | Re-exports `test`, `expect` from `lovable-agent-playwright-config/fixture`. |
| `package-lock.json` | Entries for `lovable-tagger` (expected). |
| `bun.lock` | Many tarball URLs under `lovable-core-prod` registry (Bun/Lovable sandbox artifact); **not used by npm** if you standardize on `package-lock.json`. |

**Note:** `lovable-agent-playwright-config` is **not** listed in `package.json` and **`npm ls` shows it is not installed** — Playwright config as written will **fail** if someone runs `npx playwright test` without adding that dependency or replacing the config.

### 8.2 Recommendations per item

- **OG/Twitter images:** Host images under `public/` (e.g. `/og-default.png`) and set absolute URLs to `https://atombeacon.com/...` in `index.html`. Removes branding to Lovable and improves control for Netlify caching/CDN.
- **`lovable-tagger` + `vite.config.ts`:** **Keep** for Lovable IDE features if you still edit via Lovable; it does **not** run in production builds (`mode === "production"` on Netlify). To remove from open-source drops only: delete the dependency and the `componentTagger()` plugin line — Vite still works; Lovable’s component tagging in dev may be reduced (confirm in Lovable docs for your workflow).
- **README:** Replace with project-specific install/build/deploy instructions; Lovable does not require the word “Lovable” in the README.
- **Playwright:** Either add `lovable-agent-playwright-config` as a devDependency **or** replace `playwright.config.ts` with a standard `@playwright/test` config (see [Playwright docs](https://playwright.dev/docs/test-configuration)) so E2E runs without proprietary packages.
- **`bun.lock`:** If the team uses **npm** only, consider removing `bun.lock` to avoid duplicate lockfiles and confusing CI. If Lovable or a contributor relies on Bun, document which lockfile is authoritative.

---

## 9. Miscellaneous improvements

- **Duplicate lockfiles:** Both `package-lock.json` and `bun.lock` exist — pick one package manager for Netlify and local dev.
- **`dist/` folder:** Listed in `.gitignore` (correct). Ensure no committed `dist/` artifacts in branches (none observed via `git ls-files dist`).
- **Accessibility:** Footer includes “International” with an emoji; ensure contrast and screen-reader clarity match your accessibility page commitments.
- **Bundle size:** Main JS chunk ~487 KB raw (~147 KB gzip) — acceptable for a full site but worth monitoring if you trim unused UI kits.

---

## 10. Suggested priority order

1. ~~**Add Netlify SPA fallback** (`public/_redirects` or `netlify.toml`) so deep links work reliably.~~ **Done** — `public/_redirects` with `/* /index.html 200`.  
2. **Replace Lovable OG image URLs** with self-hosted assets on `atombeacon.com`.  
3. **Fix Playwright setup** (install Lovable config package **or** switch to stock Playwright config).  
4. **Move font `@import` to top of `src/index.html` or top of `index.css`** to clear the Vite/CSS warning.  
5. **Refactor learn pages to use `ArticleTemplate`** (or delete the template if you prefer not to use it).  
6. **Decide on React Query** — use or remove.  
7. **Gradually tighten TypeScript** and replace the placeholder Vitest test.

---

*This document is a review artifact only; it does not change runtime behavior by itself. In-repo fixes called out above (e.g. §6.2 SPA `_redirects`) are implemented in the codebase separately from this file.*
