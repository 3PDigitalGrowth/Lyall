"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { navItems } from "@/lib/site-data";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [heroActive, setHeroActive] = useState(true);

  const allSections = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const updateState = () => {
      const hero = document.getElementById("hero");

      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        setHeroActive(heroRect.top <= 0 && heroRect.bottom > window.innerHeight * 0.2);
      }

      let currentSection = allSections[0] ?? "about";

      allSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [allSections]);

  const chromeClasses = heroActive
    ? "border-transparent bg-transparent text-white"
    : "border-line bg-cream/95 text-navy backdrop-blur";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-[400ms] ease-out ${chromeClasses}`}
    >
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-6 md:px-10">
        <Link
          href="#hero"
          className="font-display text-[18px] font-bold uppercase tracking-[0.08em]"
        >
          Lyall Mercer
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative font-body text-[14px] font-normal uppercase tracking-[0.04em] transition-colors"
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-teal transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="#contact"
            className={`border px-4 py-2 font-body text-[14px] font-normal uppercase tracking-[0.04em] transition-all duration-200 ${
              heroActive
                ? "border-white/50 text-white hover:border-white hover:bg-white/10"
                : "border-navy text-navy hover:bg-navy hover:text-white"
            }`}
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 transition-colors ${heroActive ? "bg-white" : "bg-navy"}`} />
            <span className={`block h-0.5 w-6 transition-colors ${heroActive ? "bg-white" : "bg-navy"}`} />
            <span className={`block h-0.5 w-6 transition-colors ${heroActive ? "bg-white" : "bg-navy"}`} />
          </div>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-inherit px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[14px] font-normal uppercase tracking-[0.04em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`mt-2 inline-flex w-fit border px-4 py-2 font-body text-[14px] font-normal uppercase tracking-[0.04em] transition-all duration-200 ${
                heroActive
                  ? "border-white/50 text-white"
                  : "border-navy text-navy"
              }`}
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
