"use client";

import { expertiseColumns } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

export function ExpertiseSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="expertise" className="grain bg-cream px-6 py-section-mobile md:px-10 md:py-section">
      <div ref={revealRef} className="mx-auto max-w-content">
        <SectionHeading
          label="EXPERTISE"
          title="Three disciplines. One strategic mind."
        />

        <div className="mt-heading-gap grid gap-10 lg:grid-cols-3">
          {expertiseColumns.map((column) => (
            <article
              key={column.title}
              className="group p-6 transition-all duration-250 hover:bg-white hover:shadow-card lg:p-8"
            >
              <div className="mb-5 h-[2px] w-10 bg-teal" />
              <h3 className="font-display text-card-title font-bold text-navy">
                {column.title}
              </h3>
              <p className="mt-5 max-w-prose font-body text-body-primary text-body">
                {column.description}
              </p>
              <ul className="mt-8 space-y-3 font-body text-body-secondary text-[#555]">
                {column.services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span className="mt-[6px] shrink-0 text-[#888]">&ndash;</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
