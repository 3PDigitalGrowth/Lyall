import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { insights } from "@/lib/site-data";

export default function InsightsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-cream px-6 pb-20 pt-32 md:px-10 md:pb-32 md:pt-40">
        <section className="mx-auto max-w-5xl">
          <p className="font-body text-xs font-medium uppercase tracking-editorial text-teal">
            Insights
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-navy md:text-6xl">
            150 Words
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-8 text-charcoal/80">
            A dedicated archive for Lyall&apos;s commentary will live here. For now,
            these preview entries provide a clean destination for the homepage
            links while full article content is still being prepared.
          </p>
        </section>

        <section className="mx-auto mt-16 grid max-w-5xl gap-8">
          {insights.map((article) => (
            <article key={article.slug} className="border border-line bg-white p-8 shadow-editorial">
              <p className="font-body text-xs font-medium uppercase tracking-editorial text-teal">
                Placeholder entry
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-navy">
                {article.title}
              </h2>
              <p className="mt-4 font-body text-base leading-8 text-charcoal/80">
                {article.excerpt}
              </p>
            </article>
          ))}

          <Link
            href="/#insights"
            className="mt-4 inline-flex font-body text-sm font-medium uppercase tracking-[0.08em] text-teal underline-offset-4 hover:underline"
          >
            Return to homepage insights →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
