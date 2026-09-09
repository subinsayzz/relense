import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Shield, Sun, Eye, ZoomIn, ZoomOut, Check } from 'lucide-react';

interface Eyewear3DViewerProps {
  initialFrameColor?: string;
  initialLensType?: string;
  interactive?: boolean;
}

export const Eyewear3DViewer: React.FC<Eyewear3DViewerProps> = ({
  initialFrameColor = 'tortoise',
  initialLensType = 'clear',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [frameColorKey, setFrameColorKey] = useState(initialFrameColor);
  const [lensTypeKey, setLensTypeKey] = useState(initialLensType);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  // References to 3D objects for real-time material swapping
  const frameMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const lensMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const groupRef = useRef<THREE.Group | null>(null);

  const FRAME_OPTIONS = [
    { id: 'tortoise', name: 'Italian Tortoise', color: 0x78411d, metalness: 0.1, roughness: 0.35 },
    { id: 'obsidian', name: 'Matte Obsidian', color: 0x181a1d, metalness: 0.2, roughness: 0.6 },
    { id: 'gold', name: 'Champagne Gold', color: 0xd4af37, metalness: 0.9, roughness: 0.2 },
    { id: 'crystal', name: 'Crystal Acetate', color: 0xdbeafe, metalness: 0.1, roughness: 0.1, opacity: 0.5, transparent: true },
  ];

  const LENS_OPTIONS = [
    { id: 'clear', name: 'Clear AR Shield', tint: 0xe2f1f8, opacity: 0.35, roughness: 0.05, desc: 'Ultra-clear anti-reflective coat with 99.8% light transmission' },
    { id: 'blue', name: 'Blue Light Filter', tint: 0x7e8eff, opacity: 0.45, roughness: 0.08, desc: 'Blocks high-energy 420nm HEV blue rays from screens' },
    { id: 'polarized', name: 'Polarized Sun Smoke', tint: 0x1f2421, opacity: 0.82, roughness: 0.02, desc: 'Eliminates blinding optical glare with 100% UV400 shield' },
    { id: 'amber', name: 'Vintage Amber Sun', tint: 0xc47b38, opacity: 0.72, roughness: 0.05, desc: 'High-contrast warm optics for driving and vibrant scenery' },
  ];

  // Update Frame Material
  const updateFrameMaterial = (optionId: string) => {
    setFrameColorKey(optionId);
    const opt = FRAME_OPTIONS.find((o) => o.id === optionId);
    if (!opt) return;

    frameMaterialsRef.current.forEach((mat) => {
      mat.color.setHex(opt.color);
      mat.metalness = opt.metalness;
      mat.roughness = opt.roughness;
      if (opt.transparent) {
        mat.transparent = true;
        mat.opacity = opt.opacity ?? 0.6;
      } else {
        mat.transparent = false;
        mat.opacity = 1.0;
      }
      mat.needsUpdate = true;
    });
  };

  // Update Lens Material
  const updateLensMaterial = (lensId: string) => {
    setLensTypeKey(lensId);
    const opt = LENS_OPTIONS.find((l) => l.id === lensId);
    if (!opt) return;

    lensMaterialsRef.current.forEach((mat) => {
      mat.color.setHex(opt.tint);
      mat.opacity = opt.opacity;
      mat.roughness = opt.roughness;
      mat.needsUpdate = true;
    });
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.replaceChildren(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaf0, 2.2);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdfe8f7, 1.6);
    fillLight.position.set(-4, -2, -3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xd4af37, 2.5, 10);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Eyewear Group
    const glassesGroup = new THREE.Group();
    scene.add(glassesGroup);
    groupRef.current = glassesGroup;

    // Reset material collections
    frameMaterialsRef.current = [];
    lensMaterialsRef.current = [];

    // Base Frame Material
    const initialFrameOpt = FRAME_OPTIONS.find((o) => o.id === frameColorKey) || FRAME_OPTIONS[0];
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: initialFrameOpt.color,
      metalness: initialFrameOpt.metalness,
      roughness: initialFrameOpt.roughness,
    });
    frameMaterialsRef.current.push(frameMaterial);

    // Metal Hinge / Bridge Accent Material
    const metalAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // gold accent
      metalness: 0.95,
      roughness: 0.18,
    });

    // Glass Lens Material
    const initialLensOpt = LENS_OPTIONS.find((l) => l.id === lensTypeKey) || LENS_OPTIONS[0];
    const lensMaterial = new THREE.MeshPhysicalMaterial({
      color: initialLensOpt.tint,
      transmission: 0.85,
      opacity: initialLensOpt.opacity,
      transparent: true,
      roughness: initialLensOpt.roughness,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    lensMaterialsRef.current.push(lensMaterial);

    // Helper: Create stylish rounded rim shape
    const createRim = (xOffset: number) => {
      const rimGroup = new THREE.Group();

      // Rim frame using Torus / Extruded profile
      const rimGeo = new THREE.TorusGeometry(0.72, 0.075, 24, 64);
      rimGeo.scale(1.22, 0.98, 1);
      const rimMesh = new THREE.Mesh(rimGeo, frameMaterial);
      rimMesh.castShadow = true;
      rimGroup.add(rimMesh);

      // Inner Lens
      const lensGeo = new THREE.CylinderGeometry(0.70, 0.70, 0.03, 48);
      lensGeo.rotateX(Math.PI / 2);
      lensGeo.scale(1.18, 0.94, 1);
      const lensMesh = new THREE.Mesh(lensGeo, lensMaterial);
      rimGroup.add(lensMesh);

      rimGroup.position.set(xOffset, 0, 0);
      return rimGroup;
    };

    const leftRim = createRim(-0.96);
    const rightRim = createRim(0.96);
    glassesGroup.add(leftRim);
    glassesGroup.add(rightRim);

    // Bridge
    const bridgeCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.35, 0.08, 0.02),
      new THREE.Vector3(0, 0.28, 0.08),
      new THREE.Vector3(0.35, 0.08, 0.02)
    );
    const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 20, 0.05, 12, false);
    const bridgeMesh = new THREE.Mesh(bridgeGeo, frameMaterial);
    glassesGroup.add(bridgeMesh);

    // Top Brow Accent Bar
    const browCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.7, 0.42, 0.04),
      new THREE.Vector3(0, 0.48, 0.1),
      new THREE.Vector3(0.7, 0.42, 0.04)
    );
    const browGeo = new THREE.TubeGeometry(browCurve, 24, 0.025, 8, false);
    const browMesh = new THREE.Mesh(browGeo, metalAccentMaterial);
    glassesGroup.add(browMesh);

    // Nose Pads
    const padGeo = new THREE.CapsuleGeometry(0.045, 0.12, 8, 16);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
      roughness: 0.1,
    });

    const leftPad = new THREE.Mesh(padGeo, padMat);
    leftPad.position.set(-0.32, -0.15, -0.1);
    leftPad.rotation.z = -0.35;
    leftPad.rotation.y = 0.4;
    glassesGroup.add(leftPad);

    const rightPad = new THREE.Mesh(padGeo, padMat);
    rightPad.position.set(0.32, -0.15, -0.1);
    rightPad.rotation.z = 0.35;
    rightPad.rotation.y = -0.4;
    glassesGroup.add(rightPad);

    // Temples (Left and Right Arms)
    const createTemple = (isLeft: boolean) => {
      const templeGroup = new THREE.Group();
      const sign = isLeft ? -1 : 1;

      // Hinge Block
      const hingeGeo = new THREE.BoxGeometry(0.08, 0.08, 0.12);
      const hingeMesh = new THREE.Mesh(hingeGeo, metalAccentMaterial);
      hingeMesh.position.set(sign * 1.84, 0.15, 0);
      templeGroup.add(hingeMesh);

      // Temple Arm Curve extending backwards
      const templeCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(sign * 1.84, 0.15, -0.05),
        new THREE.Vector3(sign * 1.86, 0.15, -1.2),
        new THREE.Vector3(sign * 1.82, 0.12, -2.0),
        new THREE.Vector3(sign * 1.76, -0.32, -2.4) // gentle ear hook
      );
      const armGeo = new THREE.TubeGeometry(templeCurve, 32, 0.042, 10, false);
      const armMesh = new THREE.Mesh(armGeo, frameMaterial);
      templeGroup.add(armMesh);

      // Gold temple end tip
      const tipGeo = new THREE.SphereGeometry(0.048, 16, 16);
      const tipMesh = new THREE.Mesh(tipGeo, metalAccentMaterial);
      tipMesh.position.set(sign * 1.76, -0.32, -2.4);
      templeGroup.add(tipMesh);

      return templeGroup;
    };

    glassesGroup.add(createTemple(true));
    glassesGroup.add(createTemple(false));

    // Subtle floating shadow plane below
    const shadowGeo = new THREE.PlaneGeometry(5, 3);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.4;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Initial position & tilt
    glassesGroup.position.set(0, 0, 0);
    glassesGroup.rotation.y = -0.35;
    glassesGroup.rotation.x = 0.1;

    // Mouse Interaction for Drag Orbit
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !glassesGroup) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      glassesGroup.rotation.y += deltaX * 0.009;
      glassesGroup.rotation.x = Math.max(-0.6, Math.min(0.6, glassesGroup.rotation.x + deltaY * 0.009));

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handlePointerDown);
    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (glassesGroup) {
        if (isAutoRotating && !isDragging) {
          glassesGroup.rotation.y += 0.006;
          glassesGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.06;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', handlePointerDown);
      domElement.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!groupRef.current) return;
    const currentScale = groupRef.current.scale.x;
    const newScale = direction === 'in' ? Math.min(1.4, currentScale + 0.15) : Math.max(0.7, currentScale - 0.15);
    groupRef.current.scale.set(newScale, newScale, newScale);
  };

  const currentLensInfo = LENS_OPTIONS.find((l) => l.id === lensTypeKey);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#F6FAFD] to-[#EDF5FB] rounded-3xl p-5 sm:p-8 shadow-card border border-blue-100/80 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 z-20 relative">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center justify-center px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full bg-white text-obsidian-900 shadow-xs border border-blue-200/60 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-electric-600 mr-1" />
            3D Interactive Lab
          </span>
          <span className="text-[11px] sm:text-xs text-neutral-500 font-medium">
            360° Drag & Inspect
          </span>
        </div>

        <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-blue-200/60 shadow-xs">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`flex items-center space-x-1 px-2.5 py-1 text-[11px] sm:text-xs font-medium rounded-full transition-all ${
              isAutoRotating ? 'bg-obsidian-900 text-white shadow-xs' : 'text-neutral-600 hover:text-black'
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-3 h-3 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span>{isAutoRotating ? 'Rotating' : 'Pause'}</span>
          </button>
          <div className="w-px h-3 bg-neutral-200 mx-0.5" />
          <button
            onClick={() => handleZoom('in')}
            className="p-1 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            className="p-1 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-[280px] sm:h-[420px] cursor-grab active:cursor-grabbing relative flex items-center justify-center select-none touch-pan-y z-10"
      />

      {/* Hotspots Callouts */}
      <div className="absolute inset-x-3 sm:inset-x-6 top-16 sm:top-24 pointer-events-none flex justify-between z-20">
        <div className="pointer-events-auto">
          <button
            onClick={() => setActiveHotspot(activeHotspot === 1 ? null : 1)}
            className="group flex items-center space-x-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-100/80 shadow-card hover:scale-105 transition"
          >
            <span className="w-2 h-2 rounded-full bg-electric-600 animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold text-obsidian-900">Precision Lenses</span>
          </button>
          {activeHotspot === 1 && (
            <div className="mt-2 w-52 sm:w-60 p-3 bg-white/95 rounded-2xl shadow-elevated border border-blue-100/80 text-xs text-neutral-600 backdrop-blur-md">
              Diamond multi-layer AR coating cut in Mauricio's Freeport optical shop with zero edge distortion.
            </div>
          )}
        </div>

        <div className="pointer-events-auto text-right">
          <button
            onClick={() => setActiveHotspot(activeHotspot === 2 ? null : 2)}
            className="group inline-flex items-center space-x-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-100/80 shadow-card hover:scale-105 transition"
          >
            <span className="text-[11px] sm:text-xs font-semibold text-obsidian-900">Re-Lens Your Frame</span>
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          </button>
          {activeHotspot === 2 && (
            <div className="mt-2 w-52 sm:w-60 p-3 bg-white/95 rounded-2xl shadow-elevated border border-blue-100/80 text-xs text-neutral-600 backdrop-blur-md ml-auto text-left">
              Send in your favorite frame and save up to 70% compared to luxury chain opticians.
            </div>
          )}
        </div>
      </div>

      {/* Customizer Bottom Shelf */}
      <div className="mt-3 pt-4 border-t border-blue-100/60 grid grid-cols-1 md:grid-cols-12 gap-5 relative z-20">
        
        {/* Frame Color Swatches */}
        <div className="md:col-span-6">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
            Frame Material & Acetate Finish
          </span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
            {FRAME_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => updateFrameMaterial(opt.id)}
                className={`flex items-center justify-center sm:justify-start space-x-1.5 sm:space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  frameColorKey === opt.id
                    ? 'bg-obsidian-900 text-white border-obsidian-900 shadow-xs ring-2 ring-electric-500/20'
                    : 'bg-white text-neutral-700 border-blue-100 hover:border-blue-200'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0"
                  style={{ backgroundColor: `#${opt.color.toString(16).padStart(6, '0')}` }}
                />
                <span className="truncate">{opt.name}</span>
                {frameColorKey === opt.id && <Check className="w-3 h-3 text-white flex-shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Lens Coating Switcher */}
        <div className="md:col-span-6">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
            Optical Lens Technology
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {LENS_OPTIONS.map((lens) => (
              <button
                key={lens.id}
                onClick={() => updateLensMaterial(lens.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-medium border text-center transition-all ${
                  lensTypeKey === lens.id
                    ? 'bg-white text-obsidian-900 border-electric-500 shadow-xs ring-2 ring-electric-500/20 font-semibold'
                    : 'bg-white/80 text-neutral-600 border-blue-100 hover:bg-white'
                }`}
              >
                {lens.name}
              </button>
            ))}
          </div>
          {currentLensInfo && (
            <div className="flex flex-wrap items-center justify-between mt-2 pt-2 border-t border-blue-100/60">
              <p className="text-[11px] text-neutral-500 italic max-w-sm">
                {currentLensInfo.desc}
              </p>
              <a
                href="#calculator"
                className="mt-1 sm:mt-0 text-xs font-bold text-electric-600 hover:text-electric-700 flex items-center space-x-1"
              >
                <span>Order Custom Rx Specs</span>
                <span>→</span>
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
