import { caseStudies, stats } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function CredentialsSection() {
  return (
    <section id="credentials" className="bg-navy px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="CREDENTIALS"
          title="The track record speaks for itself."
          inverted
        />

        <div className="mt-14 grid gap-10 border-y border-white/10 py-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl font-bold text-teal md:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-3 font-body text-sm uppercase tracking-[0.1em] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.situation}
              className="border border-line bg-white p-8 shadow-editorial"
            >
              <p className="font-body text-xs font-medium uppercase tracking-editorial text-teal">
                {study.context}
              </p>
              <h3 className="mt-5 font-display text-3xl font-bold text-navy">
                {study.situation}
              </h3>
              <p className="mt-5 font-body text-base leading-8 text-charcoal/80">
                {study.description}
              </p>
              <div className="mt-8 inline-flex bg-teal px-4 py-2 font-body text-[13px] font-medium text-white">
                {study.result}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
