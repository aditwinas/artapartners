import { ArrowRight, BarChart3, Building2, CheckCircle2, ChevronRight, CircleDollarSign, Compass, Layers3, LineChart, Mail, MapPin, ShieldCheck, Sparkles, Target, Workflow, Zap } from 'lucide-react';

const nav = ['About', 'What We Do', 'Solutions', 'Ecosystem', 'Investment', 'Culture', 'Contact'];
const stats = [
  ['01', 'Business Checkup'],
  ['05', 'Brand Ecosystem'],
  ['360°', 'Growth Operations'],
  ['ID', 'Indonesia Market'],
];
const steps = [
  ['Identify', 'Business Checkup', 'Membaca performa, operasional, keuangan, pasar, customer behavior, brand positioning, dan peluang pertumbuhan.', Compass],
  ['Partner', 'Strategic Collaboration', 'Membangun kerja sama strategis dengan brand, owner, investor, partner lokasi, komunitas, dan stakeholder.', Building2],
  ['Accelerate', 'Development & Booster', 'Mempercepat pertumbuhan melalui sistem, marketing, operasional, finansial, development, dan eksekusi terukur.', Zap],
];
const solutions = [
  ['ARTAinsight', 'Strategic Consulting', 'Keputusan yang lebih tajam, realistis, dan berbasis data.', BarChart3],
  ['ARTAknowledge', 'Digital Product Enablement', 'Knowledge, template, sistem kerja, dan digital tools agar bisnis lebih rapi.', Workflow],
  ['ARTAcore', 'Financial & Operational System', 'Financial, operational, reporting, dan backend management untuk scale up.', ShieldCheck],
  ['ARTAos™', 'Full Service 360 Management', 'Manajemen end-to-end untuk operasional, finance, marketing, creative, dan development.', Layers3],
  ['ARTAccelerate', 'Marketing & Development Booster', 'Campaign, aktivasi, pengembangan pasar, dan akuisisi pelanggan.', LineChart],
];
const brands = [
  ['Sebelas Coffee', 'F&B', 'Coffee shop accessible untuk anak muda, mahasiswa, pelajar, pekerja muda, dan komunitas.'],
  ['Snapobox', 'Photobox', 'Pengalaman foto instan di coffee shop, lifestyle space, area kampus, dan pusat keramaian.'],
  ['Tunas Mekar Dental', 'Dental & Health', 'B2B dental, distribusi produk, support pembukaan klinik, dan health-related business.'],
  ['Balcos Compound', 'Commercial Compound', 'Lifestyle compound untuk komunitas, tenant, event, dan traffic-based activity.'],
  ['Zona Massage', 'Wellness', 'Wellness dan body care melalui massage, homecare, retention, dan customer experience.'],
];
const focus = [
  'Expansion CAPEX: outlet, booth, box, equipment, renovation, dan aset produktif.',
  'Technology & Shared Service: sistem, tools, reporting, dashboard, dan workflow internal.',
  'Working Capital & Reserve: cadangan operasional untuk stabilitas cash flow.',
];
const impact = ['Inisiatif', 'Mutual', 'Praktis', 'Adaptif', 'Cerdas', 'Tuntas'];
const cermat = ['Cari akar masalah', 'Efektifkan proses', 'Rinci dan rapi', 'Mengukur dampak', 'Akurat', 'Teliti'];

