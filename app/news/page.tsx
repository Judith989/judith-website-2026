import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "../site-chrome";
import { sitePath } from "../site-paths";

export const metadata: Metadata = { title: "News | Judith Njoku-Vowels, PhD" };

type NewsItem = {
  date: string;
  category: string;
  title: string;
  text: string;
  href?: string;
  links?: { label: string; href: string }[];
  emphasizeTitle?: boolean;
};

const monthAbbreviations: Record<string, string> = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

function abbreviateMonths(date: string) {
  return date.replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g,
    (month) => monthAbbreviations[month],
  );
}

const workTitles = [
  "Developing Future Workforce Skills through Remote Practical Training",
  "Wireless Communication Protocols for EV Digital Twin Battery Data Exchange",
  "Digital Twin and Metaverse-Enhanced Battery Management for Electric Vehicles",
  "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse",
  "Leveraging Digital Twin Technology for Battery Management: A Case Study Review",
  "HyBaTwin: Web-Based Hybrid Digital Twin Platform for Electric Vehicle Battery Capacity Estimation",
  "Enhancing Resilience in Specialty Crop Production in a Changing Climate through Smart Systems Adoption",
  "Advanced Multimodal Prediction of Components of Livestock Feed Materials Using Knowledge Distillation",
  "A Digital Twin Framework for Sensor Selection and Microclimate Monitoring in Greenhouses",
  "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles",
  "Evaluating Regression Techniques for Service Advisor Performance Analysis in Automotive Dealerships",
  "Metaverse in Advanced Manufacturing: Background, Applications, Limitations, Open Issues & Future Directions",
  "Zero-Trust Marine Cyberdefense for IoT-Based Communications: An Explainable Approach",
  "Estimation of Physico-Chemical Properties of Soil Using Machine Learning",
  "Prospects and Challenges of Metaverse Application in Data-Driven Intelligent Transportation Systems",
  "Explainable Artificial Intelligence (XAI) for Intrusion Detection and Mitigation in Intelligent Connected Vehicles: A Review",
  "Enhancing Security and Accountability in Autonomous Vehicles through Robust Speaker Identification and Blockchain-Based Event Recording",
  "Deep Learning Based Data Fusion Methods for Multimodal Emotion Recognition",
  "CGDNet: Efficient Hybrid Deep Learning Model for Robust Automatic Modulation Recognition",
  "BLER Performance Evaluation of an Enhanced Channel Autoencoder",
  "Can AI Drive in the Storm? Restoring Vision for Autonomous Vehicles",
  "The Insider Playbook to Winning Global Scholarships & Fellowships",
  "BatteryMetrix: A User-Centric Digital Twin Framework for Predictive, Explainable, and Secure Battery Management Systems",
  "Your U.S. PR Dream: A Sister's Guide to EB1 & EB2 Visa",
  "SHAP-based Explainable Model-in-the-Loop for Digital Twins in Battery Management Systems",
  "Multi-Feature Concatenation for Speech Dependent Automatic Speaker Identification in Maritime Autonomous Vehicles",
  "State-of-the-Art Object Detectors for Vehicle, Pedestrian, and Traffic Sign Detection for Smart Parking Systems",
  "Evaluation of Spectrograms for Keyword Spotting in Control of Autonomous Vehicles for the Metaverse",
  "Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression",
  "Automatic Radar Waveform Recognition using the Wigner-Ville Distribution and AlexNet-SVM",
  "Hunger Marketing and Blockchain Technology: Applications in Wireless Spectrum Management",
  "Real-time Deep Learning-based Scene Recognition Model for Metaverse Applications",
  "Building a Metaverse for Transportation Systems: A Brief Review and Demonstration",
  "Analysis of Deep Neural Networks-Based Digital Twin for Lithium-ion Batteries",
  "Model Comparison and Selection for Battery Digital Twin Development using PyBaMM",
  "The Role of 5G Wireless Communication System in the Metaverse",
  "Metaverse and Digital Twin for BMS using MATLAB and Unreal Engine",
  "MetaHate: Text-based Hate Speech Detection for Metaverse Applications Using Deep Learning",
  "Optimizing Spectrum Sharing in UAV-to-UAV Cellular Communications",
  "Metaverse applicability to transportation systems",
  "Domain and global research trends of the metaverse",
  "Pure Wallet and offline blockchain transactions",
  "Metaverse applicability to manufacturing",
  "Artificial Intelligence and Metaverse",
  "Security in the Metaverse: A Closer Look",
  "Introduction to the Metaverse",
  "Metaverse and NFT with Creativia",
  "Inspiring Young Ladies in STEM",
  "EL-Alert",
  "TwinMil",
  "PureTwin",
  "BridgeSync",
  "OmniRestore",
  "PANDA",
].sort((a, b) => b.length - a.length);

const professionalHonorifics = [
  ["Senorpe Asem-Hiablie", "Dr."],
  ["Daniel Dooyum Uyeh", "Dr."],
  ["Cosmas Ifeanyi Nwakanma", "Dr."],
  ["Manuel Eugenio Morocho-Cayamcela", "Dr."],
  ["Jae-Min Lee", "Prof."],
  ["Dong-Seong Kim", "Prof."],
  ["Rammohan Mallipeddi", "Prof."],
  ["Tusan Park", "Prof."],
  ["Pei Xiao", "Prof."],
  ["Wansu Lim", "Prof."],
  ["Diksha Shukla", "Prof."],
] as const;

function applyProfessionalHonorifics(text: string) {
  return professionalHonorifics.reduce((result, [name, honorific]) => {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return result.replace(new RegExp(`(?<!${honorific} )${escapedName}`, "g"), `${honorific} ${name}`);
  }, text);
}

