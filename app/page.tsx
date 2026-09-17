import Image from "next/image";
import Link from "next/link";

const selectedResearch = [
  { name: "OmniRestore", detail: "Efficient adverse-weather image restoration, presented at CVPR Workshops 2026.", href: "/research/omnirestore" },
  { name: "BatteryMetrix", detail: "Predictive, explainable, and secure digital twins for electric-vehicle batteries.", href: "/research/batterymetrix" },
  { name: "PANDA", detail: "A predictive parking digital twin presented at ASCE i3CE 2026.", href: "/research/panda" },
];

const selectedPublications = [
  { title: "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration", venue: "CVPR Workshops, 2026", href: "https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Njoku_OmniRestore_A_Parameter-Efficient_Framework_for_Universal_Adverse-Weather_Image_Restoration_CVPRW_2026_paper.pdf" },
  { title: "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse", venue: "IEEE Internet of Things Journal, 2025", href: "https://doi.org/10.1109/JIOT.2025.3568477" },
  { title: "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles", venue: "IEEE Access, 2024", href: "https://doi.org/10.1109/ACCESS.2024.3413075" },
];

export default function Home() {
  return (
    <main className="profile-home">
      <div className="profile-shell">
        <aside className="profile-sidebar" aria-label="Profile and contact details">
          <Image src="/judith_pic2.png" alt="Dr. Judith Njoku-Vowels at her desk" width={1402} height={1122} sizes="(max-width: 720px) 220px, 240px" priority />
          <h1>Judith Njoku-Vowels</h1>
          <p>Distinguished Postdoctoral Fellow</p>
          <p>University of Wyoming</p>
          <div className="profile-sidebar-links">
            <a href="mailto:jnjoku@uwyo.edu">Email</a>
            <a href="https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <Link href="/cv">Curriculum vitae</Link>
          </div>
        </aside>

        <div className="profile-content">
          <section id="bio">
            <h2>Short Bio</h2>
            <p>I am a Distinguished Postdoctoral Fellow in the Secure Sensing and Learning Research Lab and the Center for Rural Community Resilience and Innovation at the University of Wyoming. I develop trustworthy AI and digital twins for energy, transportation, agriculture, and infrastructure.</p>
            <p>I earned a BEng in Petroleum Engineering from the Federal University of Technology, Owerri, an MSc in Electronics Engineering from Kumoh National Institute of Technology, and a PhD in IT Convergence Engineering from Kumoh National Institute of Technology. In South Korea, I worked in the Future Communications Systems Laboratory, the ICT Convergence Research Center, and the Networked Systems Laboratory, moving from wireless communications to digital twins and battery management.</p>
            <p>My research combines physical models, simulation, machine learning, and visualization to help people understand complex systems and make better decisions under real-world constraints.</p>
          </section>

          <section id="research">
            <div className="profile-section-heading"><h2>Research</h2><Link href="/research">All projects</Link></div>
            <ul className="profile-list">
              {selectedResearch.map((project) => <li key={project.name}><Link href={project.href}>{project.name}</Link> — {project.detail}</li>)}
            </ul>
          </section>

          <section id="publications">
            <div className="profile-section-heading"><h2>Selected Publications</h2><Link href="/publications">Full publication list</Link></div>
            <ul className="profile-list">
              {selectedPublications.map((paper) => <li key={paper.title}><a href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a>. {paper.venue}.</li>)}
            </ul>
            <p className="profile-small"><a href="https://scholar.google.com/citations?user=Ag2gYzIAAAAJ" target="_blank" rel="noreferrer">Google Scholar profile</a> · 1,400+ citations</p>
          </section>

          <section id="teaching">
            <h2>Teaching Philosophy</h2>
            <p>I teach by connecting foundations to authentic systems. Students should understand why a method works, test where it fails, communicate its assumptions, and apply it responsibly. I emphasize active learning, reproducible inquiry, and collaborative problem solving.</p>
          </section>

          <section id="mentorship">
            <h2>Mentorship Philosophy</h2>
            <p>I aim to develop independent thinkers, not replicas of the mentor. I help researchers frame consequential questions, make defensible technical choices, interpret evidence honestly, and communicate their contributions clearly. My mentorship adapts to each person while maintaining high standards and widening access to opportunity.</p>
          </section>

          <section id="philosophy">
            <h2>Research Philosophy</h2>
            <p>Three principles guide my work: <strong>intelligibility</strong>—communicating evidence and uncertainty; <strong>integration</strong>—connecting models, sensors, simulation, and human expertise; and <strong>impact</strong>—improving consequential systems while broadening participation in research.</p>
            <blockquote><p>“If you hear a voice within you say, ‘You cannot paint,’ then by all means paint, and that voice will be silenced.”</p><cite>Vincent van Gogh, adapted from a letter to Theo van Gogh, October 28, 1883</cite></blockquote>
            <blockquote><p>“Spectacular achievement is always preceded by unspectacular preparation.”</p><cite>Robert H. Schuller</cite></blockquote>
          </section>

          <section id="service">
            <h2>Service and Community</h2>
            <p>I joined WomenTech Network in May 2020 and became a Global Ambassador that June. I volunteer as a Content Developer with the National Postdoctoral Association. From 2025 to 2026, I coordinated seminars for the Prof. Cosmas Daughters Forum, including speaker outreach and event moderation. I also mentor women entering and returning to technology and research careers.</p>
            <p>For collaboration, talks, or mentorship, please <a href="mailto:jnjoku@uwyo.edu">email me</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
