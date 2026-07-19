import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Geist_Mono } from "next/font/google";
import { Navbar, Footer, AltitudeTimeline } from "@/components/layout";
import "./globals.css";

/*
  Design System Fonts:
  - Playfair Display for editorial display/headers (classic, prestigious)
  - Plus Jakarta Sans for sans-serif body copy (high-end modern sans, clean readability)
  - Geist Mono for tabular data / system status metrics
*/
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
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
 * - CAD Grid Wrapper — border-x frame outlining the central 5xl content path
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
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 bg-background text-foreground transition-colors duration-200">
        {/* Skip Navigation Link for Screen Readers and Keyboard Navigation (WCAG AAA) */}
        <a
          href="#main-content"
          className="sr-only fixed top-4 left-4 z-50 rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 focus:not-sr-only focus:outline-none"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <AltitudeTimeline />

        {/* ── CAD Blueprint Grid Shell ──
            Creates a thin vertical border-x frame down the central page width.
            Reinforces the visual identity of 'Operational Precision'. */}
        <div className="relative mx-auto w-full max-w-5xl border-x border-zinc-900 bg-neutral-950/20 flex-1 flex flex-col">
          
          {/* Corner blueprint crosshair markings */}
          <span className="absolute -top-1 -left-1 font-mono text-[8px] text-zinc-700 selection:bg-transparent" aria-hidden="true">+</span>
          <span className="absolute -top-1 -right-1 font-mono text-[8px] text-zinc-700 selection:bg-transparent" aria-hidden="true">+</span>

          <main id="main-content" className="flex-1 focus:outline-none w-full">
            {children}
          </main>

          <span className="absolute -bottom-1 -left-1 font-mono text-[8px] text-zinc-700 selection:bg-transparent" aria-hidden="true">+</span>
          <span className="absolute -bottom-1 -right-1 font-mono text-[8px] text-zinc-700 selection:bg-transparent" aria-hidden="true">+</span>

        </div>

        <Footer />
      </body>
    </html>
  );
}
