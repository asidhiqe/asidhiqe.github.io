"use client";

import { useState } from "react";
import { cn } from "@/lib";

export default function DoctorWorkflow() {
  const [activeTab, setActiveTab] = useState<"unified" | "siloed">("unified");

  return (
    <div className="w-full p-4 md:p-5 font-mono text-foreground select-none text-[10px]">
      
      {/* ── Healthcare ERP Header ── */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-muted">
            ALGAEH // CLINICAL_ERP_SUITE
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-1">
          {(["unified", "siloed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-2 py-0.5 rounded-[2px] border text-[7px] font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer",
                activeTab === tab
                  ? "border-accent bg-accent-tint text-accent"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground"
              )}
            >
              {tab === "unified" ? "Unified Workbench" : "Siloed Portal"}
            </button>
          ))}
        </div>
      </div>

      {/* ── High-Fidelity Clinical Mockup Grid ── */}
      <div className="border border-border/40 rounded bg-background/40 p-3 mb-3 min-h-[140px]">
        
        {/* Patient Header Strip */}
        <div className="flex justify-between border-b border-border/30 pb-2 mb-3 text-[8px] text-muted">
          <span>PATIENT: JANE DOE // MRN: #83049-D</span>
          <span>BED: W4-12</span>
        </div>

        {activeTab === "unified" ? (
          /* Unified Clinical Workbench Layout */
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Patient vitals telemetry */}
            <div className="border border-border/30 rounded p-2.5 bg-background/50 space-y-1">
              <span className="text-[7px] text-muted block mb-1">TELEMETRY</span>
              <div className="flex justify-between border-b border-border/20 pb-0.5"><span className="text-muted">HR:</span><span className="font-bold text-foreground">72 BPM</span></div>
              <div className="flex justify-between border-b border-border/20 pb-0.5"><span className="text-muted">SPO2:</span><span className="font-bold text-foreground">98%</span></div>
              <div className="flex justify-between"><span className="text-muted">SYS/DIA:</span><span className="font-bold text-foreground">120/80</span></div>
            </div>

            {/* EMR Diagnosis summary */}
            <div className="border border-border/30 rounded p-2.5 bg-background/50 sm:col-span-2 flex flex-col justify-between">
              <div>
                <span className="text-[7px] text-muted block mb-1">DIAGNOSTIC SUMMARY</span>
                <p className="text-[9px] leading-relaxed text-foreground/90">
                  Patient presents with acute respiratory congestion. WBC counts are elevated at 11.2 K/uL.
                </p>
              </div>
              <span className="text-[7px] text-accent font-semibold mt-2">✓ CLINICAL DECISION LOCK ACTIVE</span>
            </div>

          </div>
        ) : (
          /* Siloed Disconnected Screens Comparison */
          <div className="grid grid-cols-2 gap-2 text-muted">
            <div className="border border-amber-500/25 bg-amber-500/5 rounded p-2 flex flex-col justify-between">
              <span className="text-[7px] text-amber-600 font-bold uppercase">EMR Portal [App 1]</span>
              <p className="text-[9px] mt-1 text-foreground/80">Diagnosis: Acute respiratory tract congestion.</p>
            </div>
            <div className="border border-border/40 bg-background/20 rounded p-2 flex flex-col justify-between">
              <span className="text-[7px] text-muted font-bold uppercase">Labs App [App 2]</span>
              <p className="text-[9px] mt-1 text-foreground/80">Labs: WBC count elevated at 11.2 K/uL.</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Metrics Readout */}
      <div className="border border-border/40 rounded bg-background/50 p-2.5 flex items-center justify-between text-[7px] text-muted tracking-wider">
        <span>DEPT: EMERGENCY_MED</span>
        <span>WARD: W4</span>
        <span>DECISION_METRIC: CONTEXT_SYNCED</span>
      </div>

    </div>
  );
}
