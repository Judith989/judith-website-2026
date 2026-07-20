"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Globe2, Music2, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import * as THREE from "three";
import styles from "./journey-globe.module.css";

type Stop = { year: string; city: string; country: string; lat: number; lon: number; kind: string; title: string; story: string; href: string };

const stops: Stop[] = [
  { year: "2014", city: "Owerri", country: "Nigeria", lat: 5.49, lon: 7.03, kind: "Education", title: "The engineering foundation", story: "I earned my BEng in Petroleum Engineering at the Federal University of Technology, Owerri, learning to see engineering problems as interconnected physical systems.", href: "/gallery" },
  { year: "2015 to 2019", city: "Lagos", country: "Nigeria", lat: 6.52, lon: 3.38, kind: "Professional formation", title: "Technology, service, and people", story: "Public service at the Ministry of Energy and customer-experience leadership at Sterling Bank strengthened the human and operational perspective I now bring to intelligent systems.", href: "/cv" },
  { year: "2019", city: "Gumi", country: "South Korea", lat: 36.12, lon: 128.34, kind: "Research transition", title: "From physical systems to intelligent communication", story: "At Kumoh National Institute of Technology, I moved into communications, machine learning, metaverse systems, digital twins, and the BatteryMetrix doctoral program.", href: "/about" },
  { year: "2020 to 2022", city: "Pyeongchang", country: "South Korea", lat: 37.37, lon: 128.39, kind: "Conference journey", title: "The first Korean conference chapters", story: "KICS presentations here traced my early work in radar waveform recognition, spectrum allocation, and real-time scene understanding for metaverse applications.", href: "/gallery" },
  { year: "2022 to 2024", city: "Daegu", country: "South Korea", lat: 35.87, lon: 128.60, kind: "Research leadership", title: "Mentorship became publication", story: "I supervised international internship cohorts connecting Kyungpook National University with Michigan State University and CLIMDES, growing student research into journal publications.", href: "/news" },
  { year: "2022 to 2024", city: "Jeju", country: "South Korea", lat: 33.50, lon: 126.53, kind: "Conference constellation", title: "Vision, voice, metaverse, and digital twins", story: "Across KICS, ICTC, APCC, and ICMIC, Jeju became a recurring stage for smart parking, autonomous-vehicle voice systems, BatteryMetrix, MetaHate, and secure intelligent systems.", href: "/gallery" },
  { year: "2022 and 2024", city: "Gyeongju", country: "South Korea", lat: 35.86, lon: 129.22, kind: "Conference journey", title: "Battery intelligence in public", story: "I presented foundational battery digital-twin analysis and later energy-forecasting research to the Korean communications community.", href: "/gallery" },
  { year: "2023", city: "Paris", country: "France", lat: 48.86, lon: 2.35, kind: "International conference", title: "A transportation metaverse in Paris", story: "At ICUFN 2023, I presented a review and demonstration showing how metaverse and digital-twin ideas could reshape transportation systems.", href: "https://doi.org/10.1109/ICUFN57995.2023.10199405" },
  { year: "2024", city: "East Lansing", country: "United States", lat: 42.74, lon: -84.48, kind: "Visiting scholarship", title: "Climate-smart systems and agricultural AI", story: "At Michigan State University, my work expanded into greenhouse sensing, soil intelligence, livestock-feed prediction, and climate-smart decision support.", href: "/research" },
  { year: "2024", city: "Kuala Lumpur", country: "Malaysia", lat: 3.14, lon: 101.69, kind: "International conference", title: "TwinMil at ICMIC", story: "I presented an explainable semantic-segmentation digital twin for military surveillance and safety-critical decision support.", href: "/gallery" },
  { year: "2024", city: "Busan", country: "South Korea", lat: 35.18, lon: 129.08, kind: "Conference presentation", title: "Explainable battery twins at JCCI", story: "I presented a SHAP-based model-in-the-loop framework that made battery digital-twin predictions more interpretable.", href: "/research/explainable-battery-twins" },
  { year: "2025", city: "Sokcho", country: "South Korea", lat: 38.21, lon: 128.59, kind: "Conference presentation", title: "PureTwin at JCCI", story: "I presented an interactive non-fungible digital-twin framework for battery management systems.", href: "/gallery" },
  { year: "2025", city: "Taipei", country: "Taiwan", lat: 25.03, lon: 121.57, kind: "International conference", title: "Explainable energy forecasting at IEEE IAS", story: "Our coauthor team brought model-agnostic energy-consumption prediction research to the IEEE Industry Applications Society community.", href: "/news" },
  { year: "2025", city: "Lisbon", country: "Portugal", lat: 38.72, lon: -9.14, kind: "International conference", title: "Three research worlds met at ICUFN", story: "BridgeSync, interactive battery digital twins, and emerging communication systems came together at ICUFN 2025 at Iscte.", href: "/gallery" },
  { year: "2025 to present", city: "Laramie", country: "United States", lat: 41.31, lon: -105.59, kind: "Distinguished postdoctoral fellowship", title: "Trustworthy systems for the physical world", story: "At the University of Wyoming, I work across robust computer vision, intelligent infrastructure, rural resilience, and cyber-physical decision support.", href: "/about" },
  { year: "2026", city: "Denver", country: "United States", lat: 39.74, lon: -104.99, kind: "CVPR Workshops", title: "OmniRestore entered the vision community", story: "I presented our parameter-efficient adverse-weather restoration framework at CVPR Workshops, expanding my work in robust autonomous perception.", href: "/research/omnirestore" },
  { year: "2026", city: "Songdo", country: "South Korea", lat: 37.39, lon: 126.64, kind: "Virtual presentation", title: "PANDA connected Wyoming and Korea", story: "Presented virtually at i3CE 2026, PANDA transformed limited parking data from Laramie into spatial, multi-horizon forecasts in a Cesium digital twin.", href: "/research/panda" },
];

