// src/pages/Projects.jsx
import React from "react";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";

export default function Projects() {
  return (
    <PageTransitionWrapper>
      {/*
       * REFACATOR:
       * Aggiunto 'perspective' per abilitare le trasformazioni 3D sui figli.
       * 'transform-style: preserve-3d' assicura che gli elementi figli
       * vengano renderizzati nello stesso spazio 3D.
       */}
      <section
        className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-24"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-[var(--color-text)] drop-shadow-lg">
          I miei progetti
        </h1>
        <ProjectsGrid />
      </section>
    </PageTransitionWrapper>
  );
}