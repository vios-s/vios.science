const fs = require('fs');
const path = require('path');

const pages = ['research', 'news', 'code', 'join', 'tutorials'];

const template = (title) => `---
import Layout from '../layouts/Layout.astro';
---
<Layout title="${title.charAt(0).toUpperCase() + title.slice(1)} - VIOS Collaboratory">
    <section class="page-header" style="padding: 12rem 8rem 6rem;">
        <div class="s-head">
            <div class="s-eyebrow">
                <div class="s-eyebrow-line"></div>
                <span class="s-eyebrow-text">Explore</span>
            </div>
            <h1 class="s-title">${title.charAt(0).toUpperCase() + title.slice(1)}... <em>coming soon</em></h1>
        </div>
        <p style="color: var(--muted); max-width: 600px; line-height: 1.6;">
            We are working on porting this section to the new website. Please check back later.
        </p>
    </section>
</Layout>
`;

pages.forEach(p => {
    fs.writeFileSync(path.join(__dirname, 'src/pages', p + '.astro'), template(p));
});

console.log('Placeholders created');
