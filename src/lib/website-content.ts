export type Brand = { slug: string; name: string; category: string; headline: string; description: string; city: string; founded: string; image: string; imageAlt: string; url: string };
export type WebsiteContent = {
  heroTitle: string; overview: string; whatTitle: string;
  steps: { title: string; description: string; detail: string }[];
  brandsTitle: string; brandsIntro: string; brands: Brand[];
  teamTitle: string; teamIntro: string;
  team: { name: string; role: string; image: string }[];
  visionTitle: string; vision: string; missionTitle: string; missionIntro: string; missions: string[];
  processTitle: string; milestoneTitle: string;
  milestones: { year: string; title: string; description: string }[];
  officeTitle: string; officeIntro: string; officeLocation: string; officeAddress: string; officeMap: string; officeImage: string;
  cultureTitle: string; cultureIntro: string; values: { name: string; description: string }[];
  email: string;
};

// Approved copy: WEBSITE PAGE, C2:C16. Unknown facts stay unpublished.
export const defaultWebsiteContent: WebsiteContent = {
  heroTitle: 'Membangun brand.\nBertumbuh bersama.',
  overview: 'ARTA Partners mengakuisisi dan mengembangkan brand potensial melalui kemitraan strategis. Kami menyatukan strategi, pendanaan, dan pengelolaan bisnis untuk mendukung pertumbuhan jangka panjang.',
  whatTitle: 'Dari potensi menjadi pertumbuhan.',
  steps: [
    { title: 'Identifikasi', description: 'Kami menelaah kondisi keuangan, produk, pasar, dan operasional untuk memahami potensi setiap brand.', detail: 'Melalui business checkup, kami menelaah riwayat keuangan, kesesuaian produk dengan pasar, operasional, dan organisasi. Hasilnya menjadi dasar untuk menentukan prioritas pengembangan.' },
    { title: 'Kemitraan', description: 'Kami menyelaraskan visi dengan pemilik brand dan membangun kerja sama yang transparan.', detail: 'Kami menyelaraskan visi, peran, dan arah pertumbuhan dengan pemilik brand. Proses akuisisi dan kerja sama dibangun melalui transparansi serta kepercayaan.' },
    { title: 'Akselerasi', description: 'Kami mengembangkan brand melalui strategi, pengelolaan operasional, inovasi, dan pendanaan.', detail: 'Kami mendampingi pelaksanaan strategi, memperkuat pengelolaan bisnis, dan mendukung inovasi serta kebutuhan pendanaan.' },
  ],
  brandsTitle: 'Beragam brand.\nSemangat tumbuh yang sama.',
  brandsIntro: 'Kami mengembangkan brand yang hadir dalam keseharian, dari kopi dan ruang berkumpul hingga foto, kebutuhan dental, dan relaksasi.',
  brands: [
    { slug: 'sebelas-coffee', name: 'Sebelas Coffee', category: 'Food & Beverage', headline: 'Teman ngopi, ruang produktif.', description: 'Sebelas Coffee hadir di Yogyakarta sejak 2018 sebagai tempat menikmati kopi, bekerja, dan bertemu. Bersama ARTA, pengembangan brand berfokus pada penguatan operasional dan perluasan pasar.', city: 'Yogyakarta', founded: '2018', image: '', imageAlt: '', url: '' },
    { slug: 'tunas-mekar-dental', name: 'Tunas Mekar Dental', category: 'Dental Supply', headline: 'Mendukung kebutuhan praktik kedokteran gigi.', description: 'Tunas Mekar Dental menyediakan alat, instrumen, dan material dental untuk dokter gigi, klinik, dan rumah sakit. Bersama ARTA, pengelolaan distribusi, keuangan, dan operasional diperkuat untuk mendukung kebutuhan mitra bisnis.', city: '', founded: '', image: '', imageAlt: '', url: '' },
    { slug: 'snapobox', name: 'Snapobox', category: 'Entertainment / Photobox', headline: 'Cerita kamu, dalam satu jepretan.', description: 'Snapobox menghadirkan pengalaman foto mandiri yang praktis, dari berpose hingga membawa pulang hasil cetak. Bersama ARTA, Snapobox mengembangkan jangkauan lokasi dan pemasaran agar lebih dekat dengan pelanggan.', city: 'Yogyakarta', founded: '', image: '', imageAlt: '', url: '' },
    { slug: 'balcos', name: 'Balcos', category: 'Commercial Compound', headline: 'Ruang untuk bertemu dan tumbuh.', description: 'Balcos mempertemukan bisnis, komunitas, dan aktivitas kreatif dalam satu ruang. Bersama ARTA, pengelolaan kawasan berfokus pada operasional yang tertata serta kolaborasi antartenant.', city: 'Yogyakarta', founded: '', image: '', imageAlt: '', url: '' },
    { slug: 'zona-massage', name: 'Zona Massage', category: 'Wellness & Spa', headline: 'Ambil jeda. Kembalikan energi.', description: 'Zona Massage menyediakan layanan pijat dan relaksasi untuk memberi ruang beristirahat dari aktivitas sehari-hari. Bersama ARTA, pengembangan brand berfokus pada penataan layanan dan pengalaman pelanggan.', city: '', founded: '', image: '', imageAlt: '', url: '' },
  ],
  teamTitle: 'Orang-orang di balik pertumbuhan.',
  teamIntro: 'Tim ARTA menyatukan keahlian strategi, operasional, keuangan, marketing, dan kreatif. Kami bekerja bersama pemilik brand untuk mengubah rencana menjadi langkah nyata.',
  team: [],
  visionTitle: 'Tumbuh tangguh.\nTetap adaptif.',
  vision: 'Menjadi mitra strategis tepercaya bagi bisnis dan para pemangku kepentingan, melalui strategi dan inovasi berkelanjutan yang menciptakan pertumbuhan tangguh dan adaptif.',
  missionTitle: 'Pertumbuhan yang memberi manfaat bersama.',
  missionIntro: 'Kami mempercepat pertumbuhan bisnis melalui pendanaan, pengetahuan, dan kemampuan beradaptasi untuk menciptakan kesejahteraan bersama.',
  missions: ['Membangun kepercayaan melalui integritas dan kemitraan yang transparan.', 'Memperkuat bisnis melalui pendanaan dan berbagi pengetahuan.', 'Mengintegrasikan pengelolaan keuangan dengan strategi pengembangan yang terukur.', 'Membangun ketangguhan dan kemampuan beradaptasi untuk jangka panjang.', 'Mendorong kualitas dan kolaborasi dalam persaingan bisnis.'],
  processTitle: 'Memahami bisnis.\nBergerak bersama.',
  milestoneTitle: 'Langkah demi langkah,\ntumbuh bersama.',
  milestones: [{ year: '2018', title: 'Sebelas Coffee berdiri.', description: 'Berawal di Yogyakarta, Sebelas Coffee hadir sebagai tempat menikmati kopi, bekerja, dan bertemu.' }],
  officeTitle: 'Tempat ide\nbertemu aksi.',
  officeIntro: 'Di ARTA, kami bekerja lintas keahlian untuk mengembangkan brand dan menyelesaikan tantangan bisnis bersama.',
  officeLocation: 'Yogyakarta, Indonesia', officeAddress: '', officeMap: '', officeImage: '',
  cultureTitle: 'Bekerja dengan IMPACT.',
  cultureIntro: 'Enam nilai yang membentuk cara kami berpikir, bekerja, dan berkolaborasi.',
  values: [
    { name: 'Inisiatif', description: 'Peka terhadap peluang perbaikan dan berani mulai bertindak.' },
    { name: 'Mutual', description: 'Berbagi pengetahuan, saling mendukung, dan tumbuh bersama.' },
    { name: 'Praktis', description: 'Memilih solusi yang bisa dijalankan dan memberi hasil nyata.' },
    { name: 'Adaptif', description: 'Terbuka untuk belajar dan menyesuaikan langkah saat keadaan berubah.' },
    { name: 'Cerdas', description: 'Menggunakan data, logika, dan teknologi untuk mengambil keputusan.' },
    { name: 'Tuntas', description: 'Bertanggung jawab atas pekerjaan sampai selesai dengan kualitas yang baik.' },
  ],
  email: 'hello@artapartners.id',
};

