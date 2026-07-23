import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

import logo from "@/assets/digitorizon-logo-v2.png.asset.json";
import heroVisual from "@/assets/hero-mockup.png.asset.json";
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
  component: Landing,
});

const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#offre", label: "Offre" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#processus", label: "Processus" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

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
    accent: "from-[#2E9BD6] to-[#5EC1E8]",
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
    accent: "from-[#2E9BD6] to-[#8BD3F0]",
  },
  {
    name: "Kaïros WS",
    url: "https://kairos-ws.ci",
    sector: "Soudure, chaudronnerie & tuyauterie",
    accent: "from-[#1A1D23] to-[#2E9BD6]",
  },
  {
    name: "Level Consulting",
    url: "https://levelconsulting.ci",
    sector: "Cabinet de formation & conseil RH",
    accent: "from-[#F7941D] to-[#2E9BD6]",
  },
  {
    name: "Juriste Innovation",
    url: "https://juristeinovation.com",
    sector: "Cabinet juridique",
    accent: "from-[#1A1D23] to-[#F5B942]",
  },
];

const PROCESS = [
  { n: "01", title: "Échange découverte", desc: "On comprend votre activité, vos objectifs et votre cible pour concevoir un site vraiment aligné." },
  { n: "02", title: "Devis & proposition", desc: "Vous recevez une offre claire, détaillée et sans surprise sous quelques jours." },
  { n: "03", title: "Design sur-mesure", desc: "Une maquette unique, pensée pour convertir et refléter votre image de marque." },
  { n: "04", title: "Rédaction & contenu", desc: "Nous rédigeons vos textes, vous validez. Zéro casse-tête éditorial de votre côté." },
  { n: "05", title: "Développement & livraison", desc: "Site mis en ligne, nom de domaine et hébergement configurés, prêt à générer des contacts." },
];

