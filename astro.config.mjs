// @ts-check
import { defineConfig } from 'astro/config';

// The public address of the site. This single value drives canonical URLs,
// Open Graph tags, robots.txt and sitemap.xml, so it has to match wherever the
// site is actually served from or link previews break. Vercel redirects the
// bare domain to www, so www is the address pages are really served from.
export const SITE_URL = 'https://www.madhurjyabharadwaj.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    // One request fewer per page: the whole stylesheet is small enough to inline.
    inlineStylesheets: 'always',
  },
});
