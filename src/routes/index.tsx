import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { FAQS } from "@/lib/faq";
import { SERVICES } from "@/lib/services";
import { TESTIMONIALS } from "@/lib/testimonials";
import { openQuoteForm, openChat } from "@/lib/uiEvents";
import { HeroMockup } from "@/components/site/HeroMockup";
import { Illustration } from "@/components/site/Illustration";
import awg from "@/assets/clients/awg.png";
import casib from "@/assets/clients/casib.png";
import dmi from "@/assets/clients/dmi.png";
import levelConsulting from "@/assets/clients/level-consulting.png";
import sns from "@/assets/clients/sns.png";
import kws from "@/assets/clients/kws.png";
import exlog from "@/assets/clients/exlog.png";
import santesucces from "@/assets/clients/santesucces.png";
import daGroup from "@/assets/clients/da-group.png.asset.json";
import kruman from "@/assets/clients/kruman.png.asset.json";
import jhLegal from "@/assets/clients/jh-legal.png.asset.json";
import sadima from "@/assets/clients/sadima.png.asset.json";
import cliniqueMieuxEtre from "@/assets/clients/clinique-mieux-etre.png.asset.json";
import clc from "@/assets/clients/clc.png.asset.json";
import iscom from "@/assets/clients/iscom.png.asset.json";
import novacaisse from "@/assets/clients/novacaisse.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digitorizon — Transformation digitale des entreprises en Côte d'Ivoire" },
      {
        name: "description",
        content:
          "Digitorizon accompagne les entreprises ivoiriennes dans leur transformation digitale : sites web, présence sociale, solutions sur mesure et intelligence artificielle appliquée.",
      },
    ],
    links: [{ rel: "canonical", href: "https://digitorizon.com/" }],
  }),
  component: Landing,
});

const TRUST_LOGOS = [
  { src: awg, alt: "Akindin Ward Group — client Digitorizon" },
  { src: casib, alt: "Casib Coop-CA — client Digitorizon" },
  { src: dmi, alt: "DMI — client Digitorizon" },
  { src: levelConsulting, alt: "Level Consulting — client Digitorizon" },
  { src: sns, alt: "SNS Société de Nettoyage et Services — client Digitorizon" },
  { src: kws, alt: "Kaïros Welding Services — client Digitorizon" },
  { src: exlog, alt: "EXLog International — client Digitorizon" },
  { src: santesucces, alt: "Santé Succès — client Digitorizon" },
  { src: daGroup.url, alt: "DA-Group — client Digitorizon" },
  { src: kruman.url, alt: "Kruman Capital Investment — client Digitorizon" },
  { src: jhLegal.url, alt: "JH Cabinet juridique — client Digitorizon" },
  { src: sadima.url, alt: "Sadima Logistics — client Digitorizon" },
  { src: cliniqueMieuxEtre.url, alt: "Clinique du Mieux-Être — client Digitorizon" },
  { src: clc.url, alt: "CLC Côte d'Ivoire — client Digitorizon" },
  { src: iscom.url, alt: "IS'COM — client Digitorizon" },
  { src: novacaisse.url, alt: "NovaCaisse — client Digitorizon" },
];

const PROJECTS = [
  {
    name: "Santé Succès",
    url: "https://santesucces.com",
    sector: "Centre de régénération cellulaire",
    accent: "from-[#F7941D] to-[#F5B942]",
  },
  {
    name: "Adikson",
    url: "https://adikson.com",
    sector: "Logistique maritime professionnelle",
    accent: "from-[#29ABE2] to-[#5EC1E8]",
  },
  {
    name: "EXLog International",
    url: "https://exloginternational.com",
    sector: "Négoce de produits chimiques",
    accent: "from-[#F5B942] to-[#F7941D]",
  },
  {
    name: "Lysra Services",
    url: "https://lysraservices.com",
    sector: "Conciergerie & logistique",
    accent: "from-[#29ABE2] to-[#8BD3F0]",
  },
  {
    name: "Kaïros WS",
    url: "https://kairos-ws.ci",
    sector: "Soudure, chaudronnerie & tuyauterie",
    accent: "from-[#12100E] to-[#29ABE2]",
  },
  {
    name: "Level Consulting",
    url: "https://levelconsulting.ci",
    sector: "Cabinet de formation & conseil RH",
    accent: "from-[#F7941D] to-[#29ABE2]",
  },
  {
    name: "Juriste Innovation",
    url: "https://juristeinovation.com",
    sector: "Cabinet juridique",
    accent: "from-[#12100E] to-[#F5B942]",
  },
];

