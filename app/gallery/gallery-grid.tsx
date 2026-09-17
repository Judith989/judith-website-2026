"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type GalleryImage = { src: string; alt: string; caption: string };
export type GalleryAlbum = { date: string; title: string; description?: string; images: GalleryImage[] };

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function shortDate(value: string) {
  const [year, month] = value.split("-");
  return `${months[Number(month) - 1]} ${year}`;
}

function Caption({ text, paperTitles }: { text: string; paperTitles: string[] }) {
  const title = paperTitles.find((candidate) => text.includes(candidate));
  if (!title) return <>{text}</>;
  const [before, after] = text.split(title);
  return <>{before}<cite>{title}</cite>{after}</>;
}

export default function GalleryGrid({ albums, paperTitles }: { albums: GalleryAlbum[]; paperTitles: string[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const album = selected === null ? null : albums[selected];
  const image = album?.images[imageIndex];

  function close() {
    setSelected(null);
    opener.current?.focus();
  }

  function move(direction: number) {
    if (!album) return;
    setImageIndex((current) => (current + direction + album.images.length) % album.images.length);
  }

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
        opener.current?.focus();
      }
      if (event.key === "ArrowLeft") setImageIndex((current) => (current - 1 + albums[selected!].images.length) % albums[selected!].images.length);
      if (event.key === "ArrowRight") setImageIndex((current) => (current + 1) % albums[selected!].images.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, albums]);

  return (
    <>
      <section className="page-section gallery-album-section" aria-label="Gallery, newest to oldest">
        <div className="gallery-album-grid">
          {albums.map((item, index) => (
            <button className="gallery-album-card" type="button" key={`${item.date}-${item.title}`} onClick={(event) => { opener.current = event.currentTarget; setImageIndex(0); setSelected(index); }} aria-label={`Open ${item.title}, ${shortDate(item.date)}${item.images.length > 1 ? `, ${item.images.length} photos` : ""}`}>
              <span className="gallery-album-thumb"><Image src={item.images[0].src} alt="" fill sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 25vw" /></span>
              <span className="gallery-album-meta"><span>{shortDate(item.date)}{item.images.length > 1 && <span className="gallery-album-count"> · {item.images.length} photos</span>}</span><strong>{item.title}</strong></span>
            </button>
          ))}
        </div>
      </section>

      {album && image && (
        <div className="gallery-lightbox-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={album.title}>
            <header className="gallery-lightbox-header"><div><span>{shortDate(album.date)}</span><h2>{album.title}</h2></div><button ref={closeButton} type="button" onClick={close} aria-label="Close gallery"><X size={22} /></button></header>
            <div className="gallery-lightbox-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 94vw, 1100px" priority /></div>
            <div className="gallery-lightbox-footer"><div className="gallery-lightbox-copy">{album.description && <strong>{album.description}</strong>}<p><Caption text={image.caption} paperTitles={paperTitles} /></p></div>{album.images.length > 1 && <div className="gallery-lightbox-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft size={21} /></button><span>{imageIndex + 1} / {album.images.length}</span><button type="button" onClick={() => move(1)} aria-label="Next photo"><ChevronRight size={21} /></button></div>}</div>
          </div>
        </div>
      )}
    </>
  );
}
