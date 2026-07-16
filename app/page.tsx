import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const links = {
  email: "mailto:judithnjoku24@gmail.com",
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

const journey = [
  ["2025 to Present", "Distinguished Postdoctoral Fellow", "University of Wyoming"],
  ["2022 to 2025", "PhD, IT Convergence Engineering", "Kumoh National Institute of Technology"],
  ["2024", "Visiting Research Scholar", "Michigan State University"],
  ["2019 to 2021", "MSc, Electronics Engineering", "Kumoh National Institute of Technology"],
  ["2014", "BEng, Petroleum Engineering", "Federal University of Technology, Owerri"],
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
          <h1>
            I build intelligent systems that help the physical world{" "}
            <em>see, predict, and decide.</em>
          </h1>
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
            From petroleum engineering in Nigeria to communications research
            in South Korea and AI-enabled systems in Wyoming, my path has
            taught me to look beyond isolated models. I study how intelligence
            interacts with physical systems, operational constraints, and the
            people who depend on their decisions.
          </p>
          <p>
            I bring together artificial intelligence, simulation, sensing, and
            visualization to make complex systems more understandable,
            trustworthy, and useful. I approach mentorship with the same
            principle: strong research should expand both knowledge and the
            people equipped to create it.
          </p>
        </div>
        <div className="principles" aria-label="Research philosophy">
          <article><span>01</span><h3>Intelligibility</h3><p>AI systems should communicate the evidence, uncertainty, and limitations behind their outputs.</p></article>
          <article><span>02</span><h3>Integration</h3><p>Intelligence becomes most useful when models, sensors, simulations, and human expertise work together.</p></article>
          <article><span>03</span><h3>Impact</h3><p>Research should improve consequential systems, from safer mobility and energy to resilient communities.</p></article>
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
                <span className="project-link">View related publication <ArrowUpRight size={15} /></span>
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

      <section className="teaching section" id="teaching">
        <div className="teaching-copy">
          <SectionHeading
            label="Teaching & mentorship"
            title="I help learners become rigorous, independent problem solvers."
          />
          <p>
            My teaching philosophy connects foundational ideas to authentic
            systems through active learning, reproducible inquiry, and
            project-based systems thinking. Students learn not only to build
            models, but to question assumptions, evaluate limitations, and
            communicate decisions responsibly.
          </p>
          <div className="teaching-stats">
            <div><Users /><strong>Individualized guidance</strong><span>support that responds to each researcher&apos;s goals and stage</span></div>
            <div><GraduationCap /><strong>Independent thinking</strong><span>ownership of questions, methods, evidence, and scholarly voice</span></div>
            <div><ShieldCheck /><strong>High standards with care</strong><span>rigor, honest evaluation, belonging, and professional growth</span></div>
          </div>
        </div>
        <div className="mentorship-panel">
          <p className="kicker">Mentorship in practice</p>
          <blockquote>
            I mentor researchers to become independent thinkers who can frame
            consequential questions, make defensible technical choices, and
            communicate what the evidence truly supports.
          </blockquote>
          <p>
            My role is to create structure, remove unnecessary barriers, offer
            candid feedback, and help each person develop a direction of their
            own.
          </p>
        </div>
      </section>

      <section className="journey section" id="cv">
        <SectionHeading label="Academic journey" title="Three countries, three engineering traditions, one evolving research identity." />
        <div className="journey-grid">
          {journey.map(([date, role, place]) => (
            <article key={`${date}-${role}`}>
              <span>{date}</span>
              <div><h3>{role}</h3><p>{place}</p></div>
            </article>
          ))}
        </div>
        <div className="cv-note">
          <Download size={18} />
          <p>
            View the complete academic record online or download a PDF from the{" "}
            <Link href="/cv">CV page</Link>.
          </p>
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
          <Mail size={17} /> judithnjoku24@gmail.com
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
