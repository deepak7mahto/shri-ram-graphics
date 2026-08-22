import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Box3DViewer({
  length = 180, // mm
  width = 100,  // mm
  height = 50,  // mm
  boxType = 'duplex',
  material = 'White Duplex Board',
  finishes = [],
  isOpen = false,
  autoRotate = false
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const boxGroupRef = useRef(null);
  const topFlapRef = useRef(null);
  const bottomFlapRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 450;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(22, 16, 26);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff8ee, 2.0);
    mainLight.position.set(25, 35, 20);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xdde8ff, 1.0);
    fillLight.position.set(-20, 15, -20);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xf59e0b, 1.5, 50);
    rimLight.position.set(0, -10, 20);
    scene.add(rimLight);

    // 5. Floor Shadow Plane
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -6.5;
    floor.receiveShadow = true;
    scene.add(floor);

    // 6. Box Group
    const boxGroup = new THREE.Group();
    boxGroupRef.current = boxGroup;
    scene.add(boxGroup);

    // Mouse Drag Controls
    const dom = renderer.domElement;
    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current || !boxGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      boxGroupRef.current.rotation.y += deltaX * 0.008;
      boxGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch Support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || !boxGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

      boxGroupRef.current.rotation.y += deltaX * 0.008;
      boxGroupRef.current.rotation.x += deltaY * 0.008;

      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    // Zoom on wheel
    const onWheel = (e) => {
      e.preventDefault();
      if (!cameraRef.current) return;
      const fov = cameraRef.current.fov + e.deltaY * 0.04;
      cameraRef.current.fov = Math.max(20, Math.min(65, fov));
      cameraRef.current.updateProjectionMatrix();
    };

    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    dom.addEventListener('wheel', onWheel, { passive: false });

    // 7. Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && boxGroupRef.current && !isDraggingRef.current) {
        boxGroupRef.current.rotation.y += 0.006;
      }

      // Smooth flap hinge animation
      if (topFlapRef.current) {
        const targetRot = isOpen ? -Math.PI * 0.65 : 0;
        topFlapRef.current.rotation.x += (targetRot - topFlapRef.current.rotation.x) * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 450;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      dom.removeEventListener('wheel', onWheel);
      if (rendererRef.current && dom.parentNode) {
        dom.parentNode.removeChild(dom);
      }
    };
  }, [autoRotate]);

  // Update Box Geometry & Materials when props change
  useEffect(() => {
    if (!boxGroupRef.current) return;

    // Clear previous mesh
    while (boxGroupRef.current.children.length > 0) {
      const child = boxGroupRef.current.children[0];
      boxGroupRef.current.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material.dispose();
      }
    }

    // Normalized visual scales (box fits within ~10 units)
    const maxDim = Math.max(length, width, height, 100);
    const scaleFactor = 12 / maxDim;
    const l = Math.max(2, length * scaleFactor);
    const w = Math.max(2, width * scaleFactor);
    const h = Math.max(2, height * scaleFactor);

    // Determine Material Properties
    let baseColor = 0xf8f9fa;
    let roughness = 0.45;
    let metalness = 0.05;

    if (material.includes('Kraft')) {
      baseColor = 0xc49a6c; // Kraft Brown
      roughness = 0.85;
      metalness = 0.0;
    } else if (material.includes('Charcoal') || material.includes('Black')) {
      baseColor = 0x1e293b; // Luxury Dark Slate
      roughness = 0.35;
      metalness = 0.2;
    } else if (material.includes('Metallic') || finishes.includes('gold_foil')) {
      baseColor = finishes.includes('gold_foil') ? 0xd97706 : 0xe2e8f0;
      roughness = 0.25;
      metalness = finishes.includes('gold_foil') ? 0.65 : 0.4;
    }

    if (finishes.includes('gloss_lamination')) {
      roughness = 0.15;
    } else if (finishes.includes('matte_lamination')) {
      roughness = 0.65;
    }

    // Dynamic Canvas Texture for Printed Brand Label on Face
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = material.includes('Kraft') ? '#C49A6C' : (material.includes('Charcoal') ? '#1E293B' : '#FFFFFF');
    ctx.fillRect(0, 0, 512, 512);

    // Brand Graphics
    ctx.fillStyle = material.includes('Charcoal') ? '#F59E0B' : '#0F172A';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SHRI RAM GRAPHICS', 256, 180);

    ctx.font = '500 18px sans-serif';
    ctx.fillStyle = material.includes('Charcoal') ? '#94A3B8' : '#64748B';
    ctx.fillText('IMAGINE • BELIEVE • CREATE', 256, 215);

    // Box details badge
    ctx.strokeStyle = material.includes('Charcoal') ? '#F59E0B' : '#2563EB';
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 260, 392, 160);

    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = material.includes('Charcoal') ? '#FFFFFF' : '#1E3A8A';
    ctx.fillText(boxType.toUpperCase() + ' PACKAGING', 256, 310);

    ctx.font = '18px sans-serif';
    ctx.fillStyle = material.includes('Charcoal') ? '#E2E8F0' : '#475569';
    ctx.fillText(`${length} x ${width} x ${height} mm`, 256, 350);

    if (finishes.includes('gold_foil')) {
      ctx.fillStyle = '#D97706';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('✦ GOLD FOIL STAMPED ✦', 256, 390);
    } else if (finishes.includes('spot_uv')) {
      ctx.fillStyle = '#2563EB';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('★ SPOT UV GLOSS EMBELLISHED ★', 256, 390);
    }

    const faceTexture = new THREE.CanvasTexture(canvas);

    const faceMaterial = new THREE.MeshStandardMaterial({
      map: faceTexture,
      roughness: roughness,
      metalness: metalness
    });

    const standardMaterial = new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness: roughness,
      metalness: metalness
    });

    // Box Body Mesh
    const materials = [
      standardMaterial, // right
      standardMaterial, // left
      standardMaterial, // top
      standardMaterial, // bottom
      faceMaterial,     // front
      standardMaterial  // back
    ];

    const boxGeo = new THREE.BoxGeometry(l, h, w);
    const boxMesh = new THREE.Mesh(boxGeo, materials);
    boxMesh.castShadow = true;
    boxMesh.receiveShadow = true;
    boxGroupRef.current.add(boxMesh);

    // Top Flap Hinge
    const flapGeo = new THREE.BoxGeometry(l, 0.1, w * 0.95);
    const topFlap = new THREE.Mesh(flapGeo, standardMaterial);
    topFlap.position.set(0, h / 2 + 0.05, -w * 0.45);
    topFlap.castShadow = true;

    const flapHinge = new THREE.Group();
    flapHinge.position.set(0, h / 2, -w / 2);
    topFlap.position.set(0, 0, w * 0.45); // offset from hinge pivot
    flapHinge.add(topFlap);
    topFlapRef.current = flapHinge;
    boxGroupRef.current.add(flapHinge);

    // Reset rotation position nicely
    boxGroupRef.current.position.y = 0;
    if (!autoRotate && boxGroupRef.current.rotation.x === 0) {
      boxGroupRef.current.rotation.set(0.35, 0.65, 0);
    }

  }, [length, width, height, boxType, material, finishes, isOpen]);

  return (
    <div className="relative w-full h-[450px] lg:h-[520px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center select-none">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Overlay Helper Badge */}
      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 text-xs text-slate-300 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>360° Interactive 3D Canvas • Drag to rotate & scroll to zoom</span>
      </div>

      {/* Dimensional HUD Indicator */}
      <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-center gap-4">
        <div><span className="text-slate-500">L:</span> <span className="font-bold text-brand-gold">{length}</span></div>
        <div><span className="text-slate-500">W:</span> <span className="font-bold text-brand-gold">{width}</span></div>
        <div><span className="text-slate-500">H:</span> <span className="font-bold text-brand-gold">{height}</span></div>
        <div className="text-slate-500 uppercase font-mono text-[10px]">Scale 1:1</div>
      </div>
    </div>
  );
}
