import { defineArrayMember, defineField, defineType } from 'sanity';

const iconOptions = {
  list: [
    { title: 'Compass', value: 'compass' },
    { title: 'Building', value: 'building' },
    { title: 'Zap', value: 'zap' },
    { title: 'Chart', value: 'chart' },
    { title: 'Workflow', value: 'workflow' },
    { title: 'Shield', value: 'shield' },
    { title: 'Layers', value: 'layers' },
    { title: 'Growth', value: 'growth' },
  ],
};

const textField = (name: string, title: string, rows?: number) => defineField({
  name,
  title,
  type: rows ? 'text' : 'string',
  rows,
  validation: (rule: any) => rule.required(),
});

const sectionCopy = (name: string, title: string) => defineField({
  name,
  title,
  type: 'object',
  fields: [
    textField('eyebrow', 'Label kecil'),
    textField('title', 'Judul', 2),
    textField('description', 'Deskripsi', 3),
  ],
});

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Konten Website ARTA',
  type: 'document',
  fields: [
    textField('announcement', 'Teks pengumuman paling atas', 2),
    defineField({
      name: 'hero',
      title: 'Hero / Bagian utama',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul utama', 3),
        textField('description', 'Deskripsi', 4),
        textField('primaryCta', 'Tombol utama'),
        textField('secondaryCta', 'Tombol kedua'),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Angka Impact Dashboard',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        name: 'stat',
        fields: [textField('value', 'Angka'), textField('label', 'Keterangan')],
        preview: { select: { title: 'value', subtitle: 'label' } },
      })],
      validation: (rule) => rule.required().min(1).max(4),
    }),
    defineField({
      name: 'dashboard',
      title: 'Teks Impact Dashboard',
      type: 'object',
      fields: [
        textField('foundationValue', 'Angka fondasi'),
        textField('foundationText', 'Keterangan fondasi', 2),
        textField('partnerTitle', 'Judul partner'),
        textField('partnerDescription', 'Deskripsi partner', 2),
      ],
    }),
    defineField({
      name: 'about',
      title: 'Tentang ARTA',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul', 2),
        textField('intro', 'Pengantar', 3),
        textField('bodyTitle', 'Pernyataan utama', 4),
        textField('bodyText', 'Penjelasan', 4),
        textField('visionEyebrow', 'Label visi'),
        textField('visionTitle', 'Judul visi', 2),
        textField('visionDescription', 'Deskripsi visi', 3),
      ],
    }),
    defineField({
      name: 'workflow',
      title: 'What We Do',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul', 2),
        textField('description', 'Deskripsi', 3),
        defineField({
          name: 'steps',
          title: 'Tahapan',
          type: 'array',
          of: [defineArrayMember({
            name: 'step',
            type: 'object',
            fields: [
              textField('title', 'Judul'),
              textField('subtitle', 'Subjudul'),
              textField('description', 'Deskripsi', 3),
              defineField({ name: 'icon', title: 'Ikon', type: 'string', options: iconOptions, validation: (rule) => rule.required() }),
            ],
            preview: { select: { title: 'title', subtitle: 'subtitle' } },
          })],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'solutions',
      title: 'Business Solutions',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul', 2),
        textField('description', 'Deskripsi', 3),
        defineField({
          name: 'items',
          title: 'Daftar solusi',
          type: 'array',
          of: [defineArrayMember({
            name: 'solution',
            type: 'object',
            fields: [
              textField('name', 'Nama'),
              textField('type', 'Jenis'),
              textField('description', 'Deskripsi', 3),
              defineField({ name: 'icon', title: 'Ikon', type: 'string', options: iconOptions, validation: (rule) => rule.required() }),
            ],
            preview: { select: { title: 'name', subtitle: 'type' } },
          })],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    sectionCopy('ecosystem', 'Pengantar Brand Ecosystem'),
    defineField({
      name: 'brands',
      title: 'Brand Ecosystem',
      type: 'array',
      of: [defineArrayMember({
        name: 'brand',
        type: 'object',
        fields: [
          textField('name', 'Nama brand'),
          textField('category', 'Kategori'),
          textField('description', 'Deskripsi', 3),
        ],
        preview: { select: { title: 'name', subtitle: 'category' } },
      })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'investment',
      title: 'Investment',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul', 2),
        textField('description', 'Deskripsi', 3),
        textField('lead', 'Pernyataan utama', 4),
        textField('scheme', 'Penjelasan skema', 4),
        textField('primaryCta', 'Tombol utama'),
        textField('secondaryCta', 'Tombol kedua'),
        defineField({ name: 'focusPoints', title: 'Fokus penggunaan dana', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.required().min(1) }),
        textField('riskLabel', 'Label mitigasi risiko'),
        textField('riskMitigation', 'Mitigasi risiko', 3),
      ],
    }),
    defineField({
      name: 'culture',
      title: 'Culture & Values',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul', 2),
        textField('description', 'Deskripsi', 3),
        textField('impactTitle', 'Judul IMPACT'),
        defineField({ name: 'impactValues', title: 'Nilai IMPACT', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.required().min(1) }),
        textField('cermatTitle', 'Judul CERMAT'),
        defineField({ name: 'cermatValues', title: 'Nilai CERMAT', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.required().min(1) }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Kontak',
      type: 'object',
      fields: [
        textField('eyebrow', 'Label kecil'),
        textField('title', 'Judul', 2),
        textField('description', 'Deskripsi', 3),
        textField('email', 'Email'),
        textField('location', 'Lokasi'),
        textField('buttonLabel', 'Tulisan tombol'),
      ],
    }),
    textField('footerText', 'Teks footer', 2),
  ],
  preview: {
    prepare: () => ({ title: 'Konten Website ARTA Partners', subtitle: 'Dokumen utama' }),
  },
});
