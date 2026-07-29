'use client';

import { useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, BriefcaseBusiness, Check, CheckCircle2, ClipboardList, Coins, Copy, LineChart, MessageCircle, Palette, ShieldCheck, Sparkles, Users, Workflow, Zap } from 'lucide-react';

type Topic = {
  id: string;
  area: string;
  title: string;
  question: string;
  output: string;
};

const businessGeneral: Topic[] = [
  {
    id: 'founder-clarity',
    area: 'Business Direction',
    title: 'Founder Clarity',
    question: 'Bisnis ini sebenarnya mau dibawa ke mana dalam 6–12 bulan ke depan?',
    output: 'Peta arah growth, prioritas pembenahan, dan keputusan yang perlu diambil owner.',
  },
  {
    id: 'owner-bottleneck',
    area: 'Business Direction',
    title: 'Owner Bottleneck',
    question: 'Kalau owner tidak turun tangan, apakah bisnis tetap jalan dengan kualitas yang sama?',
    output: 'Area bisnis yang masih bergantung ke owner dan fungsi yang perlu didelegasikan.',
  },
  {
    id: 'growth-readiness',
    area: 'Business Direction',
    title: 'Growth Readiness',
    question: 'Bisnis siap diperbesar, atau justru akan makin kacau kalau di-scale?',
    output: 'Cek kesiapan finance, tim, operasional, brand, marketing, dan risiko scale up.',
  },
  {
    id: 'business-health-check',
    area: 'Business Direction',
    title: 'Business Health Check',
    question: 'Masalah utama bisnis ada di produk, market, marketing, finance, tim, atau operasional?',
    output: 'Diagnosis lintas fungsi dan urutan bottleneck yang paling prioritas ditangani.',
  },
];

