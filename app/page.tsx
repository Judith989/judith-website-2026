import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { TypingHeadline } from "./typing-headline";

const themes = [
  {
    title: "Digital twins",
    description: "Connecting physical models, sensing, and AI to make energy and infrastructure systems easier to understand and manage.",
  },
  {
    title: "Trustworthy AI",
    description: "Making predictions explainable, secure, and useful when decisions affect people and physical systems.",
  },
  {
    title: "Robust perception",
    description: "Building efficient computer vision that works when weather and real-world conditions degrade visual evidence.",
  },
];

const featuredProjects = [
  {
    title: "OmniRestore",
    area: "Computer vision",
    description: "A compact, weather-aware system for restoring images degraded by rain, fog, snow, and low light.",
    evidence: "Presented at the CVPR 2026 NTIRE Workshop",
    image: "/research/omnirestore-qualitative.png",
    href: "/research/omnirestore",
  },
  {
    title: "BatteryMetrix",
    area: "Energy systems",
    description: "My doctoral research on predictive, explainable, and secure digital twins for electric-vehicle batteries.",
    evidence: "PhD research program and related peer-reviewed papers",
    image: "/research/battery-p297-img0.png",
    href: "/research/batterymetrix",
  },
  {
    title: "PANDA",
    area: "Intelligent infrastructure",
    description: "A predictive parking digital twin that makes occupancy and turnover forecasts visible in a spatial interface.",
    evidence: "Presented at ASCE i3CE 2026",
    image: "/research/panda-image4.png",
    href: "/research/panda",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="hero-overline">Dr. Judith Njoku-Vowels · Distinguished Postdoctoral Fellow</p>
          <TypingHeadline />
          <p className="hero-lede">
            I am a researcher at the University of Wyoming working across digital twins,
            trustworthy AI, and computer vision for transportation, energy, and infrastructure.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/research">Explore my research <ChevronRight size={17} /></Link>
            <Link className="button button-secondary" href="/cv">View my CV <ArrowUpRight size={16} /></Link>
          </div>
          <p className="home-scholar">1,400+ citations · <a href="https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={13} /></a></p>
          <p className="home-location"><MapPin size={15} aria-hidden="true" /> Laramie, Wyoming</p>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image src="/judith_pic.png" alt="Portrait of Dr. Judith Njoku-Vowels" fill priority sizes="(max-width: 800px) 84vw, 38vw" />
          </div>
        </div>
      </section>

      <section className="home-focus section" aria-labelledby="home-focus-title">
        <div className="section-heading">
          <p className="kicker">Research focus</p>
          <h2 id="home-focus-title">One agenda, three connected directions.</h2>
        </div>
        <div className="home-focus-grid">
          {themes.map((theme) => <article key={theme.title}><h3>{theme.title}</h3><p>{theme.description}</p></article>)}
        </div>
        <Link className="text-link" href="/research">Read my research agenda <ArrowUpRight size={16} /></Link>
      </section>

      <section className="home-featured section" aria-labelledby="home-featured-title">
        <div className="home-section-heading">
          <div className="section-heading"><p className="kicker">Selected research</p><h2 id="home-featured-title">Systems that make the work tangible.</h2></div>
          <Link className="text-link" href="/research">All research projects <ArrowUpRight size={16} /></Link>
        </div>
        <div className="home-featured-list">
          {featuredProjects.map((project) => (
            <Link className="home-featured-project" href={project.href} key={project.title}>
              <div className="home-featured-image"><Image src={project.image} alt={project.title + " research system"} fill sizes="(max-width: 700px) 90vw, 220px" /></div>
              <div><span>{project.area}</span><h3>{project.title}</h3><p>{project.description}</p><small>{project.evidence}</small></div>
              <ArrowUpRight className="home-featured-arrow" size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-next section" aria-labelledby="home-next-title">
        <p className="kicker">Explore the record</p>
        <h2 id="home-next-title">Research, publications, and the people behind them.</h2>
        <div className="home-next-links">
          <Link href="/publications">Publications <ArrowUpRight size={17} /></Link>
          <Link href="/talks">Talks <ArrowUpRight size={17} /></Link>
          <Link href="/about">About me <ArrowUpRight size={17} /></Link>
          <Link href="/news">News <ArrowUpRight size={17} /></Link>
          <Link href="/contact">Contact <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
