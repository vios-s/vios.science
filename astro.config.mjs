import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    site: 'https://vios-s.github.io',
    base: '/vios.science',
    integrations: [mdx()],
    markdown: {
        rehypePlugins: [
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
        ],
    },
});
