// src/components/sections/Hero.jsx
import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* === Canvas globale trasparente === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
       
      </div>

      {/* === Contenuto Hero === */}
      {/* Aumentato max-w per contenere il testo più grande */}
      <div className="relative z-10 max-w-4xl px-6">
        
        {/* GRANDE, STILOSO, ELEGANTE */}
        <h1 className="
          text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] /* 1. Grande */
          font-extrabold /* 2. Stiloso (forte) */
          tracking-tighter /* 2. Stiloso (compatto) */
          leading-none 
          mb-8 /* 3. Elegante (spaziatura) */
        ">
          Antonio <span className="text-primary">Traversa</span>
        </h1>

        {/* Sottotitolo bilanciato */}
        <p className="
          text-lg md:text-xl 
          text-[var(--color-text-muted)] 
          mb-10 
          max-w-xl mx-auto
        ">
          Esplora i miei progetti e scopri chi sono attraverso design e
          tecnologia.
        </p>

        {/* Pulsanti più eleganti e reattivi */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/projects"
            className="
              px-8 py-3 /* 3. Elegante (padding) */
              rounded-full 
              bg-[var(--color-text)]/10 
              text-[var(--color-text)] 
              font-medium /* 3. Elegante (font weight) */
              hover:bg-[var(--color-text)]/20 
              transition-all duration-300 /* 3. Elegante (transizione) */
            "
          >
            I miei progetti
          </Link>

          <Link
            to="/about"
            className="
              px-8 py-3 
              rounded-full 
              bg-[var(--color-text)]/10 
              text-[var(--color-text)] 
              font-medium 
              hover:bg-[var(--color-text)]/20 
              transition-all duration-300
            "
          >
            Chi sono
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
