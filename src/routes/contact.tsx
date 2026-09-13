import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { openQuoteForm } from "@/lib/uiEvents";
import heroContact from "@/assets/illustrations/hero-contact.jpg";

const QUOTE_FORM_URL = "https://digitorizon-os.vercel.app/f/digitorizon-com";

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

          <img
            src={heroContact}
            alt="Professionnelle ivoirienne en visioconférence, prête à échanger sur votre projet"
            loading="lazy"
            className="mt-6 w-full rounded-2xl border border-border"
          />

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
        </div>

        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-[0_20px_60px_-20px_#12100E26] flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary grid place-items-center">
            <FileText className="w-8 h-8" strokeWidth={1.75} />
          </div>
          <h2 className="mt-6 text-2xl font-bold">Demander mon devis gratuit</h2>
          <p className="mt-3 text-muted-foreground max-w-sm">
            Quelques questions rapides sur votre projet, et on vous appelle sous 24h pour cadrer
            précisément votre besoin.
          </p>
          <button type="button" onClick={() => openQuoteForm()} className="btn-primary mt-8">
            Ouvrir le formulaire de devis
          </button>
          <a
            href={QUOTE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xs text-muted-foreground hover:text-primary transition underline underline-offset-2"
          >
            La fenêtre ne s'ouvre pas ? Cliquez ici pour l'ouvrir dans un nouvel onglet
          </a>
        </div>
      </div>
    </div>
  );
}
