const fs = require('fs');
const path = require('path');

const files = [
    'src/layouts/Layout.astro',
    'src/pages/index.astro',
    'src/pages/team.astro',
    'src/pages/publications.astro',
    'src/pages/join.astro',
    'src/pages/news.astro',
    'src/pages/code.astro',
    'src/pages/tutorials.astro',
    'src/pages/research.astro'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace absolute hrefs (e.g. href="/team") with href="/vios.science/team"
        // The regex carefully avoids matching already prefixed ones or external links
        // We look for: href="/ followed by anything other than vios.science
        content = content.replace(/href="\/(?!vios\.science)/g, 'href="/vios.science/');

        // Same for src="/assets/" -> src="/vios.science/assets/"
        content = content.replace(/src="\/(?!vios\.science)/g, 'src="/vios.science/');

        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log('Successfully updated all internal links to prepend /vios.science !');
