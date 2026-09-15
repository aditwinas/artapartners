import type { Metadata } from 'next';
import './globals.css';
import './website.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artapartners.id'),
  title: { default: 'ARTA Partners — Dari Masalah Bisnis Menjadi Arah yang Jelas', template: '%s | ARTA Partners' },
  description: 'ARTA Partners membantu bisnis memahami masalah, menentukan prioritas, dan membangun strategi untuk pertumbuhan yang lebih sehat dan berkelanjutan.',
  icons: {
    icon: [
      { url: '/brand/assets/ARTA-29.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/brand/assets/ARTA-26.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/brand/assets/ARTA-29.png',
    apple: '/brand/assets/ARTA-22.png',
  },
  openGraph: { siteName: 'ARTA Partners', locale: 'id_ID', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
