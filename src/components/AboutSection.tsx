"use client";

import Image from "next/image";

import { asSeenIn } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

export function AboutSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="grain bg-cream px-6 py-section-mobile md:px-10 md:py-section">
      <div
        ref={revealRef}
        className="mx-auto grid max-w-content gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"
      >
        <div>
          <SectionHeading
            label="ABOUT"
            title="Trusted by leaders when it matters most."
          />

          <div className="mt-heading-gap max-w-prose space-y-6 font-body text-body-primary text-body">
            <p>
              Lyall Mercer is one of Australia&apos;s most respected corporate
              communications and crisis strategists. After starting his media
              career as a journalist writing for some of Australia&apos;s leading
              newspapers, he transitioned into public relations and has spent 25
              years guiding organisations through the complex world of stakeholder
              communications, media relations, and reputation management.
            </p>
            <p>
              His clients include national and international companies,
              governments, senior executives, politicians, and high-profile public
              figures. He has coordinated international media conferences and
              walked clients through issues that have generated intense national
              and global media exposure, from serious allegations and political
              controversies to industrial relations disputes and high-profile legal
              cases.
            </p>
            <p>
              Lyall has trained corporate and non-profit leaders across Australia,
              the USA, and Canada, and as an expert commentator in crisis
              communications, has been quoted or interviewed by news organisations
              around the world.
            </p>
          </div>

          <div className="mt-block-gap">
            <p className="font-body text-[12px] font-normal text-[#BBB] tracking-[0.04em]">
              As quoted or featured in
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-0 gap-y-3">
              {asSeenIn.map((item, index) => (
                <div key={item} className="flex items-center">
                  <span className="font-body text-[13px] font-medium uppercase tracking-[0.12em] text-[#999]">
                    {item}
                  </span>
                  {index < asSeenIn.length - 1 ? (
                    <span className="mx-4 h-4 w-px bg-line" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-first lg:order-none">
          <div className="group relative overflow-hidden">
            <div className="relative aspect-[4/5] bg-navy shadow-card">
              <Image
                src="/images/lyall-portrait.png"
                alt="Lyall Mercer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="portrait-reveal pointer-events-none absolute inset-0 bg-teal" />
          </div>
        </div>
      </div>
    </section>
  );
}
