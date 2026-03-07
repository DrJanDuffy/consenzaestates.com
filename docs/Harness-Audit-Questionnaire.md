# Harness Decision Audit — Context Questionnaire

Answer these once; reuse for the Harness Decision Audit and Architecture Decision Brief. If you prefer to use the **default top-realtor profile**, write "Use defaults" and skip to Phase 2.

---

## a. TOOLS

Which AI coding agents do you use? (e.g. Cursor, Claude Code, Codex, Copilot, Windsurf.)

For each:
- How often? (e.g. daily, few times a week)
- What kind of work? (e.g. feature implementation, debugging, schema/SEO, RealScout widget config, neighborhood pages)

---

## b. INFRASTRUCTURE

What have you or your team built on top of these tools? List what exists (or write "none").

- **Project memory files:** CLAUDE.md, AGENTS.md, progress files?
- **Custom skills or slash commands:** (e.g. Cursor skills, Notion stack)
- **MCP server connections:** Beyond Vercel, Cloudflare, Notion?
- **Linter rules or architectural enforcement** aimed at agent use?
- **Verification workflows** that depend on a specific tool?
- **Agent-readable documentation:** RULE.md, .cursor/rules?
- **Chained workflow automations** (one step feeds the next)?

---

## c. WORK TYPES

List the **5–8 most common development tasks** in a typical week. Be specific.

Examples: RealScout widget config, neighborhood page from ticket, FUB webhook debugging, schema/NAP audit, lead form integration, content/SEO updates.

---

## d. CONTEXT

- How many engineers on your team?
- Your role? (solo developer, team lead, architect, engineering manager, executive)

---

**Optional:** Where does your memory live? (e.g. user-level CLAUDE.md, project-level rules, Notion) — helps score State & Memory accurately.