const FAQS = [
  { q: "Combien coûte un site web chez Digitorizon ?", a: "Chaque projet est unique. Nous établissons un devis personnalisé gratuit après un premier échange pour bien comprendre vos besoins." },
  { q: "Combien de temps pour livrer mon site ?", a: "Le délai moyen dépend de la complexité du projet et vous est communiqué précisément lors du devis." },
  { q: "L'hébergement et le nom de domaine sont-ils inclus ?", a: "Oui, notre offre est 100% clé en main : hébergement, nom de domaine et rédaction de contenu sont inclus." },
  { q: "Est-ce que je peux modifier mon site après la livraison ?", a: "Oui, nous vous accompagnons également après la mise en ligne pour toute évolution ou mise à jour." },
  { q: "Faites-vous du e-commerce ?", a: "Oui, nous concevons des boutiques en ligne selon les besoins du projet." },
  { q: "Travaillez-vous avec des entreprises hors de Côte d'Ivoire ?", a: "Oui, nous accompagnons des clients partout où ils se trouvent, à distance." },
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
      className="mockup-tilt block rounded-2xl bg-white border border-border shadow-[0_20px_60px_-20px_oklch(0.2_0.02_260_/_0.15)] overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-muted-foreground truncate">{url.replace("https://", "")}</span>
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
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitState("loading");
    try {
      const res = await fetch("https://formspree.io/f/xvzewokk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setSubmitState("ok");
        form.reset();
      } else setSubmitState("error");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="#accueil" className="flex items-center gap-2">
            <img src={logo.url} alt="Digitorizon — agence web Côte d'Ivoire" className="h-9 w-auto" width={160} height={40} />
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary hidden sm:inline-flex !py-2.5 !px-4 !text-sm">
            Devis gratuit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="accueil" className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-x-0 top-0 h-1 animated-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Agence web · Côte d'Ivoire
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
              Un site web qui vend.<br />
              <span className="text-gradient-brand">Pas juste un site web.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Digitorizon conçoit des sites professionnels sur-mesure, pensés pour convertir vos visiteurs en clients. Design remarquable, performance technique, résultats concrets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Demander mon devis gratuit</a>
              <a href="#realisations" className="btn-ghost">Voir nos réalisations</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground"><Counter target={100} suffix="+" /></div>
                <div className="text-xs text-muted-foreground mt-1">projets livrés</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground"><Counter target={100} suffix="%" /></div>
                <div className="text-xs text-muted-foreground mt-1">clé en main</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">CI</div>
                <div className="text-xs text-muted-foreground mt-1">basés à Abidjan</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 reveal">
            <div className="relative group [perspective:1200px]">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/25 via-gold/15 to-accent/25 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-8 bottom-2 h-8 bg-black/30 blur-2xl rounded-full" />
              <img
                src={heroVisual.url}
                alt="Site web professionnel Digitorizon — mockup laptop et mobile"
                width={1536}
                height={1024}
                className="relative w-full h-auto float-slow drop-shadow-[0_40px_60px_rgba(15,23,42,0.35)] transition-transform duration-700 will-change-transform group-hover:[transform:rotateY(-4deg)_rotateX(2deg)]"
              />
            </div>

          </div>
        </div>

        {/* Trust bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <div className="rounded-2xl border border-border bg-white/80 backdrop-blur px-5 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><span className="text-primary font-bold">+100</span> projets livrés</span>
            <span className="hidden sm:block text-border">•</span>
            <span>Agence basée en Côte d'Ivoire</span>
            <span className="hidden sm:block text-border">•</span>
            <span>Site + hébergement + nom de domaine + contenu inclus</span>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16 border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Ils nous ont fait confiance
          </p>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-6 items-center">
            {TRUST_LOGOS.map((l, i) => (
              <div key={i} className="flex items-center justify-center reveal" style={{ animationDelay: `${i * 40}ms` }}>
                <img
                  src={l.src}
                  alt={l.alt}
                  loading="lazy"
                  className="h-10 sm:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offre principale */}
      <section id="offre" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl reveal">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Offre principale</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Votre site web, conçu comme votre <span className="text-gradient-brand">meilleur commercial</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nous créons des sites professionnels sur-mesure : rapides, modernes, pensés pour transformer vos visiteurs en prospects. Chaque site est unique, adapté à votre secteur et à vos objectifs — pas de template générique.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Design sur-mesure haut de gamme", d: "Une identité visuelle unique, pensée pour marquer les esprits." },
                { t: "100% responsive", d: "Parfait sur mobile, tablette et desktop, testé sur tous les écrans." },
                { t: "Rédaction de contenu incluse", d: "Nous écrivons vos textes, vous validez. Zéro friction." },
                { t: "Nom de domaine inclus", d: "Votre .com, .ci ou autre : réservé et configuré par nos soins." },
                { t: "Hébergement inclus", d: "Serveur rapide, sécurisé, monitoré — sans souci technique." },
                { t: "Formulaire de contact intégré", d: "Un canal direct pour recevoir des demandes qualifiées." },
                { t: "SEO de base optimisé", d: "Structure, vitesse, balises : prêt pour Google dès le lancement." },
                { t: "Accompagnement mise en ligne", d: "On reste avec vous jusqu'au go-live, et après." },
              ].map((f, i) => (
                <div key={i} className="card-lift rounded-2xl border border-border bg-card p-5 reveal">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <div className="mt-3 font-semibold">{f.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>

            <aside className="lg:col-span-5 reveal">
              <div className="relative rounded-3xl bg-gradient-to-br from-primary to-gold text-white p-8 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold">
                  ★ Solution 100% clé en main
                </span>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                  Un partenaire. Un devis. Un site en ligne.
                </h3>
                <p className="mt-3 text-white/90">
                  Vous n'avez rien à gérer : design, contenu, domaine, hébergement, mise en ligne — tout est inclus dans notre offre.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {["Aucun frais caché", "Livraison rapide", "Un seul interlocuteur", "Support post-lancement"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-white/20 grid place-items-center text-[10px]">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-primary font-semibold px-5 py-3 hover:bg-white/90 transition">
                  Obtenir mon devis →
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-accent font-bold">Pour qui</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  PME, indépendants, cabinets, industriels — toute entreprise qui veut un site qui reflète son professionnalisme et génère des contacts qualifiés.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 reveal">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Réalisations</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
                Plus de <Counter target={100} />+ projets livrés, dans des secteurs exigeants
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Industrie, juridique, santé, logistique, conseil… Nos clients partagent une exigence : un site qui inspire confiance et génère des contacts.
            </p>
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

      {/* Processus - dark */}
      <section id="processus" className="py-24 bg-ink-gradient text-ink-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl reveal">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Processus</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Comment on travaille <span className="text-gradient-brand">ensemble</span>
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Une méthode simple et éprouvée pour livrer un site qui fait la différence, sans stress ni surprise.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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

      {/* Offre secondaire */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 reveal">
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-accent/10 via-white to-primary/10 p-8 sm:p-12 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Offre complémentaire</span>
              <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight">
                Envie qu'on gère tout votre digital ?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Au-delà du site, nous accompagnons certaines entreprises en partenariat complet : gestion des réseaux sociaux, stratégie digitale, présence en ligne globale. Un seul interlocuteur pour tout votre digital.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a href="#contact" className="btn-primary">Discutons stratégie digitale →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center reveal">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">FAQ</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">Questions fréquentes</h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden reveal">
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-semibold">{f.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-primary/10 text-primary grid place-items-center transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 reveal">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Contact</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Prêt à avoir un site qui <span className="text-gradient-brand">travaille pour vous</span> ?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Décrivez-nous votre projet, on revient vers vous rapidement avec une proposition claire.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="mailto:contact@digitorizon.com" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">✉</span>
                <span className="group-hover:text-primary transition">contact@digitorizon.com</span>
              </a>
              <a href="tel:+2250500259286" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center">☎</span>
                <span className="group-hover:text-primary transition">+225 05 00 25 92 86</span>
              </a>
              <a href="https://wa.me/2250500259286" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#128C4A] grid place-items-center">◉</span>
                <span className="group-hover:text-primary transition">WhatsApp direct</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[0_20px_60px_-20px_oklch(0.2_0.02_260_/_0.15)] reveal"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nom complet *" name="name" required />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Téléphone / WhatsApp *" name="phone" required />
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Type de projet</label>
                <select name="project_type" defaultValue="Site vitrine" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>Site vitrine</option>
                  <option>E-commerce</option>
                  <option>Gestion digitale complète</option>
                  <option>Autre</option>
                </select>
              </div>
              <Field label="Budget indicatif" name="budget" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Message / description du projet</label>
                <textarea name="message" rows={5} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <button type="submit" disabled={submitState === "loading"} className="btn-primary disabled:opacity-60">
                {submitState === "loading" ? "Envoi..." : "Envoyer ma demande"}
              </button>
              {submitState === "ok" && <span className="text-sm text-green-600">Merci ! Nous vous recontactons rapidement.</span>}
              {submitState === "error" && <span className="text-sm text-red-600">Une erreur s'est produite. Réessayez ou écrivez-nous directement.</span>}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-ink-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Digitorizon" className="h-10 w-auto brightness-0 invert" width={160} height={40} />
            <p className="mt-4 text-sm text-white/70 max-w-sm">
              Agence Web — Côte d'Ivoire. Nous créons des sites professionnels sur-mesure clé en main, pensés pour convertir.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/share/1CoBaP4SxY/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Digitorizon" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary transition grid place-items-center font-bold">f</a>
              <a href="https://youtube.com/@digitorizon-f4c" target="_blank" rel="noopener noreferrer" aria-label="YouTube Digitorizon" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary transition grid place-items-center font-bold">▶</a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-primary transition">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="mailto:contact@digitorizon.com" className="hover:text-primary transition">contact@digitorizon.com</a></li>
              <li><a href="tel:+2250500259286" className="hover:text-primary transition">+225 05 00 25 92 86</a></li>
              <li><a href="https://wa.me/2250500259286" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-xs text-white/50 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Digitorizon — Tous droits réservés.</span>
            <span>Mentions légales · Fait avec passion en Côte d'Ivoire</span>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-30 btn-primary shadow-[0_18px_40px_-12px_oklch(0.72_0.18_55_/_0.7)] hidden sm:inline-flex"
      >
        Devis gratuit
      </a>
      <a
        href="#contact"
        className="fixed bottom-4 inset-x-4 z-30 btn-primary sm:hidden justify-center"
      >
        Devis gratuit
      </a>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold text-foreground uppercase tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
