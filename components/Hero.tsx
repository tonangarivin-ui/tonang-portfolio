import React from 'react';
import { PROJECTS } from '../data/projects';
import { BrowserMockup } from './BrowserMockup';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="top" aria-label="Pengenalan dan Karya Utama">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-meta">
              <span>Tonang Arivin</span>
              <span className="hero-meta-dot">•</span>
              <span>AI-Assisted Full-Stack Developer</span>
              <span className="hero-meta-dot">•</span>
              <span>Jember, Jawa Timur</span>
            </div>

            <h1 className="hero-headline">
              Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools.
            </h1>

            <p className="hero-description">
              Membangun produk web nyata yang fungsional, nyaman diakses di ponsel, dan mudah dirawat. Menghidupkan ide digital tanpa klaim agensi yang berlebihan.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Bicarakan project
              </a>
              <a href="#selected-work" className="btn btn-secondary">
                Lihat karya terpilih
              </a>
            </div>
          </div>

          <div className="hero-mockup-wrapper">
            <BrowserMockup projects={PROJECTS} />
          </div>
        </div>
      </div>
    </section>
  );
};
