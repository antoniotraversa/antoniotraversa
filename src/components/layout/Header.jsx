// CORREZIONE: Combinati gli import da 'react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Rimosso: import { useEffect } from "react";
import { FaGithub, FaInstagram, FaEnvelope ,FaSun,FaMoon} from 'react-icons/fa';


const Header = () => {
  const [isDark, setIsDark] = useState(() =>
    // Controlla anche le preferenze di sistema se il local storage non è settato
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      // CORREZIONE: 'window' -> 'globalThis'
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Aggiorna classe dark sul <html> e salva in localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
 
  // Colore del testo che si adatta al tema
  const textColorClass = "text-[var(--color-text)]";
  const hoverColorClass = "hover:text-primary";

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
      {/* Logo e testo */}
      <Link
        to={`/`}  className="flex items-center gap-3">
        <span className={`text-xl font-semibold ${textColorClass} font-sans`}>
          AT
        </span>
      </Link>

    

      {/* Navigazione desktop - aggiornata per usare le variabili di tema */}
      <nav className={`hidden md:flex items-center gap-6 ${textColorClass} font-sans`}>
<button
  onClick={toggleTheme}
  className={`p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}
  aria-label="Cambia tema"
>
  {isDark ? (
    <FaSun className="h-6 w-6" />
  ) : (
    <FaMoon className="h-6 w-6" />
  )}
</button>
        {/* Separatore che si adatta al tema */}
        <span className="w-px h-6 bg-[var(--color-text)]/30" aria-hidden="true"></span>

        <a
          href="https://github.com/tuo-username"
          target="_blank"
          rel="noopener noreferrer"
          className={`${hoverColorClass} transition-colors`}
          aria-label="Profilo GitHub"
        >
          <FaGithub className="h-6 w-6" />
        </a>

        <a
          href="https://instagram.com/tuo-username"
          target="_blank"
          rel="noopener noreferrer"
          className={`${hoverColorClass} transition-colors`}
          aria-label="Profilo Instagram"
        >
          <FaInstagram className="h-6 w-6" />
        </a>

        <a
          href="mailto:tua-email@esempio.com"
          className={`${hoverColorClass} transition-colors`}
          aria-label="Invia una email"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
      </nav>
    </header>
  );
};

export default Header;