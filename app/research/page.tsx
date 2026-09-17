import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../site-chrome";
import { researchProjects } from "./projects";

export const metadata: Metadata = { title: "Research | Judith Njoku-Vowels, PhD" };

const researchAreas = [
  {
    title: "Digital twins and intelligent infrastructure",
    description: "I connect models, sensing, forecasting, and spatial interfaces so people can inspect complex physical systems and act on their changing conditions.",
    projects: ["batterymetrix", "panda", "bridgesync", "explainable-battery-twins", "bat-gpt", "metaverse-bms", "iot-protocols"],
  },
  {
    title: "Robust perception and autonomy",
    description: "I develop efficient methods for seeing and interpreting real environments when weather, limited data, or operational constraints make perception difficult.",
    projects: ["omnirestore", "smartparking", "secure-av-voice"],
  },
  {
    title: "Trustworthy AI for decisions",
    description: "I study how intelligent systems can explain their outputs, protect users, and support decisions in social and operational settings.",
    projects: ["metahate", "service-advisor-ai"],
  },
];

const projectBySlug = new Map(researchProjects.map((project) => [project.slug, project]));

export default function ResearchPage() {
  return (
    <main>
      <PageHero label="Research" title="Research across AI and the physical world." />
      <section className="page-section research-overview">
        <p className="kicker">Research agenda</p>
        <p className="research-overview-lead">
          I build trustworthy intelligent systems that connect physical infrastructure,
          digital representations, and human decisions. My work spans digital twins,
          robust perception, and explainable AI, with an emphasis on systems that can
          be evaluated and used beyond a single benchmark.
        </p>
        <div className="research-overview-links">
          <Link href="/publications">Full publication record <ArrowUpRight size={16} /></Link>
          <Link href="/cv">Curriculum vitae <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      {researchAreas.map((area) => (
        <section className="page-section research-area" key={area.title}>
          <div className="research-area-intro">
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </div>
          <div className="research-project-list">
            {area.projects.map((slug) => {
              const project = projectBySlug.get(slug);
              if (!project) return null;
              return (
                <Link href={"/research/" + slug} className="research-project-row" key={slug}>
                  <div className="research-project-thumb">
                    <Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 700px) 90vw, 180px" />
                  </div>
                  <div>
                    <span>{project.eyebrow}</span>
                    <h3>{project.name}</h3>
                    <p>{project.statement}</p>
                  </div>
                  <ArrowUpRight className="research-project-arrow" size={20} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
