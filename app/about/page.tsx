import type { Metadata } from "next";
import Home from "../page";

// Keep old About links working; the homepage is now the complete profile.
export const metadata: Metadata = {
  title: "Judith Njoku-Vowels | Profile",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default Home;
