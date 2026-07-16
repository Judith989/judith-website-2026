"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export type Paper = {
  year: number;
  title: string;
  venue: string;
  authors?: string;
  area: string;
  problem: string;
  doi?: string;
  venueType?: "Journal" | "Conference";
  scope?: "International" | "Domestic";
};

const defaultPapers: Paper[] = [
  { year: 2026, title: "Developing Future Workforce Skills through Remote Practical Training", venue: "Computers and Education Open", area: "AI & Society", problem: "Workforce development" },
  { year: 2026, title: "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration", venue: "IEEE/CVF CVPR Workshops", area: "Computer Vision", problem: "Robust perception" },
  { year: 2026, title: "PANDA: A Lightweight Digital Twin Framework for Smart Parking Management", venue: "International Conference on Computing in Civil Engineering", area: "Digital Twins", problem: "Smart infrastructure" },
  { year: 2025, title: "Wireless Communication Protocols for EV Digital Twin Battery Data Exchange", venue: "Journal of Communications and Networks", area: "Digital Twins", problem: "Energy systems" },
  { year: 2025, title: "Digital Twin and Metaverse-Enhanced Battery Management for Electric Vehicles", venue: "High-Confidence Computing", area: "Digital Twins", problem: "Energy systems" },
  { year: 2025, title: "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse", venue: "IEEE Internet of Things Journal", area: "Trustworthy AI", problem: "Security", doi: "10.1109/JIOT.2025.3568477" },
  { year: 2025, title: "Leveraging Digital Twin Technology for Battery Management: A Case Study Review", venue: "IEEE Access", area: "Digital Twins", problem: "Energy systems" },
  { year: 2025, title: "HyBaTwin: Web-Based Hybrid Digital Twin Platform for Electric Vehicle Battery Capacity Estimation", venue: "Journal of KICS", area: "Digital Twins", problem: "Energy systems" },
  { year: 2025, title: "Enhancing Resilience in Specialty Crop Production in a Changing Climate through Smart Systems Adoption", venue: "Smart Agricultural Technology", area: "AI-Enabled Systems", problem: "Climate-smart agriculture", doi: "10.1016/j.atech.2025.100897" },
  { year: 2025, title: "Advanced Multimodal Prediction of Components of Livestock Feed Materials Using Knowledge Distillation", venue: "IEEE Transactions on AgriFood Electronics", area: "AI-Enabled Systems", problem: "Climate-smart agriculture", doi: "10.1109/TAFE.2025.3548949" },
  { year: 2025, title: "A Digital Twin Framework for Sensor Selection and Microclimate Monitoring in Greenhouses", venue: "AgriEngineering", area: "Digital Twins", problem: "Climate-smart agriculture" },
  { year: 2025, title: "BridgeSync: A Digital Twin Framework for Secure and Intelligent Smart Bridge Monitoring", venue: "ICUFN", area: "Digital Twins", problem: "Smart infrastructure" },
  { year: 2025, title: "Trustworthy Battery Management: A Digital Twin Approach Leveraging XAI and Blockchain", venue: "ICAIIC", area: "Trustworthy AI", problem: "Energy systems", doi: "10.1109/ICAIIC64266.2025.10920782" },
  { year: 2025, title: "Explainable AI for Interpretable and Model-Agnostic Energy Consumption Prediction", venue: "IEEE IAS Annual Meeting", area: "Trustworthy AI", problem: "Energy systems", doi: "10.1109/IAS62731.2025.11061571" },
  { year: 2024, title: "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles", venue: "IEEE Access", area: "Trustworthy AI", problem: "Energy systems", doi: "10.1109/ACCESS.2024.3413075" },
  { year: 2024, title: "Evaluating Regression Techniques for Service Advisor Performance Analysis in Automotive Dealerships", venue: "Journal of Retailing and Consumer Services", area: "AI-Enabled Systems", problem: "Decision intelligence" },
  { year: 2024, title: "Metaverse in Advanced Manufacturing: Background, Applications, Limitations, Open Issues & Future Directions", venue: "ICT Express", area: "Digital Twins", problem: "Smart infrastructure" },
  { year: 2024, title: "Zero-Trust Marine Cyberdefense for IoT-Based Communications: An Explainable Approach", venue: "Electronics", area: "Trustworthy AI", problem: "Security", doi: "10.3390/electronics13020276" },
  { year: 2024, title: "Estimation of Physico-Chemical Properties of Soil Using Machine Learning", venue: "Smart Agricultural Technology", area: "AI-Enabled Systems", problem: "Climate-smart agriculture" },
  { year: 2024, title: "EL-Alert: An Explainable Lightweight AST Model for Military Situational Awareness and Surveillance", venue: "ICTC", area: "Trustworthy AI", problem: "Robust perception", doi: "10.1109/ICTC62082.2024.10826893" },
  { year: 2023, title: "Prospects and Challenges of Metaverse Application in Data-Driven Intelligent Transportation Systems", venue: "IET Intelligent Transport Systems", area: "Digital Twins", problem: "Mobility", doi: "10.1049/itr2.12252" },
  { year: 2023, title: "Explainable Artificial Intelligence for Intrusion Detection and Mitigation in Intelligent Connected Vehicles: A Review", venue: "Applied Sciences", area: "Trustworthy AI", problem: "Security", doi: "10.3390/app13031252" },
  { year: 2023, title: "Enhancing Security and Accountability in Autonomous Vehicles through Robust Speaker Identification and Blockchain-Based Event Recording", venue: "Electronics", area: "Trustworthy AI", problem: "Security", doi: "10.3390/electronics12244998" },
  { year: 2023, title: "Building a Metaverse for Transportation Systems: A Brief Review and Demonstration", venue: "ICUFN", area: "Digital Twins", problem: "Mobility", doi: "10.1109/ICUFN57995.2023.10199405" },
  { year: 2022, title: "Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression", venue: "ICT Express", area: "AI-Enabled Systems", problem: "Wireless systems", doi: "10.1016/j.icte.2021.08.011" },
  { year: 2022, title: "Deep Learning Based Data Fusion Methods for Multimodal Emotion Recognition", venue: "Journal of KICS", area: "AI-Enabled Systems", problem: "Multimodal learning" },
  { year: 2022, title: "State-of-the-Art Object Detectors for Vehicle, Pedestrian, and Traffic Sign Detection for Smart Parking Systems", venue: "ICTC", area: "Computer Vision", problem: "Mobility", doi: "10.1109/ICTC55196.2022.9952856" },
  { year: 2021, title: "CGDNet: Efficient Hybrid Deep Learning Model for Robust Automatic Modulation Recognition", venue: "IEEE Networking Letters", area: "AI-Enabled Systems", problem: "Wireless systems", doi: "10.1109/LNET.2021.3057637" },
  { year: 2021, title: "BLER Performance Evaluation of an Enhanced Channel Autoencoder", venue: "Computer Communications", area: "AI-Enabled Systems", problem: "Wireless systems", doi: "10.1016/j.comcom.2021.05.026" },
];

