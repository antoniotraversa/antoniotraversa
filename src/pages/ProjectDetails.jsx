// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
// Importa la mappa dei componenti icona
import { iconMap } from '../utils/icons';
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";

// Varianti per il contenitore principale (stagger)
const mainContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Anima i figli (blocchi) uno dopo l'altro
    },
  },
};

// Varianti per i singoli blocchi (pannelli)
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Prendi l'icona GitHub dalla mappa per il pulsante
  const GithubIcon = iconMap.github;

  if (!project) {
    // ... (Pagina Not Found)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-[var(--color-text)]">
        <p>Progetto non trovato.</p>
        <Link
          to="/projects"
          className="text-[var(--color-primary)] underline mt-4"
        >
          Torna ai progetti
        </Link>
      </div>
    );
  }

  // RIMOSSO: 'iconFilter' non è più necessario

  return (
    <PageTransitionWrapper>
      <motion.section
        className="w-full max-w-6xl mx-auto min-h-screen px-4 py-24 flex flex-col gap-10"
        style={{ perspective: "1500px" }}
        variants={mainContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === BLOCCO 1: Griglia Principale (Immagine + Info) === */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          variants={itemVariants} // Questo blocco anima come un unico item
        >
          {/* Pannello Immagine (con animazione 3D) */}
          <motion.div
            className="lg:col-span-3"
            whileHover={{
              scale: 1.03,
              rotateY: 8,
              boxShadow: "0 10px 40px var(--color-primary)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </motion.div>

          {/* Pannello Info (Glassmorphism) */}
          <div className="lg:col-span-2 flex flex-col bg-[var(--color-text)]/5 backdrop-blur-lg border border-[var(--color-text)]/10 rounded-2xl shadow-xl p-8 h-full">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              {project.title}
            </h1>

            {/* === CORREZIONE ICONE === */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.tags?.map((tag) => {
                // 1. Prendi il Componente dalla mappa
                const IconComponent = iconMap[tag.toLowerCase()];
                // 2. Renderizza il componente (non <img>)
                return IconComponent ? (
                  <IconComponent
                    key={tag}
                    title={tag}
                    className="w-6 h-6 text-[var(--color-text)] opacity-80"
                  />
                ) : null;
              })}
            </div>
            {/* === FINE CORREZIONE === */}

            <p className="text-[var(--color-text-muted)] text-base mb-8 flex-grow">
              {project.description}
            </p>

            {/* === CORREZIONE PULSANTE === */}
            {/* Usa 'project.repository' e l'icona GitHub dalla mappa */}
            {project.repository && GithubIcon && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-opacity-80 transition-all shadow-lg hover:shadow-primary/50 text-center w-full flex items-center justify-center gap-3"
              >
                <GithubIcon className="w-5 h-5" />
                Vedi Repository
              </a>
            )}
            {/* === FINE CORREZIONE === */}
          </div>
        </motion.div>

        {/* === BLOCCO 2: Titolo Features === */}
        {project.features && project.features.length > 0 && (
          <motion.h2
            className="text-3xl font-bold text-[var(--color-text)] border-b border-[var(--color-text)]/20 pb-4"
            variants={itemVariants}
          >
            Features
          </motion.h2>
        )}

        {/* === BLOCCO 3: Lista Features (Feed di Pannelli) === */}
        {project.features && (
          <div className="flex flex-col gap-8">
            {project.features.map((feature) => (
              <motion.div
                key={feature.title}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-[var(--color-text)]/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[var(--color-text)]/10"
                variants={itemVariants} // Ogni feature anima
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full rounded-lg md:col-span-1"
                />
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold mb-2 text-[var(--color-text)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.section>
    </PageTransitionWrapper>
  );
}