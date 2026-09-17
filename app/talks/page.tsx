import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "Talks | Judith Njoku-Vowels, PhD" };

type Talk = {
  date: string;
  title: string;
  event: string;
  href?: string;
  linkLabel?: string;
};

const invitedTalks: Talk[] = [
  { date: "Jun 12, 2026", title: "Can AI Drive in the Storm? Restoring Vision for Autonomous Vehicles", event: "Invited REU colloquium, University of Wyoming, Laramie" },
  { date: "May 16, 2026", title: "The Insider Playbook to Winning Global Scholarships & Fellowships", event: "Invited talk, Prof. Cosmas Daughters Forum, virtual", href: "https://www.linkedin.com/posts/pcdf-official_studyabraod-scholarships-careeradvancement-activity-7461359203580964864-CzOA" },
  { date: "May 6, 2026", title: "UW Computing Meet Up on Digital Twins", event: "Facilitator and presenter, University of Wyoming School of Computing, Laramie, Wyoming", href: "https://www.linkedin.com/posts/judith989_four-weeks-ago-i-facilitated-the-uw-computing-activity-7468040070458040320-976W" },
  { date: "Apr 4, 2026", title: "Inspiring Young Ladies in STEM", event: "Keynote, International Women in Tech Day, WomenTech Kenya, virtual", href: "https://www.linkedin.com/posts/judith989_most-young-women-dont-lack-potential-they-activity-7444735983377444864-KVEv" },
  { date: "May 25–26, 2022", title: "Metaverse Applicability to Transportation Systems", event: "Metaverse and The Industry Workshop, Kumoh National Institute of Technology, Gumi, South Korea", href: "https://www.youtube.com/watch?v=nk00bl7RHBU", linkLabel: "Watch the talk" },
];

