// Petit bus d'événements pour déclencher le chat depuis n'importe quel CTA,
// sur n'importe quelle page, sans prop-drilling et sans state manager global.

const OPEN_CHAT = "digitorizon:open-chat";

const QUOTE_FORM_URL = "https://digitorizon-os.vercel.app/f/digitorizon-com";

// Ouvre le formulaire de devis externe dans une fenêtre popup — pas d'iframe,
// car on ne peut pas garantir que ce service autorise l'intégration (CSP/X-Frame-Options).
export function openQuoteForm() {
  window.open(QUOTE_FORM_URL, "digitorizon-devis", "width=560,height=800,noopener,noreferrer");
}

export function openChat() {
  window.dispatchEvent(new CustomEvent(OPEN_CHAT));
}

export function onOpenChat(handler: () => void) {
  window.addEventListener(OPEN_CHAT, handler);
  return () => window.removeEventListener(OPEN_CHAT, handler);
}
