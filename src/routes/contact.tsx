import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import logisticsImg from "@/assets/logistics.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Black Woodpecker Limited" },
      { name: "description", content: "Get in touch with our export desk for quotes, catalogue and logistics." },
      { property: "og:title", content: "Contact Black Woodpecker Limited" },
      { property: "og:description", content: "Speak with our global export team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start <span className="text-gold-gradient italic">your shipment</span></>}
        description="Tell us what you need — product, quantity, destination port — and our export desk will respond within one business day."
        image={logisticsImg}
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-2">
            <form onSubmit={onSubmit} className="glass rounded-md p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Country" name="country" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Product Interested In" name="product" />
                <Field label="Quantity (MT / containers)" name="qty" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  required
                  className="mt-2 w-full bg-input/50 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.25em] bg-gradient-gold text-primary-foreground rounded-sm hover:shadow-glow transition-shadow"
              >
                <Send size={14} /> {sent ? "Message Sent" : "Send Inquiry"}
              </button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <div className="glass rounded-md p-8 lg:p-10 h-full space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Head Office</p>
                <p className="mt-3 font-display text-xl leading-snug">Tema Industrial Area, Accra, Ghana</p>
              </div>
              <Info icon={Phone} label="Phone" value="+254 700 000 000" href="tel:+254700000000" />
              <Info icon={Mail} label="Email" value="info@blackwoodpeckerlimited.com" href="mailto:info@blackwoodpeckerlimited.com" />
              <Info icon={MessageCircle} label="WhatsApp" value="Chat with our desk" href="https://wa.me/254700000000" />
              <Info icon={MapPin} label="Hours" value="Mon–Sat · 08:00 – 18:00 EAT" />

              <div className="pt-6 border-t border-border">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Branch Offices</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Dubai · JAFZA</li>
                  <li>Hamburg · HafenCity</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-input/50 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ size?: number }>; label: string; value: string; href?: string }) {
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
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group hover:text-gold transition-colors">
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-4">{inner}</div>
  );
}
