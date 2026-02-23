        /**
         * VIOS 3D Holographic Animation Logic (Embedded directly to prevent 404 errors)
         */
        function initViosAnimation(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const scene = new THREE.Scene();

            // 把相机稍微偏右放置，让出左侧给文字排版
            const camera = new THREE.PerspectiveCamera(
                60,
                window.innerWidth / window.innerHeight,
                0.1,
                2000,
            );
            camera.position.set(200, 50, 450);

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0); // 确保背景透明，显露CSS颜色
            container.appendChild(renderer.domElement);

            const mainGroup = new THREE.Group();
            // 响应式居中/进一步偏右偏移，给左侧文字留出更多空间
            mainGroup.position.x = window.innerWidth > 768 ? 300 : 0;
            scene.add(mainGroup);

            // ==========================================
            // 生成全息风格文字的工具函数 (支持暗色/亮色)
            // ==========================================
            function createHoloText(text, colorHex) {
                const canvas = document.createElement("canvas");
                canvas.width = 512;
                canvas.height = 128;
                const ctx = canvas.getContext("2d");

                ctx.font = 'bold 32px "IBM Plex Mono", monospace';
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                // 绘制发光层
                ctx.shadowColor = colorHex;
                ctx.shadowBlur = 20;
                ctx.fillStyle = colorHex;
                ctx.fillText(text, 256, 64);

                // 核心高亮白字
                ctx.shadowBlur = 40;
                ctx.fillStyle = "#ffffff";
                ctx.fillText(text, 256, 64);

                // 扫描线纹理 (Scanlines)
                ctx.globalCompositeOperation = "source-atop";
                ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
                for (let i = 0; i < 128; i += 4) {
                    ctx.fillRect(0, i, 512, 2);
                }

                const texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;

                const material = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    depthTest: false,
                });
                const sprite = new THREE.Sprite(material);
                sprite.scale.set(120, 30, 1);

                // 保存材质引用以便主题切换
                return { sprite, material };
            }

            // 1. Causality 标签 (顶部)
            const holoCausality = createHoloText(
                "[ CAUSALITY GRAPH ]",
                "#b100e8",
            );
            holoCausality.sprite.position.set(0, 140, 0);
            mainGroup.add(holoCausality.sprite);

            // 2. Medical Imaging 标签 (底部)
            const holoMedical = createHoloText(
                "[ MEDICAL POINT CLOUD ]",
                "#00d4aa",
            ); // 采用你的CSS主题绿
            holoMedical.sprite.position.set(0, -50, 80);
            mainGroup.add(holoMedical.sprite);

            // 3. Computer Vision 标签 (扫描仪游动)
            const holoCV = createHoloText(
                ">>> COMPUTER VISION SCANNED",
                "#00ffff",
            );
            mainGroup.add(holoCV.sprite);

            const spritesToTheme = [
                holoCausality.material,
                holoMedical.material,
                holoCV.material,
            ];

            // ==========================================
            // 构建 Medical Imaging (器官点云)
            // ==========================================
            const particleCount = 1500;
            const brainGeometry = new THREE.BufferGeometry();
            const brainPositions = new Float32Array(particleCount * 3);
            const brainBaseColors = new Float32Array(particleCount * 3);
            const brainColors = new Float32Array(particleCount * 3);
            const baseColor = new THREE.Color(0x334d66); // 使用你的 CSS --dim 颜色

            for (let i = 0; i < particleCount; i++) {
                const isLeftHemisphere = Math.random() > 0.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const r = 100 + Math.random() * 30;

                let x = r * Math.sin(phi) * Math.cos(theta);
                let y = r * 0.8 * Math.sin(phi) * Math.sin(theta);
                let z = r * 1.2 * Math.cos(phi);

                x += isLeftHemisphere ? -40 : 40;
                x += (Math.random() - 0.5) * 15;
                y += (Math.random() - 0.5) * 15;
                z += (Math.random() - 0.5) * 15;

                brainPositions[i * 3] = x;
                brainPositions[i * 3 + 1] = y;
                brainPositions[i * 3 + 2] = z;

                brainBaseColors[i * 3] = baseColor.r;
                brainBaseColors[i * 3 + 1] = baseColor.g;
                brainBaseColors[i * 3 + 2] = baseColor.b;

                brainColors[i * 3] = baseColor.r;
                brainColors[i * 3 + 1] = baseColor.g;
                brainColors[i * 3 + 2] = baseColor.b;
            }

            brainGeometry.setAttribute(
                "position",
                new THREE.BufferAttribute(brainPositions, 3),
            );
            brainGeometry.setAttribute(
                "color",
                new THREE.BufferAttribute(brainColors, 3).setUsage(
                    THREE.DynamicDrawUsage,
                ),
            );

            const brainMaterial = new THREE.PointsMaterial({
                size: 3,
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.8,
            });

            // 简易圆点贴图
            const circleCanvas = document.createElement("canvas");
            circleCanvas.width = 16;
            circleCanvas.height = 16;
            const circleCtx = circleCanvas.getContext("2d");
            const gradient = circleCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            circleCtx.fillStyle = gradient;
            circleCtx.fillRect(0, 0, 16, 16);
            brainMaterial.map = new THREE.Texture(circleCanvas);
            brainMaterial.map.needsUpdate = true;

            const brainPoints = new THREE.Points(brainGeometry, brainMaterial);
            mainGroup.add(brainPoints);

            // ==========================================
            // 构建 Computer Vision (扫描面)
            // ==========================================
            const scannerGeo = new THREE.PlaneGeometry(350, 350);
            const scannerMat = new THREE.MeshBasicMaterial({
                color: 0x00d4aa,
                transparent: true,
                opacity: 0.1,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            const scannerPlane = new THREE.Mesh(scannerGeo, scannerMat);
            scannerPlane.rotation.x = Math.PI / 2;

            const scannerEdgeGeo = new THREE.EdgesGeometry(scannerGeo);
            const scannerEdgeMat = new THREE.LineBasicMaterial({
                color: 0x00d4aa,
                transparent: true,
                opacity: 0.5,
            });
            const scannerEdge = new THREE.LineSegments(
                scannerEdgeGeo,
                scannerEdgeMat,
            );
            scannerPlane.add(scannerEdge);
            mainGroup.add(scannerPlane);

            // 检测框
            const boxes = [];
            const boxMaterial = new THREE.LineBasicMaterial({
                color: 0x00ffff,
                transparent: true,
                opacity: 0,
            });
            for (let i = 0; i < 3; i++) {
                const w = 30 + Math.random() * 40;
                const boxGeo = new THREE.EdgesGeometry(
                    new THREE.BoxGeometry(w, w, w),
                );
                const box = new THREE.LineSegments(boxGeo, boxMaterial.clone());
                box.position.set(
                    (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 20),
                    (Math.random() - 0.5) * 80,
                    (Math.random() - 0.5) * 80,
                );
                box.userData = { active: false, timer: 0 };
                boxes.push(box);
                mainGroup.add(box);
            }

            // ==========================================
            // 构建 Causality (图网络与信号)
            // ==========================================
            const causalGroup = new THREE.Group();
            mainGroup.add(causalGroup);

            const nodesData = [
                { id: "A", pos: new THREE.Vector3(0, 160, 0), color: 0x5b8ef0 },
                {
                    id: "B",
                    pos: new THREE.Vector3(-80, 90, 50),
                    color: 0xb100e8,
                },
                {
                    id: "C",
                    pos: new THREE.Vector3(80, 90, -50),
                    color: 0xb100e8,
                },
                { id: "D", pos: new THREE.Vector3(0, 0, 0), color: 0xff0055 },
            ];
            const edgesData = [
                { source: 0, target: 1 },
                { source: 0, target: 2 },
                { source: 1, target: 3 },
                { source: 2, target: 3 },
            ];
            const nodeMeshes = [];
            const haloMaterials = [];

            nodesData.forEach((data) => {
                const mesh = new THREE.Mesh(
                    new THREE.SphereGeometry(4, 16, 16),
                    new THREE.MeshBasicMaterial({ color: data.color }),
                );
                mesh.position.copy(data.pos);

                const haloMat = new THREE.MeshBasicMaterial({
                    color: data.color,
                    transparent: true,
                    opacity: 0.3,
                    blending: THREE.AdditiveBlending,
                });
                haloMaterials.push(haloMat);
                const halo = new THREE.Mesh(
                    new THREE.SphereGeometry(8, 16, 16),
                    haloMat,
                );
                mesh.add(halo);
                nodeMeshes.push(mesh);
                causalGroup.add(mesh);
            });

            const signals = [];
            const edgeMaterials = [];
            edgesData.forEach((edge) => {
                const start = nodesData[edge.source].pos;
                const end = nodesData[edge.target].pos;

                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    start,
                    end,
                ]);
                const lineMat = new THREE.LineDashedMaterial({
                    color: 0x5b8ef0,
                    dashSize: 5,
                    gapSize: 3,
                    transparent: true,
                    opacity: 0.5,
                });
                edgeMaterials.push(lineMat);
                const line = new THREE.Line(lineGeo, lineMat);
                line.computeLineDistances();
                causalGroup.add(line);

                const signalGeo = new THREE.SphereGeometry(2, 8, 8);
                const signal = new THREE.Mesh(
                    signalGeo,
                    new THREE.MeshBasicMaterial({ color: 0xffffff }),
                );
                signal.position.copy(start);
                signal.userData = {
                    start: start,
                    end: end,
                    progress: Math.random(),
                };
                signals.push(signal);
                causalGroup.add(signal);
            });

            // ==========================================
            // 动画循环与交互逻辑
            // ==========================================
            let mouseX = 0,
                mouseY = 0;

            document.addEventListener("mousemove", (e) => {
                mouseX = (e.clientX - window.innerWidth / 2) * 0.1;
                mouseY = (e.clientY - window.innerHeight / 2) * 0.1;
            });

            window.addEventListener("resize", () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                mainGroup.position.x = window.innerWidth > 768 ? 300 : 0;
            });

            const clock = new THREE.Timer();
            const highlightColor = new THREE.Color(0x00d4aa);
            const diseaseColor = new THREE.Color(0xff0055);

            function animate() {
                requestAnimationFrame(animate);
                clock.update();
                const time = clock.getElapsed();

                // 鼠标视差平滑转动
                mainGroup.rotation.y +=
                    (mouseX * 0.01 - mainGroup.rotation.y) * 0.05;
                mainGroup.rotation.x +=
                    (mouseY * 0.01 - mainGroup.rotation.x) * 0.05;
                mainGroup.rotation.y += 0.002;

                // 扫描仪上下往复运动 (高度范围 -80 到 160)
                const scannerY = Math.sin(time * 0.8) * 120 + 40;
                scannerPlane.position.y = scannerY;

                // --- 核心: 全息文字随扫描仪高度浮现 ---

                // 当接近顶部 Causality (Y: ~140)
                const distCausality = Math.abs(scannerY - 140);
                holoCausality.material.opacity = Math.max(
                    0,
                    1 - distCausality / 40,
                );

                // 当接近底部 Medical (Y: ~-50)
                const distMedical = Math.abs(scannerY - -50);
                holoMedical.material.opacity = Math.max(
                    0,
                    1 - distMedical / 40,
                );

                // CV 游走标签跟随扫描仪
                holoCV.sprite.position.set(
                    120,
                    scannerY + 15,
                    Math.sin(time * 2) * 20,
                );
                holoCV.material.opacity = 0.6 + 0.4 * Math.sin(time * 5);

                // --- 更新底层器官点云颜色 ---
                const positions = brainGeometry.attributes.position.array;
                const colors = brainGeometry.attributes.color.array;
                let scannerActivePoints = 0;

                for (let i = 0; i < particleCount; i++) {
                    const py = positions[i * 3 + 1];
                    const distToScanner = Math.abs(py - scannerY);
                    let r = brainBaseColors[i * 3],
                        g = brainBaseColors[i * 3 + 1],
                        b = brainBaseColors[i * 3 + 2];

                    if (distToScanner < 6) {
                        const intensity = 1.0 - distToScanner / 6;
                        r = THREE.MathUtils.lerp(
                            r,
                            highlightColor.r,
                            intensity,
                        );
                        g = THREE.MathUtils.lerp(
                            g,
                            highlightColor.g,
                            intensity,
                        );
                        b = THREE.MathUtils.lerp(
                            b,
                            highlightColor.b,
                            intensity,
                        );
                        scannerActivePoints++;
                    }

                    const px = positions[i * 3],
                        pz = positions[i * 3 + 2];
                    const distToCenter = Math.sqrt(px * px + py * py + pz * pz);
                    const effectPulse = Math.max(
                        0,
                        Math.sin(time * 2) * 1.5 - 0.5,
                    );

                    if (distToCenter < 40) {
                        r = THREE.MathUtils.lerp(
                            r,
                            diseaseColor.r,
                            effectPulse * (1 - distToCenter / 40),
                        );
                        g = THREE.MathUtils.lerp(
                            g,
                            diseaseColor.g,
                            effectPulse * (1 - distToCenter / 40),
                        );
                        b = THREE.MathUtils.lerp(
                            b,
                            diseaseColor.b,
                            effectPulse * (1 - distToCenter / 40),
                        );
                    }

                    colors[i * 3] = r;
                    colors[i * 3 + 1] = g;
                    colors[i * 3 + 2] = b;
                }
                brainGeometry.attributes.color.needsUpdate = true;

                // 检测框闪烁
                boxes.forEach((box) => {
                    if (
                        !box.userData.active &&
                        Math.random() < 0.01 &&
                        scannerActivePoints > 50
                    ) {
                        box.userData.active = true;
                        box.userData.timer = 1.0;
                        box.position.y = scannerY + (Math.random() - 0.5) * 20;
                    }
                    if (box.userData.active) {
                        box.userData.timer -= 0.02;
                        box.material.opacity = box.userData.timer;
                        const scale =
                            1.0 + Math.sin(box.userData.timer * 20) * 0.05;
                        box.scale.set(scale, scale, scale);
                        if (box.userData.timer <= 0) {
                            box.userData.active = false;
                            box.material.opacity = 0;
                        }
                    }
                });

                // 信号光点流动
                signals.forEach((signal) => {
                    signal.userData.progress += 0.01;
                    if (signal.userData.progress > 1)
                        signal.userData.progress = 0;
                    signal.position.lerpVectors(
                        signal.userData.start,
                        signal.userData.end,
                        signal.userData.progress,
                    );
                    const scale =
                        Math.sin(signal.userData.progress * Math.PI) * 1.5 +
                        0.5;
                    signal.scale.setScalar(scale);
                });

                // 底部节点脉冲
                nodeMeshes[3].children[0].scale.setScalar(
                    1 + Math.max(0, Math.sin(time * 2)) * 0.5,
                );

                renderer.render(scene, camera);
            }

            // 启动动画
            animate();

            // ==========================================
            // 完美契合网站的 Light/Dark 主题切换逻辑
            // ==========================================
            return {
                setTheme: function (theme) {
                    const isLight = theme === "light";
                    // 在亮色模式下，加性混合(AdditiveBlending)在白色背景上会失效，
                    // 因此我们需要切换到正常混合(NormalBlending)并略微提升透明度
                    const blendMode = isLight
                        ? THREE.NormalBlending
                        : THREE.AdditiveBlending;

                    brainMaterial.blending = blendMode;
                    scannerMat.blending = blendMode;
                    scannerEdgeMat.blending = blendMode;

                    haloMaterials.forEach((mat) => (mat.blending = blendMode));
                    spritesToTheme.forEach((mat) => (mat.blending = blendMode));

                    boxes.forEach((box) => (box.material.blending = blendMode));
                    edgeMaterials.forEach((mat) => {
                        mat.blending = blendMode;
                        mat.opacity = isLight ? 0.3 : 0.5; // 亮色下调低连线透明度使其更干净
                    });
                },
            };
        }

        let isDark = document.documentElement.classList.contains("light")
            ? false
            : true;
        let viosAnim = null;

        // Apply saved theme logic
        // 如果动画已经加载成功，则调用其 setTheme 方法
        function applyThemeToAnim(dark) {
            if (viosAnim && typeof viosAnim.setTheme === "function") {
                viosAnim.setTheme(dark ? "dark" : "light");
            }
        }

        window.addEventListener("theme-changed", () => {
            isDark = document.documentElement.classList.contains("light")
                ? false
                : true;
            applyThemeToAnim(isDark);
        });

        // ── Three.js animation Init ─────────────────────────────
        // 等待 Three.js 加载后初始化，并将动画对象赋给 viosAnim
        function tryInitAnimation() {
            if (
                typeof THREE !== "undefined" &&
                typeof window.initViosAnimation !== "undefined"
            ) {
                try {
                    viosAnim = window.initViosAnimation("hero-3d");
                    // 初始化完毕后立刻同步当前的主题颜色
                    if (!isDark && viosAnim) viosAnim.setTheme("light");
                } catch (e) {
                    console.warn("3D animation failed to initialize:", e);
                }
            } else {
                setTimeout(tryInitAnimation, 50);
            }
        }

        // Let's bind 'initViosAnimation' to window since it is declared inside a script tag
        window.initViosAnimation = initViosAnimation;
        tryInitAnimation();
