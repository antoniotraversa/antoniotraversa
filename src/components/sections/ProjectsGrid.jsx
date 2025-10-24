// src/components/sections/ProjectsGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl mb-4 w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-xl font-semibold text-text-on-dark mb-2">
            {project.title}
          </h2>
          <p className="text-white/70 text-sm line-clamp-3">
            {project.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
