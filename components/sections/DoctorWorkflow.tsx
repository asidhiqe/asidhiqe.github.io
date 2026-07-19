"use client";

import { useState } from "react";
import { cn } from "@/lib";

type WorkflowState = "siloed" | "unified";

export default function DoctorWorkflow() {
  const [activeState, setActiveState] = useState<WorkflowState>("siloed");

  const getStatusMessage = () => {
    return activeState === "siloed"
      ? "Siloed Mode: 3 disconnected clinical applications open. Multiple context-switches required. Risk of missed diagnostic alerts: HIGH."
      : "Unified Workbench: Siloed data feeds consolidated into a single clinician screen. Patient context preserved. Context-switches: 0.";
  };

  return (
    <div className="w-full p-4 md:p-6 font-mono select-none text-foreground">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className={cn(
            "h-2 w-2 rounded-full animate-pulse",
            activeState === "siloed" ? "bg-amber-500" : "bg-teal-500"
          )} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
            Clinical patient chart (Doctor Workspace Comparison)
          </span>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex gap-1.5">
          {(["siloed", "unified"] as const).map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => setActiveState(state)}
              className={cn(
                "rounded border px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer",
                activeState === state
                  ? "border-accent bg-accent-tint text-accent"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground"
              )}
            >
              {state === "siloed" ? "Siloed Mode" : "Unified Workbench"}
            </button>
          ))}
        </div>
      </div>

      {/* ── High-Fidelity Clinical Mockup ── */}
      <div className="border border-border rounded-lg bg-background/30 p-4 mb-6">
        
        {/* Patient header strip */}
        <div className="flex items-center justify-between border-b border-border pb-3 mb-4 text-[9px]">
          <div className="flex gap-4">
            <span className="font-bold text-foreground">PATIENT: JANE DOE</span>
            <span className="text-muted">DOB: 12-FEB-1981</span>
            <span className="text-muted">MRN: #83049-D</span>
          </div>
          <span className="text-accent font-semibold">WARD 4 / BED 12</span>
        </div>

        {/* Dynamic Workspace Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[140px]">
          
          {/* Patient Vitals Sidebar */}
          <div className="border border-border rounded p-3 bg-background/40 text-[10px] space-y-2 flex flex-col justify-center">
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span className="text-muted">HR:</span>
              <span className="font-bold text-foreground">72 BPM</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span className="text-muted">SpO2:</span>
              <span className="font-bold text-foreground">98%</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-1">
              <span className="text-muted">SYS/DIA:</span>
              <span className="font-bold text-foreground">120/80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">TEMP:</span>
              <span className="font-bold text-foreground">37.0°C</span>
            </div>
          </div>

          {/* Main Clinical Data Area */}
          <div className="md:col-span-3 flex flex-col gap-2">
            {activeState === "siloed" ? (
              /* Siloed Layout: Overlapping, disjointed segments */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-full">
                <div className="border border-amber-500/20 bg-amber-500/5 rounded p-3 flex flex-col justify-between">
                  <span className="text-[8px] font-bold text-amber-600 uppercase">EMR Portal [App 1]</span>
                  <p className="text-[10px] text-foreground/80 mt-1">Diagnosis: Acute respiratory tract congestion.</p>
                </div>
                <div className="border border-border bg-background/20 rounded p-3 flex flex-col justify-between">
                  <span className="text-[8px] font-bold text-muted uppercase">Labs System [App 2]</span>
                  <p className="text-[10px] text-foreground/80 mt-1">Labs: WBC count elevated at 11.2 K/uL.</p>
                </div>
              </div>
            ) : (
              /* Unified Layout: Cohesive, structured board */
              <div className="border border-accent/20 bg-accent-tint/10 rounded p-3.5 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-accent/20 pb-2 mb-2">
                  <span className="text-[8px] font-bold text-accent uppercase">Consolidated Clinical Workbench</span>
                  <span className="text-[8px] text-accent/80 font-semibold font-mono">WORKSPACE_SECURE</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px]">
                  <div>
                    <span className="text-muted uppercase text-[7px] font-bold block mb-1">Electronic Medical Record</span>
                    <p className="text-foreground/95 leading-relaxed">Diagnosis: Acute respiratory tract congestion.</p>
                  </div>
                  <div>
                    <span className="text-muted uppercase text-[7px] font-bold block mb-1">Laboratory Diagnostics</span>
                    <p className="text-foreground/95 leading-relaxed">WBC count elevated at 11.2 K/uL (Ref range: 4.5-11.0).</p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-accent/15 flex items-center justify-between text-[8px] text-accent/70">
                  <span>Context Lock: Patient Rounding Protocol</span>
                  <span>Auth Token: OK</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Log message */}
      <div className="rounded border border-border bg-background/50 p-4">
        <div className="flex items-center justify-between text-[8px] font-bold text-muted uppercase tracking-widest mb-2">
          <span>Clinician Audit Status</span>
          <span>Buffer: DISP</span>
        </div>
        <p className="text-xs leading-relaxed text-foreground font-mono">
          {getStatusMessage()}
        </p>
      </div>

    </div>
  );
}
