/**
 * Rehype plugin that prepends the Astro `base` path to internal URLs
 * found in href and src attributes of rendered markdown/MDX content.
 *
 * This lets content authors write `/assets/pdfs/file.pdf` or `/team/someone`
 * without worrying about the deployment base path.
 */
import { visit } from 'unist-util-visit';

export function rehypeBasePath(basePath) {
    const base = basePath.replace(/\/$/, '');

    return (tree) => {
        visit(tree, 'element', (node) => {
            for (const attr of ['href', 'src']) {
                const val = node.properties?.[attr];
                if (
                    typeof val === 'string' &&
                    val.startsWith('/') &&
                    !val.startsWith(base + '/')
                ) {
                    node.properties[attr] = `${base}${val}`;
                }
            }
        });
    };
}
