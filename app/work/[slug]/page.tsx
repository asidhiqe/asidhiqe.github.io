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

            {/* Hero Visual Showcase Canvas */}
            <div className="case-study-hero-canvas">
              <div className="canvas-header-bar">
                <span className="canvas-dot red" />
                <span className="canvas-dot yellow" />
                <span className="canvas-dot green" />
                <span className="canvas-title">Agent Control Tower — System Observability Canvas</span>
              </div>
              <div className="canvas-preview-content">
                <div className="preview-badge">Live System Architecture Prototype</div>
                <div className="preview-diagram-wire">
                  <div className="wire-node active">
                    <span className="wire-status healthy">HEALTHY</span>
                    <span className="wire-name">Agent-01: Financial Reconciliation</span>
                  </div>
                  <div className="wire-arrow">➔</div>
                  <div className="wire-node warning">
                    <span className="wire-status action">PAUSED (Human Gate)</span>
                    <span className="wire-name">Agent-02: Partner API Ingestion</span>
                  </div>
                  <div className="wire-arrow">➔</div>
                  <div className="wire-node">
                    <span className="wire-status healthy">HEALTHY</span>
                    <span className="wire-name">Agent-03: Compliance Auditor</span>
                  </div>
                </div>
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

          {/* 01. Problem */}
          <section id="problem" className="case-study-section">
            <h2 className="case-study-h2">01. The Operational Problem</h2>
            <p className="case-study-p">
              As enterprise clients began deploying autonomous AI agents for partner integrations and automated workflow execution, IT administrators and risk officers faced a critical operational dilemma:
            </p>

            {/* Before vs After Bento Comparison */}
            <div className="bento-comparison-grid">
              <div className="bento-card bento-before">
                <span className="bento-chip status-flaw">Legacy / Before</span>
                <h3>Opaque Black-Box Execution</h3>
                <p>IT admins had zero visibility into LLM prompt reasoning loops or tool calls. When data ambiguity occurred, agents either failed silently or hallucinated unverified write actions.</p>
                <div className="bento-metric-sub">Friction: High Operational Risk</div>
              </div>

              <div className="bento-card bento-after">
                <span className="bento-chip status-success">Engineered / After</span>
                <h3>Control Tower Observability</h3>
                <p>Centralized real-time status grid, LLM execution trace logs, and automated risk-threshold speed bumps that pause execution for human verification.</p>
                <div className="bento-metric-sub">Outcome: Audit Transparency & Trust</div>
              </div>
            </div>

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

          {/* 02. User Archetypes / Personas */}
          <section className="case-study-section">
            <h2 className="case-study-h2">02. Operational User Archetypes</h2>
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

          {/* 03. System IA & Workflow Architecture */}
          <section className="case-study-section">
            <h2 className="case-study-h2">03. Information Architecture & Workflow</h2>
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

          {/* 04. Principal Design Decisions & Trade-off Matrix */}
          <section className="case-study-section">
            <h2 className="case-study-h2">04. Principal Design Decisions & Trade-Offs</h2>

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

          {/* 05. Verified Impact & Reflection */}
          <section className="case-study-section">
            <h2 className="case-study-h2">05. Verified Adoption & Reflection</h2>
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

  if (slug === "sisi-lending" || slug === "invoice-financing") {
    return (
      <div className="case-study-root">
        <Header />

        <main className="case-study-container">
          {/* Header & Hero Meta */}
          <header className="case-study-hero">
            <Link href="/" className="case-study-back-link">
              ← Return to Selected Work
            </Link>
            <p className="case-study-eyebrow">✦ FinTech & Credit Underwriting Platform</p>
            <h1 className="case-study-title">
              Sisi Lending: Streamlining Micro-Loans & Automated Underwriting for Emerging Markets
            </h1>
            <p className="case-study-subtitle">
              How user-centered credit application workflows and real-time risk assessment dashboards reduced loan processing turnarounds by 65%.
            </p>

            <div className="case-study-meta-grid">
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Domain</span>
                <span className="case-study-meta-val">FinTech & Micro-Lending</span>
              </div>
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Role</span>
                <span className="case-study-meta-val">Lead Product Designer</span>
              </div>
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Impact</span>
                <span className="case-study-meta-val">65% Faster Processing</span>
              </div>
              <div className="case-study-meta-item">
                <span className="case-study-meta-label">Platform</span>
                <span className="case-study-meta-val">Mobile App & Admin Console</span>
              </div>
            </div>

            {/* Hero Visual Showcase Canvas */}
            <div className="case-study-hero-canvas">
              <div className="canvas-header-bar">
                <span className="canvas-dot red" />
                <span className="canvas-dot yellow" />
                <span className="canvas-dot green" />
                <span className="canvas-title">Sisi Credit Ecosystem — Underwriting & Borrowing Flow</span>
              </div>
              <div className="canvas-preview-content">
                <div className="preview-badge">Live FinTech System Architecture</div>
                <div className="preview-diagram-wire">
                  <div className="wire-node active">
                    <span className="wire-status healthy">COMPLETED</span>
                    <span className="wire-name">Borrower Onboarding & KYC</span>
                  </div>
                  <div className="wire-arrow">➔</div>
                  <div className="wire-node warning">
                    <span className="wire-status action">PROCESSING</span>
                    <span className="wire-name">Automated Risk Scoring</span>
                  </div>
                  <div className="wire-arrow">➔</div>
                  <div className="wire-node">
                    <span className="wire-status healthy">READY</span>
                    <span className="wire-name">Instant Disbursement Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Key Design Lesson Banner */}
          <section className="case-study-lesson-banner">
            <span className="case-study-lesson-tag">Core Design Lesson</span>
            <p className="case-study-lesson-text">
              In digital lending, friction during onboarding directly increases drop-offs. By chunking complex KYC verifications into progressive disclosures and rendering real-time risk scores transparent to underwriters, speed and safety can coexist.
            </p>
          </section>

          {/* 01. The Problem */}
          <section id="problem" className="case-study-section">
            <h2 className="case-study-h2">01. The Lending Friction Problem</h2>
            <p className="case-study-p">
              Borrowers in emerging markets faced lengthy 48-hour approval wait times due to manual document verifications, while loan officers struggled with fragmented risk assessment tools.
            </p>

            {/* Before vs After Bento Comparison */}
            <div className="bento-comparison-grid">
              <div className="bento-card bento-before">
                <span className="bento-chip status-flaw">Legacy / Before</span>
                <h3>High Drop-Off & Manual Verification</h3>
                <p>Long 14-step onboarding forms, hidden interest rate structures, and manual PDF document reviews leading to a 42% application abandonment rate.</p>
                <div className="bento-metric-sub">Friction: 48h Average Wait Time</div>
              </div>

              <div className="bento-card bento-after">
                <span className="bento-chip status-success">Engineered / After</span>
                <h3>Automated Underwriting & Clear KYC</h3>
                <p>3-step progressive KYC, dynamic credit score calculators, and a unified loan officer console with automated risk scoring flags.</p>
                <div className="bento-metric-sub">Outcome: &lt; 15 Minute Approval Window</div>
              </div>
            </div>
          </section>

          {/* 02. User Archetypes */}
          <section className="case-study-section">
            <h2 className="case-study-h2">02. Core User Archetypes</h2>
            <div className="case-study-persona-grid">
              <div className="case-study-persona-card">
                <span className="persona-role">Archetype A</span>
                <h3>The First-Time Borrower</h3>
                <ul className="persona-list">
                  <li><strong>Goal:</strong> Secure working capital fast with transparent repayment schedules.</li>
                  <li><strong>Friction:</strong> Fear of hidden fees and complicated banking jargon.</li>
                  <li><strong>Need:</strong> Simple mobile-first application & instant status tracking.</li>
                </ul>
              </div>

              <div className="case-study-persona-card">
                <span className="persona-role">Archetype B</span>
                <h3>The Underwriting Officer</h3>
                <ul className="persona-list">
                  <li><strong>Goal:</strong> Evaluate loan risk rapidly without missing fraud signals.</li>
                  <li><strong>Friction:</strong> Switching between 5 tools to verify income & credit history.</li>
                  <li><strong>Need:</strong> Single-screen decision dashboard with automated flags.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 03. Design Decisions */}
          <section className="case-study-section">
            <h2 className="case-study-h2">03. Principal Design Decisions</h2>

            <div className="case-study-matrix-card">
              <span className="matrix-decision-title">Decision 1: Progressive KYC Chunking</span>
              <p><strong>Context:</strong> Asking for identity proofs, bank statements, and collateral upfront overwhelmed borrowers.</p>
              <p><strong>Rationale:</strong> We split onboarding into 3 distinct micro-steps (Basic Profile ➔ Credit Check ➔ Document Upload), unlocking incremental progress.</p>
            </div>

            <div className="case-study-matrix-card">
              <span className="matrix-decision-title">Decision 2: Transparent Repayment Calculator</span>
              <p><strong>Context:</strong> Users abandoned applications when final interest rates were hidden until approval.</p>
              <p><strong>Rationale:</strong> Designed an interactive slider component showing exact daily/monthly repayment amounts before submission.</p>
            </div>
          </section>

          {/* 04. Verified Impact */}
          <section className="case-study-section">
            <h2 className="case-study-h2">04. Measured Business Impact</h2>
            <div className="case-study-impact-box">
              <h3>Key Outcomes</h3>
              <p>
                • <strong>65% Reduction</strong> in loan processing turnaround time (from 48 hours to under 15 minutes).<br />
                • <strong>38% Increase</strong> in completed mobile application flows.<br />
                • <strong>94% Underwriter Satisfaction</strong> score for the unified risk dashboard.
              </p>
            </div>
          </section>

          {/* Case Study Pagination Footer */}
          <nav className="case-study-pagination-nav" aria-label="Case Study Navigation">
            <Link href="/#selected-work" className="pagination-btn pagination-prev">
              <span className="pagination-label">← Return to Homepage</span>
              <span className="pagination-title">Selected Work Index</span>
            </Link>
            <Link href="/work/agent-oversight" className="pagination-btn pagination-next">
              <span className="pagination-label">Next Case Study →</span>
              <span className="pagination-title">Agent Control Tower</span>
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
