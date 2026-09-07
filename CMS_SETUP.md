# ARTA Partners CMS

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

Workflow GitHub Pages sudah membaca kedua variable tersebut. Setelah konten dipublish, jalankan ulang workflow **Deploy ARTA Website to GitHub Pages** agar website mengambil konten terbaru.

> Tahap lanjutan yang direkomendasikan: pindahkan deployment website ke Vercel dan pasang webhook Sanity agar setiap klik Publish otomatis membangun website tanpa membuka GitHub Actions.
