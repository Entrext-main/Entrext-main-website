"use client";

import React, { useId } from 'react';

interface LiquidGlassProps {
  children?: React.ReactNode;
  cornerRadius?: number;
  blur?: number;
  glassTint?: string;
  tintOpacity?: number;
  edgeHighlight?: number;
  specularIntensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  cornerRadius = 24,
  blur = 24,
  glassTint = 'rgba(255, 255, 255, 0.05)',
  edgeHighlight = 0.85,
  specularIntensity = 0.9,
  className = '',
  style = {},
}) => {
  const filterId = useId();

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      style={{
        borderRadius: cornerRadius,
        background: glassTint,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxShadow: `
          inset 0 1px 1px 0 rgba(255, 255, 255, ${specularIntensity * 0.35}),
          inset 0 -1px 2px 0 rgba(0, 0, 0, 0.4),
          0 20px 40px -15px rgba(0, 0, 0, 0.5),
          0 0 0 1px rgba(255, 255, 255, ${edgeHighlight * 0.12})
        `,
        ...style,
      }}
    >
      {/* Specular sheen gradient line along top border */}
      <div
        className="absolute top-0 inset-x-0 h-[1px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(243, 203, 66, 0.6) 50%, transparent 100%)',
        }}
      />

      {/* Glass Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};
