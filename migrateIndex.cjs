const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const content = fs.readFileSync(indexHtmlPath, 'utf8');

const mainMatch = content.match(/<!-- ════════════════════════════════════════════\s+HERO\s+════════════════════════════════════════════ -->([\s\S]*?)<!-- ════════════════════════════════════════════\s+AFFILIATIONS/);
let bodyContent = mainMatch ? mainMatch[1] : '';

// Also extract scripts at the end (Three.js stuff)
// specifically everything from the Three.js library import to the </script> tag before </body>
const scriptsMatch = content.match(/<script src="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/three\.js\/r128\/three\.min\.js"><\/script>([\s\S]*?)<\/html>/);
let scriptsContent = scriptsMatch ? scriptsMatch[1] : '';

// From the scripts content, we need to extract ONLY the ThreeJS block and the Theme Initialization logic for the ThreeJS
// Extract the <script> block containing initViosAnimation
const threeJsLogic = scriptsContent.match(/<script>([\s\S]*?)<\/script>/)[1];

// Extract the initialization logic (which starts with: // Apply saved theme immediately) 
// and the tryInitAnimation function and intersection observers
let initLogicMatch = content.match(/\/\/ Apply saved theme immediately([\s\S]*?)<\/script>\s*<\/body>/);
let initLogic = initLogicMatch ? initLogicMatch[1] : '';

// remove scroll reveal since we moved it
initLogic = initLogic.replace(/\/\/ ── Scroll reveal ────────────────────────────────────────([\s\S]*?)<\/script>\s*<\/body>/, '');

const indexAstro = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="VIOS Collaboratory — AI for Life Sciences">
    ${bodyContent}

    <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script is:inline>
        ${threeJsLogic}

        let isDark = document.documentElement.classList.contains('light') ? false : true;
        let viosAnim = null;

        // Apply saved theme logic
        // 如果动画已经加载成功，则调用其 setTheme 方法
        function applyThemeToAnim(dark) {
            if (viosAnim && typeof viosAnim.setTheme === 'function') {
                viosAnim.setTheme(dark ? 'dark' : 'light');
            }
        }
        
        window.addEventListener('theme-changed', () => {
             isDark = document.documentElement.classList.contains('light') ? false : true;
             applyThemeToAnim(isDark);
        });

        // ── Three.js animation Init ─────────────────────────────
        // 等待 Three.js 加载后初始化，并将动画对象赋给 viosAnim
        function tryInitAnimation() {
            if (typeof THREE !== 'undefined' && typeof window.initViosAnimation !== 'undefined') {
                try {
                    viosAnim = window.initViosAnimation('hero-3d');
                    // 初始化完毕后立刻同步当前的主题颜色
                    if (!isDark && viosAnim) viosAnim.setTheme('light');
                } catch (e) {
                    console.warn('3D animation failed to initialize:', e);
                }
            } else {
                setTimeout(tryInitAnimation, 50);
            }
        }
        
        // Let's bind 'initViosAnimation' to window since it is declared inside a script tag
        window.initViosAnimation = initViosAnimation;
        tryInitAnimation();
    </script>
</Layout>
`;

fs.writeFileSync(path.join(__dirname, 'src/pages/index.astro'), indexAstro);
console.log('Index created correctly');
