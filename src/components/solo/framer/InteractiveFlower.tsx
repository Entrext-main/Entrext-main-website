"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface InteractiveFlowerProps {
  petalColor?: string;
  innerGlowColor?: string;
  stamenColor?: string;
  stemColor?: string;
  bloomStrength?: number;
  petalCount?: number;
  className?: string;
}

export const InteractiveFlower: React.FC<InteractiveFlowerProps> = ({
  petalColor = '#e8eed5',
  innerGlowColor = '#f3cb42',
  stamenColor = '#f3cb42',
  stemColor = '#1f4e39',
  petalCount = 28,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for flower head
    const flowerGroup = new THREE.Group();
    scene.add(flowerGroup);

    // Center Core (Stamen)
    const coreGeo = new THREE.SphereGeometry(0.28, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(stamenColor),
      roughness: 0.3,
      metalness: 0.4,
      emissive: new THREE.Color(stamenColor),
      emissiveIntensity: 0.3,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    flowerGroup.add(coreMesh);

    // Procedural Petals
    const petals: THREE.Mesh[] = [];
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.quadraticCurveTo(0.25, 0.6, 0.15, 1.2);
    petalShape.quadraticCurveTo(0, 1.45, -0.15, 1.2);
    petalShape.quadraticCurveTo(-0.25, 0.6, 0, 0);

    const extrudeSettings = {
      depth: 0.02,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015,
    };

    const petalGeo = new THREE.ExtrudeGeometry(petalShape, extrudeSettings);
    petalGeo.center();

    // Create multiple concentric tiers of petals
    for (let i = 0; i < petalCount; i++) {
      const phi = i * 137.5 * (Math.PI / 180); // Golden angle
      const radius = 0.25 + (i / petalCount) * 0.45;
      const angle = (i / petalCount) * Math.PI * 4;

      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(petalColor),
        roughness: 0.4,
        metalness: 0.1,
        side: THREE.DoubleSide,
      });

      const petal = new THREE.Mesh(petalGeo, mat);
      const scale = 0.7 + (i / petalCount) * 0.5;
      petal.scale.set(scale, scale, scale);

      petal.position.x = Math.cos(phi) * radius;
      petal.position.y = Math.sin(phi) * radius;
      petal.position.z = -0.05 * (i / 4);

      petal.rotation.z = phi + Math.PI / 2;
      petal.rotation.x = Math.sin(angle) * 0.35 + 0.2;
      petal.rotation.y = Math.cos(angle) * 0.35;

      flowerGroup.add(petal);
      petals.push(petal);
    }

    // Stem
    const stemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.1, -0.4),
      new THREE.Vector3(0.05, -0.8, -0.6),
      new THREE.Vector3(-0.05, -1.6, -0.8),
    ]);
    const stemGeo = new THREE.TubeGeometry(stemCurve, 20, 0.04, 8, false);
    const stemMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(stemColor),
      roughness: 0.6,
    });
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    flowerGroup.add(stemMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff7d6, 1.8);
    dirLight1.position.set(2, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x76c893, 1.2);
    dirLight2.position.set(-3, -2, 2);
    scene.add(dirLight2);

    // Mouse Interaction
    let targetRotX = 0;
    let targetRotY = 0;
    let isHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 1.4;
      targetRotX = y * 1.4;
    };

    const onMouseEnter = () => {
      isHovered = true;
    };
    const onMouseLeave = () => {
      isHovered = false;
      targetRotX = 0;
      targetRotY = 0;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Idle breathing and blooming rotation
      const idleSpin = elapsedTime * 0.25;
      flowerGroup.rotation.y += (targetRotY + Math.sin(idleSpin) * 0.15 - flowerGroup.rotation.y) * 0.05;
      flowerGroup.rotation.x += (targetRotX + Math.cos(idleSpin) * 0.15 - flowerGroup.rotation.x) * 0.05;
      flowerGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.08;

      // Subtle petal breathing
      const breath = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      petals.forEach((p, idx) => {
        p.position.z = -0.05 * (idx / 4) + Math.sin(elapsedTime * 2 + idx * 0.2) * 0.02;
      });
      coreMesh.scale.set(breath, breath, breath);

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      if (renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      petalGeo.dispose();
      coreGeo.dispose();
    };
  }, [petalColor, innerGlowColor, stamenColor, stemColor, petalCount]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}
    />
  );
};
