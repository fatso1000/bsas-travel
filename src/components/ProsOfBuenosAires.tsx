import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { Icon } from "@iconify-icon/react";
import { usePrevNextButtons } from "../hooks/usePrevNextButtons";
import Picture4 from "../assets/pexels-sofia-linares-corsano-306415279-13447376.jpg";

const brandIconClasses = ["text-brand", "text-brand-coral", "text-brand-sea"] as const;

type IconCard = {
  variant: "icon";
  title: string;
  description: string;
  icon: string;
};

type ImageCard = {
  variant: "image";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type ProCard = IconCard | ImageCard;

const pros: ProCard[] = [
  {
    variant: "icon",
    title: "Rich Cultural Scene",
    description:
      "Buenos Aires is known for its vibrant arts, music, and theater scene. From tango shows to world-class museums like the Museo de Arte Latinoamericano de Buenos Aires (MALBA), there’s plenty to explore.",
    icon: "mdi:drama-masks",
  },
  {
    variant: "icon",
    title: "Affordability",
    description:
      "Compared to other major cities, Buenos Aires is quite affordable for tourists, especially with favorable exchange rates for many international visitors.",
    icon: "mdi:wallet-travel",
  },
  {
    variant: "icon",
    title: "European Architecture",
    description:
      "The city’s architecture blends European styles, especially in neighborhoods like Recoleta and Palermo, giving it a Parisian-like charm with its grand boulevards and colonial buildings.",
    icon: "mdi:domain",
  },
  {
    variant: "image",
    title: "Food & Wine",
    description:
      "From classic parrillas and empanadas to inventive bodegones and natural wine bars, porteño dining is a reason to stay an extra night—or three.",
    image: "https://images.pexels.com/photos/34490464/pexels-photo-34490464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Outdoor dining and city atmosphere in Buenos Aires",
  },
  {
    variant: "image",
    title: "Green Spaces",
    description:
      "Huge parks, rose gardens, and the riverside reserve offer room to breathe between neighborhoods—ideal for jogging, picnics, or a quiet read under the trees.",
    image: "https://images.pexels.com/photos/35895238/pexels-photo-35895238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Lush park paths and greenery in Buenos Aires",
  },
  {
    variant: "image",
    title: "Waterfront & Skyline",
    description:
      "Modern towers meet historic brick warehouses along the docks. Sunsets over the water and long promenades make the eastern edge of the city feel wide open.",
    image: "https://images.pexels.com/photos/32895774/pexels-photo-32895774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Waterfront and urban skyline",
  },
  {
    variant: "image",
    title: "Bookstores & Cafés",
    description:
      "Historic cafés notables and showpiece bookstores turn an afternoon coffee into a small cultural trip—slow service included, as tradition demands.",
    image: Picture4,
    imageAlt: "Interior architecture of a classic Buenos Aires space",
  },
];

function ProsOfBuenosAires() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setSlidesInView(api.slidesInView());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi
      .on("select", onSelect)
      .on("slidesInView", onSelect)
      .on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("slidesInView", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div id="pros" className="scroll-mt-24 py-24 px-6 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-ink">
        Why Visit Buenos Aires?
      </h1>
      <p className="text-center text-ink-muted max-w-2xl mx-auto mb-12 text-lg">
        Culture, value, and unforgettable cityscapes—plan your stay around the
        places that matter most.
      </p>

      <section
        className="embla-pros mx-auto max-w-6xl px-2 sm:px-4 md:px-6"
        aria-roledescription="carousel"
        aria-label="Reasons to visit Buenos Aires"
      >
        <div className="relative">
          <div className="embla-pros__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla-pros__container">
              {pros.map((pro, index) => {
                const isPrimary = selectedIndex === index;
                const isVisible = slidesInView.includes(index);
                const opacityClass = isPrimary
                  ? "opacity-100"
                  : isVisible
                    ? "opacity-[0.88]"
                    : "opacity-60";
                const borderClass = isPrimary
                  ? "border-brand"
                  : "border-brand/25";

                return (
                  <div className="embla-pros__slide" key={index}>
                    <article
                      aria-current={isPrimary ? "true" : undefined}
                      className={`glass-panel flex h-full min-h-[19rem] flex-col overflow-hidden rounded-3xl text-center transition-[opacity,border-color] duration-500 ease-out ${opacityClass} ${borderClass}`}
                    >
                      {pro.variant === "image" ? (
                        <>
                          <div className="h-36 w-full shrink-0 overflow-hidden sm:h-40">
                            <img
                              src={pro.image}
                              alt={pro.imageAlt}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col items-center p-6 md:p-8">
                            <h2 className="text-xl font-semibold text-ink">
                              {pro.title}
                            </h2>
                            <p className="mt-3 leading-relaxed text-ink-muted">
                              {pro.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-8">
                          <Icon
                            icon={pro.icon}
                            className={`mb-4 text-5xl ${brandIconClasses[index % brandIconClasses.length]} ${isPrimary ? "animate-pros-icon" : ""}`}
                            aria-hidden
                          />
                          <h2 className="text-xl font-semibold text-ink">
                            {pro.title}
                          </h2>
                          <p className="mt-3 leading-relaxed text-ink-muted">
                            {pro.description}
                          </p>
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface from-25% via-surface/40 to-transparent sm:w-16 md:w-20"
            aria-hidden
          />
        </div>

        <div
          className="mt-8 flex justify-center gap-3"
          role="group"
          aria-label="Carousel controls"
        >
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand/45 bg-white/70 text-ink backdrop-blur-sm transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-40"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <Icon icon="gravity-ui:chevron-left" className="text-2xl" aria-hidden />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand/45 bg-white/70 text-ink backdrop-blur-sm transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-40"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <Icon icon="gravity-ui:chevron-right" className="text-2xl" aria-hidden />
          </button>
        </div>

        <p className="sr-only" aria-live="polite">
          Slide {selectedIndex + 1} of {pros.length}
        </p>
      </section>
    </div>
  );
}

export default ProsOfBuenosAires;
