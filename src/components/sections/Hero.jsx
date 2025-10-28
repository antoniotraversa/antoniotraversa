// Hero.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroRight3DWrapper from "../canvas/HeroRight3D.jsx";

const Hero = () => {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 15 });
  const springY = useSpring(y, { stiffness: 50, damping: 15 });
  const rotateX = useTransform(springY, [-200, 200], [8, -8]);
  const rotateY = useTransform(springX, [-200, 200], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center lg:items-stretch overflow-hidden perspective-[1400px] py-20 lg:py-0"
    >
      {/* === LATO SINISTRO (testo) === */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Contenuto principale animato"
        tabIndex={0}
        role="presentation"

        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") e.preventDefault();
        }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-12 py-12"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold tracking-tighter leading-none mb-6"
            style={{
              transform: "translateZ(50px)",
              color: "white",
              textShadow: "0 0 25px rgba(0,0,0,0.6), 0 0 50px var(--color-primary)",
            }}
          >
            Antonio <span className="text-primary animate-pulse">Traversa</span>
          </motion.h1>

          <motion.p
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-lg md:text-xl mb-10 max-w-md"
            style={{
              transform: "translateZ(30px)",
              color: "white",
              textShadow: "0 0 12px rgba(0,0,0,0.5)",
            }}
          >
            Esplora i miei progetti e scopri chi sono attraverso design e tecnologia.
          </motion.p>
        </motion.div>
      </section>

      {/* === LATO DESTRO (pannelli 3D) === */}
      <div className="w-full h-[400px] lg:h-auto lg:w-1/2 flex justify-center items-center relative z-10">
        <HeroRight3DWrapper />
      </div>
    </section>
  );
};

export default Hero;
