import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  return (
    <motion.button
      onClick={() => onOpen(product)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative text-left glass rounded-md overflow-hidden hover:shadow-glow transition-shadow duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden relative bg-[#0d0907]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 ${product.category === "Charcoal" ? "brightness-[.78] contrast-[1.05]" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 bg-gradient-gold text-primary-foreground rounded-sm">
          {product.grade}
        </span>
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-foreground">{product.name}</h3>
            {product.scientificName && (
              <p className="text-xs italic text-muted-foreground mt-1">{product.scientificName}</p>
            )}
          </div>
          <span className="h-9 w-9 rounded-full border border-border inline-flex items-center justify-center text-gold group-hover:bg-gradient-gold group-hover:text-primary-foreground group-hover:border-transparent transition-all">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{product.short}</p>
      </div>
    </motion.button>
  );
}
