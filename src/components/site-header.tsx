'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [['/', 'Home'], ['/about-us/', 'About Us'], ['/our-brands/', 'Our Brands'], ['/career/', 'Career']];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname().replace(/\/$/, '') || '/';
  return <header className="site-header"><div className="site-header-inner">
    <Link href="/" className="site-logo" aria-label="ARTA Partners — Home" onClick={() => setOpen(false)}><Image src="/brand/assets/ARTA-35.png" alt="ARTA Partners" width={210} height={26} priority /></Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'Tutup' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="site-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Navigasi utama" onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}>
      {links.map(([href, label]) => <Link key={href} href={href} aria-current={path === (href.replace(/\/$/, '') || '/') ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
  </div></header>;
}
