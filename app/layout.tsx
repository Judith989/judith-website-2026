import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "Judith Nkechinyere Njoku-Vowels, PhD | AI-Enabled Systems Researcher",
  description:
    "Judith Njoku-Vowels is a researcher in digital twins, trustworthy AI, computer vision, and AI-enabled systems for transportation, energy, and infrastructure.",
  keywords: [
    "Judith Njoku-Vowels",
    "digital twins",
    "trustworthy AI",
    "computer vision",
    "systems engineering",
    "University of Wyoming",
  ],
  authors: [{ name: "Judith Nkechinyere Njoku-Vowels" }],
  icons: {
    icon: "/logo-judith.png",
    apple: "/logo-judith.png",
  },
  openGraph: {
    title: "Judith Nkechinyere Njoku-Vowels, PhD",
    description:
      "AI-enabled systems researcher building trustworthy digital twins and robust perception for the physical world.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
