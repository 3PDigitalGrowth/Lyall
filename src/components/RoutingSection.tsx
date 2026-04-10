"use client";

import Link from "next/link";

import { routingCards } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

export function RoutingSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="training" className="grain bg-cream px-6 py-section-mobile md:px-10 md:py-section">
      <div ref={revealRef} className="mx-auto max-w-content">
        <SectionHeading
          label="WORK WITH LYALL"
          title="Two ways to work together."
          description="Whether you need an experienced strategist in the room or want to build your team's capability from the ground up, there is a clear path forward."
          centred
        />

        <div className="mt-heading-gap grid gap-8 lg:grid-cols-2">
          {routingCards.map((card) => (
            <article
              key={card.title}
              className={`border-l-4 bg-white p-10 shadow-card transition-all duration-250 hover:-translate-y-[2px] hover:shadow-card-hover ${card.accentClass}`}
            >
              <p className="font-body text-label uppercase text-muted">
                {card.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-card-title font-bold text-navy">
                {card.title}
              </h3>
              <p className="mt-5 font-body text-body-primary text-body">
                {card.description}
              </p>
              {"note" in card ? (
                <p className="mt-4 font-body text-body-secondary text-muted">{card.note}</p>
              ) : null}
              <Link
                href={card.href}
                className="mt-8 inline-flex border border-navy px-9 py-4 font-body text-[15px] font-medium tracking-[0.03em] text-navy transition-all duration-200 hover:bg-navy hover:text-white"
              >
                {card.cta} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
