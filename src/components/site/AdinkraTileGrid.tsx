/**
 * Render a 2x5 grid of motif images using the numbered public PNGs.
 * Each motif appears once in a centered cell for a clean, non-repeating backdrop.
 */
export function AdinkraTileGrid() {
  const motifFiles = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
  ];

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gridTemplateRows: "repeat(2, minmax(0, 1fr))",
          gap: "1.5rem",
          padding: "4% 6%",
        }}
      >
        {motifFiles.map((src) => (
          <div
            key={src}
            className="relative motif-white"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              mixBlendMode: "screen",
              opacity: 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
