import React from 'react';

const TOOLS = [
  {
    name: 'Hermes Agent',
    role: 'Autonomous problem solving dan eksekusi tugas multi-langkah untuk mempercepat penyelesaian isu teknis yang rumit.',
  },
  {
    name: 'OpenCode',
    role: 'AI coding environment untuk scaffolding arsitektur awal, perbaikan bug cepat, dan refactoring modular.',
  },
  {
    name: 'Antigravity',
    role: 'Orchestration dan pengembangan terstruktur dengan standar ketat terhadap kebersihan kode dan pencegahan antipattern.',
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section className="section-spacer" id="capabilities" aria-label="Tools dan Kemampuan">
      <div className="container">
        <span className="section-eyebrow">Alat & Kapabilitas</span>
        <h2 className="section-title">AI Tools dalam Alur Kerja Nyata</h2>
        <p className="section-description">
          Bekerja berdampingan dengan AI tools bukan berarti menyerahkan kendali penuh, melainkan melipatgandakan kecepatan iterasi dengan tetap memegang kendali atas kualitas kode dan pengalaman visual.
        </p>

        <div className="capabilities-wrapper">
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Setiap alat digunakan sesuai kekuatannya untuk menghasilkan kode yang bersih, cepat diakses di perangkat mobile, dan mudah dikembangkan lebih lanjut.
          </p>

          <div className="capabilities-list">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="tool-item">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-role">{tool.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
