import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'ARTA Partners — Strategic Brand Partner', description: 'Strategic Brand Partner untuk pertumbuhan bisnis yang tangguh dan berkelanjutan.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
