"use client";

import React, { useEffect, useRef } from 'react';

interface CloudAtmosphereProps {
  activeChapterIndex: number;
}

interface CloudParticle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

export const CloudAtmosphere: React.FC<CloudAtmosphereProps> = ({ activeChapterIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bankRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef(activeChapterIndex);
  activeRef.current = activeChapterIndex;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle drifting cloud particles
    const particles: CloudParticle[] = [];
    const count = 38;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.9,
        radius: 90 + Math.random() * 180,
        opacity: 0.15 + Math.random() * 0.35,
        speed: 0.12 + Math.random() * 0.25,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Clouds are densest at Chapter 0 (start), gently thinning out as you scroll down
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      if (bankRef.current) bankRef.current.style.opacity = String(Math.max(0, 1 - scrollProgress * 3));
      const cloudMultiplier = Math.max(0.06, Math.pow(1 - Math.min(scrollProgress * 1.5, 1), 1.2));

      // Gentle morning horizon glow
      const sunGradient = ctx.createRadialGradient(
        width * 0.78,
        height * 0.22,
        10,
        width * 0.78,
        height * 0.22,
        320
      );
      sunGradient.addColorStop(0, `rgba(255, 77, 0, ${0.14 * cloudMultiplier})`);
      sunGradient.addColorStop(0.6, `rgba(255, 77, 0, ${0.06 * cloudMultiplier})`);
      sunGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(width * 0.78, height * 0.22, 320, 0, Math.PI * 2);
      ctx.fill();

      // Render drifting cloud puffs
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speed;
        if (p.x - p.radius > width) {
          p.x = -p.radius;
          p.y = Math.random() * height * (activeRef.current === 0 ? 0.95 : 0.45);
        }

        const offsetY = Math.sin(time + i * 0.4) * 10;
        const currentOpacity = p.opacity * cloudMultiplier;
        if (currentOpacity <= 0.005) continue;

        const grad = ctx.createRadialGradient(
          p.x,
          p.y + offsetY,
          p.radius * 0.1,
          p.x,
          p.y + offsetY,
          p.radius
        );

        grad.addColorStop(0, `rgba(255, 77, 0, ${currentOpacity * 0.12})`);
        grad.addColorStop(0.6, `rgba(255, 77, 0, ${currentOpacity * 0.04})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y + offsetY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Consistent ethereal light background across all sections */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(175deg, #120500 0%, #050200 35%, #000000 75%, #0a0300 100%)',
          opacity: 1,
        }}
      />

      {/* Procedural cloud layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Soft cloud bank silhouette on opening */}
      <div 
        ref={bankRef}
        className="absolute inset-x-0 bottom-0 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          className="w-full h-auto text-[#ff4d00]/10 animate-cloud-1"
        >
          <path
            d="M0 220L1440 220L1440 140C1360 140 1320 100 1240 100C1160 100 1120 150 1040 150C960 150 920 80 820 80C720 80 680 130 580 130C480 130 440 70 340 70C240 70 200 120 120 120C40 120 10 100 0 100L0 220Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
