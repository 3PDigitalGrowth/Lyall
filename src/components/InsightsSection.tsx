import Link from "next/link";

import { insights } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function InsightsSection() {
  return (
    <section id="insights" className="bg-white px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          label="INSIGHTS"
          title="150 Words."
          description="Sharp perspectives on crisis, reputation, and the communications decisions that define organisations. Lyall's regular column distils complex issues into clear, actionable thinking."
        />

        <div>
          <div className="grid gap-10 md:grid-cols-3">
            {insights.map((article) => (
              <article key={article.slug} className="border-b border-line pb-8">
                <h3 className="font-display text-2xl font-bold text-navy">
                  {article.title}
                </h3>
                <p className="mt-4 font-body text-[15px] leading-7 text-charcoal/80">
                  {article.excerpt}
                </p>
                <Link
                  href="/insights"
                  className="mt-6 inline-flex font-body text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>

          <Link
            href="/insights"
            className="mt-10 inline-flex font-body text-base font-medium text-teal underline-offset-4 hover:underline"
          >
            View all insights →
          </Link>
        </div>
      </div>
    </section>
  );
}
