import React from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Web Design & Development',
    description:
      'Website personal, portofolio, dan landing page bisnis yang cepat dimuat, mudah dirawat, dan nyaman diakses di ponsel.',
  },
  {
    num: '02',
    title: 'Product Design',
    description:
      'Perancangan alur pengguna (user flow), wireframe antarmuka, dan tata letak aplikasi digital yang fokus pada kemudahan pemakaian.',
  },
  {
    num: '03',
    title: 'AI-Assisted Prototyping',
    description:
      'Pengejawantahan ide menjadi prototype interaktif fungsional dalam waktu singkat menggunakan bantuan AI coding tools modern.',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="section-spacer" id="services" aria-label="Layanan yang Dikerjakan">
      <div className="container">
        <span className="section-eyebrow">Layanan</span>
        <h2 className="section-title">Solusi yang Dapat Dikerjakan</h2>
        <p className="section-description">
          Fokus pada pengerjaan web dan produk digital yang fungsional, bersih, dan sesuai kebutuhan nyata tanpa janji pemasaran muluk.
        </p>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.num} className="service-card">
              <span className="service-num">{service.num}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
