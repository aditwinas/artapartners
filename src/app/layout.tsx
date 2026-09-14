import type { Metadata } from 'next';
import './globals.css';
import './website.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.artapartners.id'),
  title: { default: 'ARTA Partners — Membangun Brand, Bertumbuh Bersama', template: '%s | ARTA Partners' },
  description: 'ARTA Partners mengakuisisi dan mengembangkan brand potensial melalui strategi, pendanaan, dan pengelolaan bisnis.',
  openGraph: { siteName: 'ARTA Partners', locale: 'id_ID', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
