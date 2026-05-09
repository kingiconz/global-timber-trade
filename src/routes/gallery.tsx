import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-timber.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import sustainImg from "@/assets/sustainability.jpg";
import teakImg from "@/assets/product-teak.jpg";
import charcoalImg from "@/assets/product-charcoal.jpg";
import rosewoodImg from "@/assets/product-rosewood.jpg";
import briquettesImg from "@/assets/product-briquettes.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — TimberX" },
      { name: "description", content: "Timber yards, charcoal packaging, container loading and export operations." },
      { property: "og:title", content: "TimberX Gallery" },
      { property: "og:description", content: "Behind-the-scenes look at our export operations." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroImg, label: "Timber yard at dusk", h: "tall" },
  { src: charcoalImg, label: "Hardwood lump charcoal", h: "short" },
  { src: logisticsImg, label: "Container terminal", h: "short" },
  { src: teakImg, label: "Premium teak planks", h: "tall" },
  { src: sustainImg, label: "Sustainable forestry", h: "short" },
  { src: rosewoodImg, label: "Rosewood lumber grain", h: "tall" },
  { src: briquettesImg, label: "Coconut briquette packaging", h: "short" },
  { src: heroImg, label: "Export warehouse", h: "tall" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside our <span className="text-gold-gradient italic">operations</span></>}
        description="From timber yards and milling floors to packaging halls and shipping terminals."
        image={logisticsImg}
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {items.map((it, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                onClick={() => setOpen(it.src)}
                className={`group relative mb-6 break-inside-avoid w-full overflow-hidden rounded-md glass hover:shadow-glow transition-shadow block`}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className={`w-full ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover transition-transform duration-[1200ms] group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-foreground/90">{it.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-ink/90 backdrop-blur-md"
          >
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 h-12 w-12 rounded-full glass-strong inline-flex items-center justify-center text-foreground hover:text-gold transition-colors" aria-label="Close">
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={open}
              alt=""
              className="max-h-[88vh] max-w-[88vw] object-contain rounded-md shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
