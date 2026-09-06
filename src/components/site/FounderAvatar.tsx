/**
 * Avatar stylisé et abstrait (pas une fausse photo) en attendant un vrai portrait.
 */
export function FounderAvatar({ initials = "ZK" }: { initials?: string }) {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-gold to-accent opacity-90" />
      <div className="absolute inset-[3px] rounded-full bg-ink grid place-items-center">
        <span className="text-2xl sm:text-3xl font-bold text-ink-foreground">{initials}</span>
      </div>
    </div>
  );
}
