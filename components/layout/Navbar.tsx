import Link from "next/link";
import type { NavItem } from "@/types";

/**
 * Site navigation items.
 * Anchored to page sections to prevent 404 navigation failures
 * and respect user workflow continuity (Design Manifesto principle).
 */
const NAV_ITEMS: NavItem[] = [
  { href: "/#work", label: "Work" },
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#about", label: "About" },
];

/**
 * Navbar — global site header.
 *
 * Visual style: Operational Precision.
 * - Glassmorphism is avoided. Uses dark transparent background with blur.
 * - Sharp dividing border at the bottom.
 * - Monogram Logo ("AS") instead of repeating full name.
 * - Standard site widths (max-w-5xl) aligned with page grid.
 */
export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-neutral-950/80 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* ── Monogram Wordmark Logo ───────────────────────────────── */}
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-widest text-[#f4f4f5] transition-opacity duration-200 hover:opacity-60"
          aria-label="AS — return to home"
        >
          AS
        </Link>

        {/* ── Primary links ─────────────────────────────────────────── */}
        <ul
          className="hidden items-center gap-8 md:flex"
          role="list"
          aria-label="Site sections"
        >
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-wider text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <a
          href="mailto:hello@aboobacker.design"
          className="hidden text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:text-cyan-400 md:block"
          aria-label="Send Aboobacker an email"
        >
          Say hello →
        </a>
      </nav>
    </header>
  );
}
