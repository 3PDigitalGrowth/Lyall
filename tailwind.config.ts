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
        cream: "#F5F2EC",
        teal: "#058A94",
        charcoal: "#1A1A1A",
        line: "#D4D0C8",
        ink: "#1E2A45",
        gold: "#C9A84C",
      },
      fontFamily: {
        body: ["var(--font-dm-sans)"],
        display: ["var(--font-playfair)"],
      },
      boxShadow: {
        editorial: "0 18px 40px rgba(26, 26, 26, 0.08)",
      },
      letterSpacing: {
        editorial: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
