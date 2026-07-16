import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import PublicationExplorer, { type Paper } from "../publication-explorer";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "Publications | Judith Njoku-Vowels, PhD" };

function field(block: string, name: string) {
  const match = block.match(new RegExp(`${name}=\\{([\\s\\S]*?)\\}\\s*,?\\s*\\n`, "i"));
  return match?.[1].replace(/\s+/g, " ").replace(/[{}]/g, "").trim() ?? "";
}

function taxonomy(title: string) {
  const value = title.toLowerCase();
  const area = /digital twin|metaverse/.test(value) ? "Digital Twins" : /explain|trust|security|intrusion|blockchain/.test(value) ? "Trustworthy AI" : /image|vision|detector|segmentation|scene/.test(value) ? "Computer Vision" : "AI-Enabled Systems";
  const problem = /battery|energy|electric/.test(value) ? "Energy systems" : /parking|transport|vehicle|bridge|infrastructure/.test(value) ? "Mobility and infrastructure" : /farm|soil|crop|greenhouse|livestock|agri/.test(value) ? "Climate-smart agriculture" : /security|intrusion|cyber|hate/.test(value) ? "Security" : /wireless|channel|spectrum|modulation|6g/.test(value) ? "Wireless systems" : "Decision intelligence";
  return { area, problem };
}

function formatAuthors(raw: string) {
  return raw.split(/\s+and\s+/).map((author) => {
    const clean = author.trim();
    if (clean === "others") return "et al.";
    const [family, ...given] = clean.split(",").map((part) => part.trim());
    return given.length ? `${given.join(" ")} ${family}` : family;
  }).join(", ");
}

function loadPapers(): Paper[] {
  const source = fs.readFileSync(path.join(process.cwd(), "own-bib.bib"), "utf8");
  return source
    .split(/\n(?=@)/)
    .filter((block) => /^@(article|inproceedings)\{/i.test(block) && !/keywords=\{preprint\}/i.test(block))
    .map((block) => {
      const title = field(block, "title");
      const journal = field(block, "journal");
      const booktitle = field(block, "booktitle");
      const year = Number(field(block, "year")) || 0;
      const doi = field(block, "doi") || undefined;
      const authors = formatAuthors(field(block, "author"));
      const venueType = /^@article/i.test(block) ? "Journal" as const : "Conference" as const;
      const scope = /keywords=\{domestic\}/i.test(block) || /Korean|KICS|Korea/i.test(journal || booktitle) ? "Domestic" as const : "International" as const;
      return { year, title, venue: journal || booktitle, authors, doi, venueType, scope, ...taxonomy(title) };
    })
    .filter((paper) => paper.title && paper.year)
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export default function PublicationsPage() {
  const papers = loadPapers();
  return (
    <main>
      <PageHero label="Publications" title="The ideas I have tested, built, and shared." text="Explore my work by the research question, real-world problem, year, venue, or community it was written to serve." />
      <section className="page-section publications-page">
        <PublicationExplorer papers={papers} />
      </section>
    </main>
  );
}
