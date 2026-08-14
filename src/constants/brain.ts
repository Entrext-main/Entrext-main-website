export type BrainTopicGroup = {
  title: string;
  items: string[];
};

export type BrainSection = {
  slug: string;
  number: string;
  icon: "Rocket" | "Brain" | "Users" | "HardHat" | "TrendingUp" | "Cpu" | "Settings" | "Scale" | "BookOpen" | "FlaskConical" | "Wrench";
  title: string;
  purpose: string;
  description: string;
  groups: BrainTopicGroup[];
};

export const BRAIN_SECTIONS: BrainSection[] = [
  {
    slug: "start-here",
    number: "00",
    icon: "Rocket",
    title: "Start Here",
    purpose: "Spend 30–60 minutes here and understand the entire system.",
    description:
      "The most important section for anyone new. If you join Entrext tomorrow, this is where you start.",
    groups: [
      {
        title: "Pages",
        items: [
          "What is Entrext?",
          "How Entrext Works",
          "Who Does What?",
          "The Entrext Journey",
          "If You Only Read 10 Things",
          "Entrext Vocabulary",
        ],
      },
    ],
  },
  {
    slug: "entrext",
    number: "01",
    icon: "Brain",
    title: "Entrext",
    purpose: "What do we believe?",
    description: "The Entrext philosophy — mission, culture, how we think, and founder philosophy.",
    groups: [
      {
        title: "About Entrext",
        items: [
          "Mission & Vision",
          "What we are",
          "What we aren't",
          "Our model",
          "Our ecosystem",
          "Why Entrext exists",
        ],
      },
      {
        title: "Culture",
        items: ["The 5 C's", "Commitment", "Communication", "Customers", "Collaboration", "Community"],
      },
      {
        title: "How We Think",
        items: [
          "Validate before building",
          "Unscalable first",
          "Behaviour > opinions",
          "Customer first",
          "Speed matters",
          "Distribution matters",
          "Revenue is feedback",
          "Don't build for yourself",
          "Pivot when evidence demands it",
          "Ownership mindset",
        ],
      },
      {
        title: "Founder Philosophy",
        items: [
          "What makes a good founder?",
          "What does ownership mean?",
          "What does accountability mean?",
          "How should founders make decisions?",
          "How should founders handle failure?",
        ],
      },
      {
        title: "Code of Conduct",
        items: ["The Entrext Code of Conduct"],
      },
    ],
  },
  {
    slug: "people-partners",
    number: "02",
    icon: "Users",
    title: "People & Partners",
    purpose: "Who are the people inside Entrext, and how do they work together?",
    description: "Partnership types, roles, and how a founding team actually fits together.",
    groups: [
      {
        title: "Partnership",
        items: [
          "Partnership Model",
          "Primary Partner",
          "Secondary Partner",
          "Entrext Team: Tech, Growth, Product, Operations, Founder's Office",
          "How Partners Work Together",
        ],
      },
      {
        title: "Founder",
        items: [
          "Founder mindset",
          "Founder responsibilities",
          "Founder expectations",
          "Founder communication",
          "Founder decision-making",
          "Founder accountability",
        ],
      },
      {
        title: "Co-Founder",
        items: [
          "Do I need a co-founder?",
          "What should I look for?",
          "Founder scorecard",
          "Founder compatibility",
          "Technical vs Growth co-founder",
          "Red flags",
          "Founder conflict",
          "Equity conversations",
        ],
      },
    ],
  },
  {
    slug: "building-a-venture",
    number: "03",
    icon: "HardHat",
    title: "Building a Venture",
    purpose: "The actual Entrext machine — the stage-by-stage system every venture moves through.",
    description:
      "Thesis → Discovery → Validation → Proof of Demand → MVP → First Customers → 7-Star Experience → Pivot → $10K MRR.",
    groups: [
      {
        title: "Stage 0 — Find the Thesis",
        items: ["What is a Thesis?", "Finding the Right Thesis", "Thesis Sources", "Market & Problem Selection", "Thesis Scorecard"],
      },
      {
        title: "Stage 1 — Discovery",
        items: ["What is Customer Discovery?", "Who Should We Talk To?", "The Mom Test", "Pain Frequency & Severity", "ICP Refinement"],
      },
      {
        title: "Stage 2 — Validation",
        items: ["What is Validation?", "Validation Framework", "What Counts as Evidence?", "Validation Scorecard", "When to Move Forward or Kill"],
      },
      {
        title: "Stage 3 — Proof of Demand",
        items: ["First 100", "Outreach, Demo, Trial", "Usage, Retention, Payment, Referral", "Demand Ladder"],
      },
      {
        title: "Stage 4 — Uncap the Product",
        items: ["What is (and isn't) an MVP?", "Concierge & Wizard of Oz MVP", "Manual Before Automated", "MVP Checklist", "Launch"],
      },
      {
        title: "Stage 5 — First Customers",
        items: ["First 10 / 25 / 50 / 100", "Founder-Led Sales", "Customer Onboarding & Success", "Feedback Loops"],
      },
      {
        title: "Stage 6 — 7-Star Experience",
        items: ["Activation, Retention, Advocacy", "Community", "Churn"],
      },
      {
        title: "Stage 7 — Pivot",
        items: ["When to Pivot (and When Not To)", "Types of Pivots", "Pivot Decision Framework"],
      },
      {
        title: "Stage 8 — $10K MRR",
        items: ["$0 → $1K → $5K → $10K", "Sales, Retention, Pricing, Growth, Hiring, Unit Economics"],
      },
    ],
  },
  {
    slug: "growth-sales",
    number: "04",
    icon: "TrendingUp",
    title: "Growth & Sales",
    purpose: "The journey tells you when. This section tells you how.",
    description: "Separated from the venture-building stages — this is the practical playbook.",
    groups: [
      {
        title: "Sales",
        items: ["Founder-led sales", "Discovery call, demo, proposal, follow-up", "Closing, objections, negotiation", "Pricing", "Enterprise sales"],
      },
      {
        title: "Prospecting",
        items: ["ICP", "Lead generation", "Buying signals", "Outreach: cold email, LinkedIn, communities"],
      },
      {
        title: "Marketing",
        items: ["Positioning & messaging", "Content, social, SEO, AEO / AI SEO", "PR", "Case studies", "Community"],
      },
      {
        title: "Growth",
        items: ["Acquisition, activation, retention, referral, revenue", "Growth loops", "Experimentation & metrics"],
      },
    ],
  },
  {
    slug: "product-tech",
    number: "05",
    icon: "Cpu",
    title: "Product & Tech",
    purpose: "If Entrext builds technology ventures, this needs to be a major section.",
    description: "How we design, build, and ship — product thinking, engineering standards, and AI.",
    groups: [
      {
        title: "Product",
        items: ["Product thinking & discovery", "PRD, user stories, user flows", "UX / UI", "Feature prioritisation", "Roadmap & metrics"],
      },
      {
        title: "Tech",
        items: ["How we build, tech stack, architecture", "Git/GitHub, dev workflow, code review", "Testing, deployment, monitoring", "Security & documentation"],
      },
      {
        title: "AI",
        items: ["AI-first thinking", "When to use AI", "AI agents & prompting", "LLMs, RAG, evaluations", "AI costs, security, product design"],
      },
      {
        title: "Internal Tech Standards",
        items: ["How should a new Entrext product be technically set up?"],
      },
    ],
  },
  {
    slug: "operations",
    number: "06",
    icon: "Settings",
    title: "Operations",
    purpose: "How do we actually operate every day?",
    description: "Communication norms, meeting cadence, SOPs, and the tool stack.",
    groups: [
      {
        title: "Communication",
        items: ["WhatsApp, email, team groups", "Updates & escalations", "Documentation"],
      },
      {
        title: "Meetings",
        items: ["Weekly meetings", "Venture, team & founder reviews", "Growth & product reviews"],
      },
      {
        title: "SOPs",
        items: ["Onboarding & offboarding", "Access & accounts", "Expenses, reporting, approvals"],
      },
      {
        title: "Tools",
        items: ["The Entrext Tool Stack"],
      },
    ],
  },
  {
    slug: "equity-legal",
    number: "07",
    icon: "Scale",
    title: "Equity & Legal",
    purpose: "Made very structured — equity, agreements, and legal.",
    description: "The cap table, vesting, agreements, and the legal scaffolding behind every venture.",
    groups: [
      {
        title: "Equity",
        items: ["Why equity? Earned equity", "Cap table", "Primary / Secondary / Entrext equity", "Performance equity", "Dilution, vesting, cliff, ESOP", "Spin-off equity"],
      },
      {
        title: "Agreements",
        items: ["NDA", "IP Assignment", "Founding Partner Agreement", "Secondary Partner Agreement"],
      },
      {
        title: "Legal",
        items: ["Company structure & IP", "Confidentiality & privacy", "Data, contracts, compliance", "Trademark & spin-off"],
      },
    ],
  },
  {
    slug: "knowledge",
    number: "08",
    icon: "BookOpen",
    title: "Knowledge",
    purpose: "How we think about building companies — mental models, not operational docs.",
    description: "The Entrext school of thought.",
    groups: [
      {
        title: "Founder",
        items: ["Founder mindset, ownership, discipline", "Speed, resilience, decision making"],
      },
      {
        title: "Product",
        items: ["Product thinking, customer obsession", "Simplicity, MVP thinking"],
      },
      {
        title: "Growth",
        items: ["Distribution, sales, content, retention"],
      },
      {
        title: "Business",
        items: ["Economics, pricing, hiring, equity"],
      },
    ],
  },
  {
    slug: "case-studies",
    number: "09",
    icon: "FlaskConical",
    title: "Case Studies & Learnings",
    purpose: "Not just what we believe — what actually happened.",
    description: "Every venture gets a page. Every failed experiment gets documented, too.",
    groups: [
      {
        title: "Every Venture Gets a Page",
        items: [
          "Overview: founder, partner, thesis, ICP, status",
          "Journey: discovery → validation → MVP → launch → growth → pivot",
          "Learnings: what worked, what didn't, what we'd do differently",
        ],
      },
      {
        title: "Failure Database",
        items: [
          "What we believed → what we did → what happened",
          "Why it failed, what we missed",
          "What future teams should know",
        ],
      },
    ],
  },
  {
    slug: "templates-tools",
    number: "10",
    icon: "Wrench",
    title: "Templates & Tools",
    purpose: "The action layer — come here when you need to do something.",
    description: "Turn knowledge into checklists, scorecards, and repeatable tools.",
    groups: [
      {
        title: "Founder & Thesis",
        items: ["Founder / co-founder scorecard", "Thesis template & scorecard"],
      },
      {
        title: "Validation & Demand",
        items: ["Customer interview & the Mom Test", "Validation tracker", "First 100 tracker, outreach template, demo script"],
      },
      {
        title: "Product & Sales",
        items: ["PRD, MVP checklist, product brief", "Sales script, discovery script, proposal"],
      },
      {
        title: "Growth & Hiring",
        items: ["Growth experiment, content & campaign brief", "JD, interview scorecard, candidate evaluation"],
      },
      {
        title: "Operations & Finance",
        items: ["Weekly update, venture review, postmortem", "MRR calculator, CAC, LTV, runway, dilution"],
      },
    ],
  },
];
