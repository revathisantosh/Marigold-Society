import type { Metadata } from "next";
import { Suspense } from "react";
import { Luxurious_Script, Cormorant_Garamond, Fraunces, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const luxuriousScript = Luxurious_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luxurious-script",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Marigold Society — Heirloom Seeds & The Almanac",
    template: "%s — The Marigold Society",
  },
  description:
    "A Vermont seed library, pressed-flower atelier, and quarterly journal for those who believe the old ways are worth preserving.",
  keywords: ["heirloom seeds", "seed library", "botanical", "Vermont", "pressed flowers", "almanac"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Marigold Society",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ebGaramond.variable} ${inter.variable} ${luxuriousScript.variable} ${cormorantGaramond.variable}`}
    >
      <body className="text-ink overflow-x-hidden min-h-screen bg-parchment">
        <Suspense fallback={null}>
          <SmoothScroll />
        </Suspense>
        <CustomCursor />
        <Header />
        <main className="min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
