import { useRef, useState, type FormEvent, type ReactNode } from "react";

import { SERVICES, type ServiceId } from "@/lib/services";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzewokk";

type SubmitState = "idle" | "loading" | "ok" | "error";

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

// Variante non contrôlée : pour les champs dont la sélection n'a besoin
// d'être lue qu'au submit (via FormData), sans piloter d'affichage conditionnel.
function PlainSelect({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <select
        name={name}
        defaultValue={options[0]}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function ProgressBar({ step }: { step: 1 | 2 | 3 | 4 }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
        <span>Étape {Math.min(step, 4)}/4</span>
        <span>
          {step === 1 && "Votre besoin"}
          {step === 2 && "Votre projet"}
          {step === 3 && "Vos coordonnées"}
          {step === 4 && "C'est envoyé"}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full animated-gradient transition-all duration-500"
          style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
        />
      </div>
    </div>
  );
}

function NeedCard({
  active,
  onClick,
  title,
  tagline,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  tagline: string;
  icon: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-left rounded-2xl border p-5 transition-all",
        active
          ? "border-primary bg-primary/5 shadow-[0_10px_30px_-10px_#F7941D59]"
          : "border-border bg-card hover:border-primary/40",
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-lg grid place-items-center",
          active ? "bg-primary text-white" : "bg-muted text-foreground",
        )}
      >
        {icon}
      </div>
      <div className="mt-3 font-semibold">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
    </button>
  );
}

export function QuoteForm({
  prefillNeed,
  onSubmitted,
}: {
  prefillNeed?: ServiceId;
  onSubmitted?: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [need, setNeed] = useState<ServiceId | null>(prefillNeed ?? null);
  const [needError, setNeedError] = useState(false);
  const [hasSite, setHasSite] = useState("Non");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const goNext = () => {
    if (step === 1) {
      if (!need) {
        setNeedError(true);
        return;
      }
      setStep(2);
      return;
    }
    if (formRef.current?.reportValidity()) {
      setStep((s) => (s === 2 ? 3 : s));
    }
  };

  const goBack = () => setStep((s) => (s === 3 ? 2 : s === 2 ? 1 : s));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current?.reportValidity()) return;
    const form = e.currentTarget;
    setSubmitState("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setSubmitState("ok");
        onSubmitted?.();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "ok") {
    return (
      <div className="text-center py-10">
        <ProgressBar step={4} />
        <div className="text-4xl">✓</div>
        <h3 className="mt-4 text-xl font-bold">Merci, votre demande est bien reçue !</h3>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          Nous vous appelons sous 24h pour cadrer votre projet, puis vous recevrez une proposition
          détaillée par email.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <ProgressBar step={step} />

      <div hidden={step !== 1}>
        <p className="text-sm text-muted-foreground mb-4">Quel est votre besoin principal ?</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <NeedCard
                key={s.id}
                active={need === s.id}
                onClick={() => {
                  setNeed(s.id);
                  setNeedError(false);
                }}
                title={s.title}
                tagline={s.tagline}
                icon={<Icon className="w-5 h-5" strokeWidth={1.75} />}
              />
            );
          })}
        </div>
        {needError && (
          <p className="mt-3 text-sm text-red-600">Merci de choisir une option pour continuer.</p>
        )}
        <input
          type="hidden"
          name="besoin_principal"
          value={need ? SERVICES.find((s) => s.id === need)?.title : ""}
        />
      </div>

      <div hidden={step !== 2} className="grid sm:grid-cols-2 gap-4">
        {need === "presence" && (
          <>
            <Field label="Domaine d'activité" name="industry" required={step === 2} />
            <SelectField
              label="Avez-vous déjà un site web ?"
              name="has_existing_site"
              options={["Non", "Oui"]}
              value={hasSite}
              onChange={setHasSite}
            />
            {hasSite === "Oui" && (
              <Field
                label="URL de votre site actuel"
                name="existing_site_url"
                className="sm:col-span-2"
              />
            )}
            <PlainSelect
              label="Objectif principal"
              name="objectif_principal"
              options={["Plus de clients", "Image professionnelle", "Vendre en ligne"]}
              className="sm:col-span-2"
            />
          </>
        )}
        {need === "sur-mesure" && (
          <>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-foreground">
                Description rapide de votre besoin
              </label>
              <textarea
                name="project_description"
                required={step === 2}
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <PlainSelect
              label="Avez-vous un cahier des charges ?"
              name="cahier_des_charges"
              options={["Non", "En cours de rédaction", "Oui"]}
              className="sm:col-span-2"
            />
          </>
        )}
        {need === "zegos" && (
          <>
            <PlainSelect
              label="Type de commerce"
              name="type_commerce"
              options={["Boutique", "Hôtel", "Restaurant", "Autre"]}
            />
            <PlainSelect
              label="Nombre de points de vente"
              name="nombre_points_vente"
              options={["1", "2 à 5", "6 et plus"]}
            />
          </>
        )}
      </div>

      <div hidden={step !== 3} className="grid sm:grid-cols-2 gap-4">
        <Field label="Nom complet *" name="name" required={step === 3} />
        <Field label="Nom de l'entreprise" name="company" />
        <Field label="WhatsApp *" name="phone" required={step === 3} />
        <Field label="Email *" name="email" type="email" required={step === 3} />
        <PlainSelect
          label="Budget indicatif"
          name="budget"
          options={[
            "Moins de 100 000 FCFA",
            "100 000 - 500 000 FCFA",
            "Plus de 500 000 FCFA",
            "Je ne sais pas encore",
          ]}
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-6 flex items-center gap-3 flex-wrap">
        {step > 1 && (
          <button type="button" onClick={goBack} className="btn-ghost">
            Précédent
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={goNext} className="btn-primary">
            Suivant
          </button>
        )}
        {step === 3 && (
          <button
            type="submit"
            disabled={submitState === "loading"}
            className="btn-primary disabled:opacity-60"
          >
            {submitState === "loading" ? "Envoi..." : "Envoyer ma demande"}
          </button>
        )}
        {submitState === "error" && (
          <span className="text-sm text-red-600">
            Une erreur s'est produite. Réessayez ou écrivez-nous directement.
          </span>
        )}
      </div>
    </form>
  );
}
