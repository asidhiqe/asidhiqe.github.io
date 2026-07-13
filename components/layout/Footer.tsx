import Link from "next/link";

const FOOTER_NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#about", label: "About" },
];

const SOCIAL_LINKS = [
  { href: "https://linkedin.com/in/asidhiqe", label: "LinkedIn" },
  { href: "https://github.com/asidhiqe", label: "GitHub" },
  { href: "https://read.cv/asidhiqe", label: "Read.cv" },
];

/**
 * Footer — global site footer.
 *
 * Visual style: Operational Precision.
 * Tagline aligns with Design Manifesto: "organize complexity" rather than "simplify".
 * Excludes Dribbble to maintain enterprise credibility.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-zinc-900 bg-neutral-950"
      role="contentinfo"
    >
      {/* ── Main footer body ──────────────────────────────────────── */}
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">

        {/* Brand block */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-widest text-[#f4f4f5] transition-opacity duration-200 hover:opacity-60"
            aria-label="AS — return to home"
          >
            AS
          </Link>
          <p className="max-w-xs text-xs leading-relaxed text-neutral-400">
            Designing enterprise products that organize complexity.
          </p>
          <a
            href="mailto:hello@aboobacker.design"
            className="text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
            aria-label="Send Aboobacker an email"
          >
            hello@aboobacker.design
          </a>
        </div>

        {/* Link columns */}
        <div className="flex gap-16">
          {/* Site nav */}
          <nav aria-label="Footer site navigation">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Navigate
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <nav aria-label="Social and profile links">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Connect
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Copyright bar ─────────────────────────────────────────── */}
      <div className="border-t border-zinc-900 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <p className="text-[10px] tracking-wide text-neutral-500">
            © {year} Aboobacker Sidhiqe. All rights reserved.
          </p>
          <p className="text-[10px] tracking-wide text-neutral-500">
            Built with Next.js & Systems Thinking
          </p>
        </div>
      </div>
    </footer>
  );
}
