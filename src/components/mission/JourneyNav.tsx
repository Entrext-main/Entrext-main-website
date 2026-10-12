"use client";

import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Chapter, TOTAL_QUESTIONS } from './chapters';

interface JourneyNavProps {
  currentChapter: Chapter;
  totalChapters: number;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  onJumpToStart?: () => void;
  scrollProgress?: number;
}

export const JourneyNav: React.FC<JourneyNavProps> = ({
  currentChapter,
  isAudioActive,
  onToggleAudio,
}) => {
  const barRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      {/* Hairline progress along the bottom edge (site navbar owns the top) */}
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-zinc-700/30 z-40 pointer-events-none">
        <div ref={barRef} className="h-full w-full origin-left bg-[#ff4d00]" style={{ transform: 'scaleX(0)' }} />
      </div>

      {/* Chapter counter + ambient sound */}
      <div className="fixed bottom-5 left-5 sm:left-8 z-40 flex items-center gap-3 rounded-full bg-[#000000]/80 backdrop-blur-md border border-zinc-800/60 pl-4 pr-1.5 py-1">
        <span className="text-xs font-mono text-zinc-400 tracking-widest">
          {currentChapter.num === 'Start' ? 'THE PREMISE' : `${currentChapter.num} / ${String(TOTAL_QUESTIONS).padStart(2, '0')}`}
        </span>
        <button
          onClick={onToggleAudio}
          className={`p-1.5 transition-colors cursor-pointer rounded-full hover:bg-zinc-800/40 ${
            isAudioActive ? 'text-[#ff4d00]' : 'text-zinc-500 hover:text-zinc-300'
          }`}
          title={isAudioActive ? 'Mute atmosphere' : 'Play atmosphere'}
          aria-label="Toggle ambient atmosphere"
        >
          {isAudioActive ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </>
  );
};
