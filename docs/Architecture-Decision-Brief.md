# Architecture Decision Brief: AI Coding Harness

**One-page summary for leadership.** Fill in "What leadership cares about most" (e.g. budget, velocity, security, hiring, risk) and reuse the Harness Decision Audit output (Phase 2).

---

## 1. Strategic frame

Choosing how we use AI coding agents (local vs cloud, tools, rules) is an **architectural commitment** that affects velocity, cost, and risk—not just a tool purchase. This brief captures our current position and recommendation so we can align and revisit with a clear timeline.

---

## 2. Current position

- **Philosophy (from audit):** Local-collaborative. We run the agent in our real environment (Cursor, local repo, terminal). Memory lives in rules, skills, and MCPs (Vercel, Notion). No cloud sandbox per task.
- **Lock-in band:** Moderate (16/25). Switching is possible but gets more expensive over time. We have invested in Cursor, project and user rules, RealScout/IDX and NAP guardrails, and MCPs for deploy and workspace.

---

## 3. Switching cost

**Moderate.** Replicating rules, habits, and RealScout/NAP compliance in another harness would take on the order of 1–2 weeks. MCPs (Vercel, Notion) are Cursor-specific; equivalent integrations would need to be re-established elsewhere.

---

## 4. Recommendation

**Double down on the current harness and implement the three audit actions:** (1) Document Cursor rules in AGENTS.md, (2) Add a file-scoped rule for RealScout (IDX), (3) Run one NAP/schema spot-check. This supports **velocity** and **compliance** for the real estate pipeline without increasing risk. If leadership’s top priority is different (e.g. security, hiring), tailor this line: e.g. “Supports velocity while keeping compliance guardrails in version control” or “Reduces risk of NAP/IDX drift by documenting agent rules.”

---

## 5. Decision timeline

**Revisit in 6 months** or when adding a second engineer to AI-assisted work. At that point, reassess lock-in and whether a second harness (e.g. cloud sandbox for routine tasks) is worth introducing.

---

**Top-realtor angle:** This setup supports a top realtor’s pipeline: fast iteration on sites, compliance safety (NAP, RealScout/IDX, MLS disclaimer), and clear ownership of the AI-assisted workflow. All three deliverables (audit, implementation, and this brief) are in `docs/` and the repo root (`AGENTS.md`, `.cursor/rules/`).
