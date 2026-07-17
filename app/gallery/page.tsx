import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../site-chrome";
import PhotoStoryCarousel from "./photo-story-carousel";

export const metadata: Metadata = { title: "Gallery | Judith Njoku-Vowels, PhD" };

const phdGraduation = [
  { src: "/gallery/phd_grad1.jpeg", alt: "Judith Njoku-Vowels at her PhD graduation", caption: "Celebrating the conferral of my PhD in IT Convergence Engineering at Kumoh National Institute of Technology in South Korea on August 22, 2025." },
  { src: "/gallery/phd_grad2.jpeg", alt: "Judith Njoku-Vowels celebrating with colleagues at her PhD graduation", caption: "A graduation celebration shared with members of the academic community who were part of the doctoral journey." },
  { src: "/gallery/phd_grad3.jpeg", alt: "Judith Njoku-Vowels in graduation regalia with supporters", caption: "Marking the completion of BatteryMetrix and a doctoral chapter shaped by research, mentorship, and community." },
];

const cvprPresentation = [
  { src: "/gallery/cvpr_2026.jpg", alt: "Judith Njoku-Vowels beside the OmniRestore poster at CVPR 2026", caption: "At the OmniRestore poster during the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops, held June 3 to 7, 2026 at the Colorado Convention Center in Denver, Colorado." },
  { src: "/gallery/omnirestore_cvpr2026.jpg", alt: "OmniRestore research poster displayed at CVPR 2026", caption: "The OmniRestore poster presents our parameter-efficient framework for restoring images degraded by rain, snow, haze, and other adverse weather conditions." },
];

const pandaPresentation = [
  { src: "/digital_twin_i3ce.png", alt: "PANDA predictive smart parking digital twin demonstrated during i3CE 2026", caption: "The PANDA demonstration presented virtually at i3CE 2026. The Cesium environment combines current parking occupancy, module-level inspection, historical patterns, and multi-horizon forecasts for a retail parking facility in Laramie, Wyoming." },
  { src: "/research/panda-image4.png", alt: "PANDA three-dimensional parking facility digital twin", caption: "The research system maps present and predicted states to parking modules and individual spaces, allowing the audience to inspect how the facility changes over time." },
];

const metaverseWorkshop = [
  { src: "/gallery/metaverse-workshop-day-1.jpg", alt: "Metaverse and The Industry Workshop program", caption: "The two-day workshop I co-organized with the ICT Convergence Research Center at Kumoh National Institute of Technology brought together eight presentations on metaverse foundations and industry applications." },
  { src: "/gallery/metaverse-workshop-introduction.jpg", alt: "Introduction to the Metaverse workshop presentation", caption: "The program opened by establishing the technologies, virtual environments, and interaction models that shape the metaverse." },
  { src: "/gallery/metaverse-workshop-manufacturing.jpg", alt: "Metaverse applicability to manufacturing workshop presentation", caption: "The manufacturing session examined how immersive environments and digital representations can support industrial operations and collaboration." },
  { src: "/gallery/metaverse-workshop-blockchain.jpg", alt: "Pure Wallet and offline blockchain transactions workshop presentation", caption: "The blockchain session explored Pure Wallet and offline transactions as infrastructure for trusted exchange in connected virtual environments." },
  { src: "/gallery/metaverse-workshop-nft-full.jpg", alt: "Metaverse and NFT with Creativia workshop presentation", caption: "Metaverse and NFT with Creativia connected digital ownership, creative practice, and exhibition experiences inside virtual worlds." },
  { src: "/gallery/metaverse-workshop-ai.jpg", alt: "Artificial Intelligence and Metaverse workshop presentation", caption: "The artificial intelligence session examined how learning systems can support perception, interaction, and adaptive experiences in the metaverse." },
  { src: "/gallery/metaverse-workshop-transportation-full.jpg", alt: "Judith Njoku-Vowels presenting transportation applications of the metaverse", caption: "I delivered Metaverse Applicability to Transportation Systems, examining how virtual environments and digital twins could extend transportation monitoring, interaction, and decision support." },
  { src: "/gallery/metaverse-workshop-trends.jpg", alt: "Global metaverse research trends workshop presentation", caption: "The research-trends session mapped the emerging domains, questions, and international directions shaping metaverse scholarship." },
  { src: "/gallery/metaverse-workshop-security.jpg", alt: "Security in the Metaverse workshop presentation", caption: "The closing security session considered the threats, trust requirements, and safeguards needed as metaverse systems become more connected." },
];

