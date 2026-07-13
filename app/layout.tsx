import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import "./globals.css";

/*
  Design System Fonts:
  - Space Grotesk for display / headers (technical, high personality)
  - Inter for sans-serif body copy (neutral, readable at scale)
  - Geist Mono for tabular data / system status metrics
*/
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

/**
 * Site-wide metadata — baseline for every page.
 * Individual pages can override title and description.
 */
export const metadata: Metadata = {
  title: {
    default: "Aboobacker Sidhiqe — Systems & Product Design Leader",
    template: "%s — Aboobacker Sidhiqe",
  },
  description:
    "13+ years designing decision-making systems for experts in Healthcare, AI, and Analytics. " +
    "Portfolio of Aboobacker Sidhiqe.",
  authors: [{ name: "Aboobacker Sidhiqe" }],
  creator: "Aboobacker Sidhiqe",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aboobacker Sidhiqe",
    title: "Aboobacker Sidhiqe — Systems & Product Design Leader",
    description:
      "13+ years designing decision-making systems for experts in Healthcare, AI, and Analytics.",
  },
};

/**
 * RootLayout — global application shell.
 *
 * Structural contract:
 * - <html>  — loads font variables, forces dark mode, enables antialiasing
 * - Skip to content link — WCAG 2.1 AAA keyboard accessibility landmark
 * - <Navbar>  — sticky top chrome
 * - <main>   — holds id="main-content" matching skip link
 * - <Footer>  — site footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} dark bg-[#09090b] text-[#f4f4f5] h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Skip Navigation Link for Screen Readers and Keyboard Navigation (WCAG AAA) */}
        <a
          href="#main-content"
          className="sr-only fixed top-4 left-4 z-50 rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 focus:not-sr-only focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
