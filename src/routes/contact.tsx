import { createFileRoute } from "@tanstack/react-router";

import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Demander un devis | Digitorizon" },
      {
        name: "description",
        content:
          "Parlons de votre projet : formulaire de devis intelligent, WhatsApp direct, prise de rendez-vous ou coordonnées de l'agence Digitorizon à Abidjan.",
      },
    ],
    links: [{ rel: "canonical", href: "https://digitorizon.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Parlons de <span className="text-gradient-brand">votre projet</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Remplissez le formulaire ci-contre, ou contactez-nous directement — on revient vers vous
            rapidement avec une proposition claire.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a href="mailto:contact@digitorizon.com" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                ✉
              </span>
              <span className="group-hover:text-primary transition">contact@digitorizon.com</span>
            </a>
            <a href="tel:+2250500259286" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                ☎
              </span>
              <span className="group-hover:text-primary transition">+225 05 00 25 92 86</span>
            </a>
            <a
              href="https://wa.me/2250500259286"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#128C4A] grid place-items-center">
                ◉
              </span>
              <span className="group-hover:text-primary transition">
                Discuter directement sur WhatsApp
              </span>
            </a>
            <a
              href="https://koalendar.com/e/digitorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent grid place-items-center">
                📅
              </span>
              <span className="group-hover:text-primary transition">
                Prendre rendez-vous directement
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-muted text-foreground grid place-items-center">
                📍
              </span>
              <span className="text-muted-foreground">Treichville, Abidjan, Côte d'Ivoire</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Localisation Digitorizon — Treichville, Abidjan"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-4.024%2C5.28%2C-3.99%2C5.31&layer=mapnik&marker=5.295%2C-4.007"
              className="w-full h-56 grayscale"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[0_20px_60px_-20px_#12100E26]">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
