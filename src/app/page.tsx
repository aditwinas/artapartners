import Image from 'next/image';
import { Shell, TextLink, BrandGrid, Process } from '@/components/website';
import { getWebsiteContent } from '@/lib/website';
export default async function Home() {
  const c = await getWebsiteContent();
  return <Shell content={c}>
    <section className="home-hero" id="home"><div className="container"><p className="eyebrow">ARTA PARTNERS — STRATEGIC BRAND PARTNER</p><h1>{c.heroTitle}</h1><div className="hero-bottom"><span>Berawal dari potensi.<br />Bergerak bersama.</span><a href="#what-we-do" className="scroll-link" aria-label="Jelajahi tentang ARTA"><span>Jelajahi ARTA</span><span aria-hidden="true">↓</span></a></div></div></section>
    <section className="section container" id="what-we-do"><div className="section-intro"><p className="eyebrow">WHAT WE DO</p><div><h2>{c.whatTitle}</h2><p className="section-description">{c.overview}</p><TextLink href="/about-us/">Kenali Cara Kerja Kami</TextLink></div></div><Process content={c} /></section>
    <section className="section brands-section" id="ecosystem"><div className="container"><div className="section-intro"><p className="eyebrow">BRANDS WE MANAGE</p><div><h2>{c.brandsTitle}</h2><p className="section-description">{c.brandsIntro}</p></div></div><BrandGrid content={c} /><div className="section-end"><TextLink href="/our-brands/">Jelajahi Brand Kami</TextLink></div></div></section>
    <section className="section container" id="team"><div className="team-layout"><div><p className="eyebrow">OUR TEAM</p><h2>{c.teamTitle}</h2><p className="section-description">{c.teamIntro}</p><TextLink href="/career/">Kenali Budaya Kami</TextLink></div><div className="team-statement"><Image src="/brand/assets/ARTA-26.png" alt="" width={100} height={100} /><p>Satu visi.<br />Beragam keahlian.<br /><strong>Tumbuh bersama.</strong></p></div></div>{c.team.length > 0 && <div className="people-grid">{c.team.map(person => <article key={person.name}>{person.image && <div className="person-image"><Image src={person.image} alt={person.name} fill sizes="(max-width:700px) 100vw, 33vw" /></div>}<h3>{person.name}</h3><p>{person.role}</p></article>)}</div>}</section>
  </Shell>;
}
