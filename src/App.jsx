// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import GlobalCanvas from "./components/canvas/GlobalCanvas";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    // MODIFICATO: Rimossi z-0 e bg-[var(--color-bg)]
    // Questo permette al GlobalCanvas (z-index: -1) di essere lo sfondo
    // e ai componenti con backdrop-blur (glassmorphism) di funzionare.
    <div className="relative min-h-screen text-[var(--color-text)] font-sans transition-colors duration-500">
      {/* Canvas 3D globale con SignalPattern e elementi futuristici */}
      <GlobalCanvas />

      {/* Header sopra il canvas e il main (z-index più alto) */}
      <Header />

      <main className="relative z-10 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}