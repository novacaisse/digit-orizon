import {
  Globe2,
  Cpu,
  Store,
  Code2,
  Share2,
  Building2,
  Clapperboard,
  LayoutDashboard,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export type ServiceId = "presence" | "sur-mesure" | "zegos";

export type Service = {
  id: ServiceId;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

// Source unique des 3 offres — réutilisée sur l'accueil, la page Services,
// l'étape 1 du formulaire de devis intelligent, et la base de connaissance du chat IA.
export const SERVICES: Service[] = [
  {
    id: "presence",
    icon: Globe2,
    title: "Présence Digitale",
    tagline:
      "Site web, réseaux sociaux et visibilité Google, réunis en une présence en ligne complète.",
    description:
      "Une présence en ligne complète et vivante : site web professionnel, réseaux sociaux animés, visibilité Google, et un agent WhatsApp qui répond à vos clients même quand vous êtes occupé.",
    bullets: ["Site web professionnel", "Réseaux sociaux animés", "Agent WhatsApp intégré"],
  },
  {
    id: "sur-mesure",
    icon: Cpu,
    title: "Solutions Sur Mesure",
    tagline:
      "Application, logiciel ou intelligence artificielle, conçus précisément pour votre activité.",
    description:
      "Votre entreprise a un besoin spécifique qu'aucun outil standard ne couvre ? Nous concevons applications web, logiciels de gestion et intégrations d'intelligence artificielle adaptés précisément à votre activité.",
    bullets: [
      "Applications web sur-mesure",
      "Logiciels de gestion",
      "Intégrations d'intelligence artificielle",
    ],
  },
  {
    id: "zegos",
    icon: Store,
    title: "ZegOS",
    tagline:
      "Caisse digitale, gestion des stocks et suivi financier, pensés pour le commerce africain.",
    description:
      "ZegOS est notre solution de gestion tout-en-un pour les commerces africains : caisse enregistreuse digitale, gestion des stocks, suivi financier — pensée pour le terrain, avec paiement Mobile Money intégré.",
    bullets: ["Caisse digitale ZegCaisse", "Gestion des stocks", "Paiement Mobile Money intégré"],
  },
];

export type ExtraService = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

// Liste élargie de nos prestations concrètes, présentée sur la page Services
// en complément des 3 offres phares ci-dessus.
export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: "application-web",
    icon: Code2,
    title: "Application web sur mesure",
    description: "Une application web pensée pour votre activité, de la conception au déploiement.",
  },
  {
    id: "community-manager",
    icon: Share2,
    title: "Community manager",
    description:
      "Animation de vos réseaux sociaux : contenus, calendrier de publication, engagement.",
  },
  {
    id: "digitalisation-externalisee",
    icon: Building2,
    title: "Digitalisation externalisée",
    description:
      "Votre service digital externalisé, géré par notre équipe comme s'il était le vôtre.",
  },
  {
    id: "affiches-videos",
    icon: Clapperboard,
    title: "Création d'affiches et vidéos",
    description:
      "Supports visuels et vidéos pour vos campagnes, votre communication et vos réseaux.",
  },
  {
    id: "logiciel-gestion",
    icon: LayoutDashboard,
    title: "Logiciel de gestion",
    description:
      "Un outil de gestion sur mesure pour piloter stocks, ventes ou activité au quotidien.",
  },
  {
    id: "integration-ia",
    icon: BrainCircuit,
    title: "Intégration de l'IA en entreprise",
    description:
      "Automatisation et assistants IA intégrés à vos outils pour gagner du temps au quotidien.",
  },
];

export type PresenceTier = {
  name: string;
  highlight?: boolean;
  features: string[];
};

// Comparatif des 3 formules de l'offre "Présence Digitale" — pas de prix chiffré
// affiché : cohérent avec la politique d'un appel de cadrage avant tout devis.
export const PRESENCE_TIERS: PresenceTier[] = [
  {
    name: "Présence",
    features: [
      "Site vitrine professionnel sur-mesure",
      "Hébergement et nom de domaine inclus",
      "Rédaction de contenu incluse",
      "Formulaire de contact intégré",
      "SEO de base optimisé",
    ],
  },
  {
    name: "Croissance",
    highlight: true,
    features: [
      "Tout ce qui est inclus dans Présence",
      "Gestion des réseaux sociaux (création + calendrier)",
      "Optimisation SEO avancée",
      "Agent WhatsApp — réponses automatiques FAQ",
    ],
  },
  {
    name: "Premium",
    features: [
      "Tout ce qui est inclus dans Croissance",
      "Stratégie digitale complète, accompagnement mensuel",
      "Agent WhatsApp propulsé par l'IA (qualification, RDV)",
      "Rapport de performance mensuel",
      "Support prioritaire",
    ],
  },
];
