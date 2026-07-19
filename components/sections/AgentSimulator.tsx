"use client";

import { useState } from "react";
import { cn } from "@/lib";

type SimState = "nominal" | "override" | "loop";

export default function AgentSimulator() {
  const [activeState, setActiveState] = useState<SimState>("nominal");
  const [overrideResolved, setOverrideResolved] = useState(false);
  const [loopResetted, setLoopResetted] = useState(false);

  function handleStateChange(state: SimState) {
    setActiveState(state);
    setOverrideResolved(false);
    setLoopResetted(false);
  }

  // System console descriptions corresponding to simulation state
  const getConsoleMessage = () => {
    switch (activeState) {
      case "nominal":
        return "System Status: NOMINAL. Autonomous workflow executing with 96% agent confidence. Automatic deployment completed successfully.";
      case "override":
        return overrideResolved
          ? "RESOLVED. Manual operator redirect accepted. Agent execution path updated to alternate node [GATEWAY_04]."
          : "ATTENTION. Agent confidence dropped to 48%. Execution halted at branch [EVAL_02]. Operator input required.";
      case "loop":
        return loopResetted
          ? "RECOVERED. Circular task execution terminated. Agent state refreshed. Retrying with updated prompt parameters."
          : "CRITICAL. Circular sequence detected: Node [EXEC_03] -> [EXEC_04] -> [EXEC_03]. Memory stack threshold near limit.";
    }
  };

  return (
    <div className="w-full p-4 md:p-6 font-mono select-none text-foreground">
      {/* ── Simulator Header ── */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className={cn(
            "h-2 w-2 rounded-full animate-pulse",
            activeState === "nominal" && "bg-teal-500",
            activeState === "override" && "bg-amber-500",
            activeState === "loop" && "bg-rose-500"
          )} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
            AI Agent Console (Active Observability)
          </span>
        </div>
        
        {/* Simulation Controls */}
        <div className="flex gap-1.5">
          {(["nominal", "override", "loop"] as const).map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => handleStateChange(state)}
              className={cn(
                "rounded border px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer",
                activeState === state
                  ? "border-accent bg-accent-tint text-accent"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground"
              )}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* ── High-Fidelity Dashboard Interface ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        {/* Column 1: Agent List & Active Focus */}
        <div className="border border-border rounded p-4 bg-background/40">
          <h4 className="text-[8px] font-bold text-muted uppercase tracking-widest mb-3 border-b border-border pb-2">
            Active Agents ({activeState === "nominal" ? "3" : "2"} / 3 Live)
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] p-1.5 rounded border border-border bg-background/20">
              <span className="text-foreground/90">Agent_01: TaskObserver</span>
              <span className="text-[8px] px-1 rounded bg-teal-500/10 text-teal-600 border border-teal-500/20">Idle</span>
            </div>
            
            <div className={cn(
              "flex items-center justify-between text-[10px] p-1.5 rounded border transition-colors duration-250",
              activeState === "nominal" && "border-teal-500/20 bg-teal-500/5 text-teal-600",
              activeState === "override" && "border-amber-500/30 bg-amber-500/5 text-amber-600",
              activeState === "loop" && "border-rose-500/30 bg-rose-500/5 text-rose-600"
            )}>
              <span>Agent_02: CodeRefiner</span>
              <span className={cn(
                "text-[8px] px-1 rounded border",
                activeState === "nominal" && "bg-teal-500/10 text-teal-600 border-teal-500/20",
                activeState === "override" && "bg-amber-500/10 text-amber-600 border-amber-500/20",
                activeState === "loop" && "bg-rose-500/10 text-rose-600 border-rose-500/20"
              )}>
                {activeState === "nominal" && "Nominal"}
                {activeState === "override" && "Pending"}
                {activeState === "loop" && "Fault"}
              </span>
            </div>

            <div className="flex items-center justify-between text-[10px] p-1.5 rounded border border-border bg-background/20">
              <span className="text-foreground/90">Agent_03: PromptRefinery</span>
              <span className="text-[8px] px-1 rounded bg-teal-500/10 text-teal-600 border border-teal-500/20">Idle</span>
            </div>
          </div>
        </div>

        {/* Column 2: Visual Decision Pipeline */}
        <div className="border border-border rounded p-4 md:col-span-2 bg-background/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[8px] font-bold text-muted uppercase tracking-widest mb-3 border-b border-border pb-2">
            <span>Execution Pipeline Path</span>
            <span>Step 24 / 40</span>
          </div>

          {/* Interactive flow schematic */}
          <div className="flex items-center justify-center py-4 relative">
            
            {/* Visual Step Nodes */}
            <div className="flex items-center justify-between w-full max-w-[320px] relative">
              
              {/* Connector line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2 z-0" />
              
              <div className="flex flex-col items-center gap-1 z-10">
                <div className="h-6 w-6 rounded-full border border-border bg-background flex items-center justify-center text-[8px]">
                  INIT
                </div>
                <span className="text-[7px] text-muted">Initialize</span>
              </div>

              <div className="flex flex-col items-center gap-1 z-10">
                <div className={cn(
                  "h-8 w-8 rounded-full border flex items-center justify-center text-[8px] font-bold transition-all duration-300",
                  activeState === "nominal" && "border-teal-500 bg-teal-500/10 text-teal-600 shadow-sm",
                  activeState === "override" && "border-amber-500 bg-amber-500/10 text-amber-600 animate-pulse",
                  activeState === "loop" && "border-rose-500 bg-rose-500/10 text-rose-600"
                )}>
                  {activeState === "nominal" && "96%"}
                  {activeState === "override" && "48%"}
                  {activeState === "loop" && "ERR"}
                </div>
                <span className="text-[7px] text-muted">Eval Confidence</span>
              </div>

              <div className="flex flex-col items-center gap-1 z-10">
                <div className={cn(
                  "h-6 w-6 rounded-full border flex items-center justify-center text-[8px] transition-colors duration-300",
                  activeState === "nominal" && "border-teal-500/40 text-teal-600 bg-teal-500/5",
                  activeState === "override" && overrideResolved && "border-teal-500/40 text-teal-600 bg-teal-500/5",
                  activeState === "override" && !overrideResolved && "border-border text-muted",
                  activeState === "loop" && "border-border text-muted"
                )}>
                  {activeState === "override" && overrideResolved ? "MAN" : "AUTO"}
                </div>
                <span className="text-[7px] text-muted">Action Commit</span>
              </div>

            </div>

            {/* Loop indicator visual arrow */}
            {activeState === "loop" && !loopResetted && (
              <div className="absolute bottom-2 left-[52%] -translate-x-1/2 flex items-center gap-1 bg-rose-500/10 border border-rose-500/25 px-2 py-0.5 rounded text-[7px] text-rose-500 animate-pulse">
                <span>Infinite Loop Boundary</span>
              </div>
            )}

          </div>

          {/* Metric Bar */}
          <div className="mt-3 flex items-center gap-3 text-[9px] text-muted">
            <span className="w-16">Confidence:</span>
            <div className="flex-1 h-1.5 rounded bg-border overflow-hidden">
              <div 
                className={cn(
                  "h-full transition-all duration-500 ease-out",
                  activeState === "nominal" && "bg-teal-500 w-[96%]",
                  activeState === "override" && (overrideResolved ? "bg-teal-500 w-[85%]" : "bg-amber-500 w-[48%]"),
                  activeState === "loop" && "bg-rose-500 w-[20%]"
                )}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── Console Output Box ── */}
      <div className="border border-border rounded bg-background/50 p-4">
        <div className="flex items-center justify-between text-[8px] font-bold text-muted uppercase tracking-widest mb-3 border-b border-border pb-2">
          <span>Active Monitor Log</span>
          <span>Buffer: ACTIVE</span>
        </div>
        
        <p className="text-xs leading-relaxed text-foreground min-h-[36px] font-mono">
          {getConsoleMessage()}
        </p>

        {/* Dynamic Controls depending on simulation state */}
        {activeState === "override" && !overrideResolved && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setOverrideResolved(true)}
              className="w-full rounded bg-amber-500/10 border border-amber-500/30 py-2.5 text-[9px] font-bold uppercase tracking-wider text-amber-600 hover:bg-amber-500/20 transition-colors duration-150 cursor-pointer focus:outline-none"
            >
              Approve Operator Re-Route (Manual Redirect)
            </button>
          </div>
        )}

        {activeState === "loop" && !loopResetted && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setLoopResetted(true)}
              className="w-full rounded bg-rose-500/10 border border-rose-500/30 py-2.5 text-[9px] font-bold uppercase tracking-wider text-rose-600 hover:bg-rose-500/20 transition-colors duration-150 cursor-pointer focus:outline-none"
            >
              Issue Kill Signal (Break Recursion Boundary)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
