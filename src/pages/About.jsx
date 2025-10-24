// src/pages/NotFound.jsx
import React from "react";
import pp from '../assets/images/pp.png'
import mh from '../assets/images/mh.png'
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";

export default function About() {
  return (
    <PageTransitionWrapper>
       <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
      {/* Colonna sinistra: testo e bottoni */}
      <div className="flex flex-col items-start justify-center text-text-on-dark max-w-lg z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-primary">Antonio</span>
        </h1>
        <p className="text-lg text-white/70 mb-8">
          Ciao, sono Antonio Traversa, nato il 25 giugno 1996 a Caserta. 
          Studio Ingegneria Informatica e da sempre coltivo una doppia passione: la tecnologia e la musica.
          Sono DJ e produttore, ma mi dedico anche allo sviluppo software,
          sperimentando soluzioni creative e progetti digitali interattivi.
          Le mie competenze principali includono:
          Linguaggi di programmazione: C, C++, Java, Dart & Flutter, JavaScript/JSX, Python
          Sviluppo di applicazioni: web, mobile e progetti interattivi
          Creatività musicale: produzione e performance come DJ
          Amo combinare logica e creatività, trasformando idee in esperienze digitali coinvolgenti.
          Cerco sempre nuove sfide e il mio obiettivo è unire il mondo della programmazione con la musica,
          creando progetti originali e immersivi.
        </p>
        <img src={mh} alt='mh' className='w-full'></img>

        
      </div>

      {/* Colonna destra: canvas 3D */}
      <div className="w-full md:w-1/2 h-[400px] md:h-full">
        <img alt="pp" src={pp} className="w-full"></img>
        
      </div>
    </section>
    </PageTransitionWrapper>

  );
}
