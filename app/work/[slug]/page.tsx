import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "agent-oversight") {
    return (
      <div className="case-study-root">
        <Header />

        <main className="case-study-container">
          {/* Header & Hero Meta */}
          <header className="case-study-hero">
            <Link href="/" className="case-study-back-link">
              ← Return to Selected Work
            </Link>
            <p className="case-study-eyebrow">✦ Enterprise AI Governance & Observability</p>
            <h1 className="case-study-title">
              Agent Control Tower: Designing Observability & Human Oversight for Autonomous AI Systems
            </h1>
            <p className="case-study-subtitle">
              How information architecture and explicit human-in-the-loop intervention gates built trust and compliance for enterprise AI integration platforms.
            </p>

            <div className="case-study-meta-grid">
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Domain</span>
                <span className="case-study-meta-val">Enterprise AI & SaaS</span>
              </div>
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Role</span>
                <span className="case-study-meta-val">Product Experience Specialist</span>
              </div>
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Company</span>
                <span className="case-study-meta-val">GlobalLogic</span>
              </div>
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Timeline</span>
                <span className="case-study-meta-val">2023 - Present</span>
              </div>
            </div>
          </header>

          {/* Key Design Lesson Banner */}
          <section className="case-study-lesson-banner">
            <span className="case-study-lesson-tag">Core Design Lesson</span>
            <p className="case-study-lesson-text">
              In autonomous AI systems, trust is not built by hiding complexity behind opaque automations. Trust is built by designing explicit, low-friction human-in-the-loop intervention points when probabilistic actions exceed risk thresholds.
            </p>
          </section>

          {/* 1. Problem */}
          <section className="case-study-section">
            <h2 className="case-study-h2">1. The Operational Problem</h2>
            <p className="case-study-p">
              As enterprise clients began deploying autonomous AI agents for partner integrations and automated workflow execution, IT administrators and risk officers faced a critical operational dilemma:
            </p>

            <div className="case-study-callout-grid">
              <div className="case-study-callout-card">
                <h3>Black Box Execution</h3>
                <p>IT admins had zero real-time visibility into active agent execution loops, token consumption, or external API tool calls.</p>
              </div>
              <div className="case-study-callout-card">
                <h3>Silent Failures & Halts</h3>
                <p>When an agent encountered ambiguity in customer or financial data, it either failed silently or hallucinated unverified inputs.</p>
              </div>
              <div className="case-study-callout-card">
                <h3>Compliance Auditing Gaps</h3>
                <p>Security teams could not trace why an AI agent executed a specific database query or third-party write action.</p>
              </div>
            </div>
          </section>

          {/* 2. User Archetypes / Personas */}
          <section className="case-study-section">
            <h2 className="case-study-h2">2. Operational User Archetypes</h2>
            <div className="case-study-persona-grid">
              <div className="case-study-persona-card">
                <span className="persona-role">Archetype A</span>
                <h3>The IT Compliance Auditor</h3>
                <ul className="persona-list">
                  <li><strong>Goal:</strong> Zero unmonitored security leaks or unauthorized write actions.</li>
                  <li><strong>Friction:</strong> Cannot inspect raw LLM prompt payloads or tool outputs.</li>
                  <li><strong>Risk Tolerance:</strong> Very Low. Prefers explicit approval speed-bumps.</li>
                </ul>
              </div>

              <div className="case-study-persona-card">
                <span className="persona-role">Archetype B</span>
                <h3>The Integration Lead</h3>
                <ul className="persona-list">
                  <li><strong>Goal:</strong> Deploy autonomous partner agents rapidly without manual overhead.</li>
                  <li><strong>Friction:</strong> Manual approvals slowing down thousands of routine API calls.</li>
                  <li><strong>Risk Tolerance:</strong> High for read actions, Low for financial write actions.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. System IA & Workflow Architecture */}
          <section className="case-study-section">
            <h2 className="case-study-h2">3. Information Architecture & Workflow</h2>
            <p className="case-study-p">
              We consolidated fragmented monitoring views into a structured 3-tier hierarchy designed for real-time operational response:
            </p>
            <div className="case-study-ia-box">
              <div className="ia-node node-top">Control Tower Overview (High-density System Health Grid)</div>
              <div className="ia-connector">↓</div>
              <div className="ia-row">
                <div className="ia-node">Agent Execution Trace Log</div>
                <div className="ia-node">Human-in-the-Loop Queue</div>
                <div className="ia-node">Governance Rules Engine</div>
              </div>
            </div>
          </section>

          {/* 4. Principal Design Decisions & Trade-off Matrix */}
          <section className="case-study-section">
            <h2 className="case-study-h2">4. Principal Design Decisions & Trade-Offs</h2>

            <div className="case-study-matrix-card">
              <span className="matrix-decision-title">Decision 1: High-Density Health Grid vs. Minimalist Cards</span>
              <p><strong>Context:</strong> Administrators needed to monitor dozens of active agents simultaneously.</p>
              <p><strong>Alternatives Considered:</strong> Abstract visual cards vs. high-density tabular monitoring.</p>
              <p><strong>Rationale:</strong> Operational managers prioritize scannability over decoration. We built a high-density table featuring threshold indicators (Healthy, Degraded, Action Required, Paused).</p>
              <p><strong>Tradeoff Sacrificed:</strong> Visual minimalism in favor of maximum operational data density per viewport.</p>
            </div>

            <div className="case-study-matrix-card">
              <span className="matrix-decision-title">Decision 2: Contextual Approval Side-Drawer</span>
              <p><strong>Context:</strong> When an agent pauses execution to ask for human guidance, admins require instant context.</p>
              <p><strong>Alternatives:</strong> Email notification link vs. full-page redirect vs. contextual slide-over drawer.</p>
              <p><strong>Rationale:</strong> Built a contextual slide-over drawer showing execution history, prompt payload, attempted tool call, and model confidence score with 2-click approve/edit/kill actions.</p>
              <p><strong>Tradeoff Sacrificed:</strong> Required complex multi-state drawer management across live WebSocket streams.</p>
            </div>
          </section>

          {/* 5. Verified Impact & Reflection */}
          <section className="case-study-section">
            <h2 className="case-study-h2">5. Verified Adoption & Reflection</h2>
            <div className="case-study-impact-box">
              <h3>Real-World Outcome</h3>
              <p>
                Enterprise compliance leads adopted the Control Tower as a required gate before promoting AI agents from staging to production environments—enabling enterprise clients to run autonomous integration agents with complete audit transparency.
              </p>
            </div>

            <div className="case-study-reflection-box">
              <h3>What I'd Improve Today</h3>
              <p>
                If building this today with modern LLM observability specs, I would introduce predictive anomaly alerts that flag agent reasoning drift *before* an execution fails, rather than notifying admins only after an action pauses.
              </p>
            </div>
          </section>

          {/* Case Study Pagination Footer */}
          <nav className="case-study-pagination-nav" aria-label="Case Study Navigation">
            <Link href="/#selected-work" className="pagination-btn pagination-prev">
              <span className="pagination-label">← Return to Homepage</span>
              <span className="pagination-title">Selected Work Index</span>
            </Link>
            <Link href="/work/clinical-workbench" className="pagination-btn pagination-next">
              <span className="pagination-label">Next Case Study →</span>
              <span className="pagination-title">Clinical Workbench ERP</span>
            </Link>
          </nav>
        </main>

        <Footer />
      </div>
    );
  }

  // Generic fallback for other slugs
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="case-study-root">
      <Header />
      <main className="case-study-container" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <p className="case-study-eyebrow">Case Study / In Preparation</p>
        <h1 className="case-study-title" style={{ maxWidth: "20ch" }}>{title}</h1>
        <p className="case-study-subtitle" style={{ maxWidth: "34ch", marginBottom: "2rem" }}>
          The full decision narrative and system architecture for this project is being formatted according to our Principal Blueprint.
        </p>
        <Link href="/" className="hero-cta">
          ← Return to Selected Work
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "clinical-workbench" },
    { slug: "disruption-view" },
    { slug: "agent-oversight" },
    { slug: "invoice-financing" },
  ];
}
