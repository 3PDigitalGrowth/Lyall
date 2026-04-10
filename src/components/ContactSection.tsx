"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { enquiryTypes } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionHeading
            label="CONTACT"
            title="Start a conversation."
            description="Whether you are navigating an urgent situation, planning ahead, or exploring how Lyall can support your organisation, the first step is a confidential conversation."
            inverted
          />

          <div className="mt-10 border-l-4 border-teal bg-cream p-6 text-charcoal">
            <p className="font-body text-base leading-7">
              Facing an urgent crisis? Contact CRC PR directly for immediate support.
            </p>
            <Link
              href="https://crcpr.com.au"
              className="mt-4 inline-flex font-body text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              crcpr.com.au →
            </Link>
          </div>
        </div>

        <form
          className="grid gap-5 rounded-sm bg-transparent"
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
              className="h-12 border border-[#3A4A6C] bg-ink px-4 font-body text-base text-white outline-none transition-colors focus:border-teal"
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
              className="min-h-32 border border-[#3A4A6C] bg-ink px-4 py-3 font-body text-base text-white outline-none transition-colors focus:border-teal"
              placeholder="Share a little about the situation or support you need."
            />
          </Field>

          <button
            type="submit"
            className="mt-2 bg-teal px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-navy"
          >
            Send Enquiry
          </button>

          <p className="font-body text-sm text-white/55">
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
      <span className="font-body text-sm text-white/70">{label}</span>
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
      className="h-12 border border-[#3A4A6C] bg-ink px-4 font-body text-base text-white outline-none transition-colors focus:border-teal"
    />
  );
}
