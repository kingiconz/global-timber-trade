import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 max-w-4xl leading-[1.05]">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.18}>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
