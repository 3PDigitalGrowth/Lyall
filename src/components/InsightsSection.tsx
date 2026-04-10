"use client";

import Link from "next/link";

import { insights } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

export function InsightsSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="insights" className="grain bg-cream px-6 py-section-mobile md:px-10 md:py-section">
      <div ref={revealRef} className="mx-auto grid max-w-content gap-heading-gap lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          label="INSIGHTS"
          title="150 Words."
          description="Sharp perspectives on crisis, reputation, and the communications decisions that define organisations. Lyall&apos;s regular column distils complex issues into clear, actionable thinking."
        />

        <div>
          <div className="grid gap-10 md:grid-cols-3">
            {insights.map((article) => (
              <article
                key={article.slug}
                className="border-b border-line pb-8"
              >
                <h3 className="font-display text-card-title font-bold text-navy">
                  {article.title}
                </h3>
                <p className="mt-4 font-body text-body-secondary text-muted">
                  {article.excerpt}
                </p>
                <Link
                  href="/insights"
                  className="group mt-6 inline-flex font-body text-[14px] font-medium text-teal transition-all duration-200 hover:underline hover:underline-offset-4"
                >
                  Read{" "}
                  <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <Link
            href="/insights"
            className="group mt-10 inline-flex font-body text-body-primary font-medium text-teal transition-all duration-200 hover:underline hover:underline-offset-4"
          >
            View all insights{" "}
            <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
