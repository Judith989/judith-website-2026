"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, CheckCircle2, Gamepad2 } from "lucide-react";
import styles from "./research-world.module.css";

type Challenge = { type: "quiz" | "sudoku" | "snake"; title: string; prompt: string; options?: string[]; answer?: number };

const bank: Challenge[] = [
  { type: "quiz", title: "Guess the system", prompt: "Which project restores images degraded by rain, snow, fog, and low light?", options: ["PANDA", "OmniRestore", "BridgeSync"], answer: 1 },
  { type: "quiz", title: "Research compass", prompt: "BatteryMetrix was the central research program of which degree?", options: ["BEng", "MSc", "PhD"], answer: 2 },
  { type: "quiz", title: "Find the twin", prompt: "Which system forecasts parking occupancy and turnover?", options: ["PANDA", "MetaHate", "BAT-GPT"], answer: 0 },
  { type: "quiz", title: "Infrastructure trail", prompt: "Which project connects structural sensing with a secure bridge digital twin?", options: ["BridgeSync", "TwinMil", "SmartParking"], answer: 0 },
  { type: "quiz", title: "Place the research", prompt: "Where was OmniRestore presented in 2026?", options: ["ICUFN", "CVPR Workshops", "ICTC"], answer: 1 },
  { type: "quiz", title: "Mentorship grove", prompt: "The international internship connected Kyungpook National University with which US university?", options: ["University of Wyoming", "Michigan State University", "MIT"], answer: 1 },
  { type: "quiz", title: "Research language", prompt: "Which system uses language models to explain battery digital-twin insights?", options: ["BAT-GPT", "PANDA", "MetaWatch"], answer: 0 },
  { type: "quiz", title: "Safety signal", prompt: "MetaHate studies which problem in metaverse environments?", options: ["Weather restoration", "Hate-speech detection", "Battery capacity"], answer: 1 },
  { type: "sudoku", title: "JN logic grid", prompt: "Complete the 4 by 4 research Sudoku. Each row and column needs 1, 2, 3, and 4." },
  { type: "snake", title: "Data trail", prompt: "Guide the research signal to collect three gold data points." },
];

const sudokuStart = [1,0,0,4, 0,4,1,0, 0,1,4,0, 4,0,0,1];
const sudokuSolution = [1,2,3,4, 3,4,1,2, 2,1,4,3, 4,3,2,1];

export function ResearchChallenge({ seed, onComplete }: { seed: number; onComplete: () => void }) {
  const challenge = bank[seed % bank.length];
  const [message, setMessage] = useState("");
  const [grid, setGrid] = useState(sudokuStart);
  const [snake, setSnake] = useState({ x: 0, y: 2, score: 0, target: { x: 2, y: 2 } });
  const targets = useMemo(() => [{x:2,y:2},{x:4,y:0},{x:1,y:4}], []);

  const answer = (index: number) => { if (index === challenge.answer) { setMessage("Path unlocked"); window.setTimeout(onComplete, 650); } else setMessage("Not quite. Follow the clue and try again."); };
  const setCell = (index: number, value: number) => { if (sudokuStart[index]) return; const next=[...grid]; next[index]=value; setGrid(next); if(next.every((v,i)=>v===sudokuSolution[i])) { setMessage("Logic gate solved"); window.setTimeout(onComplete,650); } };
  const move = (dx:number,dy:number) => setSnake(current => { const x=Math.max(0,Math.min(4,current.x+dx)), y=Math.max(0,Math.min(4,current.y+dy)); let score=current.score, target=current.target; if(x===target.x&&y===target.y){score+=1;if(score===3){setMessage("Data trail complete");window.setTimeout(onComplete,650);}else target=targets[score];} return {x,y,score,target}; });

  return <section className={styles.challenge} role="dialog" aria-modal="true" aria-label="Research trail challenge">
    <div className={styles.challengeInner}><p><Gamepad2 size={17}/> Research gate</p><h2>{challenge.title}</h2><span>{challenge.prompt}</span>
      {challenge.type === "quiz" && <div className={styles.answers}>{challenge.options?.map((option,index)=><button key={option} onClick={()=>answer(index)}>{option}</button>)}</div>}
      {challenge.type === "sudoku" && <><div className={styles.sudoku}>{grid.map((value,index)=><button key={index} className={sudokuStart[index]?styles.given:""} onClick={()=>setCell(index,value===4?1:value+1)}>{value||"·"}</button>)}</div><small>Tap an empty square to cycle from 1 to 4.</small></>}
      {challenge.type === "snake" && <><div className={styles.snakeBoard}>{Array.from({length:25},(_,i)=>{const x=i%5,y=Math.floor(i/5);return <i key={i} className={x===snake.x&&y===snake.y?styles.snakeHead:x===snake.target.x&&y===snake.target.y?styles.snakeTarget:""}/>})}</div><div className={styles.snakeControls}><button onClick={()=>move(0,-1)}><ArrowUp/></button><div><button onClick={()=>move(-1,0)}><ArrowLeft/></button><button onClick={()=>move(0,1)}><ArrowDown/></button><button onClick={()=>move(1,0)}><ArrowRight/></button></div><small>{snake.score} / 3 data points</small></div></>}
      {message && <b className={styles.challengeMessage}><CheckCircle2 size={17}/>{message}</b>}
      <p className={styles.challengeNote}>Complete this short challenge to continue along the research trail.</p>
    </div>
  </section>;
}
