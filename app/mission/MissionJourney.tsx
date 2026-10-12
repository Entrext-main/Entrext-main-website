"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CHAPTERS, Chapter } from '@/src/components/mission/chapters';
import { CloudAtmosphere } from '@/src/components/mission/CloudAtmosphere';
import { JourneyNav } from '@/src/components/mission/JourneyNav';
import { JourneyWaypointRail } from '@/src/components/mission/JourneyWaypointRail';
import { JourneySection } from '@/src/components/mission/JourneySection';
import { MissionStatementHero } from '@/src/components/mission/MissionStatementHero';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { ambientSound } from '@/src/utils/missionAudio';

export default function MissionJourney() {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Smooth jump to chapter
  const scrollToChapter = useCallback((index: number) => {
    const target = sectionsRef.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName.toLowerCase())) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        if (activeChapterIndex < CHAPTERS.length - 1) {
          scrollToChapter(activeChapterIndex + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        if (activeChapterIndex > 0) {
          scrollToChapter(activeChapterIndex - 1);
        }
      } else if (e.key.toLowerCase() === 'm') {
        const active = ambientSound.toggle();
        setIsAudioActive(active);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeChapterIndex, scrollToChapter]);

  // Active chapter detection: observe a thin band around 45% of the viewport (no per-scroll work)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionsRef.current.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveChapterIndex(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -54% 0px' }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleToggleAudio = () => {
    const active = ambientSound.toggle();
    setIsAudioActive(active);
  };

  const currentChapter: Chapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return (
    <div className="bg-black">
      <Navbar />
      {/* black band so the site navbar keeps its dark look above the light journey */}
      <div aria-hidden className="h-28 md:h-32" />
    <div className="mission-page relative min-h-screen bg-[#000000] text-white selection:bg-[#ff4d00]/20 selection:text-[#ff4d00]">
      {/* Drifting Clouds & Light Atmosphere */}
      <CloudAtmosphere
        activeChapterIndex={activeChapterIndex}
      />

      {/* Ultra-Minimal Header */}
      <JourneyNav
        currentChapter={currentChapter}
        totalChapters={CHAPTERS.length}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* Quiet Waypoint Dots */}
      <JourneyWaypointRail
        chapters={CHAPTERS}
        activeChapterIndex={activeChapterIndex}
        onSelectChapter={scrollToChapter}
      />

      {/* Clean Section Journey */}
      <main className="relative z-10 w-full snap-y snap-mandatory">
        {CHAPTERS.map((chapter, idx) => (
          <div
            key={chapter.id}
            ref={(el) => { sectionsRef.current[idx] = el; }}
          >
            {idx === 0 ? (
              <MissionStatementHero
                chapter={chapter}
                isActive={activeChapterIndex === 0}
                onNext={() => scrollToChapter(1)}
              />
            ) : (
              <JourneySection
                chapter={chapter}
                isActive={activeChapterIndex === idx}
                onNext={() => {
                  if (idx < CHAPTERS.length - 1) {
                    scrollToChapter(idx + 1);
                  } else {
                    scrollToChapter(0);
                  }
                }}
                onPrev={() => {
                  scrollToChapter(idx - 1);
                }}
                isFirst={false}
                isLast={idx === CHAPTERS.length - 1}
              />
            )}
          </div>
        ))}
      </main>

    </div>
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
