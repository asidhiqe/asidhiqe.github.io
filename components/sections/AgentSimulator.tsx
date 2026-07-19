"use client";

import { useState } from "react";
import { cn } from "@/lib";

export default function AgentSimulator() {
  const [activeTab, setActiveTab] = useState<"topology" | "audit_log">("topology");

  return (
    <div className="w-full p-4 md:p-5 font-mono text-foreground select-none text-[10px]">
      
      {/* ── Control Tower Header ── */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-muted">
            BOOMI // AGENT_CONTROL_TOWER
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-1">
          {(["topology", "audit_log"] as const).map((tab) => (
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
              {tab === "topology" ? "Node Topology" : "System Log"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid Workbench Panel ── */}
      <div className="border border-border/40 rounded bg-background/40 p-3 mb-3 min-h-[140px] flex flex-col justify-between">
        {activeTab === "topology" ? (
          /* Node Topology Graph Preview */
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border/30 pb-2 text-[8px] text-muted">
              <span>ACTIVE PIPELINE: AGENT_GARDEN_V4</span>
              <span>CONFIDENCE: 98.4%</span>
            </div>

            <div className="flex items-center justify-around py-2 relative">
              {/* Connector line */}
              <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-border/40 -translate-y-1/2" />

              {/* Node 1 */}
              <div className="relative flex flex-col items-center gap-1.5 z-10 bg-background px-2">
                <span className="text-[7px] text-muted uppercase font-bold">[NODE_01]</span>
                <div className="border border-border rounded px-2 py-1 bg-background/50 font-bold">
                  PROMPT_PARSE
                </div>
                <span className="text-[6px] text-accent font-semibold">12ms // OK</span>
              </div>

              {/* Node 2 */}
              <div className="relative flex flex-col items-center gap-1.5 z-10 bg-background px-2">
                <span className="text-[7px] text-muted uppercase font-bold">[NODE_02]</span>
                <div className="border border-accent/40 text-accent rounded px-2 py-1 bg-accent-tint/10 font-bold">
                  EXEC_LOOP
                </div>
                <span className="text-[6px] text-accent font-semibold">98.4% CONF</span>
              </div>

              {/* Node 3 */}
              <div className="relative flex flex-col items-center gap-1.5 z-10 bg-background px-2">
                <span className="text-[7px] text-muted uppercase font-bold">[NODE_03]</span>
                <div className="border border-border rounded px-2 py-1 bg-background/50 text-muted font-bold">
                  COMMIT_OUT
                </div>
                <span className="text-[6px] text-muted">PENDING</span>
              </div>
            </div>
          </div>
        ) : (
          /* System Audit Log Terminal Preview */
          <div className="space-y-1.5 text-muted leading-relaxed text-[9px] font-mono">
            <div className="flex gap-2">
              <span className="text-accent">[08:42:01]</span>
              <span>INIT: Loading agent configurations from Boomi local cluster...</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">[08:42:02]</span>
              <span>SYNC: Branch execution model loaded. 24 tasks scheduled.</span>
            </div>
            <div className="flex gap-2 text-foreground font-semibold">
              <span className="text-accent">[08:42:03]</span>
              <span>RUN: Agent_02 returned output with 98.4% evaluation confidence.</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">[08:42:04]</span>
              <span>TERM: Commit verified. Awaiting client transaction acknowledgment.</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Metrics Readout */}
      <div className="border border-border/40 rounded bg-background/50 p-2.5 flex items-center justify-between text-[7px] text-muted tracking-wider">
        <span>STATUS: NOMINAL</span>
        <span>VER: BOOMI_1.2.0</span>
        <span>INTEGRITY_INDEX: 99.8</span>
      </div>

    </div>
  );
}
