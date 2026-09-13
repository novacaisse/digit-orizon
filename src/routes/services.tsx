import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SERVICES, PRESENCE_TIERS, EXTRA_SERVICES } from "@/lib/services";
import { Illustration } from "@/components/site/Illustration";
import { openQuoteForm } from "@/lib/uiEvents";
import { cn } from "@/lib/utils";
import servicePresenceDigitale from "@/assets/illustrations/service-presence-digitale.jpg";
import serviceSurMesure from "@/assets/illustrations/service-sur-mesure.jpg";
import zegosCaisseDetail from "@/assets/illustrations/zegos-caisse-detail.jpg";
import serviceApplicationWeb from "@/assets/illustrations/service-application-web.jpg";
import serviceCommunityManager from "@/assets/illustrations/service-community-manager.jpg";
import serviceDigitalisationExternalisee from "@/assets/illustrations/service-digitalisation-externalisee.jpg";
import serviceAffichesVideos from "@/assets/illustrations/service-affiches-videos.jpg";
import serviceLogicielGestion from "@/assets/illustrations/service-logiciel-gestion.jpg";
import serviceIntegrationIa from "@/assets/illustrations/service-integration-ia.jpg";

const EXTRA_SERVICE_IMAGES: Record<string, string> = {
  "application-web": serviceApplicationWeb,
  "community-manager": serviceCommunityManager,
  "digitalisation-externalisee": serviceDigitalisationExternalisee,
  "affiches-videos": serviceAffichesVideos,
  "logiciel-gestion": serviceLogicielGestion,
  "integration-ia": serviceIntegrationIa,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Présence Digitale, Solutions Sur Mesure, ZegOS | Digitorizon" },
      {
        name: "description",
        content:
          "Trois façons de digitaliser votre entreprise : Présence Digitale (site + réseaux + visibilité), Solutions Sur Mesure (applications, logiciels, IA), et ZegOS (gestion de commerce clé en main).",
      },
    ],
    links: [{ rel: "canonical", href: "https://digitorizon.com/services" }],
  }),
  component: ServicesPage,
});

const presence = SERVICES.find((s) => s.id === "presence")!;
const surMesure = SERVICES.find((s) => s.id === "sur-mesure")!;
const zegos = SERVICES.find((s) => s.id === "zegos")!;

const USE_CASES = [
  "Gestion de stock automatisée",
  "Tableau de bord commercial en temps réel",
  "Assistant IA interne pour votre équipe",
];

function ServicesPage() {
  return (
    <div>
      <section className="bg-hero-gradient py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Trois façons de{" "}
            <span className="text-gradient-brand">digitaliser votre entreprise</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Selon votre besoin réel — pas un catalogue à rallonge.
          </p>
        </div>
      </section>

      {/* Présence Digitale */}
      <section id={presence.id} className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow">{presence.title} — Pack Visibilité</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                {presence.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{presence.description}</p>
            </div>
            <Illustration
              icon={presence.icon}
              image={{ src: servicePresenceDigitale, alt: presence.title }}
              variant="orange"
              chips={["Site web", "Réseaux sociaux"]}
            />
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {PRESENCE_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "rounded-3xl border p-7 flex flex-col",
                  tier.highlight
                    ? "border-primary bg-primary/5 shadow-[0_20px_50px_-20px_#F7941D59] sm:-translate-y-2"
                    : "border-border bg-card",
                )}
              >
                {tier.highlight && (
                  <span className="mb-3 w-fit rounded-full bg-primary text-white text-xs font-semibold px-3 py-1">
                    Le plus choisi
                  </span>
                )}
                <div className="text-xl font-bold">{tier.name}</div>
                <ul className="mt-5 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Sur devis, après un appel de cadrage.
                </p>
                <button
                  type="button"
                  onClick={() => openQuoteForm()}
                  className={tier.highlight ? "btn-primary mt-4" : "btn-ghost mt-4"}
                >
                  Choisir cette offre
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Sur Mesure */}
      <section id={surMesure.id} className="py-24 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <Illustration
            icon={surMesure.icon}
            image={{ src: serviceSurMesure, alt: surMesure.title }}
            variant="blue"
            chips={["Applications", "IA"]}
            className="order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="eyebrow">{surMesure.title}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {surMesure.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{surMesure.description}</p>
            <ul className="mt-6 space-y-2">
              {USE_CASES.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => openQuoteForm()} className="btn-primary mt-8">
              Discuter de mon projet
            </button>
          </div>
        </div>
      </section>

      {/* ZegOS */}
      <section id={zegos.id} className="py-24 bg-ink-gradient text-ink-foreground scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow eyebrow-invert">{zegos.title}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              ZegOS — Solution de gestion pour commerces
            </h2>
            <p className="mt-4 text-white/70">{zegos.description}</p>
            <p className="mt-4 text-sm text-white/60">
              Module actif : <span className="font-semibold text-gold">ZegCaisse</span> — caisse
              enregistreuse digitale avec paiement Mobile Money intégré.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://zegos.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Découvrir ZegOS
              </a>
              <button
                type="button"
                onClick={() => openQuoteForm()}
                className="btn-ghost !bg-transparent !text-white !border-white/30"
              >
                Recevoir une démo
              </button>
            </div>
          </div>
          <Illustration
            icon={zegos.icon}
            image={{
              src: zegosCaisseDetail,
              alt: "Caisse digitale ZegCaisse avec paiement Mobile Money",
            }}
            variant="ink"
            chips={["ZegCaisse", "Mobile Money"]}
          />
        </div>
      </section>

      {/* Toute notre offre */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Toute notre offre</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Et bien plus <span className="text-gradient-brand">selon vos besoins</span>
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTRA_SERVICES.map((s) => {
              const Icon = s.icon;
              const image = EXTRA_SERVICE_IMAGES[s.id];
              return (
                <div
                  key={s.id}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <div className="mt-4 font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <button type="button" onClick={() => openQuoteForm()} className="btn-primary">
              Discuter de mon besoin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
