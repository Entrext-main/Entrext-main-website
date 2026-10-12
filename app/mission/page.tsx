import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import MissionJourney from "./MissionJourney";

const missionSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mission-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Work is moving from jobs to outcomes, and from employees to owners. The five questions behind Entrext's 20-year bet.",
  alternates: { canonical: "/mission" },
};

export default function MissionPage() {
  return (
    <div className={missionSerif.variable}>
      <MissionJourney />
    </div>
  );
}
