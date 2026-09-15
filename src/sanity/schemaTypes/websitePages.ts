import { defineField, defineType, defineArrayMember } from 'sanity';
import { defaultWebsiteContent } from '../../lib/website-content';

const text = (name: string, title: string, optional = false) => defineField({ name, title, type: 'text', rows: 3, validation: rule => optional ? rule : rule.required() });
const url = (name: string, title: string) => defineField({ name, title, type: 'url', validation: rule => rule.uri({ scheme: ['https'] }) });
const photo = (name: string, title: string) => defineField({ name, title, type: 'image', options: { hotspot: true, accept: 'image/jpeg,image/png,image/webp,image/avif' }, description: 'Klik Upload atau seret foto dari perangkat. Atur crop dan titik fokus, lalu Publish. Website diperbarui setelah build GitHub selesai.', fields: [text('alt', 'Deskripsi foto (opsional)', true)] });
const legacyImage = (name: string) => defineField({ name, title: 'URL foto lama (arsip)', type: 'url', hidden: true, readOnly: true });
const list = (name: string, title: string, fields: ReturnType<typeof defineField>[], min = 1) => defineField({ name, title, type: 'array', of: [defineArrayMember({ name: `${name}Item`, type: 'object', fields })], validation: rule => rule.min(min) });
const initialValue = Object.fromEntries(Object.entries(defaultWebsiteContent).map(([key, value]) => [key, Array.isArray(value) ? value.map((item, i) => typeof item === 'object' ? { ...item, _key: `${key}-${i}`, _type: `${key}Item` } : item) : value]));

export const websitePages = defineType({
  name: 'websitePages', title: 'Website — Home, About, Brands, Career', type: 'document', initialValue,
  fields: [
    defineField({ name: 'visual', title: 'Pengaturan Visual', type: 'object', description: 'Ubah tampilan tanpa kode. Setelah Publish, website diperbarui oleh build terjadwal GitHub Pages; hasilnya tidak langsung muncul. Buka website untuk melihat hasil.', fields: [
      defineField({ name: 'heroAlignment', title: 'Rata teks hero', type: 'string', options: { list: [{ title: 'Tengah', value: 'center' }, { title: 'Kiri', value: 'left' }], layout: 'radio' } }),
      defineField({ name: 'heroSize', title: 'Ukuran judul hero', type: 'string', options: { list: [{ title: 'Besar', value: 'large' }, { title: 'Sedang', value: 'medium' }], layout: 'radio' } }),
      defineField({ name: 'sectionSpacing', title: 'Jarak antarbagian', type: 'string', options: { list: [{ title: 'Lapang', value: 'spacious' }, { title: 'Ringkas', value: 'compact' }], layout: 'radio' } }),
      defineField({ name: 'gradientStart', title: 'Warna awal gradient', type: 'string', description: 'Kode HEX, contoh #1E3EAB. Pilih warna gelap agar teks putih tetap terbaca.', validation: rule => rule.regex(/^#[0-9a-fA-F]{6}$/) }),
      defineField({ name: 'gradientEnd', title: 'Warna akhir gradient', type: 'string', description: 'Kode HEX, contoh #121C64. Pilih warna gelap agar teks putih tetap terbaca.', validation: rule => rule.regex(/^#[0-9a-fA-F]{6}$/) }),
    ] }),
    text('heroTitle', 'Home: judul utama (baris baru diperbolehkan)'), text('heroDescription', 'Home: pengantar hero'), text('overview', 'Home: overview'), text('whatTitle', 'Home: judul What We Do'),
    list('steps', 'Tahapan kerja', [text('title', 'Judul'), text('description', 'Ringkasan homepage'), text('detail', 'Penjelasan About Us')]),
    text('brandsTitle', 'Judul brand'), text('brandsIntro', 'Pengantar brand'),
    list('brands', 'Brand — urutan tampilan', [defineField({ name: 'slug', title: 'ID tautan (huruf kecil dan tanda hubung)', type: 'string', validation: rule => rule.required().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) }), text('name', 'Nama'), text('category', 'Kategori'), text('summary', 'Ringkasan kartu di homepage', true), text('headline', 'Headline halaman brand'), text('description', 'Deskripsi'), text('workOn', 'What we work on', true), text('city', 'Kota', true), text('founded', 'Tahun berdiri terverifikasi', true), photo('photo', 'Upload Foto Brand'), legacyImage('image'), text('imageAlt', 'Deskripsi foto', true), url('url', 'Website / profil resmi')]),
    text('teamTitle', 'Judul tim'), text('teamIntro', 'Pengantar tim'),
    list('team', 'Profil tim yang sudah dikonfirmasi (opsional)', [text('name', 'Nama'), text('role', 'Jabatan terkini'), photo('photo', 'Upload Foto Profil'), legacyImage('image')], 0),
    text('visionTitle', 'Judul visi'), text('vision', 'Visi'), text('missionTitle', 'Judul misi'), text('missionIntro', 'Pengantar misi'),
    defineField({ name: 'missions', title: 'Misi', type: 'array', of: [{ type: 'string' }], validation: rule => rule.min(1) }),
    text('processTitle', 'Judul proses'), text('processIntro', 'Pengantar proses'), text('workTitle', 'Judul How ARTA works'), text('workIntro', 'Pengantar How ARTA works'), list('workAreas', 'Area kolaborasi brand', [text('title', 'Judul'), text('description', 'Penjelasan')]), text('milestoneTitle', 'Judul milestone'),
    list('milestones', 'Milestone yang sudah terjadi (bukan rencana)', [text('year', 'Tahun'), text('title', 'Capaian'), text('description', 'Penjelasan')]),
    text('officeTitle', 'Career: judul'), text('officeIntro', 'Career: pengantar'), text('officeLocation', 'Kota kantor'), text('officeAddress', 'Alamat lengkap terverifikasi', true), url('officeMap', 'Tautan Google Maps kantor'), photo('officePhoto', 'Upload Foto Kantor'), legacyImage('officeImage'),
    text('cultureTitle', 'Judul budaya'), text('cultureIntro', 'Pengantar budaya'),
    list('values', 'Nilai IMPACT', [text('name', 'Nama nilai'), text('description', 'Penjelasan')]),
    defineField({ name: 'email', title: 'Email kontak', type: 'string', validation: rule => rule.required().email() }),
  ],
  preview: { prepare: () => ({ title: 'Website ARTA — 4 halaman', subtitle: 'Layout sederhana / September 2026' }) },
});
