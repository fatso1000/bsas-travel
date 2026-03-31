import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import {
  attractions,
  getAttractionBySlug,
  type Attraction,
} from "../data/attractions";

function pickTwoRandomPlaces(pool: Attraction[]): Attraction[] {
  if (pool.length === 0) return [];
  if (pool.length === 1) return [pool[0]];
  if (pool.length === 2) return [...pool];
  const i = Math.floor(Math.random() * pool.length);
  let j = Math.floor(Math.random() * pool.length);
  while (j === i) j = Math.floor(Math.random() * pool.length);
  return [pool[i], pool[j]];
}

function PlaceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const place = getAttractionBySlug(slug);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const recommendedPlaces = useMemo(() => {
    if (!slug) return [];
    const pool = attractions.filter((a) => a.slug !== slug);
    return pickTwoRandomPlaces(pool);
  }, [slug]);

  useEffect(() => {
    setLightboxSrc(null);
  }, [slug]);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxSrc]);

  useEffect(() => {
    if (!lightboxSrc) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxSrc]);

  if (!place) {
    return <Navigate to="/" replace />;
  }

  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(place.mapQuery)}&hl=en&z=15&output=embed`;

  return (
    <article className="mx-auto flex min-h-svh w-full max-w-screen-lg flex-col max-lg:px-3 pb-16 pt-[calc(3.5rem+env(safe-area-inset-top,0px)+1rem)]">
      <Link
        to="/#about"
        className="mb-6 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:underline decoration-brand decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <Icon icon="gravity-ui:arrow-left" className="text-lg" aria-hidden />
        Explore Buenos Aires
      </Link>

      <div className="flex min-h-[max(14rem,calc(100svh-8rem-env(safe-area-inset-top,0px)))] flex-col overflow-hidden rounded-3xl border border-brand/30 glass-panel-strong">
        <div className="relative min-h-56 flex-1 basis-0 sm:min-h-64 md:min-h-72">
          <img
            src={place.heroImage}
            alt={place.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="shrink-0 border-t border-brand/25 px-5 py-6 sm:px-8 sm:py-8">
          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {place.title}
          </h1>
          <p className="mt-3 text-base text-brand sm:text-lg md:text-xl">
            {place.tagline}
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-5 px-1 sm:px-2">
        {place.description.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="mt-10 glass-panel px-5 py-6 sm:px-8 sm:py-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-brand">Highlights</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted marker:text-brand">
          {place.highlights.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <section className="glass-panel rounded-2xl border border-brand/30 p-5 sm:p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand">
            Area
          </h2>
          <p className="mt-2 leading-relaxed text-ink-muted">{place.area}</p>
        </section>
        <section className="glass-panel rounded-2xl border border-brand/30 p-5 sm:p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand">
            Getting there
          </h2>
          <p className="mt-2 leading-relaxed text-ink-muted">
            {place.gettingThere}
          </p>
        </section>
      </div>

      <section className="mt-4 glass-panel rounded-2xl border border-brand/30 p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-brand">
          Tips
        </h2>
        <p className="mt-2 leading-relaxed text-ink-muted">{place.tips}</p>
      </section>

      <section
        className="mt-8"
        aria-labelledby="place-map-heading"
      >
        <h2
          id="place-map-heading"
          className="text-xl font-bold text-ink md:text-2xl"
        >
          Location
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Approximate map pin for this spot — open in Maps for directions.
        </p>
        <div className="iframe-wrapper relative mt-4 aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-2xl border border-brand/30 bg-white/40 sm:min-h-[240px] md:min-h-0">
          <iframe
            title={`Map of ${place.title}`}
            src={mapEmbedSrc}
            width="300"
            height="300"
            className="rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="mt-12" aria-labelledby="gallery-heading">
        <h2
          id="gallery-heading"
          className="mb-4 text-xl font-bold text-ink md:text-2xl"
        >
          Gallery
        </h2> 
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {place.galleryImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxSrc(src)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand/25 text-left ring-brand/0 transition hover:border-brand/50 hover:ring-2 hover:ring-brand/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <img
                src={src}
                alt={`${place.title} — gallery photo ${i + 1}`}
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <span
                className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-ink/0 transition-colors group-hover:bg-ink/40 group-focus-visible:bg-ink/40"
                aria-hidden
              >
                <Icon
                  icon="gravity-ui:magnifier-plus"
                  className="text-4xl text-white opacity-0 drop-shadow-md transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-5xl"
                  aria-hidden
                />
              </span>
              <span className="sr-only">View larger</span>
            </button>
          ))}
        </div>
      </section>

      {lightboxSrc ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/65 p-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-ink shadow-lg transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Close image"
          >
            <Icon icon="gravity-ui:xmark" className="text-xl" aria-hidden />
          </button>
          <img
            src={lightboxSrc}
            alt={`${place.title} — enlarged gallery photo`}
            className="max-h-[min(90dvh,920px)] max-w-[min(96vw,1280px)] rounded-lg object-contain shadow-2xl ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}

      <section
        className="mt-12 border-t border-brand/20 pt-10"
        aria-labelledby="recommended-places-heading"
      >
        <h2
          id="recommended-places-heading"
          className="text-xl font-bold text-ink md:text-2xl"
        >
          Recommended places
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          More corners of the city to explore next.
        </p>
        <ul className="mt-6 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
          {recommendedPlaces.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/place/${item.slug}`}
                className="group flex gap-4 overflow-hidden rounded-2xl border border-brand/30 bg-white/50 p-3 backdrop-blur-md transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <img
                  src={item.heroImage}
                  alt=""
                  className="h-24 w-32 shrink-0 rounded-xl object-cover sm:h-28 sm:w-36"
                />
                <div className="min-w-0 flex-1 py-1">
                  <p className="font-bold text-ink decoration-brand decoration-2 underline-offset-2 group-hover:underline">
                    {item.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-ink-muted">
                    {item.tagline}
                  </p>
                </div>
                <Icon
                  icon="gravity-ui:arrow-right"
                  className="mt-2 shrink-0 self-start text-brand sm:self-center"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default PlaceDetail;
