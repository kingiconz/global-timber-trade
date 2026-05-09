import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Award, ShieldCheck, FileCheck2, Leaf, Globe2, BadgeCheck } from "lucide-react";
import sustainImg from "@/assets/sustainability.jpg";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — TimberX" },
      { name: "description", content: "FSC, ISPM-15, ISO 9001 and global compliance certifications." },
      { property: "og:title", content: "TimberX Certifications" },
      { property: "og:description", content: "Internationally recognised export and quality certifications." },
    ],
  }),
  component: CertsPage,
});

const certs = [
  { icon: Leaf, name: "FSC Chain of Custody", code: "FSC C-XXXXXX", desc: "Verified responsibly sourced timber from licensed forest concessions." },
  { icon: BadgeCheck, name: "ISPM-15 Certified", code: "Heat-treated & stamped", desc: "Wood packaging compliant with international phytosanitary standards." },
  { icon: ShieldCheck, name: "ISO 9001:2015", code: "Quality Management", desc: "Audited quality management system across all operations." },
  { icon: Award, name: "EU FLEGT Aligned", code: "Voluntary Partnership", desc: "Forest law enforcement, governance and trade compliance." },
  { icon: FileCheck2, name: "Phytosanitary Cert.", code: "Per-shipment issuance", desc: "Government-issued phytosanitary certificate with every container." },
  { icon: Globe2, name: "Export License", code: "MITC-KE/2024", desc: "Active export trader license — Republic of Kenya, Ministry of Trade." },
];

function CertsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title={<>Globally <span className="text-gold-gradient italic">compliant</span>, locally accountable</>}
        description="Every shipment ships with the full documentation pack — verifiable, audited, and accepted at every port we serve."
        image={sustainImg}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Our Credentials" title={<>Trust, <span className="text-gold-gradient italic">stamped & sealed</span></>} />
          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((c) => (
              <StaggerItem key={c.name}>
                <div className="group relative glass rounded-md p-8 h-full overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-gold opacity-[0.07] group-hover:opacity-20 transition-opacity" />
                  <div className="h-14 w-14 rounded-sm bg-gradient-gold inline-flex items-center justify-center text-primary-foreground mb-6 shadow-glow">
                    <c.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl">{c.name}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">{c.code}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
