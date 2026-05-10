import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutGrid, List as ListIcon } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { products, categories, grades, type Product } from "@/data/products";
import heroImg from "@/assets/hero-timber.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Black Woodpecker Limited Catalogue" },
      { name: "description", content: "Browse export-grade timber and charcoal products with detailed specifications." },
      { property: "og:title", content: "Black Woodpecker Limited Product Catalogue" },
      { property: "og:description", content: "Hardwood timber, lumber, lump charcoal and coconut briquettes." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [grade, setGrade] = useState<(typeof grades)[number]>("All");
  const [q, setQ] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (grade !== "All" && p.grade !== grade) return false;
      if (q && !`${p.name} ${p.scientificName ?? ""} ${p.type}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, grade, q]);

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title={<>Export-grade <span className="text-gold-gradient italic">products</span></>}
        description="Filter, search and explore our timber and charcoal range — every entry comes with full export specifications."
        image={heroImg}
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Toolbar */}
          <div className="glass rounded-md p-5 lg:p-6 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all ${
                    cat === c ? "bg-gradient-gold text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search products"
                  className="bg-input/50 border border-border rounded-sm pl-9 pr-4 py-2.5 text-sm w-48 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value as typeof grade)}
                className="bg-input/50 border border-border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-gold"
              >
                {grades.map((g) => <option key={g} value={g}>{g === "All" ? "All Grades" : g}</option>)}
              </select>
              <div className="flex border border-border rounded-sm overflow-hidden">
                <button onClick={() => setView("grid")} className={`p-2.5 ${view === "grid" ? "bg-gradient-gold text-primary-foreground" : "text-muted-foreground"}`} aria-label="Grid"><LayoutGrid size={16} /></button>
                <button onClick={() => setView("list")} className={`p-2.5 ${view === "list" ? "bg-gradient-gold text-primary-foreground" : "text-muted-foreground"}`} aria-label="List"><ListIcon size={16} /></button>
              </div>
            </div>
          </div>

          {/* Results */}
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          <div className="mt-8">
            <AnimatePresence mode="popLayout">
              {view === "grid" ? (
                <motion.div
                  layout
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((p) => (
                    <motion.div
                      key={p.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProductCard product={p} onOpen={setActive} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div layout className="flex flex-col gap-4">
                  {filtered.map((p) => (
                    <motion.button
                      key={p.slug}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setActive(p)}
                      className="group glass rounded-md overflow-hidden flex flex-col sm:flex-row text-left hover:shadow-glow transition-shadow"
                    >
                      <div className="sm:w-64 aspect-video sm:aspect-square overflow-hidden">
                        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="flex-1 p-6 lg:p-8 flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category} · {p.grade}</span>
                        <h3 className="font-display text-2xl mt-2">{p.name}</h3>
                        {p.scientificName && <p className="text-xs italic text-muted-foreground mt-1">{p.scientificName}</p>}
                        <p className="mt-3 text-sm text-muted-foreground">{p.short}</p>
                        <div className="mt-auto pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                          <div><dt className="text-muted-foreground uppercase tracking-wider">Density</dt><dd>{p.density}</dd></div>
                          <div><dt className="text-muted-foreground uppercase tracking-wider">Moisture</dt><dd>{p.moisture}</dd></div>
                          <div><dt className="text-muted-foreground uppercase tracking-wider">MOQ</dt><dd>{p.moq}</dd></div>
                          <div><dt className="text-muted-foreground uppercase tracking-wider">Status</dt><dd className="text-gold">{p.availability}</dd></div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
