import Link from "next/link";

import { socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">LYALL MERCER</p>
          <p className="mt-4 max-w-sm font-body text-sm leading-7 text-white/50">
            Corporate PR. Crisis Communications. Faith-Based Counsel.
          </p>
        </div>

        <div>
          <p className="font-body text-xs font-medium uppercase tracking-editorial text-white/45">
            Quick links
          </p>
          <div className="mt-5 grid gap-3 font-body text-sm text-white/70">
            <Link href="https://crcpr.com.au">CRC Public Relations</Link>
            <Link href="https://myprpartner.com">My PR Partner</Link>
            <Link href="https://crisiscommunications.com.au">
              Crisis Communications Australia
            </Link>
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-medium uppercase tracking-editorial text-white/45">
            Connect
          </p>
          <div className="mt-5 grid gap-3 font-body text-sm text-white/70">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
                {item.placeholder ? " (placeholder)" : ""}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 font-body text-[13px] text-white/30">
        © 2026 Lyall Mercer. All rights reserved.
      </div>
    </footer>
  );
}
