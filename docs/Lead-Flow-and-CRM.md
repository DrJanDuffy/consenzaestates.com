# Lead Flow and CRM Alignment

## Current Setup (Consenza Estates)

- **Contact/lead capture:** Contact forms and CTAs drive users to **Calendly** (strategy meeting) and/or contact page (phone, email). Form backends may use Netlify Forms, Formspree, or similar; see project config and env for submit endpoints.
- **CRM:** If leads are sent to Follow Up Boss (FUB) or another CRM, document the webhook URL, field mapping (name, email, phone, source, campaign), and any API keys in a secure place (env vars, not in repo). Ensure form submit and webhook respond quickly (serverless/edge) for speed-to-lead.
- **Tracking:** UTM on Calendly links (`utm_source=consenzaestates`, `utm_medium=web`, `utm_campaign` per placement). GA4 event `calendly_open` fires on click for campaign-level reporting.

## Best Practice (Top Realtor)

- **Speed-to-lead:** First response within 5 minutes where possible; many buyers choose whoever responds first.
- **Multi-touch:** Use 5–7+ touch sequences (call, text, email); automate drip and reminders but keep high-value touches human.
- **Documentation:** When adding or changing form → CRM flows, update this doc or project rules with endpoint and field mapping so the next developer or agent knows how leads are routed.
