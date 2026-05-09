import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import sustainImg from "@/assets/sustainability.jpg";
import { Leaf, TreePine, Users, Recycle } from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — TimberX" },
      { name: "description", content: "Sustainable sourcing, reforestation and ethical harvesting practices at TimberX." },
      { property: "og:title", content: "Sustainability at TimberX" },
      { property: "og:description", content: "FSC-aligned chain-of-custody, reforestation and carbon offset." },
    ],
  }),
  component: SustainPage,
});

const pillars = [
  { icon: TreePine, title: "Reforestation", text: "1.5 trees planted for every tree harvested through certified nursery partners." },
  { icon: Leaf, title: "Selective Harvest", text: "Only mature, sustainable yield trees from licensed concessions." },
  { icon: Users, title: "Community First", text: "Local employment, training programs and community royalty payments." },
  { icon: Recycle, title: "Zero Waste", text: "Off-cuts converted to charcoal; sawdust to briquettes — full utilisation." },
];

function SustainPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={<>Forests <span className="text-gold-gradient italic">preserved</span>, communities thriving</>}
        description="We don't just export timber — we steward forests, employ local communities and offset every container we ship."
        image={sustainImg}
      />

      {/* Counters */}
      <section className="py-20 border-y border-border bg-gradient-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {[
            { v: 184000, s: "+", l: "Trees Planted" },
            { v: 1.5, s: "x", l: "Replanting Ratio" },
            { v: 320, s: "", l: "Local Jobs" },
            { v: 100, s: "%", l: "Chain of Custody" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-gold-gradient">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our Commitment"
            title={<>Four pillars of <span className="text-gold-gradient italic">responsible export</span></>}
          />
          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group glass rounded-md p-8 h-full hover:shadow-glow hover:-translate-y-1 transition-all duration-500">
                  <div className="h-12 w-12 rounded-sm bg-secondary text-gold inline-flex items-center justify-center mb-6">
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

      {/* Image + text */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-md overflow-hidden shadow-elevated">
              <img src={sustainImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Carbon Program"
              title={<>Every container, <span className="text-gold-gradient italic">offset & accounted for</span></>}
              description="We measure tCO₂e per shipment and offset through certified East African afforestation projects. Buyers receive a sustainability statement with every BL."
            />
          </div>
        </div>
      </section>
    </>
  );
}
