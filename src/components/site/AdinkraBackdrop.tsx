/**
 * Subtle Adinkra motif backdrop using authentic Ghanaian symbols.
 * Image is white-background black symbols; we invert + tint to gold and
 * blend at low opacity over the dark forest base.
 */
export function AdinkraBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: "url('/adinkra-motifs.png')",
        backgroundSize: "320px 320px",
        backgroundRepeat: "repeat",
        filter: "invert(1) sepia(1) saturate(5) hue-rotate(5deg) brightness(0.9)",
        mixBlendMode: "screen",
        opacity: 0.06,
      }}
    />
  );
}
