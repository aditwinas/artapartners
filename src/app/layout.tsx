import type { Metadata } from 'next';
import './globals.css';
import './website.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artapartners.id'),
  title: { default: 'ARTA Partners — Dari Masalah Bisnis Menjadi Arah yang Jelas', template: '%s | ARTA Partners' },
  description: 'ARTA Partners membantu bisnis memahami masalah, menentukan prioritas, dan membangun strategi untuk pertumbuhan yang lebih sehat dan berkelanjutan.',
  openGraph: { siteName: 'ARTA Partners', locale: 'id_ID', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
