import { motion, MotionValue, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";

const MotionLink = motion(Link);

const LG_QUERY = "(max-width: 1023px)";

function useIsBelowLg() {
  const [belowLg, setBelowLg] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(LG_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(LG_QUERY);
    const sync = () => setBelowLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return belowLg;
}

export const Navbar = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const belowLg = useIsBelowLg();
  const { pathname } = useLocation();

  function handleTitleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }

  const height = useTransform(scrollYProgress, (p) => {
    const end = belowLg ? 0.09 : 0.2;
    const t = Math.min(1, Math.max(0, p / end));
    return 280 + (60 - 280) * t;
  });

  const scale = useTransform(scrollYProgress, (p) => {
    const end = belowLg ? 0.16 : 0.35;
    const t = Math.min(1, Math.max(0, p / end));
    return 2.5 + (1 - 2.5) * t;
  });

  const barReveal = useTransform(scrollYProgress, (p) => {
    const start = belowLg ? 0.08 : 0.2;
    const end = belowLg ? 0.18 : 0.35;
    const t = Math.min(1, Math.max(0, (p - start) / (end - start)));
    return t;
  });

  const backdropFilter = useTransform(barReveal, (t) => {
    const px = t * 14;
    return `blur(${px}px)`;
  });

  const background = useTransform(barReveal, (t) => {
    const a = t * 0.5;
    return `rgba(255, 255, 255, ${a})`;
  });

  const borderBottomColor = useTransform(barReveal, (t) => {
    const a = 0.06 + t * 0.06;
    return `rgb(8 145 178 / ${a})`;
  });

  return (
    <motion.div
      className="fixed left-1/2 top-0 z-50 flex w-svw max-w-none -translate-x-1/2 items-center justify-center border-b border-transparent p-4 text-ink max-lg:px-3"
      style={{
        height,
        backdropFilter,
        background,
        borderBottomWidth: 1,
        borderBottomColor,
      }}
    >
      <MotionLink
        to="/"
        onClick={handleTitleClick}
        className="text-center font-black text-2xl text-ink decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand max-lg:text-xl"
        style={{ scale }}
      >
        <span className="leading-tight">
          <span className="block lg:hidden">BUENOS</span>
          <span className="block lg:hidden">AIRES</span>
          <span className="hidden whitespace-nowrap lg:inline">BUENOS AIRES</span>
        </span>
      </MotionLink>
    </motion.div>
  );
};

/** Slim bar for `/place/:slug` — fixed height, always pinned to the top. */
export function NavbarCompact() {
  return (
    <header className="fixed left-1/2 top-0 z-50 w-svw max-w-none -translate-x-1/2 border-b border-brand/[0.08] bg-white/75 pt-[env(safe-area-inset-top,0px)] text-ink backdrop-blur-md">
      <div className="flex h-14 w-full items-center justify-center px-3 max-lg:px-2">
        <Link
          to="/"
          className="whitespace-nowrap text-center text-base font-black leading-tight text-ink decoration-brand decoration-2 underline-offset-2 transition-colors hover:text-brand sm:text-lg"
        >
          BUENOS AIRES
        </Link>
      </div>
    </header>
  );
}
