export type WallSource = "x" | "linkedin" | "dm";

export interface WallItem {
  src: string;
  width: number;
  height: number;
  source: WallSource;
  badge: string;
  headline: string;
  alt: string;
}

export const WALL_STATS = [
  { value: "4,600+", label: "LinkedIn followers" },
  { value: "10+", label: "paid customers on a single portfolio product" },
  { value: "4.4K", label: "views on one community post" },
];

// Screenshots live in /public/wall. Order here is the masonry reading order.
export const WALL_ITEMS: WallItem[] = [
  {
    "src": "/wall/wall-01.jpg",
    "width": 1000,
    "height": 2202,
    "source": "linkedin",
    "badge": "Company post",
    "headline": "How we think about signals",
    "alt": "LinkedIn post by Entrext: how we think about signals, the evidence that tells you something is working."
  },
  {
    "src": "/wall/wall-02.jpg",
    "width": 1000,
    "height": 1157,
    "source": "linkedin",
    "badge": "10+ paid customers",
    "headline": "One of our portfolio products just crossed 10+ paid customers",
    "alt": "LinkedIn post by Entrext announcing a portfolio product crossed 10+ paid customers, with a list of payment IDs."
  },
  {
    "src": "/wall/wall-03.jpg",
    "width": 1000,
    "height": 1477,
    "source": "linkedin",
    "badge": "Community",
    "headline": "Networking with hundreds of women entrepreneurs at the click of a button",
    "alt": "LinkedIn post by Herth: networking with hundreds of women entrepreneurs, a hyper-local growth ecosystem."
  },
  {
    "src": "/wall/wall-04.jpg",
    "width": 1000,
    "height": 1505,
    "source": "linkedin",
    "badge": "Community event",
    "headline": "Our very first event, with Tumhari Sakhi",
    "alt": "LinkedIn post by Herth announcing its first event with Tumhari Sakhi, the Pehli Neev bootcamp for women entrepreneurs."
  },
  {
    "src": "/wall/wall-05.jpg",
    "width": 1000,
    "height": 1544,
    "source": "linkedin",
    "badge": "Building trust",
    "headline": "If you have zero credibility, here is a framework for building trust",
    "alt": "LinkedIn post by Manthan Gupta on building trust: identity, reputation and accountability."
  },
  {
    "src": "/wall/wall-06.jpg",
    "width": 1000,
    "height": 1069,
    "source": "linkedin",
    "badge": "Founder belief",
    "headline": "We are building Entrext on one contrarian belief",
    "alt": "LinkedIn post by Manthan Gupta: people who did not find the core problem themselves cannot relate to it."
  },
  {
    "src": "/wall/wall-07.jpg",
    "width": 716,
    "height": 822,
    "source": "linkedin",
    "badge": "Build in public",
    "headline": "Feed it any city coordinates, and it builds a living 3D metropolis",
    "alt": "LinkedIn post by Aryan Sagavekar showing a procedural 3D city system built in Unity."
  },
  {
    "src": "/wall/wall-08.jpg",
    "width": 1000,
    "height": 1554,
    "source": "linkedin",
    "badge": "Build in public",
    "headline": "Procedural city generation from real map data",
    "alt": "LinkedIn post by Aryan Sagavekar on generating roads and buildings from real-world map data in Unity."
  },
  {
    "src": "/wall/wall-09.jpg",
    "width": 1000,
    "height": 1365,
    "source": "linkedin",
    "badge": "Launch",
    "headline": "Introducing Singularity, a game studio building in public",
    "alt": "LinkedIn post by Aryan Sagavekar introducing Singularity, a game studio building in public."
  },
  {
    "src": "/wall/wall-10.jpg",
    "width": 1000,
    "height": 842,
    "source": "linkedin",
    "badge": "Founder review",
    "headline": "A proper review of STAGE from the founder of BetaBloom",
    "alt": "LinkedIn post by Saumya Patel about a review of STAGE from the founder of BetaBloom."
  },
  {
    "src": "/wall/wall-11.jpg",
    "width": 1000,
    "height": 1858,
    "source": "linkedin",
    "badge": "Experimenting",
    "headline": "Exploring Jev by TypeSafe AI while building STAGE",
    "alt": "LinkedIn post by Saumya Patel exploring Jev by TypeSafe AI while building STAGE."
  },
  {
    "src": "/wall/wall-12.jpg",
    "width": 1000,
    "height": 1091,
    "source": "linkedin",
    "badge": "Relatable",
    "headline": "Cold outreach is one of the weirdest things about building",
    "alt": "LinkedIn post by Saumya Patel with a meme about waiting for a reply to a cold email."
  },
  {
    "src": "/wall/wall-13.jpg",
    "width": 1000,
    "height": 1416,
    "source": "linkedin",
    "badge": "Product feedback",
    "headline": "We are trying to solve a frustrating problem with website revisions",
    "alt": "LinkedIn post by Disha Gupta introducing Revision, a tool for giving feedback directly on a live website."
  },
  {
    "src": "/wall/wall-14.jpg",
    "width": 1000,
    "height": 1383,
    "source": "linkedin",
    "badge": "Community",
    "headline": "I want to meet more people who are building",
    "alt": "LinkedIn post by Komal Siddharth asking founders and indie hackers what they are building, with replies."
  },
  {
    "src": "/wall/wall-15.jpg",
    "width": 1000,
    "height": 1083,
    "source": "x",
    "badge": "Profile",
    "headline": "The hardest feature to build is simplicity",
    "alt": "X profile of Komal Siddharth with posts about building products."
  },
  {
    "src": "/wall/wall-16.jpg",
    "width": 1000,
    "height": 243,
    "source": "x",
    "badge": "4.4K views",
    "headline": "Building in tech is great, but building with a community is better",
    "alt": "X post by Komal Siddharth: building in tech is great, but building with a community is better. 4.4K views."
  },
  {
    "src": "/wall/wall-17.jpg",
    "width": 1000,
    "height": 552,
    "source": "x",
    "badge": "1,000 followers",
    "headline": "1,000 connections and counting",
    "alt": "X post by Komal Siddharth celebrating 1,000 followers and building in public."
  },
  {
    "src": "/wall/wall-18.jpg",
    "width": 1000,
    "height": 798,
    "source": "x",
    "badge": "15+ paid customers",
    "headline": "Our 51st product has acquired 15+ paid customers",
    "alt": "X post by Manthan Gupta: the 51st product from Entrext has acquired 15+ paid customers."
  },
  {
    "src": "/wall/wall-19.jpg",
    "width": 1000,
    "height": 630,
    "source": "x",
    "badge": "Build in public",
    "headline": "If you are in, you are 100% there",
    "alt": "X posts by Manthan Gupta on commitment, extraordinary work and why signals matter."
  },
  {
    "src": "/wall/wall-20.jpg",
    "width": 1000,
    "height": 1041,
    "source": "x",
    "badge": "Product launch",
    "headline": "MonkFeed: real demand, zero noise",
    "alt": "X post by Ikshit Talera launching MonkFeed, with a product video showing 922+ unread requests."
  },
  {
    "src": "/wall/wall-21.jpg",
    "width": 1000,
    "height": 696,
    "source": "dm",
    "badge": "Direct message",
    "headline": "Thanks Manthan. These are my artworks",
    "alt": "Direct message from an artist sharing her artworks, with a reply: this is so good."
  },
  {
    "src": "/wall/wall-22.jpg",
    "width": 1000,
    "height": 1640,
    "source": "linkedin",
    "badge": "Community",
    "headline": "Entrepreneurship unlocked a new meeting room: restaurants",
    "alt": "LinkedIn post by Kritika D Monga about business ideas created over a drink rather than at a whiteboard."
  },
  {
    "src": "/wall/wall-23.jpg",
    "width": 1000,
    "height": 1339,
    "source": "linkedin",
    "badge": "Community",
    "headline": "Women business that inspired thousands",
    "alt": "LinkedIn post by Kritika D Monga featuring Shree Nakoda Arts on Herth, a women entrepreneur community."
  },
  {
    "src": "/wall/wall-24.jpg",
    "width": 1000,
    "height": 1458,
    "source": "linkedin",
    "badge": "Launch",
    "headline": "Introducing Singularity, building games in public",
    "alt": "LinkedIn post by Shruthi Panickar introducing Singularity, a game studio building in public."
  },
  {
    "src": "/wall/wall-25.jpg",
    "width": 1000,
    "height": 1146,
    "source": "linkedin",
    "badge": "Partner post",
    "headline": "Your churn rate isn't a product problem, it's a feedback latency problem",
    "alt": "LinkedIn post by Hitender Sharma sharing Monkfeed: stop guessing what your users want."
  }
];
