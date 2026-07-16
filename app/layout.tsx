import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { siteUrl } from "./site-paths";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "1254x1254" },
      { url: "/logo-judith.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "1254x1254", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    title: "Judith Nkechinyere Njoku-Vowels, PhD",
    description:
      "AI-enabled systems researcher building trustworthy digital twins and robust perception for the physical world.",
    type: "profile",
    url: siteUrl,
    siteName: "Judith Njoku-Vowels",
    images: [
      {
        url: "/logo-judith.png",
        width: 1254,
        height: 1254,
        alt: "Judith Njoku-Vowels monogram logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Judith Nkechinyere Njoku-Vowels, PhD",
    description:
      "AI-enabled systems researcher building trustworthy digital twins and robust perception for the physical world.",
    images: ["/logo-judith.png"],
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
