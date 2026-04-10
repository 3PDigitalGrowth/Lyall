import { expertiseColumns } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="grain bg-cream px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="EXPERTISE"
          title="Three disciplines. One strategic mind."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {expertiseColumns.map((column) => (
            <article key={column.title} className="border-t border-line pt-6">
              <div className="mb-6 h-[3px] w-10 bg-teal" />
              <h3 className="font-display text-2xl font-bold leading-tight text-navy">
                {column.title}
              </h3>
              <p className="mt-5 font-body text-base leading-8 text-charcoal/85">
                {column.description}
              </p>
              <ul className="mt-8 space-y-3 font-body text-[15px] leading-7 text-charcoal/80">
                {column.services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
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
