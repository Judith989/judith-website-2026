"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Activity, ArrowLeft, ExternalLink, Map, Music, Music2, Volume2, VolumeX, X } from "lucide-react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import styles from "./research-world.module.css";
import { ResearchChallenge } from "./research-challenges";

type Portal = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: number;
  position: [number, number, number];
};

type Category = "Research" | "News" | "Milestone" | "Teaching" | "Mentorship" | "Service";
type Exhibit = { title: string; kind: string; category?: Category; description: string; href: string; image: string; position: [number, number, number] };

const categoryColors: Record<Category, number> = { Research:0x3f7546, News:0x3d7183, Milestone:0xc28b3d, Teaching:0x6f5790, Mentorship:0xa64f68, Service:0x8b5d3f };
const worldGates = [
  { z:-13, title:"Research Gate", color:categoryColors.Research },
  { z:-27, title:"Milestone Gate", color:categoryColors.Milestone },
  { z:-41, title:"Teaching Gate", color:categoryColors.Teaching },
  { z:-55, title:"Mentorship Gate", color:categoryColors.Mentorship },
  { z:-67, title:"Service Gate", color:categoryColors.Service },
];

function shuffledChallenges() {
  const deck=Array.from({length:10},(_,index)=>index);
  for(let index=deck.length-1;index>0;index-=1){const swap=Math.floor(Math.random()*(index+1));[deck[index],deck[swap]]=[deck[swap],deck[index]];}
  return deck;
}

const exhibits: Exhibit[] = [
  { title: "OmniRestore", kind: "Computer vision system", category:"Research", description: "Lightweight universal adverse-weather image restoration for safer autonomous perception.", href: "/research/omnirestore", image: "/gallery/cvpr_2026.jpg", position: [-4.8,0,-6] },
  { title: "SmartParking", kind: "Intelligent transportation", description: "Object detection for vehicles, pedestrians, and traffic signs in smart parking environments.", href: "/research/smartparking", image: "/research/smartparking/system.png", position: [4.8,0,-14] },
  { title: "BatteryMetrix", kind: "PhD research program", description: "Predictive, explainable, secure, and immersive battery digital twins.", href: "/research/batterymetrix", image: "/research/battery-p297-img0.png", position: [-4.8,0,-22] },
  { title: "MetaHate", kind: "Responsible metaverse AI", description: "Deep-learning methods for detecting hate speech in metaverse applications.", href: "/research/metahate", image: "/research/metahate/system-model.png", position: [4.8,0,-30] },
  { title: "PANDA", kind: "Predictive digital twin", description: "Multi-horizon occupancy and turnover forecasting in an inspectable parking twin.", href: "/research/panda", image: "/digital_twin_i3ce.png", position: [-4.8,0,-38] },
  { title: "Secure AV Voice", kind: "Autonomous systems", description: "Speaker identification and blockchain event recording for accountable autonomous vehicles.", href: "/research/secure-av-voice", image: "/research/secure-av-voice/av4.png", position: [4.8,0,-46] },
  { title: "BridgeSync", kind: "Intelligent infrastructure", description: "Secure bridge sensing, digital representation, and decision support.", href: "/research/bridgesync", image: "/research/bridge-p5-img1.png", position: [-4.8,0,-54] },
  { title: "BAT-GPT", kind: "Interactive battery intelligence", description: "Language models that make battery digital-twin insights understandable and actionable.", href: "/research/bat-gpt", image: "/research/bat-gpt/system-overview.png", position: [4.8,0,-62] },
  { title: "Metaverse BMS", kind: "Immersive digital twin", description: "MATLAB, Unreal Engine, and battery simulation joined in a metaverse interface.", href: "/research/metaverse-bms", image: "/research/metaverse-bms/system-model.jpg", position: [-4.8,0,-69] },
  { title: "IoT Protocol Twin", kind: "Connected vehicle research", description: "A physical and virtual electric-vehicle testbed comparing digital-twin communication protocols.", href: "/research/iot-protocols", image: "/research/iot-protocols/jcn1.png", position: [8,0,-20] },
  { title: "Service Advisor AI", kind: "Explainable operational AI", description: "Interpretable models for understanding service-advisor performance in automotive dealerships.", href: "/research/service-advisor-ai", image: "/research/service-advisor-ai/dealer2.png", position: [-8,0,-34] },
  { title: "Explainable Battery Twins", kind: "Trustworthy battery intelligence", description: "SHAP, LIME, and surrogate explanations for battery state predictions.", href: "/research/explainable-battery-twins", image: "/research/explainable-battery-twins/sys1.png", position: [8,0,-50] },
];

const forestStories: Exhibit[] = [
  ...exhibits,
  { title:"PhD conferred", kind:"August 22, 2025", category:"Milestone", description:"My PhD in IT Convergence Engineering brought BatteryMetrix together as a predictive, explainable, secure, and immersive battery digital twin.", href:"/gallery", image:"/gallery/phd_grad1.jpeg", position:[0,0,0] },
  { title:"MSc in Electronics Engineering", kind:"August 20, 2021", category:"Milestone", description:"My MSc chapter at Kumoh National Institute of Technology established my foundation in deep learning for wireless systems.", href:"/gallery", image:"/gallery/msc_grad.jpeg", position:[0,0,0] },
  { title:"Distinguished Postdoctoral Fellowship", kind:"University of Wyoming", category:"News", description:"I joined the Secure Sensing and Learning Research Lab to advance trustworthy vision, infrastructure, and cyber-physical intelligence.", href:"/news", image:"/judith_pic.png", position:[0,0,0] },
  { title:"CVPR Workshops 2026", kind:"Conference news", category:"News", description:"OmniRestore entered the international computer-vision community through a workshop presentation in Denver.", href:"/gallery", image:"/gallery/cvpr_2026.jpg", position:[0,0,0] },
  { title:"Teaching philosophy", kind:"Learning through systems", category:"Teaching", description:"I teach by connecting mathematical foundations, computational experiments, and consequential physical-world problems.", href:"/about", image:"/logo-judith.png", position:[0,0,0] },
  { title:"Mentorship philosophy", kind:"Ownership, rigor, and confidence", category:"Mentorship", description:"I help emerging researchers move from guided participation toward intellectual ownership, publication, and independent judgment.", href:"/about", image:"/gallery/uw-digital-twins-meetup-3.jpg", position:[0,0,0] },
  { title:"International internship cohorts", kind:"Research mentorship", category:"Mentorship", description:"I recruited and supervised more than fifteen students across Kyungpook National University, Michigan State University, and CLIMDES collaborations.", href:"/news", image:"/logo-judith.png", position:[0,0,0] },
  { title:"WomenTech Global Ambassador", kind:"Community leadership", category:"Service", description:"I connect and amplify women in technology across borders while supporting more inclusive technical leadership.", href:"/news", image:"/judith_pic.png", position:[0,0,0] },
  { title:"Peer review and technical service", kind:"Academic service", category:"Service", description:"My service spans leading computer-vision, machine-learning, wireless-communication, and intelligent-systems venues.", href:"/cv", image:"/logo-judith.png", position:[0,0,0] },
];

