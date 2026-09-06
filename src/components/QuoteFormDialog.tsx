import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { onOpenQuoteForm } from "@/lib/uiEvents";
import type { ServiceId } from "@/lib/services";

export function QuoteFormDialog() {
  const [open, setOpen] = useState(false);
  const [prefillNeed, setPrefillNeed] = useState<ServiceId | undefined>(undefined);
  // Remonte le formulaire à chaque ouverture pour repartir de l'étape 1.
  const [key, setKey] = useState(0);

  useEffect(() => {
    return onOpenQuoteForm((need) => {
      setPrefillNeed(need);
      setKey((k) => k + 1);
      setOpen(true);
    });
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Demander mon devis gratuit</DialogTitle>
          <DialogDescription>
            4 étapes rapides, on vous appelle ensuite pour cadrer votre projet.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm key={key} prefillNeed={prefillNeed} />
      </DialogContent>
    </Dialog>
  );
}
