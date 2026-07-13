import {
  Hero,
  MetricStrip,
  ManifestoBlock,
  FeaturedWork,
  AboutSection,
} from "@/components/sections";

/**
 * Home page — /
 *
 * Composes page sections. No layout logic lives here.
 * The <main> landmark is owned by app/layout.tsx.
 *
 * Sprint 1 & 2 Completed:
 * - Hero (Curiosity)
 * - MetricStrip (Trust)
 * - ManifestoBlock (Thesis / Credibility)
 * - FeaturedWork (Evidence)
 * - AboutSection (Reflection / Human context)
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MetricStrip />
      <ManifestoBlock />
      {/* Target for skip link & navbar Work link */}
      <div id="work">
        <FeaturedWork />
      </div>
      <AboutSection />
    </div>
  );
}