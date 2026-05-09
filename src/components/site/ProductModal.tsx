import { motion, AnimatePresence } from "framer-motion";
import { X, Download, MessageCircle, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { Link } from "@tanstack/react-router";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [active, setActive] = useState(0);

  useEffect(() => { setActive(0); }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="relative glass-strong border border-border rounded-md w-full max-w-6xl max-h-[92vh] overflow-y-auto shadow-elevated"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass inline-flex items-center justify-center text-foreground hover:text-gold transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="bg-ink p-6 lg:p-10">
                <div className="aspect-square rounded-sm overflow-hidden bg-card">
                  <motion.img
                    key={active}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={product.gallery[active]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex gap-3">
                  {product.gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-16 w-16 rounded-sm overflow-hidden border-2 transition-all ${
                        active === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={g} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 lg:p-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{product.category} · {product.grade}</span>
                <h2 className="font-display text-3xl lg:text-4xl mt-2">{product.name}</h2>
                {product.scientificName && (
                  <p className="text-sm italic text-muted-foreground mt-1">{product.scientificName}</p>
                )}
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
                  <Spec label="Density" value={product.density} />
                  <Spec label="Moisture" value={product.moisture} />
                  <Spec label="Availability" value={product.availability} />
                  <Spec label="MOQ" value={product.moq} />
                  <Spec label="Sizes" value={product.sizes.join(" · ")} className="col-span-2" />
                  <Spec label="Packaging" value={product.packaging} className="col-span-2" />
                  <Spec label="Export Regions" value={product.regions.join(", ")} className="col-span-2" />
                  <Spec label="Shipping" value={product.shipping} className="col-span-2" />
                </dl>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow"
                  >
                    <FileText size={14} /> Request Quote
                  </Link>
                  <a
                    href={`https://wa.me/254700000000?text=Hello%20TimberX%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] glass border border-border rounded-sm hover:border-gold transition-colors"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <button className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors">
                    <Download size={14} /> Spec PDF
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Spec({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-foreground">{value}</dd>
    </div>
  );
}
