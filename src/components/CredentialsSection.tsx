"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { caseStudies, stats } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

function parseStatValue(raw: string): { end: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { end: 0, suffix: raw };
  return { end: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState("0");
  const hasFired = useRef(false);

  const { end, suffix } = parseStatValue(value);

  const animate = useCallback(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [end, suffix]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-[44px] font-bold text-teal md:text-[56px]">
        {display}
      </p>
      <p className="mt-3 font-body text-label uppercase text-white/70">
        {label}
      </p>
    </div>
  );
}

export function CredentialsSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="credentials" className="navy-glow px-6 py-section-mobile md:px-10 md:py-section">
      <div ref={revealRef} className="mx-auto max-w-content">
        <SectionHeading
          label="CREDENTIALS"
          title="The track record speaks for itself."
          inverted
        />

        <div className="mt-heading-gap grid gap-10 border-y border-white/10 py-10 md:grid-cols-3">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="mt-heading-gap grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.situation}
              className="bg-white p-10 shadow-card transition-all duration-250 hover:-translate-y-[2px] hover:shadow-card-hover"
            >
              <p className="font-body text-label uppercase text-teal">
                {study.context}
              </p>
              <h3 className="mt-5 font-display text-card-title font-bold text-navy">
                {study.situation}
              </h3>
              <p className="mt-5 font-body text-body-primary text-body">
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
