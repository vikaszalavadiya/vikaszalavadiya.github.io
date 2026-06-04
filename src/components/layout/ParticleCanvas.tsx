import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── WebGL availability check ──────────────────────────────
    const testCanvas = document.createElement("canvas");
    const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
    if (!gl) return; // No WebGL — degrade gracefully, no crash

    // ── Renderer ──────────────────────────────────────────────
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene + Camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 120;

    // ── Particles ─────────────────────────────────────────────
    const COUNT = 220;
    const SPREAD = 80;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    const purple = new THREE.Color("#7c6fff");
    const green  = new THREE.Color("#19c37d");
    const white  = new THREE.Color("#eeedfb");

    for (let i = 0; i < COUNT; i++) {
      // Fibonacci sphere distribution for even spread
      const phi   = Math.acos(1 - (2 * i) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r     = SPREAD * (0.4 + Math.random() * 0.6);

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const rnd = Math.random();
      const col = rnd < 0.55 ? purple : rnd < 0.85 ? green : white;
      colors[i * 3]     = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = 1.2 + Math.random() * 2.4;
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    ptGeo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
    ptGeo.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));

    // Circular sprite texture
    const canvas2d = document.createElement("canvas");
    canvas2d.width = canvas2d.height = 64;
    const ctx = canvas2d.getContext("2d")!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,    "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.9)");
    g.addColorStop(1,    "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(canvas2d);

    const ptMat = new THREE.ShaderMaterial({
      uniforms: { uSprite: { value: sprite } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform sampler2D uSprite;
        varying vec3 vColor;
        void main() {
          float a = texture2D(uSprite, gl_PointCoord).r;
          if (a < 0.05) discard;
          gl_FragColor = vec4(vColor, a * 0.9);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(ptGeo, ptMat);
    scene.add(points);

    // ── Connection Lines ──────────────────────────────────────
    const CONNECT_DIST = 28;
    const linePositions: number[] = [];
    const lineColors: number[]    = [];

    const pos = positions;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = pos[i*3]   - pos[j*3];
        const dy = pos[i*3+1] - pos[j*3+1];
        const dz = pos[i*3+2] - pos[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.35;
          linePositions.push(pos[i*3], pos[i*3+1], pos[i*3+2]);
          linePositions.push(pos[j*3], pos[j*3+1], pos[j*3+2]);
          lineColors.push(purple.r * alpha, purple.g * alpha, purple.b * alpha);
          lineColors.push(purple.r * alpha, purple.g * alpha, purple.b * alpha);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    lineGeo.setAttribute("color",    new THREE.BufferAttribute(new Float32Array(lineColors),    3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // ── Ambient glow sphere ───────────────────────────────────
    const glowGeo = new THREE.SphereGeometry(42, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x7c6fff,
      transparent: true,
      opacity: 0.018,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // ── Mouse parallax ────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animate ───────────────────────────────────────────────
    let raf: number;
    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    scene.remove(points);
    scene.remove(lines);
    scene.add(group);

    const startTime = performance.now();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      // Slow auto-rotation + gentle wobble
      group.rotation.y = t * 0.06 + mouseX * 0.18;
      group.rotation.x = Math.sin(t * 0.04) * 0.15 + mouseY * 0.12;
      group.rotation.z = Math.sin(t * 0.025) * 0.05;

      // Subtle camera drift
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      ptGeo.dispose();
      ptMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      sprite.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        zIndex: 0, overflow: "hidden",
      }}
    />
  );
}
