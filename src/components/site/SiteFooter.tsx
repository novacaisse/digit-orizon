import { Link } from "@tanstack/react-router";

import { LOGO_URL } from "@/lib/brand";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img
            src={LOGO_URL}
            alt="Digitorizon"
            className="h-10 w-auto brightness-0 invert"
            width={160}
            height={40}
          />
          <p className="mt-4 text-sm text-white/70 max-w-sm">
            Agence digitale — Côte d'Ivoire. Sites web, présence sociale, solutions sur-mesure et
            intelligence artificielle appliquée.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/share/1CoBaP4SxY/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Digitorizon"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary transition grid place-items-center font-bold"
            >
              f
            </a>
            <a
              href="https://youtube.com/@digitorizon-f4c"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Digitorizon"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary transition grid place-items-center font-bold"
            >
              ▶
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Navigation</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="mailto:contact@digitorizon.com" className="hover:text-primary transition">
                contact@digitorizon.com
              </a>
            </li>
            <li>
              <a href="tel:+2250500259286" className="hover:text-primary transition">
                +225 05 00 25 92 86
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2250500259286"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-white/50">Treichville, Abidjan, Côte d'Ivoire</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-xs text-white/50 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Digitorizon — Tous droits réservés.</span>
          <span>Fait avec passion en Côte d'Ivoire</span>
        </div>
      </div>
    </footer>
  );
}
