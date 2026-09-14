import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { SiteHeader } from './site-header';
import type { Brand, WebsiteContent } from '@/lib/website-content';
export function Arrow() { return <span aria-hidden="true" className="link-arrow">↗</span>; }
export function TextLink({ href, children }: { href: string; children: ReactNode }) { return <Link className="text-link" href={href}>{children}<Arrow /></Link>; }
export function Shell({ content, children }: { content: WebsiteContent; children: ReactNode }) {
  const v = content.visual;
  const style = { '--arta-gradient': `linear-gradient(115deg, ${v.gradientStart} 0%, ${v.gradientEnd} 100%)` } as CSSProperties;
  return <div className="arta-website" style={style} data-hero-align={v.heroAlignment} data-hero-size={v.heroSize} data-spacing={v.sectionSpacing}><a className="skip-link" href="#main-content">Lewati ke konten</a><SiteHeader /><main id="main-content">{children}</main><footer className="site-footer" id="contact">
    <div className="container footer-top"><div><p className="eyebrow">LET’S GROW TOGETHER</p><h2>Punya potensi.<br />Mari kembangkan.</h2><a className="text-link" href={`mailto:${content.email}`}>Diskusikan Bisnis Anda<Arrow /></a></div><div className="footer-contact"><p>ARTA Partners</p><a href={`mailto:${content.email}`}>{content.email}</a><span>{content.officeLocation}</span><Link href="/business-checkup/">Business Checkup <Arrow /></Link></div></div>
    <div className="container footer-bottom"><Link href="/" aria-label="ARTA Partners — Home"><Image src="/brand/assets/ARTA-35.png" alt="ARTA Partners" width={176} height={24} /></Link><span>Strategic partner. Sustainable growth.</span><span>© {new Date().getFullYear()} ARTA Partners</span></div>
  </footer></div>;
}
export function PageHero({ label, title, description }: { label: string; title: string; description?: string }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow">{label}</p><h1>{title}</h1>{description && <p className="hero-description">{description}</p>}</div></section>;
}
export function BrandVisual({ brand, index, priority = false }: { brand: Brand; index: number; priority?: boolean }) {
  return <div className={`brand-visual brand-tone-${index % 5}`}>
    {brand.image ? <Image src={brand.image} alt={brand.imageAlt || brand.name} fill sizes="(max-width: 700px) 100vw, 50vw" priority={priority} /> : <><span className="brand-visual-label">ARTA PARTNERS / OUR BRANDS</span><span className="brand-wordmark">{brand.name}</span><span className="brand-visual-category">{brand.category}</span><span className="brand-visual-number">0{index + 1}</span></>}
  </div>;
}
export function BrandGrid({ content }: { content: WebsiteContent }) {
  return <div className="brand-grid">{content.brands.map((brand, i) => <Link className="brand-card" href={`/our-brands/#${brand.slug}`} key={brand.slug}><BrandVisual brand={brand} index={i} /><div className="brand-caption"><div><h3>{brand.name}</h3><p>{brand.summary || brand.headline}</p></div><Arrow /></div></Link>)}</div>;
}
export function Process({ content, detailed = false }: { content: WebsiteContent; detailed?: boolean }) {
  return <ol className={`process-list ${detailed ? 'process-detailed' : ''}`}>{content.steps.map((step, i) => <li key={`${i}-${step.title}`}><span className="process-number">0{i + 1}</span><h3>{step.title}</h3><p>{detailed ? step.detail : step.description}</p></li>)}</ol>;
}
