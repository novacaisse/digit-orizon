// Petit bus d'événements pour déclencher les modals (devis, chat) depuis
// n'importe quel CTA, sur n'importe quelle page, sans prop-drilling et sans
// state manager global.

const OPEN_CHAT = "digitorizon:open-chat";
const OPEN_DEVIS = "digitorizon:open-devis";

export const QUOTE_FORM_URL = "https://digitorizon-os.vercel.app/f/digitorizon-com";

export function openQuoteForm() {
  window.dispatchEvent(new CustomEvent(OPEN_DEVIS));
}

export function onOpenQuoteForm(handler: () => void) {
  window.addEventListener(OPEN_DEVIS, handler);
  return () => window.removeEventListener(OPEN_DEVIS, handler);
}

export function openChat() {
  window.dispatchEvent(new CustomEvent(OPEN_CHAT));
}

export function onOpenChat(handler: () => void) {
  window.addEventListener(OPEN_CHAT, handler);
  return () => window.removeEventListener(OPEN_CHAT, handler);
}
