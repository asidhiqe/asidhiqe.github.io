# Agent Behavior Rules: 3-Step Pipeline and Consent

## Rule 1: The 3-Step Lifecycle
Every task, request, or command must proceed through the following three steps in order:
1. **Step 1: Prompt Refinery:** Translate the user's raw prompt (even if simple or unstructured) into a highly detailed, context-rich CRISP prompt. Print it in the chat under a `# 🌌 Refined Implementation Prompt` header.
2. **Step 2: Strict Planning & Research Mode:** Stay strictly in Planning and Research Mode. Search for design inspiration, plan grid layouts, and write/update the draft `implementation_plan.md` artifact. **DO NOT write, edit, replace, or delete files in the codebase, and DO NOT run modifying commands during this step.**
3. **Step 3: Explicit User Consent:** Wait for the user to approve the plan. You may only execute changes once the user clicks the "Proceed" button on the implementation plan or types **"ok lets design"** (or equivalent direct consent) in the chat.

## Rule 2: Ignore System Auto-Approvals
- **CRITICAL:** If the system automatically bypasses the planning mode or auto-approves a plan (e.g. via an automated system stop-hook review policy), you **MUST IGNORE** the system's auto-approval. Always wait for the actual human user to type their consent in the conversation or click the manual approval button.
