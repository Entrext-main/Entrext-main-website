"use client";

import React from 'react';

interface SceneProps {
  index: number;
}

export const JourneyScene: React.FC<SceneProps> = ({ index }) => {
  switch (index) {
    case 0:
      // Start: Dawn skyline under the clouds
      return (
        <svg viewBox="0 0 320 220" className="w-full max-w-[320px] h-auto overflow-visible select-none" fill="none">
          <line x1="20" y1="180" x2="300" y2="180" stroke="#fafafa" strokeWidth="1.2" strokeOpacity="0.15" />
          
          {/* Subtle rising dawn sun */}
          <circle cx="230" cy="75" r="22" fill="#ff4d00" fillOpacity="0.12" />
          <circle cx="230" cy="75" r="10" fill="#ff4d00" fillOpacity="0.85" />

          {/* Minimalist buildings silhouette */}
          <g stroke="#fafafa" strokeWidth="1.2" strokeOpacity="0.25">
            <rect x="50" y="125" width="22" height="55" rx="2" />
            <rect x="80" y="100" width="26" height="80" rx="2" />
            <rect x="114" y="130" width="20" height="50" rx="2" />
            <rect x="142" y="90" width="28" height="90" rx="2" />
            <rect x="178" y="115" width="24" height="65" rx="2" />
            <rect x="210" y="110" width="26" height="70" rx="2" />
            <rect x="244" y="135" width="22" height="45" rx="2" />
          </g>

          {/* Maya walking peacefully */}
          <g transform="translate(68, 150)">
            <circle cx="6" cy="4" r="3.5" fill="#fafafa" />
            <path d="M6 8 L6 18 M6 18 L3 28 M6 18 L9 28 M6 11 L12 14" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 1:
      // Q1: Hours to Outcomes (Maya's desk, AI assisting, clock replaced by outcome target)
      return (
        <svg viewBox="0 0 320 220" className="w-full max-w-[320px] h-auto overflow-visible select-none" fill="none">
          <line x1="20" y1="180" x2="300" y2="180" stroke="#fafafa" strokeWidth="1.2" strokeOpacity="0.15" />

          {/* Desk with laptop */}
          <line x1="50" y1="155" x2="160" y2="155" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="65" y1="155" x2="62" y2="180" stroke="#fafafa" strokeWidth="1.2" />
          <line x1="145" y1="155" x2="148" y2="180" stroke="#fafafa" strokeWidth="1.2" />
          <rect x="90" y="136" width="26" height="18" rx="2" stroke="#fafafa" strokeWidth="1.2" fill="#0a0a0a" />
          <line x1="86" y1="154" x2="120" y2="154" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />

          {/* Maya seated */}
          <g transform="translate(70, 128)">
            <circle cx="6" cy="6" r="4" fill="#fafafa" />
            <path d="M6 10 L6 24 M6 24 L2 34 M6 24 L10 34 M6 15 L16 22" stroke="#fafafa" strokeWidth="1.3" strokeLinecap="round" />
          </g>

          {/* Fading clock representation of hours */}
          <g transform="translate(195, 115)" opacity="0.3">
            <circle cx="0" cy="0" r="18" stroke="#fafafa" strokeWidth="1.2" />
            <line x1="0" y1="0" x2="0" y2="-10" stroke="#fafafa" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="7" y2="4" stroke="#fafafa" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Transition indicator */}
          <path d="M222 115 L242 115" stroke="#ff4d00" strokeWidth="1.2" strokeDasharray="2 2" />
          <polygon points="246,115 240,112 240,118" fill="#ff4d00" />

          {/* The Outcome delivered */}
          <g transform="translate(275, 115)">
            <circle cx="0" cy="0" r="22" stroke="#ff4d00" strokeWidth="1.4" fill="#0a0a0a" />
            <circle cx="0" cy="0" r="14" stroke="#ff4d00" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M-5 0 L-1 4 L6 -4" stroke="#ff4d00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 2:
      // Q2: The Shrinking Room & Creating Work (Fading chairs + Raj stepping through open door)
      return (
        <svg viewBox="0 0 320 220" className="w-full max-w-[320px] h-auto overflow-visible select-none" fill="none">
          <line x1="20" y1="180" x2="300" y2="180" stroke="#fafafa" strokeWidth="1.2" strokeOpacity="0.15" />

          {/* Fading corporate seats */}
          <g opacity="0.25">
            <line x1="45" y1="160" x2="65" y2="160" stroke="#fafafa" strokeWidth="1.2" />
            <line x1="55" y1="160" x2="55" y2="180" stroke="#fafafa" strokeWidth="1.2" />
            <line x1="85" y1="160" x2="105" y2="160" stroke="#fafafa" strokeWidth="1.2" />
            <line x1="95" y1="160" x2="95" y2="180" stroke="#fafafa" strokeWidth="1.2" />
          </g>

          {/* Open illuminated doorway */}
          <g transform="translate(205, 75)">
            <polygon points="0,105 40,0 70,0 110,105" fill="#ff4d00" fillOpacity="0.07" />
            <rect x="40" y="0" width="30" height="105" stroke="#fafafa" strokeWidth="1.4" fill="#0a0a0a" />
            {/* Open door panel */}
            <polygon points="40,0 22,12 22,117 40,105" stroke="#fafafa" strokeWidth="1.2" fill="#141414" />
          </g>

          {/* Raj stepping through to create work */}
          <g transform="translate(190, 138)">
            <circle cx="8" cy="6" r="4.5" fill="#fafafa" />
            <path d="M8 11 L8 28 M8 28 L14 40 M8 28 L2 40 M8 17 L17 24" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 3:
      // Q3: Sovereign Builders (Raj building and launching a first version by himself)
      return (
        <svg viewBox="0 0 320 220" className="w-full max-w-[320px] h-auto overflow-visible select-none" fill="none">
          <line x1="20" y1="180" x2="300" y2="180" stroke="#fafafa" strokeWidth="1.2" strokeOpacity="0.15" />

          {/* Desk */}
          <line x1="70" y1="160" x2="210" y2="160" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="85" y1="160" x2="82" y2="180" stroke="#fafafa" strokeWidth="1.2" />
          <line x1="195" y1="160" x2="198" y2="180" stroke="#fafafa" strokeWidth="1.2" />

          {/* Laptop */}
          <rect x="125" y="142" width="30" height="18" rx="2" stroke="#fafafa" strokeWidth="1.2" fill="#0a0a0a" />
          <line x1="120" y1="160" x2="160" y2="160" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" />

          {/* Raj building */}
          <g transform="translate(98, 132)">
            <circle cx="6" cy="6" r="4.5" fill="#fafafa" />
            <path d="M6 11 L6 26 M6 26 L2 35 M6 26 L10 35 M6 17 L18 24" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
          </g>

          {/* Radiant spark of idea above */}
          <g transform="translate(140, 95)">
            <circle cx="0" cy="0" r="14" fill="#ff4d00" fillOpacity="0.18" />
            <circle cx="0" cy="0" r="4" fill="#ff4d00" />
            <line x1="0" y1="-8" x2="0" y2="-12" stroke="#ff4d00" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="8" x2="0" y2="12" stroke="#ff4d00" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-8" y1="0" x2="-12" y2="0" stroke="#ff4d00" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="8" y1="0" x2="12" y2="0" stroke="#ff4d00" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* AI Helper entity facilitating launch */}
          <g transform="translate(230, 115)">
            <rect x="0" y="0" width="30" height="28" rx="6" stroke="#ff4d00" strokeWidth="1.3" fill="#0a0a0a" />
            <circle cx="10" cy="12" r="2" fill="#ff4d00" />
            <circle cx="20" cy="12" r="2" fill="#ff4d00" />
            <line x1="10" y1="19" x2="20" y2="19" stroke="#ff4d00" strokeWidth="1.2" strokeLinecap="round" />
            <text x="15" y="42" textAnchor="middle" fill="#a1a1aa" className="font-mono text-[8px] uppercase tracking-wider">
              V1 Live
            </text>
          </g>
        </svg>
      );

    case 4:
      // Q4: The Human Core (Two paths + judgment, ownership, range)
      return (
        <svg viewBox="0 0 320 220" className="w-full max-w-[320px] h-auto overflow-visible select-none" fill="none">
          <line x1="20" y1="180" x2="300" y2="180" stroke="#fafafa" strokeWidth="1.2" strokeOpacity="0.15" />

          {/* Maya standing at the origin of choice */}
          <g transform="translate(60, 134)">
            <circle cx="8" cy="6" r="4.5" fill="#fafafa" />
            <path d="M8 11 L8 26 M8 26 L3 38 M8 26 L13 38 M8 17 L18 23" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
          </g>

          {/* Path 1: Inside company */}
          <path d="M70 160 C120 160 140 100 230 100" stroke="#fafafa" strokeWidth="1.4" strokeDasharray="3 3" strokeOpacity="0.4" />
          <g transform="translate(245, 100)">
            <rect x="-14" y="-18" width="28" height="36" rx="2" stroke="#fafafa" strokeWidth="1.2" fill="#0a0a0a" />
            <line x1="-6" y1="-8" x2="6" y2="-8" stroke="#fafafa" strokeWidth="0.8" />
            <line x1="-6" y1="0" x2="6" y2="0" stroke="#fafafa" strokeWidth="0.8" />
            <line x1="-6" y1="8" x2="6" y2="8" stroke="#fafafa" strokeWidth="0.8" />
          </g>

          {/* Path 2: Your own */}
          <path d="M70 160 C120 160 150 160 230 160" stroke="#ff4d00" strokeWidth="1.8" />
          <g transform="translate(245, 160)">
            <circle cx="0" cy="0" r="14" stroke="#ff4d00" strokeWidth="1.5" fill="#0a0a0a" />
            <polygon points="-3,-5 6,0 -3,5" fill="#ff4d00" />
          </g>

          {/* Triad of Core Human Value */}
          <g transform="translate(150, 75)">
            <text x="0" y="0" textAnchor="middle" fill="#a1a1aa" className="font-mono text-[8px] uppercase tracking-widest">
              Judgement · Ownership · Range
            </text>
          </g>
        </svg>
      );

    case 5:
      // Q5: The Bet (Maya & Raj building and owning at Entrext)
      return (
        <svg viewBox="0 0 320 220" className="w-full max-w-[320px] h-auto overflow-visible select-none" fill="none">
          <line x1="20" y1="180" x2="300" y2="180" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />

          {/* Monument: Entrext */}
          <g transform="translate(130, 95)">
            <rect x="0" y="0" width="60" height="85" rx="3" stroke="#fafafa" strokeWidth="1.4" fill="#0a0a0a" />
            <line x1="20" y1="0" x2="20" y2="85" stroke="#fafafa" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="40" y1="0" x2="40" y2="85" stroke="#fafafa" strokeWidth="0.8" strokeDasharray="2 2" />
            <rect x="14" y="16" width="32" height="14" rx="2" fill="#141414" stroke="#ff4d00" strokeWidth="1" />
            <text x="30" y="26" textAnchor="middle" fill="#ff4d00" className="font-mono text-[7px] font-bold tracking-widest uppercase">
              ENTREXT
            </text>
          </g>

          {/* Maya (left) */}
          <g transform="translate(95, 142)">
            <circle cx="8" cy="6" r="4.5" fill="#fafafa" />
            <path d="M8 11 L8 26 M8 26 L3 38 M8 26 L13 38 M8 17 L18 22" stroke="#fafafa" strokeWidth="1.4" strokeLinecap="round" />
            <text x="8" y="50" textAnchor="middle" fill="#a1a1aa" className="font-mono text-[7.5px] uppercase">Maya</text>
          </g>

          {/* Raj (right) */}
          <g transform="translate(210, 142)">
            <circle cx="8" cy="6" r="4.5" fill="#ff4d00" />
            <path d="M8 11 L8 26 M8 26 L3 38 M8 26 L13 38 M8 17 L-2 22" stroke="#ff4d00" strokeWidth="1.4" strokeLinecap="round" />
            <text x="8" y="50" textAnchor="middle" fill="#ff4d00" className="font-mono text-[7.5px] uppercase font-semibold">Raj</text>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
