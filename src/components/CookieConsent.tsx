import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  applyConsent,
  readStoredConsent,
} from "@/lib/consent";

const TCF_POLL_MS = 100;
const ROW_BANNER_DELAY_MS = 1500;
const TCF_POLL_MAX_MS = 10000;

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readStoredConsent()) return;

    let cancelled = false;

    const showTimer = window.setTimeout(() => {
      if (!cancelled) setVisible(true);
    }, ROW_BANNER_DELAY_MS);

    const pollId = window.setInterval(() => {
      if (typeof window.__tcfapi === "function") {
        window.clearInterval(pollId);
        window.clearTimeout(showTimer);
        if (!cancelled) setVisible(false);
      }
    }, TCF_POLL_MS);

    const stopPollId = window.setTimeout(() => {
      window.clearInterval(pollId);
    }, TCF_POLL_MAX_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(showTimer);
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
            <h3 className="font-heading font-semibold text-foreground mb-1">We value your privacy</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Outside the EEA/UK/Switzerland we use this banner to set analytics and ad cookie preferences.
              In those regions, Google&apos;s consent message is shown instead.
              Read our{" "}
              <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
              for more details.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => accept("all")}
                className="px-5 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <button
                onClick={() => accept("essential")}
                className="px-5 py-2 rounded-md text-sm font-medium bg-muted text-muted-foreground hover:bg-border transition-colors"
              >
                Essential Only
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
