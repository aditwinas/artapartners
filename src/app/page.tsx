import { ArrowRight, BarChart3, Building2, ChevronRight, CircleDollarSign, Compass, Layers3, LineChart, Mail, MapPin, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';

import { getSiteContent } from '@/lib/sanity';
import type { CmsIconKey } from '@/lib/site-content';

const nav = ['About', 'What We Do', 'Solutions', 'Ecosystem', 'Investment', 'Culture', 'Contact'];
const iconMap = { compass: Compass, building: Building2, zap: Zap, chart: BarChart3, workflow: Workflow, shield: ShieldCheck, layers: Layers3, growth: LineChart } satisfies Record<CmsIconKey, typeof Compass>;

function Logo({ light = false }: { light?: boolean }) {
  return <div className="flex items-center gap-3">
    <img
      src={light ? '/brand/assets/ARTA-34.png' : '/brand/assets/header-03.png'}
      alt="ARTA Partners"
      className={light ? 'h-[18px] w-auto object-contain' : 'h-[24px] w-auto object-contain'}
    />
  </div>;
}
function Badge({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`button-font inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[.14em] ${light ? 'border-white/20 bg-white/10 text-white/75' : 'border-[#1F1F1F]/10 bg-white text-[#666666]'}`}>{children}</span>;
}
function Button({ children, href = '#contact', variant = 'primary' }: { children: React.ReactNode; href?: string; variant?: 'primary' | 'dark' | 'ghost' }) {
  const cls = variant === 'primary'
    ? 'bg-[#2E6CF1] text-white hover:bg-[#1E3EAB]'
    : variant === 'dark'
      ? 'bg-[#1F1F1F] text-white hover:bg-[#2E6CF1]'
      : 'border border-[#1F1F1F]/12 bg-white text-[#1F1F1F] hover:border-[#2E6CF1]/45 hover:text-[#2E6CF1]';
  return <a href={href} className={`button-font inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm transition duration-300 ${cls}`}>{children}<ArrowRight className="h-4 w-4" /></a>;
}
function SectionHead({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="mb-12 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
    <div><Badge light={light}>{eyebrow}</Badge><h2 className={`heading-alt mt-5 max-w-3xl text-4xl leading-[1.02] tracking-[-.035em] md:text-6xl ${light ? 'text-white' : 'text-[#1F1F1F]'}`}>{title}</h2></div>
    {text && <p className={`max-w-xl text-base leading-8 lg:pt-14 ${light ? 'text-white/62' : 'text-[#666666]'}`}>{text}</p>}
  </div>;
}
function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`hairline rounded-[28px] bg-white p-6 md:p-7 ${className}`}>{children}</div>;
}

