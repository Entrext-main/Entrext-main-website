/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Users, Zap, Mail } from "lucide-react";

export const SEVEN_CS = [
  { title: "Commitment", desc: "All in", id: "01" },
  { title: "Communication", desc: "Radical clarity", id: "02" },
  { title: "Customer", desc: "Build what they need", id: "03" },
  { title: "Collaboration", desc: "Win together", id: "04" },
  { title: "Consistency", desc: "Execute daily", id: "05" },
  { title: "Continuous Feedback", desc: "Iterate fast", id: "06" }
];

export const DIVISIONS = [
  {
    id: "LABS",
    title: "Entrext Labs",
    tagline: "The Experimental Build Space",
    desc: "An experimental space where growth thinkers and technical builders rapidly ship one-feature products and validate ideas in public.",
    subDesc: "Once validated, the right “opposite partner” joins to scale the product into a larger system, suite, or standalone business.",
    status: "BUILD_ACTIVE",
    color: "border-white/10"
  },
  {
    id: "PRO",
    title: "Entrext Pro",
    tagline: "High-Conviction Matching",
    desc: "Where validated ideas meet committed co-founders. Matching built around conviction, not convenience.",
    subDesc: "Connecting technical rigor with growth conviction to build resilient, founder-led systems.",
    status: "NODE_READY",
    color: "border-[#ff4d00]/30"
  },
  {
    id: "EDGE",
    title: "Edge",
    tagline: "Performance Frameworks",
    desc: "Games that make you better. Hyper-creative, skill-elevating experiences designed for focus, growth, and execution.",
    subDesc: "Moving from surface execution to infra thinking through interactive paradigm shifts.",
    status: "IP_LIVE",
    color: "border-white/10"
  }
];

export type Division = "TECH" | "GROWTH";

export interface Member {
  name: string;
  division: Division;
  /** Path under /public, or null to render the initial-letter fallback. */
  image: string | null;
}

// Interleaved Tech/Growth so the marquee feels mixed rather than blocky.
// Photos are WebP (compressed via scripts/compress-photos.mjs).
export const MEMBERS: Member[] = [
  { name: "Ikshit",   division: "TECH",   image: "/members/tech/ikshit.webp" },
  { name: "Hitender", division: "GROWTH", image: "/members/growth/hitender.webp" },
  { name: "Taha",     division: "TECH",   image: "/members/tech/taha.webp" },
  { name: "Aisha",    division: "GROWTH", image: "/members/growth/aisha.webp" },
  { name: "Manthan",  division: "TECH",   image: "/members/tech/manthan.webp" },
  { name: "Kritika",  division: "GROWTH", image: "/members/growth/kritika.webp" },
  { name: "Garv",     division: "TECH",   image: "/members/tech/garv.webp" },
  { name: "Ranim",    division: "GROWTH", image: "/members/growth/ranim.webp" },
  { name: "Disha",    division: "TECH",   image: "/members/tech/disha.webp" },
  { name: "Youssef",  division: "GROWTH", image: "/members/growth/youssef.webp" },
  { name: "Anurag",   division: "TECH",   image: "/members/tech/anurag.webp" },
  { name: "Janet",    division: "GROWTH", image: "/members/growth/janet.webp" },
  { name: "Ashish",   division: "TECH",   image: "/members/tech/ashish.webp" },
  { name: "Mohit",    division: "TECH",   image: "/members/tech/mohit.webp" },
  { name: "Surya",    division: "TECH",   image: "/members/tech/surya.webp" },
  { name: "Tirth",    division: "TECH",   image: "/members/tech/tirth.webp" },
  { name: "Akash",    division: "TECH",   image: null },
  { name: "Aryan",    division: "TECH",   image: "/members/tech/aryan.webp" },
  { name: "Komal",    division: "TECH",   image: "/members/tech/komal.webp" },
];

