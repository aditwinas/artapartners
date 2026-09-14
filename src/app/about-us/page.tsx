import type { Metadata } from 'next';
import { Shell, PageHero, Process, TextLink } from '@/components/website';
import { getWebsiteContent } from '@/lib/website';
export const metadata: Metadata = { title: 'About Us', description: 'Visi, misi, dan cara ARTA Partners mengembangkan brand melalui kemitraan strategis.' };
export default async function About() {
  const c = await getWebsiteContent();
  return <Shell content={c}><PageHero label="ABOUT US / OUR VISION" title={c.visionTitle} description={c.vision} />
    <section className="section container"><div className="section-intro"><p className="eyebrow">OUR MISSION</p><div><h2>{c.missionTitle}</h2><p className="section-description">{c.missionIntro}</p><ol className="mission-list">{c.missions.map((m, i) => <li key={m}><span>0{i + 1}</span><p>{m}</p></li>)}</ol></div></div></section>
    <section className="section blue-section" id="process"><div className="container"><div className="section-intro"><p className="eyebrow">OUR PROCESS</p><div><h2>{c.processTitle}</h2><p className="section-description">{c.processIntro}</p></div></div><Process content={c} detailed /><TextLink href="/business-checkup/">Mulai Business Checkup</TextLink></div></section>
    <section className="section container" id="how-we-work"><div className="section-intro"><p className="eyebrow">HOW ARTA WORKS WITH OUR BRANDS</p><div><h2>{c.workTitle}</h2><p className="section-description">{c.workIntro}</p></div></div><div className="work-heading"><h2>Build the brand.<br />Grow the business.</h2><p>Kami terlibat di berbagai sisi yang membuat sebuah brand bisa tumbuh:</p></div><div className="work-grid">{c.workAreas.map((area, i) => <article key={area.title}><span className="eyebrow">0{i + 1}</span><h3>{area.title}</h3><p>{area.description}</p></article>)}</div><TextLink href="/our-brands/">Kenali Setiap Brand</TextLink></section>
  </Shell>;
}
