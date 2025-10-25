// src/components/sections/ProjectsGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion
import projects from "../../data/projects";
// Importa la mappa dei componenti icona
import { iconMap } from '../../utils/icons';

// Varianti per l'intera griglia (contenitore)
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Anima i figli uno dopo l'altro
    },
  },
};

// Varianti per la singola card
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function ProjectsGrid() {
  // RIMOSSO: 'iconFilter' non è più necessario
  
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
      style={{ transformStyle: "preserve-3d" }}
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          // Animazione 3D all'hover
          whileHover={{
            scale: 1.03,
            rotateX: 8,
            rotateY: -5,
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px var(--color-primary)",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <Link
            to={`/projects/${project.id}`}
            className="group flex flex-col h-full bg-[var(--color-text)]/5 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 shadow-lg border border-[var(--color-text)]/10"
            style={{ transformStyle: "preserve-3d" }} // Necessario per l'effetto 3D
          >
            {/* Immagine con effetto 3D */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full aspect-video object-cover"
              style={{ transform: "translateZ(20px)" }} // Sposta l'immagine "in avanti"
            />
            {/* Testo con effetto 3D */}
            <div style={{ transform: "translateZ(10px)" }}>
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                {project.title}
              </h2>
              <p className="text-[var(--color-text-muted)] text-sm line-clamp-3 mb-4 flex-grow">
                {project.description}
              </p>
            </div>

            {/* === CORREZIONE ICONE === */}
            {/* Icone */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--color-text)]/10 mt-auto">
              {project.tags.map((tag) => {
                // 1. Prendi il Componente dalla mappa
                const IconComponent = iconMap[tag.toLowerCase()];
                // 2. Renderizza il componente (non <img>)
                return IconComponent ? (
                  <IconComponent
                    key={tag}
                    title={tag}
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors"
                  />
                ) : null;
              })}
            </div>
            {/* === FINE CORREZIONE === */}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}