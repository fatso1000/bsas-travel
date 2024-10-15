import Picture1 from "../assets/pexels-micca-ar-308726700-23021526.jpg";
import Picture2 from "../assets/pexels-micca-ar-308726700-23021657.jpg";
import Picture3 from "../assets/pexels-rickson-derik-1225713006-22605358.jpg";
import Picture4 from "../assets/pexels-sofia-linares-corsano-306415279-13447376.jpg";
import { Icon } from "@iconify-icon/react";

const cards = [
  {
    bgImage: Picture1,
    href: "puerto-madero",
    title: "Puerto Madero",
  },
  {
    bgImage: Picture2,
    href: "jardin-japones",
    title: "Japanese Garden",
  },
  {
    bgImage: Picture3,
    href: "casa-mayo",
    title: "May House",
  },
  {
    bgImage: Picture4,
    href: "ateneo",
    title: "Ateneo ",
  },
];

const Card = ({
  bgImage,
  href,
  title,
}: {
  bgImage: string;
  title: string;
  href: string;
}) => {
  return (
    <a
      href={`/place/${href}`}
      className="relative rounded-xl bg-secondary group overflow-hidden transition-all"
    >
      <img src={bgImage} alt="" className="rounded-b-2xl w-full shadow-sm" />
      <div className="rounded-xl group-hover:underline font-bold py-2 text-accent p-4 z-20 w-full inline-flex justify-between items-center transition-all">
        <span>{title}</span>
        <Icon icon="gravity-ui:arrow-right" />
      </div>
    </a>
  );
};

function Attractions() {
  return (
    <section className="grid grid-cols-1 mx-auto mt-20 gap-10 max-w-screen-lg max-lg:px-2">
      <div className="text-center">
        <h3 className="font-bold text-3xl my-4" id="about">
          EXPLORE
        </h3>
        <p className="max-w-screen-md text-lg mx-auto">
          Discover the hidden gems of Buenos Aires! From vibrant street art and
          historic cafes to secret tango spots, there's always something new to
          explore. Dive into the heart of the city and uncover its best-kept
          secrets!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-10 text-lg">
        {cards.map((item) => (
          <Card {...item} />
        ))}
        <a
          href=""
          className="text-base font-bold border-2 my-10 mx-auto col-span-2 px-3 border-secondary rounded-full h-12 max-w-40 min-w-40 inline-flex gap-1 items-center justify-center hover:bg-secondary hover:text-accent transition-colors"
        >
          See All
        </a>
      </div>
    </section>
  );
}

export default Attractions;
