# Harness Decision Audit

*Default top-realtor profile: Cursor, project/user rules, MCPs (Vercel, Notion), real estate stack. Work types: neighborhood pages, API/webhook fixes, schema/SEO, RealScout widget config, lead forms. Replace with your questionnaire answers when available.*

---

## 1. Your Harness Philosophy

**Classification: Local-Collaborative (with hybrid tooling)**

You run the agent in your actual environment (Cursor IDE, local terminal, real repo). Institutional memory lives in agent-side artifacts: user-level CLAUDE.md, project rules, skills, and MCPs (Vercel, Cloudflare, Notion). Context is managed through conversation and rules rather than clean sandbox isolation per task. Evidence: single primary tool (Cursor), rules and skills as files, MCPs for deploy/observability/workspace, and real estate-specific rules (RealScout, NAP, FUB). This is a **local-collaborative** stance. If you add a second harness (e.g. cloud sandbox) later, the audit would reclassify toward Deliberate Hybrid.

---

## 2. Lock-In Scorecard

| Dimension | What You've Built | Lock-In Score (1-5) | Tied To |
|-----------|------------------|---------------------|---------|
| Execution Philosophy | Cursor as primary; local terminal and repo access; no evidence of cloud sandbox | 3 | Cursor |
| State & Memory | User CLAUDE.md, project rules, skills (dr-jan-duffy, notion, etc.), MCPs | 4 | Cursor + user/project rules |
| Context Management | Rules + skills + conversation; no formal compaction or sub-agent delegation | 3 | Cursor |
| Tool Integration | MCPs (Vercel, Cloudflare, Notion); RealScout/FUB rules; CSP and script load patterns | 4 | Cursor + Vercel/Notion/RealScout |
| Multi-Agent Patterns | Single-agent workflow; no parallel sandboxed tasks or cross-tool review | 2 | N/A |

**Total: 16/25**

**Interpretation:** Moderate lock-in (11–17). Switching is possible but gets more expensive over time. Be intentional: document rules in AGENTS.md, keep NAP/schema and RealScout (IDX) guardrails in version control, and decide whether to add a second harness for well-defined tasks.

---

## 3. Task Routing Map

| Your Work Type | Best Harness | Why | Supervision Level | Verification |
|----------------|-------------|-----|-------------------|--------------|
| Neighborhood page from ticket | Cursor (local) | Deep codebase and content; benefits from rules (NAP, schema) | Interactive | Spot-check NAP and schema on new page |
| RealScout (IDX) widget config | Cursor (local) | Compliance-sensitive; do-not-modify-without-approval rule | Check-in | Confirm script once in layout, CSP has both domains, MLS disclaimer present |
| Schema/NAP audit | Cursor (local) | Single source in settings.js; layout and BaseHead read from it | Check-in | Compare visible NAP + JSON-LD to GBP |
| Lead form / FUB webhook | Cursor (local) | Service layer and env; needs local or staging test | Interactive | Test submit and webhook; confirm CRM receives |
| API/webhook debugging | Cursor (local) | Needs logs, env, and repo context | Interactive | Reproduce and verify fix in same environment |
| Content/SEO updates | Cursor (local) | Copy and meta; rules enforce Dr. Jan Duffy, license | Check-in | Meta and H1 match brief; no "Janet" |
| New site or new domain setup | Cursor (local) | Copy rules and settings; multi-site pattern | Interactive | NAP, schema, RealScout, CSP match existing site |
| Routine refactor (no compliance) | Either | Could be done in sandbox if you had one; clear acceptance criteria | Autonomous | Tests and diff review |

**Cross-Agent Verification:** If you introduce a second harness (e.g. cloud sandbox for routine tasks), use Cursor to review the other tool’s output for NAP, schema, and RealScout (IDX) compliance before merge.

---

## 4. Three Actions This Week

1. **Document Cursor rules in AGENTS.md** — Add a short AGENTS.md in the project root that summarizes what the agent must always do (NAP, Dr. Jan Duffy, license, RealScout = IDX, no RealScout changes without approval) and points to `.cursor/rules/` and user rules. Completable in under 1 hour.

2. **Add one file-scoped rule for RealScout (IDX)** — In `.cursor/rules/`, add a rule that applies to RealScout-related files (e.g. `**/RealScout*.astro`, `**/Base.astro` where script is loaded): RealScout is the office IDX; do not modify widget/integration without explicit approval; CSP must include em.realscout.com and www.realscout.com; script once in root layout. Completable in under 30 minutes.

3. **Run one NAP/schema spot-check** — Pick one page (e.g. homepage or contact). Confirm visible NAP (footer, contact block) and JSON-LD in BaseHead match `src/config/settings.js` and your Google Business Profile. Note any mismatch in a one-line doc or comment. Completable in under 30 minutes.
