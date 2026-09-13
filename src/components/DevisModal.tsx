import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { onOpenQuoteForm, QUOTE_FORM_URL } from "@/lib/uiEvents";

/**
 * Overlay plein écran affichant le formulaire de devis externe dans une iframe.
 * On ne peut pas garantir depuis ici que ce service autorise l'intégration en
 * iframe (CSP/X-Frame-Options) — un lien de secours reste toujours visible en
 * cas d'écran blanc.
 */
export function DevisModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => onOpenQuoteForm(() => setOpen(true)), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-ink flex flex-col">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-ink text-ink-foreground">
        <span className="font-semibold text-sm sm:text-base">Demander mon devis gratuit</span>
        <div className="flex items-center gap-4">
          <a
            href={QUOTE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-xs text-white/60 hover:text-white transition underline underline-offset-2"
          >
            Le formulaire ne s'affiche pas ? Ouvrir dans un nouvel onglet
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition grid place-items-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <iframe
        src={QUOTE_FORM_URL}
        title="Formulaire de devis Digitorizon"
        className="flex-1 w-full bg-white"
      />
    </div>
  );
}
