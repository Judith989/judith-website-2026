import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getResearchProject, researchProjects } from "../projects";
import { sitePath } from "../../site-paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return researchProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getResearchProject(slug);
  return project
    ? { title: `${project.name} | Judith Njoku-Vowels`, description: project.statement }
    : {};
}

export default async function ResearchProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getResearchProject(slug);
  if (!project) notFound();

  return (
    <main>
      <section className="project-page-hero">
        <Link href="/research"><ArrowLeft size={16} /> Research</Link>
        <p className="kicker">{project.eyebrow}</p>
        <h1>{project.name}</h1>
        <p className="project-question">{project.statement}</p>
        <p className="project-status">{project.status}</p>
        <div className="project-resource-links">
          {project.links.map((link) => (
            <a href={link.href.startsWith("http") ? link.href : sitePath(link.href)} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} key={link.label}>
              {link.label}<ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </section>

      <section className="page-section project-overview">
        <div><h2>Overview</h2><p>{project.question}</p></div>
        <div>{project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="page-section project-figure project-figure-primary">
        <div><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 900px) 92vw, 76vw" /></div>
        <p>{project.images[0].caption}</p>
      </section>

      <section className="page-section project-method">
        <h2>Methods</h2>
        <div className="project-method-grid">
          {project.approach.map((step, index) => (
            <article key={step.title}><span>0{index + 1}</span><h2>{step.title}</h2><p>{step.text}</p></article>
          ))}
        </div>
      </section>

      <section className="project-outcomes" aria-label={`${project.name} research outcomes`}>
        {project.outcomes.map((outcome) => <div key={outcome.label}><strong>{outcome.value}</strong><span>{outcome.label}</span></div>)}
      </section>

      <section className="page-section project-evidence">
        <div>
          <h2>Contributions</h2>
          <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <figure>
          <div><Image src={project.images[1].src} alt={project.images[1].alt} fill sizes="(max-width: 900px) 92vw, 45vw" /></div>
          <figcaption>{project.images[1].caption}</figcaption>
        </figure>
      </section>

      <section className="page-section project-reading">
        <article><h2>Interpretation</h2><p>{project.interpretation}</p></article>
        <article><h2>Current scope</h2><p>{project.scope}</p></article>
      </section>

      <section className="page-section project-image-gallery">
        <div><h2>Additional figures</h2></div>
        <div className="project-image-grid">
          {project.images.slice(2).map((image) => (
            <figure key={image.src}>
              <div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {project.next && (
        <section className="page-section project-next">
          <h2>Next steps</h2>
          <p>{project.next}</p>
          <div className="project-resource-links">
            {project.links.map((link) => <a href={link.href.startsWith("http") ? link.href : sitePath(link.href)} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} key={link.label}>{link.label}<ArrowUpRight size={15} /></a>)}
          </div>
        </section>
      )}
    </main>
  );
}
