import React from 'react';
import { PROJECTS } from '../data/projects';
import { BrowserMockup } from './BrowserMockup';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="top" aria-label="Pengenalan dan Karya Utama">
      <div className="container">
        <div className="hero-layout">
          {/* Main Editorial Text Column */}
          <div className="hero-editorial">
            <div className="hero-identity-tag">
              <span className="hero-identity-name">Tonang Arivin</span>
              <span className="hero-identity-divider">/</span>
              <span className="hero-identity-role">AI-Assisted Full-Stack Developer</span>
            </div>

            <h1 className="hero-headline">
              Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools.
            </h1>

            <p className="hero-description">
              Membangun produk web nyata yang fungsional, nyaman diakses di ponsel, dan mudah dirawat. Menghidupkan ide digital menjadi karya yang dapat digunakan tanpa klaim agensi yang berlebihan.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Bicarakan project
              </a>
              <a href="#selected-work" className="btn btn-secondary">
                Lihat karya terpilih
              </a>
            </div>

            <div className="hero-location-badge">
              <span className="location-pin" aria-hidden="true">📍</span>
              <span>Berbasis di Jember, Jawa Timur (GMT+7)</span>
            </div>
          </div>

          {/* Profile Dossier & Portrait Placeholder Column */}
          <aside className="hero-portrait-card" aria-label="Informasi Profil Tonang Arivin">
            <div className="portrait-frame">
              <div className="portrait-graphic" aria-hidden="true">
                <div className="portrait-monogram">TA</div>
                <div className="portrait-mesh-lines" />
              </div>
              <div className="portrait-caption">
                <span className="portrait-label">Profil Personal</span>
                <span className="portrait-status">Potret belum disertakan</span>
                <p className="portrait-note">
                  Aset personal akan diperbarui saat potret resmi dikonfirmasi.
                </p>
              </div>
            </div>

            <div className="portrait-meta-grid">
              <div className="portrait-meta-item">
                <span className="meta-item-label">Spesialisasi</span>
                <span className="meta-item-value">Web & Product Prototyping</span>
              </div>
              <div className="portrait-meta-item">
                <span className="meta-item-label">Alur Kerja</span>
                <span className="meta-item-value">AI-Assisted Craftsmanship</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Feature Spotlight: Interactive Browser Showcase */}
        <div className="hero-showcase-wrapper" aria-label="Showcase Interaktif Project Nyata">
          <div className="showcase-header">
            <div className="showcase-header-info">
              <span className="showcase-tag">Showcase Interaktif</span>
              <h2 className="showcase-title">Eksplorasi Antarmuka Project</h2>
            </div>
            <p className="showcase-subtext">
              Simulasi preview antarmuka dari tiga project nyata yang sedang atau telah dibangun.
            </p>
          </div>
          <BrowserMockup projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
};
