<p align="center">
  <img src="assets/gh-banner.png" alt="Odyssey Theme Banner">
</p>

<br/>
<div align="center">
  <a href="https://twitter.com/jaydanurwin">
  <img src="assets/twitter-badge.svg" alt="Follow Jaydan Urwin on Twitter"/>
</a>
  <a href="https://sapling.lemonsqueezy.com/checkout/buy/9b78751f-6382-442d-ac99-32c2318b70a0">
    <img src="assets/sponsor-badge.svg" alt="Sponsor This Repo" />
  </a>
</div>
<br/>

# Odyssey Theme

Odyssey Theme is a modern theme/starter for a business or startup's marketing website. It provides landing page examples, a full-featured blog, contact forms, and more. It is fully themeable to match your business' branding and style. It even includes a theme switcher component to show how easily the entire style of the site can be changed with only a few lines of CSS.

## Features

<p align="center">
  <img src="assets/lh-screenshot.png" alt="Screenshot of perfect score in Lighthouse benchmark">
</p>


- ✅ **A perfect score in Lighthouse**
- ✅ **Blazing fast performance thanks to Astro 🚀**
- ✅ **A Full Featured Blog with Tagging**
- ✅ **Fully theme-able styles with for buttons, shapes, backgrounds, surfaces, etc.**
- ✅ **Responsive, mobile-friendly landing pages**
- ✅ **SEO Best Practices (Open Graph, Canonical URLs, sitemap)**
- ✅ **Performant Local Fonts Setup**
- ✅ **Contact Forms Setup for Netlify, Formspree, Formspark, etc.**
- ✅ **A package of ready-to-use UI components**


## Demo

View a [live demo](https://odyssey-theme.sapling.supply/) of the Odyssey Theme.

## Documentation

1. View the [Theme Setup Guide](https://odyssey-theme.sapling.supply/theme/theme-setup)
2. View the [Customizing the Theme Guide](https://odyssey-theme.sapling.supply/theme/customizing-odyssey)

## Usage

```bash
cd theme

npm install

npm start
```

## Deploy

Feel free to deploy and host your site on your favorite static hosting service such as Netlify, Firebase Hosting, Vercel, GitHub Pages, etc.

Astro has [an in-depth guide](https://docs.astro.build/en/guides/deploy/) on how to deploy an Astro project to each service.

## Google Search Console

The site is set up for Google Search Console:

- **Sitemap**: Built at `/sitemap-index.xml` (see `public/robots.txt`). After deploy, in [Search Console](https://search.google.com/search-console) add property `https://consenzaestates.com`, then submit **Sitemaps** → `https://consenzaestates.com/sitemap-index.xml`.
- **Verification**: In Search Console, use the **HTML tag** method. Copy the `content` value from the meta tag they give you, set it in `.env` as `PUBLIC_GOOGLE_SITE_VERIFICATION=your_code_here`, rebuild and deploy, then click Verify.

## Best practices (real estate / local SEO)

- **JSON-LD**: Every page includes `RealEstateAgent` + `Person` schema (NAP, contact, address) in `BaseHead.astro` for GBP and rich results.
- **Meta**: Viewport with `initial-scale=1`, canonical URL, Open Graph (locale, site_name, image, image width/height), Twitter (card, site, creator, image dimensions).
- **FAQ**: `src/config/settings.js` has a `faq` array; `FAQSection.astro` renders it on the About page and outputs `FAQPage` JSON-LD for rich results and GBP.
- **Security**: `vercel.json` sets `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, and **Content-Security-Policy** allowing `self`, Calendly (`assets.calendly.com`, `calendly.com`), WidgetBe (`widgetbe.com`), and `https:` for images (e.g. RSS from `files.keepingcurrentmatters.com`). Adding new third-party scripts or styles requires updating the CSP in `vercel.json`.
- **Accessibility**: Images use descriptive `alt`; Calendly inline widget has `aria-label`; testimonial controls use `aria-label`.
- **NAP**: Contact details live in `src/config/settings.js`; footer and schema read from there so NAP stays consistent.

## Sponsor

If you find this theme useful, please consider donating to support the continued development of it with the link below

[Donate to Odyssey Theme](https://sapling.lemonsqueezy.com/checkout/buy/9b78751f-6382-442d-ac99-32c2318b70a0)

## Support

Please feel free to post issues or submit PRs to this repo and we will do our best to respond in a timely manner, keeping in mind this template is offered for free as is on GitHub.
