import Image from "next/image";
import Link from "next/link";

const selectedResearch = [
  { name: "OmniRestore", detail: "Efficient adverse-weather image restoration, presented at CVPR Workshops 2026.", href: "/research/omnirestore" },
  { name: "BatteryMetrix", detail: "Predictive and explainable digital twins for electric-vehicle battery management.", href: "/research/batterymetrix" },
  { name: "PANDA", detail: "A predictive parking digital twin presented at ASCE i3CE 2026.", href: "/research/panda" },
];

const selectedPublications = [
  { title: "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration", venue: "CVPR Workshops, 2026", href: "https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Njoku_OmniRestore_A_Parameter-Efficient_Framework_for_Universal_Adverse-Weather_Image_Restoration_CVPRW_2026_paper.pdf" },
  { title: "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse", venue: "IEEE Internet of Things Journal, 2025", href: "https://doi.org/10.1109/JIOT.2025.3568477" },
  { title: "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles", venue: "IEEE Access, 2024", href: "https://doi.org/10.1109/ACCESS.2024.3413075" },
];

export default function Home() {
  return (
    <main>
      <section className="academic-home-intro">
        <div>
          <h1>Judith Njoku-Vowels</h1>
          <p className="academic-role">Distinguished Postdoctoral Fellow · University of Wyoming</p>
          <p className="academic-intro">I develop trustworthy AI and digital twins for energy, transportation, and infrastructure. My research combines physical models, sensing, computer vision, and explainable machine learning to support decisions in real-world systems.</p>
          <p className="academic-links"><Link href="/research">Research</Link><Link href="/publications">Publications</Link><Link href="/cv">CV</Link><a href="mailto:jnjoku@uwyo.edu">Email</a></p>
          <p className="academic-note"><a href="https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" target="_blank" rel="noreferrer">1,400+ citations on Google Scholar</a></p>
        </div>
        <Image src="/judith_pic.png" alt="Dr. Judith Njoku-Vowels" width={260} height={320} priority className="academic-portrait" />
      </section>

      <section className="academic-section">
        <div className="academic-section-heading"><h2>Selected research</h2><Link href="/research">All projects</Link></div>
        <div className="academic-entry-list">
          {selectedResearch.map((project) => <article className="academic-entry" key={project.name}><h3><Link href={project.href}>{project.name}</Link></h3><p>{project.detail}</p></article>)}
        </div>
      </section>

      <section className="academic-section">
        <div className="academic-section-heading"><h2>Selected publications</h2><Link href="/publications">Full list</Link></div>
        <div className="academic-entry-list">
          {selectedPublications.map((paper) => <article className="academic-entry" key={paper.title}><h3><a href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a></h3><p>{paper.venue}</p></article>)}
        </div>
      </section>

      <section className="academic-section academic-home-end">
        <h2>Contact</h2>
        <p>For research collaboration, invited talks, and student mentorship: <a href="mailto:jnjoku@uwyo.edu">jnjoku@uwyo.edu</a>.</p>
      </section>
    </main>
  );
}
