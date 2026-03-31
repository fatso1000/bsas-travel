import { useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { attractions } from "../data/attractions";

const Card = ({
  heroImage,
  slug,
  title,
}: {
  heroImage: string;
  title: string;
  slug: string;
}) => {
  return (
    <Link
      to={`/place/${slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-brand/30 bg-white/50 backdrop-blur-md transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <img
        src={heroImage}
        alt=""
        className="h-44 w-full object-cover sm:h-52"
      />
      <div className="flex items-center justify-between gap-2 border-t border-brand/25 bg-white/65 backdrop-blur-sm px-4 py-3 text-ink">
        <span className="font-bold group-hover:underline decoration-brand decoration-2 underline-offset-2">
          {title}
        </span>
        <Icon
          icon="gravity-ui:arrow-right"
          className="shrink-0 text-brand"
          aria-hidden
        />
      </div>
    </Link>
  );
};

function Attractions() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  return (
    <section className="grid grid-cols-1 mx-auto mt-16 md:mt-20 gap-10 max-w-screen-lg max-lg:px-3">
      <div className="text-center px-2">
        <h3
          className="font-bold text-3xl md:text-4xl my-4 text-ink tracking-tight"
          id="about"
        >
          Explore Buenos Aires
        </h3>
        <p className="max-w-screen-md text-lg mx-auto text-ink-muted leading-relaxed">
          Discover the hidden gems of Buenos Aires! From vibrant street art and
          historic cafes to secret tango spots, there&apos;s always something new
          to explore. Dive into the heart of the city and uncover its best-kept
          secrets!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-10 text-lg">
        {attractions.slice(0, 4).map((item) => (
          <Card
            key={item.slug}
            slug={item.slug}
            title={item.title}
            heroImage={item.heroImage}
          />
        ))}
        <button
          type="button"
          onClick={openModal}
          className="text-base font-bold border-2 my-8 sm:my-10 mx-auto col-span-full px-5 border-brand/45 text-ink rounded-full h-12 max-w-40 min-w-40 inline-flex gap-1 items-center justify-center hover:bg-brand/10 hover:border-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          See All
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-[100] m-0 w-[min(100vw-1rem,28rem)] max-sm:max-h-[92dvh] max-sm:min-h-[72dvh] sm:max-h-[min(85vh,36rem)] sm:min-h-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-brand/35 bg-surface-elevated p-0 text-ink shadow-2xl ring-1 ring-ink/10 backdrop:bg-ink/40 backdrop:backdrop-blur-sm open:flex open:flex-col"
        aria-labelledby="attractions-modal-title"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-brand/20 bg-white/60 px-5 py-4 backdrop-blur-md">
          <h4
            id="attractions-modal-title"
            className="text-lg font-bold tracking-tight md:text-xl"
          >
            All attractions
          </h4>
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/25 bg-white/70 text-ink transition-colors hover:border-brand hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Close"
          >
            <Icon icon="gravity-ui:xmark" className="text-xl" aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4">
          <ul className="grid list-none gap-3 p-0">
            {attractions.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/place/${item.slug}`}
                  onClick={closeModal}
                  className="flex gap-3 rounded-2xl border border-brand/25 bg-white/60 p-3 transition-colors hover:border-brand hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <img
                    src={item.heroImage}
                    alt=""
                    className="h-16 w-24 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1 py-0.5">
                    <p className="font-bold text-ink">{item.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm leading-snug text-ink-muted">
                      {item.tagline}
                    </p>
                  </div>
                  <Icon
                    icon="gravity-ui:arrow-right"
                    className="mt-1 shrink-0 self-start text-brand"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </section>
  );
}

export default Attractions;