const moderatedSeminars: Talk[] = [
  { date: "Feb 21, 2026", title: "Relationships and intentional growth", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.linkedin.com/posts/pcdf-official_valentine2026-interactivesessions-pcdf-activity-7421659965150568448-6s0N" },
  { date: "Jan 17, 2026", title: "Canada permanent residence", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.linkedin.com/posts/judith989_some-opportunities-look-simple-on-the-surface-activity-7415902179968135168-bJ1h" },
  { date: "Nov 15, 2025", title: "UK Global Talent Visa", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.linkedin.com/posts/pcdf-official_globaltalentvisa-ukvisa-careergrowth-activity-7385028052008759296-xdTp" },
  { date: "Sep 20, 2025", title: "Recognizing and responding to abuse", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.linkedin.com/posts/pcdf-official_mentalhealthawareness-emotionalwellbeing-activity-7369009563162800128-kiBw" },
  { date: "Jul 19, 2025", title: "Practical personal finance", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.facebook.com/share/p/1CdxCmjFe7/" },
  { date: "Jun 21, 2025", title: "Mental health and stress management", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.facebook.com/share/p/19FFmM3Ja3/" },
  { date: "Apr 26, 2025", title: "EB1 and EB2 visa pathways", event: "Seminar moderator, Prof. Cosmas Daughters Forum", href: "https://www.facebook.com/share/p/1BPntho27g/" },
];

const conferenceTalks: Talk[] = [
  { date: "Jun 17, 2026", title: "PANDA: predictive smart-parking digital twin", event: "ASCE International Conference on Computing in Civil Engineering, virtual presentation", href: "/research/panda" },
  { date: "Jun 6, 2026", title: "OmniRestore: A Parameter-Efficient Framework for Universal Adverse-Weather Image Restoration", event: "NTIRE Workshop at CVPR, Denver, Colorado", href: "https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Njoku_OmniRestore_A_Parameter-Efficient_Framework_for_Universal_Adverse-Weather_Image_Restoration_CVPRW_2026_paper.pdf" },
  { date: "Apr 2025", title: "PureTwin: A Reliable Non-Fungible Digital Twin Framework for Battery Management Systems", event: "JCCI 2025, Sokcho, South Korea", href: "/publications" },
  { date: "Feb 2025", title: "Trustworthy Battery Management: A Digital Twin Approach Leveraging XAI and Blockchain", event: "ICAIIC 2025, Fukuoka, Japan", href: "https://doi.org/10.1109/ICAIIC64266.2025.10920782" },
  { date: "Oct 2024", title: "EL-Alert: An Explainable Lightweight AST Model for Military Situational Awareness and Surveillance", event: "ICTC 2024, Jeju Island, South Korea", href: "/publications" },
  { date: "Aug 2024", title: "TwinMil: Semantic Segmentation-based Digital Twin Framework for Military Surveillance", event: "ICMIC 2024, Kuala Lumpur, Malaysia", href: "/publications" },
  { date: "Apr 2024", title: "SHAP-based Explainable Model-in-the-Loop for Digital Twins in Battery Management Systems", event: "JCCI 2024, Busan, South Korea", href: "/publications" },
  { date: "Oct 2023", title: "MetaHate: Text-based Hate Speech Detection for Metaverse Applications Using Deep Learning", event: "ICTC 2023, Jeju Island, South Korea", href: "https://ieeexplore.ieee.org/document/10392437" },
  { date: "Aug 2023", title: "Multi-Feature Concatenation for Speech Dependent Automatic Speaker Identification in Maritime Autonomous Vehicles", event: "ICMIC 2023, Jeju Island, South Korea", href: "https://www.researchgate.net/publication/373755841_Multi-Feature_Concatenation_for_Speech_Dependent_Automatic_Speaker_Identification_in_Maritime_Autonomous_Vehicles" },
  { date: "Jul 2023", title: "Building a Metaverse for Transportation Systems: A Brief Review and Demonstration", event: "ICUFN 2023, Paris, France", href: "https://doi.org/10.1109/ICUFN57995.2023.10199405" },
  { date: "Jun 2023", title: "Metaverse and Digital Twin for BMS using MATLAB and Unreal Engine", event: "KICS Summer Conference, Jeju Island, South Korea", href: "https://www.researchgate.net/publication/371911768_Metaverse_and_Digital_Twin_for_BMS_using_MATLAB_and_Unreal_Engine" },
  { date: "Apr 2023", title: "Model Comparison and Selection for Battery Digital Twin Development using PyBaMM", event: "JCCI 2023, Yeosu, South Korea", href: "https://www.researchgate.net/publication/370636700_Model_Comparison_and_Selection_for_Battery_Digital_Twin_Development_using_PyBaMM" },
  { date: "Nov 2022", title: "Analysis of Deep Neural Networks-Based Digital Twin for Lithium-ion Batteries", event: "KICS Fall Conference, Gyeongju, South Korea", href: "https://www.researchgate.net/publication/365878142_Analysis_of_Deep_Neural_Networks-Based_Digital_Twin_for_Lithium-ion_Batteries" },
  { date: "Oct 2022", title: "The Role of 5G Wireless Communication System in the Metaverse", event: "APCC 2022, Jeju Island, South Korea", href: "https://www.researchgate.net/publication/364731444_The_Role_of_5G_Wireless_Communication_System_in_the_Metaverse" },
  { date: "Jun 2022", title: "Evaluation of Spectrograms for Keyword Spotting in Control of Autonomous Vehicles for the Metaverse", event: "KICS Summer Conference, Jeju Island, South Korea", href: "https://www.researchgate.net/publication/361558505_Evaluation_of_Spectrograms_for_Keyword_Spotting_in_Control_of_Autonomous_Vehicles_for_The_Metaverse" },
  { date: "Feb 2022", title: "Real-time Deep Learning-based Scene Recognition Model for Metaverse Applications", event: "KICS Winter Conference, Pyeongchang, South Korea", href: "https://www.researchgate.net/publication/358947984_Real-time_Deep_Learning-based_Scene_Recognition_Model_For_Metaverse_Applications" },
  { date: "Feb 2021", title: "Optimizing Spectrum Sharing in UAV-to-UAV Cellular Communications", event: "KICS Winter Conference, virtual presentation", href: "https://www.researchgate.net/publication/358916150_Optimizing_Spectrum_Sharing_in_UAV-to-UAV_Cellular_Communications" },
  { date: "Feb 2021", title: "Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression", event: "KICS Winter Conference, virtual presentation", href: "/publications" },
  { date: "Jun 2020", title: "Automatic Radar Waveform Recognition using the Wigner-Ville Distribution and AlexNet-SVM", event: "KICS Summer Conference, Pyeongchang, South Korea", href: "https://www.researchgate.net/publication/343712491_Automatic_Radar_Waveform_Recognition_using_the_Wigner-Ville_distribution_and_AlexNet-SVM" },
  { date: "Feb 2020", title: "Learning to Communicate with Autoencoders", event: "ICAIIC 2020", href: "https://doi.org/10.1109/ICAIIC48513.2020.9065246" },
  { date: "Nov 2019", title: "Hunger Marketing and Blockchain Technology: Applications in Wireless Spectrum Management", event: "KICS Conference, South Korea", href: "https://www.researchgate.net/publication/337335916_Hunger_marketing_and_Blockchain_Technology_Applications_in_Wireless_Spectrum_Management" },
];

function TalkList({ talks }: { talks: Talk[] }) {
  return (
    <div className="talk-list">
      {talks.map((talk) => (
        <article className="talk-row" key={talk.date + talk.title}>
          <span className="talk-date">{talk.date}</span>
          <div>
            <h3>{talk.title}</h3>
            <p>{talk.event}</p>
            {talk.href && (talk.href.startsWith("/") ? (
              <Link href={talk.href}>{talk.linkLabel ?? "Details"} <ArrowUpRight size={14} /></Link>
            ) : (
              <a href={talk.href} target="_blank" rel="noreferrer">{talk.linkLabel ?? "Paper or event"} <ArrowUpRight size={14} /></a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function TalksPage() {
  return (
    <main>
      <PageHero label="Talks" title="Talks and presentations" />
      <section className="page-section talks-section">
        <h2>Invited talks and public engagement</h2>
        <TalkList talks={invitedTalks} />
      </section>
      <section className="page-section talks-section">
        <h2>Seminars I moderated</h2>
        <TalkList talks={moderatedSeminars} />
      </section>
      <section className="page-section talks-section">
        <h2>Conference presentations</h2>
        <TalkList talks={conferenceTalks} />
        <p className="talks-footnote">For the complete paper record, see <Link href="/publications">Publications</Link>.</p>
      </section>
    </main>
  );
}
