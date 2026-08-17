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
  { name: "Hitender", division: "GROWTH", image: "/members/growth/hitender.webp" },
  { name: "Manthan",  division: "TECH",   image: "/members/tech/manthan.webp" },
  { name: "Kritika",  division: "GROWTH", image: "/members/growth/kritika.webp" },
  { name: "Garv",     division: "TECH",   image: "/members/tech/garv.webp" },
  { name: "Disha",    division: "TECH",   image: "/members/tech/disha.webp" },
  { name: "Janet",    division: "GROWTH", image: "/members/growth/janet.webp" },
  { name: "Surya",    division: "TECH",   image: "/members/tech/surya.webp" },
  { name: "Aryan",    division: "TECH",   image: "/members/tech/aryan.webp" },
  { name: "Saumya",   division: "TECH",   image: "/members/tech/saumya.webp" },
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
    name: "Eleven",
    desc: "Entrext's own operating system — the internal infrastructure that runs how we build, ship, and scale every product in the studio.",
    id: "E_02",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  {
    name: "Arctic",
    desc: "Started as our internal infra layer. Now a standalone CMS, built in-house and open for anyone to run their own content stack.",
    id: "A_03",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
  {
    name: "Match",
    desc: "Matchmaking algorithm pairing founders through 20+ alignment scorings. Find your co-founder, or find each other — we facilitate either way.",
    id: "MT_04",
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
      "Ownership consolidated under Ikshit",
      "Hitender joined during a key growth phase",
      "Rebranded to Monkfeed, shifting toward faster execution"
    ],
    signal: "The easiest way to collect, manage, and prioritize customer feedback — built for product teams who care about their users' voice.",
    color: "text-[#ff4d00]",
    glow: "shadow-[#ff4d00]/20",
    href: "https://monkfeed.com/",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Herth",
    category: "Hyper-Local Networking Platform",
    builders: "Garv, Kritika",
    status: "Released Jan 2026",
    journey: [
      "Started with supporting founders",
      "Evolved into an ecosystem-focused layer",
      "Focused on organic women-led networking"
    ],
    signal: "A hyper-local networking platform for women entrepreneurs to discover, connect, learn, and collaborate with each other.",
    color: "text-pink-400",
    glow: "shadow-pink-500/20",
    href: "https://herth.in/",
    preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Singularity",
    category: "Gaming Studio",
    builders: "Aryan, Shruthi",
    status: "Released December 2025",
    journey: [
      "Started by creating intellectual games with Aryan, our founding member",
      "Built a game marketplace with Shruthi, our founding designer",
      "Now building a studio for intellectual, unconventional games"
    ],
    signal: "A gaming studio to create and discover amazing, unconventional games — all in one place.",
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
    href: "https://singularity-y.com/"
  },
  {
    id: "04",
    name: "STAGE",
    category: "Visual Feedback & QA Platform",
    builders: "Saumya, Disha",
    status: "Released January 2026",
    journey: [
      "Started by Saumya as the primary partner, originally called Pexel Mark",
      "Disha joined as the operating partner and refined it with Entrext",
      "Now a feedback layer connecting developers, agencies, and clients"
    ],
    signal: "Instantly share secure, interactive review links to collect visual feedback, annotations, and QA bug reports directly on live web pages. The fastest way to sign off website changes.",
    color: "text-amber-400",
    glow: "shadow-amber-500/20",
    href: "https://stage.entrext.com/"
  },
  {
    id: "05",
    name: "Secretroom",
    category: "Anonymous Chat Platform",
    builders: "Komal",
    status: "Released February 2026",
    journey: [
      "First-ever Entrext product built in under 24 hours",
      "Komal joined as the solo founding engineer to build it",
      "Now figuring out the right distribution"
    ],
    signal: "Free anonymous chat platform.",
    color: "text-rose-400",
    glow: "shadow-rose-500/20",
    href: "https://secretroom.entrext.in/"
  },
  {
    id: "06",
    name: "Soho Space",
    category: "Contest-Based Hiring Platform",
    builders: "Disha, Charan",
    status: "Early Access — Validating Demand",
    journey: [
      "Started as an equity-based founder hiring platform",
      "Pivoted into a performance-driven, contest-based job platform",
      "Now validating demand, with Disha & Charan as founding members"
    ],
    signal: "Optimizing the hiring space by building something needful. Still in its early stage.",
    color: "text-teal-400",
    glow: "shadow-teal-500/20",
    href: "https://sohospace.entrext.com/"
  }
];

