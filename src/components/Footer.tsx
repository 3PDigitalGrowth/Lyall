import Link from "next/link";

import { socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-white md:px-10">
      <div className="mx-auto grid max-w-content gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
        <div>
          <p className="font-display text-[18px] font-bold uppercase tracking-[0.08em]">
            Lyall Mercer
          </p>
          <p className="mt-4 max-w-sm font-body text-[14px] leading-7 text-white/50">
            Corporate PR. Crisis Communications. Faith-Based Counsel.
          </p>
        </div>

        <div>
          <p className="font-body text-label uppercase text-white/45">
            Quick links
          </p>
          <div className="mt-5 grid gap-3">
            <Link
              href="https://crcpr.com.au"
              className="font-body text-[14px] text-white/50 transition-colors duration-200 hover:text-white"
            >
              CRC Public Relations
            </Link>
            <Link
              href="https://myprpartner.com"
              className="font-body text-[14px] text-white/50 transition-colors duration-200 hover:text-white"
            >
              My PR Partner
            </Link>
            <Link
              href="https://crisiscommunications.com.au"
              className="font-body text-[14px] text-white/50 transition-colors duration-200 hover:text-white"
            >
              Crisis Communications Australia
            </Link>
          </div>
        </div>

        <div>
          <p className="font-body text-label uppercase text-white/45">
            Connect
          </p>
          <div className="mt-5 grid gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-body text-[14px] text-white/50 transition-colors duration-200 hover:text-teal"
              >
                {item.label}
                {item.placeholder ? " (placeholder)" : ""}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-content font-body text-[13px] text-white/25">
        &copy; 2026 Lyall Mercer. All rights reserved.
      </div>
    </footer>
  );
}
