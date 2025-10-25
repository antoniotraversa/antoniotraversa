// Hero.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroRight3DWrapper from "../canvas/HeroRight3D";

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
    <section className="w-full h-screen flex overflow-hidden perspective-[1400px]">
      {/* Colonna sinistra: testi */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-1/2 flex flex-col justify-center items-start px-12 relative z-20"
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
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tighter leading-none mb-8"
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
      </div>

      {/* Colonna destra: pulsanti 3D */}
      <div className="w-1/2 h-full relative z-10">
        <HeroRight3DWrapper />
      </div>
    </section>
  );
};

export default Hero;
