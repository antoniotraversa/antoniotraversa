import React from "react";
import { Link } from "react-router-dom";
import './css/Hero.css'
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="section section-hero" aria-labelledby="hero-title">
      <article className="hero-profile-card" aria-label="Professional introduction">
        <div className="hero-profile-content stack-lg">
          <p className="eyebrow">Developer | Product-minded execution</p>

          <h1 className="display-title hero-title" id="hero-title">
            I build digital products that are clear, fast, and outcome-driven.
          </h1>

          <p className="lead hero-lead">
            I turn complex goals into effective digital experiences, from initial
            vision to release, through a lean process, solid technical choices,
            and a constant focus on value for users and business.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <Link className="btn btn-primary" to="/projects" aria-label="Go to projects">
              View Projects
            </Link>
          </div>
        </div>

        <ProfileCard />
      </article>
    </section>
  )
}