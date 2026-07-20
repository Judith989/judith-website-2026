import type { Metadata } from "next";
import JourneyGlobeClient from "./journey-globe-client";

export const metadata: Metadata = {
  title: "Journey Globe | Judith Njoku-Vowels",
  description: "An immersive globe tracing Judith Njoku-Vowels' academic journey, research collaborations, and conference travels.",
};

export default function JourneyGlobePage() {
  return <JourneyGlobeClient />;
}
