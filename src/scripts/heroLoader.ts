/**
 * Loader that imports Three.js as a bundled ES module, exposes it as the
 * global `THREE` that viosAnimation.js expects, then kicks off the animation.
 */
import * as THREE from 'three';

// Expose for the legacy viosAnimation.js script
(window as any).THREE = THREE;

// Dynamically load the animation after THREE is available
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const script = document.createElement('script');
script.src = `${base}/assets/js/viosAnimation.js`;
document.body.appendChild(script);
