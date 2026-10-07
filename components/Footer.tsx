import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">Tonang Arivin</span>
            <p className="footer-location">
              AI-Assisted Full-Stack Developer • Jember, Jawa Timur, Indonesia (GMT+7)
            </p>
          </div>

          <div className="footer-links" aria-label="Tautan Kontak Footer">
            <a
              href="mailto:tonangarivin.n8n@gmail.com"
              className="footer-link"
              aria-label="Kirim email ke tonangarivin.n8n@gmail.com"
            >
              Email
            </a>
            <a
              href="https://t.me/iamtamvan"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Buka Telegram @iamtamvan di tab baru"
            >
              Telegram
            </a>
            <a
              href="https://github.com/tonangarivin-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Buka GitHub tonangarivin-ui di tab baru"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Hak cipta © Tonang Arivin. Semua hak dilindungi.</span>
          <span>Dibuat dengan Next.js dan TypeScript.</span>
        </div>
      </div>
    </footer>
  );
};
