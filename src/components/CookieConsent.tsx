import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "atomic-pulse-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (level: "all" | "essential") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ level, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-3xl mx-auto rounded-xl border-2 border-border bg-card shadow-lg p-5">
        <div className="flex items-start gap-3">
          <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-heading font-semibold text-foreground mb-1">We value your privacy 🍪</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience and analyze site traffic. 
              You can choose to accept all cookies or only essential ones. 
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
