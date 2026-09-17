import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "About | Judith Njoku-Vowels, PhD" };

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About"
        title="About"
      />
      <section className="page-section about-profile">
        <div className="about-photo"><Image src="/judith_pic2.png" alt="Judith Nkechinyere Njoku-Vowels" fill sizes="(max-width: 800px) 90vw, 38vw" /></div>
        <div className="prose">
          <p className="lead">I am a Distinguished Postdoctoral Fellow in the Secure Sensing and Learning Research Lab and the Center for Rural Community Resilience and Innovation at the University of Wyoming, working at the intersection of artificial intelligence, digital twins, and cyber-physical systems.</p>
          <p>My academic path began in petroleum engineering at the Federal University of Technology, Owerri, where I developed a practical understanding of complex physical systems. In South Korea, I moved into communications engineering and machine learning, completing an MSc focused on deep learning for wireless systems. In January 2022, I joined the ICT Convergence Research Center for post-master&apos;s research on the metaverse before pursuing a PhD centered on BatteryMetrix, a predictive, explainable, and secure digital twin framework for electric vehicle batteries.</p>
          <p>My research now connects trustworthy AI, computer vision, simulation, sensing, and visualization across transportation, energy, agriculture, and smart infrastructure. I am especially interested in systems that must operate under uncertainty and still provide evidence people can understand and use.</p>
          <blockquote className="personal-maxim">
            <p>&ldquo;If you hear a voice within you say, &lsquo;You cannot paint,&rsquo; then by all means paint, and that voice will be silenced.&rdquo;</p>
            <cite>Vincent van Gogh, adapted from a letter to Theo van Gogh, October 28, 1883</cite>
          </blockquote>
          <p>I joined WomenTech Network in May 2020 and became a Global Ambassador that June. I volunteer as a Content Developer with the National Postdoctoral Association. From 2025 to 2026, I coordinated seminars for the Prof. Cosmas Daughters Forum, including speaker outreach and event moderation.</p>
        </div>
      </section>
      <section className="page-section education-values">
        <div>
          <h2>Teaching</h2>
          <p>I teach by connecting foundations to authentic systems. Students should understand why a method works, test where it fails, communicate its assumptions, and apply it responsibly. My classroom practice emphasizes active learning, reproducible inquiry, collaborative problem solving, and the confidence to move from theory into implementation.</p>
        </div>
        <div>
          <h2>Mentorship</h2>
          <p>I create structured, supportive environments in which researchers learn to frame consequential questions, make defensible technical choices, interpret evidence honestly, and communicate their contribution with clarity. I adapt guidance to each person while maintaining high standards, expanding access to opportunity, and helping mentees build an identity and direction of their own.</p>
        </div>
      </section>
    </main>
  );
}
