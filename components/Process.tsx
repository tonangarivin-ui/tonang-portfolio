import React from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Memahami Masalah',
    subtitle: 'Orientasi & Batasan',
    description:
      'Diskusi awal untuk memetakan tujuan produk, profil pengguna sasaran, dan batasan teknis yang realistis sebelum menulis baris kode pertama. Menentukan prioritas fitur esensial.',
  },
  {
    step: '02',
    title: 'Merancang Solusi',
    subtitle: 'Struktur & Pengalaman',
    description:
      'Eksplorasi alur antarmuka dan struktur visual yang mengutamakan fungsi utama, kenyamanan membaca, serta kejelasan navigasi di layar ponsel.',
  },
  {
    step: '03',
    title: 'Membangun dan Menguji',
    subtitle: 'Eksekusi & Peluncuran',
    description:
      'Pengkodean langsung, pengujian responsif di berbagai resolusi layar, verifikasi kontras aksesibilitas, dan peluncuran website yang siap digunakan oleh pengunjung.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="section-spacer process-section" id="process" aria-label="Alur Kerja Nyata">
      <div className="container">
        <div className="section-header-editorial">
          <div className="section-meta-index">
            <span className="index-num">05</span>
            <span className="index-label">Metodologi Kerja</span>
          </div>
          <h2 className="section-title">Tiga Tahap Nyata dari Ide ke Produk</h2>
          <p className="section-description">
            Alur kerja yang transparan, terarah, dan kolaboratif dari diskusi awal hingga produk siap dibuka di browser pengguna.
          </p>
        </div>

        {/* Progressive Timeline Layout */}
        <div className="process-timeline" role="list" aria-label="Tahapan Alur Kerja">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="process-phase-card" role="listitem">
              <div className="phase-top-bar">
                <span className="phase-number">{step.step}</span>
                <span className="phase-order-label">Tahap {idx + 1} dari 3</span>
              </div>

              <div className="phase-body">
                <span className="phase-subtitle">{step.subtitle}</span>
                <h3 className="phase-title">{step.title}</h3>
                <p className="phase-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
