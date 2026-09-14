import type { Metadata } from 'next';
import Image from 'next/image';
import { Shell, PageHero, Arrow } from '@/components/website';
import { getWebsiteContent } from '@/lib/website';
export const metadata: Metadata = { title: 'Career', description: 'Kenali kehidupan kerja dan budaya IMPACT di ARTA Partners, Yogyakarta.' };
export default async function Career() {
  const c = await getWebsiteContent();
  return <Shell content={c}><PageHero label="CAREER / OUR OFFICE" title={c.officeTitle} description={c.officeIntro} />
    <section className="office-section container"><div className="office-panel">{c.officeImage ? <Image src={c.officeImage} alt="Kantor ARTA Partners" fill sizes="(max-width:700px) 100vw, 60vw" /> : <><Image src="/brand/assets/ARTA-26.png" alt="" width={120} height={120} /><p>Ruang untuk ide.<br />Ruang untuk tumbuh.</p><span>ARTA PARTNERS</span></>}</div><div className="office-copy"><p className="eyebrow">OUR OFFICE</p><h2>{c.officeLocation}</h2><p>{c.officeAddress || 'Bertemu, berbagi ide, dan bekerja bersama untuk mengembangkan brand.'}</p>{c.officeMap && <a className="text-link" href={c.officeMap}>Lihat Lokasi Kantor<Arrow /></a>}<a className="text-link" href={`mailto:${c.email}?subject=Informasi%20karier%20ARTA%20Partners`}>Tanya Kesempatan Berkarier<Arrow /></a></div></section>
    <section className="section culture-section" id="culture"><div className="container"><div className="section-intro"><p className="eyebrow">OUR CULTURE</p><div><h2>{c.cultureTitle}</h2><p className="section-description">{c.cultureIntro}</p></div></div><div className="impact-grid">{c.values.map(v => <article key={v.name}><span aria-hidden="true">{v.name[0]}</span><h3>{v.name}</h3><p>{v.description}</p></article>)}</div></div></section>
  </Shell>;
}
