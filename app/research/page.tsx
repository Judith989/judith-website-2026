import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../site-chrome";
import { researchProjects } from "./projects";

export const metadata: Metadata = { title: "Research | Judith Njoku-Vowels, PhD" };

const themes = [
  ["Digital twins for complex systems", "Physical models, sensing, machine learning, and visualization for batteries, bridges, parking, and community infrastructure.", "Energy systems · infrastructure · mobility"],
  ["Trustworthy AI for autonomy", "Explainable, uncertainty-aware, and deployment-conscious methods for safety-critical cyber-physical systems.", "XAI · uncertainty · security"],
  ["Robust visual perception", "Efficient computer vision for degraded real-world scenes and autonomous systems operating in adverse weather.", "Image restoration · scene understanding · edge AI"],
  ["AI-enabled decision systems", "Interdisciplinary systems that connect data, simulation, and domain expertise in agriculture, transportation, and energy.", "Forecasting · multimodal learning · decision support"],
];

export default function ResearchPage() {
  return (
    <main>
      <PageHero label="Research" title="I build intelligence for systems that cannot afford to be misunderstood." text="My research connects models, sensing, simulation, and human judgment so batteries, bridges, vehicles, and communities can make safer and more resilient decisions." />
      <section className="page-section">
        <div className="theme-grid">{themes.map(([title, text, focus], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p><small>{focus}</small></article>)}</div>
      </section>
      <section className="page-section surface">
        <div className="section-heading"><p className="kicker">Research systems</p><h2>Where my research questions become working systems.</h2></div>
        <div className="research-system-grid">
          {researchProjects.map((system) => (
            <Link href={`/research/${system.slug}`} key={system.slug}>
              <div className="research-system-image"><Image src={system.images[0].src} alt={system.images[0].alt} fill sizes="(max-width: 700px) 92vw, 46vw" /></div>
              <div><p className="kicker">{system.eyebrow}</p><h3>{system.name}</h3><p>{system.statement}</p><span>Explore the project <ArrowUpRight size={15} /></span></div>
            </Link>
          ))}
        </div>
        <Link className="button button-primary" href="/publications">Explore the publication record</Link>
      </section>
    </main>
  );
}
