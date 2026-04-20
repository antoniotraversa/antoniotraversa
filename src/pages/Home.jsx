import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HeroDetails from "../components/HeroDetails";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroDetails />

      <section id="about" className="container section about-page" aria-labelledby="home-about-title">
        <div className="stack-lg">
          <header className="about-hero stack-lg">
            <div className="stack-sm">
              <p className="eyebrow">About</p>
              <h2 className="display-title" id="home-about-title">
                Method, standards, and vision behind every project
              </h2>
            </div>

            <p className="lead about-lead">
              I'm Antonio, a web developer with a product-oriented mindset. I
              combine strategic thinking, functional design, and solid development
              to build digital experiences that keep working over time.
            </p>

            <div className="about-cta-row" aria-label="Primary actions">
              <Link to="/projects" className="about-cta-primary">
                Explore Projects
              </Link>
              <span className="about-cta-note">
                Concrete cases, measurable outcomes, and a strong focus on business value.
              </span>
            </div>
          </header>

          <div className="about-grid">
            <article className="card stack-sm" aria-labelledby="home-value-title">
              <h3 className="title-md" id="home-value-title">What I bring to a team</h3>
              <ul className="about-list" aria-label="Professional value">
                <li>Practical execution: less theory, more useful and usable solutions.</li>
                <li>End-to-end thinking: from initial direction to release.</li>
                <li>Technical quality: readable, scalable, and maintainable code.</li>
                <li>Product mindset: attention to users, goals, and conversion.</li>
              </ul>
            </article>

            <article className="card stack-sm" aria-labelledby="home-method-title">
              <h3 className="title-md" id="home-method-title">How I work</h3>
              <p className="about-text">
                Every project starts from a real problem and is developed with a
                professional logic: clear structure, reusable components, polished
                UX, and attention to the details that truly shape the final experience.
              </p>
              <p className="about-text">
                I work collaboratively and with a quality-first mindset: code that is
                ready to extend, integrate, and evolve sustainably over time.
              </p>
              <p className="about-text">
                Main areas: web applications, custom software, and interactive 3D
                experiences with Unreal Engine, always focused on clarity, stability,
                and impact.
              </p>
            </article>
          </div>

          <section className="about-proof" aria-labelledby="home-proof-title">
            <h3 className="title-md" id="home-proof-title">Why my profile stands out</h3>
            <div className="grid-auto">
              <article className="card stack-sm about-proof-card">
                <p className="eyebrow">Execution</p>
                <p className="about-text">
                  I turn ideas into working interfaces, not just mockups.
                </p>
              </article>

              <article className="card stack-sm about-proof-card">
                <p className="eyebrow">Reliability</p>
                <p className="about-text">
                  I build on solid foundations: performance, visual consistency, and attention to detail.
                </p>
              </article>

              <article className="card stack-sm about-proof-card">
                <p className="eyebrow">Growth</p>
                <p className="about-text">
                  I learn quickly and design with the product's long-term evolution in mind.
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}