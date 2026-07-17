import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Mail,
  MapPin,
} from "lucide-react";
import { TypingHeadline } from "./typing-headline";

const links = {
  email: "mailto:jnjoku@uwyo.edu",
  scholar: "https://scholar.google.com/citations?user=Ag2gYzIAAAAJ",
  orcid: "https://orcid.org/0000-0002-2294-9204",
  linkedin: "https://linkedin.com/in/judith989",
  github: "https://github.com/Judith989",
};

const research = [
  {
    number: "01",
    title: "Digital twins for complex systems",
    text: "I connect physical models, live sensing, machine learning, and human-facing visualization to make energy and infrastructure systems more observable and actionable.",
    focus: "Batteries · smart infrastructure · urban mobility",
  },
  {
    number: "02",
    title: "Trustworthy AI for autonomy",
    text: "I develop explainable, uncertainty-aware, and deployment-conscious methods for safety-critical cyber-physical systems, not models that stop at benchmark accuracy.",
    focus: "XAI · uncertainty · resilient decision-making",
  },
  {
    number: "03",
    title: "Robust visual perception",
    text: "I build efficient computer vision systems that restore and interpret degraded real-world scenes, especially for autonomous systems operating in adverse weather.",
    focus: "Image restoration · autonomous perception · edge AI",
  },
];

const projects = [
  {
    title: "OmniRestore",
    eyebrow: "Autonomous perception",
    description:
      "A lightweight, parameter-efficient framework for universal adverse-weather image restoration, developed to strengthen visual perception in autonomous cyber-physical systems.",
    result: "NTIRE image-restoration workshop at CVPR 2026",
    tags: ["Computer vision", "Weather robustness", "Efficient AI"],
    href: "/research/omnirestore",
    image: "/research/omni-p2-img0.jpg",
  },
  {
    title: "BatteryMetrix",
    eyebrow: "Energy systems",
    description:
      "My doctoral research: a user-centered digital twin for predictive, explainable, and secure battery management, spanning state estimation, prognosis, XAI, and immersive visualization.",
    result: "The crux of my PhD, with paper and repository in preparation",
    tags: ["Digital twins", "Battery intelligence", "XAI"],
    href: "/research/batterymetrix",
    image: "/research/battery-p297-img0.png",
  },
  {
    title: "PANDA",
    eyebrow: "Smart communities",
    description:
      "A lightweight predictive digital twin for multi-horizon occupancy and turnover forecasting in retail parking facilities.",
    result: "Active research · University of Wyoming",
    tags: ["Forecasting", "Geospatial AI", "Digital twins"],
    href: "/research/panda",
    image: "/research/panda-image4.png",
  },
  {
    title: "BridgeSync",
    eyebrow: "Infrastructure resilience",
    description:
      "A digital twin framework for intelligent bridge monitoring that brought multidisciplinary teams together around structural data from three bridges in South Korea.",
    result: "Three-bridge research validation",
    tags: ["Sensing", "Infrastructure", "Visualization"],
    href: "/research/bridgesync",
    image: "/research/bridge-p5-img1.png",
  },
  {
    title: "SmartParking",
    eyebrow: "Transportation perception",
    description:
      "A separate computer-vision project comparing six detector configurations for vehicles, pedestrians, cyclists, bicycles, buses, and traffic signs using the TraPedesVeh mini-dataset.",
    result: "IEEE ICTC 2022, Jeju Island",
    tags: ["Object detection", "TraPedesVeh", "Smart mobility"],
    href: "/research/smartparking",
    image: "/research/smartparking/p6-img0.png",
  },
];

