export type CmsIconKey = 'compass' | 'building' | 'zap' | 'chart' | 'workflow' | 'shield' | 'layers' | 'growth';

export type SiteContent = {
  announcement: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: Array<{ value: string; label: string }>;
  dashboard: {
    foundationValue: string;
    foundationText: string;
    partnerTitle: string;
    partnerDescription: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    bodyTitle: string;
    bodyText: string;
    visionEyebrow: string;
    visionTitle: string;
    visionDescription: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ title: string; subtitle: string; description: string; icon: CmsIconKey }>;
  };
  solutions: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ name: string; type: string; description: string; icon: CmsIconKey }>;
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    description: string;
  };
  brands: Array<{ name: string; category: string; description: string }>;
  investment: {
    eyebrow: string;
    title: string;
    description: string;
    lead: string;
    scheme: string;
    primaryCta: string;
    secondaryCta: string;
    focusPoints: string[];
    riskLabel: string;
    riskMitigation: string;
  };
  culture: {
    eyebrow: string;
    title: string;
    description: string;
    impactTitle: string;
    impactValues: string[];
    cermatTitle: string;
    cermatValues: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    location: string;
    buttonLabel: string;
  };
  footerText: string;
};

export type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export const defaultSiteContent: SiteContent = {
  announcement: 'ARTA Partners — trusted strategic partner dedicated to sustainable growth.',
  hero: {
    eyebrow: 'The Strategic Brand Partner',
    title: 'Partner strategis untuk brand yang siap bertumbuh lebih rapi, kuat, dan berkelanjutan.',
    description: 'ARTA Partners membantu brand potensial bertumbuh melalui business checkup, partnership, penguatan sistem, manajemen operasional, strategi finansial, marketing development, dan akselerasi bisnis yang terukur.',
    primaryCta: 'Kenali ARTA',
    secondaryCta: 'Lihat Brand Kami',
  },
  stats: [
    { value: '01', label: 'Business Checkup' },
    { value: '05', label: 'Brand Ecosystem' },
    { value: '360°', label: 'Growth Operations' },
    { value: 'ID', label: 'Indonesia Market' },
  ],
  dashboard: {
    foundationValue: '4',
    foundationText: 'foundational pillars in seamless synergy.',
    partnerTitle: 'Trusted Strategic Partner',
    partnerDescription: 'Dedicated to sustainable growth for high-potential brands.',
  },
  about: {
    eyebrow: 'Who We Are',
    title: 'ARTA bukan agency, bukan holding pasif.',
    intro: 'ARTA adalah partner strategis yang ikut membangun, membenahi, dan mengakselerasi brand potensial.',
    bodyTitle: 'Kami membantu brand membangun fondasi bisnis yang lebih kuat melalui strategi, sistem operasional, manajemen finansial, marketing, creative, development, dan eksekusi lintas fungsi.',
    bodyText: 'Dengan pendekatan praktis, adaptif, dan berbasis data, ARTA membantu brand membaca peluang pasar, memperbaiki sistem internal, dan mengakselerasi pertumbuhan secara lebih terarah.',
    visionEyebrow: 'Our Vision',
    visionTitle: 'Trusted Strategic Partner for Sustainable Growth.',
    visionDescription: 'Empat pilar identitas ARTA bekerja dalam sinergi untuk memberi edge dan kompetensi dalam mengembangkan brand potensial.',
  },
  workflow: {
    eyebrow: 'What We Do',
    title: 'Identify. Partner. Accelerate.',
    description: 'Tiga tahapan utama untuk membaca kondisi bisnis, membangun kolaborasi, lalu mengakselerasi pertumbuhan.',
    steps: [
      { title: 'Identify', subtitle: 'Business Checkup', description: 'Membaca performa, operasional, keuangan, pasar, customer behavior, brand positioning, dan peluang pertumbuhan.', icon: 'compass' },
      { title: 'Partner', subtitle: 'Strategic Collaboration', description: 'Membangun kerja sama strategis dengan brand, owner, investor, partner lokasi, komunitas, dan stakeholder.', icon: 'building' },
      { title: 'Accelerate', subtitle: 'Development & Booster', description: 'Mempercepat pertumbuhan melalui sistem, marketing, operasional, finansial, development, dan eksekusi terukur.', icon: 'zap' },
    ],
  },
  solutions: {
    eyebrow: 'Business Solutions',
    title: 'Solusi bisnis modular, rapi, dan scalable.',
    description: 'Dari strategic consulting hingga full-service 360 business management.',
    items: [
      { name: 'ARTAinsight', type: 'Strategic Consulting', description: 'Keputusan yang lebih tajam, realistis, dan berbasis data.', icon: 'chart' },
      { name: 'ARTAknowledge', type: 'Digital Product Enablement', description: 'Knowledge, template, sistem kerja, dan digital tools agar bisnis lebih rapi.', icon: 'workflow' },
      { name: 'ARTAcore', type: 'Financial & Operational System', description: 'Financial, operational, reporting, dan backend management untuk scale up.', icon: 'shield' },
      { name: 'ARTAos™', type: 'Full Service 360 Management', description: 'Manajemen end-to-end untuk operasional, finance, marketing, creative, dan development.', icon: 'layers' },
      { name: 'ARTAccelerate', type: 'Marketing & Development Booster', description: 'Campaign, aktivasi, pengembangan pasar, dan akuisisi pelanggan.', icon: 'growth' },
    ],
  },
  ecosystem: {
    eyebrow: 'Brand Ecosystem',
    title: 'Multi-brand ecosystem dengan operating depth.',
    description: 'ARTA mengembangkan brand dari F&B, photobox, dental, commercial compound, hingga wellness.',
  },
  brands: [
    { name: 'Sebelas Coffee', category: 'F&B', description: 'Coffee shop accessible untuk anak muda, mahasiswa, pelajar, pekerja muda, dan komunitas.' },
    { name: 'Snapobox', category: 'Photobox', description: 'Pengalaman foto instan di coffee shop, lifestyle space, area kampus, dan pusat keramaian.' },
    { name: 'Tunas Mekar Dental', category: 'Dental & Health', description: 'B2B dental, distribusi produk, support pembukaan klinik, dan health-related business.' },
    { name: 'Balcos Compound', category: 'Commercial Compound', description: 'Lifestyle compound untuk komunitas, tenant, event, dan traffic-based activity.' },
    { name: 'Zona Massage', category: 'Wellness', description: 'Wellness dan body care melalui massage, homecare, retention, dan customer experience.' },
  ],
  investment: {
    eyebrow: 'Investment with ARTA',
    title: 'Peluang investasi untuk ekspansi brand yang sudah berjalan.',
    description: 'Untuk qualified investor yang ingin berpartisipasi dalam pertumbuhan ekosistem brand ARTA melalui struktur kerja sama resmi.',
    lead: 'Fokus pendanaan ARTA bukan membangun bisnis dari nol atau sekadar “bakar uang”, tetapi mendukung ekspansi brand yang telah berjalan.',
    scheme: 'Skema tersedia mulai dari Rp150.000.000 hingga Rp500.000.000 per slot. Detail yield, tenor, distribusi imbal hasil, dan mekanisme kerja sama diarahkan ke sesi diskusi resmi.',
    primaryCta: 'Diskusi Investment',
    secondaryCta: 'Request Investment Deck',
    focusPoints: [
      'Expansion CAPEX: outlet, booth, box, equipment, renovation, dan aset produktif.',
      'Technology & Shared Service: sistem, tools, reporting, dashboard, dan workflow internal.',
      'Working Capital & Reserve: cadangan operasional untuk stabilitas cash flow.',
    ],
    riskLabel: 'Risk Mitigation',
    riskMitigation: 'Perjanjian notaris, cadangan dana / escrow account, dan laporan berkala kepada investor.',
  },
  culture: {
    eyebrow: 'Culture & Values',
    title: 'IMPACT and CERMAT in every execution.',
    description: 'Budaya kerja berorientasi dampak nyata, praktis, detail, dan terukur.',
    impactTitle: 'IMPACT',
    impactValues: ['Inisiatif', 'Mutual', 'Praktis', 'Adaptif', 'Cerdas', 'Tuntas'],
    cermatTitle: 'CERMAT',
    cermatValues: ['Cari akar masalah', 'Efektifkan proses', 'Rinci dan rapi', 'Mengukur dampak', 'Akurat', 'Teliti'],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build sustainable growth together.',
    description: 'Untuk diskusi partnership, investment, kolaborasi brand, atau pengembangan bisnis bersama ARTA.',
    email: 'hello@artapartners.id',
    location: 'Jogja, Indonesia',
    buttonLabel: 'Contact ARTA',
  },
  footerText: 'Strategic Brand Partner untuk pertumbuhan bisnis yang tangguh dan berkelanjutan.',
};

