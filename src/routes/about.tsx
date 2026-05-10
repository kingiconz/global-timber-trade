import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import sustainImg from "@/assets/sustainability.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import heroImg from "@/assets/hero-timber.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Black Woodpecker Limited" },
      { name: "description", content: "Our story, mission and global export capabilities." },
      { property: "og:title", content: "About Black Woodpecker Limited" },
      { property: "og:description", content: "A premium timber and charcoal exporter with 15+ years of global trade experience." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2009", title: "Founded in Mombasa", text: "Started as a regional hardwood supplier serving East African markets." },
  { year: "2013", title: "First international container", text: "Shipped our first 40ft container of African Teak to Rotterdam." },
  { year: "2017", title: "Charcoal division launched", text: "Added export-grade hardwood and coconut charcoal to our portfolio." },
  { year: "2021", title: "FSC-aligned chain-of-custody", text: "Implemented full traceability from forest stand to customer port." },
  { year: "2024", title: "1,800+ containers shipped", text: "Active corridors across 42 countries with a dedicated logistics desk." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Fifteen years of <span className="text-gold-gradient italic">global trade</span> excellence</>}
        description="From a single warehouse on the Kenyan coast to a trusted export partner across four continents — Black Woodpecker Limited was built on craft, integrity and consistency."
        image={heroImg}
      />

      {/* MISSION / VISION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="glass rounded-md p-10 h-full">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Mission</p>
              <h3 className="font-display text-3xl mt-4">Reliable supply of premium hardwood and charcoal — sourced responsibly, delivered consistently.</h3>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-md p-10 h-full">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Vision</p>
              <h3 className="font-display text-3xl mt-4">To be Africa's most trusted timber and charcoal export brand by 2030.</h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Milestones" title={<>A journey, <span className="text-gold-gradient italic">container by container</span></>} />
          <div className="mt-16 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
            <StaggerGroup className="space-y-12">
              {milestones.map((m, i) => (
                <StaggerItem key={m.year}>
                  <div className={`relative flex flex-col lg:flex-row ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-8`}>
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-gold shadow-glow" />
                    <div className="hidden lg:block lg:w-1/2" />
                    <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-10">
                      <p className="font-display text-4xl text-gold-gradient">{m.year}</p>
                      <h4 className="mt-2 font-display text-2xl">{m.title}</h4>
                      <p className="mt-3 text-muted-foreground">{m.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={logisticsImg} alt="" loading="lazy" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Capabilities" title={<>What we do, <span className="text-gold-gradient italic">end-to-end</span></>} align="center" />
          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Sourcing & QA", d: "Hand-selected raw material from licensed forest concessions." },
              { t: "Processing & Milling", d: "Custom dimensions, kiln-drying, fumigation and grading." },
              { t: "Packaging", d: "Strapped bundles, crating, ISPM-15 stamped, branded options." },
              { t: "Documentation", d: "Phyto, fumigation, BL, COO and FSC chain-of-custody papers." },
              { t: "Container Loading", d: "20ft / 40ft / 40HC supervised stuffing at our private yard." },
              { t: "Freight & Customs", d: "FOB, CIF, CFR — partnerships with major shipping lines." },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div className="glass rounded-md p-8 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 h-full">
                  <h4 className="font-display text-xl">{c.t}</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-md overflow-hidden shadow-elevated">
              <img src={sustainImg} alt="Forest" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The Team"
              title={<>A specialist export desk on <span className="text-gold-gradient italic">two continents</span></>}
              description="Our 60-strong team blends forestry, milling, logistics and trade expertise — coordinated across Mombasa, Dubai and Hamburg to keep your shipments moving."
            />
          </div>
        </div>
      </section>
    </>
  );
}
