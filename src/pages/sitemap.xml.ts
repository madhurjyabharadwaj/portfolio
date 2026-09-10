import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Static routes are read from the pages folder; dynamic ones come from the
// work collection. A new markdown file is picked up with no changes here.
const pageFiles = import.meta.glob('./**/*.astro');

const staticRoutes = Object.keys(pageFiles)
  .filter((file) => !file.includes('['))
  .map((file) =>
    file
      .replace(/^\.\//, '/')
      .replace(/\.astro$/, '')
      .replace(/\/index$/, '')
  )
  .map((route) => route || '/');

export const GET: APIRoute = async ({ site }) => {
  const work = await getCollection('work');
  const routes = [...staticRoutes, ...work.map((entry) => `/work/${entry.id}`)];
  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
