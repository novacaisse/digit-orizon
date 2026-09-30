import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { REALISATIONS, REALISATION_CATEGORIES, type Realisation } from "@/lib/realisations";
import { TrustedBy } from "@/components/site/TrustedBy";
import { openQuoteForm } from "@/lib/uiEvents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Sites livrés par Digitorizon | Côte d'Ivoire" },
      {
        name: "description",
        content:
          "Découvrez les sites web livrés par Digitorizon pour des entreprises ivoiriennes et africaines : industrie, finance, agriculture, santé, logistique, communication et bien plus.",
      },
    ],
    links: [{ rel: "canonical", href: "https://digitorizon.com/realisations" }],
  }),
  component: RealisationsPage,
});

const ALL = "Tous";

const CARD_ACCENTS = [
  "from-primary/15 to-primary/5 text-primary",
  "from-accent/15 to-accent/5 text-accent",
  "from-gold/20 to-gold/5 text-[#B87F0E]",
];

function accentFor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i)) % CARD_ACCENTS.length;
  return CARD_ACCENTS[hash];
}

function ProjectCard({ project }: { project: Realisation }) {
  const domain = project.url.replace(/^https?:\/\//, "");
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_16px_40px_-24px_#12100E33] hover:shadow-[0_24px_50px_-20px_#12100E40] hover:-translate-y-1 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br grid place-items-center font-bold text-lg",
            accentFor(project.name),
          )}
        >
          {project.name.charAt(0)}
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
      </div>
      <div className="mt-4">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-primary/80 bg-primary/10 rounded-full px-2.5 py-1">
          {project.category}
        </span>
      </div>
      <h3 className="mt-3 font-bold text-lg text-foreground">{project.name}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground flex-1">{project.description}</p>
      <span className="mt-4 text-xs text-muted-foreground/80 truncate">{domain}</span>
    </a>
  );
}

function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return REALISATIONS;
    return REALISATIONS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const categoriesWithCounts = useMemo(() => {
    return REALISATION_CATEGORIES.filter((c) => REALISATIONS.some((p) => p.category === c));
  }, []);

  return (
    <div>
      <section className="bg-hero-gradient py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow">Réalisations</span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Des sites <span className="text-gradient-brand">livrés et en ligne</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {REALISATIONS.length}+ entreprises et organisations accompagnées, tous secteurs
            confondus — cliquez pour visiter chaque site en direct.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              type="button"
              onClick={() => setActiveCategory(ALL)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors border",
                activeCategory === ALL
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground",
              )}
            >
              Tous ({REALISATIONS.length})
            </button>
            {categoriesWithCounts.map((c) => {
              const count = REALISATIONS.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors border",
                    activeCategory === c
                      ? "bg-primary text-white border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {c} ({count})
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />

      <section className="py-20 lg:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Votre projet <span className="text-gradient-brand">pourrait être le prochain</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Parlons de votre activité et voyons comment vous donner, vous aussi, une présence en
            ligne professionnelle et efficace.
          </p>
          <button type="button" onClick={() => openQuoteForm()} className="btn-primary mt-8">
            Démarrer mon projet
          </button>
        </div>
      </section>
    </div>
  );
}
