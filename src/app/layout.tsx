import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Lyall Mercer – Corporate PR, Crisis Communications & Faith-Based Counsel",
  description:
    "Lyall Mercer is one of Australia's most respected corporate communications and crisis strategists. 25 years of strategic counsel across every continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} bg-cream text-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
