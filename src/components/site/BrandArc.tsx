import { useId } from "react";

type BrandArcProps = {
  variant?: "hero" | "divider";
  flip?: boolean;
  className?: string;
};

/**
 * L'arc du logo (orange → blanc → bleu) réutilisé comme motif visuel signature.
 * `pathLength={1}` fixe la longueur logique du tracé à 1, quelle que soit sa
 * géométrie réelle — ça permet à `.brand-arc-path` (stroke-dasharray/offset en
 * styles.css) d'animer le "dessin" du trait sans mesurer la courbe au runtime.
 */
export function BrandArc({ variant = "divider", flip = false, className = "" }: BrandArcProps) {
  const gradientId = useId();

  if (variant === "hero") {
    return (
      <svg
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
        className={`pointer-events-none ${className}`}
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="60"
            y1="540"
            x2="540"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#F7941D" />
            <stop offset="50%" stopColor="#FAF9F7" />
            <stop offset="100%" stopColor="#29ABE2" />
          </linearGradient>
        </defs>
        <path
          className="brand-arc-path"
          pathLength={1}
          d="M 60 540 A 480 480 0 0 1 540 60"
          stroke={`url(#${gradientId})`}
          strokeWidth={36}
          strokeLinecap="round"
          opacity={0.16}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={`w-full ${flip ? "-scale-y-100" : ""} ${className}`}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="1200"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F7941D" />
          <stop offset="50%" stopColor="#FAF9F7" />
          <stop offset="100%" stopColor="#29ABE2" />
        </linearGradient>
      </defs>
      <path
        d="M 0 8 Q 300 40 600 24 T 1200 12"
        stroke={`url(#${gradientId})`}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}
