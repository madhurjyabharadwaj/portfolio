import type { APIRoute } from 'astro';

// Generated rather than kept in public/, so the site URL lives in exactly one
// place (SITE_URL in astro.config.mjs) and cannot drift out of sync.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
