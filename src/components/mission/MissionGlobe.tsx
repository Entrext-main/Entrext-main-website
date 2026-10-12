"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Pin {
  id: string;
  lat: number;
  lon: number;
  label: string;
  detail: string;
}

const PINS: Pin[] = [
  {
    id: 'na',
    lat: 38,
    lon: -97,
    label: 'Real Results',
    detail: 'Work is no longer about sitting in an office from 9 to 5. It is about what you actually finish.',
  },
  {
    id: 'sa',
    lat: -15,
    lon: -55,
    label: 'Anyone, Anywhere',
    detail: 'You do not need to move to a big city to build something that reaches the entire world.',
  },
  {
    id: 'eu',
    lat: 48,
    lon: 15,
    label: 'Speed of Ideas',
    detail: 'What once required millions of dollars can now be built by one person over a weekend.',
  },
  {
    id: 'as',
    lat: 25,
    lon: 78,
    label: 'The Next Wave',
    detail: 'Billions of people will need to create their own path instead of waiting for a job.',
  },
];

// Simplified continental landmass polygons (lat, lon ranges) to generate accurate stippled dots
function isLand(lat: number, lon: number): boolean {
  // North America
  if (lat >= 15 && lat <= 70 && lon >= -165 && lon <= -55) {
    if (lat < 30 && lon < -115) return false;
    if (lat > 55 && lon > -60) return false;
    return true;
  }
  // South America
  if (lat >= -56 && lat <= 12 && lon >= -82 && lon <= -34) {
    if (lat > 0 && lon < -75) return false;
    return true;
  }
  // Europe
  if (lat >= 36 && lat <= 70 && lon >= -10 && lon <= 45) {
    return true;
  }
  // Africa
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) {
    if (lat > 20 && lon > 35) return false;
    return true;
  }
  // Asia
  if (lat >= 5 && lat <= 75 && lon >= 45 && lon <= 150) {
    if (lat < 10 && lon < 95) return false;
    return true;
  }
  // Australia
  if (lat >= -44 && lat <= -10 && lon >= 112 && lon <= 154) {
    return true;
  }
  return false;
}