export function safeWebUrl(value: unknown): string {
  if (typeof value !== 'string') return '';
  if (/^\/(?!\/)/.test(value)) return value;
  try { return new URL(value).protocol === 'https:' ? value : ''; } catch { return ''; }
}

export function mergeWebsiteContent(incoming: unknown): WebsiteContent {
  const merge = (base: unknown, value: unknown): unknown => {
    if (typeof base === 'string') return typeof value === 'string' && (base === '' || value.trim()) ? value : base;
    if (Array.isArray(base)) {
      if (!Array.isArray(value)) return base;
      if (!base.length) return value.filter((item) => item && typeof item.name === 'string' && item.name.trim() && typeof item.role === 'string' && item.role.trim()).map(item => ({ name: item.name, role: item.role, image: safeWebUrl(item.image) }));
      if (!value.length) return base;
      const valid = (sample: unknown, item: unknown): boolean => typeof sample === 'string' ? typeof item === 'string' && Boolean(item.trim()) : typeof item === 'object' && item !== null && Object.entries(sample as object).every(([k, v]) => typeof v === 'string' && v !== '' ? typeof (item as Record<string, unknown>)[k] === 'string' && Boolean(((item as Record<string, unknown>)[k] as string).trim()) : true);
      const sample = base === defaultWebsiteContent.brands ? { ...base[0], city: '', founded: '' } : base[0];
      return value.every(item => valid(sample, item)) ? value.map(item => merge(sample, item)) : base;
    }
    if (base && typeof base === 'object') return Object.fromEntries(Object.entries(base).map(([k, v]) => [k, merge(v, value && typeof value === 'object' ? (value as Record<string, unknown>)[k] : undefined)]));
    return base;
  };
  const content = merge(defaultWebsiteContent, incoming) as WebsiteContent;
  content.brands = content.brands.map((brand, i) => ({ ...brand, slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(brand.slug) ? brand.slug : `brand-${i}`, image: safeWebUrl(brand.image), url: safeWebUrl(brand.url) }));
  const seen = new Set<string>();
  content.brands = content.brands.map((brand, i) => { const slug = seen.has(brand.slug) ? `${brand.slug}-${i}` : brand.slug; seen.add(slug); return { ...brand, slug }; });
  content.officeMap = safeWebUrl(content.officeMap); content.officeImage = safeWebUrl(content.officeImage);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)) content.email = defaultWebsiteContent.email;
  return content;
}
