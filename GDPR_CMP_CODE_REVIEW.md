# GDPR / TCF CMP & Google Tags — Code Review

**Reviewer:** senior audit (nit-picky)  
**Scope:** Consent Mode, AdSense bootstrap, Funding Choices / TCF interaction, ROW fallback banner, policy copy alignment, tests and docs.  
**Date:** April 2026  

This document complements `PRE_LAUNCH_CHECKLIST.md` and `CODEBASE_REVIEW.md` with a **deeper, implementation-level** pass focused on why the Google-side CMP can still misbehave or feel “broken” even when `index.html` order is correct.

---

## Executive summary

The **static bootstrap in `index.html`** (Consent Mode defaults with `wait_for_update`, AdSense before `gtag.js`, publisher client present) is **directionally correct** and matches what Google documents for European regulations messages and async CMPs. The **Vitest contract** in `src/index-html.consent.test.ts` is valuable regression protection.

Remaining risks cluster around **(1)** timing and **who wins** between `initializeConsentSystem()` and the async CMP, **(2)** **reopening** or surfacing Google’s UI via the footer without `googlefc` being ready, **(3)** **Consent Mode completeness** vs marketing copy (“Accept all”), and **(4)** **documentation drift** vs the actual14s fallback delay.

---

## Critical / high — GDPR & CMP behavior

### H1. `initializeConsentSystem()` replays `essential` without knowing if the user is under TCF

**Where:** `src/lib/consent.ts` (`initializeConsentSystem`), invoked synchronously from `src/main.tsx` before React paints.

**Issue:** Any visitor with `localStorage` key `atom-beacon-cookie-consent` set to `essential` gets an immediate `gtag("consent", "update", …)` with non-essential storage denied. That is correct for a **rest-of-world** user who used your banner. It is **risky** for someone who:

- previously used the site outside the EEA and stored `essential`, then is evaluated under the **EEA/UK/CH** message, or  
- has stale storage from testing.

Google’s CMP may apply its own `consent` update **asynchronously** after your replay. Depending on load order and tag behavior, you can get **flicker, contradictory signals, or difficulty reproducing Funding Choices** until storage is cleared.

**Direction:** Gate localStorage replay on **absence of TCF** (e.g. defer until after a short window if `__tcfapi` never appears), or clear / namespace storage by regulatory context (heavier). At minimum, document that **clearing site data** is part of EEA validation when switching regions.

---

### H2. “Cookie Preferences” / CMP reopen path is fragile vs Google’s own guidance

**Where:** `openCookieOrCmpPreferences()` in `src/lib/consent.ts`.