function Logo({ light = false }: { light?: boolean }) {
  return <div className="flex items-center gap-3">
    <div className="arta-mark h-9 w-9 rounded-xl" />
    <div className="leading-none">
      <p className={`text-[22px] font-medium tracking-[-.04em] ${light ? 'text-white' : 'text-[#1F1F1F]'}`}>ARTA <span className="font-normal">Partners</span></p>
      <p className={`button-font mt-1 text-[10px] uppercase tracking-[.22em] ${light ? 'text-white/55' : 'text-[#666666]'}`}>Strategic Brand Partner</p>
    </div>
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

export default function Home() {
  return <main className="min-h-screen bg-[#F5F5F5] text-[#1F1F1F]">
    <div className="border-b border-[#1F1F1F]/10 bg-white px-4 py-2.5 text-center text-xs text-[#666666]">
      ARTA Partners — trusted strategic partner dedicated to sustainable growth.
    </div>
    <header className="sticky top-0 z-50 border-b border-[#1F1F1F]/10 bg-[#F5F5F5]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home"><Logo /></a>
        <nav className="hidden items-center gap-7 text-sm text-[#666666] lg:flex">
          {nav.map(n => <a href={`#${n.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-[#2E6CF1]" key={n}>{n}</a>)}
        </nav>
        <Button href="#contact" variant="dark">Contact</Button>
      </div>
    </header>

    <section id="home" className="relative overflow-hidden border-b border-[#1F1F1F]/10">
      <div className="absolute right-[-18%] top-[-30%] h-[680px] w-[680px] rounded-full bg-[#2E6CF1]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <Badge>The Strategic Brand Partner</Badge>
          <h1 className="heading-alt mt-6 max-w-5xl text-5xl leading-[.98] tracking-[-.045em] md:text-7xl lg:text-[86px]">
            Partner strategis untuk brand yang siap bertumbuh lebih rapi, kuat, dan berkelanjutan.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#666666]">
            ARTA Partners membantu brand potensial bertumbuh melalui business checkup, partnership, penguatan sistem, manajemen operasional, strategi finansial, marketing development, dan akselerasi bisnis yang terukur.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#about">Kenali ARTA</Button>
            <Button href="#ecosystem" variant="ghost">Lihat Brand Kami</Button>
          </div>
        </div>
        <div className="relative">
          <div className="gradient-blue rounded-[36px] p-8 text-white shadow-[0_30px_80px_rgba(18,28,100,.22)] md:p-10">
            <Logo light />
            <div className="mt-20 grid gap-4 sm:grid-cols-2">
              {stats.map(([n, l]) => <div key={l} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-5xl font-semibold tracking-[-.07em]">{n}</p>
                <p className="button-font mt-2 text-xs uppercase tracking-[.13em] text-white/62">{l}</p>
              </div>)}
            </div>
            <div className="mt-8 rounded-3xl bg-white p-5 text-[#1F1F1F]">
              <p className="text-sm font-semibold">Four foundational pillars</p>
              <p className="mt-2 text-sm leading-6 text-[#666666]">Strategy, system, capital readiness, and execution working in synergy to acquire and grow high-potential brands.</p>
            </div>
          </div>
          <div className="soft-grid absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-[32px]" />
        </div>
      </div>
    </section>

    <section id="about" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHead eyebrow="Who We Are" title="ARTA bukan agency, bukan holding pasif." text="ARTA adalah partner strategis yang ikut membangun, membenahi, dan mengakselerasi brand potensial." />
      <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
        <Card className="p-8 md:p-10">
          <p className="heading-alt text-3xl leading-[1.25] tracking-[-.025em] md:text-5xl">Kami membantu brand membangun fondasi bisnis yang lebih kuat melalui strategi, sistem operasional, manajemen finansial, marketing, creative, development, dan eksekusi lintas fungsi.</p>
          <p className="mt-7 max-w-3xl leading-8 text-[#666666]">Dengan pendekatan praktis, adaptif, dan berbasis data, ARTA membantu brand membaca peluang pasar, memperbaiki sistem internal, dan mengakselerasi pertumbuhan secara lebih terarah.</p>
        </Card>
        <Card className="gradient-blue text-white">
          <Badge light>Our Vision</Badge>
          <p className="heading-alt mt-6 text-4xl leading-tight tracking-[-.035em]">Trusted Strategic Partner for Sustainable Growth.</p>
          <p className="mt-6 leading-7 text-white/65">Empat pilar identitas ARTA bekerja dalam sinergi untuk memberi edge dan kompetensi dalam mengembangkan brand potensial.</p>
        </Card>
      </div>
    </section>

    <section id="what-we-do" className="border-y border-[#1F1F1F]/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="What We Do" title="Identify. Partner. Accelerate." text="Tiga tahapan utama untuk membaca kondisi bisnis, membangun kolaborasi, lalu mengakselerasi pertumbuhan." />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([title, sub, text, Icon]: any, i) => <Card key={title} className="relative overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,31,31,.08)]">
            <span className="absolute right-6 top-5 text-7xl font-semibold tracking-[-.08em] text-[#2E6CF1]/8">0{i + 1}</span>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2E6CF1] text-white"><Icon className="h-6 w-6" /></div>
            <h3 className="heading-alt mt-9 text-4xl tracking-[-.04em]">{title}</h3>
            <p className="button-font mt-2 text-xs uppercase tracking-[.14em] text-[#2E6CF1]">{sub}</p>
            <p className="mt-6 leading-7 text-[#666666]">{text}</p>
          </Card>)}
        </div>
      </div>
    </section>

    <section id="solutions" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHead eyebrow="Business Solutions" title="Solusi bisnis modular, rapi, dan scalable." text="Dari strategic consulting hingga full-service 360 business management." />
      <div className="grid gap-4 lg:grid-cols-5">
        {solutions.map(([name, type, text, Icon]: any) => <div key={name} className="rounded-[28px] border border-[#1F1F1F]/10 bg-white p-6 transition hover:border-[#2E6CF1]/45 hover:shadow-[0_18px_50px_rgba(46,108,241,.10)]">
          <Icon className="h-6 w-6 text-[#2E6CF1]" />
          <h3 className="mt-9 text-2xl font-semibold tracking-[-.035em]">{name}</h3>
          <p className="button-font mt-2 text-[11px] uppercase tracking-[.13em] text-[#666666]">{type}</p>
          <p className="mt-5 text-sm leading-7 text-[#666666]">{text}</p>
        </div>)}
      </div>
    </section>

    <section id="ecosystem" className="gradient-blue py-20 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Brand Ecosystem" title="Multi-brand ecosystem dengan operating depth." text="ARTA mengembangkan brand dari F&B, photobox, dental, commercial compound, hingga wellness." light />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brands.map(([name, cat, text]) => <div key={name} className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/[.16]">
            <div className="flex items-start justify-between gap-4">
              <div><h3 className="text-2xl font-semibold tracking-[-.035em]">{name}</h3><p className="button-font mt-2 text-[11px] uppercase tracking-[.13em] text-white/58">{cat}</p></div>
              <ChevronRight className="h-5 w-5 text-white/42" />
            </div>
            <p className="mt-6 leading-7 text-white/68">{text}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section id="investment" className="mx-auto max-w-7xl px-5 py-20">
      <SectionHead eyebrow="Investment with ARTA" title="Peluang investasi untuk ekspansi brand yang sudah berjalan." text="Untuk qualified investor yang ingin berpartisipasi dalam pertumbuhan ekosistem brand ARTA melalui struktur kerja sama resmi." />
      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <Card className="p-8 md:p-10">
          <p className="heading-alt text-3xl leading-tight tracking-[-.03em]">Fokus pendanaan ARTA bukan membangun bisnis dari nol atau sekadar “bakar uang”, tetapi mendukung ekspansi brand yang telah berjalan.</p>
          <div className="mt-7 rounded-[24px] border border-[#2E6CF1]/20 bg-[#2E6CF1]/8 p-5 text-sm leading-7 text-[#666666]">Skema tersedia mulai dari Rp150.000.000 hingga Rp500.000.000 per slot. Detail yield, tenor, distribusi imbal hasil, dan mekanisme kerja sama diarahkan ke sesi diskusi resmi.</div>
          <div className="mt-8 flex flex-wrap gap-3"><Button>Diskusi Investment</Button><Button variant="ghost">Request Investment Deck</Button></div>
        </Card>
        <Card>{focus.map(x => <p key={x} className="mb-4 flex gap-3 leading-7 text-[#666666]"><CircleDollarSign className="mt-1 h-5 w-5 shrink-0 text-[#2E6CF1]" />{x}</p>)}<div className="mt-6 border-t border-[#1F1F1F]/10 pt-6"><Badge>Risk Mitigation</Badge><p className="mt-4 leading-7 text-[#666666]">Perjanjian notaris, cadangan dana / escrow account, dan laporan berkala kepada investor.</p></div></Card>
      </div>
    </section>

    <section id="culture" className="border-y border-[#1F1F1F]/10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5"><SectionHead eyebrow="Culture & Values" title="IMPACT and CERMAT in every execution." text="Budaya kerja berorientasi dampak nyata, praktis, detail, dan terukur." /><div className="grid gap-5 lg:grid-cols-2"><Value title="IMPACT" items={impact} /><Value title="CERMAT" items={cermat} /></div></div>
    </section>

    <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
      <div className="gradient-blue rounded-[36px] p-6 text-white md:p-10">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div><Badge light>Contact</Badge><h2 className="heading-alt mt-5 text-4xl leading-tight tracking-[-.04em] md:text-6xl">Let’s build sustainable growth together.</h2><p className="mt-6 max-w-lg leading-8 text-white/65">Untuk diskusi partnership, investment, kolaborasi brand, atau pengembangan bisnis bersama ARTA.</p><div className="mt-8 space-y-3 text-white/70"><p className="flex gap-3"><Mail className="h-5 w-5" />hello@artapartners.id</p><p className="flex gap-3"><MapPin className="h-5 w-5" />Jogja, Indonesia</p></div></div>
          <form className="rounded-[28px] bg-white p-4 text-[#1F1F1F] md:p-6">
            <div className="grid gap-3 md:grid-cols-2"><Input label="Nama" /><Input label="Perusahaan / Brand" /><Input label="Nomor WhatsApp" /><Input label="Email" /><label className="md:col-span-2"><span className="text-sm font-semibold">Jenis kebutuhan</span><select className="mt-2 w-full rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3.5 outline-none"><option>Partnership</option><option>Investment</option><option>Brand Collaboration</option><option>Location Partnership</option><option>Career</option><option>Others</option></select></label><label className="md:col-span-2"><span className="text-sm font-semibold">Pesan</span><textarea className="mt-2 min-h-28 w-full rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3.5 outline-none" /></label></div>
            <button className="button-font mt-5 inline-flex items-center gap-2 rounded-full bg-[#2E6CF1] px-6 py-3.5 text-sm text-white transition hover:bg-[#1E3EAB]">Contact ARTA <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
    </section>

    <footer className="border-t border-[#1F1F1F]/10 px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#666666] md:flex-row md:items-center md:justify-between"><Logo /><p>Strategic Brand Partner untuk pertumbuhan bisnis yang tangguh dan berkelanjutan.</p></div></footer>
  </main>;
}
function Value({ title, items }: { title: string; items: string[] }) { return <Card><div className="flex items-center justify-between"><h3 className="heading-alt text-4xl tracking-[-.04em]">{title}</h3><Sparkles className="h-5 w-5 text-[#2E6CF1]" /></div><div className="mt-6 grid grid-cols-2 gap-2">{items.map(i => <div key={i} className="rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3 text-sm font-semibold">{i}</div>)}</div></Card>; }
function Input({ label }: { label: string }) { return <label><span className="text-sm font-semibold">{label}</span><input className="mt-2 w-full rounded-2xl border border-[#1F1F1F]/10 bg-[#F5F5F5] px-4 py-3.5 outline-none ring-[#2E6CF1]/20 focus:ring-4" /></label>; }
