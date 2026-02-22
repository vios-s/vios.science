const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexHtmlPath, 'utf8');

// Extract CSS
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
let css = styleMatch ? styleMatch[1] : '';

// 1. Scale font-size overall by setting root html font-size
// 2. Replace fonts
css = css.replace(/font-family: 'IBM Plex Sans'/g, "font-family: 'Outfit'");
css = css.replace(/font-family: 'IBM Plex Mono'/g, "font-family: 'JetBrains Mono'");

// Make everything ~12% bigger by setting root font size on html
const rootCssAdded = css.replace('html { scroll-behavior: smooth; }', 'html { scroll-behavior: smooth; font-size: 18px; }');
css = rootCssAdded !== css ? rootCssAdded : css + '\nhtml { font-size: 18px; }';

// Extract Body Content (Nav, Sections, Footer)
const bodyMatch = content.match(/<body>([\s\S]*?)<script>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remove Nav icon stuff that is generic
// Instead of rewriting everything in JS, let's just make the script write the layout file.

const layoutAstro = `---
interface Props {
	title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="VIOS Collaboratory — AI for Life Sciences" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400;500;600&family=Spectral:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">
        
        <script is:inline>
            // Run before page loads to prevent flash of unstyled content
            const theme = (() => {
                if (typeof localStorage !== 'undefined' && localStorage.getItem('vios-theme')) {
                    return localStorage.getItem('vios-theme');
                }
                if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    return 'light';
                }
                return 'dark';
            })();
            
            if (theme === 'light') {
                document.documentElement.classList.add('light');
            } else {
                document.documentElement.classList.remove('light');
            }
            window.localStorage.setItem('vios-theme', theme);
        </script>
	</head>
	<body>
        <!-- ════════════════════════════════════════════
             NAV
        ════════════════════════════════════════════ -->
        <nav id="nav">
            <a href="/" class="nav-logo">VIOS<span>.</span></a>
            <div class="nav-right">
                <ul class="nav-links">
                    <li><a href="/research">Research</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/publications">Publications</a></li>
                    <li><a href="/code">Code &amp; Data</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/tutorials">Tutorials</a></li>
                    <li><a href="/join">Join Us</a></li>
                </ul>
                <button class="theme-toggle" id="theme-toggle" aria-label="Toggle light/dark theme">
                    <!-- Moon icon (shown in dark mode) -->
                    <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                    </svg>
                    <!-- Sun icon (shown in light mode) -->
                    <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1"  x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12"  x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
                    </svg>
                </button>
            </div>
        </nav>

		<slot />

        <!-- ════════════════════════════════════════════
             AFFILIATIONS
        ════════════════════════════════════════════ -->
        <div class="affil-bar">
            <span class="affil-label">Affiliations</span>
            <div class="affil-list">
                <a href="#" class="affil-name">University of Edinburgh</a>
                <a href="#" class="affil-name">CHAI AI Hub</a>
                <a href="#" class="affil-name">phenomUK</a>
                <a href="#" class="affil-name">School of Engineering</a>
                <a href="#" class="affil-name">Canon Medical Research</a>
            </div>
        </div>

        <!-- ════════════════════════════════════════════
             FOOTER
        ════════════════════════════════════════════ -->
        <footer>
            <div>
                <a href="/" class="f-logo">VIOS<span>.</span></a>
                <p class="f-tagline">
                    AI for Life Sciences.<br>
                    University of Edinburgh.
                </p>
            </div>
            <div>
                <h4 class="f-col-label">Explore</h4>
                <ul class="f-links">
                    <li><a href="/research">Research</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/publications">Publications</a></li>
                    <li><a href="/tutorials">Tutorials</a></li>
                </ul>
            </div>
            <div>
                <h4 class="f-col-label">Connect</h4>
                <ul class="f-links">
                    <li><a href="/join">Join the Lab</a></li>
                    <li><a href="https://twitter.com/SotiriosA" target="_blank">Twitter / X</a></li>
                    <li><a href="mailto:vios@ed.ac.uk">Contact Us</a></li>
                </ul>
            </div>
            <div class="f-bottom">
                <span class="f-copy">© 2026 VIOS Collaboratory. All rights reserved.</span>
            </div>
        </footer>

        <script is:inline>
            // Nav scroll
            const nav = document.getElementById('nav');
            window.addEventListener('scroll', () => {
                nav.classList.toggle('scrolled', window.scrollY > 60);
            });

            // Theme toggle logic
            document.getElementById('theme-toggle').addEventListener('click', () => {
                const isDark = document.documentElement.classList.contains('light'); // If light class is present, we are turning dark
                
                if (isDark) { // Switch to dark
                    document.documentElement.classList.remove('light');
                    window.localStorage.setItem('vios-theme', 'dark');
                } else { // Switch to light
                    document.documentElement.classList.add('light');
                    window.localStorage.setItem('vios-theme', 'light');
                }
                
                // Dispatch event so ThreeJS or others can listen
                window.dispatchEvent(new Event('theme-changed'));
            });

            // Scroll reveal
            const io = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) e.target.classList.add('vis');
                });
            }, { threshold: 0 });

            setTimeout(() => {
                document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));
            }, 100);
            
            // Re-run observer after Astro view transitions
            document.addEventListener('astro:page-load', () => {
                document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));
            });
        </script>
	</body>
</html>
<style is:global>
${css}
</style>
`;

fs.mkdirSync(path.join(__dirname, 'src/layouts'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'src/layouts/Layout.astro'), layoutAstro);
console.log('Layout created');