const uwDigitalTwinsMeetup = [
  { src: "/gallery/uw-digital-twins-meetup-1.jpg", alt: "University of Wyoming Computing Meet Up poster for Digital Twins", caption: "The University of Wyoming School of Computing brought its interdisciplinary community together for lightning talks, discussion, and conversation on digital twins at Altitude Chophouse in Laramie on May 6, 2026." },
  { src: "/gallery/uw-digital-twins-meetup-2.jpg", alt: "Vanessa Lueck presenting at the University of Wyoming Digital Twins Computing Meet Up", caption: "Vanessa Lueck opened the six-talk program with the people and policy perspective, grounding the technical conversation in the decisions, communities, and governance structures surrounding digital twins." },
  { src: "/gallery/uw-digital-twins-meetup-3.jpg", alt: "University of Wyoming community attending the Digital Twins Computing Meet Up", caption: "The evening format made room for informal questions and interdisciplinary exchange among University of Wyoming researchers and community members after the lightning talks." },
  { src: "/gallery/uw-digital-twins-meetup-4.jpg", alt: "Jian Gong presenting sensor networks at the University of Wyoming Digital Twins Computing Meet Up", caption: "Jian Gong presented the sensor-network layer of digital twins, connecting adaptive sensing and neuromorphic computing with the data systems that keep physical and virtual assets synchronized." },
  { src: "/gallery/uw-digital-twins-meetup-5.jpg", alt: "Wabi Demeke presenting physics modeling at the University of Wyoming Digital Twins Computing Meet Up", caption: "Wabi Demeke demonstrated physics-guided artificial intelligence through a damped-oscillator example, showing how physical equations and learned models can strengthen one another." },
];

