import { Icon } from "@iconify-icon/react";
import EmblaCarousel from "./Carousel";
import CarouselImg1 from "../assets/pexels-micca-ar-308726700-23021526.jpg";
import CarouselImg2 from "../assets/pexels-micca-ar-308726700-23021657.jpg";
import CarouselImg3 from "../assets/pexels-rickson-derik-1225713006-22605358.jpg";
import CarouselImg4 from "../assets/pexels-sofia-linares-corsano-306415279-13447376.jpg";

const HOTEL = {
  name: "NH Collection Buenos Aires Centro Histórico",
  address: "Bolívar 120, C1066AAD, Cdad. Autónoma de Buenos Aires, Argentina",
  mapQuery: "NH Collection Buenos Aires Centro Histórico, Bolívar 120, Buenos Aires, Argentina",
  bookUrl:
    "https://www.nh-collection.com/en/hotel/nh-collection-buenos-aires-centro-historico",
  phone: "+54 11 4121-6446",
} as const;

const amenities = [
  "Wi-Fi",
  "AC",
  "Breakfast",
  "Security",
  "LGBTQ+",
  "Adaptive",
] as const;

const amenityStyles = [
  "border-brand/50 text-brand",
  "border-brand-sea/50 text-brand-sea",
  "border-brand-coral/50 text-brand-coral",
  "border-brand-bloom/50 text-brand-bloom",
  "border-brand/50 text-brand",
  "border-brand-sea/50 text-brand-sea",
] as const;

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(HOTEL.mapQuery)}&hl=en&z=16&output=embed`;

function Reservation() {
  return (
    <section
      id="reservation"
      className="mx-auto w-full rounded-t-2xl border-x border-t border-brand/30 bg-white/55 py-8 text-ink backdrop-blur-lg sm:rounded-t-3xl sm:py-10 md:py-12 max-lg:px-3"
    >
      <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-8 px-4 sm:gap-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand sm:text-sm">
              Featured hotel
            </p>
            <h3 className="mt-1 font-black text-2xl text-ink sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight">
              {HOTEL.name}
            </h3>
            <div
              className="mt-2 inline-flex w-full gap-1 text-brand sm:gap-1.5"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  icon="gravity-ui:star-fill"
                  className="text-base sm:text-lg"
                  aria-hidden
                />
              ))}
            </div>
            <h6 className="mt-3 text-xs leading-snug text-ink-muted sm:text-sm">
              Five-star NH Collection property in the Microcentro — a short walk
              from Plaza de Mayo, the Casa Rosada, and the Metropolitan
              Cathedral.
            </h6>
            <h4 className="mt-3 inline-flex w-full items-start gap-2 text-xs leading-snug text-ink sm:text-sm">
              <Icon
                icon="gravity-ui:map-pin"
                className="mt-0.5 shrink-0 text-brand-coral"
                aria-hidden
              />
              <strong className="break-words font-semibold">
                {HOTEL.address}
              </strong>
            </h4>
            <p className="mt-2 text-xs text-ink-muted sm:text-sm">
              <a
                href={`tel:${HOTEL.phone.replace(/\s/g, "")}`}
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                {HOTEL.phone}
              </a>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-2.5 lg:flex lg:flex-wrap lg:gap-3">
              {amenities.map((label, i) => (
                <div
                  key={label}
                  className={`flex min-h-10 items-center justify-center rounded-full border-2 bg-white/50 px-2.5 py-2 text-center text-[0.65rem] font-semibold leading-tight backdrop-blur-sm sm:min-h-11 sm:px-3 sm:text-xs lg:min-w-16 lg:flex-1 ${amenityStyles[i]}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-h-0 flex-col gap-6 sm:gap-8 lg:justify-between">
            <div className="flex min-h-0 flex-col text-ink">
              <h5 className="text-lg font-bold sm:text-xl">Guest reviews</h5>
              <div className="mt-2 grid grid-cols-1 gap-2">
                <div className="glass-panel rounded-2xl border-brand/25 p-3 sm:p-4">
                  <div className="inline-flex w-full flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold">Google traveler</h3>
                    <div
                      className="inline-flex items-center gap-0.5 text-xs text-brand"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} icon="gravity-ui:star-fill" aria-hidden />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-sm">
                    Excellent location for sightseeing, quiet rooms, and a
                    solid breakfast before walking to the historic core.
                  </p>
                </div>
                <div className="glass-panel rounded-2xl border-brand/25 p-3 sm:p-4">
                  <div className="inline-flex w-full flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold">Booking.com guest</h3>
                    <div
                      className="inline-flex items-center gap-0.5 text-xs text-brand"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} icon="gravity-ui:star-fill" aria-hidden />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-sm">
                    Friendly front desk, spotless room, and we slept well after
                    long days in the city — would stay again for the walkable
                    Microcentro.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col border-t border-brand/15 pt-4 sm:pt-0 lg:border-t-0 lg:pt-0">
              <p className="text-xs font-medium text-ink-muted sm:text-sm">
                Nightly rates change with season and availability — check the
                official site for current prices.
              </p>
              <a
                href={HOTEL.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-lg font-black text-brand underline-offset-2 hover:underline sm:text-xl"
              >
                View rates at NH Collection
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-5">
          <div className="min-w-0 [&_.embla]:[--slide-height:12.5rem] sm:[&_.embla]:[--slide-height:16rem] md:[&_.embla]:[--slide-height:19rem]">
            <EmblaCarousel
              slides={[CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4]}
            />
          </div>
          <div className="iframe-wrapper relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-2xl border border-brand/30 bg-white/40 sm:min-h-[240px] md:min-h-0">
            <iframe
              title={`Map: ${HOTEL.name}`}
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
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-3 px-0 sm:flex-row sm:items-center sm:px-0">
          <a
            href={HOTEL.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full max-w-md rounded-full border-2 border-brand-sea bg-brand px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-brand-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bloom sm:w-auto sm:max-w-none sm:px-8 sm:py-3 sm:text-lg md:text-xl"
          >
            Book on NH Collection
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
