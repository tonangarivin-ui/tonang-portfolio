# Tonang Arivin - Portfolio

Website portfolio personal untuk **Tonang Arivin**, seorang AI-Assisted Full-Stack Developer dari Jember, Jawa Timur (GMT+7).

## Gambaran Proyek

Website ini dibangun menggunakan **Next.js (App Router)** dan **TypeScript** tanpa ketergantungan library pihak ketiga yang berlebihan. Dirancang dengan pendekatan editorial-digital yang mengutamakan kecepatan akses, kenyamanan di perangkat mobile, dan kejelasan informasi tanpa klaim marketing atau testimonial fiktif.

## Fitur Utama

- **Hero Option A**: Menampilkan headline teruji: *"Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools."*
- **Interactive Browser Mockup**: Mockup jendela peramban interaktif dengan tab selector untuk tiga proyek nyata, banner `UI preview` yang jujur, dan tautan langsung ke situs aktif.
- **Sistem Dua Tema (Light editorial & Dark digital)**:
  - Default: Light editorial (`#FAF8F5`).
  - Switchable: Dark digital (`#0F1115`).
  - Persisten di `localStorage` (`tonang-theme`) dengan script inline anti-FOUC.
  - Memenuhi standar rasio kontras WCAG AA di kedua tema.
- **Daftar Karya Terpilih (Selected Work)**:
  1. *Sugar Bliss Bakery* (Live) - https://sugar-bliss-bakery2.vercel.app/
  2. *VUNK Movie* (Ongoing) - https://movie.vunk.my.id
  3. *VUNK Shop* (Ongoing / Prototype) - https://shop.vunk.my.id
- **Informasi Pribadi & Layanan**:
  - Bio vibe coder yang jujur dan tanpa foto AI rekaan.
  - Tiga layanan spesifik: Web Design & Development, Product Design, dan AI-Assisted Prototyping.
  - Penjelasan penggunaan tools AI nyata (Hermes Agent, OpenCode, Antigravity).
  - Tiga tahap alur kerja nyata: Memahami masalah, Merancang solusi, Membangun dan menguji.
- **Aksesibilitas & Standar Antislop**:
  - Skip link ke konten utama (`#main-content`).
  - Menu mobile drawer responsif dengan dukungan tombol Escape dan pemulihan fokus.
  - Indikator fokus `:focus-visible` 2px outline dengan offset di seluruh kontrol interaktif.
  - Target sentuh minimal 44x44px.
  - Dukungan `prefers-reduced-motion` untuk kenyamanan visual.
  - Bebas dari karakter em dash (`—`) sesuai pedoman copywriting R-02.
  - Hak cipta: `© Tonang Arivin`.

## Cara Menjalankan

### Kebutuhan Sistem

- Node.js versi 18 atau lebih tinggi
- npm
- PostgreSQL database (Neon serverless didukung)

### Konfigurasi Environment

Salin contoh file environment dan sesuaikan konfigurasinya:

```bash
cp .env.example .env.local
```

Variabel yang dibutuhkan:
- `DATABASE_URL`: Connection string PostgreSQL / Neon
- `BETTER_AUTH_SECRET`: Kunci rahasia Better Auth (minimal 32 karakter)
- `BETTER_AUTH_URL`: URL origin aplikasi (contoh: `http://localhost:3000`)

### Instalasi Dependensi

```bash
npm install
```

### Setup Database & Migrasi (Drizzle ORM)

Skema database backend dikelola menggunakan Drizzle ORM untuk PostgreSQL/Neon dan terintegrasi dengan Better Auth.

- **Generate migrasi baru dari skema TypeScript**:
  ```bash
  npm run db:generate
  ```
- **Jalankan migrasi ke database**:
  ```bash
  npm run db:migrate
  ```
- **Push skema langsung ke database**:
  ```bash
  npm run db:push
  ```

### Menjalankan Server Pengembangan

```bash
npm run dev
```

Buka peramban di `http://localhost:3000`.

### Backend & Endpoint API

- `/api/auth/[...all]`: Handler Better Auth (email & password authentication).
- `/api/protected`: Contoh route API terproteksi untuk memverifikasi proteksi sesi (mengembalikan 401 Unauthorized jika tanpa sesi valid).

### Pemeriksaan Kode & Build

- **Type Check**:
  ```bash
  npx tsc --noEmit
  ```
- **Lint**:
  ```bash
  npm run lint
  ```
- **Build Produksi**:
  ```bash
  npm run build
  npm start
  ```