const topicGroups = [
  {
    id: 'finance',
    label: 'Finance',
    icon: Coins,
    color: 'from-emerald-500 to-teal-700',
    topics: [
      ['income-statement', 'Income Statement', 'Bisnis ini benar-benar untung, atau cuma terlihat ramai dari omzet?', 'Membaca pendapatan, HPP, beban operasional, margin, profit aktual, dan titik bocor biaya.'],
      ['cash-flow', 'Cash Flow Management', 'Omzet ada, tapi kenapa uang terasa hilang atau cash terasa sempit?', 'Memetakan arus kas, siklus pembayaran, hutang/piutang, cash buffer, dan risiko kas macet.'],
      ['simple-budgeting', 'Simple Budgeting', 'Setiap pengeluaran punya tujuan, atau masih reaktif saat ada kebutuhan?', 'Menyusun alokasi budget bulanan per divisi, marketing, operasional, SDM, dan development.'],
    ],
  },
  {
    id: 'branding',
    label: 'Branding & Creative',
    icon: Palette,
    color: 'from-fuchsia-500 to-violet-800',
    topics: [
      ['creative-director-owner', 'Owner Masih Jadi Creative Director Sendirian?', 'Apakah owner masih mengurus strategi branding, tren, konten, dan arahan visual sendirian?', 'Mengurangi beban kreatif owner melalui brand direction, creative brief, dan approval system.'],
      ['branding-market-fit', 'Branding-Market Fit', 'Brand sudah terlihat bagus, tapi belum menggerakkan market untuk beli?', 'Membedah kesesuaian bahasa, visual, value proposition, dan respon market terhadap brand.'],
      ['internal-creative-system', 'Internal Creative System', 'Apakah tim memahami brand sebaik market melihat brand dari luar?', 'Merapikan guideline internal, workflow creative, standar visual, tone, dan handoff tim.'],
      ['creative-solution', 'Creative Solution', 'Program marketing atau renovasi sering mentok budget dan bentuk eksekusi?', 'Mendesain solusi kreatif yang tetap menjawab goals bisnis dengan constraint budget yang realistis.'],
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing & Sales Funnel',
    icon: LineChart,
    color: 'from-blue-500 to-indigo-800',
    topics: [
      ['funnel-gap', 'Funnel Gap', 'Di titik mana calon customer hilang: lihat konten, tanya, booking, beli, atau repeat?', 'Membaca alur awareness, inquiry, visit/booking, purchase, repeat, dan titik bocor funnel.'],
      ['why-not-buy', 'Why They Don’t Buy', 'Kenapa orang tertarik tapi tidak convert menjadi pembelian?', 'Membedah hambatan harga, trust, offer, timing, channel, sales script, dan follow up.'],
      ['distribution-king', 'Distribution is King', 'Produk bagus tidak cukup kalau belum muncul di channel, komunitas, dan momen yang tepat.', 'Membangun distribusi lewat channel, partnership, komunitas, activation, dan repeatable acquisition.'],
    ],
  },
  {
    id: 'people',
    label: 'People / SDM',
    icon: Users,
    color: 'from-amber-500 to-orange-700',
    topics: [
      ['jobdesc-kpi', 'Jobdesc, KPI & Expectation Setting', 'Apakah setiap orang tahu peran, target, standar kerja, dan ekspektasi owner?', 'Merapikan role clarity, output kerja, KPI, ekspektasi mingguan, dan batas tanggung jawab.'],
      ['performance-review', 'Performance Review & Feedback', 'Performa tim dievaluasi rutin, atau baru dibahas saat ada masalah?', 'Membangun ritme review, feedback objektif, improvement plan, reward, dan consequence.'],
      ['team-communication', 'Team Communication', 'Apakah komunikasi tim jelas, atau sering miskomunikasi, overlap, dan kerja ulang?', 'Merapikan meeting rhythm, approval flow, handoff antar-divisi, dan dokumentasi kerja.'],
    ],
  },
  {
    id: 'operation',
    label: 'Operational System',
    icon: Workflow,
    color: 'from-slate-700 to-slate-950',
    topics: [
      ['brand-promise-reality', 'Brand Promise vs Operational Reality', 'Brand menjanjikan experience A, tapi apakah tim benar-benar deliver A ke customer?', 'Membuat bridge antara visual branding, customer journey, service standard, dan SOP experience.'],
      ['marketing-bad-distribution', 'Good at Marketing, Bad at Distribution', 'Marketing sudah menarik demand, tapi distribusi, stok, admin, booking, atau fulfillment belum siap?', 'Membaca demand vs delivery capacity agar promosi tidak kalah oleh sistem operasional.'],
      ['owner-sleeps-well', 'The Owner Who Sleeps Well', 'Kenapa owner masih begadang mikirin stok, tim, dan komplain padahal omzet sudah besar?', 'Merapikan SOP dasar, kontrol kualitas, escalation flow, dan daily operational rhythm.'],
    ],
  },
].map(group => ({
  ...group,
  topics: group.topics.map(([id, title, question, output]) => ({ id, area: group.label, title, question, output } as Topic)),
}));

const allSpecialTopics = topicGroups.flatMap(group => group.topics);

const IconBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="button-font inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[.14em] text-white/75 backdrop-blur">{children}</span>
);

function Logo({ light = false }: { light?: boolean }) {
  return <img src={light ? '/brand/assets/ARTA-34.png' : '/brand/assets/header-03.png'} alt="ARTA Partners" className={light ? 'h-[18px] w-auto' : 'h-[24px] w-auto'} />;
}

