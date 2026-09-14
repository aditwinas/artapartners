export type Brand = { slug: string; name: string; category: string; headline: string; description: string; city: string; founded: string; image: string; imageAlt: string; url: string; workOn: string };
export type WebsiteContent = {
  heroTitle: string; heroDescription: string; overview: string; whatTitle: string;
  steps: { title: string; description: string; detail: string }[];
  brandsTitle: string; brandsIntro: string; brands: Brand[];
  teamTitle: string; teamIntro: string;
  team: { name: string; role: string; image: string }[];
  visionTitle: string; vision: string; missionTitle: string; missionIntro: string; missions: string[];
  processTitle: string; processIntro: string; workTitle: string; workIntro: string; workAreas: { title: string; description: string }[]; milestoneTitle: string;
  milestones: { year: string; title: string; description: string }[];
  officeTitle: string; officeIntro: string; officeLocation: string; officeAddress: string; officeMap: string; officeImage: string;
  cultureTitle: string; cultureIntro: string; values: { name: string; description: string }[];
  email: string;
};

// Approved copy: WEBSITE PAGE, C2:C16. Unknown facts stay unpublished.
export const defaultWebsiteContent: WebsiteContent = {
  heroTitle: 'Dari Masalah Bisnis\nMenjadi Arah yang Jelas.',
  heroDescription: 'ARTA Partners membantu bisnis memahami masalah, menentukan prioritas, dan membangun strategi untuk pertumbuhan yang lebih sehat dan berkelanjutan.',
  overview: 'Bisnis yang baik adalah bisnis yang punya alasan untuk dipilih, dipercaya, dan terus bertumbuh.\nKarena itu, kami tidak hanya datang dengan ide.\nKami ikut membangun, menjalankan, dan bertumbuh.',
  whatTitle: 'Dari potensi menjadi pertumbuhan.',
  steps: [
    { title: 'Identifikasi', description: 'Kami menelaah kondisi keuangan, produk, pasar, dan operasional untuk memahami potensi setiap brand.', detail: 'Kami mulai dari memahami bisnis. Melihat kondisi bisnis, produk, pasar, operasional, dan peluang yang ada untuk menentukan area yang paling perlu dikembangkan.' },
    { title: 'Kemitraan', description: 'Kami menyelaraskan visi dengan pemilik brand dan membangun kerja sama yang transparan.', detail: 'Kami menyusun langkah bersama. Menyelaraskan visi, strategi, peran, dan kebutuhan agar setiap keputusan punya arah yang jelas.' },
    { title: 'Akselerasi', description: 'Kami mengembangkan brand melalui strategi, pengelolaan operasional, inovasi, dan pendanaan.', detail: 'Kami ikut mendorong eksekusinya. Dari strategi hingga implementasi, kami membantu bisnis bergerak lebih cepat dan membuka peluang pertumbuhan berikutnya.' },
  ],
  brandsTitle: 'Brand yang tumbuh\nbersama ARTA.',
  brandsIntro: 'Setiap brand punya cerita, karakter, dan cara tumbuhnya sendiri. Di ARTA Partners, kami hadir untuk membantu mengembangkan brand melalui strategi, pengelolaan, dan kolaborasi yang relevan dengan kebutuhan bisnisnya.\n\nKami tidak hanya melihat bagaimana sebuah brand berjalan hari ini, tapi juga bagaimana brand tersebut bisa tumbuh lebih kuat ke depannya. Melalui pendekatan yang strategis dan kolaboratif, kami membantu setiap brand menemukan peluang, berkembang, dan menciptakan value yang lebih besar.',
  brands: [
    { slug: 'sebelas-coffee', name: 'Sebelas Coffee', category: 'Food & Beverage', headline: 'Kopi, ruang, dan cerita yang tumbuh dari Yogyakarta.', description: 'Sebelas Coffee hadir sebagai ruang yang dekat dengan keseharian. Tempat untuk menikmati kopi, bekerja, bertemu, atau sekadar menikmati waktu.', city: 'Yogyakarta', founded: '2018', image: '', imageAlt: '', url: '', workOn: 'Business Process Refinement & Strategic Growth · Business & Operational Development' },
    { slug: 'tunas-mekar-dental', name: 'Tunas Mekar Dental', category: 'Dental Supply', headline: 'Mendukung kebutuhan praktik kedokteran gigi.', description: 'Tunas Mekar Dental menyediakan alat, instrumen, dan material dental untuk dokter gigi, klinik, dan rumah sakit. Bersama ARTA, pengelolaan distribusi, keuangan, dan operasional diperkuat untuk mendukung kebutuhan mitra bisnis.', city: '', founded: '', image: '', imageAlt: '', url: '', workOn: 'Brand Development · Business & Operational Development' },
    { slug: 'snapobox', name: 'Snapobox', category: 'Entertainment / Photobox', headline: 'Cerita kamu, dalam satu jepretan.', description: 'Snapobox menghadirkan pengalaman foto mandiri yang praktis, dari berpose hingga membawa pulang hasil cetak. Bersama ARTA, Snapobox mengembangkan jangkauan lokasi dan pemasaran agar lebih dekat dengan pelanggan.', city: 'Yogyakarta', founded: '', image: '', imageAlt: '', url: '', workOn: 'Brand Development · Business & Operational Development' },
    { slug: 'balcos', name: 'Balcos', category: 'Commercial Compound', headline: 'Ruang untuk bertemu dan tumbuh.', description: 'Balcos mempertemukan bisnis, komunitas, dan aktivitas kreatif dalam satu ruang. Bersama ARTA, pengelolaan kawasan berfokus pada operasional yang tertata serta kolaborasi antartenant.', city: 'Yogyakarta', founded: '', image: '', imageAlt: '', url: '', workOn: 'Business Refinement & Strategic Growth · Operational Development · Tenant Management' },
    { slug: 'zona-massage', name: 'Zona Massage', category: 'Wellness & Spa', headline: 'Ambil jeda. Kembalikan energi.', description: 'Zona Massage menyediakan layanan pijat dan relaksasi untuk memberi ruang beristirahat dari aktivitas sehari-hari. Bersama ARTA, pengembangan brand berfokus pada penataan layanan dan pengalaman pelanggan.', city: '', founded: '', image: '', imageAlt: '', url: '', workOn: 'Business Process Refinement & Strategic Growth · Service Development · Operational Development' },
  ],
  teamTitle: 'Orang-orang di balik pertumbuhan.',
  teamIntro: 'Tim ARTA menyatukan keahlian strategi, operasional, keuangan, marketing, dan kreatif. Kami bekerja bersama pemilik brand untuk mengubah rencana menjadi langkah nyata.',
  team: [],
  visionTitle: 'Tumbuh lebih kuat\ndan adaptif',
  vision: 'Menjadi mitra strategis tepercaya bagi bisnis dan para pemangku kepentingan, melalui strategi dan inovasi berkelanjutan yang menciptakan pertumbuhan tangguh dan adaptif.',
  missionTitle: 'Tumbuh bersama,\nmemberi dampak nyata.',
  missionIntro: 'Kami membantu pertumbuhan bisnis melalui pendanaan, insight, dan strategi yang bisa dijalankan.',
  missions: ['Membangun kepercayaan melalui integritas dan kemitraan yang transparan.', 'Memperkuat bisnis melalui pendanaan dan berbagi pengetahuan.', 'Mengintegrasikan pengelolaan keuangan dengan strategi pengembangan yang terukur.', 'Membangun ketangguhan dan kemampuan beradaptasi untuk jangka panjang.', 'Mendorong kualitas dan kolaborasi dalam persaingan bisnis.'],
  processTitle: 'Memahami bisnis, menyelaraskan tujuan, bergerak bersama.',
  processIntro: 'Sebelum mengambil langkah, kami memahami dulu bagaimana bisnis berjalan, apa yang sudah kuat, dan apa yang masih bisa dikembangkan.',
  workTitle: 'Kami bukan cuma membangun brand.\nKami ikut menjalankan bisnisnya.',
  workIntro: 'Setiap brand punya kebutuhan yang berbeda. Ada yang butuh positioning yang lebih kuat, ada yang perlu membangun sistem, ada yang perlu membuka peluang baru.\nDi ARTA, kami bekerja bersama tim dan pemilik brand untuk melihat bisnis secara utuh, dari strategi sampai eksekusi.',
  workAreas: [
    { title: 'Brand & Marketing', description: 'Menentukan bagaimana brand hadir, berbicara, dan terhubung dengan audiensnya.' },
    { title: 'Business Development', description: 'Mencari peluang baru, membangun partnership, dan membuka jalan untuk pertumbuhan.' },
    { title: 'Operations', description: 'Merapikan proses dan memastikan ide yang bagus bisa benar-benar berjalan.' },
    { title: 'People & Collaboration', description: 'Membangun tim dan cara kerja yang membuat bisnis bisa bergerak bersama.' },
  ],
  milestoneTitle: 'Langkah demi langkah,\ntumbuh bersama.',
  milestones: [{ year: '2018', title: 'Sebelas Coffee berdiri.', description: 'Berawal di Yogyakarta, Sebelas Coffee hadir sebagai tempat menikmati kopi, bekerja, dan bertemu.' }],
  officeTitle: 'Tempat ide\nbertemu aksi.',
  officeIntro: 'Di ARTA, kami bekerja lintas keahlian untuk mengembangkan brand dan menyelesaikan tantangan bisnis bersama.',
  officeLocation: 'Yogyakarta, Indonesia', officeAddress: '', officeMap: '', officeImage: '',
  cultureTitle: 'Bekerja dengan IMPACT',
  cultureIntro: 'Enam nilai yang membentuk cara kami berpikir, bekerja, dan berkolaborasi.',
  values: [
    { name: 'Inisiatif', description: 'Melihat peluang, lalu mulai bergerak.' },
    { name: 'Mutual', description: 'Berbagi pengetahuan, saling mendukung, dan tumbuh bersama.' },
    { name: 'Praktis', description: 'Kami memilih solusi yang relevan, realistis, dan memberikan hasil nyata.' },
    { name: 'Adaptif', description: 'Kami terus belajar dan menyesuaikan langkah tanpa kehilangan arah.' },
    { name: 'Cerdas', description: 'Data, logika, dan pengalaman menjadi dasar kami dalam menentukan langkah.' },
    { name: 'Tuntas', description: 'Kami percaya pekerjaan yang baik bukan hanya dimulai dengan baik, tapi juga diselesaikan dengan baik.' },
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
      const sample = base === defaultWebsiteContent.brands ? { ...base[0], city: '', founded: '', workOn: '' } : base[0];
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
