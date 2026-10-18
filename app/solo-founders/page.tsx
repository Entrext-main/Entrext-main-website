import type { Metadata } from "next";
import SoloFoundersPage from "./SoloFoundersPage";

const TITLE = "Solo Non-Tech Founders Program — Entrext Studio";
const DESCRIPTION =
  "We turn your idea into a working product and maintain it. Distribution: you pick what you are good at (camera or text/Reddit). $1,500/mo, zero equity, 100% you own it. Pilot with 3 founders.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/solo-founders" },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      {/* Satoshi (Fontshare) + Space Mono, scoped to this page via .solo-page in globals.css */}
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,600,500,400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <SoloFoundersPage />
    </>
  );
}
