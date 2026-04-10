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

        if (!section) {
          return;
        }

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

  const buttonClasses = heroActive
    ? "border-teal text-white hover:bg-teal"
    : "border-teal text-teal hover:bg-teal hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${chromeClasses}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#hero"
          className="font-display text-lg font-bold uppercase tracking-[0.08em] md:text-xl"
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
                className={`font-body text-sm font-medium uppercase tracking-[0.08em] transition-colors ${
                  isActive ? "text-teal" : ""
                }`}
              >
                <span className={isActive ? "border-b-2 border-teal pb-1" : "pb-1"}>
                  {item.label}
                </span>
              </Link>
            );
          })}
          <Link
            href="#contact"
            className={`border px-4 py-2 font-body text-sm font-medium transition-colors ${buttonClasses}`}
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
            <span className={`block h-0.5 w-6 ${heroActive ? "bg-white" : "bg-navy"}`} />
            <span className={`block h-0.5 w-6 ${heroActive ? "bg-white" : "bg-navy"}`} />
            <span className={`block h-0.5 w-6 ${heroActive ? "bg-white" : "bg-navy"}`} />
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
                className="font-body text-sm font-medium uppercase tracking-[0.08em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`mt-2 inline-flex w-fit border px-4 py-2 font-body text-sm font-medium transition-colors ${buttonClasses}`}
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
