# Google Search Console — Setup & Best Practices (2026)

The site is prepared for Google Search Console using current Google guidance as of March 2026. Follow the steps below and use the ongoing practices to keep the property healthy.

---

## 1. Add property

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property → **URL prefix** → `https://www.consenzaestates.com` (primary domain).
3. Use the **HTML tag** verification method (recommended).

---

## 2. Verify ownership

1. Search Console will show a meta tag, e.g.  
   `<meta name="google-site-verification" content="YOUR_CODE" />`
2. Copy the **content** value only (e.g. `YOUR_CODE`).
3. In your deployment environment (Vercel, Netlify, or local `.env`), set:
   ```bash
   PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR_CODE
   ```
4. Rebuild and deploy so the meta tag appears in the `<head>` of the homepage.
5. In Search Console, click **Verify**.

---

## 3. Submit sitemap

1. In Search Console, open your property → **Sitemaps** (left menu).
2. Under "Add a new sitemap", enter: `sitemap-index.xml`
3. Click **Submit**.

**Sitemap details (Google best practices):**

- **URL:** `https://www.consenzaestates.com/sitemap-index.xml`
- Generated at build time by `@astrojs/sitemap` (Astro 5); referenced in `public/robots.txt` and in `<head>` via `<link rel="sitemap" href=".../sitemap-index.xml" />`.
- **Format:** XML, UTF-8, fully-qualified absolute URLs (required by Google).
- **Limits:** Each sitemap &lt; 50MB and &lt; 50,000 URLs. This site uses a sitemap index (`sitemap-index.xml` + numbered files).

---

## 4. Link GA4 (recommended)

If you use GA4 (`PUBLIC_GA4_MEASUREMENT_ID`):

1. In Search Console → **Settings** (gear) → **Associations**.
2. Link your GA4 property to this Search Console property.
3. Use **Search Console → Search results** and GA4 together for queries, impressions, and clicks.

---

## 5. URL Inspection and “Request indexing”

- **URL Inspection** (search bar at top): Use to check how Google sees a single URL, run a **live test**, and **Request indexing** for new or updated key pages.
- **Quota:** There is a daily limit per property for indexing requests; requesting repeatedly does not speed up crawling.
- **When to use:** After publishing new or significantly updated pages (e.g. new neighborhood, new blog post). For many URLs, rely on the sitemap; use Request indexing for a few high-priority URLs.

---

## 6. Ongoing monitoring (2026 best practices)

| Report | What to check |
|--------|----------------|
| **Coverage** (Pages) | Indexed vs Discovered; fix “Error” or “Excluded” reasons (e.g. redirects, soft 404s, canonical issues). |
| **Core Web Vitals** | Ensure URLs are in “Good” or “Needs improvement”; fix LCP, INP, CLS where possible. |
| **Sitemaps** | Confirm status “Success” and that discovered count is expected; fix any “Couldn’t fetch” or errors. |
| **Manual actions** | Check that no manual actions are applied; resolve any policy issues. |
| **Security issues** | Resolve any reported security or hacking issues. |
| **Mobile usability** | Fix any mobile usability errors so pages stay eligible for mobile-first indexing. |

---

## 7. What’s already in place on this site

- **Canonical URLs:** Every page has a canonical in `BaseHead.astro` (matches `Astro.site`).
- **robots.txt:** `public/robots.txt` allows all crawlers (`User-agent: *` / `Allow: /`) and has a `Sitemap:` directive. Served at site root.
- **Structured data (E-E-A-T and rich results):**
  - **WebSite** — Site entity with name, url, description, publisher; supports sitelinks and understanding of the site.
  - **RealEstateAgent** — NAP, address, image, sameAs (social); aligns with GBP and local SEO.
  - **Person** — Dr. Jan Duffy, jobTitle, worksFor, contact, sameAs (social) for E-E-A-T.
  - **FAQPage** — On About (via `FAQSection.astro`) for FAQ rich results and GBP.
- **Verification:** Conditional `google-site-verification` meta tag when `PUBLIC_GOOGLE_SITE_VERIFICATION` is set.
- **Primary domain:** All canonicals and sitemap use `https://www.consenzaestates.com` (www as primary).

---

## 8. If you add a non-www property

If you also verify `https://consenzaestates.com` (no www), submit the same sitemap URL that reflects your canonical domain (e.g. `https://www.consenzaestates.com/sitemap-index.xml`). Prefer one canonical domain (www) and redirect the other so GSC and indexing stay consistent.
