// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
// MODIFICA: 'React' è necessario per React.Fragment
import { Link, useLocation } from 'react-router-dom';
import { iconMap } from '../../utils/icons'; // Assicurati che il percorso sia corretto

const Header = () => {
  const [isDark, setIsDark] = useState(() =>
    // Controlla anche le preferenze di sistema se il local storage non è settato
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // === MODIFICA: Logica per i breadcrumb ===
  const location = useLocation();
  // Divide il percorso e rimuove le stringhe vuote (es. da '/')
  const segments = location.pathname.split('/').filter(Boolean);
  // =======================================

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

  // Prendi i Componenti icona dalla mappa
  const SunIcon = iconMap.sun;
  const MoonIcon = iconMap.moon;
  const GithubIcon = iconMap.github;
  const InstagramIcon = iconMap.instagram;
  const EnvelopeIcon = iconMap.envelope;

  return (
      <header className="absolute top-0 left-0 w-full flex flex-col sm:flex-row sm:justify-between items-center px-6 py-4 z-50 gap-4 sm:gap-0">      
      {/* === MODIFICA: Area Logo/Breadcrumb === */}
      <div className="flex items-center gap-2">
        {/* Link Base "AT" */}
        <Link
          to={`/`}
          className={`text-xl font-semibold ${textColorClass} font-sans ${hoverColorClass} transition-colors`}
        >
          AT
        </Link>

        {/* Genera i segmenti del breadcrumb */}
        {segments.map((segment, index) => {
          // Costruisce il percorso (es. /projects, /projects/TravyPlay)
          const path = `/${segments.slice(0, index + 1).join('/')}`;
          // Rende maiuscola la prima lettera (es. projects -> Projects)
          const title = segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <React.Fragment key={path}>
              {/* Separatore */}
              <span className="text-xl font-semibold text-(--color-text-muted) font-sans hidden sm:block">
                |
              </span>
              {/* Link del segmento */}
              <Link
                to={path}
                className={`text-xl font-semibold text-(--color-text-muted) font-sans hidden sm:block ${hoverColorClass} transition-colors`}
              >
                {title}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
      {/* === FINE MODIFICA === */}


      {/* Navigazione desktop (invariata) */}
<nav className={`flex items-center gap-6 ${textColorClass} font-sans`}>        
        {SunIcon && MoonIcon && (
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${textColorClass} ${hoverColorClass} transition-colors`}
            aria-label="Cambia tema"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        )}
        
        <span className="w-px h-6 bg-(--color-text)/30" aria-hidden="true"></span>

        {GithubIcon && (
          <a
            href="https://github.com/antoniotraversa"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverColorClass} transition-colors`}
            aria-label="Profilo GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        )}

        {InstagramIcon && (
          <a
            href="https://instagram.com/antonio_traversa_"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverColorClass} transition-colors`}
            aria-label="Profilo Instagram"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        )}

        {EnvelopeIcon && (
          <a
            href="mailto:antonio.traversa.dev@gmail.com"
            className={`${hoverColorClass} transition-colors`}
            aria-label="Invia una email"
          >
            <EnvelopeIcon className="h-6 w-6" />
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;