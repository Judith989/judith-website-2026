import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../site-chrome";
import { researchProjects } from "./projects";

export const metadata: Metadata = { title: "Research | Judith Njoku-Vowels, PhD" };

const researchAreas = [
  {
    title: "Digital twins and intelligent infrastructure",
    projects: ["batterymetrix", "panda", "bridgesync", "explainable-battery-twins", "bat-gpt", "metaverse-bms", "iot-protocols"],
  },
  {
    title: "Robust perception and autonomy",
    projects: ["omnirestore", "smartparking", "secure-av-voice"],
  },
  {
    title: "Trustworthy AI for decisions",
    projects: ["metahate", "service-advisor-ai"],
  },
];

const projectBySlug = new Map(researchProjects.map((project) => [project.slug, project]));

export default function ResearchPage() {
  return (
    <main>
      <PageHero title="Research" />
      <section className="academic-section"><p>I develop AI and digital twins for energy, transportation, and infrastructure. See the <Link href="/publications">publication list</Link> for the full research record.</p></section>
      <section className="academic-section">
        <h2>Current research directions</h2>
        <p>I am connecting adverse-weather perception to three-dimensional reconstruction and digital twins, including work on severe blowing snow and a city-scale model of downtown Laramie.</p>
        <p>I am also developing ways to evaluate trust across sensing, prediction, and decision-making. This work asks when a system has enough evidence to act, when it should keep monitoring, and when a person should take over. The Digital Twin Trustworthiness Index and dttibench are frameworks in development, not completed systems.</p>
      </section>
      {researchAreas.map((area) => (
        <section className="academic-section" key={area.title}>
          <h2>{area.title}</h2>
          <div className="academic-entry-list">
            {area.projects.map((slug) => {
              const project = projectBySlug.get(slug);
              if (!project) return null;
              return (
                <article className="academic-entry" key={slug}>
                  <h3><Link href={"/research/" + slug}>{project.name}</Link></h3>
                  <p>{project.status}</p>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
