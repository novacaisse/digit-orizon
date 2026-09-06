import { Link } from "@tanstack/react-router";

import { LOGO_URL } from "@/lib/brand";
import { openQuoteForm } from "@/lib/uiEvents";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Digitorizon — agence web Côte d'Ivoire"
            className="h-9 w-auto"
            width={160}
            height={40}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => openQuoteForm()}
          className="btn-primary hidden sm:inline-flex !py-2.5 !px-4 !text-sm"
        >
          Devis gratuit
        </button>
      </div>
    </header>
  );
}
