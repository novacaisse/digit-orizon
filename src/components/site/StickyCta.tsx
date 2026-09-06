import { openQuoteForm } from "@/lib/uiEvents";

export function StickyCta() {
  return (
    <>
      <button
        type="button"
        onClick={() => openQuoteForm()}
        className="fixed bottom-5 right-5 z-30 btn-primary shadow-[0_18px_40px_-12px_#F7941DB3] hidden sm:inline-flex"
      >
        Devis gratuit
      </button>
      <button
        type="button"
        onClick={() => openQuoteForm()}
        className="fixed bottom-4 inset-x-4 z-30 btn-primary sm:hidden justify-center"
      >
        Devis gratuit
      </button>
    </>
  );
}
