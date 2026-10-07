import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="section-spacer" id="about" aria-label="Tentang Tonang Arivin">
      <div className="container">
        <span className="section-eyebrow">Tentang Saya</span>
        <h2 className="section-title">Vibe Coder dari Jember, Jawa Timur</h2>
        <p className="section-description">
          Memadukan pertimbangan desain, eksekusi kode bersih, dan akselerasi AI tools untuk menghadirkan produk digital yang bermanfaat.
        </p>

        <div className="about-card">
          <p className="about-bio">
            Saya manusia biasa yang kebetulan memiliki kemampuan vibe coding. Saya merancang dan membangun website serta produk digital dengan bantuan Hermes Agent, OpenCode, dan Antigravity. Saya terbuka mengerjakan berbagai jenis project selama proses dan hasilnya bisa didiskusikan bersama.
          </p>

          <p className="about-supporting">
            Bagi saya, esensi vibe coding adalah merancang, membangun, dan menghidupkan ide digital menjadi produk yang benar-benar bisa digunakan oleh orang lain. Pendekatan ini mengutamakan kecepatan eksplorasi tanpa mengorbankan kerapian struktur kode, kenyamanan di ponsel, maupun aksesibilitas bagi semua pengguna.
          </p>

          <div className="about-location-note">
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Berbasis di Jember, Jawa Timur, Indonesia (GMT+7). Terbuka untuk diskusi project dan kolaborasi jarak jauh.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
