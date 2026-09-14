import type { Metadata } from 'next';
import { Shell, PageHero, Process, TextLink } from '@/components/website';
import { getWebsiteContent } from '@/lib/website';
export const metadata: Metadata = { title: 'About Us', description: 'Visi, misi, dan cara ARTA Partners mengembangkan brand melalui kemitraan strategis.' };
export default async function About() {
  const c = await getWebsiteContent();
  return <Shell content={c}><PageHero label="ABOUT US / OUR VISION" title={c.visionTitle} description={c.vision} />
    <section className="section container"><div className="section-intro"><p className="eyebrow">OUR MISSION</p><div><h2>{c.missionTitle}</h2><p className="section-description">{c.missionIntro}</p><ol className="mission-list">{c.missions.map((m, i) => <li key={m}><span>0{i + 1}</span><p>{m}</p></li>)}</ol></div></div></section>
    <section className="section blue-section" id="process"><div className="container"><div className="section-intro"><p className="eyebrow">OUR PROCESS</p><h2>{c.processTitle}</h2></div><Process content={c} detailed /><TextLink href="/business-checkup/">Mulai Business Checkup</TextLink></div></section>
    <section className="section container" id="milestone"><div className="section-intro"><p className="eyebrow">MILESTONE</p><div><h2>{c.milestoneTitle}</h2><div className="milestone-list">{c.milestones.map(m => <article key={`${m.year}-${m.title}`}><span>{m.year}</span><div><h3>{m.title}</h3><p>{m.description}</p></div></article>)}</div><TextLink href="/our-brands/">Kenali Setiap Brand</TextLink></div></div></section>
  </Shell>;
}
