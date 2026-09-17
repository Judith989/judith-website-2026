import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  ["About", "/about"],
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Talks", "/talks"],
  ["News", "/news"],
  ["CV", "/cv"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Judith Njoku-Vowels, home">
        <span className="brand-name">Judith Njoku-Vowels</span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="header-contact" href="/contact">Contact</Link>
        <Link className="header-world" href="/research-world">My World</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <p>© 2026 Judith Nkechinyere Njoku-Vowels, PhD</p>
      </div>
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/talks">Talks</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/research-world">My World</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export function PageHero({
  label,
  title,
  text,
}: {
  label?: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <section className="page-hero">
      {label && <p className="kicker">{label}</p>}
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </section>
  );
}
