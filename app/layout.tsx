import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SkipLink } from '../components/SkipLink';

export const metadata: Metadata = {
  title: 'Tonang Arivin | AI-Assisted Full-Stack Developer',
  description:
    'Portfolio personal Tonang Arivin, AI-Assisted Full-Stack Developer dari Jember, Jawa Timur. Merancang dan membangun website serta produk digital.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('tonang-theme');
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
      </head>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
