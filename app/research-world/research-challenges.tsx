"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, CheckCircle2, CircleAlert, Gamepad2, Lightbulb } from "lucide-react";
import styles from "./research-world.module.css";

type Challenge = { type: "quiz" | "sudoku" | "snake"; title: string; prompt: string; options?: string[]; answer?: number; hint?: string };

const bank: Challenge[] = [
  { type:"quiz", title:"Guess the system", prompt:"Which project restores images degraded by rain, snow, fog, and low light?", options:["PANDA","OmniRestore","BridgeSync"], answer:1, hint:"Its name combines universal coverage with restoration." },
  { type:"quiz", title:"Research compass", prompt:"BatteryMetrix was the central research program of which degree?", options:["BEng","MSc","PhD"], answer:2, hint:"It was the dissertation research completed in 2025." },
  { type:"quiz", title:"Find the twin", prompt:"Which system forecasts parking occupancy and turnover?", options:["PANDA","MetaHate","BAT-GPT"], answer:0, hint:"Look for the parking analytics and digital-twin project." },
  { type:"quiz", title:"Infrastructure trail", prompt:"Which project connects structural sensing with a secure bridge digital twin?", options:["BridgeSync","TwinMil","SmartParking"], answer:0, hint:"The project name joins a structure with synchronization." },
  { type:"quiz", title:"Place the research", prompt:"Where was OmniRestore presented in 2026?", options:["ICUFN","CVPR Workshops","ICTC"], answer:1, hint:"It entered the international computer-vision community in Denver." },
  { type:"quiz", title:"Mentorship grove", prompt:"The international internship connected Kyungpook National University with which US university?", options:["University of Wyoming","Michigan State University","MIT"], answer:1, hint:"The collaboration included the CLIMDES laboratory." },
  { type:"quiz", title:"Research language", prompt:"Which system uses language models to explain battery digital-twin insights?", options:["BAT-GPT","PANDA","MetaWatch"], answer:0, hint:"GPT appears directly in the system's name." },
  { type:"quiz", title:"Service signal", prompt:"Which community role expands opportunities for women in technology across borders?", options:["WomenTech Global Ambassador","Battery modeler","Bridge inspector"], answer:0, hint:"The role explicitly combines a global community with ambassadorship." },
  { type:"sudoku", title:"JN logic grid", prompt:"Complete the 4 by 4 research Sudoku. Each row and column needs 1, 2, 3, and 4." },
  { type:"snake", title:"Data trail", prompt:"Guide the research signal to collect three gold data points." },
];

const sudokuStart=[1,0,0,4,0,4,1,0,0,1,4,0,4,0,0,1];
const sudokuSolution=[1,2,3,4,3,4,1,2,2,1,4,3,4,3,2,1];

