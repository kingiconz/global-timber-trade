import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Flame, Globe2, ShieldCheck, Truck, Mail, Phone, MapPin, MessageCircle, X } from "lucide-react";
import charcoalImg from "@/assets/product-charcoal.jpg";
import { charcoalProducts } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Product } from "@/data/products";

export const Route = createFileRoute("/charcoal")({
  head: () => ({
    meta: [
      { title: "Black Woodpecker Charcoal — Premium Hardwood & Coconut Charcoal Exports" },
      { name: "description", content: "Export-grade hardwood lump charcoal, coconut shell briquettes and hexagonal briquettes shipped worldwide from Ghana." },
      { property: "og:title", content: "Black Woodpecker Charcoal — Premium Charcoal Exports" },
      { property: "og:description", content: "Slow-kilned hardwood lump charcoal and coconut briquettes for premium grill and shisha markets." },
    ],
  }),
  component: CharcoalPage,
});

const stats = [
  { value: 12, suffix: "+", label: "Years in Charcoal Export" },
  { value: 28, suffix: "", label: "Countries Served" },
  { value: 950, suffix: "+", label: "Containers Shipped" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
];

const pillars = [
  { icon: Flame, title: "High Carbon Content", text: "Slow-kilned for fixed carbon ≥ 78%, long burn time and minimal ash residue." },
  { icon: ShieldCheck, title: "Lab-Tested Quality", text: "Every batch sampled and certified — moisture, ash, volatile matter, calorific value." },
  { icon: Globe2, title: "Global Reach", text: "Active corridors to the Gulf, EU, USA, Japan and Korea." },
  { icon: Truck, title: "Private Label Ready", text: "Branded retail bags, custom cartons and palletised loading available." },
];

function CharcoalPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [active, setActive] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative">
      {/* Standalone header */}
      <header className="fixed top-0 inset-x-0 z-50 glass-strong border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground font-display text-lg font-bold shadow-glow">
              B
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-wide">Black Woodpecker</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold mt-1">Charcoal Division</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="nav-link text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">Products</a>
            <a href="#why" className="nav-link text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">Why Us</a>
            <a href="#contact" className="nav-link text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow"
          >
            Request Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
          <img src={charcoalImg} alt="Premium hardwood charcoal" className="h-[120%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.4em] text-gold"
          >
            Charcoal Division · Est. 2013
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl leading-[1.05]"
          >
            Premium Hardwood & <br />
            <span className="text-gold-gradient italic">Coconut Charcoal</span> for Global Markets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Slow-kilned lump charcoal and pressed briquettes engineered for premium grill houses, shisha lounges and industrial kitchens worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#products" className="group inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow">
              View Charcoal Range
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] glass border border-border rounded-sm hover:border-gold transition-colors">
              Request a Quote
            </a>
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
      <section id="why" className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Our Charcoal"
            title={<>Engineered for <span className="text-gold-gradient italic">consistent burn</span></>}
            description="From kiln to container, every kilogram is graded for performance."
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
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Charcoal Range"
            title={<>Lump, briquettes & <span className="text-gold-gradient italic">private label</span></>}
            description="Every product ships with full export documentation, lab certificates and ISPM-15 compliance where required."
          />
          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {charcoalProducts.slice(0, 4).map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} onOpen={setActive} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.25em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow"
            >
              See More Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>


      {/* CTA / CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative glass-strong rounded-md p-12 lg:p-20 overflow-hidden border border-border grid lg:grid-cols-2 gap-12">
              <div className="absolute inset-0 bg-gradient-gold opacity-[0.06]" />
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Start Your Order</p>
                <h2 className="font-display text-4xl md:text-5xl mt-5">
                  Ready to ship <span className="text-gold-gradient italic">charcoal worldwide?</span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-md">
                  Speak with our charcoal export desk for catalogue, lab specs, pricing and delivery options to your port.
                </p>
              </div>
              <div className="relative space-y-5">
                <ContactRow icon={MapPin} label="Charcoal Division" value="Tema Industrial Area, Accra, Ghana" />
                <ContactRow icon={Phone} label="Phone" value="+233 30 000 0000" href="tel:+233300000000" />
                <ContactRow icon={Mail} label="Email" value="charcoal@blackwoodpeckerlimited.com" href="mailto:charcoal@blackwoodpeckerlimited.com" />
                <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with our desk" href="https://wa.me/233300000000" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standalone footer */}
      <footer className="relative mt-16 border-t border-border bg-gradient-forest overflow-hidden">
        <div aria-hidden className="absolute inset-0 adinkra-tile-strong opacity-60 pointer-events-none" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 inline-flex items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground font-display text-lg font-bold">B</span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl">Black Woodpecker</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold mt-1">Charcoal Division</span>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              Premium hardwood and coconut charcoal exports from Ghana to global markets since 2013.
            </p>
          </div>
          <div className="text-sm text-muted-foreground space-y-2 md:text-right">
            <p>charcoal@blackwoodpeckerlimited.com</p>
            <p>+233 30 000 0000</p>
            <p>Tema Industrial Area · Accra · Ghana</p>
          </div>
        </div>
        <div className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Black Woodpecker Limited · Charcoal Division.</p>
            <Link to="/" className="uppercase tracking-[0.2em] hover:text-gold transition-colors">Visit Timber Site →</Link>
          </div>
        </div>
      </footer>

      <ProductModal product={active} onClose={() => setActive(null)} />

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] flex items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={() => setShowAll(false)} />
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className="relative glass-strong border border-border rounded-md w-full max-w-6xl max-h-[92vh] overflow-y-auto shadow-elevated p-6 sm:p-10"
            >
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass inline-flex items-center justify-center text-foreground hover:text-gold transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">All Charcoal Products</p>
              <h2 className="font-display text-3xl sm:text-4xl mt-3">Browse the full <span className="text-gold-gradient italic">charcoal range</span></h2>
              <p className="mt-3 text-sm text-muted-foreground">Click any image to view product details.</p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {charcoalProducts.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => { setShowAll(false); setActive(p); }}
                    className="group relative aspect-square overflow-hidden rounded-sm bg-[#0d0907] border border-border hover:border-gold transition-colors"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover brightness-[.78] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink via-ink/70 to-transparent">
                      <p className="text-xs font-display text-foreground leading-tight">{p.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ size?: number }>; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="h-10 w-10 rounded-sm border border-border inline-flex items-center justify-center text-gold flex-shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 hover:text-gold transition-colors">{inner}</a>
  ) : (
    <div className="flex items-start gap-4">{inner}</div>
  );
}
