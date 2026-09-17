import Image from "next/image";
import PhotoStoryCarousel from "./photo-story-carousel";

export type GalleryImage = { src: string; alt: string; caption: string };
export type GalleryAlbum = { date: string; title: string; description?: string; images: GalleryImage[] };

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function Caption({ text, paperTitles }: { text: string; paperTitles: string[] }) {
  const title = paperTitles.find((candidate) => text.includes(candidate));
  if (!title) return <>{text}</>;
  const [before, after] = text.split(title);
  return <>{before}<cite>{title}</cite>{after}</>;
}

export default function GalleryGrid({ albums, paperTitles }: { albums: GalleryAlbum[]; paperTitles: string[] }) {
  const byYear = new Map<string, GalleryAlbum[]>();
  for (const album of albums) {
    const year = album.date.slice(0, 4);
    byYear.set(year, [...(byYear.get(year) ?? []), album]);
  }

  return (
    <div className="gallery-archive" aria-label="Gallery, newest to oldest">
      {[...byYear].map(([year, items]) => (
        <section className="gallery-year" key={year} aria-labelledby={`gallery-${year}`}>
          <h2 id={`gallery-${year}`}>{year}</h2>
          <div className="gallery-story-list">
            {items.map((album) => (
              <article className={`gallery-story ${album.images.length > 1 ? "gallery-story-feature" : ""}`} key={`${album.date}-${album.title}`}>
                <div className="gallery-story-copy">
                  <p className="gallery-story-date">{displayDate(album.date)}</p>
                  <h3>{album.title}</h3>
                  {album.description && <p>{album.description}</p>}
                </div>
                {album.images.length > 1 ? (
                  <PhotoStoryCarousel images={album.images} label={album.title} paperTitles={paperTitles} />
                ) : (
                  <figure className="gallery-story-single">
                    <div><Image src={album.images[0].src} alt={album.images[0].alt} fill sizes="(max-width: 700px) 92vw, 42vw" /></div>
                    <figcaption><Caption text={album.images[0].caption} paperTitles={paperTitles} /></figcaption>
                  </figure>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
