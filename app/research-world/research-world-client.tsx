"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ExternalLink, Map, Music, Music2, Volume2, VolumeX, X } from "lucide-react";
import * as THREE from "three";
import styles from "./research-world.module.css";

type Portal = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: number;
  position: [number, number, number];
};

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
    for (let index = 0; index < 105; index += 1) {
      const side = index % 2 === 0 ? -1 : 1;
      const x = side * (6 + Math.random() * 35);
      const z = 10 - Math.random() * 105;
      if (z < -73 && Math.abs(x) < 19) continue;
      treeGroups.push(addTree(scene, x, z, .65 + Math.random() * .75, index % 4 === 0 ? 0x5d7f42 : 0x2f693d));
    }

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
      const hit = raycaster.intersectObjects(portalMeshes, false)[0];
      if (hit?.object.userData.portal) setActivePortal(hit.object.userData.portal as Portal);
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
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -22, 22);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, -76, 10);
      camera.position.y = 1.7 + Math.sin(clock.elapsedTime * 7) * ((keys.size > 0) ? .018 : .006);
      camera.rotation.order = "YXZ";
      camera.rotation.y = yaw;
      camera.rotation.x = pitch;

      waterfallMaterial.opacity = .66 + Math.sin(clock.elapsedTime * 3.2) * .08;
      const positions = mistGeometry.attributes.position.array as Float32Array;
      for (let index = 1; index < positions.length; index += 3) {
        positions[index] += delta * (.3 + (index % 7) * .025);
        if (positions[index] > 4.5) positions[index] = .4;
      }
      mistGeometry.attributes.position.needsUpdate = true;
      fireflies.rotation.y = Math.sin(clock.elapsedTime * .08) * .12;
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
  }, [entered]);

  return (
    <main className={styles.world} ref={worldRef}>
      {!entered && (
        <section className={styles.portal}>
          <div className={styles.portalGlow} />
          <Image src="/logo-judith.png" alt="Judith Njoku-Vowels monogram" width={160} height={160} priority className={styles.logo} />
          <p className={styles.eyebrow}>An immersive research experience</p>
          <h1>Enter my <em>Research World</em></h1>
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
              <button type="button" onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Mute sound"}>{muted ? <VolumeX size={18} /> : <Music2 size={18} />}</button>
            </div>
          </header>

          <div className={styles.guide}><span>WASD or arrows to walk</span><span>Drag to look</span><span>Click glowing portals</span></div>
          <div className={styles.touchControls} aria-label="Movement controls">
            <button type="button" data-move="w" aria-label="Move forward">▲</button>
            <div><button type="button" data-move="a" aria-label="Move left">◀</button><button type="button" data-move="s" aria-label="Move backward">▼</button><button type="button" data-move="d" aria-label="Move right">▶</button></div>
          </div>

          {activePortal && (
            <aside className={styles.portalCard} style={{ "--portal-color": `#${activePortal.color.toString(16).padStart(6, "0")}` } as React.CSSProperties}>
              <button type="button" onClick={() => setActivePortal(null)} aria-label="Close project information"><X size={17} /></button>
              <p>{activePortal.subtitle}</p>
              <h2>{activePortal.title}</h2>
              <span>{activePortal.description}</span>
              <Link href={activePortal.href}>Enter this project <ExternalLink size={15} /></Link>
            </aside>
          )}

          {mapOpen && (
            <aside className={styles.mapPanel}>
              <button type="button" onClick={() => setMapOpen(false)} aria-label="Close map"><X size={18} /></button>
              <p><Map size={16} /> Research trail</p>
              <h2>Five portals through my work</h2>
              <ol>{portals.map((portal) => <li key={portal.title}><button type="button" onClick={() => { setActivePortal(portal); setMapOpen(false); }}><span style={{ background: `#${portal.color.toString(16).padStart(6, "0")}` }} />{portal.title}<small>{portal.subtitle}</small></button></li>)}</ol>
              <Link href="/research">Use the accessible research index</Link>
            </aside>
          )}

          {qualityNotice && <p className={styles.qualityNotice}>{qualityNotice}</p>}
          <div className={styles.watermark}><Music size={14} /> A digital twin of my research life</div>
        </>
      )}
    </main>
  );
}
