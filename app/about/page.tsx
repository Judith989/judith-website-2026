import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "About | Judith Njoku-Vowels, PhD" };

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About"
        title={<>Meet Dr. Judith <span className="keep-together">Njoku-Vowels.</span></>}
        text="Meet the engineer, researcher, and mentor behind a journey from petroleum systems in Nigeria to trustworthy intelligent systems across South Korea and the United States."
      />
      <section className="page-section about-profile">
        <div className="about-photo"><Image src="/judith_pic2.png" alt="Judith Nkechinyere Njoku-Vowels" fill sizes="(max-width: 800px) 90vw, 38vw" /></div>
        <div className="prose">
          <p className="lead">I am a Distinguished Postdoctoral Fellow at the University of Wyoming working at the intersection of artificial intelligence, digital twins, and cyber-physical systems.</p>
          <p>My academic path began in petroleum engineering at the Federal University of Technology, Owerri, where I developed a practical understanding of complex physical systems. In South Korea, I moved into communications engineering and machine learning, completing an MSc focused on deep learning for wireless systems. In January 2022, I joined the ICT Convergence Research Center for post-master&apos;s research on the metaverse before pursuing a PhD centered on BatteryMetrix, a predictive, explainable, and secure digital twin framework for electric vehicle batteries.</p>
          <p>My research now connects trustworthy AI, computer vision, simulation, sensing, and visualization across transportation, energy, agriculture, and smart infrastructure. I am especially interested in systems that must operate under uncertainty and still provide evidence people can understand and use.</p>
          <p>Across each stage of this journey, I have been drawn to work that crosses boundaries: engineering and computing, theory and deployment, physical models and learned intelligence, individual achievement and collective growth. This interdisciplinary perspective is central to both my research identity and the academic communities I help build.</p>
          <p>Beyond the laboratory, I am committed to widening participation in research and technology. Since joining the WomenTech Network as a Global Ambassador in South Korea in mid-2020, I have helped connect women in technology across borders and amplify a more inclusive vision of technical leadership. During a one-year term spanning 2025 and 2026, I also served as Seminar Coordinator for the women-empowerment group at the Prof. Cosmas Development Forum, where I identified and invited speakers, planned and managed events, anchored seminars, and moderated conversations on career mobility, financial well-being, mental health, relationships, and personal safety. I approach scholarship as a public and collaborative practice, one that should produce rigorous knowledge, prepare thoughtful researchers, and create pathways for people whose potential may otherwise be overlooked.</p>
        </div>
      </section>
      <section className="page-section about-brand">
        <div className="about-brand-mark">
          <Image src="/logo-judith.png" alt="Judith Njoku-Vowels monogram logo" fill sizes="(max-width: 800px) 72vw, 34vw" />
        </div>
        <div>
          <p className="kicker">The mark behind my work</p>
          <h2>A personal identity shaped by engineering, intelligence, and the systems we build.</h2>
          <p>The profile, monogram, and branching circuit traces bring together the parts of my research identity: the person behind the work, an engineering foundation, and intelligent systems that connect physical and digital worlds. The maroon and gold palette carries that identity across my scholarship, projects, and academic community.</p>
        </div>
      </section>
      <section className="page-section education-values">
        <div>
          <p className="kicker">Teaching philosophy</p>
          <h2>Learning becomes durable when students use ideas to solve meaningful problems.</h2>
          <p>I teach by connecting foundations to authentic systems. Students should understand why a method works, test where it fails, communicate its assumptions, and apply it responsibly. My classroom practice emphasizes active learning, reproducible inquiry, collaborative problem solving, and the confidence to move from theory into implementation.</p>
        </div>
        <div>
          <p className="kicker">Mentorship philosophy</p>
          <h2>Mentorship should develop independent thinkers, not replicas of the mentor.</h2>
          <p>I create structured, supportive environments in which researchers learn to frame consequential questions, make defensible technical choices, interpret evidence honestly, and communicate their contribution with clarity. I adapt guidance to each person while maintaining high standards, expanding access to opportunity, and helping mentees build an identity and direction of their own.</p>
        </div>
      </section>
      <section className="page-section philosophy">
        <div><p className="kicker">Research philosophy</p><h2>Three principles guide my work.</h2></div>
        <div className="principles">
          <article><span>01</span><h3>Intelligibility</h3><p>AI systems should communicate the evidence, uncertainty, and limitations behind their outputs.</p></article>
          <article><span>02</span><h3>Integration</h3><p>Models, sensors, simulations, and human expertise should work as a coherent system.</p></article>
          <article><span>03</span><h3>Impact</h3><p>Research should improve consequential systems and broaden who can participate in creating them.</p></article>
        </div>
      </section>
    </main>
  );
}
