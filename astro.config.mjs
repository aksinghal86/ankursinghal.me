import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ankursinghal.me',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
});
