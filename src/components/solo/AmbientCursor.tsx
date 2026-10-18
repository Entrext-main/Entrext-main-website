"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const AmbientCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: smoothX,
        top: smoothY,
        x: '-50%',
        y: '-50%',
      }}
      className="w-[450px] h-[450px] rounded-full pointer-events-none z-0 opacity-20 blur-3xl bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_70%)]"
    />
  );
};
