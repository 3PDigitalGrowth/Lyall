"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { enquiryTypes } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

export function ContactSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="navy-glow px-6 py-section-mobile md:px-10 md:py-section">
      <div
        ref={revealRef}
        className="mx-auto grid max-w-content gap-14 lg:grid-cols-[0.75fr_1px_1.25fr]"
      >
        <div>
          <SectionHeading
            label="CONTACT"
            title="Start a conversation."
            description="Whether you are navigating an urgent situation, planning ahead, or exploring how Lyall can support your organisation, the first step is a confidential conversation."
            inverted
          />

          <div className="mt-10 border-l-4 border-teal bg-cream p-6 text-body">
            <p className="font-body text-body-primary">
              Facing an urgent crisis? Contact CRC PR directly for immediate support.
            </p>
            <Link
              href="https://crcpr.com.au"
              className="group mt-4 inline-flex font-body text-[14px] font-medium text-teal transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              crcpr.com.au{" "}
              <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden bg-white/[0.15] lg:block" aria-hidden="true" />

        <form
          className="grid gap-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="First name" htmlFor="firstName">
              <Input id="firstName" name="firstName" />
            </Field>
            <Field label="Last name" htmlFor="lastName">
              <Input id="lastName" name="lastName" />
            </Field>
          </div>

          <Field label="Position" htmlFor="position">
            <Input id="position" name="position" />
          </Field>
          <Field label="Organisation" htmlFor="organisation">
            <Input id="organisation" name="organisation" />
          </Field>
          <Field label="Email" htmlFor="email">
            <Input id="email" name="email" type="email" />
          </Field>
          <Field label="Phone" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" />
          </Field>
          <Field label="Enquiry type" htmlFor="enquiryType">
            <select
              id="enquiryType"
              name="enquiryType"
              defaultValue=""
              className="h-12 border border-[#3A4D6E] bg-ink-dark px-4 font-body text-[15px] text-white outline-none transition-colors duration-200 focus:border-teal"
            >
              <option value="" disabled className="text-charcoal">
                Select an enquiry type
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type} className="text-charcoal">
                  {type}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="min-h-32 border border-[#3A4D6E] bg-ink-dark px-4 py-3 font-body text-[15px] text-white outline-none transition-colors duration-200 focus:border-teal"
              placeholder="Share a little about the situation or support you need."
            />
          </Field>

          <button
            type="submit"
            className="mt-2 h-[52px] w-full bg-teal font-body text-[15px] font-medium tracking-[0.03em] text-white transition-all duration-200 hover:bg-teal-dark hover:scale-[1.01]"
          >
            Send Enquiry
          </button>

          <p className="font-body text-body-secondary text-white/50">
            This form is currently a front-end placeholder until a live submission
            endpoint is provided.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2">
      <span className="font-body text-[13px] font-normal uppercase tracking-[0.08em] text-white/60">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  id,
  name,
  type = "text",
}: {
  id: string;
  name: string;
  type?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className="h-12 border border-[#3A4D6E] bg-ink-dark px-4 font-body text-[15px] text-white outline-none transition-colors duration-200 focus:border-teal"
    />
  );
}
