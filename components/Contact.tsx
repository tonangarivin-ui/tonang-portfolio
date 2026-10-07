import React from 'react';

const CONTACT_CHANNELS = [
  {
    type: 'Email',
    label: 'Kirim Email',
    value: 'tonangarivin.n8n@gmail.com',
    href: 'mailto:tonangarivin.n8n@gmail.com',
    desc: 'Untuk penawaran project atau pertanyaan teknis terperinci',
  },
  {
    type: 'Telegram',
    label: 'Pesan Singkat',
    value: '@iamtamvan',
    href: 'https://t.me/iamtamvan',
    desc: 'Untuk obrolan cepat atau konfirmasi awal project',
  },
  {
    type: 'GitHub',
    label: 'Repositori Kode',
    value: 'tonangarivin-ui',
    href: 'https://github.com/tonangarivin-ui',
    desc: 'Untuk melihat aktivitas publik dan repositori sumber',
  },
];

export const Contact: React.FC = () => {
  return (
    <section className="section-spacer" id="contact" aria-label="Kontak dan Diskusi">
      <div className="container">
        <span className="section-eyebrow">Hubungi Saya</span>
        <h2 className="section-title">Mari Bicarakan Ide atau Project Anda</h2>
        <p className="section-description">
          Apakah Anda membutuhkan website personal baru, perancangan antarmuka produk digital, atau prototype cepat? Silakan hubungi melalui kanal pilihan Anda.
        </p>

        <div className="contact-card">
          <div className="contact-channels">
            {CONTACT_CHANNELS.map((channel) => (
              <a
                key={channel.type}
                href={channel.href}
                className="channel-link"
                target={channel.type === 'Email' ? undefined : '_blank'}
                rel={channel.type === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={`${channel.label}: ${channel.value}`}
              >
                <span className="channel-label">{channel.type}</span>
                <span className="channel-value">{channel.value}</span>
                <span className="channel-desc">{channel.desc}</span>
              </a>
            ))}
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            Waktu respons: Biasanya menjawab dalam 1 hingga 2 hari kerja (zona waktu GMT+7 / WIB).
          </p>
        </div>
      </div>
    </section>
  );
};
