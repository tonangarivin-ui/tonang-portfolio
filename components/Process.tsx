import React from 'react';

const PROCESS_STEPS = [
  {
    num: '1',
    title: 'Memahami Masalah',
    description:
      'Diskusi awal untuk memetakan tujuan produk, kebutuhan pengguna sasaran, dan batasan teknis yang realistis sebelum menulis baris kode pertama.',
  },
  {
    num: '2',
    title: 'Merancang Solusi',
    description:
      'Eksplorasi alur antarmuka dan struktur visual yang mengutamakan fungsi esensial, kenyamanan membaca, dan kejelasan navigasi di perangkat genggam.',
  },
  {
    num: '3',
    title: 'Membangun dan Menguji',
    description:
      'Pengkodean langsung, pengujian responsif di ragam resolusi layar, verifikasi kontras aksesibilitas, dan peluncuran website yang siap digunakan.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="section-spacer" id="process" aria-label="Alur Kerja Nyata">
      <div className="container">
        <span className="section-eyebrow">Alur Kerja</span>
        <h2 className="section-title">Tiga Tahap Nyata dari Ide ke Produk</h2>
        <p className="section-description">
          Alur kerja yang transparan, terarah, dan kolaboratif dari diskusi awal hingga produk siap dibuka di browser pengguna.
        </p>

        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="process-step">
              <span className="process-step-num">{step.num}</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
