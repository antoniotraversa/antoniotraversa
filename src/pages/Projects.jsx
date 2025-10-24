// src/pages/Projects.jsx
import React from "react";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";

export default function Projects() {
  return (
    <PageTransitionWrapper>
          <section className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-text-on-dark">
        I miei progetti
      </h1>
      <ProjectsGrid />
    </section>
    </PageTransitionWrapper>

  );
}
