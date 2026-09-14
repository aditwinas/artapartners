## Status materi Sanity

Materi terbaru dari kolom REVISI sudah tersimpan dan dipublikasikan dalam dokumen `websitePages` (Website — 4 Halaman), bukan hanya sebagai initialValue skema atau fallback website. Tambahan tim, alamat kantor, tautan Maps, dan judul What We Do dari draft editor juga sudah digabungkan serta dipublikasikan. Draft lama diselesaikan agar Studio membuka materi terpublikasi terbaru. Semua 34 field diperiksa melalui readback API sesudah publikasi. Dokumen `siteSettings` adalah arsip website lama dan tidak dipakai oleh empat halaman baru.

Bagian What We Do memakai materi lengkap pada sheet; kartu homepage memakai ringkasan masing-masing brand, terpisah dari headline halaman detail. Pengaturan visual tetap rata tengah dan gradient #1E3EAB → #121C64.

## Edit visual tanpa kode

Buka https://arta-partners.sanity.studio/ → Website — 4 Halaman → Pengaturan Visual.

- Rata teks hero: Tengah atau Kiri (default terbaru: Tengah).
- Ukuran judul: Besar atau Sedang; ukuran ponsel menyesuaikan otomatis.
- Jarak antarbagian: Lapang atau Ringkas.
- Warna awal/akhir gradient: kode HEX enam digit. Gunakan warna gelap untuk keterbacaan teks putih.

Klik Publish, lalu cek https://www.artapartners.id/. Ini pengaturan CMS, bukan editor drag-and-drop atau preview langsung. GitHub Pages membangun ulang pada jadwal otomatis; jadwal nominal 10 menit dapat terlambat di GitHub. Untuk segera memperbarui, buka Actions → Deploy ARTA Website to GitHub Pages → Run workflow di GitHub.

Teks, URL gambar, urutan brand, profil tim, serta konten lainnya tetap diedit di dokumen yang sama. Perubahan posisi/layout di luar pilihan di atas memerlukan perubahan kode.

## Pembaruan materi September 2026

Kolom REVISI pada tab WEBSITE PAGE menjadi acuan terbaru. Hero menggunakan gradient #1E3EAB → #121C64, headline rata kiri, dan CTA Business Checkup. About Us menampilkan How ARTA works with our brands sebagai pengganti Milestone. Profil brand memuat What we work on. Nilai Mutual tetap memakai materi sebelumnya karena revisinya masih kosong.

# ARTA Partners CMS

## Website empat halaman (September 2026)

Home, About Us, Our Brands, dan Career menggunakan dokumen `websitePages`.
Konten bawaan berasal dari tab WEBSITE PAGE pada workbook ARTA Partners [Landing Page].
Dokumen lama `siteSettings` tetap tersimpan dan tidak ditimpa. Formulir kontak lama
diganti dengan tautan email; tidak ada formulir yang seolah mengirim tanpa backend.

Jalankan `npm run cms:deploy` untuk memperbarui schema Studio. Di Studio, buat
menu **Website — 4 Halaman** (document ID **websitePages** sudah ditentukan).
Nilai awal sudah berisi copy terbaru. Setelah Publish, build GitHub Pages berikutnya
membaca dokumen tersebut. Bila dokumen belum ada, website memakai copy bawaan.

Data yang belum tersedia dan sengaja tidak dipublikasikan: alamat lengkap dan Maps,
foto kantor/tim/brand, jabatan pimpinan terkini, tahun bergabung tiap brand, serta
data sebelum–sesudah Snapobox. Tahun berdiri Sebelas (2018) adalah satu-satunya
milestone terverifikasi dalam workbook; roadmap bukan capaian. Nama tim dan
foto dapat ditambahkan melalui field team setelah dikonfirmasi. Tanpa foto brand,
website menampilkan panel tipografi berisi nama, bukan logo rekaan.

Field image/officeImage menerima URL HTTPS aset resmi. URL brand, alamat Maps,
dan tahun berdiri hanya tampil bila diisi. Daftar brand mengikuti urutan sheet terbaru.
Business Checkup tetap tersedia di `/business-checkup/`.

Website memakai **Sanity CMS**. Jika koneksi CMS belum diaktifkan, website tetap memakai konten bawaan sehingga halaman produksi tidak rusak.

## 1. Buat akun dan project Sanity

1. Jalankan `npm run cms` atau `npx sanity login`.
2. Login menggunakan Google/GitHub.
3. Buat project bernama **ARTA Partners** melalui `npx sanity projects create`.
4. Catat **Project ID** yang ditampilkan.
5. Buat dataset `production` jika belum tersedia: `npx sanity datasets create production`.

## 2. Hubungkan project lokal

Salin `.env.example` menjadi `.env.local`, lalu isi:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=project_id_dari_sanity
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
SANITY_PROJECT_ID=project_id_dari_sanity
SANITY_DATASET=production
# Hanya untuk project yang belum diklaim; hapus setelah login sebagai pemilik.
SANITY_AUTH_TOKEN=token_dari_proses_pembuatan
```

Project ID bukan secret dan aman dipakai di browser. Jangan memasukkan token API ke repository.

## 3. Masukkan konten website saat ini

```bash
npm run cms:seed
```

Perintah ini membuat dokumen **Konten Website ARTA** hanya jika dokumen tersebut belum ada. Menjalankannya kembali aman: konten yang sudah diedit tidak akan ditimpa.

Jika benar-benar ingin menghapus semua hasil edit dan mengembalikan konten bawaan, gunakan perintah reset berikut dengan hati-hati:

```bash
npm run cms:seed:reset
```

## 4. Jalankan dashboard CMS

```bash
npm run cms
```

Buka `http://localhost:3333`, pilih **Konten Website ARTA**, edit, lalu klik **Publish**.

## 5. Deploy dashboard CMS

```bash
npm run cms:deploy
```

Saat diminta hostname, gunakan nama seperti `arta-partners`, sehingga dashboard tersedia di alamat Sanity Studio yang diberikan. Custom domain `admin.artapartners.id` dapat dipasang setelah Studio pertama kali berhasil dideploy.

## 6. Hubungkan website produksi

Tambahkan repository variables berikut di GitHub → Settings → Secrets and variables → Actions → Variables:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET` dengan nilai `production`

Workflow GitHub Pages sudah membaca kedua variable tersebut. Setelah konten dipublish, website otomatis melakukan sinkronisasi setiap 10 menit. GitHub dapat menunda scheduled workflow beberapa menit ketika antrean sedang ramai.

> Tahap lanjutan yang direkomendasikan: pindahkan deployment website ke Vercel dan pasang webhook Sanity agar setiap klik Publish otomatis membangun website tanpa membuka GitHub Actions.