export const MissionGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotation, setRotation] = useState<number>(0.2);
  const [activePin, setActivePin] = useState<Pin | null>(null);
  const [pinPositions, setPinPositions] = useState<{ id: string; x: number; y: number; visible: boolean; pin: Pin }[]>([]);

  // Pre-generate stippled landmass points
  const pointsRef = useRef<{ lat: number; lon: number; density: number }[]>([]);

  useEffect(() => {
    if (pointsRef.current.length === 0) {
      const pts: { lat: number; lon: number; density: number }[] = [];
      const latStep = 2.4;
      const lonStep = 2.4;

      for (let lat = -80; lat <= 80; lat += latStep) {
        // compensate longitude density near poles
        const cosLat = Math.cos((lat * Math.PI) / 180);
        if (Math.abs(cosLat) < 0.05) continue;
        const actualLonStep = lonStep / Math.max(cosLat, 0.2);

        for (let lon = -180; lon < 180; lon += actualLonStep) {
          if (isLand(lat, lon)) {
            // Add slight jitter for organic stippling
            const jitterLat = lat + (Math.random() - 0.5) * 1.2;
            const jitterLon = lon + (Math.random() - 0.5) * 1.2;
            pts.push({
              lat: jitterLat,
              lon: jitterLon,
              density: 0.5 + Math.random() * 0.5,
            });
          }
        }
      }
      pointsRef.current = pts;
    }
  }, []);

  useEffect(() => {
    let animId: number;
    let currentRot = rotation;
    let isDragging = false;
    let lastMouseX = 0;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = (e.clientX - lastMouseX) * 0.005;
      currentRot += delta;
      lastMouseX = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    let time = 0;

    const render = () => {
      time += 0.01;
      if (!isDragging) {
        currentRot += 0.003; // smooth ambient rotation
      }
      setRotation(currentRot);

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, rect.width, rect.height);

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const radius = size * 0.42;

      // 1. Globe Ambient Core - Orange/Amber Glowing Sphere
      const sphereGrad = ctx.createRadialGradient(
        cx - radius * 0.25,
        cy - radius * 0.25,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      // Beautiful warm orange glow
      sphereGrad.addColorStop(0, 'rgba(255, 235, 215, 0.95)');
      sphereGrad.addColorStop(0.35, 'rgba(255, 160, 80, 0.88)');
      sphereGrad.addColorStop(0.7, 'rgba(235, 105, 25, 0.82)');
      sphereGrad.addColorStop(0.95, 'rgba(195, 75, 15, 0.85)');
      sphereGrad.addColorStop(1, 'rgba(180, 60, 10, 0)');

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Soft atmospheric volumetric cloud shading layer
      const cloudGrad = ctx.createRadialGradient(
        cx + radius * 0.35,
        cy + radius * 0.2,
        radius * 0.2,
        cx,
        cy,
        radius * 1.05
      );
      cloudGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      cloudGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
      cloudGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = cloudGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Stippled White Point-Cloud Landmasses
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        const pt = pts[i];
        const phi = (90 - pt.lat) * (Math.PI / 180);
        const theta = (pt.lon * (Math.PI / 180)) + currentRot;

        // Spherical 3D math
        const x3d = Math.sin(phi) * Math.sin(theta);
        const y3d = -Math.cos(phi);
        const z3d = Math.sin(phi) * Math.cos(theta);

        // Only render points on the visible front hemisphere (z > -0.05)
        if (z3d > -0.05) {
          const px = cx + x3d * radius;
          const py = cy + y3d * radius;

          // Depth falloff & atmospheric edge fade
          const alpha = Math.max(0, Math.min(1, z3d * 1.25)) * pt.density;
          const dotRadius = (0.7 + z3d * 0.8);

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Soft Drifting Volumetric Cloud Veils across the globe
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const cloudOffset1 = (time * 12) % (radius * 2);
      const cloudOffset2 = (time * 8) % (radius * 2);

      const mist1 = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
      mist1.addColorStop(0, 'rgba(255, 255, 255, 0)');
      mist1.addColorStop(0.3, 'rgba(255, 255, 255, 0.22)');
      mist1.addColorStop(0.6, 'rgba(255, 255, 255, 0.35)');
      mist1.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = mist1;
      ctx.beginPath();
      ctx.ellipse(cx - radius + cloudOffset1, cy - radius * 0.2, radius * 0.8, radius * 0.35, 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(cx + radius - cloudOffset2, cy + radius * 0.3, radius * 0.7, radius * 0.3, -0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 5. Outer Atmospheric Rim Halo
      const rimGrad = ctx.createRadialGradient(cx, cy, radius * 0.92, cx, cy, radius * 1.08);
      rimGrad.addColorStop(0, 'rgba(255, 140, 50, 0)');
      rimGrad.addColorStop(0.7, 'rgba(255, 160, 60, 0.45)');
      rimGrad.addColorStop(0.9, 'rgba(255, 255, 255, 0.7)');
      rimGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.08, 0, Math.PI * 2);
      ctx.fill();

      // 6. Project Interactive '+' Pins
      const calculatedPins = PINS.map((pin) => {
        const phi = (90 - pin.lat) * (Math.PI / 180);
        const theta = (pin.lon * (Math.PI / 180)) + currentRot;
        const x3d = Math.sin(phi) * Math.sin(theta);
        const y3d = -Math.cos(phi);
        const z3d = Math.sin(phi) * Math.cos(theta);

        const visible = z3d > 0.15;
        const px = cx + x3d * radius;
        const py = cy + y3d * radius;

        return {
          id: pin.id,
          x: px,
          y: py,
          visible,
          pin,
        };
      });

      setPinPositions(calculatedPins);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none">
      {/* Hairline Grid Crosshairs (as seen in the reference image) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        {/* Horizontal Hairline */}
        <div className="absolute top-[22%] left-0 right-0 h-[1px] bg-zinc-500/25" />
        
        {/* Vertical Hairline */}
        <div className="absolute top-0 bottom-0 left-[26%] w-[1px] bg-zinc-500/25" />

        {/* Small Node Marker at intersection */}
        <div className="absolute top-[22%] left-[26%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-500/60 ring-2 ring-[#000000]" />
      </div>

      {/* The 3D Canvas Globe */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-0"
        title="Drag to rotate the mission globe"
      />

      {/* Interactive '+' Pins Overlay (Exact design from screenshot) */}
      {pinPositions.map((pos) => {
        if (!pos.visible) return null;
        const isHovered = activePin?.id === pos.id;

        return (
          <div
            key={pos.id}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
            style={{ left: pos.x, top: pos.y }}
          >
            <button
              onClick={() => setActivePin(isHovered ? null : pos.pin)}
              onMouseEnter={() => setActivePin(pos.pin)}
              onMouseLeave={() => setActivePin(null)}
              className="w-5 h-5 rounded-md bg-zinc-900/90 border border-white/20 hover:bg-[#ff4d00] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
              aria-label={`View ${pos.pin.label}`}
            >
              <span className="text-[11px] font-mono leading-none">+</span>
            </button>

            {/* Hover Tooltip Card */}
            {isHovered && (
              <div className="absolute left-7 top-1/2 -translate-y-1/2 w-48 bg-zinc-950/95 backdrop-blur-md text-white p-3 rounded-lg shadow-xl text-left pointer-events-none z-30 border border-white/15">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#ff4d00] block mb-0.5">
                  {pos.pin.label}
                </span>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {pos.pin.detail}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
