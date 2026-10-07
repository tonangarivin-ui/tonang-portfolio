import React from 'react';

const CONTACT_CHANNELS = [
  {
    type: 'Email',
    label: 'Kirim Email Terperinci',
    value: 'tonangarivin.n8n@gmail.com',
    href: 'mailto:tonangarivin.n8n@gmail.com',
    desc: 'Untuk penawaran project, spesifikasi teknis, atau lingkup kolaborasi terperinci.',
    actionLabel: 'Tulis Email',
  },
  {
    type: 'Telegram',
    label: 'Pesan Singkat Telegram',
    value: '@iamtamvan',
    href: 'https://t.me/iamtamvan',
    desc: 'Untuk diskusi cepat, tanya jawab singkat, atau konfirmasi ketersediaan waktu.',
    actionLabel: 'Buka Telegram',
  },
  {
    type: 'GitHub',
    label: 'Repositori Kode Publik',
    value: 'tonangarivin-ui',
    href: 'https://github.com/tonangarivin-ui',
    desc: 'Untuk meninjau aktivitas kode publik dan eksperimen komponen sumber terbuka.',
    actionLabel: 'Kunjungi GitHub',
  },
];

export const Contact: React.FC = () => {
  return (
    <section className="section-spacer contact-section" id="contact" aria-label="Kontak dan Diskusi">
      <div className="container">
        <div className="section-header-editorial">
          <div className="section-meta-index">
            <span className="index-num">06</span>
            <span className="index-label">Jalur Komunikasi</span>
          </div>
          <h2 className="section-title">Mari Bicarakan Ide atau Project Anda</h2>
          <p className="section-description">
            Apakah Anda membutuhkan website personal baru, perancangan antarmuka produk digital, atau pembuatan prototype cepat? Silakan hubungi langsung melalui kanal yang paling nyaman bagi Anda.
          </p>
        </div>

        <div className="contact-editorial-panel">
          <div className="contact-intro-strip">
            <div className="contact-intro-item">
              <span className="intro-key">Ketersediaan</span>
              <span className="intro-val">Terbuka untuk Project Baru</span>
            </div>
            <div className="contact-intro-item">
              <span className="intro-key">Estimasi Balasan</span>
              <span className="intro-val">1 sampai 2 hari kerja</span>
            </div>
            <div className="contact-intro-item">
              <span className="intro-key">Basis Lokasi</span>
              <span className="intro-val">Jember, Jawa Timur (GMT+7)</span>
            </div>
          </div>

          <div className="contact-channels-ledger" role="list" aria-label="Kanal Komunikasi Langsung">
            {CONTACT_CHANNELS.map((channel) => (
              <a
                key={channel.type}
                href={channel.href}
                className="contact-channel-row"
                target={channel.type === 'Email' ? undefined : '_blank'}
                rel={channel.type === 'Email' ? undefined : 'noopener noreferrer'}
                aria-label={`${channel.label}: ${channel.value}`}
                role="listitem"
              >
                <div className="channel-id-cell">
                  <span className="channel-type-tag">{channel.type}</span>
                  <span className="channel-val-text">{channel.value}</span>
                </div>

                <div className="channel-desc-cell">
                  <p className="channel-desc-text">{channel.desc}</p>
                </div>

                <div className="channel-action-cell">
                  <span className="channel-cta-label">{channel.actionLabel}</span>
                  <span className="channel-cta-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-footer-note">
            <p>
              Tidak menggunakan form backend berbelit. Komunikasi langsung melalui email atau pesan singkat memastikan respons personal tanpa perantara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
