// @ts-check
import { defineConfig } from 'astro/config';

// The public address of the site. This single value drives canonical URLs,
// Open Graph tags, robots.txt and sitemap.xml, so it has to match wherever the
// site is actually served from or link previews break. Vercel redirects the
// bare domain to www, so www is the address pages are really served from.
export const SITE_URL = 'https://www.madhurjyabharadwaj.com';

// Wraps every markdown table in a div that can scroll sideways, so a wide
// table scrolls on a phone instead of crushing its columns.
function wrapTables() {
  const visit = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      visit(child);
      return child.type === 'element' && child.tagName === 'table'
        ? { type: 'element', tagName: 'div', properties: { className: ['table-scroll'] }, children: [child] }
        : child;
    });
  };
  return (tree) => visit(tree);
}

export default defineConfig({
  site: SITE_URL,
  markdown: {
    rehypePlugins: [wrapTables],
  },
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    // One request fewer per page: the whole stylesheet is small enough to inline.
    inlineStylesheets: 'always',
  },
});
