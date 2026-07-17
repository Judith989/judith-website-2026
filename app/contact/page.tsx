import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Mail, MapPin } from "lucide-react";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "Contact | Judith Njoku-Vowels, PhD" };

const links = [
  ["Google Scholar", "https://scholar.google.com/citations?user=Ag2gYzIAAAAJ"],
  ["ORCID", "https://orcid.org/0000-0002-2294-9204"],
  ["LinkedIn", "https://linkedin.com/in/judith989"],
  ["GitHub", "https://github.com/Judith989"],
];

export default function ContactPage() {
  return (
    <main>
      <PageHero label="Contact" title="Bring me the difficult system you want to understand better." text="I welcome conversations about research collaborations, interdisciplinary projects, invited talks, and mentorship that can grow into meaningful work." />
      <section className="page-section contact-page">
        <div>
          <p className="kicker">Direct contact</p>
          <h2>Tell me what question has stayed with you.</h2>
          <div className="contact-emails">
            <a className="contact-email" href="mailto:jnjoku@uwyo.edu"><Mail />jnjoku@uwyo.edu</a>
            <a className="contact-email" href="mailto:judithnjoku24@gmail.com"><Mail />judithnjoku24@gmail.com</a>
          </div>
          <p><MapPin size={17} /> Laramie, Wyoming, USA</p>
        </div>
        <div className="contact-directory">
          {links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}><span>{label === "Google Scholar" && <BookOpen size={18} />}{label}</span><ArrowUpRight /></a>)}
        </div>
      </section>
    </main>
  );
}
