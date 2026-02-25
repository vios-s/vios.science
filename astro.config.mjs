import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { rehypeBasePath } from './src/plugins/rehype-base-path.mjs';
import yaml from '@modyfi/vite-plugin-yaml';

const BASE_PATH = '/vios.science';

export default defineConfig({
    site: 'https://vios-s.github.io',
    base: BASE_PATH,
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [yaml()],
    },
    markdown: {
        rehypePlugins: [
            [rehypeBasePath, BASE_PATH],
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
        ],
    },
});
