/**
 * Subtle, fixed Adinkra-inspired pattern overlay rendered behind all content.
 * Uses Gye Nyame, Sankofa-spiral, Dwennimmen and Adinkrahene-style motifs
 * tiled at very low opacity to reinforce the Ghana identity without
 * competing with foreground content.
 */
export function AdinkraBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] mix-blend-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240' fill='none' stroke='%23c9a84c' stroke-width='1.2'>
            <!-- Adinkrahene: concentric circles -->
            <circle cx='40' cy='40' r='6'/>
            <circle cx='40' cy='40' r='12'/>
            <circle cx='40' cy='40' r='18'/>
            <!-- Dwennimmen: ram horns abstraction -->
            <path d='M150 30 q-10 12 0 24 q10 -12 0 -24 z M170 30 q10 12 0 24 q-10 -12 0 -24 z'/>
            <!-- Sankofa spiral -->
            <path d='M60 150 q-18 0 -18 18 q0 18 18 18 q18 0 18 -18 q0 -10 -10 -10 q-10 0 -10 10'/>
            <!-- Gye Nyame star burst -->
            <path d='M180 160 l6 -18 l6 18 l18 6 l-18 6 l-6 18 l-6 -18 l-18 -6 z'/>
            <circle cx='186' cy='166' r='3'/>
            <!-- Diamond grid accents -->
            <path d='M120 100 l10 10 l-10 10 l-10 -10 z'/>
            <path d='M120 220 l10 10 l-10 10 l-10 -10 z'/>
          </svg>`
        )}")`,
        backgroundSize: "240px 240px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