export function ResearchChallenge({seed,gateTitle,onComplete,onSkip}:{seed:number;gateTitle:string;onComplete:()=>void;onSkip:()=>void}) {
  const challenge=bank[seed%bank.length];
  const [message,setMessage]=useState("");
  const [success,setSuccess]=useState(false);
  const [grid,setGrid]=useState(sudokuStart);
  const [snake,setSnake]=useState({x:0,y:2,score:0,target:{x:2,y:2}});
  const targets=useMemo(()=>[{x:2,y:2},{x:4,y:0},{x:1,y:4}],[]);
  const unlock=(text:string)=>{setSuccess(true);setMessage(text);window.setTimeout(onComplete,850);};
  const answer=(index:number)=>{if(index===challenge.answer)unlock(`Correct. ${challenge.options?.[index]} unlocks the path.`);else{setSuccess(false);setMessage(`That answer is not correct. Hint: ${challenge.hint}`);}};
  const setCell=(index:number,value:number)=>{if(sudokuStart[index])return;const next=[...grid];next[index]=value;setGrid(next);setSuccess(false);setMessage("");if(next.every((v,i)=>v===sudokuSolution[i]))unlock("Correct. The complete Sudoku unlocks the path.");};
  const checkSudoku=()=>{const wrong=grid.findIndex((value,index)=>value!==0&&value!==sudokuSolution[index]);if(wrong>=0){setSuccess(false);setMessage(`Check row ${Math.floor(wrong/4)+1}, column ${(wrong%4)+1}. That value conflicts with the solution.`);}else if(grid.includes(0)){setSuccess(false);setMessage("Everything entered so far is correct. Complete the remaining squares.");}else unlock("Correct. The complete Sudoku unlocks the path.");};
  const hintSudoku=()=>{const index=grid.findIndex((value,i)=>value!==sudokuSolution[i]);if(index<0)return;const next=[...grid];next[index]=sudokuSolution[index];setGrid(next);setSuccess(false);setMessage(`Hint placed: row ${Math.floor(index/4)+1}, column ${(index%4)+1} is ${sudokuSolution[index]}.`);if(next.every((v,i)=>v===sudokuSolution[i]))unlock("Correct. The complete Sudoku unlocks the path.");};
  const move=(dx:number,dy:number)=>setSnake(current=>{const x=Math.max(0,Math.min(4,current.x+dx)),y=Math.max(0,Math.min(4,current.y+dy));let score=current.score,target=current.target;if(x===current.x&&y===current.y){setSuccess(false);setMessage("That direction reaches the edge. Try another direction.");}else setMessage("");if(x===target.x&&y===target.y){score+=1;if(score===3)unlock("Correct. All three data points are collected.");else{target=targets[score];setMessage(`Data point collected. ${3-score} remaining.`);}}return{x,y,score,target};});
  const snakeHint=()=>{const horizontal=snake.target.x>snake.x?"right":snake.target.x<snake.x?"left":"";const vertical=snake.target.y>snake.y?"down":snake.target.y<snake.y?"up":"";setSuccess(false);setMessage(`Hint: move ${[horizontal,vertical].filter(Boolean).join(" and ")} toward the glowing data point.`);};

  return <section className={styles.challenge} role="dialog" aria-modal="true" aria-label="Research trail challenge"><div className={styles.challengeInner}>
    <p><Gamepad2 size={17}/> {gateTitle}</p><h2>{challenge.title}</h2><span>{challenge.prompt}</span>
    {challenge.type==="quiz"&&<><div className={styles.answers}>{challenge.options?.map((option,index)=><button key={option} onClick={()=>answer(index)}>{option}</button>)}</div><button className={styles.hintButton} onClick={()=>{setSuccess(false);setMessage(`Hint: ${challenge.hint}`);}}><Lightbulb size={15}/> Give me a hint</button></>}
    {challenge.type==="sudoku"&&<><div className={styles.sudoku}>{grid.map((value,index)=><button key={index} className={sudokuStart[index]?styles.given:""} onClick={()=>setCell(index,value===4?1:value+1)}>{value||"·"}</button>)}</div><small>Tap an empty square to cycle from 1 to 4.</small><div className={styles.helperActions}><button onClick={checkSudoku}>Check my grid</button><button onClick={hintSudoku}><Lightbulb size={14}/> Reveal one square</button></div></>}
    {challenge.type==="snake"&&<><div className={styles.snakeBoard}>{Array.from({length:25},(_,i)=>{const x=i%5,y=Math.floor(i/5);return <i key={i} className={x===snake.x&&y===snake.y?styles.snakeHead:x===snake.target.x&&y===snake.target.y?styles.snakeTarget:""}/>;})}</div><div className={styles.snakeControls}><button onClick={()=>move(0,-1)} aria-label="Move up"><ArrowUp/></button><div><button onClick={()=>move(-1,0)} aria-label="Move left"><ArrowLeft/></button><button onClick={()=>move(0,1)} aria-label="Move down"><ArrowDown/></button><button onClick={()=>move(1,0)} aria-label="Move right"><ArrowRight/></button></div><small>{snake.score} / 3 data points</small></div><button className={styles.hintButton} onClick={snakeHint}><Lightbulb size={15}/> Direction hint</button></>}
    {message&&<b className={`${styles.challengeMessage} ${success?styles.correct:styles.feedback}`}>{success?<CheckCircle2 size={17}/>:<CircleAlert size={17}/>}<span>{message}</span></b>}
    <button className={styles.museumSkip} onClick={onSkip}>Continue in museum viewing mode</button>
    <p className={styles.challengeNote}>Solve the challenge for the full experience, or continue directly in museum viewing mode.</p>
  </div></section>;
}
