export type Realisation = {
  name: string;
  url: string;
  category: string;
  description: string;
};

export const REALISATION_CATEGORIES = [
  "Industrie, négoce & technologie",
  "Finance, conseil & business",
  "Agriculture & agroalimentaire",
  "Immobilier & aménagement",
  "Santé & bien-être",
  "Communication, BTP & sécurité",
  "Ameublement & décoration",
  "Transport, logistique & services",
  "Culture, média & événementiel",
  "E-commerce",
  "Portfolio personnel",
] as const;

export const REALISATIONS: Realisation[] = [
  {
    name: "DMI",
    url: "https://dmisarl-ci.com",
    category: "Industrie, négoce & technologie",
    description:
      "Distribution de matériels informatiques et industriels : fournitures de bureau, équipements IT et consommables pour entreprises à Abidjan.",
  },
  {
    name: "EXLog International",
    url: "https://exloginternational.com",
    category: "Industrie, négoce & technologie",
    description:
      "Négoce de produits chimiques pour le traitement de l'eau, la mine, la cosmétique, l'agroalimentaire et le textile.",
  },
  {
    name: "Ivoire Drone Services",
    url: "https://ivoiredroneservices.com",
    category: "Industrie, négoce & technologie",
    description:
      "Services professionnels par drone : topographie, photogrammétrie, inspection de bâtiments et suivi de chantiers.",
  },
  {
    name: "Afrique Techno",
    url: "https://afriquetechno.com",
    category: "Industrie, négoce & technologie",
    description: "Vente d'équipements technologiques et de solutions numériques.",
  },
  {
    name: "Kaïros WS",
    url: "https://kairos-ws.ci",
    category: "Industrie, négoce & technologie",
    description: "Soudure, chaudronnerie et tuyauterie industrielle.",
  },
  {
    name: "KRUMAN Capital",
    url: "https://krumancapitalinvestment.com",
    category: "Finance, conseil & business",
    description:
      "Financement de projets et de commerce international, solutions de capital stratégique en Afrique.",
  },
  {
    name: "Level Consulting",
    url: "https://levelconsulting.ci",
    category: "Finance, conseil & business",
    description: "Cabinet de formation et de conseil en ressources humaines.",
  },
  {
    name: "Lamadrin Business Consulting",
    url: "https://lamadrinbusinessconsulting.com",
    category: "Finance, conseil & business",
    description:
      "Cabinet de conseil agricole accompagnant PME, coopératives et entrepreneurs vers une croissance durable.",
  },
  {
    name: "CAT Connections",
    url: "https://cat-connections.com",
    category: "Finance, conseil & business",
    description: "Structure d'accompagnement et de mise en relation professionnelle.",
  },
  {
    name: "Wingi Experts",
    url: "https://wingiexperts.org",
    category: "Finance, conseil & business",
    description: "Réseau d'experts dédié à l'accompagnement et à la formation professionnelle.",
  },
  {
    name: "ADEE Group",
    url: "https://adee-group.com",
    category: "Finance, conseil & business",
    description: "Groupe proposant plusieurs activités et prestations aux entreprises.",
  },
  {
    name: "Elonga Winner",
    url: "https://elongawinner.com",
    category: "Finance, conseil & business",
    description: "Structure de services et d'accompagnement aux entreprises.",
  },
  {
    name: "EAA Clairnet",
    url: "https://eaa-clairnet.com",
    category: "Finance, conseil & business",
    description: "Structure de services proposant prestations et accompagnement aux entreprises.",
  },
  {
    name: "CASIB Coop-CA",
    url: "https://casibcoop-ca.com",
    category: "Agriculture & agroalimentaire",
    description: "Coopérative agricole ivoirienne active dans la filière cacao.",
  },
  {
    name: "Mohamed & Co",
    url: "https://mohamedandco.net",
    category: "Agriculture & agroalimentaire",
    description:
      "Torréfacteur et boutique en ligne de café — dont le café Touba — entre tradition et innovation.",
  },
  {
    name: "DRO Groupe",
    url: "https://drogroupe.net",
    category: "Immobilier & aménagement",
    description: "Aménagement foncier, immobilier et agroalimentaire.",
  },
  {
    name: "Groupe Le Bourgeois",
    url: "https://groupelebourgeois.ci",
    category: "Immobilier & aménagement",
    description: "Groupe ivoirien actif dans plusieurs secteurs d'activité.",
  },
  {
    name: "Santé Succès",
    url: "https://santesucces.com",
    category: "Santé & bien-être",
    description:
      "Centre de régénération cellulaire et solutions de santé naturelle pour le bien-être au quotidien.",
  },
  {
    name: "IS'COM",
    url: "https://iscom.africa",
    category: "Communication, BTP & sécurité",
    description: "Agence de publicité, BTP et sécurité à Abidjan.",
  },
  {
    name: "SNS",
    url: "https://sns-group.ci",
    category: "Communication, BTP & sécurité",
    description: "Société de nettoyage et de services aux entreprises.",
  },
  {
    name: "Salon Sérénité",
    url: "https://serenite.ci",
    category: "Communication, BTP & sécurité",
    description:
      "Salon professionnel dédié à la sécurité globale en Côte d'Ivoire et en Afrique de l'Ouest.",
  },
  {
    name: "Afrilux Groupe",
    url: "https://afriluxgroupe.ci",
    category: "Ameublement & décoration",
    description:
      "Mobilier sur-mesure, menuiserie aluminium, cuisines équipées et décoration d'intérieur.",
  },
  {
    name: "Sadima Logistics",
    url: "https://sadimalogistics.com",
    category: "Transport, logistique & services",
    description: "Transport et logistique de marchandises en Côte d'Ivoire.",
  },
  {
    name: "Lysra Services",
    url: "https://lysraservices.com",
    category: "Transport, logistique & services",
    description: "Conciergerie et services logistiques sur mesure.",
  },
  {
    name: "CLC Côte d'Ivoire",
    url: "https://clc-cotedivoire.com",
    category: "Culture, média & événementiel",
    description:
      "Librairie chrétienne et maison d'édition, avec points de vente à Abidjan et à Bouaké.",
  },
  {
    name: "Bonne Gouvernance",
    url: "https://bonnegouvernance.net",
    category: "Culture, média & événementiel",
    description: "Média ivoirien d'information dédié à la transparence et à la bonne gouvernance.",
  },
  {
    name: "INAHOS",
    url: "https://inahos.store",
    category: "E-commerce",
    description: "Boutique en ligne proposant une sélection de produits à la vente.",
  },
  {
    name: "Zegbe.pro",
    url: "https://zegbe.pro",
    category: "Portfolio personnel",
    description: "Site professionnel de Zegbe Kahapeu Anselme-Prudent, fondateur de Digitorizon.",
  },
];
