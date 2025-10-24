// src/pages/Home.jsx
import React from "react";
import Hero from "../components/sections/Hero";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";


export default function Home() {
  return (
  <PageTransitionWrapper>
          <Hero />
  </PageTransitionWrapper>



  );
}
