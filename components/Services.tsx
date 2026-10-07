import React from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Web Design & Development',
    category: 'Website & Landing Page',
    description:
      'Membangun website personal, portofolio, dan landing page bisnis yang cepat dimuat, mudah dirawat, dan nyaman diakses di ponsel. Struktur HTML semantik dengan kepatuhan kontras WCAG AA.',
    deliverables: [
      'Website responsif mobile-first',
      'Optimasi kecepatan muat dan performa',
      'Desain editorial dengan kode bersih',
    ],
  },
  {
    num: '02',
    title: 'Product Design',
    category: 'Antarmuka & Pengalaman Pengguna',
    description:
      'Perancangan alur pengguna (user flow), tata letak antarmuka aplikasi digital, dan komponen interaktif yang mengutamakan kejelasan hierarki serta kenyamanan pemakaian.',
    deliverables: [
      'Wireframe dan arsitektur informasi',
      'Komponen UI fungsional dan konsisten',
      'Hierarki visual yang teruji di berbagai layar',
    ],
  },
  {
    num: '03',
    title: 'AI-Assisted Prototyping',
    category: 'Eksplorasi Ide Cepat',
    description:
      'Mengubah ide dan konsep abstrak menjadi prototype digital interaktif yang siap diuji dalam hitungan hari dengan memanfaatkan AI coding tools modern secara terarah.',
    deliverables: [
      'Prototype web interaktif siap coba',
      'Validasi fitur dan alur kerja aplikasi',
      'Eksplorasi konsep tanpa beban birokrasi',
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section className="section-spacer services-section" id="services" aria-label="Layanan yang Dikerjakan">
      <div className="container">
        <div className="section-header-editorial">
          <div className="section-meta-index">
            <span className="index-num">03</span>
            <span className="index-label">Layanan & Solusi</span>
          </div>
          <h2 className="section-title">Kapabilitas yang Ditawarkan</h2>
          <p className="section-description">
            Fokus pada pembuatan website dan produk digital yang fungsional, bersih, dan sesuai kebutuhan nyata tanpa janji pemasaran berlebihan.
          </p>
        </div>

        {/* Editorial Ledger / Table Layout instead of repeated cards */}
        <div className="services-ledger" role="list" aria-label="Daftar Layanan">
          {SERVICES.map((service) => (
            <article key={service.num} className="service-row" role="listitem">
              <div className="service-col-num">
                <span className="service-num-display">{service.num}</span>
              </div>

              <div className="service-col-title">
                <span className="service-category-tag">{service.category}</span>
                <h3 className="service-title-display">{service.title}</h3>
              </div>

              <div className="service-col-desc">
                <p className="service-desc-text">{service.description}</p>
              </div>

              <div className="service-col-deliverables">
                <span className="deliverables-heading">Output Utama:</span>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <span className="bullet-mark" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
