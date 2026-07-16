import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { PageHero } from "../site-chrome";
import { sitePath } from "../site-paths";

export const metadata: Metadata = { title: "Curriculum Vitae | Judith Njoku-Vowels, PhD" };

const education = [
  ["August 22, 2025", "PhD, IT Convergence Engineering", "Kumoh National Institute of Technology"],
  ["August 20, 2021", "MSc, Electronics Engineering", "Kumoh National Institute of Technology"],
  ["Dec 12, 2024", "BEng, Petroleum Engineering", "Federal University of Technology, Owerri"],
];

const appointments = [
  ["2025 to Present", "Distinguished Postdoctoral Fellow", "University of Wyoming"],
  ["Jan 4, 2024", "Visiting Research Scholar", "Michigan State University"],
  ["2022 to 2025", "Graduate Research Assistant", "Kumoh National Institute of Technology"],
  ["2019 to 2021", "Graduate Research and Teaching Assistant", "Kumoh National Institute of Technology"],
];

export default function CvPage() {
  return (
    <main>
      <PageHero label="Curriculum vitae" title="The record behind my research journey." text="Trace the appointments, education, projects, awards, mentorship, service, and technical work that have shaped my academic path." />
      <section className="page-section cv-actions">
        <a className="button button-primary" href={sitePath("/Judith_Njoku_Academic_CV.pdf")} download><Download size={17} /> Download academic CV</a>
        <a className="button button-secondary" href="https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" target="_blank" rel="noreferrer">Google Scholar <ExternalLink size={16} /></a>
      </section>
      <section className="page-section cv-layout">
        <div className="cv-main">
          <div className="cv-block"><p className="kicker">Appointments</p>{appointments.map(([date, role, institution]) => <article key={role}><span>{date}</span><div><h2>{role}</h2><p>{institution}</p></div></article>)}</div>
          <div className="cv-block"><p className="kicker">Education</p>{education.map(([date, degree, institution]) => <article key={degree}><span>{date}</span><div><h2>{degree}</h2><p>{institution}</p></div></article>)}</div>
        </div>
        <aside className="cv-sidebar">
          <div><strong>1,350+</strong><span>citations</span></div><div><strong>14</strong><span>h-index</span></div><div><strong>$150K</strong><span>projects led</span></div>
          <h3>Research areas</h3><p>Digital twins, trustworthy AI, computer vision, cyber-physical systems, simulation, and intelligent infrastructure.</p>
          <h3>Service and leadership</h3><p><a href="https://www.womentech.net/global-ambassadors/South%20Korea/Judith%20/Njoku-Vowels" target="_blank" rel="noreferrer">WomenTech Network Global Ambassador</a> in South Korea since mid-2020. Seminar Coordinator for the Prof. Cosmas Development Forum&apos;s women-empowerment group for one year across 2025 and 2026, leading speaker outreach, event management, anchoring, and moderation. Reviewer for CVPR, ICML, NeurIPS, IEEE journals, and interdisciplinary AI venues.</p>
        </aside>
      </section>
    </main>
  );
}