const journalNews: NewsItem[] = [
  { date: "May 20, 2026", category: "Internship program publication", title: "Developing Future Workforce Skills through Remote Practical Training published in Computers and Education Open", text: "I am thrilled to share a publication that documents the internship program itself. Coauthored with Patience Chizoba Mba, Senorpe Asem-Hiablie, and Daniel Dooyum Uyeh, this paper captures how our remote practical-training model connected Kyungpook National University and Michigan State University to build research capability, technical confidence, and future workforce skills. Seeing the program become a peer-reviewed contribution in Computers and Education Open is an especially meaningful milestone.", href: "https://doi.org/10.1016/j.caeo.2026.100369" },
  { date: "September 2025", category: "Journal acceptance", title: "Wireless Communication Protocols for EV Digital Twin Battery Data Exchange accepted by the Journal of Communications and Networks", text: "I am pleased to share that my paper, coauthored with Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, has been accepted by the Journal of Communications and Networks. The work evaluates the communication layer required for timely, reliable battery data exchange in electric-vehicle digital twins.", href: "/publications" },
  { date: "March 2026", category: "Journal publication", title: "Digital Twin and Metaverse-Enhanced Battery Management for Electric Vehicles published in High-Confidence Computing", text: "I am pleased to share that my paper, coauthored with Ebuka Chinaechetam Nkoro, Robin Matthew Medina, Paul Michael Custodio, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, has been published in High-Confidence Computing. The paper connects battery digital twins with immersive metaverse interfaces for electric-vehicle battery management.", href: "https://doi.org/10.1016/j.hcc.2025.100358" },
  { date: "August 15, 2025", category: "Journal publication", title: "MetaWatch: Trends, Challenges, and Future of Network Intrusion Detection in the Metaverse published in IEEE Internet of Things Journal", text: "I am pleased to share our paper, coauthored with Ebuka Chinaechetam Nkoro, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, published in the IEEE Internet of Things Journal. MetaWatch maps the evolving security challenges, datasets, and research directions for intrusion detection in metaverse environments.", href: "https://doi.org/10.1109/JIOT.2025.3568477" },
  { date: "January 20, 2025", category: "Journal publication", title: "Leveraging Digital Twin Technology for Battery Management: A Case Study Review published in IEEE Access", text: "I am pleased to share that my paper, coauthored with Ebuka Chinaechetam Nkoro, Robin Matthew Medina, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, has been published in IEEE Access. The review organizes the architectures, applications, and open challenges shaping battery digital twins.", href: "https://doi.org/10.1109/ACCESS.2025.3531833" },
  { date: "April 2025", category: "Journal publication", title: "HyBaTwin: Web-Based Hybrid Digital Twin Platform for Electric Vehicle Battery Capacity Estimation published in the Journal of KICS", text: "I am pleased to share that my paper, coauthored with Anthony Uchenna Eneh, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, has been published in the Journal of the Korean Institute of Communications and Information Sciences. HyBaTwin brings battery-capacity estimation into an accessible web-based hybrid digital twin.", href: "https://doi.org/10.7840/kics.2025.50.4.549" },
  { date: "August 2025", category: "Post-internship mentorship publication", title: "Enhancing Resilience in Specialty Crop Production in a Changing Climate through Smart Systems Adoption published in Smart Agricultural Technology", text: "I am delighted to celebrate what sustained mentorship can make possible. Following the internship, continued research guidance and collaboration with Patience Chizoba Mba and Daniel Dooyum Uyeh grew into this publication in Smart Agricultural Technology. The paper examines how sensing, automation, and decision-support systems can strengthen specialty-crop resilience under a changing climate, and it is a rewarding example of mentorship continuing well beyond the formal end of a program.", href: "https://doi.org/10.1016/j.atech.2025.100897" },
  { date: "March 31, 2025", category: "Cohort 2 internship publication", title: "Advanced Multimodal Prediction of Components of Livestock Feed Materials Using Knowledge Distillation published in IEEE Transactions on AgriFood Electronics", text: "I am incredibly proud to celebrate this research output from Cohort 2 of the Kyungpook National University and Michigan State University internship. Working with Owoeye Babatunde Oluwabukunmi, Akomolafe Ayobami Joseph, Miraculous Udurume, Cosmas Ifeanyi Nwakanma, Senorpe Asem-Hiablie, Rammohan Mallipeddi, Tusan Park, and Daniel Dooyum Uyeh, we transformed the cohort's research training into a publication in IEEE Transactions on AgriFood Electronics. The study uses knowledge distillation to make multimodal livestock-feed prediction more efficient.", href: "https://doi.org/10.1109/TAFE.2025.3548949" },
  { date: "September 23, 2025", category: "Cohort 3 internship publication", title: "A Digital Twin Framework for Sensor Selection and Microclimate Monitoring in Greenhouses published in AgriEngineering", text: "Excited and deeply proud to celebrate a journal publication produced through Cohort 3 of the Kyungpook National University and Michigan State University internship. Together with Oreofeoluwa Akintan and the wider research team, we developed a digital-twin framework for informed sensor selection and greenhouse microclimate monitoring. Its publication in AgriEngineering shows what can happen when structured internship mentorship gives emerging researchers ownership of a consequential problem.", href: "https://doi.org/10.3390/agriengineering7100315" },
  { date: "June 12, 2024", category: "Journal publication", title: "Explainable Data-Driven Digital Twins for Predicting Battery States in Electric Vehicles published in IEEE Access", text: "I am pleased to share that my paper, coauthored with Cosmas Ifeanyi Nwakanma and Dong-Seong Kim, has been published in IEEE Access. The work combines data-driven battery prediction with explainability so digital-twin estimates can be examined and trusted.", href: "https://doi.org/10.1109/ACCESS.2024.3413075" },
  { date: "September 2024", category: "Journal publication", title: "Evaluating Regression Techniques for Service Advisor Performance Analysis in Automotive Dealerships published in the Journal of Retailing and Consumer Services", text: "I am pleased to share that my paper, coauthored with Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, has been published in the Journal of Retailing and Consumer Services. The study compares regression methods for actionable service-advisor performance analysis in automotive dealerships.", href: "https://doi.org/10.1016/j.jretconser.2024.103933" },
  { date: "April 2024", category: "Journal publication", title: "Metaverse in Advanced Manufacturing: Background, Applications, Limitations, Open Issues & Future Directions published in ICT Express", text: "I am pleased to share our paper, coauthored with Gabriel Chukwunonso Amaizu, Jae-Min Lee, and Dong-Seong Kim, published in ICT Express. The review examines how metaverse technologies can support advanced manufacturing while identifying limitations and open research questions.", href: "/publications" },
  { date: "January 3, 2024", category: "Journal publication", title: "Zero-Trust Marine Cyberdefense for IoT-Based Communications: An Explainable Approach published in Electronics", text: "I am pleased to share our paper, coauthored with Ebuka Chinaechetam Nkoro, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, published in Electronics. The study combines zero-trust principles and explainable intrusion detection for marine IoT communications.", href: "https://doi.org/10.3390/electronics13020276" },
  { date: "December 2024", category: "Cohort 2 internship publication", title: "Estimation of Physico-Chemical Properties of Soil Using Machine Learning published in Smart Agricultural Technology", text: "I am excited to celebrate another peer-reviewed outcome from Cohort 2 of the Kyungpook National University and Michigan State University internship. With Patience Chizoba Mba and our collaborators, we developed and evaluated machine-learning methods for estimating soil properties that support agricultural decision-making. Seeing this internship research mature into a publication in Smart Agricultural Technology is a proud milestone for the students, mentors, and institutions behind the cohort.", href: "/publications" },
  { date: "August 6, 2022", category: "Journal publication", title: "Prospects and Challenges of Metaverse Application in Data-Driven Intelligent Transportation Systems published in IET Intelligent Transport Systems", text: "I am pleased to share that my paper, coauthored with Cosmas Ifeanyi Nwakanma, Gabriel Chukwunonso Amaizu, and Dong-Seong Kim, has been published in IET Intelligent Transport Systems. The paper examines how metaverse technologies may reshape data-driven transportation systems and what must be solved for responsible adoption.", href: "https://doi.org/10.1049/itr2.12252" },
  { date: "January 17, 2023", category: "Journal publication", title: "Explainable Artificial Intelligence (XAI) for Intrusion Detection and Mitigation in Intelligent Connected Vehicles: A Review published in Applied Sciences", text: "I am pleased to share our collaborative review, coauthored with Cosmas Ifeanyi Nwakanma and colleagues, published in Applied Sciences. The paper organizes explainable-AI approaches for detecting and mitigating cyberattacks in intelligent connected vehicles.", href: "https://doi.org/10.3390/app13031252" },
  { date: "December 12, 2023", category: "Journal publication", title: "Enhancing Security and Accountability in Autonomous Vehicles through Robust Speaker Identification and Blockchain-Based Event Recording published in Electronics", text: "I am pleased to share that my paper, coauthored with Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim, has been published in Electronics. The system combines robust speaker identification with blockchain-based event recording to strengthen accountability in autonomous vehicles.", href: "https://doi.org/10.3390/electronics12244998" },
  { date: "June 2022", category: "Journal publication", title: "Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression published in ICT Express", text: "I am pleased to share that my paper, coauthored with Manuel Eugenio Morocho-Cayamcela, Angela Caliwag, Pei Xiao, and Wansu Lim, has been published in ICT Express. The study uses Gaussian process regression to anticipate target data rates for more adaptive spectrum allocation.", href: "https://doi.org/10.1016/j.icte.2021.08.011" },
  { date: "November 2021", category: "Journal publication", title: "Deep Learning Based Data Fusion Methods for Multimodal Emotion Recognition published in the Journal of KICS", text: "I am pleased to share that my paper, coauthored with Angela Caliwag, Wansu Lim, Sangho Kim, Hyunwoo Hwang, and Jihwan Jung, has been published in the Journal of the Korean Institute of Communications and Information Sciences. The study compares deep-learning fusion strategies for multimodal emotion recognition.", href: "/publications" },
  { date: "February 8, 2021", category: "Journal publication", title: "CGDNet: Efficient Hybrid Deep Learning Model for Robust Automatic Modulation Recognition published in IEEE Networking Letters", text: "I am pleased to share that my paper, coauthored with Manuel Eugenio Morocho-Cayamcela and Wansu Lim, has been published in IEEE Networking Letters. CGDNet combines complementary deep-learning components for efficient and robust automatic modulation recognition.", href: "https://doi.org/10.1109/LNET.2021.3057637" },
  { date: "August 1, 2021", category: "Journal publication", title: "BLER Performance Evaluation of an Enhanced Channel Autoencoder published in Computer Communications", text: "I am pleased to share that my paper, coauthored with Manuel Eugenio Morocho-Cayamcela and Wansu Lim, has been published in Computer Communications. The work evaluates how an enhanced channel autoencoder performs under block-error-rate conditions relevant to learned communication systems.", href: "https://doi.org/10.1016/j.comcom.2021.05.026" },
];

