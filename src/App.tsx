import { Navbar, NavbarCompact } from "./components/Navbar";
import BSASVIDEO1 from "./assets/The Culture of Argentina  (1).mp4";
import { useScroll } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import Attractions from "./components/Attractions";
import PlaceDetail from "./components/PlaceDetail";
import ProsOfBuenosAires from "./components/ProsOfBuenosAires";
import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="grid grid-cols-1 mx-auto h-[97svh] mt-[1.5vh] relative max-w-screen-xl max-lg:px-3">
        <video
          src={BSASVIDEO1}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover rounded-3xl h-full w-full min-h-[12rem]"
        />
        <div
          className="absolute inset-0 rounded-3xl hero-scrim pointer-events-none"
          aria-hidden
        />
        <a
          href="#about"
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-[10%] text-3xl rounded-full h-14 w-14 flex items-center justify-center border-2 border-brand/50 bg-white/55 text-ink backdrop-blur-md hover:border-brand hover:bg-white/75 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label="Scroll to explore section"
        >
          <Icon icon="uil:arrow-down" style={{ fontSize: "inherit" }} />
        </a>
      </section>
      <Attractions />
      <ProsOfBuenosAires />
      <Reservation />
    </>
  );
}

function Layout() {
  const { scrollYProgress } = useScroll();
  const { pathname } = useLocation();
  const isPlaceRoute = pathname.startsWith("/place");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="w-full mx-auto grid grid-cols-1">
      {isPlaceRoute ? (
        <NavbarCompact />
      ) : (
        <Navbar scrollYProgress={scrollYProgress} />
      )}
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/place/:slug" element={<PlaceDetail />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
