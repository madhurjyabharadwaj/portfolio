// @ts-check
import { defineConfig } from 'astro/config';

// The public address of the site. This single value drives canonical URLs,
// Open Graph tags, robots.txt and sitemap.xml, so it has to match wherever the
// site is actually served from or link previews break.
// TODO: swap to the custom domain once it is bought and pointed at Vercel.
export const SITE_URL = 'https://portfolio-olive-seven-27.vercel.app';

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
