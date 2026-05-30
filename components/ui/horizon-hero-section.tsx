"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

gsap.registerPlugin(ScrollTrigger);

type HorizonHeroProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  secondTitle?: string;
  secondSubtitle?: string;
};

type ThreeState = {
  scene?: THREE.Scene;
  camera?: THREE.PerspectiveCamera;
  renderer?: THREE.WebGLRenderer;
  composer?: EffectComposer;
  stars: THREE.Points[];
  nebula?: THREE.Mesh;
  mountains: THREE.Mesh[];
  animationId?: number;
  targetCameraX: number;
  targetCameraY: number;
  targetCameraZ: number;
};

export function Component({
  eyebrow = "Space Portfolio",
  title = "HORIZON",
  subtitle = "A business mind exploring technology, AI, and future-ready management.",
  secondTitle = "COSMOS",
  secondSubtitle = "Built with motion, structure, and a sharp digital identity."
}: HorizonHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const smoothCamera = useRef({ x: 0, y: 24, z: 180 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const threeRefs = useRef<ThreeState>({
    stars: [],
    mountains: [],
    targetCameraX: 0,
    targetCameraY: 24,
    targetCameraZ: 180
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const refs = threeRefs.current;
    refs.scene = new THREE.Scene();
    refs.scene.fog = new THREE.FogExp2(0x02040c, 0.0007);
    refs.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2200);
    refs.camera.position.set(0, 24, 180);
    refs.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    refs.renderer.setSize(window.innerWidth, window.innerHeight);
    refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    refs.renderer.toneMappingExposure = 0.75;
    refs.composer = new EffectComposer(refs.renderer);
    refs.composer.addPass(new RenderPass(refs.scene, refs.camera));
    refs.composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.78, 0.38, 0.82));

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3800;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let index = 0; index < starCount; index += 1) {
      const radius = 160 + Math.random() * 940;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const color = new THREE.Color();
      color.setHSL(Math.random() > 0.78 ? 0.58 : 0.08, Math.random() * 0.5, 0.72 + Math.random() * 0.25);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi) - 360;
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
      sizes[index] = Math.random() * 2.2 + 0.6;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    starGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const starMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `attribute float size; attribute vec3 color; varying vec3 vColor; uniform float time; void main(){ vColor=color; vec3 pos=position; float angle=time*0.035; mat2 rot=mat2(cos(angle),-sin(angle),sin(angle),cos(angle)); pos.xz=rot*pos.xz; vec4 mvPosition=modelViewMatrix*vec4(pos,1.0); gl_PointSize=size*(280.0/-mvPosition.z); gl_Position=projectionMatrix*mvPosition; }`,
      fragmentShader: `varying vec3 vColor; void main(){ float dist=length(gl_PointCoord-vec2(0.5)); if(dist>0.5) discard; float opacity=1.0-smoothstep(0.0,0.5,dist); gl_FragColor=vec4(vColor,opacity); }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    refs.scene.add(stars);
    refs.stars.push(stars);

    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, colorA: { value: new THREE.Color(0x39d6ff) }, colorB: { value: new THREE.Color(0x9b5cff) } },
      vertexShader: `varying vec2 vUv; uniform float time; void main(){ vUv=uv; vec3 pos=position; pos.z+=sin(pos.x*0.006+time)*24.0+cos(pos.y*0.01+time)*16.0; gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0); }`,
      fragmentShader: `varying vec2 vUv; uniform vec3 colorA; uniform vec3 colorB; uniform float time; void main(){ float field=sin(vUv.x*9.0+time)*cos(vUv.y*7.0-time); vec3 color=mix(colorA,colorB,field*0.5+0.5); float alpha=(1.0-length(vUv-0.5)*1.85)*0.22; gl_FragColor=vec4(color,max(alpha,0.0)); }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    refs.nebula = new THREE.Mesh(new THREE.PlaneGeometry(1500, 760, 80, 80), nebulaMaterial);
    refs.nebula.position.set(0, 80, -620);
    refs.scene.add(refs.nebula);

    [0x061222, 0x082040, 0x0b315f, 0x105078].forEach((color, layer) => {
      const points: THREE.Vector2[] = [];
      const height = 34 + layer * 18;
      for (let step = 0; step <= 42; step += 1) {
        const x = (step / 42 - 0.5) * 1100;
        const y = Math.sin(step * 0.42 + layer) * height + Math.cos(step * 0.22) * height * 0.7 - 88;
        points.push(new THREE.Vector2(x, y));
      }
      points.push(new THREE.Vector2(620, -260));
      points.push(new THREE.Vector2(-620, -260));
      const mountain = new THREE.Mesh(new THREE.ShapeGeometry(new THREE.Shape(points)), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.96 - layer * 0.16, side: THREE.DoubleSide }));
      mountain.position.set(0, -18 + layer * 6, -90 - layer * 78);
      refs.scene?.add(mountain);
      refs.mountains.push(mountain);
    });

    const animate = () => {
      refs.animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      starMaterial.uniforms.time.value = time;
      nebulaMaterial.uniforms.time.value = time * 0.42;
      smoothCamera.current.x += (refs.targetCameraX - smoothCamera.current.x) * 0.045;
      smoothCamera.current.y += (refs.targetCameraY - smoothCamera.current.y) * 0.045;
      smoothCamera.current.z += (refs.targetCameraZ - smoothCamera.current.z) * 0.045;
      refs.camera?.position.set(smoothCamera.current.x + Math.sin(time * 0.2) * 2, smoothCamera.current.y + Math.cos(time * 0.18) * 1.3, smoothCamera.current.z);
      refs.camera?.lookAt(0, 12, -520);
      refs.mountains.forEach((mountain, index) => {
        mountain.position.x = Math.sin(time * 0.16 + index) * (index + 1) * 2.2;
      });
      refs.composer?.render();
    };

    const handleResize = () => {
      if (!refs.camera || !refs.renderer || !refs.composer) return;
      refs.camera.aspect = window.innerWidth / window.innerHeight;
      refs.camera.updateProjectionMatrix();
      refs.renderer.setSize(window.innerWidth, window.innerHeight);
      refs.composer.setSize(window.innerWidth, window.innerHeight);
    };

    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      refs.stars.forEach((star) => {
        star.geometry.dispose();
        if (Array.isArray(star.material)) star.material.forEach((material) => material.dispose());
        else star.material.dispose();
      });
      refs.mountains.forEach((mountain) => {
        mountain.geometry.dispose();
        if (Array.isArray(mountain.material)) mountain.material.forEach((material) => material.dispose());
        else mountain.material.dispose();
      });
      refs.nebula?.geometry.dispose();
      if (refs.nebula?.material instanceof THREE.Material) refs.nebula.material.dispose();
      refs.renderer?.dispose();
    };
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      setScrollProgress(progress);
      threeRefs.current.targetCameraY = 24 + progress * 28;
      threeRefs.current.targetCameraZ = 180 - progress * 260;
      threeRefs.current.targetCameraX = Math.sin(progress * Math.PI) * 18;
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline.from(titleRef.current, { y: 80, opacity: 0, duration: 1.1 });
    timeline.from(subtitleRef.current, { y: 34, opacity: 0, duration: 0.9 }, "-=0.55");
    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-[150vh] overflow-hidden bg-[#030713] text-white">
      <canvas ref={canvasRef} className="fixed inset-0 z-0 h-full w-full" />
      <div className="fixed inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(72,219,255,0.22),transparent_34%),linear-gradient(180deg,rgba(3,7,19,0.16),rgba(3,7,19,0.94)_76%)]" />
      <div className="relative z-20 flex min-h-screen items-center px-6 py-32 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.55em] text-cyan-200/80">{eyebrow}</p>
          <h1 ref={titleRef} className="hero-gradient text-6xl font-black uppercase leading-[0.84] tracking-[-0.08em] md:text-9xl lg:text-[10.5rem]">{title}</h1>
          <p ref={subtitleRef} className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-2xl md:leading-10">{subtitle}</p>
        </div>
      </div>
      <div className="relative z-20 flex min-h-[50vh] items-center justify-end px-6 pb-32 md:px-12 lg:px-20">
        <div className="max-w-3xl text-right">
          <h2 className="text-5xl font-black uppercase tracking-[-0.07em] text-white md:text-8xl">{secondTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">{secondSubtitle}</p>
        </div>
      </div>
      <div className="fixed bottom-6 left-6 z-30 hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70 md:flex">
        <span>Scroll</span>
        <span className="h-px w-32 overflow-hidden rounded-full bg-white/15"><span className="block h-full bg-cyan-300" style={{ width: `${scrollProgress * 100}%` }} /></span>
      </div>
    </section>
  );
}

export default Component;
