export type Testimonial = {
  quote: string;
  role: string;
};

// Exemples de mise en page en attendant de vrais témoignages clients.
// Volontairement non attribués à un nom de personne réelle — à remplacer
// par le client dès que des retours écrits sont disponibles.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Un site livré rapidement et un accompagnement clair du premier appel à la mise en ligne.",
    role: "Dirigeant, cabinet juridique — Abidjan",
  },
  {
    quote: "Enfin une présence en ligne qui reflète le sérieux de notre activité.",
    role: "Gérante, centre de soins — Abidjan",
  },
  {
    quote: "Process simple, prix transparent, aucune mauvaise surprise en cours de projet.",
    role: "Responsable, société de logistique — Côte d'Ivoire",
  },
];
