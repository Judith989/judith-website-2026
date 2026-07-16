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
  {
    slug: "iot-protocols",
    name: "EV Twin Protocol Benchmark",
    eyebrow: "Connected battery systems",
    statement: "Which communication protocol gives an electric-vehicle digital twin the right balance of speed, reliability, and resource use?",
    overview: [
      "A digital twin depends on a continuous exchange between the physical asset and its virtual representation. In an electric vehicle, that exchange must remain responsive without exhausting the memory, processor, or network capacity of embedded hardware.",
      "This project built a physical Raspberry Pi vehicle and a Unity-based digital twin, then evaluated nine communication protocols using the same battery-data exchange workflow. The study makes protocol selection an evidence-based engineering decision rather than a default software choice.",
    ],
    status: "Journal of Communications and Networks paper",
    question: "How do MQTT, TCP, UDP, AMQP, ZeroMQ, HTTPS, WebSockets, CoAP, and OPC-UA perform under the practical constraints of EV digital-twin communication?",
    approach: [
      { title: "Physical-to-virtual testbed", text: "A Raspberry Pi vehicle transmitted battery and operating data to a synchronized Unity and Blender digital-twin environment." },
      { title: "Nine-protocol benchmark", text: "Each protocol was tested through a common client-server workflow so latency, throughput, bandwidth, packet loss, CPU use, and memory use could be compared directly." },
      { title: "Deployment-oriented interpretation", text: "The analysis connects measured performance to real deployment contexts, including resource-constrained devices, real-time exchange, and industrial interoperability." },
    ],
    outcomes: [
      { value: "9", label: "communication protocols evaluated" },
      { value: "6", label: "performance dimensions measured" },
      { value: "MQTT", label: "strong resource-constrained option" },
      { value: "UDP", label: "lowest-latency option" },
    ],
    contributions: [
      "A physical EV and virtual-twin testbed for repeatable protocol evaluation.",
      "Direct comparison of lightweight messaging, transport, web, industrial, and middleware protocols.",
      "Evidence that MQTT balances low bandwidth and CPU demand for constrained environments.",
      "Evidence that UDP minimizes latency when reliability can be handled elsewhere.",
      "A protocol-selection guide that also identifies CoAP for efficient resource use and OPC-UA for industrial settings.",
    ],
    images: [
      { src: "/research/iot-protocols/physical-ev-setup.jpg", alt: "Physical Raspberry Pi electric vehicle and laboratory digital twin setup", caption: "The experimental testbed connects a Raspberry Pi vehicle, onboard sensing, network services, and the workstation running its virtual representation." },
      { src: "/research/iot-protocols/unity-digital-twin.png", alt: "Real-time battery data exchange and three-dimensional vehicle digital twin", caption: "Battery data received from the physical platform is paired with a three-dimensional vehicle twin, providing a common workflow for evaluating every protocol." },
      { src: "/research/iot-protocols/server-protocol-results.png", alt: "Server latency, throughput, CPU, and memory comparison across communication protocols", caption: "The server-side results expose the tradeoffs among latency, throughput, processor demand, and memory consumption instead of reducing protocol performance to one score." },
    ],
    links: [{ label: "Related publications", href: "/publications" }],
    interpretation: "No protocol dominates every requirement. MQTT is compelling when bandwidth and embedded resources are limited, UDP prioritizes latency, CoAP operates efficiently on constrained devices, and OPC-UA offers industrial structure at a higher resource cost. The right protocol follows from the twin's operating context.",
    scope: "The study evaluates three clients sequentially on a Raspberry Pi-based testbed. It establishes a practical baseline for future security, hardware-diversity, and concurrent fleet-scale experiments.",
  },
  {
    slug: "service-advisor-ai",
    name: "Explainable Service Advisor Analytics",
    eyebrow: "AI-enabled decision systems",
    statement: "Can performance analytics show automotive dealerships not only who needs support, but why?",
    overview: [
      "Service advisors translate customer needs into repair work and play a central role in dealership profitability. Simple rankings can identify high and low performers, but they do not explain the operational patterns behind those differences.",
      "This project evaluates five regression approaches within finite-mixture models, clusters advisors into distinct performance groups, and uses SHAP to reveal how service measures influence predicted profit. The result supports targeted coaching, benchmarking, and resource allocation.",
    ],
    status: "Published in the Journal of Retailing and Consumer Services, 2024",
    question: "How can interpretable regression and clustering uncover distinct service-advisor performance patterns from real dealership data?",
    approach: [
      { title: "Dealership performance data", text: "A private United States dealership dataset was prepared around advisor activity, customer-pay work, warranty work, repair orders, labor, and profit." },
      { title: "Mixture regression analysis", text: "Five regression families were evaluated within finite-mixture models to represent heterogeneous relationships that a single global regression would obscure." },
      { title: "Explainable clusters", text: "Gaussian mixture clustering, information criteria, silhouette analysis, and SHAP connect each performance group to actionable operational factors." },
    ],
    outcomes: [
      { value: "5", label: "regression approaches evaluated" },
      { value: "3", label: "model-selection criteria" },
      { value: "SHAP", label: "coefficient-level explanations" },
      { value: "Real data", label: "from a US automotive dealership" },
    ],
    contributions: [
      "A performance framework designed around the heterogeneity of human service work.",
      "Distinct advisor clusters that enable targeted development rather than one-size-fits-all evaluation.",
      "Comparison of regression approaches under shared finite-mixture conditions.",
      "SHAP explanations that show how operational variables move predictions within each group.",
      "A pathway from predictive analytics to coaching, benchmarking, and dealership decision support.",
    ],
    images: [
      { src: "/research/service-advisor-ai/advisor-clusters.jpg", alt: "Clusters of automotive service advisor performance", caption: "The advisor clusters reveal distinct operating and profit patterns, creating a basis for group-specific coaching and benchmarking." },
      { src: "/research/service-advisor-ai/model-selection.jpg", alt: "Model selection results using BIC, AIC, and silhouette scores", caption: "BIC, AIC, and silhouette analysis evaluate cluster quality and complexity from complementary perspectives." },
      { src: "/research/service-advisor-ai/shap-analysis.jpg", alt: "SHAP dependence analysis for service advisor performance", caption: "SHAP dependence plots expose how specific dealership measures influence the model within different performance regimes." },
    ],
    links: [
      { label: "Journal paper", href: "https://doi.org/10.1016/j.jretconser.2024.103933" },
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "Performance groups become useful when their differences can be explained. High-performing clusters can reveal transferable practices, while lower-performing clusters can receive support tailored to the factors that constrain them. The study also shows where quantitative models struggle to capture complex human performance.",
    scope: "The analysis uses a private dataset from one United States automotive dealership. Its value is the interpretable methodology and decision framework, while broader validation would require data across additional dealerships and operating contexts.",
  },
  {
    slug: "explainable-battery-twins",
    name: "Explainable Battery Digital Twins",
    eyebrow: "Trustworthy energy intelligence",
    statement: "A battery prediction should arrive with evidence, especially when it informs safety, maintenance, and remaining life.",
    overview: [
      "Battery digital twins can estimate State of Charge and State of Health, but opaque predictions limit their usefulness in safety-critical energy systems. An engineer needs to know which voltage, temperature, capacity, and degradation signals drove a result.",
      "This work develops DNN and LSTM battery twins using the NASA battery dataset, then explains their predictions through SHAP, LIME, and linear surrogate models. It treats interpretability as part of the twin rather than an annotation added after deployment.",
    ],
    status: "Published in IEEE Access, 2024",
    question: "How can deep-learning battery twins remain accurate while making their State of Charge and State of Health estimates understandable?",
    approach: [
      { title: "Cross-battery learning", text: "All four batteries in the NASA prognostics dataset were used to build models that learn across varied charge, discharge, impedance, temperature, voltage, and current conditions." },
      { title: "DNN and LSTM twins", text: "Feedforward and recurrent architectures estimate State of Charge and State of Health while capturing nonlinear and temporal battery behavior." },
      { title: "Three explanation paths", text: "SHAP provides global and local attribution, LIME explains individual estimates, and linear surrogate models test whether the learned behavior can be approximated transparently." },
    ],
    outcomes: [
      { value: "2", label: "battery states predicted" },
      { value: "2", label: "deep-learning twin families" },
      { value: "3", label: "explainability methods" },
      { value: "4", label: "NASA batteries used" },
    ],
    contributions: [
      "An explainable digital-twin framework for State of Charge and State of Health estimation.",
      "Direct comparison of DNN and LSTM prediction behavior across battery cycles.",
      "SHAP, LIME, and surrogate explanations for both global patterns and individual estimates.",
      "Feature analysis linking State of Charge to voltage and temperature and State of Health to capacity fade.",
      "Evidence that predictive performance and interpretability can be evaluated together.",
    ],
    images: [
      { src: "/research/explainable-battery-twins/feature-correlation.png", alt: "Battery feature correlation matrix for State of Charge and State of Health", caption: "The correlation matrix connects the predicted states to physical evidence, including measured voltage, temperature, capacity, and capacity fade." },
      { src: "/research/explainable-battery-twins/lstm-soc.jpg", alt: "Actual and predicted State of Charge across battery cycles using an LSTM digital twin", caption: "The LSTM twin follows changing State of Charge across hundreds of cycles, including sharp operating transitions." },
      { src: "/research/explainable-battery-twins/dnn-soh.jpg", alt: "Actual and predicted State of Health using a DNN digital twin", caption: "The DNN results show how closely the predicted health trajectory follows the battery's measured degradation pattern." },
      { src: "/research/explainable-battery-twins/lstm-soh.jpg", alt: "Actual and predicted State of Health using an LSTM digital twin", caption: "The recurrent model provides a second view of health estimation, allowing prediction accuracy and explanation quality to be compared across architectures." },
    ],
    links: [
      { label: "IEEE paper", href: "https://doi.org/10.1109/ACCESS.2024.3413075" },
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "The explanations turn a state estimate into an inspectable engineering claim. For example, they reveal whether a State of Charge prediction follows measured voltage and temperature or whether a health estimate is responding to capacity and capacity fade. That traceability supports debugging, trust, and better maintenance decisions.",
    scope: "The study validates the framework on the NASA battery dataset. It provides the explainable prediction foundation that later became part of the broader BatteryMetrix research program.",
  },
  {
    slug: "secure-av-voice",
    name: "Secure Voice and Event Intelligence for AVs",
    eyebrow: "Secure autonomous systems",
    statement: "How can an autonomous vehicle verify who is speaking and preserve trustworthy evidence when an incident occurs?",
    overview: [
      "Voice control creates an intuitive interface for autonomous vehicles, but it also creates identity and spoofing risks. After an accident, accountability introduces a second challenge: event records must remain transparent, verifiable, and resistant to tampering.",
      "This project connects robust speaker identification, ensemble speaker verification, blockchain-based event recording, and location-aware witness voting in one security and accountability framework.",
    ],
    status: "Published in Electronics, 2023",
    question: "Can voice identity, spoofing resistance, and distributed accident evidence be designed as one autonomous-vehicle trust architecture?",
    approach: [
      { title: "Authorized speaker identification", text: "Spectral voice features and classification models restrict control to enrolled users instead of accepting commands from any speaker." },
      { title: "Anti-spoofing ensemble", text: "Multiple speaker-verification decisions are combined to improve resilience against synthesized or converted voice attacks." },
      { title: "Blockchain event recording", text: "Smart contracts store vehicle, speaker, time, location, and witness-vote evidence as transparent, tamper-resistant accident records." },
    ],
    outcomes: [
      { value: "3", label: "integrated trust mechanisms" },
      { value: "4", label: "blockchain platforms compared" },
      { value: "Smart contracts", label: "for event and witness records" },
      { value: "Location aware", label: "vehicle witness voting" },
    ],
    contributions: [
      "Speaker identification for limiting autonomous-vehicle control to authorized users.",
      "An ensemble verification strategy for detecting voice spoofing attempts.",
      "A blockchain workflow for immutable accident and speaker-event records.",
      "A concept in which nearby vehicles act as independent witnesses and vote on liability.",
      "Latency and simulation analysis for the proposed recording and adjudication workflow.",
    ],
    images: [
      { src: "/research/secure-av-voice/blockchain-platforms.png", alt: "Comparison of blockchain platforms for autonomous vehicle event recording", caption: "The platform comparison examines the characteristics of candidate blockchains for transparent and tamper-resistant vehicle records." },
      { src: "/research/secure-av-voice/vehicle-simulation.png", alt: "Simulation of accident vehicles, witness vehicles, and normal traffic", caption: "The simulation distinguishes accident participants, nearby witnesses, and normal vehicles while varying their positions and speeds." },
      { src: "/research/secure-av-voice/blockchain-latency.png", alt: "Blockchain event-recording latency under changing vehicle and witness counts", caption: "Latency experiments show how the accident-recording workflow changes as the number of participating vehicles and witnesses grows." },
    ],
    links: [
      { label: "Open-access paper", href: "https://doi.org/10.3390/electronics12244998" },
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "Security before an incident and accountability after it are usually treated separately. This system connects them through identity: the vehicle verifies who issued a command, preserves the associated event evidence, and incorporates observations from nearby vehicles when liability must be investigated.",
    scope: "The paper establishes and simulates the integrated architecture. Deployment on production vehicles would require manufacturer interoperability, dependable vehicle-to-network communication, sensor validation, and shared standards for accident evidence.",
  },
  {
    slug: "bat-gpt",
    name: "BAT-GPT",
    eyebrow: "Human-centered battery twins",
    statement: "Can a battery digital twin explain its condition in language a user can act on?",
    overview: [
      "Battery twins produce technical measurements and predictions, but their value depends on whether engineers and asset owners can interpret them. BAT-GPT explores a conversational layer that translates battery operating data into direct, domain-specific responses.",
      "The project fine-tunes FLAN-T5 with Low-Rank Adaptation using battery conversations derived from NASA data. Zero-shot, few-shot, and parameter-efficient fine-tuning experiments reveal both the promise and the current limitations of language models as digital-twin assistants.",
    ],
    status: "Published in the 2025 IEEE ICUFN proceedings",
    question: "How can a parameter-efficient language model make battery digital-twin insights more interactive and understandable?",
    approach: [
      { title: "Battery conversations", text: "Battery cycles, current, temperature, voltage, and capacity are transformed into prompt-response examples grounded in digital-twin data." },
      { title: "LoRA fine-tuning", text: "FLAN-T5 is adapted to the battery domain through low-rank parameter updates rather than full-model retraining." },
      { title: "Prompting and evaluation", text: "Base, zero-shot, few-shot, and fine-tuned responses are compared using human baselines and ROUGE metrics." },
    ],
    outcomes: [
      { value: "4", label: "ROUGE measures reported" },
      { value: "0.298", label: "LoRA-FLAN-T5 ROUGE-L" },
      { value: "0.292", label: "LoRA-FLAN-T5 ROUGE-Lsum" },
      { value: "LoRA", label: "parameter-efficient adaptation" },
    ],
    contributions: [
      "A domain-specific conversational assistant for battery digital twins.",
      "A prompt-response pipeline grounded in battery operating cycles and environmental conditions.",
      "Parameter-efficient adaptation of FLAN-T5 using LoRA.",
      "Comparison of base, zero-shot, few-shot, and fine-tuned behavior.",
      "An honest evaluation that documents improved coherence alongside remaining numerical errors.",
    ],
    images: [
      { src: "/research/bat-gpt/digital-twin-interface.jpg", alt: "Battery digital twin interface with conversational assistant panel", caption: "The prototype places an assistant beside the battery twin so users can query model results within the monitoring environment." },
      { src: "/research/bat-gpt/base-and-peft-response.jpg", alt: "Comparison of baseline human, original FLAN-T5, and parameter-efficient model responses", caption: "A response comparison shows how the base and parameter-efficient models interpret a battery-capacity prompt against a human reference." },
      { src: "/research/bat-gpt/zero-shot-response.jpg", alt: "Zero-shot FLAN-T5 response to a battery operating-condition prompt", caption: "The zero-shot example exposes repetition and weak physical interpretation, documenting the limitations that motivate domain-specific adaptation." },
    ],
    links: [
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "BAT-GPT is valuable because it tests the interface between numerical prediction and human understanding. The evaluation does not hide failure: some responses become clearer after adaptation while capacity estimates can remain inaccurate. That evidence defines where grounding and validation must improve.",
    scope: "This study is an early language-interface prototype built around NASA battery data and FLAN-T5. It establishes the conversational component later integrated into the broader BatteryMetrix vision.",
  },
  {
    slug: "metaverse-bms",
    name: "Metaverse-Enhanced Battery Management",
    eyebrow: "Immersive energy systems",
    statement: "What changes when battery monitoring becomes a synchronized environment that engineers can enter, inspect, and understand spatially?",
    overview: [
      "Conventional battery dashboards separate models, state estimates, and visual context. This project develops a six-layer digital-twin architecture that connects the physical battery, communication, data, modeling, services, and an Unreal Engine metaverse interface.",
      "A lithium-ion NMC battery case study combines electrochemical modeling, Unscented Kalman Filter state estimation, real-time synchronization, and immersive visualization. The architecture is designed to scale from a single experimental vehicle to cloud and fleet settings.",
    ],
    status: "Published in High-Confidence Computing, 2026",
    question: "Can high-accuracy battery state estimation and an immersive digital twin operate together within real-time latency constraints?",
    approach: [
      { title: "Six-layer architecture", text: "Physical, communication, data, modeling, service, and immersive layers define a modular path from battery measurements to user interaction." },
      { title: "Model-based state estimation", text: "Electrochemical battery models and an Unscented Kalman Filter estimate State of Charge from live operating data." },
      { title: "Unreal Engine twin", text: "The estimated state and battery measurements are synchronized with a three-dimensional vehicle environment for spatial monitoring." },
    ],
    outcomes: [
      { value: "0.23%", label: "State of Charge RMSE" },
      { value: "<200 ms", label: "end-to-end interaction latency" },
      { value: "6", label: "digital-twin architecture layers" },
      { value: "NMC", label: "battery chemistry case study" },
    ],
    contributions: [
      "A six-layer reference architecture for battery digital twins and metaverse interaction.",
      "Real-time UKF-based State of Charge estimation with 0.23 percent RMSE.",
      "An Unreal Engine environment synchronized with a physical experimental vehicle.",
      "A modular design that supports high-performance and lightweight or cloud-hosted deployment.",
      "A pathway from single-vehicle monitoring to interoperable fleet-scale twins.",
    ],
    images: [
      { src: "/research/metaverse-bms/six-layer-architecture.jpg", alt: "Six-layer metaverse-enhanced battery digital twin architecture", caption: "The reference architecture organizes the physical asset, communication, data, models, services, and immersive interface into a modular digital-twin stack." },
      { src: "/research/metaverse-bms/system-model.jpg", alt: "System model for the physical vehicle, battery estimation, server, and Unreal Engine twin", caption: "The system model traces battery measurements from the experimental vehicle through state estimation and network services to the immersive twin." },
      { src: "/research/metaverse-bms/experimental-ev.jpg", alt: "Experimental electric vehicle and battery digital twin setup", caption: "The physical case study uses a small electric vehicle and battery instrumentation to validate the synchronized architecture." },
      { src: "/research/metaverse-bms/unreal-twin.jpg", alt: "Unreal Engine battery digital twin interface", caption: "The Unreal Engine environment places the vehicle and battery state inside an interactive spatial representation rather than a conventional two-dimensional dashboard." },
    ],
    links: [
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "The project shows that immersive visualization does not have to come at the expense of estimation quality or responsiveness. The UKF-based twin maintains high State of Charge accuracy while the complete physical-to-virtual loop remains below 200 milliseconds.",
    scope: "The architecture is validated through a lithium-ion NMC battery and experimental vehicle. Commercial deployment would require security-aware communication, low-power rendering optimization, and validation on production EV testbeds.",
  },
  {
    slug: "metahate",
    name: "MetaHate",
    eyebrow: "Safer virtual environments",
    statement: "How can a metaverse platform detect harmful language in real time without carrying a model too heavy to deploy?",
    overview: [
      "Immersive social platforms reproduce the safety challenges of the wider internet, including harassment, hate speech, and offensive language. Detection models must be accurate enough to moderate interactions, explainable enough to inspect, and compact enough to run within an interactive platform.",
      "MetaHate evaluates deep-learning text classifiers, develops a lightweight CNN with GloVe embeddings, applies LIME explanations, quantizes the model, and connects it to a live Roblox environment through a web service.",
    ],
    status: "Published in the IEEE ICTC 2023 proceedings",
    question: "Can an explainable, compressed text classifier support real-time hate-speech moderation inside a metaverse application?",
    approach: [
      { title: "Multi-class language detection", text: "Deep-learning models classify text as hate, offensive, or normal using pretrained word representations and a benchmark social-media dataset." },
      { title: "Explainability and compression", text: "LIME exposes influential words while quantization reduces the CNN footprint for practical serving." },
      { title: "Roblox deployment", text: "A hosted web service receives messages from Roblox, performs real-time analysis, and returns moderation results to the virtual environment." },
    ],
    outcomes: [
      { value: "93.59%", label: "CNN model-size reduction" },
      { value: "3", label: "speech classes" },
      { value: "LIME", label: "local explanation method" },
      { value: "Roblox", label: "interactive deployment platform" },
    ],
    contributions: [
      "A metaverse-focused system for hate, offensive, and normal language classification.",
      "Comparative evaluation of deep-learning approaches for real-time moderation.",
      "LIME explanations that expose the words influencing individual classifications.",
      "A quantized CNN whose model size is reduced by 93.59 percent.",
      "A working connection between the hosted detector and a Roblox environment.",
    ],
    images: [
      { src: "/research/metahate/cnn-confusion-matrix.png", alt: "CNN confusion matrix for hate, offensive, and normal language", caption: "The confusion matrix reveals class-specific behavior, including the difficulty of separating hate speech from the larger offensive-language class." },
      { src: "/research/metahate/model-performance.png", alt: "MetaHate model and processor performance comparison", caption: "The performance analysis compares model behavior and deployment cost to support selection of a lightweight real-time classifier." },
      { src: "/research/metahate/web-assistant.jpg", alt: "MetaHate web interface for submitting text to the detection model", caption: "The web service provides the inference endpoint that connects the trained language model to interactive virtual platforms." },
      { src: "/research/metahate/roblox-environment.jpg", alt: "Roblox environment connected to the MetaHate moderation service", caption: "The Roblox deployment demonstrates how live virtual messages can be sent to the hosted model for real-time analysis." },
    ],
    links: [
      { label: "Related publications", href: "/publications" },
    ],
    interpretation: "The deployment makes the research concrete: moderation is not evaluated only as an offline classification score. Model size, explanation quality, web serving, and the behavior of a live Roblox connection all become part of the system.",
    scope: "MetaHate is a research prototype using text-based moderation and a three-class dataset. Broader deployment would require multilingual evaluation, continuously evolving language data, fairness analysis, and platform-specific moderation policies.",
  },
];

export function getResearchProject(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