const moments = [
  { src: "/gallery/conference-2025-07-09.jpg", title: "ICUFN 2025, 16th International Conference on Ubiquitous and Future Networks", detail: "At Iscte, University Institute of Lisbon in Portugal, July 8 to 11, 2025. Connecting with the international future-networks community while sharing research across intelligent bridges, battery digital twins, and emerging communication systems.", orientation: "portrait" },
  { src: "/gallery/research-2025-04-25.jpg", title: "JCCI 2025, 35th Joint Conference on Telecommunications and Information", detail: "Presenting PureTwin, an interactive non-fungible digital twin framework for battery management systems, at Sokcho Sonocalm Delpino Resort in South Korea. JCCI 2025 was held April 23 to 25, 2025.", orientation: "wide" },
  { src: "/gallery/conference-2025-02-19.jpg", title: "International Conference on Artificial Intelligence in Information and Communication 2025", detail: "At ICAIIC 2025 in Fukuoka, Japan, I presented Trustworthy Battery Management: A Digital Twin Approach Leveraging XAI and Blockchain.", orientation: "portrait" },
  { src: "/gallery/conference-2024-11-21.jpg", title: "Korean Institute of Communications and Information Sciences Fall Conference 2024", detail: "Presenting ProphEn: Advanced Energy Forecasting for Korean Industries with Seasonal and Logistic Growth in Gyeongju, South Korea.", orientation: "portrait" },
  { src: "/gallery/conference-2024-10-16.jpg", title: "International Conference on Information and Communication Technology Convergence 2024", detail: "At ICTC 2024 on Jeju Island, South Korea, I presented EL-Alert: An Explainable Lightweight AST Model for Military Situational Awareness and Surveillance.", orientation: "portrait" },
  { src: "/gallery/conference-2024-08-08.jpg", title: "International Conference on Mobile, Military and Maritime IT Convergence 2024", detail: "Presenting TwinMil: Semantic Segmentation-based Digital Twin Framework for Military Surveillance, August 7 to 9 at the Concorde Hotel in Kuala Lumpur, Malaysia.", orientation: "wide" },
  { src: "/gallery/conference-2024-04-25.jpg", title: "JCCI 2024, 34th Joint Conference on Telecommunications and Information", detail: "Presenting SHAP-based Explainable Model-in-the-Loop for Digital Twins in Battery Management Systems at Busan Paradise Hotel in Busan, South Korea. JCCI 2024 was held April 24 to 26, 2024.", orientation: "portrait" },
  { src: "/gallery/conference-2023-10-12.jpg", title: "International Conference on Information and Communication Technology Convergence 2023", detail: "Presenting MetaHate: Text-based Hate Speech Detection for Metaverse Applications Using Deep Learning at ICTC 2023 on Jeju Island, South Korea.", orientation: "wide" },
  { src: "/gallery/conference-2023-11-23.jpg", title: "ICMIC 2023, 2nd International Conference on Maritime IT Convergence", detail: "At the hybrid conference hosted August 23 to 25, 2023 at Shilla Stay on Jeju Island, South Korea, our team presented Multi-Feature Concatenation for Speech Dependent Automatic Speaker Identification in Maritime Autonomous Vehicles.", orientation: "portrait" },
  { src: "/gallery/conference-2023-07-group.jpg", title: "ICUFN 2023, 14th International Conference on Ubiquitous and Future Networks", detail: "At the Eiffel Campus in Paris, France, July 4 to 7, 2023, I presented Building a Metaverse for Transportation Systems: A Brief Review and Demonstration.", orientation: "wide" },
  { src: "/gallery/conference-2023-07-portrait.jpg", title: "KICS Summer Conference 2023", detail: "Presenting Metaverse and Digital Twin for BMS using MATLAB and Unreal Engine at the Ramada Plaza on Jeju Island, South Korea.", orientation: "portrait" },
  { src: "/gallery/conference-2023-07-session.jpg", title: "Joint Conference on Communications and Information 2023", detail: "Presenting Model Comparison and Selection for Battery Digital Twin Development using PyBaMM at JCCI 2023, held April 26 to 28 at Hidden Bay Hotel in Yeosu, South Korea.", orientation: "wide" },
  { src: "/gallery/conference-2023-08-portrait.jpg", title: "KICS Fall Conference 2022", detail: "Presenting Analysis of Deep Neural Networks-Based Digital Twin for Lithium-ion Batteries at Lahan Select Hotel in Gyeongju, South Korea.", orientation: "portrait" },
  { src: "/gallery/kics-summer-2022-keyword-1.jpg", title: "International Conference on Information and Communication Technology Convergence 2022", detail: "Presenting State-of-the-Art Object Detectors for Vehicle, Pedestrian, and Traffic Sign Detection for Smart Parking Systems at ICTC 2022, held October 19 to 21 at Ramada Plaza on Jeju Island, South Korea.", orientation: "portrait" },
  { src: "/gallery/conference-2023-08-group.jpg", title: "Asia-Pacific Conference on Communications 2022", detail: "At APCC 2022, October 19 to 21 at Ramada Plaza on Jeju Island, South Korea, I presented The Role of 5G Wireless Communication System in the Metaverse.", orientation: "wide" },
  { src: "/gallery/kics-summer-2022-keyword-2.jpg", title: "KICS Summer Conference 2022", detail: "Presenting Evaluation of Spectrograms for Keyword Spotting in Control of Autonomous Vehicles for the Metaverse, June 22 to 24 at the Grand Hyatt on Jeju Island, South Korea.", orientation: "portrait" },
  { src: "/gallery/conference-2023-08-event.jpg", title: "KICS Winter Conference 2022", detail: "At Alpensia Resort in Pyeongchang, Gangwon Province, South Korea, February 9 to 11, I presented Real-time Deep Learning-based Scene Recognition Model for Metaverse Applications.", orientation: "wide" },
  { src: "/gallery/kics-winter-2021-uav-spectrum.png", title: "KICS Winter Conference 2021, virtual presentation", detail: "I presented Optimizing Spectrum Sharing in UAV-to-UAV Cellular Communications virtually during the conference hosted at YongPyong Resort in Pyeongchang, Gangwon Province, South Korea, February 3 to 5.", orientation: "wide" },
  { src: "/gallery/kics-winter-2021-gaussian.png", title: "KICS Winter Conference 2021, virtual presentation", detail: "I also presented Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression virtually during KICS Winter 2021.", orientation: "wide" },
  { src: "/gallery/kics-summer-radar.png", title: "KICS Summer Conference 2020", detail: "Presenting Automatic Radar Waveform Recognition using the Wigner-Ville Distribution and AlexNet-SVM in Pyeongchang, South Korea.", orientation: "wide" },
  { src: "/gallery/kics-2019-hunger-blockchain.png", title: "KICS Conference 2019", detail: "Presenting Hunger Marketing and Blockchain Technology: Applications in Wireless Spectrum Management, an early exploration of market mechanisms and distributed ledgers for spectrum allocation.", orientation: "wide" },
];

