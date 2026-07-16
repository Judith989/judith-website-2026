import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "Research | Judith Njoku-Vowels, PhD" };

const themes = [
  ["Digital twins for complex systems", "Physical models, sensing, machine learning, and visualization for batteries, bridges, parking, and community infrastructure.", "Energy systems · infrastructure · mobility"],
  ["Trustworthy AI for autonomy", "Explainable, uncertainty-aware, and deployment-conscious methods for safety-critical cyber-physical systems.", "XAI · uncertainty · security"],
  ["Robust visual perception", "Efficient computer vision for degraded real-world scenes and autonomous systems operating in adverse weather.", "Image restoration · scene understanding · edge AI"],
  ["AI-enabled decision systems", "Interdisciplinary systems that connect data, simulation, and domain expertise in agriculture, transportation, and energy.", "Forecasting · multimodal learning · decision support"],
];

const systems = [
  { title: "OmniRestore", text: "Universal adverse-weather image restoration for autonomous perception.", slug: "omnirestore", image: "/research/omni-p2-img0.jpg" },
  { title: "BatteryMetrix", text: "A predictive, explainable, and secure digital twin for battery management.", slug: "batterymetrix", image: "/research/battery-p297-img0.png" },
  { title: "PANDA", text: "A lightweight predictive digital twin for intelligent parking management.", slug: "panda", image: "/research/panda-image4.png" },
  { title: "BridgeSync", text: "A secure digital twin framework for intelligent bridge monitoring.", slug: "bridgesync", image: "/research/bridge-p5-img1.png" },
  { title: "SmartParking", text: "Multi-object visual perception for vehicles, pedestrians, cyclists, and traffic signs.", slug: "smartparking", image: "/research/smartparking/p6-img0.png" },
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
          {systems.map((system) => (
            <Link href={`/research/${system.slug}`} key={system.slug}>
              <div className="research-system-image"><Image src={system.image} alt={`${system.title} research system`} fill sizes="(max-width: 700px) 92vw, 46vw" /></div>
              <div><h3>{system.title}</h3><p>{system.text}</p><span>Explore the project <ArrowUpRight size={15} /></span></div>
            </Link>
          ))}
        </div>
        <Link className="button button-primary" href="/publications">Explore the publication record</Link>
      </section>
    </main>
  );
}
