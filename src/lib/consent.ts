export const COOKIE_CONSENT_KEY = "atom-beacon-cookie-consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "atom-beacon-open-cookie-preferences";

type ConsentLevel = "all" | "essential";

export interface StoredConsent {
  level: ConsentLevel;
  date: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    googlefc?: {
      showRevocationMessage?: () => void;
      callbackQueue?: Array<Record<string, () => void>>;
    };
    __tcfapi?: (command: string, version: number, callback: (...args: unknown[]) => void, ...args: unknown[]) => void;
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

/**
 * Consent defaults and Google tag bootstrap run in index.html before any Google URL loads.
 * This function only syncs a returning visitor's saved ROW/rest-of-world choice.
 */
export function initializeConsentSystem() {
  ensureGtag();

  const consent = readStoredConsent();
  if (!consent) return;

  updateGoogleConsent(consent.level);
}

export function applyConsent(level: ConsentLevel) {
  setStoredConsent(level);
  updateGoogleConsent(level);
}

/**
 * EEA/UK/CH: Google's Funding Choices exposes `googlefc.showRevocationMessage`.
 * Rest of world: dispatch event so the local CookieConsent banner opens.
 */
export function openCookieOrCmpPreferences() {
  const showRevocation = window.googlefc?.showRevocationMessage;
  if (typeof showRevocation === "function") {
    showRevocation();
    return;
  }
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}