export const TECHS = [
  { 
    name: "Monkfeed", 
    desc: "Sharper positioning & ownership compression for builders. From chaos to clarity.", 
    id: "M_01",
    color: "text-[#ff4d00]",
    bg: "bg-[#ff4d00]/5",
  },
  { 
    name: "Arctic", 
    desc: "High-performance infrastructure layer for rapid deployment and ultra-lean operations.", 
    id: "A_02",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  { 
    name: "Automailer", 
    desc: "Automated distribution & engagement engine. Scale your reach without the overhead.", 
    id: "AM_03",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
  { 
    name: "Introbuddy", 
    desc: "Intent-driven network connection & sync framework for meaningful interaction.", 
    id: "IB_04",
    color: "text-purple-500",
    bg: "bg-purple-500/5",
  }
];

export const LAYERS = [
  { 
    id: "COS",
    title: "Core Operating System", 
    label: "The 7 C's", 
    keywords: ["Commitment", "Communication", "Customers", "Collaboration", "Community", "Consistency", "Feedback"],
    color: "bg-[#ff4d00]",
    border: "border-[#ff4d00]",
    details: "The DNA of everything we build."
  },
  { 
    id: "CULTURE",
    title: "Culture Layer", 
    label: "Multiplier", 
    keywords: ["Transparency", "Empathy", "Trust", "Storytelling", "Ambition"],
    color: "bg-white",
    border: "border-black",
    details: "How we scale beyond code."
  },
  { 
    id: "PRODUCT",
    title: "Product Layer", 
    label: "What Compounds", 
    keywords: ["Simplicity", "Iteration", "Validation", "Experimentation", "Scalability", "Quality"],
    color: "bg-zinc-200",
    border: "border-transparent",
    details: "The output of our conviction."
  },
  { 
    id: "EXECUTION",
    title: "Execution Layer", 
    label: "Speed + Output", 
    keywords: ["Ownership", "Velocity", "Discipline", "Action", "Execution", "Grit"],
    color: "bg-white",
    border: "border-black/10",
    details: "The machinery of velocity."
  },
  { 
    id: "FOUNDER",
    title: "Founder Layer", 
    label: "Internal Engine", 
    keywords: ["Curiosity", "Belief", "Resilience", "Courage", "Accountability", "Focus"],
    color: "bg-black",
    text: "text-white",
    border: "border-white/20",
    details: "Where it all begins."
  },
];

export const PRODUCTS = [
  {
    id: "01",
    name: "Monkfeed",
    category: "Customer Feedback SaaS",
    builders: "Hitender, Ikshit",
    status: "Released April 2026",
    journey: [
      "Consolidated ownership to Ikshit",
      "Hitender joined at inflection",
      "Rebranded to Monkfeed // Velocity shift"
    ],
    signal: "Customer feedback widget for SaaS and mobile apps. Turn feedback into product decisions faster.",
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Herth",
    category: "Hyper-Local Commerce",
    builders: "Garv, Kritika",
    status: "Released Jan 2026",
    journey: [
      "Intent around founder support",
      "Evolved into ecosystem layer",
      "Focus: organic women-led commerce"
    ],
    signal: "A platform where women entrepreneurs become easier to discover, trust, and choose — from their own city to the rest of India. Focus: hyper-local businesses.",
    color: "text-pink-400",
    glow: "shadow-pink-500/20",
    preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Guava",
    category: "Travel Community",
    builders: "Ikshit, Ranim",
    status: "Released March 2026",
    journey: [
      "Started as AI product cluster",
      "Deep validation cycles implemented",
      "Pivoted into travel community"
    ],
    signal: "In a world full of travelers, why not have a planet built for travelers?",
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
    preview: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Noa",
    category: "AI Prompt Discovery",
    builders: "Taha",
    status: "Released July 2025",
    journey: [
      "Rethinking the interaction layer",
      "Building system-wide protocols",
      "Infra thinking over execution"
    ],
    signal: "A new way to discover prompts, compare analyses, and figure out the best results.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    preview: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "Companion",
    category: "Human Connection",
    builders: "Foundry Core",
    status: "Released Feb 2026",
    journey: [
      "Abandoned commoditized use cases",
      "Shifted toward interaction frameworks",
      "Rebuilt around intent-driven sync"
    ],
    signal: "A new way to find people who truly listen to you.",
    color: "text-[#ff4d00]",
    glow: "shadow-[#ff4d00]/20",
    preview: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2098&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Knowx",
    category: "Co-founder Matchmaking",
    builders: "Manthan + Team",
    status: "Released Jan 2024",
    journey: [
      "Survived founding partner churn",
      "Direction maintained through instability",
      "Resilient execution model found"
    ],
    signal: "Tinder for co-founders.",
    color: "text-zinc-400",
    glow: "shadow-zinc-500/20",
    preview: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  }
];

export const FAQ_DATA = [
  {
    category: "Ownership & Equity",
    id: "OWN-01",
    questions: [
      { q: "What equity split do I get?", a: "Labs Primary → up to 12% | Labs Secondary → up to 8% | Pro → 10% each (both partners, flat) | Solo founder (both skills) → 20%, no split" },
      { q: "Do I own my product or does Entrext own it?", a: "Co-ownership. You get a board seat. Entrext holds studio equity, you hold founder equity." },
      { q: "What happens if I leave?", a: "6-month cliff, 4–5 year vesting. You keep only what you've earned." },
      { q: "Can I be diluted?", a: "Not the plan. Bootstrapped-first studio. Won't happen without your knowledge." }
    ]
  },
  {
    category: "Money & Resources",
    id: "CAP-02",
    questions: [
      { q: "Do you fund the product?", a: "No one funds it upfront. You build from zero — frugality is the philosophy." },
      { q: "Who pays for tools, infra, marketing?", a: "Entrext covers all of it. Growth is organic-first — content and brand over paid ads." },
      { q: "When do I see returns?", a: "Within a month if you're serious. Launch in under a week, first paying customers follow fast." },
      { q: "Is there a joining cost?", a: "Only if part-time — and it's fully refunded once the product scales. Full-time founders pay nothing." }
    ]
  },
  {
    category: "Selection & Entry",
    id: "SEL-03",
    questions: [
      { q: "How do I apply?", a: "Form or referral from an existing Entrext founder. That's it." },
      { q: "What founders do you accept?", a: "Serious, full-time. Experience doesn't matter. Having a Plan B means Plan A won't work." },
      { q: "How competitive?", a: "One shot per person per year. 5 Labs teams + 5 Pro teams = 10 spots annually." },
      { q: "Primary or Secondary — how do I choose?", a: "Primary = your idea, you lead, higher reward, higher accountability. Secondary = join proven momentum, lower risk, real stake." }
    ]
  },
  {
    category: "Operations",
    id: "OPS-04",
    questions: [
      { q: "Day-to-day?", a: "Meets every alternate day. Everything else is flexible." },
      { q: "My idea or Entrext's?", a: "Labs → your idea. Pro → Entrext's validated idea." },
      { q: "Time to launch?", a: "Under a week to ship. ~1 month to validate. Velocity over perfection." },
      { q: "How many products running?", a: "Pro: 5/year. Labs: 15–20/year. n/edge (games marketplace): 20–40 new games/year." }
    ]
  }
];
