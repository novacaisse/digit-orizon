import type { LucideIcon } from "lucide-react";

import { BrandArc } from "@/components/site/BrandArc";

type IllustrationProps = {
  icon: LucideIcon;
  variant?: "orange" | "blue" | "ink";
  chips?: string[];
  className?: string;
};

const ACCENTS: Record<NonNullable<IllustrationProps["variant"]>, string> = {
  orange: "#F7941D",
  blue: "#29ABE2",
  ink: "#12100E",
};

/**
 * Panneau d'illustration réutilisé pour toutes les scènes du site (hero secondaire,
 * blocs "Ce que nous faisons", principes d'approche, ZegOS...) : mêmes dégradés,
 * même arc de marque en fond, même traitement d'icône — pour garder une identité
 * visuelle cohérente sans dépendre d'une génération d'images externe.
 */
export function Illustration({
  icon: Icon,
  variant = "orange",
  chips = [],
  className = "",
}: IllustrationProps) {
  const accent = ACCENTS[variant];

  return (
    <div
      className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-hero-gradient ${className}`}
    >
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-30"
        style={{ background: accent }}
      />
      <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full blur-2xl opacity-20 bg-accent" />
      <BrandArc variant="hero" className="absolute inset-0 w-full h-full opacity-30" />

      <div className="relative h-full grid place-items-center">
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl grid place-items-center shadow-[0_20px_40px_-14px_#12100E40] float-slow"
          style={{ background: `linear-gradient(135deg, ${accent}, #F5B942)` }}
        >
          <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {chips.map((chip, i) =>
        i % 2 === 0 ? (
          <span
            key={chip}
            className="absolute top-[12%] right-[8%] rounded-full bg-white shadow-md px-3 py-1 text-xs font-semibold text-foreground"
            style={{ marginTop: `${Math.floor(i / 2) * 34}px` }}
          >
            {chip}
          </span>
        ) : (
          <span
            key={chip}
            className="absolute bottom-[14%] left-[8%] rounded-full bg-white shadow-md px-3 py-1 text-xs font-semibold text-foreground"
            style={{ marginBottom: `${Math.floor(i / 2) * 34}px` }}
          >
            {chip}
          </span>
        ),
      )}
    </div>
  );
}