function paperUrl(paper: Paper) {
  return paper.doi
    ? `https://doi.org/${paper.doi}`
    : `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${paper.title}"`)}`;
}

function AuthorLine({ authors }: { authors?: string }) {
  if (!authors) return null;
  const parts = authors.split("Judith Nkechinyere Njoku");
  return (
    <p className="paper-authors">
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>{part}{index < parts.length - 1 && <strong>Judith Nkechinyere Njoku</strong>}</span>
      ))}
    </p>
  );
}

export default function PublicationExplorer({ papers = defaultPapers }: { papers?: Paper[] }) {
  const [area, setArea] = useState("All");
  const [problem, setProblem] = useState("All");
  const [year, setYear] = useState("All");
  const [venueType, setVenueType] = useState("All");
  const [scope, setScope] = useState("All");
  const areas = ["All", ...Array.from(new Set(papers.map((paper) => paper.area)))];
  const problems = ["All", ...Array.from(new Set(papers.map((paper) => paper.problem)))];
  const years = ["All", ...Array.from(new Set(papers.map((paper) => String(paper.year))))];

  const visible = useMemo(
    () =>
      papers.filter(
        (paper) =>
          (area === "All" || paper.area === area) &&
          (problem === "All" || paper.problem === problem) &&
          (year === "All" || String(paper.year) === year) &&
          (venueType === "All" || paper.venueType === venueType) &&
          (scope === "All" || paper.scope === scope),
      ),
    [area, problem, year, venueType, scope, papers],
  );

  return (
    <>
      <div className="publication-filters" aria-label="Filter publications">
        <label>
          <span>Research area</span>
          <select value={area} onChange={(event) => setArea(event.target.value)}>
            {areas.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            {years.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Venue type</span>
          <select value={venueType} onChange={(event) => setVenueType(event.target.value)}>
            {["All", "Journal", "Conference"].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Scope</span>
          <select value={scope} onChange={(event) => setScope(event.target.value)}>
            {["All", "International", "Domestic"].map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Problem</span>
          <select value={problem} onChange={(event) => setProblem(event.target.value)}>
            {problems.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <p>{visible.length} publications</p>
      </div>

      <div className="publication-list">
        {visible.map((paper) => (
          <a
            className="publication"
            href={paperUrl(paper)}
            target="_blank"
            rel="noreferrer"
            key={`${paper.year}-${paper.title}`}
          >
            <span className="pub-year">{paper.year}</span>
            <div>
              <h3>{paper.title}</h3>
              <AuthorLine authors={paper.authors} />
              <p>{paper.venue}</p>
              <div className="paper-taxonomy">
                <span>{paper.area}</span><span>{paper.problem}</span>
                {paper.venueType && <span>{paper.venueType}</span>}
                {paper.scope && <span>{paper.scope}</span>}
              </div>
            </div>
            <ArrowUpRight className="pub-arrow" size={20} />
          </a>
        ))}
      </div>
    </>
  );
}
