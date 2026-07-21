import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import ResearchWorldClient from "./research-world-client";
import type { ConferencePaper } from "./research-world-client";

export const metadata: Metadata = {
  title: "Research World | Judith Njoku-Vowels, PhD",
  description: "Walk through an immersive digital twin of Dr. Judith Njoku-Vowels' research life, projects, places, and ideas.",
};

function field(block: string, name: string) {
  const match = block.match(new RegExp(`${name}=\\{([\\s\\S]*?)\\}\\s*,?\\s*\\n`, "i"));
  return match?.[1].replace(/\\&/g, "&").replace(/[{}]/g, "").replace(/``|''/g, "").replace(/\s+/g, " ").trim() ?? "";
}

function conferencePapers(): ConferencePaper[] {
  const source = fs.readFileSync(path.join(process.cwd(), "own-bib.bib"), "utf8");
  return source.split(/\n(?=@)/).filter((block) => /^@inproceedings\{/i.test(block)).map((block) => {
    const title = field(block, "title");
    const doi = field(block, "doi");
    const url = field(block, "url");
    const verifiedPaperLinks: Record<string, string> = {
      "A Review of Intrusion Detection Techniques in MQTT-Enabled IoT Networks": "https://www.researchgate.net/publication/388024448_A_Review_of_Intrusion_Detection_Techniques_in_MQTT-Enabled_IoT_Networks",
    };
    return {
      title,
      venue: field(block, "booktitle"),
      authors: field(block, "author").split(/\s+and\s+/).map((author) => {
        const [family, ...given] = author.split(",").map((part) => part.trim());
        return given.length ? `${given.join(" ")} ${family}` : family;
      }).join(", "),
      year: Number(field(block, "year")),
      href: doi
        ? `https://doi.org/${doi}`
        : url || verifiedPaperLinks[title] || `https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=${encodeURIComponent(title)}`,
    };
  }).filter((paper) => paper.title && paper.venue && paper.year).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export default function ResearchWorldPage() {
  return <ResearchWorldClient conferencePapers={conferencePapers()} />;
}