function point(lat: number, lon: number, radius = 5) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(-radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
}

function soundscape() {
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const context = new AudioContextClass();
  const master = context.createGain(); master.gain.value = .12; master.connect(context.destination);
  const noiseBuffer = context.createBuffer(1, context.sampleRate * 4, context.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (.45 + .3 * Math.sin(i / 1700));
  const water = context.createBufferSource(); water.buffer = noiseBuffer; water.loop = true;
  const low = context.createBiquadFilter(); low.type = "lowpass"; low.frequency.value = 1150;
  const high = context.createBiquadFilter(); high.type = "highpass"; high.frequency.value = 100;
  water.connect(low).connect(high).connect(master); water.start();
  const tones = [110, 164.81, 220].map((frequency, i) => { const oscillator = context.createOscillator(); const gain = context.createGain(); oscillator.type = i === 0 ? "sine" : "triangle"; oscillator.frequency.value = frequency; gain.gain.value = i === 0 ? .04 : .015; oscillator.connect(gain).connect(master); oscillator.start(); return oscillator; });
  return { context, master, stop: () => { water.stop(); tones.forEach(t => t.stop()); void context.close(); } };
}

export default function JourneyGlobeClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const soundRef = useRef<ReturnType<typeof soundscape>>(null);
  const focusRef = useRef<(index: number) => void>(() => {});
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(0);

  const startSound = useCallback(() => { if (!soundRef.current) soundRef.current = soundscape(); void soundRef.current.context.resume(); setMuted(false); }, []);
  const enter = (withSound: boolean) => { setEntered(true); if (withSound) startSound(); };
  const toggleSound = () => { if (!soundRef.current) return startSound(); const next = !muted; soundRef.current.master.gain.setTargetAtTime(next ? 0 : .12, soundRef.current.context.currentTime, .1); setMuted(next); };
  const choose = useCallback((index: number) => { const value = (index + stops.length) % stops.length; setSelected(value); focusRef.current(value); }, []);

  useEffect(() => {
    document.body.classList.add("journey-globe-active");
    return () => document.body.classList.remove("journey-globe-active");
  }, []);
  useEffect(() => () => soundRef.current?.stop(), []);
  useEffect(() => { if (!playing) return; const timer = window.setInterval(() => setSelected(current => { const next = (current + 1) % stops.length; focusRef.current(next); return next; }), 4200); return () => window.clearInterval(timer); }, [playing]);

  useEffect(() => {
    if (!entered || !canvasRef.current || !shellRef.current) return;
    const canvas = canvasRef.current, shell = shellRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7)); renderer.setSize(shell.clientWidth, shell.clientHeight, false); renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x12070e, .035);
    const camera = new THREE.PerspectiveCamera(48, shell.clientWidth / shell.clientHeight, .1, 100); camera.position.set(0, .4, 13.5);
    scene.add(new THREE.AmbientLight(0xffffff, 1.2)); const light = new THREE.PointLight(0xf2c56d, 28, 40); light.position.set(8, 7, 9); scene.add(light);
    const globe = new THREE.Group(); scene.add(globe);
    const earthTexture = new THREE.TextureLoader().load("/journey/earth-map.jpg");
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    const earth = new THREE.Mesh(new THREE.SphereGeometry(5, 72, 48), new THREE.MeshPhysicalMaterial({ map: earthTexture, color: 0x78987d, roughness: .78, metalness: .08, clearcoat: .25 })); globe.add(earth);
    const grid = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(5.018, 36, 18)), new THREE.LineBasicMaterial({ color: 0xd9bc78, transparent: true, opacity: .13 })); globe.add(grid);
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5.18, 48, 32), new THREE.MeshBasicMaterial({ color: 0x6ca99a, transparent: true, opacity: .09, side: THREE.BackSide })); globe.add(atmosphere);
    const markers: THREE.Mesh[] = [];
    stops.forEach((stop, index) => {
      const p = point(stop.lat, stop.lon, 5.08);
      const marker = new THREE.Mesh(new THREE.SphereGeometry(index === 0 ? .105 : .075, 16, 16), new THREE.MeshBasicMaterial({ color: index === 0 ? 0xffdd8d : 0xf3b84f })); marker.position.copy(p); marker.userData.index = index; globe.add(marker); markers.push(marker);
      if (index > 0) { const a = point(stops[index - 1].lat, stops[index - 1].lon, 5.1), b = p; const mid = a.clone().add(b).normalize().multiplyScalar(5.5 + a.distanceTo(b) * .16); const curve = new THREE.QuadraticBezierCurve3(a, mid, b); const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(30)), new THREE.LineBasicMaterial({ color: 0xe9b85f, transparent: true, opacity: .42 })); globe.add(line); }
    });
    const starsGeo = new THREE.BufferGeometry(); const stars = new Float32Array(1200 * 3); for (let i = 0; i < stars.length; i += 3) { const r = 20 + Math.random() * 25, t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1); stars[i] = r * Math.sin(p) * Math.cos(t); stars[i + 1] = r * Math.cos(p); stars[i + 2] = r * Math.sin(p) * Math.sin(t); } starsGeo.setAttribute("position", new THREE.BufferAttribute(stars, 3)); scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xf1d7a2, size: .035, transparent: true, opacity: .7 })));
    let drag = false, lastX = 0, lastY = 0, targetQuaternion: THREE.Quaternion | null = null;
    const velocity = .0007;
    focusRef.current = (index) => { const p = point(stops[index].lat, stops[index].lon).normalize(); const target = new THREE.Vector3(0, 0, 1); targetQuaternion = new THREE.Quaternion().setFromUnitVectors(p, target); markers.forEach((m, i) => { (m.material as THREE.MeshBasicMaterial).color.set(i === index ? 0xfff1b5 : 0xf3b84f); m.scale.setScalar(i === index ? 1.8 : 1); }); };
    focusRef.current(0);
    const ray = new THREE.Raycaster(), pointer = new THREE.Vector2();
    const down = (e: PointerEvent) => { drag = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => { if (!drag) return; globe.rotation.y += (e.clientX - lastX) * .006; globe.rotation.x = THREE.MathUtils.clamp(globe.rotation.x + (e.clientY - lastY) * .004, -.8, .8); lastX = e.clientX; lastY = e.clientY; targetQuaternion = null; };
    const up = (e: PointerEvent) => { drag = false; const box = canvas.getBoundingClientRect(); pointer.set(((e.clientX - box.left) / box.width) * 2 - 1, -((e.clientY - box.top) / box.height) * 2 + 1); ray.setFromCamera(pointer, camera); const hit = ray.intersectObjects(markers)[0]; if (hit) choose(hit.object.userData.index as number); };
    const wheel = (e: WheelEvent) => { camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * .008, 9, 17); };
    const resize = () => { camera.aspect = shell.clientWidth / shell.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(shell.clientWidth, shell.clientHeight, false); };
    canvas.addEventListener("pointerdown", down); canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerup", up); canvas.addEventListener("wheel", wheel, { passive: true }); window.addEventListener("resize", resize);
    let id = 0; const tick = () => { id = requestAnimationFrame(tick); if (targetQuaternion) globe.quaternion.slerp(targetQuaternion, .035); else if (!drag) globe.rotation.y += velocity; grid.rotation.y -= .00025; renderer.render(scene, camera); }; tick();
    return () => { cancelAnimationFrame(id); canvas.removeEventListener("pointerdown", down); canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerup", up); canvas.removeEventListener("wheel", wheel); window.removeEventListener("resize", resize); scene.traverse(o => { if (o instanceof THREE.Mesh || o instanceof THREE.Line || o instanceof THREE.LineSegments || o instanceof THREE.Points) { o.geometry.dispose(); const materials = Array.isArray(o.material) ? o.material : [o.material]; materials.forEach(m => m.dispose()); } }); renderer.dispose(); };
  }, [entered, choose]);

  const stop = stops[selected];
  return <main className={styles.shell} ref={shellRef}>
    {!entered ? <section className={styles.entry}>
      <div className={styles.orbit} /><Image src="/logo-judith.png" width={112} height={112} alt="Judith Njoku-Vowels monogram" className={styles.logo} priority />
      <p className={styles.kicker}>A digital twin of an academic life</p><h1>Travel my <em>Journey Globe</em></h1>
      <p>Move through the cities where I studied, built systems, mentored researchers, presented ideas, and found new questions worth pursuing.</p>
      <div className={styles.entryActions}><button onClick={() => enter(true)}><Volume2 size={17}/> Enter with waterfall sound</button><button onClick={() => enter(false)}>Enter quietly</button></div>
      <Link href="/" className={styles.back}><ArrowLeft size={16}/> Main website</Link>
    </section> : <>
      <canvas ref={canvasRef} className={styles.canvas} aria-label="Interactive globe of Judith Njoku-Vowels' academic journey" />
      <div className={styles.topbar}><Link href="/"><ArrowLeft size={17}/> <span>Main website</span></Link><div><Globe2/><strong>Journey Globe</strong><small>Judith Njoku-Vowels</small></div><button onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Mute sound"}>{muted ? <VolumeX/> : <Music2/>}</button></div>
      <aside className={styles.story}>
        <p>{stop.year} · {stop.kind}</p><h2>{stop.city}</h2><h3>{stop.country}</h3><strong>{stop.title}</strong><span>{stop.story}</span>
        <Link href={stop.href}>{stop.href.startsWith("http") ? "Open publication" : "Explore this chapter"}<ExternalLink size={14}/></Link>
        <div className={styles.stepper}><button onClick={() => choose(selected - 1)} aria-label="Previous stop"><ChevronLeft/></button><b>{selected + 1} / {stops.length}</b><button onClick={() => choose(selected + 1)} aria-label="Next stop"><ChevronRight/></button></div>
      </aside>
      <div className={styles.controls}><button onClick={() => { setPlaying(!playing); if (!playing) startSound(); }}>{playing ? <Pause/> : <Play/>}<span>{playing ? "Pause journey" : "Play my journey"}</span></button><button onClick={() => focusRef.current(selected)}><RotateCcw/><span>Return to stop</span></button></div>
      <p className={styles.hint}>Drag to rotate · scroll to zoom · select a glowing location</p>
    </>}
  </main>;
}
