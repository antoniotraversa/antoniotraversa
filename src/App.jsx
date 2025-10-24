import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Background from "./components/layout/Background";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    // Applica i colori di sfondo e testo dinamicamente usando le variabili CSS
    // Aggiunta transizione per un cambio tema più fluido
    <div className="relative z-0 min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans transition-colors duration-500">
      <Header />
      <Background />

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