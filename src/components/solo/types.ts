export interface FAQItem {
  id: number;
  question: string;
  answer: string | string[];
}

export interface FounderApplication {
  name: string;
  email: string;
  handle: string; // Primary profile or channel link
  platform: string; // e.g. TikTok, Instagram, X, LinkedIn, Reddit, YouTube
  distributionStyle: 'camera' | 'not-camera'; // Camera vs Text/Reddit
  location: string;
  isNorthAmerica: boolean;
  audienceDescription: string;
  productIdea: string;
  committedToPost: boolean;
  acknowledgedTerms: boolean;
}

export interface EntrextProduct {
  name: string;
  url: string;
  tagline?: string;
  highlight?: string;
}
