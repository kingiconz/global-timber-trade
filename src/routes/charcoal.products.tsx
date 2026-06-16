import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { charcoalProducts } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Product } from "@/data/products";

export const Route = createFileRoute("/charcoal/products")({
  head: () => ({
    meta: [
      { title: "All Charcoal Products — Black Woodpecker Charcoal" },
      { name: "description", content: "Browse our full range of premium hardwood lump charcoal, hexagonal and cube briquettes, coconut shell charcoal, and restaurant-grade selections." },
      { property: "og:title", content: "All Charcoal Products — Black Woodpecker" },
      { property: "og:description", content: "Full catalogue of export-grade charcoal: lump, briquettes, coconut and restaurant-grade." },
    ],
  }),
  component: CharcoalProductsPage,
});

function CharcoalProductsPage() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3 h-16 sm:h-20">
          <Link to="/charcoal" className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground font-display text-lg font-bold shadow-glow flex-shrink-0">
              B
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base sm:text-xl tracking-wide">Black Woodpecker</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold mt-1">Charcoal Division</span>
            </div>
          </Link>
          <Link
            to="/charcoal"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs uppercase tracking-[0.2em] glass border border-border rounded-sm hover:border-gold transition-colors"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </header>

      <section className="pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Full Catalogue"
            title={<>All <span className="text-gold-gradient italic">charcoal</span> products</>}
            description="Explore every grade and format we ship — from branded retail bags to industrial briquettes and coconut shell charcoal."
          />

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {charcoalProducts.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} onOpen={setActive} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-gradient-forest overflow-hidden">
        <div aria-hidden className="absolute inset-0 adinkra-tile-strong opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Black Woodpecker Limited · Charcoal Division.</p>
          <Link to="/charcoal" className="uppercase tracking-[0.2em] hover:text-gold transition-colors">← Back to Charcoal Home</Link>
        </div>
      </footer>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </div>
  );
}
