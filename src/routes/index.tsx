import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, ShieldCheck, Globe2, Leaf, Truck, Sprout, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-timber.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Product } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Woodpecker Limited — Premium African Timber Exports" },
      { name: "description", content: "Sustainably sourced export-grade African hardwood timber delivered to global markets." },
      { property: "og:title", content: "Black Woodpecker Limited — Premium Timber Exports" },
      { property: "og:description", content: "Global exporter of premium African hardwood timber." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 15, suffix: "+", label: "Years of Export Excellence" },
  { value: 42, suffix: "", label: "Countries Served" },
  { value: 1800, suffix: "+", label: "Containers Shipped" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
];

const pillars = [
  { icon: ShieldCheck, title: "Verified Quality", text: "Every shipment passes a rigorous multi-stage QA audit before sealing the container." },
  { icon: Globe2, title: "Global Reach", text: "Active export corridors across the EU, Gulf, Asia and the Americas." },
  { icon: Leaf, title: "Sustainable Sourcing", text: "FSC-aligned harvest plans with transparent chain-of-custody documentation." },
  { icon: Truck, title: "End-to-End Logistics", text: "Door-to-port to door — we handle freight, paperwork and customs." },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
          <img src={heroImg} alt="Premium timber export yard" width={1920} height={1280} className="h-[120%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.4em] text-gold"
          >
            Est. 2009 · Global Exporter
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl leading-[1.05]"
          >
            Premium African <br />
            <span className="text-gold-gradient italic">Hardwood Timber</span> for Global Markets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Sustainably sourced, export-grade African hardwood timber delivered worldwide with reliability, transparency and uncompromising excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow"
            >
              View Catalogue
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] glass border border-border rounded-sm hover:border-gold transition-colors"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative py-24 border-y border-border bg-gradient-forest overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center lg:text-left">
                <div className="font-display text-5xl lg:text-6xl text-gold-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Black Woodpecker Limited"
            title={<>Built on integrity, <span className="text-gold-gradient italic">delivered with precision</span></>}
            description="Four pillars define every container we ship — from the forest floor to your warehouse door."
          />
          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group glass rounded-md p-8 h-full hover:shadow-glow hover:-translate-y-1 transition-all duration-500">
                  <div className="h-12 w-12 rounded-sm bg-gradient-gold inline-flex items-center justify-center text-primary-foreground mb-6">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Featured Timber"
              title={<>Export-grade <span className="text-gold-gradient italic">African hardwood</span></>}
            />
            <Reveal>
              <Link to="/products" className="nav-link text-xs uppercase tracking-[0.25em] text-gold inline-flex items-center gap-2">
                Full Catalogue <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} onOpen={setActive} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative glass-strong rounded-md p-12 lg:p-20 text-center overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-gold opacity-[0.06]" />
              <p className="relative text-[11px] uppercase tracking-[0.35em] text-gold">Start Your Order</p>
              <h2 className="relative font-display text-4xl md:text-5xl lg:text-6xl mt-5">
                Ready to ship with <span className="text-gold-gradient italic">Black Woodpecker Limited?</span>
              </h2>
              <p className="relative mt-6 max-w-xl mx-auto text-muted-foreground">
                Speak with our export desk for catalogue, pricing and delivery options to your port.
              </p>
              <Link
                to="/contact"
                className="relative mt-10 inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.25em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow"
              >
                Request Quote <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
