/**
 * Fetches and parses the Simplifying the Market RSS feed.
 * Extracts title, link, description, image URL, and pubDate for each item.
 * Used at build time to display market insights on the site.
 *
 * Images are served from https://files.keepingcurrentmatters.com — if you add
 * Content-Security-Policy headers, include that host in img-src.
 */

const FEED_URL =
  'https://www.simplifyingthemarket.com/es/feed?a=956758-ef2edda2f940e018328655620ea05f18';

/** Extract first image URL from HTML string (e.g. description or content) */
function extractFirstImageUrl(html) {
  if (!html || typeof html !== 'string') return null;
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch ? imgMatch[1].trim() : null;
}

/** Strip HTML tags for plain-text excerpt */
function stripHtml(html, maxLength = 200) {
  if (!html || typeof html !== 'string') return '';
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .trim();
  return maxLength && text.length > maxLength
    ? text.slice(0, maxLength).trim() + '…'
    : text;
}

/**
 * Parse RSS XML string into array of items with title, link, description, image, pubDate.
 * Handles <item> blocks and CDATA in description.
 */
function parseRssItems(xml) {
  const items = [];
  const itemBlocks = xml.split(/<item[^>]*>/i).slice(1);

  for (const block of itemBlocks) {
    const titleMatch = block.match(/<title[^>]*>([^<]+)<\/title>/i);
    const linkMatch = block.match(/<link[^>]*>([^<]+)<\/link>/i);
    const descCdataMatch = block.match(
      /<description[^>]*>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/description>/i
    );
    const contentMatch = block.match(
      /<content:encoded[^>]*>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/content:encoded>/i
    );
    const pubDateMatch = block.match(/<pubDate[^>]*>([^<]+)<\/pubDate>/i);

    const title = titleMatch ? titleMatch[1].trim() : '';
    const link = linkMatch ? linkMatch[1].trim() : '';
    const rawDescription = descCdataMatch
      ? descCdataMatch[1]
      : contentMatch
        ? contentMatch[1]
        : '';
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : null;

    // Prefer image from description, then content:encoded
    const image =
      extractFirstImageUrl(rawDescription) ||
      (contentMatch ? extractFirstImageUrl(contentMatch[1]) : null);

    const description = stripHtml(rawDescription, 200);

    if (title && link) {
      items.push({
        title,
        link,
        description,
        image,
        pubDate,
      });
    }
  }

  return items;
}

/**
 * Fetch the Simplifying the Market feed and return parsed items (with images).
 * Call at build time from an Astro page.
 * @param {number} limit - Max number of items to return (default 10)
 * @returns {Promise<Array<{ title: string, link: string, description: string, image: string | null, pubDate: string | null }>>}
 */
export async function getSimplifyingMarketFeed(limit = 10) {
  try {
    const res = await fetch(FEED_URL, {
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = parseRssItems(xml);
    return items.slice(0, limit);
  } catch (err) {
    console.warn('[simplifyingMarketFeed] Failed to fetch feed:', err.message);
    return [];
  }
}
