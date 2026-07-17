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
  url?: string;
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

const verifiedPaperUrls: Record<string, string> = {
  "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration": "https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Njoku_OmniRestore_A_Parameter-Efficient_Framework_for_Universal_Adverse-Weather_Image_Restoration_CVPRW_2026_paper.pdf",
  "PANDA: A Lightweight Digital Twin Framework for Smart Parking Management": "/research/panda",
  "BridgeSync: A Digital Twin Framework for Secure and Intelligent Smart Bridge Monitoring": "https://doi.org/10.1109/ICUFN65838.2025.11169959",
  "MetaHate: Text-Based Hate Speech Detection for Metaverse Applications Using Deep Learning": "https://ieeexplore.ieee.org/document/10392437",
  "The Role of 5G Wireless Communication System in the Metaverse": "https://www.researchgate.net/publication/364731444_The_Role_of_5G_Wireless_Communication_System_in_the_Metaverse",
  "Hunger Marketing and Blockchain Technology: Applications in Wireless Spectrum Management": "https://www.researchgate.net/publication/337335916_Hunger_marketing_and_Blockchain_Technology_Applications_in_Wireless_Spectrum_Management",
  "Multi-Feature Concatenation for Speech Dependent Automatic Speaker Identification in Maritime Autonomous Vehicles": "https://www.researchgate.net/publication/373755841_Multi-Feature_Concatenation_for_Speech_Dependent_Automatic_Speaker_Identification_in_Maritime_Autonomous_Vehicles",
  "Metaverse and Digital Twin for BMS Using MATLAB and Unreal Engine": "https://www.researchgate.net/publication/371911768_Metaverse_and_Digital_Twin_for_BMS_using_MATLAB_and_Unreal_Engine",
  "Model Comparison and Selection for Battery Digital Twin Development Using PyBaMM": "https://www.researchgate.net/publication/370636700_Model_Comparison_and_Selection_for_Battery_Digital_Twin_Development_using_PyBaMM",
  "Analysis of Deep Neural Networks-Based Digital Twin for Lithium-Ion Batteries": "https://www.researchgate.net/publication/365878142_Analysis_of_Deep_Neural_Networks-Based_Digital_Twin_for_Lithium-ion_Batteries",
  "Evaluation of Spectrograms for Keyword Spotting in Control of Autonomous Vehicles for the Metaverse": "https://www.researchgate.net/publication/361558505_Evaluation_of_Spectrograms_for_Keyword_Spotting_in_Control_of_Autonomous_Vehicles_for_The_Metaverse",
  "Real-Time Deep Learning-Based Scene Recognition Model for Metaverse Applications": "https://www.researchgate.net/publication/358947984_Real-time_Deep_Learning-based_Scene_Recognition_Model_For_Metaverse_Applications",
  "Optimizing Spectrum Sharing in UAV-to-UAV Cellular Communications": "https://www.researchgate.net/publication/358916150_Optimizing_Spectrum_Sharing_in_UAV-to-UAV_Cellular_Communications",
  "Automatic Radar Waveform Recognition Using the Wigner-Ville Distribution and AlexNet-SVM": "https://www.researchgate.net/publication/343712491_Automatic_Radar_Waveform_Recognition_using_the_Wigner-Ville_distribution_and_AlexNet-SVM",
};

function paperUrl(paper: Paper) {
  return paper.doi ? `https://doi.org/${paper.doi}` : paper.url || verifiedPaperUrls[paper.title];
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
        {visible.map((paper) => {
          const href = paperUrl(paper);
          const content = <>
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
            {href && <ArrowUpRight className="pub-arrow" size={20} />}
          </>;
          return href ? (
            <a className="publication" href={href} target={href.startsWith("/") ? undefined : "_blank"} rel={href.startsWith("/") ? undefined : "noreferrer"} key={`${paper.year}-${paper.title}`}>{content}</a>
          ) : (
            <article className="publication publication-record-only" key={`${paper.year}-${paper.title}`}>{content}</article>
          );
        })}
      </div>
    </>
  );
}