const recentNews = [
  ["Jun 17, 2026", "PANDA presented at i3CE 2026", "I presented our predictive smart-parking digital twin virtually at the ASCE International Conference on Computing in Civil Engineering."],
  ["Jun 6, 2026", "OmniRestore presented at CVPR Workshops", "I presented our parameter-efficient adverse-weather image-restoration framework at the Colorado Convention Center in Denver."],
  ["Jun 12, 2026", "Invited University of Wyoming REU colloquium talk", "I delivered Can AI Drive in the Storm? Restoring Vision for Autonomous Vehicles to an undergraduate research cohort."],
  ["May 20, 2026", "Remote practical training research published", "Our paper on developing future workforce skills through remote practical training was published in Computers and Education Open."],
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="kicker">{label}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-overline">AI-enabled systems researcher</p>
          <TypingHeadline />
          <p className="hero-lede">
            I&apos;m <strong>Judith Nkechinyere Njoku-Vowels, PhD</strong>, a
            Distinguished Postdoctoral Fellow at the University of Wyoming. My work
            integrates digital twins, trustworthy AI, computer vision, and
            simulation for resilient transportation, energy, and infrastructure.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/research">
              Explore my research <ChevronRight size={17} />
            </Link>
            <ExternalLink href={links.scholar} className="button button-secondary">
              Google Scholar <ArrowUpRight size={16} />
            </ExternalLink>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Laramie, Wyoming</span>
            <span>Distinguished Postdoctoral Fellow</span>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/judith_pic.png"
              alt="Portrait of Dr. Judith Nkechinyere Njoku-Vowels"
              fill
              priority
              sizes="(max-width: 800px) 84vw, 38vw"
            />
          </div>
          <div className="portrait-note">
            <span>Research signature</span>
            <p>From sensing and models to decisions people can trust.</p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Research profile highlights">
        <div><strong>1,350+</strong><span>Google Scholar citations</span></div>
        <div><strong>14</strong><span>h-index</span></div>
        <div><strong>$150K</strong><span>research projects led</span></div>
        <div><strong>15+</strong><span>international interns supervised</span></div>
      </section>

      <section className="about section" id="about">
        <div className="about-statement">
          <p className="kicker">Researcher · Engineer · Mentor</p>
          <h2>I learned to see intelligence as part of a system, not a model sitting alone.</h2>
        </div>
        <div className="about-copy">
          <p>
            I bring together artificial intelligence, simulation, sensing, and
            visualization to make complex systems more understandable,
            trustworthy, and useful. My research asks how intelligent systems
            can observe complex physical environments, explain what they infer,
            and support decisions under real operational constraints.
          </p>
          <Link className="text-link" href="/about">Meet Dr. Judith Njoku-Vowels <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="research section" id="research">
        <SectionHeading
          label="Research agenda"
          title="The questions I keep returning to."
          text="I develop dependable AI-enabled systems that bridge computation and the physical world while keeping people, uncertainty, and real deployment constraints in the loop."
        />
        <div className="research-grid">
          {research.map((item) => (
            <article className="research-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="focus-line">{item.focus}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <SectionHeading
          label="Selected systems"
          title="Ideas I have turned into working systems."
          text="I work across the full research arc: framing a real problem, developing methods, building a system, evaluating it, and communicating what it enables."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link className="project-card" href={project.href} key={project.title}>
              <div className={`project-visual visual-${index + 1}`}>
                <Image src={project.image} alt={`${project.title} research system`} fill sizes="(max-width: 800px) 92vw, 46vw" />
                <span>{project.eyebrow}</span>
              </div>
              <div className="project-body">
                <p className="project-result">{project.result}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="project-link">Explore this research system <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="publications section" id="publications">
        <div className="publications-top">
          <SectionHeading
            label="Scholarship"
            title="The scholarship behind the systems."
            text="Explore my scholarship by research area or by the real-world problem addressed. Each record links to its paper or an exact-title scholarly record."
          />
          <ExternalLink href={links.scholar} className="text-link">
            Google Scholar profile <ArrowUpRight size={16} />
          </ExternalLink>
        </div>
        <div className="publication-list">
          {[
            ["2026", "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration", "IEEE/CVF CVPR Workshops"],
            ["2025", "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse", "IEEE Internet of Things Journal"],
            ["2024", "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles", "IEEE Access"],
          ].map(([year, title, venue]) => (
            <article className="publication" key={title}>
              <span className="pub-year">{year}</span>
              <div><h3>{title}</h3><p>{venue}</p></div>
            </article>
          ))}
        </div>
        <Link className="button button-primary section-cta" href="/publications">Browse all publications</Link>
      </section>

      <section className="home-news section" id="news">
        <div className="publications-top">
          <SectionHeading label="Recent news" title="What I am presenting, publishing, and building." />
          <Link className="text-link" href="/news">View all news <ArrowUpRight size={16} /></Link>
        </div>
        <div className="home-news-grid">
          {recentNews.map(([date, title, text]) => (
            <article key={`${date}-${title}`}>
              <span>{date}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="kicker">Build something consequential</p>
        <h2>Let&apos;s advance intelligent systems that earn trust.</h2>
        <p>
          I welcome conversations about research collaborations, invited
          talks, interdisciplinary projects, and student mentorship.
        </p>
        <Link href="/contact" className="button button-light">
          <Mail size={17} /> jnjoku@uwyo.edu
        </Link>
        <div className="socials">
          <ExternalLink href={links.scholar}><BookOpen size={18} /> Scholar</ExternalLink>
          <ExternalLink href={links.orcid}>ORCID</ExternalLink>
          <ExternalLink href={links.linkedin}><ArrowUpRight size={18} /> LinkedIn</ExternalLink>
          <ExternalLink href={links.github}><ArrowUpRight size={18} /> GitHub</ExternalLink>
        </div>
      </section>

    </main>
  );
}
