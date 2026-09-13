import awg from "@/assets/clients/awg.png";
import casib from "@/assets/clients/casib.png";
import dmi from "@/assets/clients/dmi.png";
import levelConsulting from "@/assets/clients/level-consulting.png";
import sns from "@/assets/clients/sns.png";
import kws from "@/assets/clients/kws.png";
import exlog from "@/assets/clients/exlog.png";
import santesucces from "@/assets/clients/santesucces.png";
import clc from "@/assets/clients/clc.png";
import iscom from "@/assets/clients/iscom.png";
import zegos from "@/assets/clients/zegos.png";

const LOGOS = [
  { src: awg, alt: "Akindin Ward Group — client Digitorizon" },
  { src: casib, alt: "Casib Coop-CA — client Digitorizon" },
  { src: dmi, alt: "DMI — client Digitorizon" },
  { src: levelConsulting, alt: "Level Consulting — client Digitorizon" },
  { src: sns, alt: "SNS Société de Nettoyage et Services — client Digitorizon" },
  { src: kws, alt: "Kaïros Welding Services — client Digitorizon" },
  { src: exlog, alt: "EXLog International — client Digitorizon" },
  { src: santesucces, alt: "Santé Succès — client Digitorizon" },
  { src: clc, alt: "CLC Côte d'Ivoire — client Digitorizon" },
  { src: iscom, alt: "IS'COM — client Digitorizon" },
  { src: zegos, alt: "ZegOS — solution développée par Digitorizon" },
];

/**
 * Bandeau "Ils nous ont fait confiance" — composant partagé pour rester
 * cohérent partout où il apparaît (accueil, services, à propos, contact).
 */
export function TrustedBy() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow">Ils nous ont fait confiance</span>
          <p className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
            Plus de <span className="text-gradient-brand">50 entreprises</span> nous accordent leur
            confiance
          </p>
        </div>
        <div className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-5 sm:gap-6 marquee w-max">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center h-20 sm:h-24 w-40 sm:w-48 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-5"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
