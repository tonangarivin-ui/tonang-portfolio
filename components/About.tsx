import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="section-spacer about-section" id="about" aria-label="Tentang Tonang Arivin">
      <div className="container">
        <div className="section-header-editorial">
          <div className="section-meta-index">
            <span className="index-num">02</span>
            <span className="index-label">Tentang Tonang</span>
          </div>
          <h2 className="section-title">Vibe Coder dari Jember, Jawa Timur</h2>
          <p className="section-description">
            Memadukan kepekaan desain, eksekusi kode terstruktur, dan akselerasi AI tools modern untuk menghadirkan produk digital yang bermanfaat.
          </p>
        </div>

        <div className="about-editorial-grid">
          {/* Left Column: Statement & Key Perspective */}
          <div className="about-statement-block">
            <blockquote className="about-pullquote">
              &ldquo;Bagi saya, esensi vibe coding adalah merancang, membangun, dan menghidupkan ide digital menjadi produk yang benar-benar bisa digunakan oleh orang lain.&rdquo;
            </blockquote>

            <div className="about-dossier">
              <div className="dossier-row">
                <span className="dossier-label">Lokasi Kerja</span>
                <span className="dossier-val">Jember, Jawa Timur, Indonesia</span>
              </div>
              <div className="dossier-row">
                <span className="dossier-label">Zona Waktu</span>
                <span className="dossier-val mono">WIB (GMT+7)</span>
              </div>
              <div className="dossier-row">
                <span className="dossier-label">Model Kerja</span>
                <span className="dossier-val">Kolaborasi Jarak Jauh & Prototyping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Craft Principles */}
          <div className="about-narrative-block">
            <div className="about-prose">
              <p className="prose-lead">
                Saya manusia biasa yang kebetulan memiliki kemampuan vibe coding. Saya merancang dan membangun website serta produk digital dengan bantuan Hermes Agent, OpenCode, dan Antigravity. Saya terbuka mengerjakan berbagai jenis project selama proses dan hasilnya bisa didiskusikan bersama.
              </p>

              <p className="prose-body">
                Pendekatan ini mengutamakan kecepatan eksplorasi tanpa mengorbankan kerapian struktur kode, kenyamanan di ponsel, maupun aksesibilitas bagi semua pengguna. Daripada terjebak dalam proses birokratis agensi, saya fokus pada iterasi nyata dan hasil yang dapat langsung diuji di peramban.
              </p>
            </div>

            <div className="about-highlights-strip">
              <div className="highlight-pill">
                <span className="highlight-icon" aria-hidden="true">✦</span>
                <span>Desain responsif ponsel sebagai prioritas utama</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon" aria-hidden="true">✦</span>
                <span>Standar aksesibilitas dan kontras terverifikasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