export default async function Home() {
  const content = await getSiteContent();

  return <main className="min-h-screen bg-[#F5F5F5] text-[#1F1F1F]">
    <div className="border-b border-[#1F1F1F]/10 bg-white px-4 py-2.5 text-center text-xs text-[#666666]">
      {content.announcement}
    </div>
    <header className="sticky top-0 z-50 border-b border-[#1F1F1F]/10 bg-[#F5F5F5]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home"><Logo /></a>
        <nav className="hidden items-center gap-7 text-sm text-[#666666] lg:flex">
          {nav.map(n => <a href={`#${n.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-[#2E6CF1]" key={n}>{n}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/business-checkup/" className="button-font hidden rounded-full border border-[#2E6CF1]/25 bg-white px-5 py-3 text-sm text-[#2E6CF1] transition hover:bg-[#2E6CF1] hover:text-white md:inline-flex">Business Checkup</a>
          <Button href="#contact" variant="dark">Contact</Button>
        </div>
      </div>
    </header>

    <section id="home" className="brand-dark relative overflow-hidden border-b border-white/10 text-white">
      <img src="/brand/assets/ARTA-24.png" alt="ARTA gradient" className="absolute inset-x-0 bottom-0 h-[52%] w-full object-cover opacity-80 asset-fade" />
      <img src="/brand/assets/ARTA-20.png" alt="ARTA pattern" className="absolute right-[-9%] top-20 hidden w-[420px] rounded-[42px] opacity-28 blur-[1px] lg:block" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <Badge light>{content.hero.eyebrow}</Badge>
          <h1 className="heading-alt mt-6 max-w-5xl text-5xl leading-[.98] tracking-[-.045em] md:text-7xl lg:text-[86px]">
            {content.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
            {content.hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#about">{content.hero.primaryCta}</Button>
            <a href="#ecosystem" className="button-font inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3.5 text-sm text-white backdrop-blur transition hover:bg-white/18">{content.hero.secondaryCta} <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[36px] border border-white/14 bg-white/[.08] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,.28)] backdrop-blur-xl md:p-6">
            <div className="rounded-[28px] bg-white p-5 text-[#1F1F1F]">
              <div className="flex items-center justify-between"><Logo /><span className="button-font rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[11px] uppercase tracking-[.12em] text-[#666666]">Impact dashboard</span></div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.stats.map(({ value, label }, idx) => <div key={label} className={`${idx === 1 ? 'gradient-blue text-white' : 'bg-[#F5F5F5] text-[#1F1F1F]'} rounded-3xl p-5`}>
                  <p className="text-5xl font-semibold tracking-[-.07em]">{value}</p>
                  <p className={`button-font mt-2 text-xs uppercase tracking-[.13em] ${idx === 1 ? 'text-white/62' : 'text-[#666666]'}`}>{label}</p>
                </div>)}
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-[.9fr_1.1fr]">
                <div className="rounded-3xl bg-[#F5F5F5] p-5"><p className="text-3xl font-semibold tracking-[-.06em]">{content.dashboard.foundationValue}</p><p className="mt-2 text-sm leading-6 text-[#666666]">{content.dashboard.foundationText}</p></div>
                <div className="gradient-blue rounded-3xl p-5 text-white"><p className="text-sm font-semibold">{content.dashboard.partnerTitle}</p><p className="mt-2 text-sm leading-6 text-white/65">{content.dashboard.partnerDescription}</p></div>
              </div>
            </div>
          </div>
          <div className="soft-grid absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-[32px] opacity-40" />
        </div>
      </div>
    </section>

    <section id="about" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHead eyebrow={content.about.eyebrow} title={content.about.title} text={content.about.intro} />
      <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <Card className="p-8 md:p-10">
          <p className="heading-alt text-3xl leading-[1.25] tracking-[-.025em] md:text-5xl">{content.about.bodyTitle}</p>
          <p className="mt-7 max-w-3xl leading-8 text-[#666666]">{content.about.bodyText}</p>
        </Card>
        <Card className="gradient-blue text-white">
          <Badge light>{content.about.visionEyebrow}</Badge>
          <p className="heading-alt mt-6 text-4xl leading-tight tracking-[-.035em]">{content.about.visionTitle}</p>
          <p className="mt-6 leading-7 text-white/65">{content.about.visionDescription}</p>
        </Card>
      </div>
    </section>

    <section id="what-we-do" className="border-y border-[#1F1F1F]/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow={content.workflow.eyebrow} title={content.workflow.title} text={content.workflow.description} />
        <div className="grid gap-5 md:grid-cols-3">
          {content.workflow.steps.map(({ title, subtitle, description, icon }, i) => { const Icon = iconMap[icon]; return <Card key={title} className="relative overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,31,31,.08)]">
            <span className="absolute right-6 top-5 text-7xl font-semibold tracking-[-.08em] text-[#2E6CF1]/8">0{i + 1}</span>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2E6CF1] text-white"><Icon className="h-6 w-6" /></div>
            <h3 className="heading-alt mt-9 text-4xl tracking-[-.04em]">{title}</h3>
            <p className="button-font mt-2 text-xs uppercase tracking-[.14em] text-[#2E6CF1]">{subtitle}</p>
            <p className="mt-6 leading-7 text-[#666666]">{description}</p>
          </Card>; })}
        </div>
      </div>
    </section>

    <section id="solutions" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHead eyebrow={content.solutions.eyebrow} title={content.solutions.title} text={content.solutions.description} />
      <div className="grid gap-4 lg:grid-cols-5">
        {content.solutions.items.map(({ name, type, description, icon }) => { const Icon = iconMap[icon]; return <div key={name} className="rounded-[28px] border border-[#1F1F1F]/10 bg-white p-6 transition hover:border-[#2E6CF1]/45 hover:shadow-[0_18px_50px_rgba(46,108,241,.10)]">
          <Icon className="h-6 w-6 text-[#2E6CF1]" />
          <h3 className="mt-9 text-2xl font-semibold tracking-[-.035em]">{name}</h3>
          <p className="button-font mt-2 text-[11px] uppercase tracking-[.13em] text-[#666666]">{type}</p>
          <p className="mt-5 text-sm leading-7 text-[#666666]">{description}</p>
        </div>; })}
      </div>
    </section>

    <section id="ecosystem" className="gradient-blue py-20 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow={content.ecosystem.eyebrow} title={content.ecosystem.title} text={content.ecosystem.description} light />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.brands.map(({ name, category, description }) => <div key={name} className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/[.16]">
            <div className="flex items-start justify-between gap-4">
              <div><h3 className="text-2xl font-semibold tracking-[-.035em]">{name}</h3><p className="button-font mt-2 text-[11px] uppercase tracking-[.13em] text-white/58">{category}</p></div>
              <ChevronRight className="h-5 w-5 text-white/42" />
            </div>
            <p className="mt-6 leading-7 text-white/68">{description}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section id="investment" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHead eyebrow={content.investment.eyebrow} title={content.investment.title} text={content.investment.description} />
      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <Card className="p-8 md:p-10">
          <p className="heading-alt text-3xl leading-tight tracking-[-.03em]">{content.investment.lead}</p>
          <div className="mt-7 rounded-[24px] border border-[#2E6CF1]/20 bg-[#2E6CF1]/8 p-5 text-sm leading-7 text-[#666666]">{content.investment.scheme}</div>
          <div className="mt-8 flex flex-wrap gap-3"><Button>{content.investment.primaryCta}</Button><Button variant="ghost">{content.investment.secondaryCta}</Button></div>
        </Card>
        <Card>{content.investment.focusPoints.map(x => <p key={x} className="mb-4 flex gap-3 leading-7 text-[#666666]"><CircleDollarSign className="mt-1 h-5 w-5 shrink-0 text-[#2E6CF1]" />{x}</p>)}<div className="mt-6 border-t border-[#1F1F1F]/10 pt-6"><Badge>{content.investment.riskLabel}</Badge><p className="mt-4 leading-7 text-[#666666]">{content.investment.riskMitigation}</p></div></Card>
      </div>
    </section>

    <section id="culture" className="border-y border-[#1F1F1F]/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5"><SectionHead eyebrow={content.culture.eyebrow} title={content.culture.title} text={content.culture.description} /><div className="grid gap-5 lg:grid-cols-2"><Value title={content.culture.impactTitle} items={content.culture.impactValues} /><Value title={content.culture.cermatTitle} items={content.culture.cermatValues} /></div></div>
    </section>

    <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
      <div className="gradient-blue rounded-[36px] p-6 text-white md:p-10">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div><Badge light>{content.contact.eyebrow}</Badge><h2 className="heading-alt mt-5 text-4xl leading-tight tracking-[-.04em] md:text-6xl">{content.contact.title}</h2><p className="mt-6 max-w-lg leading-8 text-white/65">{content.contact.description}</p><div className="mt-8 space-y-3 text-white/70"><p className="flex gap-3"><Mail className="h-5 w-5" />{content.contact.email}</p><p className="flex gap-3"><MapPin className="h-5 w-5" />{content.contact.location}</p></div></div>
          <form className="rounded-[28px] bg-white p-4 text-[#1F1F1F] md:p-6">
            <div className="grid gap-3 md:grid-cols-2"><Input label="Nama" /><Input label="Perusahaan / Brand" /><Input label="Nomor WhatsApp" /><Input label="Email" /><label className="md:col-span-2"><span className="text-sm font-semibold">Jenis kebutuhan</span><select className="mt-2 w-full rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3.5 outline-none"><option>Partnership</option><option>Investment</option><option>Brand Collaboration</option><option>Location Partnership</option><option>Career</option><option>Others</option></select></label><label className="md:col-span-2"><span className="text-sm font-semibold">Pesan</span><textarea className="mt-2 min-h-28 w-full rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3.5 outline-none" /></label></div>
            <button className="button-font mt-5 inline-flex items-center gap-2 rounded-full bg-[#2E6CF1] px-6 py-3.5 text-sm text-white transition hover:bg-[#1E3EAB]">{content.contact.buttonLabel} <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
    </section>

    <footer className="border-t border-[#1F1F1F]/10 px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#666666] md:flex-row md:items-center md:justify-between"><Logo /><p>{content.footerText}</p></div></footer>
  </main>;
}
function Value({ title, items }: { title: string; items: string[] }) { return <Card><div className="flex items-center justify-between"><h3 className="heading-alt text-4xl tracking-[-.04em]">{title}</h3><Sparkles className="h-5 w-5 text-[#2E6CF1]" /></div><div className="mt-6 grid grid-cols-2 gap-2">{items.map(i => <div key={i} className="rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3 text-sm font-semibold">{i}</div>)}</div></Card>; }
function Input({ label }: { label: string }) { return <label><span className="text-sm font-semibold">{label}</span><input className="mt-2 w-full rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3.5 outline-none ring-[#2E6CF1]/20 focus:ring-4" /></label>; }