const galleryPaperTitles = [
  "Metaverse Applicability to Transportation Systems",
  "Metaverse and NFT with Creativia",
  "PureTwin: A Reliable Non-Fungible Digital Twin Framework for Battery Management Systems",
  "Trustworthy Battery Management: A Digital Twin Approach Leveraging XAI and Blockchain",
  "ProphEn: Advanced Energy Forecasting for Korean Industries with Seasonal and Logistic Growth",
  "EL-Alert: An Explainable Lightweight AST Model for Military Situational Awareness and Surveillance",
  "TwinMil: Semantic Segmentation-based Digital Twin Framework for Military Surveillance",
  "SHAP-based Explainable Model-in-the-Loop for Digital Twins in Battery Management Systems",
  "Multi-Feature Concatenation for Speech Dependent Automatic Speaker Identification in Maritime Autonomous Vehicles",
  "MetaHate: Text-based Hate Speech Detection for Metaverse Applications Using Deep Learning",
  "Building a Metaverse for Transportation Systems: A Brief Review and Demonstration",
  "Metaverse and Digital Twin for BMS using MATLAB and Unreal Engine",
  "Model Comparison and Selection for Battery Digital Twin Development using PyBaMM",
  "Analysis of Deep Neural Networks-Based Digital Twin for Lithium-ion Batteries",
  "State-of-the-Art Object Detectors for Vehicle, Pedestrian, and Traffic Sign Detection for Smart Parking Systems",
  "The Role of 5G Wireless Communication System in the Metaverse",
  "Evaluation of Spectrograms for Keyword Spotting in Control of Autonomous Vehicles for the Metaverse",
  "Real-time Deep Learning-based Scene Recognition Model for Metaverse Applications",
  "Optimizing Spectrum Sharing in UAV-to-UAV Cellular Communications",
  "Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression",
  "Automatic Radar Waveform Recognition using the Wigner-Ville Distribution and AlexNet-SVM",
  "Hunger Marketing and Blockchain Technology: Applications in Wireless Spectrum Management",
];

function GalleryDetail({ text }: { text: string }) {
  const paperTitle = galleryPaperTitles.find((title) => text.includes(title));
  if (!paperTitle) return <>{text}</>;
  const [before, after] = text.split(paperTitle);
  return <>{before}<cite>{paperTitle}</cite>{after}</>;
}

