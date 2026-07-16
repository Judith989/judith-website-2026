"use client";

import { useEffect, useState } from "react";

const lead = "I build intelligent systems that help the physical world ";
const emphasis = "see, predict, and decide.";
const fullText = `${lead}${emphasis}`;

export function TypingHeadline() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let interval: number | undefined;
    const start = window.setTimeout(() => {
      if (reduceMotion) {
        setVisibleCharacters(fullText.length);
        setIsComplete(true);
        return;
      }

      interval = window.setInterval(() => {
        setVisibleCharacters((current) => {
          const next = Math.min(current + 1, fullText.length);
          if (next === fullText.length) {
            window.clearInterval(interval);
            setIsComplete(true);
          }
          return next;
        });
      }, 43);
    }, reduceMotion ? 0 : 320);

    return () => {
      window.clearTimeout(start);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, []);

  const visibleLead = lead.slice(0, Math.min(visibleCharacters, lead.length));
  const visibleEmphasis = emphasis.slice(
    0,
    Math.max(0, visibleCharacters - lead.length),
  );

  return (
    <h1 className="typing-headline" aria-label={fullText}>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {visibleLead}
        <em>{visibleEmphasis}</em>
        <span className={`typing-cursor${isComplete ? " typing-cursor-complete" : ""}`} />
      </span>
    </h1>
  );
}
