// src/pages/About.jsx
import React from "react";
import pp from '../assets/images/pp.png';
import mh from "../assets/images/mh.png";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";
import { motion } from "framer-motion";

const easing = [0.65, 0, 0.35, 1];
const TOTAL_DURATION = 1.5;

export default function About() {
  return (
    <PageTransitionWrapper>
      <section className="relative w-full h-screen flex flex-col lg:flex-row items-start lg:items-center justify-between px-8 lg:px-16 gap-8">
        
        {/* === Colonna sinistra: testo About Me + mh === */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center z-20 max-w-xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: TOTAL_DURATION, ease: easing }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text)]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: TOTAL_DURATION, ease: easing }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: TOTAL_DURATION, ease: easing }}
          >
            Ciao, sono Antonio Traversa, nato il 25 giugno 1996 a Caserta. 
            Studio Ingegneria Informatica e coltivo una doppia passione: tecnologia e musica.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: TOTAL_DURATION, ease: easing }}
          >
            Sono DJ e produttore, ma mi dedico anche allo sviluppo software,
            sperimentando soluzioni creative e progetti digitali interattivi.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: TOTAL_DURATION, ease: easing }}
          >
            Le mie competenze principali includono linguaggi di programmazione (C, C++, Java, Dart & Flutter, JS/JSX, Python), sviluppo applicazioni web e mobile, e creatività musicale.
          </motion.p>

          {/* === Immagine mh come card larga quanto il testo === */}
          <motion.img
            src={mh}
            alt="mh"
            className="w-full rounded-xl shadow-xl border border-[var(--color-text-muted)] mt-4"
            initial={{ x: -50, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: TOTAL_DURATION, ease: easing }}
          />
        </motion.div>

        {/* === Colonna destra: immagine pp === */}
        <motion.div
          className="lg:w-1/2 h-full flex justify-center items-center"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: TOTAL_DURATION, ease: easing }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={pp}
            alt="Antonio"
            className="w-full h-full  object-cover"
          />
        </motion.div>

      </section>
    </PageTransitionWrapper>
  );
}
