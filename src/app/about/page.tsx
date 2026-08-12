import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hiba Ayub designs products that are fair, accessible, and easy to use — shaped by a lifetime of games, puzzles, and noticing what feels good.",
};

export default function AboutPage() {
  return <AboutContent />;
}
