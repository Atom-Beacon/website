import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { COOKIE_CONSENT_KEY, initializeConsentSystem, readStoredConsent, setStoredConsent } from "./consent";

describe("initializeConsentSystem", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal("gtag", vi.fn());
    delete (window as unknown as { __tcfapi?: unknown }).__tcfapi;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    localStorage.clear();
    window.history.replaceState({}, "", "/");
  });

  it("does not call gtag when fc=alwaysshow (Funding Choices debug URL)", () => {
    window.history.replaceState({}, "", "/?fc=alwaysshow&fctype=gdpr");
    setStoredConsent("all");
    initializeConsentSystem();
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("replays essential-only from localStorage", () => {
    setStoredConsent("essential");
    initializeConsentSystem();
    expect(window.gtag).toHaveBeenCalledWith("consent", "update", expect.objectContaining({ ad_storage: "denied" }));
  });

  it("does not replay accept-all from localStorage (would suppress Google CMP)", () => {
    setStoredConsent("all");
    initializeConsentSystem();
    expect(window.gtag).not.toHaveBeenCalled();
    expect(readStoredConsent()?.level).toBe("all");
  });
});

describe("storage key", () => {
  it("uses expected localStorage key", () => {
    expect(COOKIE_CONSENT_KEY).toBe("atom-beacon-cookie-consent");
  });
});
