import { ICON_DATA_URI } from "@/lib/brand";
import { BrandArc } from "@/components/site/BrandArc";

export function HeroMockup() {
  return (
    <div className="relative [perspective:1200px]">
      <BrandArc variant="hero" className="absolute -inset-16 w-[140%] h-[140%] opacity-70" />
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-white/10 to-accent/20 blur-3xl opacity-80" />

      {/* Formes flottantes décoratives */}
      <div
        className="absolute -top-8 -left-6 w-14 h-14 rounded-full bg-gradient-to-br from-gold to-primary shadow-[0_10px_30px_-8px_#F7941D99] float-slow hidden sm:block"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-6 -right-8 w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-[#8BD3F0] shadow-[0_10px_30px_-8px_#29ABE299] float-slow hidden sm:block"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute -bottom-4 left-8 w-9 h-9 rounded-full border-4 border-gold/70 float-slow hidden sm:block"
        style={{ animationDelay: "0.8s" }}
      />

      {/* Laptop */}
      <div className="relative mockup-tilt rounded-2xl bg-white border border-border shadow-[0_40px_60px_-20px_#12100E59] overflow-hidden float-slow">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/60">
          <img src={ICON_DATA_URI} alt="" width={18} height={18} className="rounded-sm" />
          <span className="text-xs font-bold text-foreground">Digitorizon</span>
          <div className="ml-auto hidden sm:flex items-center gap-3 text-[10px] text-muted-foreground">
            <span>Services</span>
            <span>À propos</span>
            <span>Contact</span>
          </div>
          <span className="ml-3 sm:ml-3 rounded-md bg-primary px-2 py-1 text-[9px] font-semibold text-white whitespace-nowrap">
            Devis gratuit
          </span>
        </div>
        <div className="relative bg-hero-gradient px-6 py-8 sm:py-10 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 animated-gradient" />
          <p className="text-lg sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight">
            Visible et organisée en ligne,
            <br />
            <span className="text-gradient-brand">sans le casse-tête.</span>
          </p>
          <div className="mt-4 h-2 w-2/3 rounded-full bg-foreground/10" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/10" />
          <span className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white">
            Démarrer mon projet
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-border bg-muted/50 p-3">
              <div className="h-2 w-8 rounded-full bg-primary/40 mb-2" />
              <div className="h-1.5 w-full rounded-full bg-foreground/10 mb-1" />
              <div className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="absolute -bottom-8 -right-3 sm:-right-10 w-28 sm:w-36 mockup-tilt rounded-[1.4rem] bg-white border-4 border-ink shadow-[0_30px_50px_-20px_#12100E66] overflow-hidden">
        <div className="flex items-center gap-1 px-2 py-1.5 bg-muted/60">
          <img src={ICON_DATA_URI} alt="" width={10} height={10} className="rounded-sm" />
          <span className="text-[7px] font-bold text-foreground">Digitorizon</span>
        </div>
        <div className="bg-hero-gradient px-2.5 py-3">
          <div className="h-1.5 w-4/5 rounded-full bg-foreground/70 mb-1" />
          <div className="h-1.5 w-3/5 rounded-full bg-foreground/70 mb-2" />
          <span className="inline-flex rounded bg-primary px-2 py-1 text-[6px] font-semibold text-white">
            Devis gratuit
          </span>
        </div>
      </div>
    </div>
  );
}
