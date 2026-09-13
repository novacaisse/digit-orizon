import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { LOGO_URL } from "@/lib/brand";
import { openQuoteForm } from "@/lib/uiEvents";
import { BrandArc } from "@/components/site/BrandArc";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openQuoteForm()}
            className="btn-primary hidden sm:inline-flex !py-2.5 !px-4 !text-sm"
          >
            Devis gratuit
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="lg:hidden w-10 h-10 rounded-xl border border-border grid place-items-center text-foreground"
          >
            <Menu className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          className="w-4/5 sm:max-w-sm bg-ink text-ink-foreground border-l border-white/10 flex flex-col p-0"
        >
          <div className="h-1 animated-gradient" />
          <div className="flex-1 flex flex-col px-6 pt-8 pb-6">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <img
              src={LOGO_URL}
              alt="Digitorizon"
              className="h-8 w-auto brightness-0 invert"
              width={140}
              height={35}
            />

            <nav className="mt-10 flex flex-col gap-1">
              {NAV.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-3 py-3.5 text-2xl font-bold tracking-tight text-white/70 hover:text-white transition-colors border-b border-white/10"
                  activeProps={{ className: "!text-white" }}
                >
                  <span className="text-xs font-mono text-gold/70 group-hover:text-gold transition-colors">
                    0{i + 1}
                  </span>
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openQuoteForm();
                }}
                className="btn-primary justify-center"
              >
                Devis gratuit
              </button>
              <a
                href="https://wa.me/2250500259286"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-semibold text-[#3DDC7A]"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
          <div className="relative h-16 overflow-hidden border-t border-white/10">
            <BrandArc variant="divider" className="absolute inset-0 opacity-80" />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
