// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import iconMap from "../utils/icons";
import PageTransitionWrapper from "../components/animations/PageTransitionWrapper";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-text-on-dark">
        <p>Progetto non trovato.</p>
        <Link to="/projects" className="text-primary underline mt-4">
          Torna ai progetti
        </Link>
      </div>
    );
  }

  return (
    <PageTransitionWrapper>
      <section className="w-full min-h-screen px-8 py-16 flex flex-col items-center">
      {/* Immagine principale */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-2xl w-full max-w-2/12 mb-8"
      />

      {/* Titolo */}
      <h1 className="text-4xl font-bold text-text-on-dark mb-4">
        {project.title}
      </h1>

      {/* Tags / Linguaggi */}
      <div className="flex gap-4 mb-6">
        {project.tags?.map((tag) => {
          const iconUrl = iconMap[tag.toLowerCase()];
          return iconUrl ? (
            <img
              key={tag}
              src={iconUrl}
              alt={tag}
              title={tag}
              className="w-6 h-6"
            />
          ) : (
            <span
              key={tag}
              className="text-white/70 text-sm font-medium px-2 py-1 border border-white/30 rounded"
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* Descrizione */}
      <p className="text-white/70 max-w-3xl text-center mb-8">
        {project.description}
      </p>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="w-full max-w-4xl flex flex-col gap-8 mb-8">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/5 p-6 rounded-2xl"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full md:w-1/3 rounded-xl"
              />
              <div className="flex-1 text-white/80">
                <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottone torna ai progetti */}
      <Link
        to="/projects"
        className="mt-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
      >
        Torna ai progetti
      </Link>
    </section>
    </PageTransitionWrapper>
    
  );
}
