import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import logisticsImg from "@/assets/logistics.jpg";
import { Anchor, FileCheck2, PackageSearch, Ship, Warehouse, Globe2 } from "lucide-react";

export const Route = createFileRoute("/export-logistics")({
  head: () => ({
    meta: [
      { title: "Export & Logistics — TimberX" },
      { name: "description", content: "Global timber and charcoal export logistics, shipping, customs and freight." },
      { property: "og:title", content: "TimberX Export & Logistics" },
      { property: "og:description", content: "FOB, CIF, CFR and EXW shipping across 42 countries." },
    ],
  }),
  component: LogisticsPage,
});

const steps = [
  { icon: PackageSearch, title: "Order Confirmed", text: "PO signed, deposit received, production scheduled." },
  { icon: Warehouse, title: "Sourcing & Milling", text: "Material selected, milled to spec, kiln-dried." },
  { icon: FileCheck2, title: "QA & Packaging", text: "Multi-stage QA, fumigation, ISPM-15 stamping, banding." },
  { icon: Ship, title: "Container Loading", text: "Supervised stuffing at our private yard with photo report." },
  { icon: Anchor, title: "Port & Documentation", text: "Customs, phyto, COO, BL — all paperwork digital." },
  { icon: Globe2, title: "Delivery to Port", text: "Door-to-port to door tracking until container is released." },
];

const regions = [
  { name: "Europe", ports: "Rotterdam · Hamburg · Antwerp", count: 612 },
  { name: "Middle East", ports: "Jebel Ali · Dammam · Doha", count: 498 },
  { name: "Asia", ports: "Mundra · Singapore · Busan", count: 387 },
  { name: "Americas", ports: "New York · Houston · Santos", count: 211 },
  { name: "Africa", ports: "Lagos · Cape Town · Casablanca", count: 92 },
];

function LogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & Logistics"
        title={<>From the yard to <span className="text-gold-gradient italic">your port</span></>}
        description="A dedicated logistics desk handles bookings, fumigation, customs and CIF documentation — across 42 countries and counting."
        image={logisticsImg}
      />

      {/* Stats */}
      <section className="py-20 border-y border-border bg-gradient-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {[
            { v: 1800, s: "+", l: "Containers Shipped" },
            { v: 42, s: "", l: "Countries Served" },
            { v: 14, s: "", l: "Shipping Lines" },
            { v: 98, s: "%", l: "On-Time Rate" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-gold-gradient"><Counter to={s.v} suffix={s.s} /></div>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Process"
            title={<>Six steps from <span className="text-gold-gradient italic">PO to port</span></>}
            description="Every shipment follows the same audited pipeline — predictable, transparent, on time."
          />
          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="group glass rounded-md p-8 h-full hover:shadow-glow transition-shadow relative overflow-hidden">
                  <span className="absolute top-4 right-5 font-display text-6xl text-gold/10">0{i + 1}</span>
                  <div className="h-12 w-12 rounded-sm bg-gradient-gold inline-flex items-center justify-center text-primary-foreground mb-6">
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={logisticsImg} alt="" loading="lazy" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Active Corridors" title={<>Global <span className="text-gold-gradient italic">export reach</span></>} />
          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r) => (
              <StaggerItem key={r.name}>
                <div className="glass rounded-md p-8 hover:shadow-glow transition-shadow group">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-display text-2xl">{r.name}</h4>
                    <span className="font-display text-3xl text-gold-gradient"><Counter to={r.count} /></span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{r.ports}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-gold">Containers shipped</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Incoterms" title={<>Flexible <span className="text-gold-gradient italic">trade terms</span></>} align="center" />
          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["FOB", "CIF", "CFR", "EXW"].map((t) => (
                <div key={t} className="glass rounded-md p-10 text-center hover:shadow-glow transition-shadow">
                  <div className="font-display text-4xl text-gold-gradient">{t}</div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Available</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
