import Link from "next/link";

import { routingCards } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function RoutingSection() {
  return (
    <section id="training" className="grain bg-cream px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="WORK WITH LYALL"
          title="Two ways to work together."
          description="Whether you need an experienced strategist in the room or want to build your team's capability from the ground up, there is a clear path forward."
          centred
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {routingCards.map((card) => (
            <article
              key={card.title}
              className={`border-l-4 bg-white p-10 shadow-editorial ${card.accentClass}`}
            >
              <p className="font-body text-xs font-medium uppercase tracking-editorial text-charcoal/55">
                {card.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-3xl font-bold text-navy">
                {card.title}
              </h3>
              <p className="mt-5 font-body text-base leading-8 text-charcoal/80">
                {card.description}
              </p>
              {"note" in card ? (
                <p className="mt-4 font-body text-sm text-charcoal/55">{card.note}</p>
              ) : null}
              <Link
                href={card.href}
                className="mt-8 inline-flex bg-navy px-6 py-3 font-body text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-teal"
              >
                {card.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