const cmsIconKeys = new Set<CmsIconKey>(['compass', 'building', 'zap', 'chart', 'workflow', 'shield', 'layers', 'growth']);

function isCompleteValue(template: unknown, incoming: unknown, key?: string): boolean {
  if (incoming === undefined || incoming === null) return false;
  if (key === 'icon') return typeof incoming === 'string' && cmsIconKeys.has(incoming as CmsIconKey);
  if (typeof template === 'string') return typeof incoming === 'string' && incoming.trim().length > 0;
  if (Array.isArray(template)) return Array.isArray(incoming);
  if (typeof template === 'object' && template !== null) {
    if (typeof incoming !== 'object' || incoming === null || Array.isArray(incoming)) return false;
    return Object.entries(template).every(([childKey, childTemplate]) =>
      isCompleteValue(childTemplate, (incoming as Record<string, unknown>)[childKey], childKey),
    );
  }
  return typeof incoming === typeof template;
}

function mergeValue<T>(fallback: T, incoming: DeepPartial<T> | undefined): T {
  if (incoming === undefined || incoming === null) return fallback;

  if (typeof fallback === 'string') {
    return (typeof incoming === 'string' && incoming.trim() ? incoming : fallback) as T;
  }

  if (Array.isArray(fallback)) {
    if (!Array.isArray(incoming) || incoming.length === 0) return fallback;
    return incoming.every((item) => isCompleteValue(fallback[0], item)) ? incoming as T : fallback;
  }

  if (typeof fallback === 'object' && fallback !== null) {
    if (typeof incoming !== 'object' || incoming === null || Array.isArray(incoming)) return fallback;
    const merged = { ...fallback } as Record<string, unknown>;
    for (const key of Object.keys(merged)) {
      if (key in incoming) {
        merged[key] = mergeValue(merged[key], (incoming as Record<string, unknown>)[key] as never);
      }
    }
    return merged as T;
  }

  return typeof incoming === typeof fallback ? incoming as T : fallback;
}

export function mergeSiteContent(content: DeepPartial<SiteContent> | null | undefined): SiteContent {
  return mergeValue(defaultSiteContent, content ?? undefined);
}