export default function GalleryPage() {
  return (
    <main>
      <PageHero label="Gallery" title="The places I have been and the moments that shaped how I research." text="Come behind the papers with me, from graduation days and first presentations to the conference rooms where ideas became collaborations." />
      <section className="page-section gallery-highlight-grid">
        <article className="gallery-highlight-card"><div className="featured-story-copy"><p className="kicker">June 17, 2026, virtual presentation</p><h2>PANDA at the ASCE International Conference on Computing in Civil Engineering</h2><p>I presented PANDA virtually during i3CE 2026, hosted at Songdo Convensia in Songdo, Incheon, South Korea. The presentation demonstrated how a lightweight forecasting model and a Cesium digital twin can turn limited parking data into multi-horizon occupancy and turnover predictions that operators can inspect spatially.</p></div><PhotoStoryCarousel images={pandaPresentation} label="PANDA presentation" /></article>
        <article className="gallery-highlight-card"><div className="featured-story-copy"><p className="kicker">June 3 to 7, 2026, Denver, Colorado</p><h2>OmniRestore at the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops</h2><p>I presented OmniRestore, coauthored with Dr. Diksha Shukla, at the Colorado Convention Center. The work introduces a lightweight, weather-aware framework for restoring visual information degraded by rain, snow, fog, low light, and composite conditions. Presenting it at CVPR brought this research into conversation with the international computer vision community and marked an important expansion of my work into robust autonomous perception.</p></div><PhotoStoryCarousel images={cvprPresentation} label="OmniRestore at CVPR" /></article>
        <article className="gallery-highlight-card"><div className="featured-story-copy"><p className="kicker">May 6, 2026, Laramie, Wyoming</p><h2>Facilitating a University of Wyoming community conversation on digital twins</h2><p>I facilitated the School of Computing&apos;s Digital Twins Computing Meet Up at Altitude Chophouse and presented a battery-management digital twin case study. Six lightning talks brought complementary views of digital twins into one room.</p></div><PhotoStoryCarousel images={uwDigitalTwinsMeetup} label="University of Wyoming Digital Twins Computing Meet Up" /></article>
        <article className="gallery-highlight-card"><div className="featured-story-copy"><p className="kicker">May 25 to 26, 2022, Gumi, South Korea</p><h2>Metaverse and The Industry Workshop</h2><p>I co-organized this two-day workshop with the ICT Convergence Research Center and delivered the transportation-systems presentation. Eight sessions connected metaverse foundations with manufacturing, blockchain, NFTs, artificial intelligence, transportation, research trends, and security.</p></div><PhotoStoryCarousel images={metaverseWorkshop} label="Metaverse and The Industry Workshop" /></article>
      </section>

      <section className="page-section photo-grid">
        {moments.map((moment) => (
          <figure className={moment.orientation} key={`${moment.src}-${moment.title}`}>
            <div><Image src={moment.src} alt={`${moment.title}: ${moment.detail}`} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 24vw" /></div>
            <figcaption><strong>{moment.title}</strong><span><GalleryDetail text={moment.detail} /></span></figcaption>
          </figure>
        ))}
      </section>

      <section className="page-section graduation-section">
        <p className="kicker">Academic journey</p>
        <div className="section-heading-row"><h2>Graduation milestones</h2><p>BEng, MSc, and PhD</p></div>
        <div className="degree-milestones">
          <figure className="degree-card">
            <div><Image src="/gallery/Bsc_grad.jpg" alt="Judith Njoku-Vowels at her bachelor of engineering graduation" fill sizes="(max-width: 800px) 92vw, 48vw" /></div>
            <figcaption><strong>BEng Graduation</strong><span>Celebrating the conferral of my Bachelor of Engineering in Petroleum Engineering at the Federal University of Technology, Owerri, Nigeria, on December 12, 2014.</span></figcaption>
          </figure>
          <figure className="degree-card">
            <div><Image src="/gallery/msc_grad.jpeg" alt="Judith Njoku-Vowels at her MSc graduation" fill sizes="(max-width: 800px) 92vw, 48vw" /></div>
            <figcaption><strong>MSc Graduation</strong><span>Celebrating the conferral of my MSc in Electronics Engineering at Kumoh National Institute of Technology, South Korea, on August 20, 2021.</span></figcaption>
          </figure>
          <figure className="degree-card"><PhotoStoryCarousel images={phdGraduation} label="PhD graduation" /><figcaption><strong>PhD Graduation</strong><span>Celebrating the conferral of my PhD in IT Convergence Engineering at Kumoh National Institute of Technology, South Korea, on August 22, 2025. My dissertation introduced BatteryMetrix.</span></figcaption></figure>
        </div>
      </section>

    </main>
  );
}
