import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Header.css";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Go to Home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Antonio Traversa</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
            Projects
          </NavLink>
        </nav>

        <div className="header-actions" aria-label="Social e tema">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/antoniotraversa1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.5V20H3.11V8.5h3.83zM7.2 4.95C7.2 6.08 6.35 7 5.03 7h-.02C3.74 7 2.9 6.08 2.9 4.95c0-1.15.87-2.03 2.14-2.03 1.28 0 2.13.88 2.16 2.03zM21.1 13.4V20h-3.82v-6.16c0-1.55-.55-2.6-1.94-2.6-1.05 0-1.68.71-1.96 1.4-.1.25-.13.6-.13.95V20H9.43s.05-10.57 0-11.5h3.82v1.63c.51-.79 1.43-1.92 3.47-1.92 2.53 0 4.38 1.65 4.38 5.19z" />
            </svg>
          </a>

          <a
            className="social-link"
            href="https://github.com/antoniotraversa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.69.5 12.09c0 5.12 3.3 9.47 7.87 11 .58.11.79-.25.79-.56v-1.96c-3.2.71-3.88-1.56-3.88-1.56-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.02 1.78 2.69 1.26 3.34.96.1-.75.4-1.27.73-1.56-2.55-.3-5.24-1.3-5.24-5.78 0-1.27.45-2.31 1.18-3.13-.12-.29-.51-1.49.11-3.09 0 0 .97-.31 3.17 1.2a10.9 10.9 0 0 1 5.78 0c2.2-1.51 3.16-1.2 3.16-1.2.63 1.6.24 2.8.12 3.09.74.82 1.18 1.86 1.18 3.13 0 4.5-2.7 5.48-5.28 5.77.41.36.78 1.06.78 2.15v3.18c0 .31.2.68.8.56a11.6 11.6 0 0 0 7.85-11C23.5 5.69 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            className="social-link"
            href="mailto:mucoso.cobalto_2i@icloud.com"
            aria-label="Email"
            title="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-.4 2L12 12.35 4.4 7h15.2zM4 17V8.2l7.42 5.22a1 1 0 0 0 1.16 0L20 8.2V17H4z" />
            </svg>
          </a>

          <span className="header-divider" aria-hidden="true" />

          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}