import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroRight3DWrapper from "../canvas/HeroRight3D";


const Hero = () => {
  const containerRef = useRef(null);

  // Motion values con smorzamento per movimento fluido
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
    <section className="w-full h-screen flex overflow-hidden perspective-[1200px]">
      {/* === Colonna sinistra: testo e pulsanti === */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-1/2 flex flex-col justify-center items-start px-12 z-10"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="transform-gpu transition-transform duration-300 will-change-transform"
          initial={{ rotateY: -10, rotateX: 4 }}
          animate={{ rotateY: -10, rotateX: 4 }}
        >
          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tighter leading-none mb-8 drop-shadow-[0_5px_25px_rgba(0,0,0,0.4)]"
            style={{
              transform: "translateZ(-30px)",
              textShadow:
                "0 0 25px rgba(255,255,255,0.08), 0 0 50px var(--color-primary)",
            }}
          >
            Antonio <span className="text-primary">Traversa</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-md"
            style={{ transform: "translateZ(-10px)" }}
          >
            Esplora i miei progetti e scopri chi sono attraverso design e
            tecnologia.
          </motion.p>

        
        </motion.div>
      </div>

      {/* === Colonna destra: Globe === */}
<div className="w-1/2 h-full relative">
  <HeroRight3DWrapper />
</div>
    </section>
  );
};

export default Hero;

