// src/pages/NotFound.jsx
import React from "react";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <PageTransitionWrapper>
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-16">
        {/* Testo principale animato leggermente */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)] drop-shadow-lg"
        >
          404 Not Found
        </motion.h1>

        {/* Sottotitolo con effetto glow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] text-center max-w-md"
        >
          La pagina che stai cercando non esiste. Torna alla{" "}
          <a
            href="/"
            className="text-[var(--color-primary)] font-semibold underline"
          >
            Home
          </a>.
        </motion.p>
      </section>
    </PageTransitionWrapper>
  );
}
