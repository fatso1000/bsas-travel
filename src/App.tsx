import { Navbar } from "./components/Navbar";
import BSASVIDEO1 from "./assets/The Culture of Argentina  (1).mp4";
import { useScroll } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import Attractions from "./components/Attractions";

const ProsOfBuenosAires = () => {
  const pros = [
    {
      title: "Rich Cultural Scene",
      description:
        "Buenos Aires is known for its vibrant arts, music, and theater scene. From tango shows to world-class museums like the Museo de Arte Latinoamericano de Buenos Aires (MALBA), there’s plenty to explore.",
      icon: "mdi:music-note", // Iconify icon name
    },
    {
      title: "Affordability",
      description:
        "Compared to other major cities, Buenos Aires is quite affordable for tourists, especially with favorable exchange rates for many international visitors.",
      icon: "mdi:cash", // Iconify icon name
    },
    {
      title: "European Architecture",
      description:
        "The city’s architecture blends European styles, especially in neighborhoods like Recoleta and Palermo, giving it a Parisian-like charm with its grand boulevards and colonial buildings.",
      icon: "mdi:city", // Iconify icon name
    },
  ];

  return (
    <div className="py-36 px-10 mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold text-center mb-8">
        Why Visit Buenos Aires?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pros.map((pro, index) => (
          <div
            key={index}
            className="bg-secondary text-primary shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <Icon icon={pro.icon} className="text-5xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{pro.title}</h2>
            <p className="text-accent">{pro.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-accent text-secondary min-h-[150vh]">
      <div className="w-full mx-auto grid grid-cols-1">
        <Navbar scrollYProgress={scrollYProgress} />
        <section className="grid grid-cols-1 mx-auto h-[97svh] mt-[1.5vh] relative max-lg:px-2">
          <video
            src={BSASVIDEO1}
            autoPlay
            loop
            className="object-cover rounded-2xl h-full brightness-[.65] shadow-lg"
            muted
          />
          <a
            href="#about"
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-[10%] text-5xl border-2 border-secondary rounded-full h-14 w-14 flex items-center justify-center hover:bg-secondary hover:text-accent transition-colors"
          >
            <Icon icon="uil:arrow-down" style={{ fontSize: "inherit" }} />
          </a>
        </section>
        <Attractions />
        <ProsOfBuenosAires />
        <Reservation />
        <Footer />
      </div>
    </main>
  );
}

export default App;
