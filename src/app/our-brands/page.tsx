import type { Metadata } from 'next';
import { Shell, PageHero, BrandVisual, TextLink } from '@/components/website';
import { getWebsiteContent } from '@/lib/website';
export const metadata: Metadata = { title: 'Our Brands', description: 'Kenali Sebelas Coffee, Tunas Mekar Dental, Snapobox, Balcos, dan Zona Massage dalam ekosistem ARTA Partners.' };
export default async function Brands() {
  const c = await getWebsiteContent();
  return <Shell content={c}><PageHero label="OUR BRANDS" title={c.brandsTitle} description={c.brandsIntro} />
    <nav className="brand-index container" aria-label="Pilih brand">{c.brands.map(b => <a href={`#${b.slug}`} key={b.slug}>{b.name}<span aria-hidden="true">↓</span></a>)}</nav>
    <div className="container brand-details">{c.brands.map((b, i) => <section className="brand-detail" id={b.slug} key={b.slug}><BrandVisual brand={b} index={i} priority={i === 0} /><div className="brand-detail-copy"><p className="eyebrow">{b.category}</p><h2>{b.name}</h2><h3>{b.headline}</h3><p>{b.description}</p>{b.workOn && <div className="brand-work"><h4 className="eyebrow">WHAT WE WORK ON</h4><p>{b.workOn}</p></div>}{(b.city || b.founded) && <dl className="brand-facts">{b.city && <div><dt>Berawal di</dt><dd>{b.city}</dd></div>}{b.founded && <div><dt>Berdiri sejak</dt><dd>{b.founded}</dd></div>}</dl>}{b.url && <TextLink href={b.url}>Kunjungi {b.name}</TextLink>}</div></section>)}</div>
  </Shell>;
}
