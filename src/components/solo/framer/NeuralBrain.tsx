"use client";

import React, { useEffect, useRef } from 'react';

interface NeuralBrainProps {
  className?: string;
  nodeColor?: string;
  lineColor?: string;
  pulseColor?: string;
  nodeCount?: number;
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  origX: number;
  origY: number;
  origZ: number;
  radius: number;
  pulsePhase: number;
  layer: number;
}

export const NeuralBrain: React.FC<NeuralBrainProps> = ({
  className = '',
  nodeColor = '#e2ecd1',
  lineColor = 'rgba(74, 133, 104, 0.35)',
  pulseColor = '#f3cb42',
  nodeCount = 65,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Generate 3D Brain/Neural Dual Hemisphere Lattice
    const nodes: Node3D[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // Hemisphere distribution (left or right lobe)
      const isLeft = i % 2 === 0;
      const lobeOffset = isLeft ? -0.45 : 0.45;

      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.95;

      // Elongate into brain-like ellipsoid
      const x = (r * Math.sin(phi) * Math.cos(theta) * 0.6) + lobeOffset;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.85;
      const z = r * Math.cos(phi) * 0.75;

      nodes.push({
        x,
        y,
        z,
        origX: x,
        origY: y,
        origZ: z,
        radius: Math.random() * 2.2 + 1.2,
        pulsePhase: Math.random() * Math.PI * 2,
        layer: isLeft ? 1 : 2,
      });
    }

    // Connect nearby nodes
    const edges: [number, number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].origX - nodes[j].origX;
        const dy = nodes[i].origY - nodes[j].origY;
        const dz = nodes[i].origZ - nodes[j].origZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.58) {
          edges.push([i, j, dist]);
        }
      }
    }

    let yaw = 0;
    let pitch = 0;
    let targetYaw = 0;
    let targetPitch = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetYaw = nx * 1.5;
      targetPitch = ny * 0.8;
    };

    window.addEventListener('mousemove', onMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      yaw += (targetYaw + Math.sin(time * 0.3) * 0.2 - yaw) * 0.05;
      pitch += (targetPitch + Math.cos(time * 0.3) * 0.1 - pitch) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      const fov = Math.min(width, height) * 0.9;
      const cx = width / 2;
      const cy = height / 2;

      // Project nodes to 2D
      const projected = nodes.map((node) => {
        // Rotate Y (yaw)
        let x1 = node.origX * cosY - node.origZ * sinY;
        let z1 = node.origX * sinY + node.origZ * cosY;

        // Rotate X (pitch)
        let y2 = node.origY * cosP - z1 * sinP;
        let z2 = node.origY * sinP + z1 * cosP;

        const distance = 2.4 + z2;
        const scale = fov / distance;
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;

        return {
          px,
          py,
          z: z2,
          scale,
          visible: distance > 0.1,
          radius: node.radius * (scale / (fov * 0.45)),
          pulse: Math.sin(time * 3 + node.pulsePhase),
        };
      });

      // Draw Edges
      edges.forEach(([i, j, dist]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1.visible || !p2.visible) return;

        const edgeAlpha = Math.max(0, (0.58 - dist) / 0.58) * 0.5;
        const depthAlpha = Math.min(1, Math.max(0.1, (p1.z + p2.z) / 2 + 1.2));

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.85;
        ctx.globalAlpha = edgeAlpha * depthAlpha;

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();

        // Traveling synaptic pulse along edge
        const impulseT = (Math.sin(time * 2 + i * 0.3) + 1) / 2;
        const pulseX = p1.px + (p2.px - p1.px) * impulseT;
        const pulseY = p1.py + (p2.py - p1.py) * impulseT;

        if (i % 3 === 0) {
          ctx.fillStyle = pulseColor;
          ctx.globalAlpha = 0.7 * depthAlpha;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Nodes
      projected.forEach((p, idx) => {
        if (!p.visible) return;

        const depthAlpha = Math.min(1, Math.max(0.15, p.z + 1.2));
        ctx.globalAlpha = depthAlpha;

        // Node Glow
        if (p.pulse > 0.6) {
          ctx.fillStyle = pulseColor;
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = p.pulse > 0.4 ? pulseColor : nodeColor;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [nodeColor, lineColor, pulseColor, nodeCount]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
