# Google Search Console — Setup Checklist

The site is prepared for Google Search Console. Follow these steps after deploy.

## 1. Add property

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property → **URL prefix** → `https://consenzaestates.com`.
3. Use the **HTML tag** verification method (recommended).

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

## 3. Submit sitemap

1. In Search Console, open your property → **Sitemaps** (left menu).
2. Under "Add a new sitemap", enter: `sitemap-index.xml`
3. Click **Submit**.

The sitemap is generated at build time by `@astrojs/sitemap` and is available at:

- **URL:** `https://consenzaestates.com/sitemap-index.xml`
- **Referenced in:** `public/robots.txt` (Sitemap directive) and in `<head>` via `<link rel="sitemap" href=".../sitemap-index.xml" />`.

## 4. Optional: GA4 link

If you use GA4 (`PUBLIC_GA4_MEASUREMENT_ID`), link the property in Search Console (Settings → Associations) for combined search and analytics data.

## Already in place

- **Canonical URLs:** Every page has a canonical in `BaseHead.astro`.
- **robots.txt:** `public/robots.txt` allows all crawlers and points to the sitemap.
- **Structured data:** RealEstateAgent and Person JSON-LD on every page for rich results and GBP alignment.
