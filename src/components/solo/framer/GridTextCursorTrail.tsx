"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TrailItem {
  x: number;
  y: number;
  id: number;
  charIndex: number;
  colorIndex: number;
  createdAt: number;
}

interface GridTextCursorTrailProps {
  text?: string;
  gridSize?: number;
  trailLength?: number;
  trailDuration?: number;
  customColors?: string[];
  textColor?: string;
  cornerRadius?: number;
  className?: string;
}

export const GridTextCursorTrail: React.FC<GridTextCursorTrailProps> = ({
  text = 'ENTREXT SOLO FOUNDER BUILD LAUNCH OWN 75% ',
  gridSize = 44,
  trailLength = 16,
  trailDuration = 0.9,
  customColors = ['#f3cb42', '#7fe0b0', '#e4f3cb', '#f9f8f4'],
  textColor = '#081a14',
  cornerRadius = 8,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastPos = useRef<{ x: number; y: number }>({ x: -1, y: -1 });
  const globalIndex = useRef<number>(0);

  const chars = useMemo(() => {
    if (!text) return [' '];
    return text.replace(/\\n/g, '\n').split('');
  }, [text]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Only respond if mouse is inside or nearby container
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }

      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const x = Math.floor(clientX / gridSize);
      const y = Math.floor(clientY / gridSize);

      if (x !== lastPos.current.x || y !== lastPos.current.y) {
        lastPos.current = { x, y };
        const id = globalIndex.current++;
        const charIndex = id % chars.length;
        const colorIndex = id % customColors.length;

        setTrail((prev) => {
          const newTrail = [
            ...prev,
            { x, y, id, charIndex, colorIndex, createdAt: Date.now() },
          ];
          if (newTrail.length > trailLength) {
            return newTrail.slice(newTrail.length - trailLength);
          }
          return newTrail;
        });
      }
    },
    [gridSize, trailLength, chars, customColors]
  );

  // Lifetime expiration
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((prev) => {
        const filtered = prev.filter(
          (item) => now - item.createdAt < trailDuration * 1000
        );
        if (filtered.length !== prev.length) return filtered;
        return prev;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [trailDuration]);

  // Window listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}
    >
      <AnimatePresence>
        {trail.map((item, index) => {
          const opacity = (index + 1) / (trail.length || 1);
          const char = chars[item.charIndex];
          const bgColor = customColors[item.colorIndex];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: opacity * 0.95, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: item.x * gridSize,
                top: item.y * gridSize,
                width: gridSize,
                height: gridSize,
                backgroundColor: bgColor,
                borderRadius: cornerRadius,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: textColor,
                fontSize: Math.floor(gridSize * 0.45),
                fontFamily: 'monospace',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <span>{char}</span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
