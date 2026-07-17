import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { PageHero } from "../site-chrome";
import { sitePath } from "../site-paths";

export const metadata: Metadata = { title: "Curriculum Vitae | Judith Njoku-Vowels, PhD" };

const education = [
  ["August 22, 2025", "PhD, IT Convergence Engineering", "Kumoh National Institute of Technology"],
  ["August 20, 2021", "MSc, Electronics Engineering", "Kumoh National Institute of Technology"],
  ["Dec 12, 2014", "BEng, Petroleum Engineering", "Federal University of Technology, Owerri"],
];

const appointments = [
  ["2025 to Present", "Distinguished Postdoctoral Fellow", "Secure Sensing and Learning Research Lab and Center for Rural Community Resilience and Innovation", "University of Wyoming"],
  ["2024", "Visiting Research Scholar", "Climate Smart Decision Support Systems Laboratory", "Michigan State University"],
  ["Aug 2022 to Jul 2024", "Research Specialist and Supervisor", "AI-enabled sensing, digital agriculture, explainable machine learning, and international workforce development", "Kyungpook National University, Daegu, South Korea and Michigan State University, East Lansing, Michigan"],
  ["2022 to 2025", "Graduate Research Assistant", "Networked Systems Laboratory", "Kumoh National Institute of Technology"],
  ["2019 to 2021", "Graduate Research and Teaching Assistant", "Future Communications Systems Laboratory", "Kumoh National Institute of Technology"],
  ["Apr 2017 to Jul 2019", "Customer Experience Management Personnel and IT Buddy", "Customer experience, branch technology support, and ATM operations", "Sterling Bank PLC, Lagos, Nigeria"],
  ["Nov 2015 to Oct 2016", "National Youth Service Corps Intern", "Energy-sector administration and public service", "Ministry of Energy, Alausa, Ikeja, Lagos, Nigeria"],
];

const conferenceReview = ["IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)", "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)", "International Conference on Machine Learning (ICML)", "Conference on Neural Information Processing Systems (NeurIPS)", "International Conference on Computer Vision and Image Processing (CVIP)", "IEEE Wireless Communications and Networking Conference (WCNC)"];

const journalReview = ["IEEE Transactions on Industrial Informatics", "IEEE Internet of Things Journal", "IEEE Access", "IEEE Communications Letters", "IET Communications", "Engineering Applications of Artificial Intelligence", "Journal of Retailing and Consumer Services", "Electronics (MDPI)", "Sensors (MDPI)", "Algorithms (MDPI)", "Cogent Arts & Humanities"];

export default function CvPage() {
  return (
    <main>
      <PageHero label="Curriculum vitae" title="The record behind my research journey." />
      <section className="page-section cv-actions">
        <a className="button button-primary" href={sitePath("/Judith_Njoku_Academic_CV.pdf")} download><Download size={17} /> Download academic CV</a>
        <a className="button button-secondary" href="https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" target="_blank" rel="noreferrer">Google Scholar <ExternalLink size={16} /></a>
      </section>
      <section className="page-section cv-layout">
        <div className="cv-main">
          <div className="cv-block"><p className="kicker">Appointments</p>{appointments.map(([date, role, lab, institution]) => <article key={role}><span>{date}</span><div><h2>{role}</h2><p><strong>{lab}</strong><br />{institution}</p></div></article>)}</div>
          <div className="cv-block"><p className="kicker">Education</p>{education.map(([date, degree, institution]) => <article key={degree}><span>{date}</span><div><h2>{degree}</h2><p>{institution}</p></div></article>)}</div>
        </div>
        <aside className="cv-sidebar">
          <div><strong>1,350+</strong><span>citations</span></div><div><strong>14</strong><span>h-index</span></div><div><strong>$150K</strong><span>projects led</span></div>
          <h3>Research areas</h3><p>Digital twins, trustworthy AI, computer vision, cyber-physical systems, simulation, and intelligent infrastructure.</p>
          <h3>Professional community</h3><p>IEEE Member, WomenTech Network Global Ambassador, Toastmasters International Level 4, and mentor with Femme Alliance Network and the <a href="https://globalmentorship.org/be-a-mentor/" target="_blank" rel="noreferrer">Global Mentorship Initiative</a>.</p>
        </aside>
      </section>
      <section className="page-section professional-service">
        <div className="gallery-lead"><p className="kicker">Leadership and professional service</p><h2>Strengthening the communities that evaluate, communicate, and widen access to research.</h2></div>
        <div className="service-grid">
          <article>
            <h3>Technical program committees</h3>
            <div className="service-entry"><span>2024</span><p><strong>TPC Member, Track 4: Emerging Technologies</strong><br />IEEE WCNC 2025, Milan, Italy</p></div>
            <div className="service-entry"><span>2023</span><p><strong>TPC Member, Track 4: Emerging Technologies</strong><br />IEEE WCNC 2024, Dubai, UAE</p></div>
          </article>
          <article><h3>Conference peer review</h3><ul>{conferenceReview.map((venue) => <li key={venue}>{venue}</li>)}</ul></article>
          <article><h3>Journal peer review</h3><ul>{journalReview.map((journal) => <li key={journal}>{journal}</li>)}</ul></article>
          <article>
            <h3>Memberships and community leadership</h3>
            <div className="service-entry"><span>2019 to Present</span><p><strong>IEEE Member</strong></p></div>
            <div className="service-entry"><span>2020 to Present</span><p><strong>WomenTech Network Member and Global Ambassador</strong></p></div>
            <div className="service-entry"><span>2020 to Present</span><p><strong>Toastmasters International</strong><br />Level 4 in communication and leadership</p></div>
          </article>
        </div>
      </section>
    </main>
  );
}
