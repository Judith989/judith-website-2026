export type ResearchProject = {
  slug: string;
  name: string;
  eyebrow: string;
  statement: string;
  overview: string[];
  question: string;
  approach: { title: string; text: string }[];
  outcomes: { value: string; label: string }[];
  contributions: string[];
  images: { src: string; alt: string; caption: string }[];
  links: { label: string; href: string }[];
  status: string;
  interpretation: string;
  scope: string;
  next?: string;
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "omnirestore",
    name: "OmniRestore",
    eyebrow: "Robust visual perception",
    statement: "Can one compact model restore vision across rain, fog, snow, low light, and compound weather?",
    overview: [
      "Autonomous systems need reliable visual perception in the conditions where cameras struggle most. Many restoration models are trained for one degradation at a time, while universal models often become too large for practical edge deployment.",
      "OmniRestore is my answer to that efficiency gap. Coauthored with Dr. Diksha Shukla, it combines a weather-scene embedder with a lightweight restoration backbone so one model can identify the degradation context and adapt its reconstruction strategy.",
    ],
    status: "Presented at the NTIRE Workshop on New Trends in Image Restoration and Enhancement at CVPR 2026",
    question: "How can semantic knowledge about weather guide image restoration without running a large vision-language model for every image?",
    approach: [
      { title: "Weather-scene semantics", text: "A ResNet image stream is aligned with CLIP-derived weather prototypes and refined with a Kolmogorov-Arnold Network adapter to form compact, weather-discriminative embeddings." },
      { title: "Lightweight restoration", text: "A parameter-efficient U-Net-style backbone injects the condition embedding through hybrid attention, shifted-window self-attention, and channel recalibration." },
      { title: "Adaptive refinement", text: "Condition-dependent modulation suppresses residual artifacts and improves perceptual reconstruction across single and composite degradations." },
    ],
    outcomes: [
      { value: "2.60M", label: "inference-time parameters" },
      { value: "29.86 dB", label: "PSNR on CDD-11" },
      { value: "0.9244", label: "SSIM on CDD-11" },
      { value: "6.3 ms", label: "inference on 256 x 256 inputs" },
    ],
    contributions: [
      "Universal restoration across rain, fog, snow, low light, and composite weather.",
      "A 56.5 percent parameter reduction relative to OneRestore while improving CDD-11 PSNR by 1.14 dB.",
      "No text encoder or large vision-language model is executed per image at inference time.",
      "Evaluation across CDD-11, Snow100K, LOL, and WeatherBench.",
    ],
    images: [
      { src: "/research/omnirestore-qualitative.png", alt: "OmniRestore qualitative comparison showing degraded inputs, restored outputs, competing methods, and ground truth", caption: "Qualitative restoration results place the degraded input beside competing reconstructions, the OmniRestore output, and the clean ground truth. The comparisons cover CDD-11, Snow100K, WeatherBench, and LOL scenes." },
      { src: "/research/omnirestore-framework.png", alt: "OmniRestore weather-scene embedder and restoration architecture", caption: "The architecture links an offline weather-scene embedder to a compact restoration backbone and adaptive refinement stage." },
      { src: "/research/omni-p2-img0.jpg", alt: "OmniRestore performance versus parameter count", caption: "OmniRestore occupies the high-performance, low-parameter corner of the comparison, reaching 29.86 dB PSNR with 2.60 million parameters." },
      { src: "/research/omnirestore-fog-example.png", alt: "Foggy input, OmniRestore result, and ground truth street scene", caption: "A fog restoration example shown as degraded input, OmniRestore reconstruction, and ground truth. The restored scene recovers road texture, vehicles, vegetation, and building detail while reducing the atmospheric veil." },
      { src: "/research/omnirestore-snow-example.jpeg", alt: "Snow-degraded input, OmniRestore result, and ground truth outdoor scene", caption: "A snow removal example shown from left to right as degraded input, OmniRestore output, and ground truth. The reconstruction suppresses snow streaks while preserving people and background structure." },
      { src: "/research/omnirestore-weather-example.png", alt: "Adverse-weather input, OmniRestore result, and ground truth comparison", caption: "A further WeatherBench comparison demonstrates restoration under dense precipitation, with the clean reference included for direct visual inspection." },
      { src: "/gallery/omnirestore_cvpr2026.jpg", alt: "OmniRestore poster at CVPR 2026", caption: "The complete OmniRestore system and evaluation presented at the NTIRE image-restoration workshop at CVPR 2026 in Denver." },
    ],
    interpretation: "The restored-image comparisons matter because aggregate metrics can hide failure modes. Looking across degraded input, reconstructed output, and ground truth shows whether the model removes weather artifacts without erasing road structure, vehicle boundaries, illumination cues, or fine scene detail. OmniRestore was designed to improve that visual fidelity while remaining small enough for resource-constrained perception systems.",
    scope: "The current study focuses on image restoration as the first stage of a robust perception pipeline. The next evaluation will measure how restored images affect downstream detection, tracking, and scene understanding under real, mixed weather.",
    links: [
      { label: "Project page", href: "https://judith989.github.io/CVPRW2026_OmniRestore/" },
      { label: "Official code and weights", href: "https://github.com/Judith989/omnirestore" },
      { label: "CVPRW 2026 repository", href: "https://github.com/Judith989/CVPRW2026_OmniRestore" },
      { label: "Paper", href: "https://openaccess.thecvf.com/content/CVPR2026W/NTIRE/papers/Njoku_OmniRestore_A_Parameter-Efficient_Framework_for_Universal_Adverse-Weather_Image_Restoration_CVPRW_2026_paper.pdf" },
    ],
    next: "I am extending this line of work toward robust perception pipelines that connect restoration quality to downstream autonomy, uncertainty, and edge deployment constraints.",
  },
  {
    slug: "batterymetrix",
    name: "BatteryMetrix",
    eyebrow: "Predictive energy systems",
    statement: "What would a battery digital twin look like if prediction, explanation, security, and human use were designed together?",
    overview: [
      "BatteryMetrix was the crux of my PhD research. It treats a battery twin as more than a forecasting model. The framework connects electrochemical and thermal knowledge, physics-informed learning, state estimation, explanation, secure ownership, and immersive interaction.",
      "The system estimates State of Charge, State of Health, and Remaining Useful Life, then translates those predictions into evidence a user can inspect through SHAP, LIME, surrogate models, and the BAT-GPT conversational assistant.",
    ],
    status: "BatteryMetrix paper and public repository will be released soon",
    question: "How can a battery digital twin remain accurate under changing operating conditions while explaining its predictions and protecting lifecycle records?",
    approach: [
      { title: "Physics-informed prediction", text: "TriPhiNet combines three physics-informed learning paths, positional encoding, residual connections, and electrochemical constraints for robust multi-state estimation." },
      { title: "Explanations for decisions", text: "SHAP, LIME, and surrogate models expose the measurements and operating conditions influencing State of Charge and State of Health predictions." },
      { title: "Secure, user-facing twin", text: "The web and Unreal Engine interfaces connect predictive monitoring with NFT-based ownership, blockchain lifecycle records, and BAT-GPT explanations." },
    ],
    outcomes: [
      { value: "0.98", label: "R-squared for State of Charge prediction" },
      { value: "0.94", label: "R-squared for State of Health prediction" },
      { value: "3", label: "explanation pathways" },
      { value: "1", label: "integrated battery twin environment" },
    ],
    contributions: [
      "A user-centric architecture spanning prediction, explanation, security, and visualization.",
      "TriPhiNet, a physics-informed model for battery State of Charge, State of Health, and Remaining Useful Life.",
      "BAT-GPT for conversational access to digital-twin diagnostics and maintenance guidance.",
      "A secure ownership and lifecycle layer using NFTs and blockchain concepts.",
      "Validation across electric-vehicle and energy-storage operating scenarios.",
    ],
    images: [
      { src: "/research/battery-p297-img0.png", alt: "BatteryMetrix dashboard with battery states and explainable AI", caption: "The monitoring interface combines State of Charge, State of Health, Remaining Useful Life, SHAP and LIME evidence, asset ownership, and BAT-GPT assistance." },
      { src: "/research/battery-p228-img0.png", alt: "BatteryMetrix digital twin onboarding interface", caption: "The onboarding workflow creates a battery digital twin and links it to a live or stored battery-data endpoint." },
      { src: "/research/battery-p228-img1.png", alt: "BatteryMetrix secure battery asset minting interface", caption: "The secure lifecycle layer connects a battery twin to a verifiable digital asset and records its ownership through a wallet transaction." },
      { src: "/research/battery-model-heatmap.png", alt: "Heatmap comparing battery prediction models for state of charge, state of health, and remaining useful life", caption: "The model comparison shows TriPhiNet achieving R-squared values of 0.98 for State of Charge, 0.94 for State of Health, and 0.91 for Remaining Useful Life while several baselines deteriorate sharply on at least one task." },
      { src: "/research/battery-shap-soc.png", alt: "SHAP feature importance for TriPhiNet state of charge prediction", caption: "The SHAP analysis exposes how measured voltage and operating variables move individual State of Charge predictions, making the model's numerical output traceable to battery evidence." },
      { src: "/research/battery-unreal-dashboard.png", alt: "BatteryMetrix immersive battery monitoring dashboard in Unreal Engine", caption: "The Unreal Engine twin places live temperature, voltage, current, State of Charge, State of Health, Remaining Useful Life, battery identity, and ownership information around the physical asset representation." },
    ],
    links: [
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "BatteryMetrix grew from a gap I repeatedly encountered during the PhD: accurate state estimates alone do not create a trustworthy battery-management system. Engineers and asset owners also need to understand why a prediction changed, trace the data and lifecycle record behind it, and move between numerical diagnostics and an intuitive representation of the battery twin.",
    scope: "The dissertation establishes the integrated framework and validates its predictive and interaction components. A dedicated BatteryMetrix paper and public repository are in preparation and will be linked here when released.",
  },
  {
    slug: "panda",
    name: "PANDA",
    eyebrow: "Predictive smart parking",
    statement: "Can a parking digital twin move from showing what is occupied now to helping operators anticipate what happens next?",
    overview: [
      "PANDA is a lightweight digital twin framework for predictive management of retail parking facilities. It addresses a practical problem: smaller deployments often lack long historical records and cannot support large forecasting pipelines.",
      "The framework connects synthetic data generation, a compact multi-task forecasting model called P-LiteNet, and a geospatially accurate Cesium environment. The result is a twin that visualizes both current and predicted parking states for operational decision support.",
    ],
    status: "Presented virtually at ASCE i3CE 2026",
    question: "How can facility-scale parking twins provide multi-horizon occupancy and turnover forecasts when local data and computing resources are limited?",
    approach: [
      { title: "Realistic data generation", text: "A time-inhomogeneous Markov process learns time-varying parking transitions and synthesizes occupancy patterns with contextual signals." },
      { title: "P-LiteNet", text: "A 156K-parameter TinyGRU architecture jointly predicts multi-horizon occupancy and time-to-change instead of maintaining separate models for each horizon." },
      { title: "Cesium digital twin", text: "Forecasts are synchronized with individual parking entities in a 3D geospatial environment for slot-level and module-level exploration." },
    ],
    outcomes: [
      { value: "156K", label: "P-LiteNet parameters" },
      { value: "85%", label: "parameter reduction" },
      { value: "0.76", label: "multi-horizon occupancy AUC" },
      { value: "18.2 min", label: "turnover prediction RMSE" },
    ],
    contributions: [
      "An end-to-end path from data scarcity to predictive parking visualization.",
      "Joint occupancy and turnover prediction in one lightweight model.",
      "A geospatial 3D interface that exposes forecast states at individual parking spaces.",
      "The current evaluation uses Markov-generated synthetic data, with real sensor validation planned as the next phase.",
    ],
    images: [
      { src: "/research/panda-image4.png", alt: "PANDA parking digital twin showing facility occupancy", caption: "The Cesium-based facility twin maps predicted states to parking modules and individual spaces for rapid operational interpretation." },
      { src: "/research/panda-image6.png", alt: "PANDA slot-level parking digital twin interface", caption: "A slot-level view exposes the selected space, module, proximity, availability, and occupancy state inside the synchronized twin." },
      { src: "/research/panda-image3.png", alt: "Map of the retail parking facility represented in PANDA", caption: "The study-site map establishes the real geospatial footprint used to construct and align the Cesium parking twin." },
      { src: "/research/panda-framework.png", alt: "PANDA framework from physical parking inputs through forecasting and the three-dimensional twin", caption: "The complete PANDA pipeline connects facility sensors and historical patterns to Markov data generation, P-LiteNet multi-task forecasting, FastAPI synchronization, and the Cesium digital twin." },
      { src: "/research/panda-plitenet.png", alt: "P-LiteNet architecture for parking occupancy and time-to-change prediction", caption: "P-LiteNet fuses contextual and sequential inputs into one shared representation, then produces multi-horizon occupancy classifications and time-to-change regression through separate task heads." },
    ],
    links: [
      { label: "PANDA repository", href: "https://github.com/Judith989/Panda" },
      { label: "PANDA paper record", href: "https://scholar.google.com/scholar?q=%22PANDA%3A+A+Lightweight+Digital+Twin+Framework+for+Smart+Parking+Management%22" },
    ],
    interpretation: "PANDA focuses on what happens after occupancy has been observed: forecasting how the facility will change and exposing those forecasts spatially. The joint model avoids maintaining a separate predictor for every time horizon and turnover task, which makes repeated digital-twin synchronization more practical.",
    scope: "PANDA currently uses Markov-generated occupancy data calibrated from public patterns. The next phase will validate the framework with live parking sensors, heterogeneous streams, and behavioral simulation.",
    next: "The next stage is validation with real occupancy sensors, heterogeneous data streams, and agent-based behavioral simulation for testing access, turnover, and capacity policies.",
  },
  {
    slug: "bridgesync",
    name: "BridgeSync",
    eyebrow: "Resilient infrastructure",
    statement: "How can engineers inspect bridge conditions in real time when connectivity, security, and spatial context all matter?",
    overview: [
      "BridgeSync is a digital twin framework for secure and resilient bridge monitoring. It connects structural sensors, edge processing, synchronized 3D representations, and a blockchain-ready data layer.",
      "The project was validated through digital twins of three bridges, with the same sensor coordinates and live readings shared between a browser-based WebGL interface and an immersive Unreal Engine environment.",
    ],
    status: "Presented at ICUFN 2025 in Lisbon, Portugal",
    question: "How can a bridge twin maintain low-latency monitoring, auditable data, and consistent sensor placement across web and immersive interfaces?",
    approach: [
      { title: "PureEdge processing", text: "Edge services support low-latency monitoring and continued operation in settings where cloud connectivity may be constrained." },
      { title: "Synchronized 3D twins", text: "FastAPI distributes common bridge and sensor data to WebGL and Unreal Engine, with coordinate transformation preserving alignment across rendering scales." },
      { title: "Blockchain-ready integrity", text: "The architecture defines PureChain integration for traceable, tamper-resistant structural data and lifecycle records." },
    ],
    outcomes: [
      { value: "3", label: "bridge twins validated" },
      { value: "2", label: "interactive visualization platforms" },
      { value: "1", label: "shared sensor-coordinate source" },
      { value: "Real time", label: "sensor visualization" },
    ],
    contributions: [
      "High-fidelity twins for three structurally different bridges.",
      "Consistent sensor positions between WebGL and Unreal Engine through shared JSON coordinates and transformation logic.",
      "Interactive inspection of bridge components, sensor positions, and current readings.",
      "An edge architecture designed for low latency and connectivity resilience.",
      "A blockchain-ready integrity layer specified through the PureChain architecture.",
    ],
    images: [
      { src: "/research/bridge-p5-img1.png", alt: "BridgeSync WebGL bridge digital twin with structural sensors", caption: "The WebGL interface lets engineers rotate the bridge, isolate sensors, inspect coordinates, and review live component readings." },
      { src: "/research/bridge-p6-img0.jpg", alt: "BridgeSync immersive Unreal Engine bridge interface", caption: "The Unreal Engine environment adds spatial depth for inspecting structural geometry, sensor placement, and relationships among bridge components." },
      { src: "/research/bridge-p4-img0.png", alt: "Three-dimensional bridge model developed for BridgeSync", caption: "A bridge geometry developed for the multi-bridge validation, preserving the structural elements needed for sensor placement and virtual inspection." },
      { src: "/research/bridge-gamma-model.png", alt: "Cable-stayed Gamma bridge model developed for BridgeSync", caption: "The Gamma bridge model preserves the cable-stayed geometry required to position structural sensors and inspect relationships between the deck, pylons, and cables." },
      { src: "/research/bridge-alpha-model.png", alt: "Multi-span Alpha bridge model developed for BridgeSync", caption: "The Alpha bridge model represents a distinct multi-span structure, demonstrating that BridgeSync was evaluated across different bridge geometries rather than one duplicated asset." },
    ],
    links: [
      { label: "BridgeSync paper", href: "https://doi.org/10.1109/ICUFN65838.2025.11169959" },
      { label: "SIMaaS Web repository", href: "https://github.com/Judith989/SIMaaS_Web" },
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "BridgeSync centers on synchronization across monitoring environments. An engineer sees the same sensor identity, location, and reading in the browser and immersive interfaces. A common FastAPI data source and coordinate transformation logic preserve that consistency.",
    scope: "The study validates multi-platform visualization, shared sensor identity and coordinates, and real-time interaction across three structurally different bridge twins.",
  },
  {
    slug: "smartparking",
    name: "SmartParking",
    eyebrow: "Transportation perception",
    statement: "Which object detector best supports the mixed visual demands of a smart parking environment?",
    overview: [
      "SmartParking is a computer-vision study of joint vehicle, pedestrian, cyclist, bicycle, bus, and traffic-sign detection. Unlike work that treats each object family as a separate problem, this project evaluated the combined perception task required around a parking facility.",
      "The study also introduced TraPedesVeh, a labeled mini-dataset assembled to address the limited availability of images containing the multiple road users and signs that a parking system must understand at the same time.",
    ],
    status: "Presented at IEEE ICTC 2022 in Jeju Island, South Korea",
    question: "How do Faster R-CNN and SSD detector families trade detection quality against training speed when they are evaluated on the same multi-class parking dataset?",
    approach: [
      { title: "TraPedesVeh dataset", text: "Images containing vehicles, pedestrians, cyclists, bicycles, buses, and traffic signs were collected, annotated, normalized, and converted into a common detection format." },
      { title: "Six detector comparison", text: "The study evaluated SSD and Faster R-CNN variants with MobileNet, ResNet, and Inception-ResNet backbones under a shared computational setting." },
      { title: "Multi-metric evaluation", text: "Detection accuracy, average precision, average recall, training time, classification loss, localization loss, and total loss exposed the speed-accuracy tradeoff." },
    ],
    outcomes: [
      { value: "91.5%", label: "best average detection accuracy" },
      { value: "6", label: "detector configurations evaluated" },
      { value: "6", label: "reported object classes" },
      { value: "5.636 s", label: "fastest reported training time" },
    ],
    contributions: [
      "A unified evaluation of vehicle, pedestrian, cyclist, bicycle, bus, and traffic-sign detection.",
      "TraPedesVeh, a labeled mini-dataset for intelligent transportation research.",
      "Faster R-CNN with Inception-ResNet achieved the highest average detection accuracy at 91.5 percent.",
      "SSD-MobileNet at 320 x 320 trained fastest, documenting the practical speed-accuracy tradeoff.",
      "A reproducible baseline for perception around smart parking environments.",
    ],
    images: [
      { src: "/research/smartparking/p6-img0.png", alt: "SmartParking detection result for pedestrians and a vehicle", caption: "A qualitative result showing joint pedestrian and vehicle detections in a street scene. These mixed scenes reflect the perception demands near parking facilities." },
      { src: "/research/smartparking/p6-img4.png", alt: "SmartParking detection result for pedestrians, cyclists, and bicycles", caption: "A multi-object result with pedestrians, cyclists, and bicycles detected in the same urban scene." },
      { src: "/research/smartparking/p6-img3.png", alt: "SmartParking comparison result for vehicles and pedestrians", caption: "An additional detector output used to compare localization and class confidence across the evaluated model families." },
      { src: "/research/smartparking/p6-img1.png", alt: "SmartParking result detecting pedestrians, vehicles, and a traffic sign", caption: "This dense urban scene tests simultaneous localization of pedestrians, vehicles, and a traffic sign, including partially overlapping people and small distant objects." },
      { src: "/research/smartparking/p6-img5.png", alt: "SmartParking result detecting pedestrians and bicycles in a crowded street", caption: "A crowded street result demonstrates multi-class perception with pedestrians and bicycles at different scales, orientations, and levels of occlusion." },
    ],
    links: [
      { label: "SmartParking repository", href: "https://github.com/Judith989/SmartParking" },
      { label: "TraPedesVeh dataset", href: "https://github.com/Judith989/TraPedesVeh-A-mini-Dataset-for-Intelligent-Transportation-Systems" },
      { label: "IEEE paper", href: "https://doi.org/10.1109/ICTC55196.2022.9952856" },
    ],
    interpretation: "The highest-accuracy model was also the slowest to train, while the fastest SSD configuration sacrificed substantial detection quality. That tension is central to smart-parking deployment: the best model depends on whether the system prioritizes detection fidelity, limited hardware, retraining speed, or real-time response.",
    scope: "SmartParking is a perception and detector-benchmarking project. It is separate from PANDA, which forecasts future parking occupancy and synchronizes predictions with a Cesium digital twin.",
  },
];

export function getResearchProject(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
