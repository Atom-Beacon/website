import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  applyConsent,
  readStoredConsent,
} from "@/lib/consent";

/** IAB TCF __tcfapi is injected when Google's (or another certified) CMP is active — often after AdSense loads. */
function hasTcfApi(): boolean {
  return typeof window.__tcfapi === "function";
}

/**
 * Wait this long before showing our fallback banner so EEA/UK/CH sessions have time to
 * register __tcfapi. A1–2s delay caused Switzerland (and similar) to see the wrong UI.
 */
const FALLBACK_SHOW_AFTER_MS = 14_000;
const TCF_POLL_MS = 150;
/** Keep watching in case the CMP appears late; hide our banner if it does. */
const TCF_WATCH_MS = 45_000;

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readStoredConsent()) return;

    let cancelled = false;

    const hideIfCmp = () => {
      if (hasTcfApi()) {
        if (!cancelled) setVisible(false);
        return true;
      }
      return false;
    };

    const fallbackTimer = window.setTimeout(() => {
      if (cancelled || hideIfCmp()) return;
      setVisible(true);
    }, FALLBACK_SHOW_AFTER_MS);

    const pollId = window.setInterval(() => {
      if (hideIfCmp()) {
        window.clearTimeout(fallbackTimer);
      }
    }, TCF_POLL_MS);

    const stopPollId = window.setTimeout(() => {
      window.clearInterval(pollId);
    }, TCF_WATCH_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      window.clearInterval(pollId);
      window.clearTimeout(stopPollId);
    };
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  const accept = (level: "all" | "essential") => {
    applyConsent(level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-3xl mx-auto rounded-xl border-2 border-border bg-card shadow-lg p-5">
        <div className="flex items-start gap-3">
          <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-foreground mb-1">Cookie preferences</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies and similar technology for core site functionality, audience measurement, and
              advertising where permitted. You can allow all optional cookies or only essential cookies.
              Read our{" "}
              <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => accept("all")}
                className="px-5 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Accept all optional
              </button>
              <button
                onClick={() => accept("essential")}
                className="px-5 py-2 rounded-md text-sm font-medium bg-muted text-muted-foreground hover:bg-border transition-colors"
              >
                Essential only
              </button>
            </div>
          </div>
          <button
            onClick={() => accept("essential")}
            className="shrink-0 p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss cookie banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
