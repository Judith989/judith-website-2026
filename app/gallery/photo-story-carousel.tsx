"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export type StoryImage = { src: string; alt: string; caption: string };

export default function PhotoStoryCarousel({ images, label, paperTitles = [] }: { images: StoryImage[]; label: string; paperTitles?: string[] }) {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current - 1 + images.length) % images.length);
  const next = () => setActive((current) => (current + 1) % images.length);
  const image = images[active];
  const paperTitle = paperTitles.find((title) => image.caption.includes(title));
  const [before, after] = paperTitle ? image.caption.split(paperTitle) : [image.caption, ""];

  return (
    <div className="photo-story">
      <div className="photo-story-frame">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 92vw, 720px" priority={label.includes("CVPR")} />
        <button type="button" className="story-arrow story-arrow-left" onClick={previous} aria-label={`Previous ${label} photograph`}><ChevronLeft size={24} /></button>
        <button type="button" className="story-arrow story-arrow-right" onClick={next} aria-label={`Next ${label} photograph`}><ChevronRight size={24} /></button>
        <span className="story-count">{active + 1} / {images.length}</span>
      </div>
      <p className="story-image-caption" aria-live="polite">{before}{paperTitle && <cite>{paperTitle}</cite>}{after}</p>
    </div>
  );
}