function EmphasizedWorks({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let remaining = applyProfessionalHonorifics(text);
  let key = 0;
  while (remaining) {
    const matches = workTitles
      .map((title) => ({ title, index: remaining.toLowerCase().indexOf(title.toLowerCase()) }))
      .filter((match) => match.index >= 0)
      .sort((a, b) => a.index - b.index || b.title.length - a.title.length);
    const match = matches[0];
    if (!match) {
      parts.push(remaining);
      break;
    }
    if (match.index > 0) parts.push(remaining.slice(0, match.index));
    const original = remaining.slice(match.index, match.index + match.title.length);
    parts.push(<cite className="news-work-title" key={`${original}-${key++}`}>{original}</cite>);
    remaining = remaining.slice(match.index + match.title.length);
  }
  return <>{parts}</>;
}

const journey: NewsItem[] = [
  { date: "June 17, 2026", category: "Virtual presentation", title: "PANDA presented virtually at i3CE 2026", text: "Excited to share that I presented PANDA, our lightweight digital twin framework for smart parking management, during the virtual program of the ASCE International Conference on Computing in Civil Engineering. The conference was held June 14 to 17 at Songdo Convensia in Songdo, Incheon, South Korea.", href: "https://www.i3ce2026.com/about/03.html" },
  { date: "June 3 to 7, 2026", category: "Conference", title: "OmniRestore presented at the IEEE/CVF CVPR Workshops in Denver", text: "Pleased to share an exciting milestone for our Secure Sensing and Learning Research Lab team. I presented OmniRestore, our parameter-efficient framework for universal adverse-weather image restoration, at the Colorado Convention Center in Denver, Colorado.", href: "https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Njoku_OmniRestore_A_Parameter-Efficient_Framework_for_Universal_Adverse-Weather_Image_Restoration_CVPRW_2026_paper.pdf" },
  { date: "June 12, 2026", category: "Invited talk", title: "Can AI Drive in the Storm? Restoring Vision for Autonomous Vehicles", text: "I delivered a 40-minute invited research lecture and question-and-answer session for the University of Wyoming Research Experiences for Undergraduates colloquium. Speaking with the undergraduate REU cohort, I explored how adverse weather disrupts autonomous-vehicle perception and how image restoration can help intelligent vehicles recover the visual evidence needed for safer decisions." },
  { date: "June 8, 2026", category: "Mentorship", title: "Joined Femme Alliance Network as a mentor", text: "I joined Femme Alliance Network to mentor women navigating transitions into technology, including professionals returning after career breaks and those entering technology and engineering roles. My guidance spans research careers, graduate-school applications, technical skill development, and the confidence needed to build a sustainable next chapter." },
  { date: "May 28, 2026", category: "Mentorship", title: "Joined Global Mentorship Initiative as a mentor", text: "I joined the Global Mentorship Initiative to provide structured one-to-one career-readiness mentoring for graduates moving from education into their first professional roles. Through the program, I support career planning, professional communication, resume development, networking, goal setting, and preparation for a successful transition into the workplace.", href: "https://globalmentorship.org/be-a-mentor/" },
  { date: "May 16, 2026", category: "Invited talk", title: "The Insider Playbook to Winning Global Scholarships & Fellowships", text: "I was delighted to return to the Prof. Cosmas Daughters Forum as an invited speaker and deliver a talk translating my experience with international education and research pathways into practical guidance on identifying scholarships and fellowships, positioning a competitive application, and using funded opportunities to advance an academic or professional career.", href: "https://www.linkedin.com/posts/pcdf-official_studyabraod-scholarships-careeradvancement-activity-7461359203580964864-CzOA", emphasizeTitle: true },
  { date: "May 12 to 15, 2026", category: "Conference service", title: "Supported the Women in Tech Global Conference as a Session Engagement Volunteer", text: "I served as a Session Engagement Volunteer for the seventh annual Women in Tech Global Conference, a virtual-first global gathering with in-person satellite events. Across selected sessions, I welcomed speakers, prepared informed questions, encouraged conversation between speakers and attendees, and helped the program team identify issues requiring support.", href: "https://www.linkedin.com/posts/women-in-tech-south-korea_huge-thanks-to-women-in-tech-south-korea-activity-7454583342248800257-EChu" },
  { date: "May 6, 2026", category: "Community research leadership", title: "Facilitated the UW Computing Meet Up on Digital Twins", text: "At Altitude Chophouse in Laramie, Wyoming, I facilitated a University of Wyoming School of Computing evening that brought six complementary views of digital twins into one conversation. Vanessa Lueck addressed people and policy, Jian Gong discussed sensor networks, Wabi Demeke presented physics modeling, Jane Crayton connected utility with immersive education, and Paul Gyreyiri explored visualization and virtual reality. I completed the program with a battery-management digital twin case study before opening the room for informal interdisciplinary discussion.", href: "https://www.linkedin.com/posts/judith989_four-weeks-ago-i-facilitated-the-uw-computing-activity-7468040070458040320-976W" },
  { date: "April 4, 2026", category: "Keynote and outreach", title: "Delivered a keynote for International Women in Tech Day", text: "I joined WomenTech Kenya as one of four keynote speakers for International Women in Tech Day, held virtually from 2 to 4 p.m. East Africa Time. Under the theme Inspiring Young Ladies in STEM, the event created a space for undergraduates seeking opportunities and young professionals beginning technology careers to encounter visible pathways, practical encouragement, and a wider community in technology.", href: "https://www.linkedin.com/posts/judith989_most-young-women-dont-lack-potential-they-activity-7444735983377444864-KVEv" },
  { date: "April 2026", category: "Acceptance", title: "OmniRestore accepted at CVPR Workshops", text: "Congratulations to our full research team on this milestone for efficient restoration across rain, snow, haze, and other adverse conditions.", href: "https://judith989.github.io/CVPRW2026_OmniRestore/" },
  { date: "March 2026", category: "Acceptance", title: "PANDA accepted at i3CE 2026", text: "Excited to share that PANDA was accepted at i3CE 2026. Congratulations to our coauthor team on this milestone for our lightweight digital twin framework for smart parking management.", href: "/research/panda" },
  { date: "February 21, 2026", category: "Seminar coordination", title: "Coordinated and anchored a PCDF conversation on relationships and intentional growth", text: "As Seminar Coordinator, I managed and anchored a Prof. Cosmas Daughters Forum seminar that created an honest, experience-based conversation about love and commitment across life stages, communication and conflict, growth within marriage and singleness, and lessons grounded in lived experience. The interactive session was held virtually on Zoom at 2 p.m. West Africa Time.", href: "https://www.linkedin.com/posts/pcdf-official_valentine2026-interactivesessions-pcdf-activity-7421659965150568448-6s0N" },
  { date: "January 17, 2026", category: "Seminar coordination", title: "Coordinated and anchored a PCDF seminar on Canada permanent residence", text: "As Seminar Coordinator, I organized and anchored a Prof. Cosmas Daughters Forum Zoom conversation with Cynthia Chidinma Osewemen and Chinwe Phil Ekene, two professionals who had completed the Canadian permanent-residence process. The 2 p.m. West Africa Time session focused on their lived experience, practical lessons, and the realities applicants often understand only after beginning the journey.", href: "https://www.linkedin.com/posts/judith989_some-opportunities-look-simple-on-the-surface-activity-7415902179968135168-bJ1h" },
  { date: "November 15, 2025", category: "Seminar coordination", title: "Coordinated and anchored a PCDF seminar on the UK Global Talent Visa", text: "As Seminar Coordinator, I organized and anchored a Prof. Cosmas Daughters Forum Zoom seminar with UK Global Talent Visa holder Angela Caliwag. The practical session explained eligibility, application requirements, the step-by-step process, common mistakes, and how the visa can support an international career and a pathway toward permanent residence in the United Kingdom.", href: "https://www.linkedin.com/posts/pcdf-official_globaltalentvisa-ukvisa-careergrowth-activity-7385028052008759296-xdTp" },
  { date: "September 20, 2025", category: "Seminar coordination", title: "Coordinated and anchored a PCDF seminar on recognizing and responding to abuse", text: "As Seminar Coordinator, I organized and anchored a Prof. Cosmas Daughters Forum Zoom seminar led by counselor and coach Tara Daneshmand. The session examined physical, emotional, and financial abuse, including less visible patterns in workplaces and relationships, and discussed boundaries, self-protection, and routes toward support and restored confidence.", href: "https://www.linkedin.com/posts/pcdf-official_mentalhealthawareness-emotionalwellbeing-activity-7369009563162800128-kiBw" },
  { date: "August 29, 2025", category: "Appointment", title: "Joined the University of Wyoming and the Secure Sensing and Learning Research Lab", text: "Excited to begin my postdoctoral chapter in Laramie, Wyoming, with the Secure Sensing and Learning Research Lab and the Center for Rural Community Resilience and Innovation at the University of Wyoming. This transition expanded my research into robust computer vision, smart infrastructure, and AI-enabled systems for rural and autonomous environments.", href: "/about" },
  { date: "August 22, 2025", category: "Education", title: "PhD degree conferred", text: "Pleased to share the conferral of my PhD in IT Convergence Engineering from Kumoh National Institute of Technology in South Korea. BatteryMetrix brought together the central themes of my doctoral work: predictive battery intelligence, explainable AI, secure lifecycle records, and immersive digital twins.", href: "/gallery" },
  { date: "July 19, 2025", category: "Seminar coordination", title: "Coordinated and anchored a PCDF seminar on practical personal finance", text: "As Seminar Coordinator, I organized and anchored a Prof. Cosmas Daughters Forum Zoom seminar with Chisom Mbaegbu at 2 p.m. West Africa Time. The conversation translated personal finance into accessible decisions about understanding one's financial position, managing income, building a sustainable savings habit, and approaching investment with greater confidence and discernment.", href: "https://www.facebook.com/share/p/1CdxCmjFe7/" },
  { date: "July 8 to 11, 2025", category: "Conference", title: "ICUFN 2025 at Iscte in Lisbon, Portugal", text: "At ICUFN 2025, the 16th International Conference on Ubiquitous and Future Networks, I shared research spanning BridgeSync for secure bridge monitoring, interactive battery digital twins, and emerging communication systems. The conference was held at Iscte, University Institute of Lisbon in Portugal.", href: "/gallery" },
  { date: "June 21, 2025", category: "Seminar coordination", title: "Coordinated and anchored a PCDF seminar on mental health and stress management for busy women", text: "As Seminar Coordinator, I organized and anchored a Prof. Cosmas Daughters Forum Zoom seminar with psychotherapist and Mindsplace founder Eniola Bello. The session addressed silent burnout, healthy boundaries, practical coping strategies, and the importance of protecting mental well-being while carrying demanding professional, family, and community responsibilities.", href: "https://www.facebook.com/share/p/19FFmM3Ja3/" },
  { date: "June 15 to 20, 2025", category: "Conference", title: "IEEE IAS Annual Meeting 2025 in Taipei City, Taiwan", text: "Congratulations to our coauthor team on presenting explainable and model-agnostic energy-consumption prediction research at the IEEE Industry Applications Society Annual Meeting in Taipei City, Taiwan.", href: "https://doi.org/10.1109/IAS62731.2025.11061571" },
  { date: "May 2025", category: "Education", title: "I defended my PhD dissertation", text: "Thrilled to share that I successfully defended BatteryMetrix: A User-Centric Digital Twin Framework for Predictive, Explainable, and Secure Battery Management Systems at Kumoh National Institute of Technology.", href: "/research/batterymetrix" },
  { date: "April 26, 2025", category: "Seminar coordination", title: "Coordinated and anchored a PCDF seminar on the EB1 and EB2 visa pathways", text: "I coordinated and anchored Your U.S. PR Dream: A Sister's Guide to EB1 & EB2 Visa for the Prof. Cosmas Daughters Forum. Held on Zoom at 2 p.m. West Africa Time, the seminar connected women considering United States permanent residence with experts who had successfully navigated the process and could translate complex immigration pathways into practical lessons.", href: "https://www.facebook.com/share/p/1BPntho27g/" },
  { date: "April 23 to 25, 2025", category: "Conference presentation", title: "PureTwin presented at JCCI 2025 in Sokcho, South Korea", text: "At JCCI 2025, the 35th Joint Conference on Telecommunications and Information, I presented PureTwin, an interactive non-fungible digital twin framework for battery management systems. The conference was held at Sokcho Sonocalm Delpino Resort in South Korea.", href: "/gallery" },
  { date: "February 2025", category: "Conference", title: "ICAIIC 2025 in Fukuoka, Japan", text: "I presented our trustworthy battery-management research at the International Conference on Artificial Intelligence in Information and Communication. The paper combined digital twins, explainable AI, and blockchain to make battery predictions more interpretable and accountable.", href: "https://doi.org/10.1109/ICAIIC64266.2025.10920782" },
  { date: "November 2024", category: "Conference", title: "KICS Fall Conference 2024 in South Korea", text: "I shared emerging digital-twin and intelligent-systems research with the Korean communications community, receiving technical feedback that helped connect the system architecture to practical deployment questions.", href: "/gallery" },
  { date: "October 2024", category: "Conference", title: "ICTC 2024 on Jeju Island, South Korea", text: "Our team presented two papers at the International Conference on Information and Communication Technology Convergence: EL-Alert for explainable military surveillance and a review of intrusion detection in MQTT-enabled IoT networks.", href: "https://doi.org/10.1109/ICTC62082.2024.10826893" },
  { date: "August 7 to 9, 2024", category: "Conference", title: "TwinMil presented at ICMIC 2024 in Kuala Lumpur", text: "I presented TwinMil, our semantic-segmentation digital twin framework for military surveillance, at the 3rd International Conference on Mobile, Military and Maritime IT Convergence at the Concorde Hotel in Kuala Lumpur, Malaysia.", href: "https://public.thinkonweb.com/sites/icmic2024" },
  { date: "January 4, 2024", category: "Appointment", title: "Joined Michigan State University as a Visiting Research Scholar", text: "I joined the Climate Smart Decision Support Systems Laboratory at Michigan State University in East Lansing, Michigan, as a Visiting Research Scholar. There, I extended my systems research into agricultural AI, multimodal learning for livestock and soil analysis, greenhouse sensing, and smart systems for specialty-crop production.", href: "/about" },
  { date: "April 24 to 26, 2024", category: "Conference presentation", title: "Explainable battery digital twins presented at JCCI 2024 in Busan", text: "At JCCI 2024, the 34th Joint Conference on Telecommunications and Information, I presented SHAP-based Explainable Model-in-the-Loop for Digital Twins in Battery Management Systems. The conference was held at Busan Paradise Hotel in Busan, South Korea.", href: "/gallery" },
  { date: "October 2023", category: "Conference presentation", title: "MetaHate presented at ICTC 2023", text: "At the 14th International Conference on Information and Communication Technology Convergence on Jeju Island, South Korea, I presented MetaHate: Text-based Hate Speech Detection for Metaverse Applications Using Deep Learning with Anthony Uchenna Eneh, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim.", href: "https://ieeexplore.ieee.org/document/10392437" },
  { date: "August 23 to 25, 2023", category: "Hybrid conference presentation", title: "Maritime speaker identification presented at ICMIC 2023", text: "At ICMIC 2023, the 2nd International Conference on Maritime IT Convergence, I presented Multi-Feature Concatenation for Speech Dependent Automatic Speaker Identification in Maritime Autonomous Vehicles with Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim. The hybrid conference was hosted at Shilla Stay on Jeju Island, South Korea.", href: "https://www.researchgate.net/publication/373755841_Multi-Feature_Concatenation_for_Speech_Dependent_Automatic_Speaker_Identification_in_Maritime_Autonomous_Vehicles" },
  { date: "July 4 to 7, 2023", category: "Conference presentation", title: "A transportation metaverse demonstrated at ICUFN 2023 in Paris", text: "At ICUFN 2023, the 14th International Conference on Ubiquitous and Future Networks, I presented Building a Metaverse for Transportation Systems: A Brief Review and Demonstration with Cosmas Ifeanyi Nwakanma and Dong-Seong Kim. The conference was held at the Eiffel Campus in Paris, France.", href: "https://doi.org/10.1109/ICUFN57995.2023.10199405" },
  { date: "June 21 to 24, 2023", category: "Conference presentation", title: "Battery digital twin and metaverse presented at KICS Summer 2023", text: "At the KICS Summer Conference at Ramada Plaza on Jeju Island, South Korea, I presented Metaverse and Digital Twin for BMS using MATLAB and Unreal Engine with Ebuka Chinaechetam Nkoro, Robin Matthew Medina, Paul Michael Custodio, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim.", href: "https://www.researchgate.net/publication/371911768_Metaverse_and_Digital_Twin_for_BMS_using_MATLAB_and_Unreal_Engine" },
  { date: "April 26 to 28, 2023", category: "Conference presentation", title: "Battery model selection presented at JCCI 2023", text: "At the 33rd Joint Conference on Communication and Information at Hidden Bay Hotel in Yeosu, South Korea, I presented Model Comparison and Selection for Battery Digital Twin Development using PyBaMM with Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim.", href: "https://www.researchgate.net/publication/370636700_Model_Comparison_and_Selection_for_Battery_Digital_Twin_Development_using_PyBaMM" },
  { date: "November 2022", category: "Conference presentation", title: "Lithium-ion battery digital twin analysis presented at KICS Fall 2022", text: "At Lahan Select Hotel in Gyeongju, South Korea, I presented Analysis of Deep Neural Networks-Based Digital Twin for Lithium-ion Batteries with Robin Matthew Medina, Ebuka Chinaechetam Nkoro, Cosmas Ifeanyi Nwakanma, Jae-Min Lee, and Dong-Seong Kim. This work became an important foundation for BatteryMetrix.", href: "https://www.researchgate.net/publication/365878142_Analysis_of_Deep_Neural_Networks-Based_Digital_Twin_for_Lithium-ion_Batteries" },
  { date: "October 2022", category: "Conference presentation", title: "SmartParking object detection presented at ICTC 2022", text: "At the 13th International Conference on Information and Communication Technology Convergence at Ramada Plaza on Jeju Island, South Korea, our team presented State-of-the-Art Object Detectors for Vehicle, Pedestrian, and Traffic Sign Detection for Smart Parking Systems.", href: "https://doi.org/10.1109/ICTC55196.2022.9952856" },
  { date: "October 19 to 21, 2022", category: "Conference presentation", title: "5G and the metaverse presented at APCC 2022", text: "I was pleased to present The Role of 5G Wireless Communication System in the Metaverse with Robin Matthew Medina, Cosmas Ifeanyi Nwakanma, and Dong-Seong Kim at the 27th Asia-Pacific Conference on Communications at Ramada Plaza on Jeju Island, South Korea.", href: "https://www.researchgate.net/publication/364731444_The_Role_of_5G_Wireless_Communication_System_in_the_Metaverse" },
  { date: "September 2022", category: "Research transition", title: "Joined the Networked Systems Laboratory for my PhD", text: "Excited to begin a new research chapter at Kumoh National Institute of Technology in Gumi, South Korea. I moved from wireless communication research into digital twins, explainable AI, cybersecurity, and battery-management systems, marking the beginning of the BatteryMetrix research program.", href: "/about" },
  { date: "August 2022", category: "Appointment and research leadership", title: "Joined Kyungpook National University and Michigan State University as a Research Specialist and Supervisor", text: "Excited to begin a cross-institutional role connecting AI-enabled sensing, digital agriculture, explainable machine learning, and international workforce development. From August 2022 to July 2024, I coordinated research collaborations and recruited, supervised, and mentored two international internship cohorts comprising more than 15 students, many of whom became publication coauthors and continued into graduate study.", href: "/cv" },
  { date: "June 2022", category: "Conference presentation", title: "Keyword spotting for autonomous vehicles presented at KICS Summer 2022", text: "At the KICS Summer Conference at the Grand Hyatt on Jeju Island, South Korea, I presented Evaluation of Spectrograms for Keyword Spotting in Control of Autonomous Vehicles for the Metaverse with Cosmas Ifeanyi Nwakanma and Dong-Seong Kim.", href: "https://www.researchgate.net/publication/361558505_Evaluation_of_Spectrograms_for_Keyword_Spotting_in_Control_of_Autonomous_Vehicles_for_The_Metaverse" },
  {
    date: "May 25 to 26, 2022",
    category: "Workshop co-organization",
    title: "Co-organized Metaverse and The Industry workshop",
    text: "I co-organized the two-day Metaverse and The Industry live workshop with the ICT Convergence Research Center at Kumoh National Institute of Technology in Gumi, South Korea. Eight sessions connected metaverse foundations with manufacturing, blockchain transactions, NFTs, artificial intelligence, transportation, global research trends, and security. I also delivered the sixth presentation on metaverse applications in transportation systems.",
    links: [
      { label: "1. Introduction to the Metaverse", href: "https://www.youtube.com/watch?v=6ohpFb4AYrc" },
      { label: "2. Metaverse applicability to manufacturing", href: "https://www.youtube.com/watch?v=s4d2Z3v6nD8" },
      { label: "3. Pure Wallet and offline blockchain transactions", href: "https://www.youtube.com/watch?v=ZSx6wv83ckA" },
      { label: "4. Metaverse and NFT with Creativia", href: "https://www.youtube.com/watch?v=PbN72jv7yzs" },
      { label: "5. Artificial Intelligence and Metaverse", href: "https://www.youtube.com/watch?v=MZ8TfJ6H-6k" },
      { label: "6. Metaverse applicability to transportation systems", href: "https://www.youtube.com/watch?v=nk00bl7RHBU" },
      { label: "7. Domain and global research trends of the metaverse", href: "https://www.youtube.com/watch?v=CzOSENO8_mU" },
      { label: "8. Security in the Metaverse: A Closer Look", href: "https://www.youtube.com/watch?v=7VHSTMoNIus" },
      { label: "Complete Day One recording", href: "https://www.youtube.com/watch?v=EUO3ygEEVHk" },
      { label: "Complete Day Two recording", href: "https://www.youtube.com/watch?v=5jbhUPUe4jk" },
    ],
  },
  { date: "February 9 to 11, 2022", category: "Conference presentation", title: "Real-time scene recognition presented at KICS Winter 2022", text: "I was pleased to present Real-time Deep Learning-based Scene Recognition Model for Metaverse Applications with Gabriel Amaizu, Jae-Min Lee, and Dong-Seong Kim at Alpensia Resort in Pyeongchang, Gangwon Province, South Korea.", href: "https://www.researchgate.net/publication/358947984_Real-time_Deep_Learning-based_Scene_Recognition_Model_For_Metaverse_Applications" },
  { date: "January 2022", category: "Research transition", title: "Joined the ICT Convergence Research Center for post-master's research", text: "I joined the ICT Convergence Research Center at Kumoh National Institute of Technology in Gumi, South Korea, for post-master's research focused on the metaverse. This chapter expanded my work from wireless communications into immersive intelligent systems and metaverse applications.", href: "/about" },
  { date: "August 20, 2021", category: "Education", title: "MSc degree conferred", text: "I received my MSc in Electronics Engineering from Kumoh National Institute of Technology in Gumi, South Korea, after developing deep-learning methods for wireless communication systems.", href: "/gallery" },
  { date: "February 3 to 5, 2021", category: "Virtual presentation", title: "Two spectrum-allocation papers presented virtually at KICS Winter 2021", text: "During the KICS Winter Conference hosted at YongPyong Resort in Pyeongchang, Gangwon Province, South Korea, I presented Optimizing Spectrum Sharing in UAV-to-UAV Cellular Communications and Predicting Target Data Rates for Dynamic Spectrum Allocation Using Gaussian Process Regression virtually with my Future Communications Systems Lab collaborators.", href: "https://www.researchgate.net/publication/358916150_Optimizing_Spectrum_Sharing_in_UAV-to-UAV_Cellular_Communications" },
  { date: "July 2020", category: "Communication and community", title: "Joined Daegu Toastmasters in South Korea", text: "I joined Daegu Toastmasters while studying in South Korea, beginning a deliberate practice of public speaking, attentive listening, and communicating technical ideas to audiences beyond my immediate research field. That community helped strengthen the clarity and confidence I now bring to conference presentations, teaching, facilitation, and research leadership.", href: "https://www.toastmasters.org/find-a-club/03963990-daegu-toastmasters" },
  { date: "June 24, 2020", category: "Service and leadership", title: "Became a WomenTech Network Global Ambassador", text: "Pleased to share that I became a WomenTech Network Global Ambassador representing South Korea, joining a global community working to connect, amplify, and expand opportunities for women in technology.", href: "https://www.womentech.net/global-ambassadors/South%20Korea/Judith%20/Njoku-Vowels" },
  { date: "June 2020", category: "Conference presentation", title: "Radar waveform recognition presented at KICS Summer Conference", text: "In Pyeongchang, South Korea, I presented Automatic Radar Waveform Recognition using the Wigner-Ville Distribution and AlexNet-SVM with Manuel Eugenio Morocho-Cayamcela and Wansu Lim. The work combined time-frequency representations with deep feature extraction and support vector classification.", href: "https://www.researchgate.net/publication/343712491_Automatic_Radar_Waveform_Recognition_using_the_Wigner-Ville_distribution_and_AlexNet-SVM" },
  { date: "May 2020", category: "Professional community", title: "Joined WomenTech Network as a member", text: "I joined WomenTech Network as a member, beginning a professional-service relationship centered on visibility, connection, and opportunity for women in technology.", href: "https://www.womentech.net/" },
  { date: "February 2020", category: "Conference paper presentation", title: "Learning to Communicate with Autoencoders presented at ICAIIC 2020", text: "Excited to have presented our conference paper on an autoencoder-based approach to learning-enabled wireless communication at the International Conference on Artificial Intelligence in Information and Communication.", href: "https://doi.org/10.1109/ICAIIC48513.2020.9065246" },
  { date: "November 2019", category: "Conference presentation", title: "Blockchain and spectrum management presented at KICS", text: "I was pleased to present Hunger Marketing and Blockchain Technology: Applications in Wireless Spectrum Management with Manuel Eugenio Morocho-Cayamcela and Wansu Lim after joining the laboratory. This early work explored how demand-shaping strategies and distributed ledgers could support wireless spectrum management.", href: "https://www.researchgate.net/publication/337335916_Hunger_marketing_and_Blockchain_Technology_Applications_in_Wireless_Spectrum_Management" },
  { date: "August 2019", category: "Research transition", title: "Joined the Future Communications Systems Laboratory", text: "After moving to Gumi, South Korea, for my MSc in Electronics Engineering, I first joined the Future Communications Systems Laboratory at Kumoh National Institute of Technology. There I began working on modulation recognition, channel autoencoders, and deep learning for wireless communication.", href: "/about" },
  { date: "November 2018", category: "Professional milestone", title: "Became the branch IT Buddy at Sterling Bank", text: "Pleased to take on the additional responsibility of serving as the branch IT Buddy at Sterling Bank in Lagos. Alongside my customer-experience work, I became a local bridge between staff and technology support, helping colleagues resolve day-to-day systems issues and maintain dependable digital service.", href: "/cv" },
  { date: "June 2018", category: "Professional milestone", title: "Became an ATM Custodian at Sterling Bank", text: "I took on ATM custodian responsibilities alongside my customer-experience role at Sterling Bank, supporting ATM availability, operational oversight, reconciliation, and reliable service for customers.", href: "/cv" },
  { date: "April 2017", category: "Appointment", title: "Joined Sterling Bank in Customer Experience Management", text: "Excited to join Sterling Bank PLC in Lagos as Customer Experience Management Personnel. The role placed me at the intersection of customer needs, operational processes, and technology-enabled banking service, and later expanded to include ATM custodianship and branch IT support.", href: "/cv" },
  { date: "December 12, 2014", category: "Education", title: "BEng degree conferred", text: "Pleased to mark the conferral of my Bachelor of Engineering in Petroleum Engineering from the Federal University of Technology, Owerri, Nigeria. That foundation taught me to approach engineering problems as interconnected physical systems.", href: "/gallery" },
];

function newsDateValue(date: string) {
  const year = Number(date.match(/\b(20\d{2})\b/)?.[1] ?? 0);
  const monthName = Object.keys(monthAbbreviations).find((month) => date.includes(month));
  const month = monthName ? Object.keys(monthAbbreviations).indexOf(monthName) : 0;
  const day = monthName ? Number(date.slice(date.indexOf(monthName) + monthName.length).match(/\d+/)?.[0] ?? 1) : 1;
  return Date.UTC(year, month, day);
}

const allNews = [...journalNews, ...journey].sort((a, b) => newsDateValue(b.date) - newsDateValue(a.date));

function NewsCard({ item }: { item: NewsItem }) {
  const external = item.href?.startsWith("http");
  return (
    <article>
      <div className="news-year">{abbreviateMonths(item.date)}</div>
      <div className="news-dot" />
      <div className="news-card">
        <span>{item.category}</span>
        <h2 className={item.emphasizeTitle ? "news-title-emphasis" : undefined}><EmphasizedWorks text={item.title} /></h2>
        <p><EmphasizedWorks text={item.text} /></p>
        {item.links && (
          <div className="news-resource-links">
            {item.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}><EmphasizedWorks text={link.label} /> <ArrowUpRight size={14} /></a>)}
          </div>
        )}
        {item.href && <a href={external ? item.href : sitePath(item.href)} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>Read more <ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}

export default function NewsPage() {
  return (
    <main>
      <PageHero label="News and milestones" title="What I am presenting, building, and celebrating." />
      <section className="page-section news-timeline">
        {allNews.map((item) => <NewsCard item={item} key={`${item.date}-${item.title}`} />)}
      </section>
    </main>
  );
}
