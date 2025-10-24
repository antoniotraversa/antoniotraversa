// src/pages/NotFound.jsx
import React from "react";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";

export default function NotFound() {
  return (
    <PageTransitionWrapper>
          <section className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-text-on-dark">
        404 Not Found
      </h1>
    </section>
    </PageTransitionWrapper>

  );
}
