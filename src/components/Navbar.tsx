import { motion, MotionValue, useTransform } from "framer-motion";

export const Navbar = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.35], [2.5, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const height = useTransform(scrollYProgress, [0, 0.2], [280, 60]);
  const backdropFilter = useTransform(scrollYProgress, [0.2, 0.35], ["blur(0px)", "blur(20px)"]);
  const background = useTransform(scrollYProgress, [0.2, 0.35], ["rgba(38, 31, 18,0)", "rgba(38, 31, 18,0.35)"]);
  

  return (
    <motion.div
      className="w-svw p-4 fixed top-0 left-1/2 -translate-x-1/2 z-50 items-center grid grid-cols-3 text-center border-secondary/15 text-lg max-lg:px-2"
      style={{
        height,
        backdropFilter,
        borderWidth: opacity,
        background
      }}
    >
      <motion.div style={{ opacity, scale }}>BSAS TRAVELS</motion.div>
      <motion.a href="#" className="font-black text-2xl hover:drop-shadow-2xl" style={{ scale }}>
        BUENOS AIRES
      </motion.a>
      <motion.div style={{ opacity, scale }}>Book Now</motion.div>
    </motion.div>
  );
};
