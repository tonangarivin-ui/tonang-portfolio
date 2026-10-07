import React from 'react';

const TOOLS = [
  {
    name: 'Hermes Agent',
    category: 'Autonomous Problem Solving',
    role: 'Eksekusi tugas multi-langkah dan pemecahan kendala teknis kompleks secara mandiri untuk mempercepat penyelesaian isu arsitektur.',
    benefit: 'Mengurangi waktu debugging dan memvalidasi logika alur aplikasi.',
  },
  {
    name: 'OpenCode',
    category: 'AI Coding Environment',
    role: 'Scaffolding struktur project awal, pembuatan modul komponen antarmuka, dan perbaikan kode secara cepat dan terisolasi.',
    benefit: 'Menghilangkan pekerjaan boilerplate repetitif sehingga fokus tetap pada kejelasan produk.',
  },
  {
    name: 'Antigravity',
    category: 'Structured Orchestration',
    role: 'Pengembangan terarah dengan standar kebersihan kode tinggi, pencegahan antipattern AI, serta verifikasi konsistensi komponen.',
    benefit: 'Memastikan hasil akhir memiliki standar manusiawi dan bebas dari pola generik template.',
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section className="section-spacer capabilities-section" id="capabilities" aria-label="Alat dan Kapabilitas">
      <div className="container">
        <div className="section-header-editorial">
          <div className="section-meta-index">
            <span className="index-num">04</span>
            <span className="index-label">Alat & Kapabilitas</span>
          </div>
          <h2 className="section-title">AI Tools dalam Alur Kerja Nyata</h2>
          <p className="section-description">
            Bekerja berdampingan dengan AI tools bukan berarti menyerahkan kendali penuh, melainkan melipatgandakan kecepatan iterasi dengan tetap memegang kendali atas kualitas kode dan pengalaman visual.
          </p>
        </div>

        <div className="capabilities-editorial-matrix">
          <div className="matrix-lead-card">
            <h3 className="matrix-lead-title">Keseimbangan Intuisi & Otomasi</h3>
            <p className="matrix-lead-desc">
              Setiap alat di bawah ini digunakan secara spesifik sesuai perannya. Kode yang dihasilkan selalu ditinjau manual untuk memastikan struktur semantik, performa ringan, dan kenyamanan responsif di berbagai perangkat.
            </p>
          </div>

          <div className="tools-matrix-list" role="list" aria-label="Daftar Tools AI yang Digunakan">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="tool-row" role="listitem">
                <div className="tool-header-col">
                  <span className="tool-category-badge">{tool.category}</span>
                  <h4 className="tool-name-heading">{tool.name}</h4>
                </div>

                <div className="tool-desc-col">
                  <p className="tool-role-text">{tool.role}</p>
                </div>

                <div className="tool-benefit-col">
                  <span className="benefit-label">Dampak:</span>
                  <p className="benefit-text">{tool.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
