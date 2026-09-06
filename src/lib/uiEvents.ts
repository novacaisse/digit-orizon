import type { ServiceId } from "@/lib/services";

// Petit bus d'événements pour déclencher les modals (formulaire de devis, chat)
// depuis n'importe quel CTA, sur n'importe quelle page, sans prop-drilling
// et sans ajouter de gestionnaire d'état global.

const OPEN_QUOTE_FORM = "digitorizon:open-quote-form";
const OPEN_CHAT = "digitorizon:open-chat";

export function openQuoteForm(prefillNeed?: ServiceId) {
  window.dispatchEvent(
    new CustomEvent<{ prefillNeed?: ServiceId }>(OPEN_QUOTE_FORM, { detail: { prefillNeed } }),
  );
}

export function onOpenQuoteForm(handler: (prefillNeed?: ServiceId) => void) {
  const listener = (e: Event) =>
    handler((e as CustomEvent<{ prefillNeed?: ServiceId }>).detail?.prefillNeed);
  window.addEventListener(OPEN_QUOTE_FORM, listener);
  return () => window.removeEventListener(OPEN_QUOTE_FORM, listener);
}

export function openChat() {
  window.dispatchEvent(new CustomEvent(OPEN_CHAT));
}

export function onOpenChat(handler: () => void) {
  window.addEventListener(OPEN_CHAT, handler);
  return () => window.removeEventListener(OPEN_CHAT, handler);
}
