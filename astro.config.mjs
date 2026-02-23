import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { rehypeBasePath } from './src/plugins/rehype-base-path.mjs';

export default defineConfig({
    site: 'https://vios-s.github.io',
    base: '/vios.science',
    integrations: [mdx(), sitemap()],
    markdown: {
        rehypePlugins: [
            [rehypeBasePath, '/vios.science'],
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
        ],
    },
});
