import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './Thesis3DViewer.css';

export default function Thesis3DViewer() {
  const mountRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const stateRef = useRef({
    autoRotate: true,
  });

  useEffect(() => {
    stateRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / (height || 1), 0.1, 100);

    // 2. Renderer with transparent background (instantiated first)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Responsive Camera & Viewport Sizing
    const updateCameraResponsive = (w, h) => {
      if (!w || !h || !renderer) return;
      const aspect = w / h;
      camera.aspect = aspect;

      // Adjust camera distance & FOV based on container width and aspect ratio
      if (w < 380 || aspect < 0.75) {
        // Ultra-compact mobile
        camera.position.set(0, 1.75, 6.2);
        camera.fov = 44;
      } else if (w < 640 || aspect < 1.0) {
        // Standard mobile
        camera.position.set(0, 1.65, 5.6);
        camera.fov = 42;
      } else if (w < 1024 || aspect < 1.3) {
        // Tablet / medium view
        camera.position.set(0, 1.6, 5.2);
        camera.fov = 40;
      } else {
        // Desktop landscape
        camera.position.set(0, 1.55, 4.8);
        camera.fov = 38;
      }

      camera.lookAt(0, 0.05, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    // Apply responsive camera parameters immediately
    updateCameraResponsive(width, height);

    // 3. Studio Lighting for Clean Academic Presentation
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0e7ff, 1.2);
    fillLight.position.set(-4, 2, -2);
    scene.add(fillLight);

    const goldPointLight = new THREE.PointLight(0xd97706, 1.8, 8);
    goldPointLight.position.set(0, 2.5, 2);
    scene.add(goldPointLight);

    // 4. Materials (Solid Luxury Academic Palette)
    const bookCoverMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Solid Deep Navy / Slate
      metalness: 0.1,
      roughness: 0.35,
    });

    const pagesMaterial = new THREE.MeshStandardMaterial({
      color: 0xfafafa, // Solid Crisp Paper
      roughness: 0.7,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Solid Warm Gold
      metalness: 0.85,
      roughness: 0.2,
    });

    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0x090d16, // Solid Obsidian Black
      roughness: 0.35,
      metalness: 0.2,
    });

    // 5. Contact Shadow Plane below the book
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.7;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Main 3D Models: Only Thesis Book and Graduation Cap
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- A. THESIS BOOK ---
    const bookGroup = new THREE.Group();

    // Book Pages
    const pageGeometry = new THREE.BoxGeometry(1.7, 0.32, 2.25);
    const pagesMesh = new THREE.Mesh(pageGeometry, pagesMaterial);
    pagesMesh.position.set(0.04, -0.4, 0);
    pagesMesh.castShadow = true;
    pagesMesh.receiveShadow = true;
    bookGroup.add(pagesMesh);

    // Book Bottom Cover
    const coverBottomGeo = new THREE.BoxGeometry(1.82, 0.045, 2.36);
    const coverBottom = new THREE.Mesh(coverBottomGeo, bookCoverMaterial);
    coverBottom.position.set(0, -0.58, 0);
    coverBottom.castShadow = true;
    bookGroup.add(coverBottom);

    // Book Top Cover
    const coverTop = new THREE.Mesh(coverBottomGeo, bookCoverMaterial);
    coverTop.position.set(0, -0.22, 0);
    coverTop.castShadow = true;
    bookGroup.add(coverTop);

    // Book Spine
    const spineGeo = new THREE.BoxGeometry(0.065, 0.41, 2.36);
    const spine = new THREE.Mesh(spineGeo, bookCoverMaterial);
    spine.position.set(-0.89, -0.4, 0);
    bookGroup.add(spine);

    // --- Official UNA Puno Logo on Cover (Forced High-Definition & Anisotropy) ---
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    const textureLoader = new THREE.TextureLoader();
    const unaLogoTexture = textureLoader.load('/images/logos/logo_unao.png', (tex) => {
      tex.anisotropy = maxAnisotropy;
      tex.needsUpdate = true;
    });
    unaLogoTexture.colorSpace = THREE.SRGBColorSpace;
    unaLogoTexture.anisotropy = maxAnisotropy;
    unaLogoTexture.generateMipmaps = true;
    unaLogoTexture.minFilter = THREE.LinearMipmapLinearFilter;
    unaLogoTexture.magFilter = THREE.LinearFilter;

    // UNA Puno Logo Decal directly on Cover with sharp rendering
    const logoGeo = new THREE.PlaneGeometry(0.85, 0.85);
    const logoMat = new THREE.MeshStandardMaterial({
      map: unaLogoTexture,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.2,
      metalness: 0.05,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.rotation.x = -Math.PI / 2;
    logoMesh.position.set(0.05, -0.196, 0.02);
    bookGroup.add(logoMesh);

    // Gold Lettering Lines (Universidad / Tesis / Puno)
    const lineGeo1 = new THREE.BoxGeometry(1.05, 0.015, 0.07);
    const line1 = new THREE.Mesh(lineGeo1, goldMaterial);
    line1.position.set(0.05, -0.19, -0.75);
    bookGroup.add(line1);

    const lineGeo2 = new THREE.BoxGeometry(0.75, 0.015, 0.05);
    const line2 = new THREE.Mesh(lineGeo2, goldMaterial);
    line2.position.set(0.05, -0.19, -0.60);
    bookGroup.add(line2);

    const lineGeo3 = new THREE.BoxGeometry(0.85, 0.015, 0.05);
    const line3 = new THREE.Mesh(lineGeo3, goldMaterial);
    line3.position.set(0.05, -0.19, 0.65);
    bookGroup.add(line3);

    const lineGeo4 = new THREE.BoxGeometry(0.55, 0.015, 0.05);
    const line4 = new THREE.Mesh(lineGeo4, goldMaterial);
    line4.position.set(0.05, -0.19, 0.80);
    bookGroup.add(line4);

    // Gold Ribbon Bookmark
    const ribbonGeo = new THREE.BoxGeometry(0.12, 0.02, 0.65);
    const ribbon = new THREE.Mesh(ribbonGeo, goldMaterial);
    ribbon.position.set(0.2, -0.38, 1.35);
    ribbon.rotation.x = 0.35;
    bookGroup.add(ribbon);

    bookGroup.rotation.y = -0.32;
    mainGroup.add(bookGroup);

    // --- B. GRADUATION MORTARBOARD (BIRRETE) ---
    const capGroup = new THREE.Group();

    // Cap square board
    const boardGeo = new THREE.BoxGeometry(1.65, 0.05, 1.65);
    const board = new THREE.Mesh(boardGeo, capMaterial);
    board.position.set(0, 0.8, 0);
    board.rotation.y = Math.PI / 4;
    board.castShadow = true;
    capGroup.add(board);

    // Skullcap base
    const skullGeo = new THREE.CylinderGeometry(0.52, 0.45, 0.44, 24);
    const skull = new THREE.Mesh(skullGeo, capMaterial);
    skull.position.set(0, 0.55, 0);
    capGroup.add(skull);

    // Golden Button on top
    const btnGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16);
    const button = new THREE.Mesh(btnGeo, goldMaterial);
    button.position.set(0, 0.85, 0);
    capGroup.add(button);

    // Golden Tassel
    const tasselCordGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.78, 8);
    const tasselCord = new THREE.Mesh(tasselCordGeo, goldMaterial);
    tasselCord.position.set(0.42, 0.65, 0.42);
    tasselCord.rotation.z = -0.7;
    tasselCord.rotation.x = 0.4;
    capGroup.add(tasselCord);

    const tasselBobGeo = new THREE.CylinderGeometry(0.065, 0.095, 0.28, 12);
    const tasselBob = new THREE.Mesh(tasselBobGeo, goldMaterial);
    tasselBob.position.set(0.75, 0.35, 0.75);
    capGroup.add(tasselBob);

    capGroup.position.set(0, 0.28, 0);
    mainGroup.add(capGroup);

    // 7. Interactive Mouse Drag & Parallax
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0.12;
    let targetRotationY = -0.35;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        camera.position.x += (normX * 0.4 - camera.position.x) * 0.05;
        camera.position.y += (1.6 + normY * 0.3 - camera.position.y) * 0.05;
        camera.lookAt(0, 0.1, 0);
        return;
      }

      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;
      targetRotationX = Math.max(-0.6, Math.min(0.6, targetRotationX));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const canvasDom = renderer.domElement;
    canvasDom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    let touchX = 0;
    let touchY = 0;
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchX;
        const deltaY = e.touches[0].clientY - touchY;
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
      }
    };
    canvasDom.addEventListener('touchstart', onTouchStart, { passive: true });
    canvasDom.addEventListener('touchmove', onTouchMove, { passive: true });

    // 8. Resize Observer
    const handleResize = () => {
      if (!container) return;
      updateCameraResponsive(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Auto-rotation when not dragging
      if (stateRef.current.autoRotate && !isDragging) {
        targetRotationY += 0.005;
      }

      // Smooth damping interpolation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.08;

      // Gentle floating levitation effect
      mainGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.06;
      capGroup.position.y = 0.28 + Math.sin(elapsedTime * 2.0 + 1) * 0.035;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      canvasDom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvasDom.removeEventListener('touchstart', onTouchStart);
      canvasDom.removeEventListener('touchmove', onTouchMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pageGeometry.dispose();
      coverBottomGeo.dispose();
      boardGeo.dispose();
      skullGeo.dispose();
      logoGeo.dispose();
      logoMat.dispose();
      unaLogoTexture.dispose();
      shadowGeo.dispose();
    };
  }, []);

  return (
    <div className="thesis-3d-wrapper">
      <div ref={mountRef} className="thesis-3d-canvas" />
    </div>
  );
}
