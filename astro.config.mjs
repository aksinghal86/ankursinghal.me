import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Markdown links that leave the site open in a new tab, with a note for screen readers.
function externalLinks() {
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && /^https?:\/\//.test(node.properties?.href ?? '')) {
      node.properties.target = '_blank';
      node.properties.rel = 'noopener noreferrer';
      node.children.push({
        type: 'element',
        tagName: 'span',
        properties: { className: ['sr-only'] },
        children: [{ type: 'text', value: ' (opens in a new tab)' }],
      });
    }
    node.children?.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://www.ankursinghal.me',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: { rehypePlugins: [externalLinks] },
});