const portals: Portal[] = [
  { title: "OmniRestore", subtitle: "The Weather Garden", description: "Walk into my work on lightweight image restoration for autonomous systems navigating rain, snow, fog, low light, and composite weather.", href: "/research/omnirestore", color: 0xd2a23a, position: [-8, 1.7, -12] },
  { title: "BatteryMetrix", subtitle: "The Energy Grove", description: "My doctoral research world brings battery prediction, explainable AI, secure records, and immersive digital twins into one user-centered system.", href: "/research/batterymetrix", color: 0x8d173b, position: [8, 1.7, -25] },
  { title: "PANDA", subtitle: "The Mobility Clearing", description: "A predictive parking digital twin that turns limited observations into occupancy and turnover forecasts people can inspect spatially.", href: "/research/panda", color: 0xc47c2b, position: [-8, 1.7, -39] },
  { title: "BridgeSync", subtitle: "The Resilience Crossing", description: "A secure intelligent bridge-monitoring framework connecting structural sensing, digital representation, and decision support.", href: "/research/bridgesync", color: 0x77213d, position: [8, 1.7, -53] },
  { title: "Research Archive", subtitle: "The Waterfall Library", description: "Continue beyond the waterfall to explore publications, systems, and the complete research record behind this world.", href: "/publications", color: 0xe0b15b, position: [0, 2.2, -70] },
];

function makeLabel(text: string, color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 180;
  const context = canvas.getContext("2d");
  if (!context) return new THREE.Texture();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(25, 10, 15, .78)";
  context.roundRect(8, 8, 752, 164, 22);
  context.fill();
  context.strokeStyle = color;
  context.lineWidth = 4;
  context.stroke();
  context.fillStyle = "#fff8f0";
  context.font = "600 54px Georgia";
  context.textAlign = "center";
  context.fillText(text, 384, 105);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addTree(scene: THREE.Scene, x: number, z: number, scale: number, tone: number) {
  const group = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.16 * scale, .24 * scale, 2.5 * scale, 8), new THREE.MeshStandardMaterial({ color: 0x513522, roughness: 1 }));
  trunk.position.y = 1.25 * scale;
  group.add(trunk);
  const leafMaterial = new THREE.MeshStandardMaterial({ color: tone, roughness: .92 });
  [[0, 3.1, 0, 1.25], [-.55, 2.75, .1, .9], [.55, 2.8, -.1, .95], [0, 3.75, 0, .85]].forEach(([lx, ly, lz, size]) => {
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(size * scale, 1), leafMaterial);
    crown.position.set(lx * scale, ly * scale, lz * scale);
    group.add(crown);
  });
  group.position.set(x, 0, z);
  scene.add(group);
  return group;
}

function addPerson(group: THREE.Group, x:number, z:number, color:number, seated=false) {
  const person=new THREE.Group();
  const body=new THREE.Mesh(new THREE.CapsuleGeometry(.22,.72,5,10),new THREE.MeshStandardMaterial({color})); body.position.y=seated?.85:1.15; person.add(body);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.23,16,12),new THREE.MeshStandardMaterial({color:0x8b5e45})); head.position.y=seated?1.55:1.95; person.add(head);
  const hair=new THREE.Mesh(new THREE.SphereGeometry(.25,12,8,0,Math.PI*2,0,Math.PI*.55),new THREE.MeshStandardMaterial({color:0x211310})); hair.position.y=head.position.y+.07; person.add(hair);
  person.position.set(x,0,z); group.add(person); return person;
}

function makeBoardTexture(title:string, lines:string[]) {
  const canvas=document.createElement("canvas"); canvas.width=1024; canvas.height=600; const context=canvas.getContext("2d"); if(!context)return new THREE.Texture();
  context.fillStyle="#173c31";context.fillRect(0,0,1024,600);context.strokeStyle="#d6b76f";context.lineWidth=12;context.strokeRect(10,10,1004,580);context.fillStyle="#fff8e9";context.font="bold 48px Georgia";context.fillText(title,55,85);context.font="30px Georgia";lines.forEach((line,index)=>context.fillText(line,55,165+index*72));
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}

function createAmbientSound() {
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  const context = new AudioContextClass();
  const master = context.createGain();
  master.gain.value = .13;
  master.connect(context.destination);

  const padGain = context.createGain();
  padGain.gain.value = .08;
  padGain.connect(master);
  const oscillators = [110, 164.81, 220].map((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = index === 1 ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 1 ? .11 : .055;
    oscillator.connect(gain).connect(padGain);
    oscillator.start();
    return oscillator;
  });

  const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) data[index] = (Math.random() * 2 - 1) * .38;
  const water = context.createBufferSource();
  const waterFilter = context.createBiquadFilter();
  const waterGain = context.createGain();
  water.buffer = buffer;
  water.loop = true;
  waterFilter.type = "lowpass";
  waterFilter.frequency.value = 900;
  waterGain.gain.value = .12;
  water.connect(waterFilter).connect(waterGain).connect(master);
  water.start();

  return {
    context,
    master,
    stop: () => {
      oscillators.forEach((oscillator) => oscillator.stop());
      water.stop();
      void context.close();
    },
  };
}

