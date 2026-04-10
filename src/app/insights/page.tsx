import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { insights } from "@/lib/site-data";

export default function InsightsPage() {
  return (
    <>
      <Navigation />
      <main className="grain bg-cream px-6 pb-section-mobile pt-32 md:px-10 md:pb-section md:pt-40">
        <section className="mx-auto max-w-content">
          <p className="font-body text-label uppercase text-teal">
            Insights
          </p>
          <h1 className="mt-5 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.01em] text-navy md:text-[44px]">
            150 Words
          </h1>
          <p className="mt-6 max-w-prose font-body text-body-primary text-body">
            A dedicated archive for Lyall&apos;s commentary will live here. For now,
            these preview entries provide a clean destination for the homepage
            links while full article content is still being prepared.
          </p>
        </section>

        <section className="mx-auto mt-heading-gap grid max-w-content gap-8">
          {insights.map((article) => (
            <article
              key={article.slug}
              className="bg-white p-10 shadow-card transition-all duration-250 hover:-translate-y-[2px] hover:shadow-card-hover"
            >
              <p className="font-body text-label uppercase text-teal">
                Placeholder entry
              </p>
              <h2 className="mt-4 font-display text-card-title font-bold text-navy">
                {article.title}
              </h2>
              <p className="mt-4 font-body text-body-primary text-body">
                {article.excerpt}
              </p>
            </article>
          ))}

          <Link
            href="/#insights"
            className="group mt-4 inline-flex font-body text-[14px] font-medium text-teal transition-all duration-200 hover:underline hover:underline-offset-4"
          >
            Return to homepage insights{" "}
            <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
