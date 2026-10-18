"use client";

import React, { useRef, useId } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react';

interface TextRevealOnScrollProps {
  text: string;
  mutedColor?: string;
  primaryColor?: string;
  replay?: boolean;
  balance?: boolean;
  mode?: 'word' | 'character' | 'sentence';
  className?: string;
  style?: React.CSSProperties;
  transition?: { duration?: number; stiffness?: number; damping?: number; mass?: number };
}

function toSpringOptions(transition?: { duration?: number; stiffness?: number; damping?: number; mass?: number }) {
  const hasSpringValues =
    typeof transition?.stiffness === 'number' ||
    typeof transition?.damping === 'number' ||
    typeof transition?.mass === 'number';

  if (!hasSpringValues && typeof transition?.duration === 'number') {
    const duration = Math.max(transition.duration, 0.05);
    return {
      stiffness: 170 / (duration * duration),
      damping: 26 / duration,
      mass: 1,
      restDelta: 0.001,
    };
  }

  return {
    stiffness: typeof transition?.stiffness === 'number' ? transition.stiffness : 100,
    damping: typeof transition?.damping === 'number' ? transition.damping : 30,
    mass: typeof transition?.mass === 'number' ? transition.mass : 1,
    restDelta: 0.001,
  };
}

export const TextRevealOnScroll: React.FC<TextRevealOnScrollProps> = ({
  text,
  mutedColor = '#2f2f35',
  primaryColor = '#ffffff',
  replay = true,
  balance = true,
  mode = 'word',
  className = '',
  style = {},
  transition = { duration: 0.4 },
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 40%'],
  });

  const maxProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > maxProgress.get()) {
      maxProgress.set(latest);
    }
  });

  const sourceProgress = replay ? scrollYProgress : maxProgress;
  const progressToUse = useSpring(sourceProgress, toSpringOptions(transition));

  const renderText = () => {
    if (!text) return null;

    let items: string[] = [];
    if (mode === 'character') {
      items = text.split('');
    } else if (mode === 'word') {
      items = text.match(/([\S]+|\s+)/g) || [];
    } else if (mode === 'sentence') {
      items = text.match(/[^.!?\n]+(?:[.!?]+)?|\n|\s+/g) || [];
    }

    let totalValids = 0;
    items.forEach((item) => {
      if (item.trim().length > 0) totalValids++;
    });

    let currentIdx = 0;

    return items.map((itemStr, idx) => {
      if (itemStr.trim().length === 0 && itemStr !== '\n') {
        return <React.Fragment key={`${mode}-space-${idx}`}>{itemStr}</React.Fragment>;
      }
      if (itemStr === '\n') {
        return <br key={`${mode}-br-${idx}`} />;
      }

      const start = currentIdx / Math.max(totalValids, 1);
      const end = (currentIdx + 1) / Math.max(totalValids, 1);
      currentIdx++;

      return (
        <RevealItem
          key={`${mode}-${idx}`}
          progress={progressToUse}
          range={[start, end]}
          mutedColor={mutedColor}
          primaryColor={primaryColor}
        >
          {itemStr}
        </RevealItem>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={text}
      className={`leading-tight block ${className}`}
      style={{
        ...style,
        textWrap: balance ? 'balance' : 'wrap',
        whiteSpace: 'pre-wrap',
        color: mutedColor,
      }}
    >
      <span aria-hidden="true">{renderText()}</span>
    </div>
  );
};

interface RevealItemProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
  mutedColor: string;
  primaryColor: string;
}

const RevealItem: React.FC<RevealItemProps> = ({
  children,
  progress,
  range,
  mutedColor,
  primaryColor,
}) => {
  const color = useTransform(progress, range, [mutedColor, primaryColor]);
  const opacity = useTransform(progress, range, [0.35, 1]);

  return (
    <motion.span style={{ color, opacity }} className="inline-block transition-colors">
      {children}
    </motion.span>
  );
};
