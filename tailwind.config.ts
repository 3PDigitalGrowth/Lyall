import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#2B3A5C",
        "navy-light": "#324468",
        cream: "#F5F2EC",
        teal: "#058A94",
        "teal-dark": "#047A84",
        charcoal: "#1A1A1A",
        line: "#D4D0C8",
        ink: "#1E2A45",
        "ink-dark": "#1E2D4A",
        gold: "#C9A84C",
        body: "#2A2A2A",
        muted: "#555555",
      },
      fontFamily: {
        body: ["var(--font-dm-sans)"],
        display: ["var(--font-playfair)"],
      },
      fontSize: {
        "body-primary": ["17px", { lineHeight: "1.8" }],
        "body-secondary": ["15px", { lineHeight: "1.7" }],
        "label": ["12px", { lineHeight: "1.4", letterSpacing: "0.15em", fontWeight: "500" }],
        "card-title": ["22px", { lineHeight: "1.3" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08)",
        editorial: "0 18px 40px rgba(26, 26, 26, 0.08)",
      },
      letterSpacing: {
        editorial: "0.15em",
      },
      spacing: {
        section: "140px",
        "section-mobile": "80px",
        "heading-gap": "64px",
        "block-gap": "48px",
      },
      maxWidth: {
        content: "1200px",
        prose: "640px",
      },
    },
  },
  plugins: [],
};

export default config;