function TextField({ label, value, onChange, placeholder, required = false }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean }) {
  return <label className="block">
    <span className="text-sm font-semibold text-[#1F1F1F]">{label}{required && <span className="text-[#2E6CF1]"> *</span>}</span>
    <input value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-[#1F1F1F]/10 bg-white px-4 py-3.5 text-sm outline-none ring-[#2E6CF1]/20 transition placeholder:text-[#999999] focus:border-[#2E6CF1]/40 focus:ring-4" />
  </label>;
}

function TopicCard({ topic, selected, onToggle, compact = false }: { topic: Topic; selected: boolean; onToggle: () => void; compact?: boolean }) {
  return <button type="button" onClick={onToggle} className={`group h-full rounded-[26px] border p-5 text-left transition duration-300 ${selected ? 'border-[#2E6CF1] bg-[#2E6CF1]/8 shadow-[0_18px_50px_rgba(46,108,241,.12)]' : 'border-[#1F1F1F]/10 bg-white hover:-translate-y-1 hover:border-[#2E6CF1]/35 hover:shadow-[0_18px_50px_rgba(31,31,31,.07)]'}`}>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="button-font text-[11px] uppercase tracking-[.13em] text-[#2E6CF1]">{topic.area}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-.035em] text-[#1F1F1F]">{topic.title}</h3>
      </div>
      <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${selected ? 'border-[#2E6CF1] bg-[#2E6CF1] text-white' : 'border-[#1F1F1F]/12 text-transparent group-hover:border-[#2E6CF1]/40'}`}><Check className="h-4 w-4" /></span>
    </div>
    <p className={`${compact ? 'mt-4 text-sm leading-6' : 'mt-5 leading-7'} text-[#666666]`}>{topic.question}</p>
    {!compact && <div className="mt-5 rounded-2xl bg-[#F5F5F5] p-4 text-sm leading-6 text-[#666666]"><span className="font-semibold text-[#1F1F1F]">Output konsultasi: </span>{topic.output}</div>}
  </button>;
}

export default function BusinessCheckupPage() {
  const [step, setStep] = useState(1);
  const questionSectionRef = useRef<HTMLElement | null>(null);
  const [profile, setProfile] = useState({ name: '', brand: '', role: '', whatsapp: '', goal: '', condition: '' });
  const [generalIds, setGeneralIds] = useState<string[]>([]);
  const [specialIds, setSpecialIds] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const selectedGeneral = businessGeneral.filter(topic => generalIds.includes(topic.id));
  const selectedSpecial = allSpecialTopics.filter(topic => specialIds.includes(topic.id));
  const canContinue = profile.name.trim() && profile.brand.trim() && profile.whatsapp.trim() && profile.goal.trim() && profile.condition.trim() && selectedGeneral.length > 0;

  const summary = useMemo(() => {
    const general = selectedGeneral.map(topic => `- ${topic.title}: ${topic.question}`).join('\n') || '- Belum dipilih';
    const special = selectedSpecial.map(topic => `- [${topic.area}] ${topic.title}: ${topic.question}`).join('\n') || '- Belum dipilih';
    return `Halo ARTA Partners, saya ingin konsultasi Business Health Check.\n\nNama: ${profile.name || '-'}\nBrand/Bisnis: ${profile.brand || '-'}\nRole: ${profile.role || '-'}\nWhatsApp: ${profile.whatsapp || '-'}\n\nGoal bisnis 6-12 bulan:\n${profile.goal || '-'}\n\nKondisi/masalah saat ini:\n${profile.condition || '-'}\n\nPart 1 - Business General yang saya pilih:\n${general}\n\nTopik khusus yang ingin dibahas:\n${special}`;
  }, [profile, selectedGeneral, selectedSpecial]);

  const waHref = `https://wa.me/6282134702388?text=${encodeURIComponent(summary)}`;

  const toggleGeneral = (id: string) => setGeneralIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleSpecial = (id: string) => setSpecialIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  function goToStep(nextStep: number) {
    setStep(nextStep);
    window.requestAnimationFrame(() => {
      questionSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return <main className="min-h-screen bg-[#F5F5F5] text-[#1F1F1F]">
    <header className="sticky top-0 z-50 border-b border-[#1F1F1F]/10 bg-[#F5F5F5]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" aria-label="Back to ARTA home"><Logo /></a>
        <div className="hidden items-center gap-2 rounded-full bg-white p-1 text-xs text-[#666666] shadow-sm md:flex">
          {[1, 2, 3].map(n => <button key={n} onClick={() => n === 1 || canContinue ? goToStep(n) : undefined} className={`rounded-full px-4 py-2 transition ${step === n ? 'bg-[#1F1F1F] text-white' : 'hover:bg-[#F5F5F5]'}`}>{n === 1 ? 'Business General' : n === 2 ? 'Topik Khusus' : 'Summary'}</button>)}
        </div>
        <a href="/" className="button-font inline-flex items-center gap-2 rounded-full border border-[#1F1F1F]/10 bg-white px-4 py-2.5 text-sm transition hover:border-[#2E6CF1]/40 hover:text-[#2E6CF1]"><ArrowLeft className="h-4 w-4" /> Home</a>
      </div>
    </header>

    <section className="brand-dark relative overflow-hidden text-white">
      <img src="/brand/assets/ARTA-24.png" alt="ARTA gradient" className="absolute inset-x-0 bottom-0 h-[58%] w-full object-cover opacity-70 asset-fade" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <IconBadge>Interactive Consultation Guide</IconBadge>
          <h1 className="heading-alt mt-6 max-w-4xl text-5xl leading-[.98] tracking-[-.045em] md:text-7xl">Temukan bottleneck bisnis sebelum sesi konsultasi.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">Isi Part 1 Business General terlebih dulu, lalu pilih topik khusus yang paling menggambarkan problem brand Anda. Hasilnya menjadi brief awal untuk konsultasi bersama ARTA Partners.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => goToStep(1)} className="button-font inline-flex items-center gap-2 rounded-full bg-[#2E6CF1] px-6 py-3.5 text-sm text-white transition hover:bg-[#1E3EAB]">Mulai Checkup <ArrowRight className="h-4 w-4" /></button>
            <a href="#how-it-works" className="button-font inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3.5 text-sm text-white backdrop-blur transition hover:bg-white/18">Cara Kerja</a>
          </div>
        </div>
        <div className="rounded-[36px] border border-white/14 bg-white/[.08] p-5 backdrop-blur-xl">
          <div className="rounded-[28px] bg-white p-5 text-[#1F1F1F]">
            <div className="flex items-center justify-between"><Logo /><span className="button-font hidden rounded-full bg-[#F5F5F5] px-3 py-1.5 text-[11px] uppercase tracking-[.12em] text-[#666666] sm:inline-flex">Business Checkup</span></div>
            <div className="mt-7 grid gap-3">
              {[['01', 'Business General wajib diisi'], ['02', 'Pilih problem khusus'], ['03', 'Dapatkan brief konsultasi']].map(([number, label]) => <div key={number} className="flex items-center gap-4 rounded-3xl bg-[#F5F5F5] p-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2E6CF1] font-semibold text-white">{number}</span>
                <p className="font-semibold tracking-[-.02em]">{label}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="border-b border-[#1F1F1F]/10 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3">
        {[
          [BriefcaseBusiness, 'Part 1 wajib', 'Mulai dari arah bisnis, bottleneck owner, kesiapan scale, dan health check umum.'],
          [ClipboardList, 'Topik khusus', 'Lanjut pilih finance, branding, marketing, SDM, atau operational system sesuai problem.'],
          [MessageCircle, 'Brief siap konsultasi', 'Summary pilihan bisa disalin atau dikirim ke WhatsApp ARTA sebagai bahan awal diskusi.'],
        ].map(([Icon, title, text]: any) => <div key={title} className="rounded-[26px] border border-[#1F1F1F]/10 bg-[#F5F5F5] p-5">
          <Icon className="h-6 w-6 text-[#2E6CF1]" />
          <h3 className="mt-5 text-xl font-semibold tracking-[-.03em]">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#666666]">{text}</p>
        </div>)}
      </div>
    </section>

    <section ref={questionSectionRef} className="mx-auto scroll-mt-24 max-w-7xl px-5 py-14 md:py-20">
      {step === 1 && <div>
        <div className="mb-9 grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="button-font rounded-full border border-[#1F1F1F]/10 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[.14em] text-[#666666]">Part 1 / Wajib</span>
            <h2 className="heading-alt mt-5 text-4xl leading-tight tracking-[-.04em] md:text-6xl">Business General</h2>
          </div>
          <p className="max-w-2xl leading-8 text-[#666666] lg:pt-12">Sebelum membahas finance, branding, marketing, SDM, atau operasional, ARTA perlu memahami arah bisnis dan kondisi owner terlebih dulu. Isi profil singkat dan pilih minimal satu area Business General.</p>
        </div>
        <div className="grid gap-5 rounded-[32px] border border-[#1F1F1F]/10 bg-white p-5 md:grid-cols-2 md:p-7 lg:grid-cols-4">
          <TextField required label="Nama" value={profile.name} onChange={name => setProfile({ ...profile, name })} placeholder="Nama lengkap" />
          <TextField required label="Nama Brand / Bisnis" value={profile.brand} onChange={brand => setProfile({ ...profile, brand })} placeholder="Contoh: Sebelas Coffee" />
          <TextField label="Role" value={profile.role} onChange={role => setProfile({ ...profile, role })} placeholder="Owner / CEO / Director" />
          <TextField required label="WhatsApp" value={profile.whatsapp} onChange={whatsapp => setProfile({ ...profile, whatsapp })} placeholder="08xx" />
          <label className="md:col-span-2"><span className="text-sm font-semibold">Goal bisnis 6–12 bulan <span className="text-[#2E6CF1]">*</span></span><textarea value={profile.goal} onChange={event => setProfile({ ...profile, goal: event.target.value })} placeholder="Contoh: buka cabang, naikkan profit, rapikan tim, scale marketing..." className="mt-2 min-h-28 w-full rounded-2xl border border-[#1F1F1F]/10 bg-white px-4 py-3.5 text-sm outline-none ring-[#2E6CF1]/20 transition placeholder:text-[#999999] focus:border-[#2E6CF1]/40 focus:ring-4" /></label>
          <label className="md:col-span-2"><span className="text-sm font-semibold">Kondisi / masalah utama saat ini <span className="text-[#2E6CF1]">*</span></span><textarea value={profile.condition} onChange={event => setProfile({ ...profile, condition: event.target.value })} placeholder="Ceritakan singkat yang paling mengganggu bisnis sekarang..." className="mt-2 min-h-28 w-full rounded-2xl border border-[#1F1F1F]/10 bg-white px-4 py-3.5 text-sm outline-none ring-[#2E6CF1]/20 transition placeholder:text-[#999999] focus:border-[#2E6CF1]/40 focus:ring-4" /></label>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {businessGeneral.map(topic => <TopicCard key={topic.id} topic={topic} selected={generalIds.includes(topic.id)} onToggle={() => toggleGeneral(topic.id)} />)}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[28px] bg-[#1F1F1F] p-5 text-white md:flex-row md:items-center">
          <p className="leading-7 text-white/70">Pilih minimal satu Business General dan lengkapi field wajib untuk lanjut ke topik khusus.</p>
          <button disabled={!canContinue} onClick={() => goToStep(2)} className="button-font inline-flex items-center gap-2 rounded-full bg-[#2E6CF1] px-6 py-3.5 text-sm text-white transition hover:bg-[#1E3EAB] disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/45">Lanjut Pilih Topik <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>}

      {step === 2 && <div>
        <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><span className="button-font rounded-full border border-[#1F1F1F]/10 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[.14em] text-[#666666]">Part 2 / Optional</span><h2 className="heading-alt mt-5 text-4xl leading-tight tracking-[-.04em] md:text-6xl">Pilih Topik Khusus</h2><p className="mt-5 max-w-2xl leading-8 text-[#666666]">Pilih problem yang paling relevan. Boleh lebih dari satu, tapi untuk sesi pertama disarankan fokus ke 1–3 prioritas.</p></div>
          <div className="rounded-3xl bg-white p-4 text-sm text-[#666666] shadow-sm"><span className="font-semibold text-[#1F1F1F]">Terpilih:</span> {specialIds.length} topik khusus</div>
        </div>
        <div className="space-y-8">
          {topicGroups.map(group => <div key={group.id} className="rounded-[32px] border border-[#1F1F1F]/10 bg-white p-5 md:p-7">
            <div className="mb-5 flex items-center gap-3"><span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${group.color} text-white`}><group.icon className="h-5 w-5" /></span><h3 className="text-2xl font-semibold tracking-[-.035em]">{group.label}</h3></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.topics.map(topic => <TopicCard key={topic.id} compact topic={topic} selected={specialIds.includes(topic.id)} onToggle={() => toggleSpecial(topic.id)} />)}
            </div>
          </div>)}
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-3">
          <button onClick={() => goToStep(1)} className="button-font inline-flex items-center gap-2 rounded-full border border-[#1F1F1F]/10 bg-white px-6 py-3.5 text-sm transition hover:border-[#2E6CF1]/40 hover:text-[#2E6CF1]"><ArrowLeft className="h-4 w-4" /> Kembali</button>
          <button onClick={() => goToStep(3)} className="button-font inline-flex items-center gap-2 rounded-full bg-[#2E6CF1] px-6 py-3.5 text-sm text-white transition hover:bg-[#1E3EAB]">Lihat Summary <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>}

      {step === 3 && <div>
        <div className="mb-9 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div><span className="button-font rounded-full border border-[#1F1F1F]/10 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[.14em] text-[#666666]">Part 3 / Summary</span><h2 className="heading-alt mt-5 text-4xl leading-tight tracking-[-.04em] md:text-6xl">Brief Konsultasi</h2></div>
          <p className="max-w-2xl leading-8 text-[#666666] lg:pt-12">Ini ringkasan awal untuk tim ARTA. Bisa disalin, atau langsung dikirim ke WhatsApp agar sesi konsultasi lebih fokus.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-[32px] border border-[#1F1F1F]/10 bg-white p-5 md:p-7">
            <div className="mb-5 flex items-center justify-between"><h3 className="text-2xl font-semibold tracking-[-.035em]">Ringkasan Pilihan</h3><CheckCircle2 className="h-6 w-6 text-[#2E6CF1]" /></div>
            <pre className="max-h-[560px] overflow-auto whitespace-pre-wrap rounded-[24px] bg-[#F5F5F5] p-5 text-sm leading-7 text-[#333333]">{summary}</pre>
          </div>
          <div className="space-y-5">
            <div className="gradient-blue rounded-[32px] p-6 text-white">
              <Sparkles className="h-7 w-7" />
              <h3 className="mt-6 text-3xl font-semibold tracking-[-.04em]">Rekomendasi sesi awal</h3>
              <p className="mt-4 leading-7 text-white/68">Mulai dari Business Health Check untuk menentukan bottleneck utama, lalu lanjutkan ke topik khusus yang paling berdampak ke growth.</p>
              <div className="mt-6 rounded-3xl bg-white/10 p-4 text-sm leading-6 text-white/72">Part 1 dipakai sebagai konteks wajib supaya solusi tidak lompat langsung ke marketing/branding sebelum arah bisnisnya jelas.</div>
            </div>
            <button onClick={copySummary} className="button-font flex w-full items-center justify-center gap-2 rounded-full border border-[#1F1F1F]/10 bg-white px-6 py-3.5 text-sm transition hover:border-[#2E6CF1]/40 hover:text-[#2E6CF1]"><Copy className="h-4 w-4" /> {copied ? 'Summary Tersalin' : 'Copy Summary'}</button>
            <a href={waHref} target="_blank" rel="noreferrer" className="button-font flex w-full items-center justify-center gap-2 rounded-full bg-[#2E6CF1] px-6 py-3.5 text-sm text-white transition hover:bg-[#1E3EAB]"><MessageCircle className="h-4 w-4" /> Kirim ke WhatsApp ARTA</a>
            <button onClick={() => goToStep(2)} className="button-font flex w-full items-center justify-center gap-2 rounded-full border border-[#1F1F1F]/10 bg-white px-6 py-3.5 text-sm transition hover:border-[#2E6CF1]/40 hover:text-[#2E6CF1]"><ArrowLeft className="h-4 w-4" /> Edit Topik</button>
          </div>
        </div>
      </div>}
    </section>

    <footer className="border-t border-[#1F1F1F]/10 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#666666] md:flex-row md:items-center md:justify-between"><Logo /><p>Business Checkup — ARTA Partners strategic consultation guide.</p></div>
    </footer>
  </main>;
}
