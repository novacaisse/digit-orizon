import { createFileRoute } from "@tanstack/react-router";
import { Eye, Handshake, PhoneCall, Zap } from "lucide-react";

import { FounderAvatar } from "@/components/site/FounderAvatar";
import { Illustration } from "@/components/site/Illustration";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Digitorizon, agence digitale à Abidjan" },
      {
        name: "description",
        content:
          "Digitorizon est une agence digitale basée à Treichville, Abidjan, qui accompagne les entreprises ivoiriennes dans leur transformation digitale depuis plus de 4 ans.",
      },
    ],
    links: [{ rel: "canonical", href: "https://digitorizon.com/a-propos" }],
  }),
  component: AProposPage,
});

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Rapidité d'exécution grâce à l'IA",
    desc: "Sans sacrifier la qualité — l'intelligence artificielle nous permet d'aller plus vite là où ça compte.",
  },
  {
    icon: PhoneCall,
    title: "Un appel humain avant chaque devis",
    desc: "Jamais une proposition automatisée à l'aveugle. On prend le temps de comprendre votre projet.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    desc: "Sur les prix comme sur les délais — aucune mauvaise surprise en cours de route.",
  },
  {
    icon: Handshake,
    title: "Un engagement dans la durée",
    desc: "Des packs mensuels plutôt que des prestations isolées, pour grandir avec vous.",
  },
];

function AProposPage() {
  return (
    <div>
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow">À propos</span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight">
            L'agence derrière votre{" "}
            <span className="text-gradient-brand">transformation digitale</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Digitorizon est une agence digitale basée à Treichville, Abidjan, née d'une conviction
            simple : chaque entreprise ivoirienne mérite une présence en ligne professionnelle, sans
            complexité ni prix excessif. Depuis sa création, l'agence a accompagné plus de 50
            clients à travers plus de 100 projets — sites web, présence sociale, solutions sur
            mesure et outils de gestion propulsés par l'intelligence artificielle.
          </p>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <FounderAvatar />
            <div>
              <span className="eyebrow">Fondateur</span>
              <h2 className="mt-3 text-2xl font-bold">Zegbe Kahapeu Anselme-Prudent</h2>
              <p className="mt-3 text-muted-foreground">
                Digitorizon est dirigé par Zegbe Kahapeu Anselme-Prudent, entrepreneur tech basé à
                Abidjan, avec plus de 4 ans d'expérience dans la digitalisation d'entreprises en
                Afrique francophone. Sa conviction : l'intelligence artificielle doit être un outil
                accessible à toute entreprise, pas un luxe réservé aux grandes structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl reveal">
            <span className="eyebrow">Notre approche</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              4 principes qui nous guident
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col sm:flex-row gap-5 items-start">
                <Illustration
                  icon={p.icon}
                  variant="blue"
                  className="w-24 h-24 aspect-square shrink-0"
                />
                <div>
                  <div className="font-bold text-lg">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-ink-gradient text-ink-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow eyebrow-invert">Notre vision</span>
          <p className="mt-5 text-2xl sm:text-3xl font-bold leading-snug">
            Devenir le partenaire digital de référence pour les PME d'Afrique francophone, en
            combinant expertise humaine et{" "}
            <span className="text-gradient-brand">puissance de l'intelligence artificielle.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
