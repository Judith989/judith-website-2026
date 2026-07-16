import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["News", "/news"],
  ["Gallery", "/gallery"],
  ["CV", "/cv"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Judith Njoku-Vowels, home">
        <Image className="brand-logo" src="/logo-judith.png" alt="" width={52} height={52} priority />
        <span className="brand-name">Judith Njoku-Vowels</span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-contact" href="/contact">
        Contact <ArrowUpRight size={15} />
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Image className="brand-logo" src="/logo-judith.png" alt="Judith Njoku-Vowels logo" width={58} height={58} />
        <p>© 2026 Judith Nkechinyere Njoku-Vowels, PhD</p>
      </div>
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p>AI-enabled systems, Digital twins, Trustworthy AI</p>
    </footer>
  );
}

export function PageHero({
  label,
  title,
  text,
}: {
  label: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="page-hero">
      <p className="kicker">{label}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
