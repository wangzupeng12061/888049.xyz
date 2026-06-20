import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://888049.xyz',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-default' },
  },
});
