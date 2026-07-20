import type { Metadata } from "next";
import ResearchWorldClient from "./research-world-client";

export const metadata: Metadata = {
  title: "Research World | Judith Njoku-Vowels, PhD",
  description: "Walk through an immersive digital twin of Dr. Judith Njoku-Vowels' research life, projects, places, and ideas.",
};

export default function ResearchWorldPage() {
  return <ResearchWorldClient />;
}
