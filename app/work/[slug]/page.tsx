import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Format slug to readable title
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2rem", fontFamily: "var(--font-body), sans-serif" }}>
      <main style={{ maxWidth: "600px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.7rem", color: "var(--accent-warm)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
          Case Study / Placeholder
        </p>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          {title}
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.65", marginBottom: "2.5rem" }}>
          The full case study for this project is currently being prepared. It will document the specific decision problems, constraints, iterations, and results of this initiative.
        </p>
        <Link 
          href="/" 
          style={{ 
            fontFamily: "var(--font-mono), monospace", 
            fontSize: "0.75rem", 
            color: "var(--accent-teal)", 
            border: "1px solid var(--line-mid)", 
            padding: "0.75rem 1.5rem", 
            borderRadius: "2px", 
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}
        >
          Return to Index
        </Link>
      </main>
    </div>
  );
}

// Generate static params for Next static export compatibility
export async function generateStaticParams() {
  return [
    { slug: "clinical-workbench" },
    { slug: "disruption-view" },
    { slug: "agent-oversight" },
    { slug: "invoice-financing" },
  ];
}