export const FAQ_DATA = [
  {
    category: "Ownership & Equity",
    id: "OWN-01",
    questions: [
      { q: "What equity do I receive?", a: "Primary Partner → 20% fixed + 5% performance-based, up to 25% | Secondary Partner → 20% fixed + 5% performance-based, up to 25% | Solo Founder → 50% direct equity" },
      { q: "Do I own the product?", a: "Yes — together. You hold founder equity, while Entrext holds studio equity. Founders also receive a board seat." },
      { q: "What happens if I leave?", a: "A 6-month cliff applies, followed by 4–5 years of vesting. You retain only the equity you have earned." },
      { q: "Can my equity be diluted?", a: "Yes, if necessary. We are a bootstrapped-first studio, but if future funding or strategic needs require dilution, it will be discussed transparently with all founders beforehand." }
    ]
  },
  {
    category: "Money & Resources",
    id: "CAP-02",
    questions: [
      { q: "Do you fund the product?", a: "Not upfront by default. You build from zero with a frugal, resource-first approach. If we see strong potential, Entrext may provide initial capital, or we can explore strategic fundraising together if needed to accelerate the product." },
      { q: "Who pays for tools, infrastructure, and marketing?", a: "Entrext covers the core costs — tools, infrastructure, and marketing. We are organic-first, prioritising content, distribution, and brand over paid advertising." },
      { q: "When can I expect returns?", a: "There is no fixed timeline. The goal is to launch within a week, validate quickly, and reach the first paying customers as early as possible." },
      { q: "Is there a joining fee or investment required?", a: "No. Zero joining fee. Zero upfront investment." }
    ]
  },
  {
    category: "Selection & Entry",
    id: "SEL-03",
    questions: [
      { q: "How do I apply?", a: "Through the application form or a referral from an existing Entrext founder. That's it." },
      { q: "What kind of founders do you accept?", a: "Serious, committed builders. Full-time or part-time both work. Experience matters less than hard work, resilience, commitment, and relentlessness." },
      { q: "How competitive is it?", a: "One shot per person, per year. We keep it intentionally limited to 5 Primary and 5 Secondary Partner slots." },
      { q: "Primary or Secondary — how do I choose?", a: "Primary: Start from zero, lead the product, take higher ownership and higher accountability. Secondary: Join an already-validated product, take less initial risk, and build alongside an existing founder." }
    ]
  },
  {
    category: "Operations",
    id: "OPS-04",
    questions: [
      { q: "What does day-to-day look like?", a: "We meet roughly twice a week, usually every alternate day when needed. Everything else stays flexible, with additional meetings only when the product requires them." },
      { q: "Can I bring my own idea?", a: "Yes — but only as a Primary Partner. You can bring your own hypothesis, or choose and refine one from Entrext's idea bank." },
      { q: "How quickly can we launch?", a: "Under a week. ~1 month to validate. We prioritise velocity, learning, and real users over perfection." },
      { q: "How many products do you run?", a: "Around 5 products per year. We stay intentionally focused rather than building at scale for the sake of it." }
    ]
  }
];

// Shared by /labs and /pro — same underlying Selection & Entry + Operations
// questions from FAQ_DATA, surfaced locally so founders don't have to leave
// the page they're reading to find them.
export const PARTNER_FAQ = FAQ_DATA
  .filter((cat) => cat.id === "SEL-03" || cat.id === "OPS-04")
  .flatMap((cat) => cat.questions);

export const MATCH_FAQ = [
  {
    q: "What if the match doesn't work?",
    a: "A match isn't a permanent commitment. We have a 30-day alignment period where both founders work together and understand each other's working style, communication, strengths, expectations, and conviction. This period allows both sides to evaluate the partnership. If it doesn't work, that's okay. We learn from it and can look for a better fit."
  },
  {
    q: "What happens if the match works?",
    a: "If both founders feel the partnership is right, you move forward together. Roles and responsibilities are defined around each person's strengths, with the goal of building one complementary founding team."
  },
  {
    q: "How does ownership work?",
    a: "Our ideal structure is equal ownership between the founding partners — Primary: 20% fixed + 5% performance, Secondary: 20% fixed + 5% performance. The exact structure can be discussed depending on the opportunity, timing, and contribution. We believe the percentage difference matters far less than having the right person building the company with you for the long term."
  },
  {
    q: "Do I need a product to get matched?",
    a: "No. You can register before an opportunity exists. We look at your skills, interests, behaviour, working style, ambition, and areas of conviction to identify people who could complement you. The opportunity can emerge after the right founders come together."
  },
  {
    q: "Can I join an existing product?",
    a: "Usually, no. Match is a separate initiative focused on finding the right founder-to-founder fit, rather than placing people into existing Labs products. The main exception is when a Secondary Partner match in Labs doesn't work out with the Primary Partner — in that case, Match may be used to find a better fit for that existing opportunity. Otherwise, the person comes first and the opportunity can come next."
  },
  {
    q: "Can I bring my own co-founder?",
    a: "Yes. You don't have to use the matching system if you already know who you want to build with. Entrext can still facilitate the alignment period and help both founders understand the opportunity, roles, and terms."
  },
  {
    q: "What if we disagree after matching?",
    a: "That's exactly what the 30-day alignment period is for. You aren't expected to agree on everything. You're expected to discover whether you can disagree, solve problems, communicate, and build together."
  },
  {
    q: "What if we need a third founder?",
    a: "The default is to build with the two-person founding team. A third founder is considered only when the company genuinely needs another critical skill set. If that happens, ownership and terms are discussed based on the person's role, contribution, timing, and the company's needs."
  },
  {
    q: "Is the match guaranteed to work?",
    a: "No. The matching system helps identify potential fit. It doesn't replace actually working together. That's why we have the 30-day alignment period. We find the potential fit. You prove the partnership."
  },
  {
    q: "What are we actually matching on?",
    a: "Not just skills. We look across skill set, interests, working style, behaviour, ambition, availability, conviction, communication, and complementarity. The goal isn't to find someone identical to you. It's to find someone who completes you."
  }
];