**Issue:** The code only invokes `googlefc.showRevocationMessage` when that property is already a function. Google’s [Funding Choices API docs](https://developers.google.com/funding-choices/fc-api-docs) state that if `googlefc` is **not loaded yet**, calling the link has **no effect**, and recommend gating UI on **`CONSENT_API_READY`** (via `googlefc.callbackQueue`) or similar.

There is **no** `callbackQueue` bootstrap in `index.html` (optional pattern), and **no** fallback to TCF’s UI entrypoints when `__tcfapi` exists but `showRevocationMessage` is not yet callable.

**Impact:** Footer “Cookie Preferences” may **silently do nothing** briefly after load, or fall through to the **ROW** `CookieConsent` banner in situations where the **EEA** message should own the experience — undermining trust and policy copy (“reopen Google’s consent options”).

**Direction:** Align with Google’s snippet patterns: initialize `window.googlefc = window.googlefc || {}`, `callbackQueue`, push `CONSENT_API_READY`, then enable the footer action (or call `showRevocationMessage` from that ready state). Consider a TCF-level fallback (e.g. `__tcfapi` “display consent UI” patterns where supported) **only** after verifying against your exact AdSense message type and IAB version.

---

### H3. `showRevocationMessage` semantics vs “preferences”

**Fact (from Google):** `googlefc.showRevocationMessage()` **clears the consent record** and **reloads** the `googlefc` script to show the applicable message.

**Issue:** That is appropriate for **withdrawal / change choice**, but it is a **heavy** UX (reload). Legal/footer copy should not imply a lightweight “settings panel” if the user experiences a full consent reset flow. Not strictly a code bug, but a **product/legal** alignment point.

---

## Medium — Consent Mode & tag configuration

### M1. `personalization_storage` stays `"denied"` even when the user clicks “Accept all optional”

**Where:** `toConsentState()` in `src/lib/consent.ts`.

**Issue:** For `level === "all"`, you grant `ad_storage`, `analytics_storage`, `ad_user_data`, and `ad_personalization`, but **`personalization_storage` remains `"denied"`** (while default in `index.html` also denies it).

**Impact:** Under Google’s Consent Mode model, that can **omit** consent for some personalization-related storage that is **not** strictly the same as `ad_personalization`. Your banner text says users may allow **all optional** cookies; policy text lists analytics and advertising. This may be **intentional minimization** — if so, **rename the button** (e.g. “Accept analytics & ads”) to avoid over-claiming.

---

### M2. `gtag("config", "G-4V1LPN0KS0")` has no explicit consent-related config flags

**Where:** `index.html`.

**Issue:** Relying entirely on defaults + CMP updates is valid. Some implementations add parameters such as `ads_data_redaction` or region-specific behavior on the **config** call for clearer behavior when `ad_storage` is denied.

**Impact:** Usually **low** if defaults and CMP are correct; worth a **parity check** against [Consent mode for GA4](https://support.google.com/analytics/answer/13802165) and your reporting expectations (e.g. cookieless pings vs full hits).

---

### M3. `wait_for_update: 3000` may be tight on slow networks

**Where:** `index.html`.

**Issue:** 3000 ms is a common starting point; on slow devices or blocking extensions, the CMP might occasionally miss the window.

**Impact:** Intermittent measurement or consent application glitches.

**Direction:** Consider **500–2000 ms** tuning only with **real-world** EEA testing; document the tradeoff (longer wait = later tags).

---

## Medium — ROW fallback banner (`CookieConsent.tsx`)

### M4. 14 second delay is long for non-EEA first-time visitors if CMP never loads

**Where:** `FALLBACK_SHOW_AFTER_MS = 14_000`.

**Issue:** If `__tcfapi` never appears (ROW), a new user with no stored consent sees **no** banner for 14 seconds, while tags are already loading with **denied** defaults (good legally, odd UX).

**Impact:** Not a GDPR violation by itself; may hurt transparency **perception** outside EEA.

---

### M5. TCF detection is only `typeof __tcfapi === "function"`

**Issue:** Stubs and iframes can expose `__tcfapi` before the CMP is fully “ready.” You already poll; this is mostly **fine**.

**Nit:** Some integrations also check for a **functional** response from `getTCData` / event listener; only needed if you see false positives in the wild.

---

### M6. Stored consent short-circuits the TCF polling effect

**Where:** `useEffect` in `CookieConsent.tsx` — `if (readStoredConsent()) return`.

**Issue:** If `localStorage` has **any** value, you never run the “hide fallback when CMP appears” logic in that effect. The banner is hidden unless opened via the footer event — acceptable. Combined with **H1**, a cross-region storage scenario can still feel wrong.

---

## Lower severity — copy, SEO, and consistency

### L1. Policy pages vs implementation

- **Cookies.tsx / Privacy.tsx** describe dual paths (EEA TCF vs ROW banner) in a way that **mostly** matches code.
- **Gap:** They promise footer access to Google’s options **when available**; implementation may show ROW banner if `googlefc` is not ready (**H2**).

### L2. `PRE_LAUNCH_CHECKLIST.md` ROW timing typo

- Checklist mentions **~1s** for ROW banner in one place; code uses **14s**. This will confuse anyone debugging “banner didn’t show.”

### L3. Structured data / canonical

- **index.html** `canonical` is fixed to `https://atombeacon.com` for **all** routes. For a SPA, that can be **SEO-noisy** (every deep link shares homepage canonical). Not GDPR-related; flagging as general quality.

### L4. Publisher / measurement IDs in repo

- `G-4V1LPN0KS0` and `ca-pub-4575124953371835` are **expected** in source for this setup; ensure **restricted** actions (e.g. AdSense account changes) stay in Google UI, not in git.

---

## Testing & observability

### T1. Good coverage

- `src/index-html.consent.test.ts` — strong **order** and **presence** checks.
- `src/lib/consent.test.ts` — correctly guards against replaying **accept-all** and `fc=alwaysshow`.

### T2. Gaps

- No test for **`openCookieOrCmpPreferences`** (googlefc present vs absent).
- No integration / Playwright scenario for **EEA** (VPN) asserting `__tcfapi` and **no** ROW banner, or footer reopen.
- No test that **`personalization_storage`** matches product intent for `"all"`.

---

## Trivial / quick fixes (low risk)

| ID | Item | Action |
|----|------|--------|
| Q1 | PRE_LAUNCH ROW delay says ~1s | Update to **~14s** (or change constant to match desired UX and then update doc once). |
| Q2 | Comment typo in `CookieConsent.tsx` | “A1–2s” → **“A1–2s”** or rephrase (historical note vs current 14s). |
| Q3 | `openCookieOrCmpPreferences` | Add **early** `window.googlefc = window.googlefc \|\| {}` only if you add `callbackQueue` pattern (slightly more than trivial if done fully). |
| Q4 | Button label vs `personalization_storage` | Rename “Accept all optional” if you keep `personalization_storage` denied. |
| Q5 | `ensureGtag` shim pushes `args` not `arguments` | Works with spread; **consistent** with inline `gtag` using `arguments` object — acceptable, but note: if any code relied on `Array.isArray` inspection of `dataLayer` entries, shapes differ slightly. |

---

## Major issues — summary & remediation plan

| Priority | ID | Summary | Planned fix |
|----------|-----|---------|-------------|
| P0 | H2 | Footer / reopen path not aligned with Funding Choices loading model | Add `googlefc.callbackQueue` + `CONSENT_API_READY` (per Google docs); optionally TCF UI fallback after research |
| P1 | H1 | `essential` replay from `localStorage` ignores regulatory context | Replay only when TCF absent / after timeout, or namespace storage; document cross-region test procedure |
| P2 | M1 | “Accept all” vs `personalization_storage` | Grant explicitly or narrow UI/policy language |
| P3 | H3 | Revocation API = consent clear + reload | Align footer copy with actual UX |
| P4 | M2–M3 | Tag tuning | Review GA4 consent docs; tune `wait_for_update` with EEA field tests |

**Suggested order of work:** **H2** (user-visible broken “preferences”) → **H1** (subtle cross-region / race bugs) → **M1** (copy vs Consent Mode honesty) → **M2/M3** (measurement polish).

---

## What already looks right (do not regress)

1. **Consent default before any Google network URL** — `index.html` ordering is correct and tested.  
2. **`wait_for_update` present** — required for async CMP; keep it.  
3. **AdSense before `gtag.js`** — matches checklist rationale for ad-stack / Privacy & messaging attachment.  
4. **Not replaying stored `all` on boot** — critical fix for Funding Choices suppression; tests enforce it.  
5. **`fc=alwaysshow` short-circuit** — preserves debug / preview flows.

---

## Appendix — key files

| File | Role |
|------|------|
| `index.html` | Consent Mode default, AdSense, GA4 bootstrap |
| `src/lib/consent.ts` | `initializeConsentSystem`, `applyConsent`, `openCookieOrCmpPreferences` |
| `src/components/CookieConsent.tsx` | ROW fallback + `__tcfapi` detection |
| `src/main.tsx` | Early `initializeConsentSystem()` |
| `src/index-html.consent.test.ts` | HTML contract tests |
| `src/lib/consent.test.ts` | Replay behavior tests |

---

## Information needed from you (to certify integration updates)

Nothing in code can replace **your** Google account configuration or **legal** sign-off. The list below is what an engineer needs **from you** (or read-only confirmation) so updates to tags, consent, and CMP wiring can be **verified** against the live products—not “legal certification,” but **technical acceptance criteria**.

### Google Analytics 4

| Item | Why it matters | How you get it |
|------|----------------|----------------|
| **Measurement ID** (format `G-XXXXXXXX`) | Must match `gtag('config', …)` in `index.html` and any docs you reference. | GA4 → **Admin** → **Data streams** → select your web stream → **Measurement ID** at top right. |
| **Confirm direct `gtag` vs GTM** | This repo uses **direct** `gtag.js` + Consent Mode in HTML, **not** a GTM container. If you ever move to GTM, the integration changes. | If you only use GA4’s tag from this site’s HTML, say **“direct gtag only.”** If you also load **Google Tag Manager** (`GTM-XXXX`), say so and share the **container ID**. |
| **(Optional)** GA4 **Reporting identity** / **Google signals** stance | Affects how “consented” vs modeled data appears; not required to match IDs in code. | Admin → **Data settings** / **Data collection** — note anything your privacy counsel cares about. |

### Google AdSense

| Item | Why it matters | How you get it |
|------|----------------|----------------|
| **Publisher ID** (`ca-pub-XXXXXXXXXXXXXXXX`) | Must match `adsbygoogle.js?client=` in `index.html` and line 1 of `public/ads.txt` (seller record uses `pub-` without `ca-`). | AdSense → **Account** → **Account information** → **Publisher ID**; or **Sites** → your site → site settings. |
| **ads.txt** | Crawlers expect `google.com, pub-…, DIRECT, …` to match your authorized seller. | Already in repo; confirm **no duplicate** or conflicting `ads.txt` at the CDN/host level. |
| **Privacy & messaging — European regulations message** | Funding Choices / TCF UI is driven here, not only by code. | AdSense → **Privacy & messaging** → confirm **Published**, **applies to** your live hostname (e.g. `atombeacon.com`), and **EEA/UK/CH** (or your chosen regions) as intended. |
| **(Recommended)** Screenshot or note of **message type** (e.g. IAB TCF) and **vendor list** includes **Google Advertising Products** where required | Misconfiguration here is a common reason CMP “doesn’t show” despite code being correct. | Same Privacy & messaging screen → **Settings** / edit the EU message → compare to [AdSense EU user consent FAQ](https://support.google.com/adsense/answer/11546682). |

### Site & environment (for live checks)

| Item | Why it matters | How you get it |
|------|----------------|----------------|
| **Canonical production URL** | Consent, `ads.txt`, and AdSense site approval are hostname-sensitive. | Confirm **exact** scheme and host you treat as production (e.g. `https://atombeacon.com` vs `www`). |
| **Whether you use a reverse proxy / CDN** that strips or rewrites HTML | Could serve an old `index.html` without Consent Mode or AdSense. | Your hosting/DNS dashboard or whoever deploys this repo. |
| **EEA/UK/CH test method** | `__tcfapi` and Google’s message often only appear for those regions. | VPN, travel device, or colleague in region — plus optional `?fc=alwaysshow&fctype=gdpr` for Funding Choices preview ([AdSense help](https://support.google.com/adsense/answer/10924669)). |

### What “certify updates work” can mean (engineering)

With the above, we can **certify** (engineering sense):

- IDs in **code** match **your** GA4 and AdSense accounts.  
- **Live** page source shows the same Measurement ID, publisher client, Consent Mode default, and script order as tested.  
- In an **EEA-like** session, **`typeof __tcfapi === "function"`** within a few seconds and the **European** message appears without relying on the ROW banner first (unless CMP is intentionally suppressed).  
- **Cookie Preferences** / reopen behavior matches **Funding Choices** availability (`googlefc`) after your chosen code changes.

We **cannot** certify GDPR or ePrivacy **compliance** from code alone—that remains **legal/policy** and **your** AdSense message configuration.

---

*End of review.*
