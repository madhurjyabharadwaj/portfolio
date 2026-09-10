// @ts-check
import { defineConfig } from 'astro/config';

// TODO: replace with the purchased domain once it exists. This single value
// drives canonical URLs, Open Graph tags, robots.txt and sitemap.xml.
export const SITE_URL = 'https://madhurjyabharadwaj.example';

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
