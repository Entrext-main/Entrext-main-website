"use client";

import React from 'react';
import { Chapter } from './chapters';

interface WaypointRailProps {
  chapters: Chapter[];
  activeChapterIndex: number;
  onSelectChapter: (index: number) => void;
}

export const JourneyWaypointRail: React.FC<WaypointRailProps> = ({
  chapters,
  activeChapterIndex,
  onSelectChapter,
}) => {
  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3 pointer-events-auto select-none">
      {chapters.map((ch) => {
        const isActive = ch.index === activeChapterIndex;
        return (
          <button
            key={ch.id}
            onClick={() => onSelectChapter(ch.index)}
            className="p-1 focus-visible:outline-none cursor-pointer group"
            aria-label={`Jump to chapter ${ch.num}`}
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-1.5 h-5 bg-[#ff4d00]'
                  : 'w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-300'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};
