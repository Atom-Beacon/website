import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Atom } from "lucide-react";
import { BRAND_MARK, TM, formatCopyrightLine, TRADEMARK_ATTRIBUTION } from "@/lib/brand";
import { openCookieOrCmpPreferences } from "@/lib/consent";
import CookieConsent from "./CookieConsent";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/learn", label: "Learn" },
  { to: "/business", label: "Business" },
  { to: "/blog", label: "Blog" },
  { to: "/kids", label: "Kids Zone" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const openCookiePreferences = () => openCookieOrCmpPreferences();

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Atom className="h-8 w-8 text-primary group-hover:animate-spin" />
            <span className="font-heading text-xl font-bold text-foreground tracking-tight">
              Atom{" "}
              <span className="text-primary">
                Beacon<span className="text-[0.65em] font-normal align-super ml-0.5">{TM}</span>
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-card">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Atom className="h-6 w-6 text-primary" />
                <span className="font-heading text-lg font-bold text-foreground">{BRAND_MARK}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Promoting nuclear energy as part of a clean, diverse energy future. All energy sources have a role to play.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-3">Navigate</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><button type="button" onClick={openCookiePreferences} className="hover:text-primary transition-colors">Cookie Preferences</button></li>
                <li><Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-3">International</h4>
              <p className="text-sm text-muted-foreground mb-2">
                This site is available worldwide. Content is provided in English with international audiences in mind.
              </p>
              <p className="text-sm text-muted-foreground">
                🌍 Serving readers globally
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>{formatCopyrightLine(new Date().getFullYear())}</p>
            <p className="mt-1 text-xs sm:text-sm">{TRADEMARK_ATTRIBUTION}</p>
            <p className="mt-3">
              Disclaimer: Opinions expressed in the blog section are those of individual authors and do not constitute professional energy policy advice.
            </p>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};

export default Layout;