const PROCESS = [
  {
    n: "1",
    title: "Vous nous parlez de votre projet",
    desc: "Via le formulaire de devis intelligent ou directement dans le chat.",
  },
  {
    n: "2",
    title: "On vous appelle pour cadrer le besoin",
    desc: "Un vrai échange humain, jamais une proposition automatisée à l'aveugle.",
  },
  {
    n: "3",
    title: "Vous recevez une proposition détaillée",
    desc: "Par email, claire et sans surprise, sous quelques jours.",
  },
  {
    n: "4",
    title: "On livre, vous suivez l'avancement",
    desc: "En temps réel, jusqu'à la mise en ligne et au-delà.",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const duration = 1400;
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function BrowserMockup({ name, url, sector, accent }: (typeof PROJECTS)[number]) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mockup-tilt block rounded-2xl bg-white border border-border shadow-[0_20px_60px_-20px_#12100E26] overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-muted-foreground truncate">
          {url.replace("https://", "")}
        </span>
      </div>
      <div className={`aspect-[16/10] bg-gradient-to-br ${accent} relative`}>
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute bottom-5 left-5 right-5">
          <div className="h-2 w-24 bg-white/70 rounded-full mb-2" />
          <div className="h-2 w-40 bg-white/40 rounded-full" />
        </div>
      </div>
      <div className="p-5">
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{sector}</div>
      </div>
    </a>
  );
}

function Landing() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section id="accueil" className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-x-0 top-0 h-1 animated-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 reveal">
            <span className="eyebrow">Agence digitale · Côte d'Ivoire</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Votre entreprise, visible et organisée en ligne
              <span className="text-gradient-brand"> — sans le casse-tête.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Digitorizon accompagne les entreprises ivoiriennes dans leur transformation digitale :
              sites web, présence sociale, solutions sur mesure et intelligence artificielle
              appliquée.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => openQuoteForm()} className="btn-primary">
                Démarrer mon projet
              </button>
              <button type="button" onClick={() => openChat()} className="btn-ghost">
                Discuter maintenant
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 reveal">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-4">
          {[
            { target: 4, suffix: "+", label: "ans d'expérience" },
            { target: 50, suffix: "+", label: "clients accompagnés" },
            { target: 100, suffix: "+", label: "projets livrés" },
          ].map((s) => (
            <div
              key={s.label}
              className="reveal rounded-3xl bg-ink text-ink-foreground p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-gradient-brand">
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16 border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm text-muted-foreground font-medium">
            Ils nous ont fait confiance
          </p>
          <div className="mt-10 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-12 sm:gap-16 marquee w-max">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center h-16 sm:h-20 w-36 sm:w-44"
                >
                  <img
                    src={l.src}
                    alt={l.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous faisons */}
      <section id="services-teaser" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl reveal">
            <span className="eyebrow">Ce que nous faisons</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Trois façons de digitaliser{" "}
              <span className="text-gradient-brand">votre entreprise</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.id} to="/services" hash={s.id} className="reveal block group">
                <Illustration
                  icon={s.icon}
                  variant={s.id === "zegos" ? "ink" : s.id === "sur-mesure" ? "blue" : "orange"}
                />
                <div className="mt-5">
                  <div className="font-bold text-lg group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section
        id="processus"
        className="py-24 bg-ink-gradient text-ink-foreground relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl reveal">
            <span className="eyebrow eyebrow-invert">Comment ça marche</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Une méthode simple, du premier échange{" "}
              <span className="text-gradient-brand">à la mise en ligne</span>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((s, i) => (
              <div
                key={s.n}
                className="reveal card-lift rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl font-extrabold text-gradient-brand">{s.n}</div>
                <div className="mt-3 font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preuve sociale */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center reveal max-w-2xl mx-auto">
            <span className="eyebrow">Preuve sociale</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ce qu'on nous dit
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.role} className="reveal rounded-2xl border border-border bg-card p-6">
                <p className="text-sm text-foreground">"{t.quote}"</p>
                <p className="mt-4 text-xs font-semibold text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 reveal">
            <div className="max-w-2xl">
              <span className="eyebrow">Réalisations</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
                Plus de <Counter target={100} />+ projets livrés, dans des secteurs exigeants
              </h2>
            </div>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={p.name} className="reveal" style={{ animationDelay: `${i * 60}ms` }}>
                <BrowserMockup {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card overflow-hidden reveal"
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-semibold">{f.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-primary/10 text-primary grid place-items-center transition-transform ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Prêt à être <span className="text-gradient-brand">visible et organisé en ligne</span> ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Démarrez votre projet, on vous appelle sous 24h.
          </p>
          <button type="button" onClick={() => openQuoteForm()} className="btn-primary mt-8">
            Démarrer mon projet
          </button>
        </div>
      </section>
    </div>
  );
}