export default function ResearchWorldClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<ReturnType<typeof createAmbientSound>>(null);
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [activePortal, setActivePortal] = useState<Portal | null>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const [qualityNotice, setQualityNotice] = useState("");
  const [activeExhibit, setActiveExhibit] = useState<Exhibit | null>(null);
  const [challengeSeed, setChallengeSeed] = useState<number | null>(null);
  const [challengeTitle, setChallengeTitle] = useState("Research Gate");
  const [restoredVision, setRestoredVision] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const restoredVisionRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const challengeOpenRef = useRef(false);
  const completedGatesRef = useRef(new Set<number>());
  const challengeDeckRef = useRef<number[]>([]);

  const openChallenge = useCallback((gate: number) => {
    if (challengeOpenRef.current || completedGatesRef.current.has(gate)) return;
    challengeOpenRef.current = true;
    if (challengeDeckRef.current.length === 0) {
      challengeDeckRef.current = shuffledChallenges();
    }
    setChallengeTitle(worldGates[gate].title);
    setChallengeSeed(challengeDeckRef.current.shift()!);
  }, []);
  const completeChallenge = useCallback(() => {
    const gate = Number(document.body.dataset.researchGate ?? 0);
    completedGatesRef.current.add(gate);
    challengeOpenRef.current = false;
    setChallengeSeed(null);
  }, []);
  const activateRestoration = useCallback(() => { restoredVisionRef.current=true; setRestoredVision(true); }, []);
  const toggleMotion = useCallback(() => { const next=!reducedMotionRef.current; reducedMotionRef.current=next; setReducedMotion(next); }, []);

  const startSound = useCallback(() => {
    if (!audioRef.current) audioRef.current = createAmbientSound();
    if (audioRef.current?.context.state === "suspended") void audioRef.current.context.resume();
    setMuted(false);
  }, []);

  const enterWorld = useCallback((withSound: boolean) => {
    setEntered(true);
    if (withSound) startSound();
  }, [startSound]);

  const toggleSound = useCallback(() => {
    if (!audioRef.current) {
      startSound();
      return;
    }
    const nextMuted = !muted;
    audioRef.current.master.gain.setTargetAtTime(nextMuted ? 0 : .13, audioRef.current.context.currentTime, .08);
    setMuted(nextMuted);
  }, [muted, startSound]);

  useEffect(() => {
    document.body.classList.add("research-world-active");
    const prefersReduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedMotionRef.current=prefersReduced;
    if(prefersReduced) window.setTimeout(()=>setReducedMotion(true),0);
    return () => document.body.classList.remove("research-world-active");
  }, []);

  useEffect(() => () => audioRef.current?.stop(), []);

  useEffect(() => {
    if (!entered || !canvasRef.current || !worldRef.current) return;
    const canvas = canvasRef.current;
    const container = worldRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    const pixelRatio = Math.min(window.devicePixelRatio, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = window.innerWidth > 720;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8eb5a2);
    scene.fog = new THREE.FogExp2(0x9ab6a7, .012);
    const camera = new THREE.PerspectiveCamera(68, container.clientWidth / container.clientHeight, .1, 180);
    camera.position.set(0, 1.7, 7);

    scene.add(new THREE.HemisphereLight(0xeaf5df, 0x34211f, 2.25));
    const sun = new THREE.DirectionalLight(0xffe4ad, 2.8);
    sun.position.set(-18, 30, 12);
    sun.castShadow = renderer.shadowMap.enabled;
    sun.shadow.mapSize.set(1024, 1024);
    scene.add(sun);
    const proximityLabels: THREE.Sprite[] = [];

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 180, 1, 1), new THREE.MeshStandardMaterial({ color: 0x365c35, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = -55;
    ground.receiveShadow = true;
    scene.add(ground);

    const path = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 92), new THREE.MeshStandardMaterial({ color: 0xb99b76, roughness: 1 }));
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, .012, -38);
    path.receiveShadow = true;
    scene.add(path);

    worldGates.forEach((worldGate) => {
      const gate = new THREE.Mesh(new THREE.TorusGeometry(2.55, .085, 10, 64), new THREE.MeshStandardMaterial({ color: worldGate.color, emissive: worldGate.color, emissiveIntensity: 1.35, metalness: .4 }));
      gate.position.set(0, 2.5, worldGate.z); scene.add(gate);
      const color=`#${worldGate.color.toString(16).padStart(6,"0")}`;
      const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabel(worldGate.title, color), transparent: true }));
      sign.position.set(0, 5.7, worldGate.z); sign.scale.set(3.8, .9, 1); scene.add(sign);
      proximityLabels.push(sign);
    });

    const river = new THREE.Mesh(new THREE.PlaneGeometry(34, 16), new THREE.MeshPhysicalMaterial({ color: 0x3b8a91, transparent: true, opacity: .74, roughness: .16, metalness: .05 }));
    river.rotation.x = -Math.PI / 2;
    river.position.set(0, .06, -78);
    scene.add(river);

    const rocks: THREE.Object3D[] = [];
    for (let index = 0; index < 28; index += 1) {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.3 + Math.random() * 1.9, 0), new THREE.MeshStandardMaterial({ color: index % 3 === 0 ? 0x5f6757 : 0x74766b, roughness: 1 }));
      rock.scale.y = .65 + Math.random() * .8;
      rock.position.set((Math.random() - .5) * 28, 1 + Math.random() * 5, -86 - Math.random() * 5);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      scene.add(rock);
      rocks.push(rock);
    }

    const waterfallMaterial = new THREE.MeshPhysicalMaterial({ color: 0xbce9e9, transparent: true, opacity: .72, transmission: .25, roughness: .05, side: THREE.DoubleSide });
    const waterfall = new THREE.Mesh(new THREE.PlaneGeometry(8.5, 13, 16, 30), waterfallMaterial);
    waterfall.position.set(0, 7.3, -86.5);
    scene.add(waterfall);
    const waterfallGlow = new THREE.PointLight(0xbdefff, 7, 28);
    waterfallGlow.position.set(0, 7, -80);
    scene.add(waterfallGlow);

    const mistGeometry = new THREE.BufferGeometry();
    const mistPositions = new Float32Array(360 * 3);
    for (let index = 0; index < mistPositions.length; index += 3) {
      mistPositions[index] = (Math.random() - .5) * 13;
      mistPositions[index + 1] = .5 + Math.random() * 3.5;
      mistPositions[index + 2] = -82 + (Math.random() - .5) * 8;
    }
    mistGeometry.setAttribute("position", new THREE.BufferAttribute(mistPositions, 3));
    const mist = new THREE.Points(mistGeometry, new THREE.PointsMaterial({ color: 0xe7ffff, size: .22, transparent: true, opacity: .5, depthWrite: false }));
    scene.add(mist);

    const treeGroups: THREE.Group[] = [];
    const exhibitMeshes: THREE.Object3D[] = [];
    const districtClearings=[{x:-10,z:-9,r:8},{x:11,z:-17,r:9},{x:11,z:-32,r:8},{x:-11,z:-40,r:8},{x:-11,z:-56,r:8},{x:-12,z:-36,r:6},{x:11,z:-68,r:8}];
    for (let index = 0; index < 44; index += 1) {
      const side = index % 2 === 0 ? -1 : 1;
      const x = side * (9 + Math.random() * 27);
      const z = 10 - Math.random() * 105;
      if (z < -73 && Math.abs(x) < 19) continue;
      if(districtClearings.some(clearing=>Math.hypot(x-clearing.x,z-clearing.z)<clearing.r))continue;
      const story = forestStories[index % forestStories.length];
      const tree = addTree(scene, x, z, .65 + Math.random() * .75, categoryColors[story.category ?? "Research"]);
      tree.traverse((object) => { object.userData.exhibit = story; exhibitMeshes.push(object); });
      treeGroups.push(tree);
    }

    const textureLoader = new THREE.TextureLoader();
    const districtExhibits = new Set(["OmniRestore", "SmartParking", "PANDA", "BatteryMetrix", "BridgeSync"]);
    exhibits.filter((exhibit) => !districtExhibits.has(exhibit.title)).forEach((exhibit) => {
      const [x,,z] = exhibit.position;
      const tree = addTree(scene, x, z, 1.05, categoryColors[exhibit.category ?? "Research"]);
      tree.traverse((object) => { object.userData.exhibit = exhibit; exhibitMeshes.push(object); });
      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabel(exhibit.title, "#e4b65e"), transparent: true }));
      label.position.set(x, 5.25, z); label.scale.set(4.4, 1.02, 1); label.userData.exhibit = exhibit; scene.add(label); exhibitMeshes.push(label);
      proximityLabels.push(label);
      const photo = new THREE.Mesh(new THREE.PlaneGeometry(2.15, 1.35), new THREE.MeshBasicMaterial({ map: textureLoader.load(exhibit.image), side: THREE.DoubleSide }));
      photo.position.set(x > 0 ? x - 1.25 : x + 1.25, 2.15, z + .8); photo.rotation.y = x > 0 ? -.45 : .45; photo.userData.exhibit = exhibit; scene.add(photo); exhibitMeshes.push(photo);
    });

    const registerExhibit=(group:THREE.Object3D,exhibit:Exhibit)=>group.traverse(object=>{object.userData.exhibit=exhibit;exhibitMeshes.push(object);});
    const gltfLoader=new GLTFLoader();
    const carModels=["/models/kenney/car/sedan.glb","/models/kenney/car/suv.glb","/models/kenney/car/hatchback-sports.glb"];
    let carModelIndex=0;
    const prepareModel=(model:THREE.Object3D,targetSize:number)=>{
      model.traverse(object=>{if(object instanceof THREE.Mesh){object.castShadow=true;object.receiveShadow=true;}});
      const initialBox=new THREE.Box3().setFromObject(model);
      const size=initialBox.getSize(new THREE.Vector3());
      model.scale.setScalar(targetSize/Math.max(size.x,size.z));
      const scaledBox=new THREE.Box3().setFromObject(model);
      const center=scaledBox.getCenter(new THREE.Vector3());
      model.position.x-=center.x;
      model.position.z-=center.z;
      model.position.y-=scaledBox.min.y;
    };
    const loadModel=(url:string,parent:THREE.Object3D,position:[number,number,number],targetSize:number,rotation=0,onLoad?:()=>void)=>{
      gltfLoader.load(url,({scene:model})=>{prepareModel(model,targetSize);model.position.add(new THREE.Vector3(...position));model.rotation.y=rotation;parent.add(model);const exhibit=parent.userData.exhibit as Exhibit|undefined;if(exhibit){model.traverse(object=>{object.userData.exhibit=exhibit;exhibitMeshes.push(object);});}onLoad?.();},undefined,()=>{});
    };
    const addCar=(parent:THREE.Group,x:number,z:number,color:number,rotation=0)=>{
      const placeholder=new THREE.Group();
      const body=new THREE.Mesh(new THREE.BoxGeometry(1.15,.35,2.05),new THREE.MeshStandardMaterial({color,metalness:.25,roughness:.45}));body.position.y=.38;placeholder.add(body);
      const roof=new THREE.Mesh(new THREE.BoxGeometry(.82,.34,1.05),new THREE.MeshStandardMaterial({color:0xc7d2d0,metalness:.35,roughness:.25}));roof.position.y=.72;placeholder.add(roof);
      [-.48,.48].forEach(wx=>[-.68,.68].forEach(wz=>{const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,.12,12),new THREE.MeshStandardMaterial({color:0x161616}));wheel.rotation.z=Math.PI/2;wheel.position.set(wx,.22,wz);placeholder.add(wheel);}));
      placeholder.position.set(x,0,z);placeholder.rotation.y=rotation;parent.add(placeholder);
      const modelUrl=carModels[carModelIndex%carModels.length];carModelIndex+=1;
      loadModel(modelUrl,parent,[x,0,z],2.2,rotation,()=>{placeholder.visible=false;});
      return placeholder;
    };

    const museumRoad=new THREE.Mesh(new THREE.PlaneGeometry(7,76),new THREE.MeshStandardMaterial({color:0x34383a,roughness:1}));museumRoad.rotation.x=-Math.PI/2;museumRoad.position.set(11,.025,-34);scene.add(museumRoad);
    for(let z=1;z>-72;z-=5){const stripe=new THREE.Mesh(new THREE.PlaneGeometry(.12,2.4),new THREE.MeshBasicMaterial({color:0xe8c760}));stripe.rotation.x=-Math.PI/2;stripe.position.set(11,.04,z);scene.add(stripe);}

    const parkingStory=exhibits.find(item=>item.title==="SmartParking")!;
    const parkingDistrict=new THREE.Group();parkingDistrict.position.set(11,0,-17);
    const lot=new THREE.Mesh(new THREE.PlaneGeometry(13,15),new THREE.MeshStandardMaterial({color:0x464b4d,roughness:1}));lot.rotation.x=-Math.PI/2;parkingDistrict.add(lot);
    [-4,-2,0,2,4].forEach(x=>{[-4.7,4.7].forEach(z=>{const line=new THREE.Mesh(new THREE.PlaneGeometry(.08,3.3),new THREE.MeshBasicMaterial({color:0xf4eee2}));line.rotation.x=-Math.PI/2;line.position.set(x,.02,z);parkingDistrict.add(line);});});
    [[-3,-4.2,0x7d1837],[0,-4.2,0x315b67],[3,-4.2,0xc48b3d],[-3,4.2,0x365c35],[3,4.2,0xd7d0c2]].forEach(([x,z,color])=>addCar(parkingDistrict,x,z,color));
    const occupancy=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("SmartParking: 7 of 10 spaces available","#e4b65e"),transparent:true}));occupancy.position.set(0,4,0);occupancy.scale.set(6,1.35,1);parkingDistrict.add(occupancy);registerExhibit(parkingDistrict,parkingStory);scene.add(parkingDistrict);
    proximityLabels.push(occupancy);

    const pandaStory=exhibits.find(item=>item.title==="PANDA")!;
    const pandaDistrict=new THREE.Group();pandaDistrict.position.set(-11,0,-40);
    const pandaLot=new THREE.Mesh(new THREE.PlaneGeometry(12,12),new THREE.MeshStandardMaterial({color:0x3e4546}));pandaLot.rotation.x=-Math.PI/2;pandaDistrict.add(pandaLot);
    [-3.5,-1.2,1.2,3.5].forEach((x,index)=>{addCar(pandaDistrict,x,index%2?2.5:-2.5,index%2?0x315b67:0x8b1738);const beacon=new THREE.PointLight(index%2?0x6fd48a:0xe7b85e,2.5,4);beacon.position.set(x,1.2,index%2?2.5:-2.5);pandaDistrict.add(beacon);});
    const forecast=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("PANDA: now → 15 min → 30 min","#e4b65e"),transparent:true}));forecast.position.set(0,4,0);forecast.scale.set(6,1.35,1);pandaDistrict.add(forecast);registerExhibit(pandaDistrict,pandaStory);scene.add(pandaDistrict);
    proximityLabels.push(forecast);

    const batteryStory=exhibits.find(item=>item.title==="BatteryMetrix")!;
    const batteryDistrict=new THREE.Group();batteryDistrict.position.set(11,0,-32);
    for(let row=0;row<3;row+=1)for(let column=0;column<5;column+=1){const cell=new THREE.Mesh(new THREE.CylinderGeometry(.38,.38,2.4,20),new THREE.MeshStandardMaterial({color:row===1?0x8b1738:0xb68942,metalness:.5,roughness:.3}));cell.position.set((column-2)*.9,1.2,(row-1)*.9);batteryDistrict.add(cell);}
    const batteryLabel=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("BatteryMetrix: SoC · SoH · RUL · XAI","#e4b65e"),transparent:true}));batteryLabel.position.set(0,4.2,0);batteryLabel.scale.set(6,1.35,1);batteryDistrict.add(batteryLabel);registerExhibit(batteryDistrict,batteryStory);scene.add(batteryDistrict);
    proximityLabels.push(batteryLabel);

    const bridgeStory=exhibits.find(item=>item.title==="BridgeSync")!;
    const bridgeDistrict=new THREE.Group();bridgeDistrict.position.set(-11,0,-56);
    const deck=new THREE.Mesh(new THREE.BoxGeometry(12,.35,2.3),new THREE.MeshStandardMaterial({color:0x77746e,metalness:.25}));deck.position.y=2.2;bridgeDistrict.add(deck);
    [-5,0,5].forEach(x=>{const pier=new THREE.Mesh(new THREE.BoxGeometry(.6,2.2,1.3),new THREE.MeshStandardMaterial({color:0x565754}));pier.position.set(x,1,0);bridgeDistrict.add(pier);const sensor=new THREE.PointLight(0x66c8d4,3,5);sensor.position.set(x,2.65,0);bridgeDistrict.add(sensor);});
    const bridgeLabel=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("BridgeSync: secure structural intelligence","#e4b65e"),transparent:true}));bridgeLabel.position.set(0,4.5,0);bridgeLabel.scale.set(6,1.35,1);bridgeDistrict.add(bridgeLabel);registerExhibit(bridgeDistrict,bridgeStory);scene.add(bridgeDistrict);
    proximityLabels.push(bridgeLabel);

    const omniStory=exhibits.find(item=>item.title==="OmniRestore")!;
    const omniDistrict=new THREE.Group();omniDistrict.position.set(-10,0,-9);addCar(omniDistrict,0,0,0xf0eee7);
    const visionScreen=new THREE.Mesh(new THREE.PlaneGeometry(5.8,3.2),new THREE.MeshBasicMaterial({map:textureLoader.load("/research/omnirestore-fog-example.png"),side:THREE.DoubleSide}));visionScreen.position.set(0,3,-2);omniDistrict.add(visionScreen);
    const rainGeometry=new THREE.BufferGeometry();const rainPositions=new Float32Array(420*3);for(let i=0;i<rainPositions.length;i+=3){rainPositions[i]=(Math.random()-.5)*9;rainPositions[i+1]=Math.random()*8;rainPositions[i+2]=(Math.random()-.5)*8;}rainGeometry.setAttribute("position",new THREE.BufferAttribute(rainPositions,3));const rainMaterial=new THREE.PointsMaterial({color:0xc8e6ec,size:.055,transparent:true,opacity:.88});const weatherRain=new THREE.Points(rainGeometry,rainMaterial);omniDistrict.add(weatherRain);
    const omniLabel=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("OmniRestore Weather Chamber","#e4b65e"),transparent:true}));omniLabel.position.set(0,6,0);omniLabel.scale.set(6,1.35,1);omniDistrict.add(omniLabel);registerExhibit(omniDistrict,omniStory);scene.add(omniDistrict);
    proximityLabels.push(omniLabel);

    const teachingStory=forestStories.find(item=>item.title==="Teaching philosophy")!;
    const classroom=new THREE.Group();classroom.position.set(-12,0,-36);
    const teachingFloor=new THREE.Mesh(new THREE.CircleGeometry(5,40),new THREE.MeshStandardMaterial({color:0x6f5790,transparent:true,opacity:.28}));teachingFloor.rotation.x=-Math.PI/2;classroom.add(teachingFloor);
    const teacher=addPerson(classroom,0,0,0x6f1737);teacher.scale.setScalar(1.15);
    [[-2,-1.7],[0,-2.4],[2,-1.7],[-3,-.2],[3,-.2]].forEach(([x,z],index)=>{const student=addPerson(classroom,x,z,index%2?0x315b67:0xc18b3d,true);student.lookAt(0,1,0);});
    const teachingBoard=new THREE.Mesh(new THREE.PlaneGeometry(5.8,2.8),new THREE.MeshBasicMaterial({map:makeBoardTexture("Teaching through systems",["Observe the physical world","Model the governing process","Test, explain, and improve"])}));teachingBoard.position.set(0,2.6,2.3);teachingBoard.rotation.y=Math.PI;classroom.add(teachingBoard);
    const teachingLabel=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("Teaching & Mentorship Studio","#9f7ac1"),transparent:true}));teachingLabel.position.set(0,5.3,0);teachingLabel.scale.set(5.5,1.25,1);classroom.add(teachingLabel);
    proximityLabels.push(teachingLabel);
    classroom.traverse(object=>{object.userData.exhibit=teachingStory;exhibitMeshes.push(object);});scene.add(classroom);

    const officeStory:Exhibit={title:"Consultation Office",kind:"Meet Dr. Judith Njoku-Vowels",category:"Teaching",description:"A space for research consultation, student questions, collaboration, and working through the mathematics behind trustworthy battery digital twins.",href:"/contact",image:"/judith_pic2.png",position:[11,0,-68]};
    const office=new THREE.Group();office.position.set(11,0,-68);
    const roomFloor=new THREE.Mesh(new THREE.BoxGeometry(9,.15,7),new THREE.MeshStandardMaterial({color:0x7a6049}));office.add(roomFloor);
    const wallMaterial=new THREE.MeshStandardMaterial({color:0x5a2033,roughness:.8});
    [[0,2.7,-3.45,9,.25],[ -4.4,2.7,0,.25,7],[4.4,2.7,0,.25,7],[-3,2.7,3.45,2.8,.25],[3,2.7,3.45,2.8,.25]].forEach(([x,y,z,width,depth])=>{const wall=new THREE.Mesh(new THREE.BoxGeometry(width,5.4,depth),wallMaterial);wall.position.set(x,y,z);office.add(wall);});
    const officeSign=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("Consultation Office","#e4b65e"),transparent:true}));officeSign.position.set(0,5.9,3.5);officeSign.scale.set(5.2,1.2,1);office.add(officeSign);
    proximityLabels.push(officeSign);
    const desk=new THREE.Mesh(new THREE.BoxGeometry(4,.25,1.6),new THREE.MeshStandardMaterial({color:0x5b301f}));desk.position.set(0,1.15,0);office.add(desk);
    const deskLegMeshes:THREE.Mesh[]=[];const deskLegs=[[-1.7,.55,-.55],[1.7,.55,-.55],[-1.7,.55,.55],[1.7,.55,.55]];deskLegs.forEach(([x,y,z])=>{const leg=new THREE.Mesh(new THREE.BoxGeometry(.18,1.1,.18),new THREE.MeshStandardMaterial({color:0x3b2118}));leg.position.set(x,y,z);office.add(leg);deskLegMeshes.push(leg);});
    addPerson(office,0,1.3,0x6f1737,true);
    const monitor=new THREE.Mesh(new THREE.BoxGeometry(1.8,1.1,.12),new THREE.MeshStandardMaterial({color:0x17191b,emissive:0x315f6b,emissiveIntensity:.6}));monitor.position.set(0,1.95,-.25);office.add(monitor);
    const nameplate=new THREE.Sprite(new THREE.SpriteMaterial({map:makeLabel("Dr. Judith Njoku-Vowels","#e4b65e"),transparent:true}));nameplate.position.set(0,1.55,.9);nameplate.scale.set(3.2,.75,1);office.add(nameplate);
    const dfnBoard=new THREE.Mesh(new THREE.PlaneGeometry(6.8,3.8),new THREE.MeshBasicMaterial({map:makeBoardTexture("Battery DFN model",["∂cₛ/∂t = (1/r²) ∂/∂r (Dₛr² ∂cₛ/∂r)","∂(εₑcₑ)/∂t = ∂/∂x (Dₑeff ∂cₑ/∂x) + source","∂/∂x (σeff ∂φₛ/∂x) = reaction current","From electrochemistry to explainable digital twins"])}));dfnBoard.position.set(0,3,-3.2);office.add(dfnBoard);
    office.traverse(object=>{object.userData.exhibit=officeStory;exhibitMeshes.push(object);});scene.add(office);
    loadModel("/models/kenney/furniture/desk.glb",office,[0,0,0],4.2,Math.PI/2,()=>{desk.visible=false;deskLegMeshes.forEach(leg=>{leg.visible=false;});});
    loadModel("/models/kenney/furniture/chairDesk.glb",office,[0,0,1.45],1.35,Math.PI);
    loadModel("/models/kenney/furniture/computerScreen.glb",office,[0,1.2,-.25],1.7,Math.PI/2,()=>{monitor.visible=false;});
    loadModel("/models/kenney/furniture/computerKeyboard.glb",office,[0,1.24,.35],1.05,Math.PI/2);
    loadModel("/models/kenney/furniture/bookcaseOpen.glb",office,[-3.45,0,-2.45],3.1,0);
    loadModel("/models/kenney/furniture/pottedPlant.glb",office,[3.45,0,-2.45],1.35,0);
    loadModel("/models/kenney/city/building-a.glb",office,[6.7,0,-1],6.5,Math.PI/2);

    const firefliesGeometry = new THREE.BufferGeometry();
    const fireflyPositions = new Float32Array(240 * 3);
    for (let index = 0; index < fireflyPositions.length; index += 3) {
      fireflyPositions[index] = (Math.random() - .5) * 38;
      fireflyPositions[index + 1] = .8 + Math.random() * 5;
      fireflyPositions[index + 2] = 5 - Math.random() * 88;
    }
    firefliesGeometry.setAttribute("position", new THREE.BufferAttribute(fireflyPositions, 3));
    const fireflies = new THREE.Points(firefliesGeometry, new THREE.PointsMaterial({ color: 0xffdc7b, size: .12, transparent: true, opacity: .8 }));
    scene.add(fireflies);

    const portalMeshes: THREE.Mesh[] = [];
    portals.forEach((portal) => {
      const group = new THREE.Group();
      group.position.set(...portal.position);
      const color = new THREE.Color(portal.color);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, .1, 12, 72), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 2.1, metalness: .45, roughness: .2 }));
      ring.userData.portal = portal;
      group.add(ring);
      const inner = new THREE.Mesh(new THREE.CircleGeometry(1.34, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .12, side: THREE.DoubleSide }));
      inner.position.z = -.03;
      inner.userData.portal = portal;
      group.add(inner);
      const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(.9, 1.2, .45, 12), new THREE.MeshStandardMaterial({ color: 0x3b2427, roughness: .72 }));
      pedestal.position.y = -1.58;
      group.add(pedestal);
      const labelTexture = makeLabel(portal.title, `#${color.getHexString()}`);
      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture, transparent: true }));
      label.scale.set(4.6, 1.08, 1);
      label.position.y = 2.25;
      group.add(label);
      const light = new THREE.PointLight(color, 5, 13);
      light.position.z = 1.5;
      group.add(light);
      scene.add(group);
      portalMeshes.push(ring, inner);
    });

    const keys = new Set<string>();
    let yaw = 0;
    let pitch = 0;
    let dragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let currentNearTitle = "";
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onKeyDown = (event: KeyboardEvent) => keys.add(event.key.toLowerCase());
    const onKeyUp = (event: KeyboardEvent) => keys.delete(event.key.toLowerCase());
    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      canvas.setPointerCapture?.(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      yaw -= (event.clientX - lastPointerX) * .004;
      pitch = THREE.MathUtils.clamp(pitch - (event.clientY - lastPointerY) * .003, -.55, .55);
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
    };
    const onPointerUp = (event: PointerEvent) => {
      const moved = Math.abs(event.clientX - pointerStartX) + Math.abs(event.clientY - pointerStartY);
      dragging = false;
      if (moved > 8) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects([...portalMeshes, ...exhibitMeshes], false)[0];
      if (hit?.object.userData.portal) { setActiveExhibit(null); setActivePortal(hit.object.userData.portal as Portal); }
      if (hit?.object.userData.exhibit) { setActivePortal(null); setActiveExhibit(hit.object.userData.exhibit as Exhibit); }
    };
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight, false);
    };
    const setMove = (key: string, active: boolean) => active ? keys.add(key) : keys.delete(key);
    const controlButtons = [...container.querySelectorAll<HTMLButtonElement>("[data-move]")];
    const buttonHandlers = controlButtons.map((button) => {
      const key = button.dataset.move ?? "";
      const down = () => setMove(key, true);
      const up = () => setMove(key, false);
      button.addEventListener("pointerdown", down);
      button.addEventListener("pointerup", up);
      button.addEventListener("pointerleave", up);
      return { button, down, up };
    });

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);

    const clock = new THREE.Clock();
    const labelPosition=new THREE.Vector3();
    let frame = 0;
    let animationId = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), .04);
      const speed = (keys.has("shift") ? 9 : 5.2) * delta;
      const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
      const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
      if (keys.has("w") || keys.has("arrowup")) camera.position.addScaledVector(forward, speed);
      if (keys.has("s") || keys.has("arrowdown")) camera.position.addScaledVector(forward, -speed);
      if (keys.has("a") || keys.has("arrowleft")) camera.position.addScaledVector(right, -speed);
      if (keys.has("d") || keys.has("arrowright")) camera.position.addScaledVector(right, speed);
      worldGates.forEach((worldGate, gate) => {
        if (camera.position.z < worldGate.z && !completedGatesRef.current.has(gate)) {
          camera.position.z = worldGate.z + .15;
          document.body.dataset.researchGate = String(gate);
          keys.clear();
          openChallenge(gate);
        }
      });
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -22, 22);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, -76, 10);
      camera.position.y = reducedMotionRef.current ? 1.7 : 1.7 + Math.sin(clock.elapsedTime * 7) * ((keys.size > 0) ? .018 : .006);
      camera.rotation.order = "YXZ";
      camera.rotation.y = yaw;
      camera.rotation.x = pitch;

      waterfallMaterial.opacity = reducedMotionRef.current ? .7 : .66 + Math.sin(clock.elapsedTime * 3.2) * .08;
      rainMaterial.opacity = restoredVisionRef.current ? .08 : .88;
      if(!reducedMotionRef.current&&!restoredVisionRef.current){const rain=rainGeometry.attributes.position.array as Float32Array;for(let index=1;index<rain.length;index+=3){rain[index]-=delta*7;if(rain[index]<0)rain[index]=8;}rainGeometry.attributes.position.needsUpdate=true;}
      const positions = mistGeometry.attributes.position.array as Float32Array;
      for (let index = 1; index < positions.length; index += 3) {
        positions[index] += delta * (.3 + (index % 7) * .025);
        if (positions[index] > 4.5) positions[index] = .4;
      }
      mistGeometry.attributes.position.needsUpdate = true;
      fireflies.rotation.y = Math.sin(clock.elapsedTime * .08) * .12;
      proximityLabels.forEach(label=>{label.getWorldPosition(labelPosition);const distance=camera.position.distanceTo(labelPosition);const opacity=THREE.MathUtils.clamp((18-distance)/5,0,1);const material=label.material as THREE.SpriteMaterial;material.opacity=opacity;label.visible=opacity>.02;});
      portalMeshes.forEach((mesh, index) => {
        if (mesh.geometry instanceof THREE.TorusGeometry) mesh.rotation.z += delta * (.22 + index * .005);
      });

      frame += 1;
      if (frame % 12 === 0) {
        const nearest = portals.reduce<{ portal: Portal; distance: number } | null>((best, portal) => {
          const distance = camera.position.distanceTo(new THREE.Vector3(...portal.position));
          return !best || distance < best.distance ? { portal, distance } : best;
        }, null);
        const nextTitle = nearest && nearest.distance < 5.4 ? nearest.portal.title : "";
        if (nextTitle !== currentNearTitle) {
          currentNearTitle = nextTitle;
          setActivePortal(nearest && nearest.distance < 5.4 ? nearest.portal : null);
        }
      }
      renderer.render(scene, camera);
    };
    animate();
    if (!renderer.capabilities.isWebGL2) setQualityNotice("Your browser is using a compatibility renderer. The world remains fully explorable.");

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      buttonHandlers.forEach(({ button, down, up }) => {
        button.removeEventListener("pointerdown", down);
        button.removeEventListener("pointerup", up);
        button.removeEventListener("pointerleave", up);
      });
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Sprite) {
          object.geometry?.dispose?.();
          const material = object.material;
          (Array.isArray(material) ? material : [material]).forEach((item) => {
            if (item && "map" in item && item.map instanceof THREE.Texture) item.map.dispose();
            item?.dispose?.();
          });
        }
      });
      renderer.dispose();
      treeGroups.length = 0;
      rocks.length = 0;
    };
  }, [entered, openChallenge]);

  return (
    <main className={styles.world} ref={worldRef}>
      {!entered && (
        <section className={styles.portal}>
          <div className={styles.portalGlow} />
          <Image src="/logo-judith.png" alt="Judith Njoku-Vowels monogram" width={160} height={160} priority className={styles.logo} />
          <p className={styles.eyebrow}>An immersive research experience</p>
          <h1>Enter my <em>Research World</em></h1>
          <p className={styles.identity}>AI Researcher · Digital Twins · Computer Vision · Cyber-Physical Systems</p>
          <p className={styles.intro}>A living digital twin of the ideas, places, systems, and questions that have shaped my academic life. Follow the garden path, listen to the landscape, and enter each research portal.</p>
          <div className={styles.portalActions}>
            <button type="button" onClick={() => enterWorld(true)}><Volume2 size={18} /> Enter with sound</button>
            <button type="button" className={styles.quietButton} onClick={() => enterWorld(false)}>Enter quietly</button>
          </div>
          <p className={styles.soundNote}>Sound begins only after you choose it. Headphones recommended.</p>
          <Link href="/" className={styles.returnLink}><ArrowLeft size={16} /> Return to the main website</Link>
        </section>
      )}

      {entered && (
        <>
          <canvas ref={canvasRef} className={styles.canvas} aria-label="Interactive three-dimensional research world" />
          <div className={styles.vignette} />
          <header className={styles.worldHeader}>
            <Link href="/" aria-label="Return to the main website"><ArrowLeft size={18} /><span>Main website</span></Link>
            <div><strong>Judith Njoku-Vowels</strong><span>Research World</span></div>
            <div className={styles.headerControls}>
              <button type="button" onClick={() => setMapOpen((open) => !open)} aria-label="Open research world map"><Map size={18} /></button>
              <button type="button" onClick={toggleMotion} aria-label={reducedMotion?"Enable ambient motion":"Reduce motion"}><Activity size={18} /></button>
              <button type="button" onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Mute sound"}>{muted ? <VolumeX size={18} /> : <Music2 size={18} />}</button>
            </div>
          </header>

          <div className={styles.guide}><span>WASD or arrows to move</span><span>Drag to look</span><span>Select exhibits to inspect</span></div>
          <aside className={styles.trailLegend}><strong>Follow a trail</strong>{(Object.keys(categoryColors) as Category[]).map(category=><span key={category}><i style={{background:`#${categoryColors[category].toString(16).padStart(6,"0")}`}}/>{category}</span>)}</aside>
          <div className={styles.vrConsole} aria-label="VR navigation console">
            <div className={styles.consoleHeader}><span>VR navigation</span><i aria-hidden="true" /></div>
            <div className={styles.consoleReadout}><strong>Explore</strong><span>Touch and hold to move</span></div>
            <div className={styles.consolePad}>
              <button type="button" data-move="w" aria-label="Move forward"><span>Forward</span>▲</button>
              <div><button type="button" data-move="a" aria-label="Move left"><span>Left</span>◀</button><span className={styles.consoleCore} aria-hidden="true">JN</span><button type="button" data-move="d" aria-label="Move right"><span>Right</span>▶</button></div>
              <button type="button" data-move="s" aria-label="Move backward"><span>Back</span>▼</button>
            </div>
          </div>

          {activePortal && (
            <aside className={styles.portalCard} style={{ "--portal-color": `#${activePortal.color.toString(16).padStart(6, "0")}` } as React.CSSProperties}>
              <button type="button" onClick={() => setActivePortal(null)} aria-label="Close project information"><X size={17} /></button>
              <p>{activePortal.subtitle}</p>
              <h2>{activePortal.title}</h2>
              <span>{activePortal.description}</span>
              <Link href={activePortal.href} target="_blank" rel="noreferrer">Open in a new tab <ExternalLink size={15} /></Link>
            </aside>
          )}

          {activeExhibit && (
            <aside className={`${styles.portalCard} ${styles.exhibitCard}`} style={{ "--portal-color": `#${categoryColors[activeExhibit.category??"Research"].toString(16).padStart(6,"0")}` } as React.CSSProperties}>
              <button type="button" onClick={() => setActiveExhibit(null)} aria-label="Close research exhibit"><X size={17} /></button>
              <Image src={activeExhibit.image} width={520} height={300} alt={activeExhibit.title} />
              <p>{activeExhibit.category??"Research"} · {activeExhibit.kind}</p><h2>{activeExhibit.title}</h2><span>{activeExhibit.description}</span>
              {activeExhibit.title==="OmniRestore"&&!restoredVision&&<button type="button" className={styles.restoreButton} onClick={activateRestoration}>Activate Restore Vision</button>}
              {activeExhibit.title==="OmniRestore"&&restoredVision&&<b className={styles.restoredNotice}>Weather suppressed. Restored evidence revealed.</b>}
              <Link href={activeExhibit.href} target="_blank" rel="noreferrer">Explore without leaving the world <ExternalLink size={15} /></Link>
            </aside>
          )}

          {mapOpen && (
            <aside className={styles.mapPanel}>
              <button type="button" onClick={() => setMapOpen(false)} aria-label="Close map"><X size={18} /></button>
              <p><Map size={16} /> Research trail</p>
              <h2>Portals, research trees, and photograph exhibits</h2>
              <div className={styles.mapLegend}>{(Object.keys(categoryColors) as Category[]).map(category=><span key={category}><i style={{background:`#${categoryColors[category].toString(16).padStart(6,"0")}`}}/>{category}</span>)}</div>
              <ol>{portals.map((portal) => <li key={portal.title}><button type="button" onClick={() => { setActivePortal(portal); setMapOpen(false); }}><span style={{ background: `#${portal.color.toString(16).padStart(6, "0")}` }} />{portal.title}<small>{portal.subtitle}</small></button></li>)}</ol>
              <p className={styles.mapNote}>Every tree carries a story from my research, news, milestones, teaching, mentorship, or service. Five themed gates draw without repetition from the ten-game collection, so every challenge in one exploration is different.</p>
              <Link href="/research" target="_blank">Open the research index in a new tab</Link>
            </aside>
          )}

          {challengeSeed !== null && <ResearchChallenge key={challengeSeed} seed={challengeSeed} gateTitle={challengeTitle} onComplete={completeChallenge} onSkip={completeChallenge} />}

          {qualityNotice && <p className={styles.qualityNotice}>{qualityNotice}</p>}
          <div className={styles.watermark}><Music size={14} /> A digital twin of my research life</div>
        </>
      )}
    </main>
  );
}
