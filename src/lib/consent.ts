export const COOKIE_CONSENT_KEY = "atom-beacon-cookie-consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "atom-beacon-open-cookie-preferences";

const GA_MEASUREMENT_ID = "G-4V1LPN0KS0";
const ADSENSE_CLIENT_ID = "ca-pub-4575124953371835";

type ConsentLevel = "all" | "essential";

export interface StoredConsent {
  level: ConsentLevel;
  date: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function toConsentState(level: ConsentLevel) {
  const granted = level === "all" ? "granted" : "denied";
  return {
    ad_storage: granted,
    analytics_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: "denied",
  } as const;
}

function ensureGtag() {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

function loadScriptOnce(id: string, src: string, attributes?: Record<string, string>) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
  }

  document.head.appendChild(script);
}

export function readStoredConsent(): StoredConsent | null {
  const rawValue = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!rawValue) return null;

  try {
    const parsed = JSON.parse(rawValue) as Partial<StoredConsent>;
    if (parsed.level === "all" || parsed.level === "essential") {
      return {
        level: parsed.level,
        date: typeof parsed.date === "string" ? parsed.date : new Date().toISOString(),
      };
    }
  } catch {
    return null;
  }

  return null;
}

export function setStoredConsent(level: ConsentLevel): StoredConsent {
  const consent: StoredConsent = {
    level,
    date: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  return consent;
}

export function updateGoogleConsent(level: ConsentLevel) {
  ensureGtag();
  window.gtag?.("consent", "update", toConsentState(level));
}

export function initializeConsentSystem() {
  ensureGtag();
  window.gtag?.("consent", "default", toConsentState("essential"));

  const consent = readStoredConsent();
  if (!consent) return;

  updateGoogleConsent(consent.level);
  if (consent.level === "all") {
    loadGoogleTags();
  }
}

export function loadGoogleTags() {
  loadScriptOnce("ga4-script", `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID);

  loadScriptOnce(
    "adsense-script",
    `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`,
    { crossorigin: "anonymous" },
  );
}

export function applyConsent(level: ConsentLevel) {
  setStoredConsent(level);
  updateGoogleConsent(level);
  if (level === "all") {
    loadGoogleTags();
  }
}
