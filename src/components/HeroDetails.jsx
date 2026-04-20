import React from "react";
import "./css/HeroDetails.css";

export default function HeroDetails() {
  return (
    <section className="section hero-details" aria-label="Professional highlights">
      <div className="hero-details-inner">
        <ul className="hero-details-proof" aria-label="Core strengths">
          <li>Clear goals, shared priorities, and concrete execution.</li>
          <li>User experiences designed to be simple, memorable, and focused.</li>
          <li>Technical decisions guided by impact, timing, and sustainability.</li>
        </ul>

        <div className="hero-details-metrics" aria-label="Key profile highlights">
          <article className="hero-details-metric-card">
            <p className="hero-details-metric-value">Performance First</p>
            <p className="hero-details-metric-label">Real speed and fluid interaction</p>
          </article>

          <article className="hero-details-metric-card">
            <p className="hero-details-metric-value">UX + Product</p>
            <p className="hero-details-metric-label">Interfaces that are useful, polished, and conversion-oriented</p>
          </article>

          <article className="hero-details-metric-card">
            <p className="hero-details-metric-value">Quality by Design</p>
            <p className="hero-details-metric-label">Clean architecture and code ready to scale</p>
          </article>
        </div>

      </div>
    </section>
  );
}
