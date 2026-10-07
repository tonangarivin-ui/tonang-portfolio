# Tonang Arivin Portfolio

## Status

Draft PRD untuk review. Belum ada implementasi code dan belum dikirim ke OpenCode.

## 1. Ringkasan Produk

Website portfolio personal untuk Tonang Arivin, seorang AI-Assisted Full-Stack Developer dari Jember, Jawa Timur.

Website ini harus memperlihatkan cara Tonang merancang, membangun, dan menghidupkan website serta produk digital dengan bantuan AI tools. Fokusnya bukan menjual layanan agency secara generik, tetapi menunjukkan karya nyata, cara berpikir, dan status project secara jujur.

## 2. Tujuan

- Menjelaskan siapa Tonang dan jenis pekerjaan yang dikerjakan.
- Menampilkan project nyata yang sudah live, sedang dibangun, atau masih berupa prototype.
- Menunjukkan kemampuan pada web development, product design, dan AI-assisted prototyping.
- Memberi jalur kontak yang jelas tanpa form backend pada versi pertama.
- Membuat portfolio yang cepat dibuka, nyaman di mobile, aksesibel, dan mudah dikembangkan.

## 3. Bukan Tujuan Versi Pertama

- Tidak membuat CMS atau dashboard admin.
- Tidak membuat sistem login.
- Tidak membuat blog.
- Tidak membuat sistem analytics custom.
- Tidak memakai database.
- Tidak membuat statistik performa atau angka bisnis yang belum memiliki sumber.
- Tidak membuat foto/avatar AI.
- Tidak membuat case study panjang jika data detailnya belum tersedia.

## 4. Target Pengunjung

### Utama

- Pemilik bisnis kecil atau personal brand yang membutuhkan website.
- Orang yang membutuhkan prototype produk digital.
- Developer atau calon collaborator yang ingin melihat cara kerja Tonang.

### Kebutuhan Pengunjung

Dalam satu kunjungan singkat, pengunjung harus bisa memahami:

1. Tonang mengerjakan apa.
2. Project apa yang pernah atau sedang dikerjakan.
3. Bagaimana cara menghubungi Tonang.

## 5. Positioning

### Role

AI-Assisted Full-Stack Developer

### Hero utama

Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools.

### Alternatif personal

Saya seorang vibe coder yang merancang, membangun, dan menghidupkan ide digital menjadi produk yang bisa digunakan.

Copy final dapat dipilih saat implementasi, tetapi tidak boleh berubah menjadi bahasa agency atau klaim marketing yang tidak terbukti.

## 6. Arah Visual

### Karakter

- Personal.
- Sederhana.
- Sedikit eksperimental.
- Profesional tanpa terasa seperti website agency.
- Terasa dibuat oleh individu yang benar-benar membangun produk.
- Dua tema tersedia dan dapat di-switch oleh pengguna:
  - Light editorial sebagai tema default.
  - Dark digital sebagai tema alternatif.
- Kedua tema harus memiliki kontras, hierarchy, dan focus state yang tetap valid.

### Pilihan Copy Hero

Yang dimaksud pilihan copy hero adalah memilih headline utama dari dua draft brief:

**Opsi A, lebih jelas dan profesional:**

> Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools.

**Opsi B, lebih personal:**

> Saya seorang vibe coder yang merancang, membangun, dan menghidupkan ide digital menjadi produk yang bisa digunakan.

Rekomendasi: gunakan Opsi A sebagai headline utama karena lebih cepat menjelaskan pekerjaan Tonang. Opsi B dipakai sebagai supporting copy di About atau paragraf setelah headline.

### Design Read

Reading this as: personal developer portfolio untuk calon klien dan collaborator, dengan visual editorial-digital yang tenang namun memiliki beberapa interaksi eksploratif, dial ENERGY 2 / RHYTHM 2 / MOTION 2.

### Focal point

Hero headline dan interactive browser mockup menjadi fokus utama layar pertama.

### Identity motif

Browser window yang menampilkan project nyata dipakai sebagai motif berulang untuk menghubungkan identitas Tonang dengan aktivitas membangun produk digital.

### Motion

Motion digunakan untuk:

- Menampilkan transisi masuk antar bagian secara ringan.
- Memberi feedback pada hover dan focus.
- Membuat browser mockup terasa hidup dengan perubahan project yang dikontrol pengguna.

Tidak boleh ada animasi yang terus bergerak tanpa tujuan UX.

### Warna dan tipografi

Belum dikunci di brief. Implementasi harus memilih palet maksimal 2 sampai 3 warna utama dan 1 accent, lalu mencatat alasan pemilihannya di dokumentasi project. Hindari gradient biru-ungu generik, glow berlebihan, dan penggunaan dark mode tanpa alasan brand.

## 7. Struktur Halaman

### 7.1 Header

Isi:

- Wordmark teks: Tonang Arivin.
- Theme switcher untuk Light editorial dan Dark digital.

Perilaku theme switcher:

- Tema default: Light editorial.
- Pilihan tema disimpan di `localStorage` agar bertahan saat reload.
- Jika belum ada pilihan tersimpan, hormati `prefers-color-scheme` hanya jika tidak bertentangan dengan default Light editorial yang ditetapkan produk.
- Label dan status tema harus dapat dibaca screen reader.
- Kedua tema wajib diuji untuk kontras, layout, focus state, browser mockup, dan mobile.

Link navigasi:

- Link ke Selected Work.
- Link ke About.
- Link ke Services.
- Link kontak.

Perilaku:

- Navigasi menuju section yang benar-benar ada.
- Mobile navigation berupa menu yang dapat dibuka dan ditutup.
- Semua kontrol keyboard-accessible.

### 7.2 Hero

Isi:

- Headline positioning.
- Deskripsi singkat.
- CTA kontak yang jelas, misalnya `Bicarakan project`.
- Secondary link menuju Selected Work.
- Interactive browser mockup.

Browser mockup:

- Memiliki tab atau selector project.
- Menampilkan UI preview buatan yang diberi label jelas sebagai `UI preview`.
- Preview tidak boleh dipresentasikan sebagai screenshot produk final atau hasil live embed.
- Link `Open project` menuju URL project asli.

### 7.3 Selected Work

Tampilkan tiga project dari brief:

1. Sugar Bliss Bakery
   - Status: Live.
   - URL: https://sugar-bliss-bakery2.vercel.app/
2. VUNK Movie
   - Status: Ongoing.
   - URL: https://movie.vunk.my.id
3. VUNK Shop
   - Status: Ongoing / prototype.
   - URL: https://shop.vunk.my.id

Setiap project menampilkan:

- Nama.
- Status nyata.
- Deskripsi singkat berbasis informasi yang tersedia.
- Peran Tonang jika sudah diketahui.
- Link menuju project.

Jangan menambahkan angka pengunjung, revenue, conversion rate, testimonial, atau hasil bisnis tanpa sumber.

### 7.4 About

Gunakan bio draft berikut sebagai bahan awal:

Saya manusia biasa yang kebetulan memiliki kemampuan vibe coding. Saya merancang dan membangun website serta produk digital dengan bantuan Hermes Agent, OpenCode, dan Antigravity. Saya terbuka mengerjakan berbagai jenis project selama proses dan hasilnya bisa didiskusikan bersama.

Bagian ini tidak memakai foto/avatar untuk versi pertama.

### 7.5 Services

Tampilkan tiga layanan:

1. Web Design & Development
   - Website dan halaman yang dapat digunakan dan dirawat.
2. Product Design
   - User flow, fitur, dashboard, dan aplikasi digital.
3. AI-Assisted Prototyping
   - Eksplorasi ide dan pembuatan prototype dengan bantuan AI tools.

Deskripsi harus spesifik dan tidak memakai buzzword seperti revolutionary, seamless, cutting-edge, atau AI-powered sebagai hiasan.

### 7.6 Tools / Capabilities

Tools yang boleh ditampilkan:

- Hermes Agent.
- OpenCode.
- Antigravity.

Tampilkan sebagai daftar atau teks yang mendukung konteks, bukan logo bar palsu atau klaim sertifikasi.

### 7.7 Process

Gunakan alur nyata tiga tahap:

1. Memahami masalah.
2. Merancang solusi.
3. Membangun dan menguji.

Tahap tidak wajib memakai ikon. Struktur harus menjelaskan aktivitas tiap tahap secara singkat.

### 7.8 Contact CTA

Isi:

- Ajakan berdiskusi yang personal.
- Email: tonangarivin.n8n@gmail.com.
- Telegram: https://t.me/iamtamvan.
- GitHub: https://github.com/tonangarivin-ui.

Versi pertama menggunakan link email dan link eksternal. Form kontak tidak dibuat karena belum ada kebutuhan backend.

### 7.9 Footer

Isi secukupnya:

- Nama Tonang Arivin.
- Lokasi Jember, Jawa Timur.
- GMT+7.
- Link email, Telegram, dan GitHub.
- Copyright: `© Tonang Arivin`.

Tidak membuat empat kolom footer template.

## 8. Fitur Fungsional

### Wajib

- Smooth scroll atau native anchor navigation.
- Mobile menu yang bisa dibuka dan ditutup.
- Interactive browser mockup dengan pergantian project.
- Link project eksternal yang valid.
- Link email, Telegram, dan GitHub.
- Hover dan focus state yang terlihat.
- Reduced-motion support melalui `prefers-reduced-motion`.

### Tidak dibuat

- Login.
- Database.
- CMS.
- Search.
- Blog.
- Contact form.

## 9. Konten dan Kejujuran Data

- Hanya gunakan project dan URL yang diberikan.
- Status project harus memakai label Live, Ongoing, atau Prototype sesuai brief.
- Jangan membuat statistik.
- Jangan membuat testimonial.
- Jangan membuat nama klien, logo klien, foto orang, atau hasil bisnis.
- Jika visual preview belum tersedia, gunakan placeholder yang terlihat sebagai placeholder atau gunakan preview dari URL asli tanpa mengklaim detail yang belum diverifikasi.

## 10. Persyaratan Teknis

### Stack awal yang direkomendasikan

- Next.js.
- TypeScript.
- CSS lokal atau CSS Modules.
- Dependency tambahan seminimal mungkin.
- Hosting target dapat diputuskan setelah implementasi.

OpenCode boleh menyesuaikan stack hanya jika menemukan alasan teknis konkret. Jangan menambahkan library animasi atau component library jika CSS dan browser API sudah cukup.

### Struktur yang diharapkan

- `app/` untuk route dan layout.
- `components/` hanya untuk komponen yang memang dipakai lebih dari satu kali atau memiliki perilaku tersendiri.
- `data/projects.ts` untuk data project yang ditampilkan.
- `public/` hanya untuk aset yang benar-benar tersedia.
- `README.md` berisi cara menjalankan dan keputusan penting.

Jika satu file sederhana sudah cukup, jangan memecahnya menjadi abstraksi tambahan.

## 11. Accessibility

- HTML semantik.
- Heading hierarchy yang benar.
- Semua link memiliki nama yang jelas.
- Mobile menu dapat digunakan dengan keyboard dan ditutup dengan Escape.
- Focus indicator terlihat.
- Kontras minimal WCAG AA.
- Tap target minimal 44px.
- Tidak mengandalkan hover sebagai satu-satunya cara membaca informasi.
- Semua motion menghormati `prefers-reduced-motion`.
- Tidak ada horizontal overflow pada mobile.

## 12. Responsiveness

Minimum breakpoint yang harus diverifikasi:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1440px.

Hero, browser mockup, project list, dan navigasi harus berubah secara wajar di mobile. Tidak boleh ada elemen yang keluar layar atau teks yang terpotong.

## 13. Acceptance Criteria

### Konten

- [ ] Pengunjung memahami role Tonang dalam beberapa detik.
- [ ] Tiga project tampil dengan status dan URL yang benar.
- [ ] Tidak ada statistik, testimonial, atau klaim bisnis rekaan.
- [ ] Contact CTA bekerja melalui email, Telegram, dan GitHub.

### Interaksi

- [ ] Semua navbar link menuju section yang ada.
- [ ] Mobile menu membuka, menutup, dan dapat ditutup dengan Escape.
- [ ] Browser mockup dapat berpindah project.
- [ ] Link `Open project` membuka URL yang sesuai.
- [ ] Tidak ada tombol mati.

### Visual

- [ ] Tampilan memiliki identitas personal dan tidak terasa seperti template agency.
- [ ] Hero memiliki satu focal point.
- [ ] Motion secukupnya dan memiliki tujuan.
- [ ] Tidak memakai foto/avatar tanpa persetujuan.
- [ ] Tidak memakai dekorasi generik tanpa alasan.

### Teknis dan aksesibilitas

- [ ] Project dapat dijalankan lokal.
- [ ] Build production berhasil.
- [ ] Console browser tidak memiliki error.
- [ ] Tidak ada horizontal overflow pada breakpoint yang diuji.
- [ ] Semua kontrol dapat dioperasikan dengan keyboard.
- [ ] Contrast dan focus state diperiksa.
- [ ] `prefers-reduced-motion` berfungsi.

## 14. Rencana Implementasi Setelah PRD Disetujui

1. OpenCode membuat scaffold minimum di `/home/ubuntu/projects/tonang-portfolio`.
2. OpenCode mengimplementasikan struktur halaman dan konten dari PRD.
3. OpenCode menambahkan browser mockup dan mobile menu.
4. OpenCode menambahkan responsive styling, accessibility, dan reduced-motion.
5. Jalankan lint, typecheck, dan production build.
6. Jalankan aplikasi lokal dan lakukan click-through pada semua kontrol.
7. Periksa console dan breakpoint mobile.
8. Review hasil visual sebelum menambah fitur lain.

## 15. Pertanyaan yang Perlu Diputuskan Saat Review

1. Apakah nama folder `/home/ubuntu/projects/tonang-portfolio` sudah benar?
2. Apakah hero memakai copy utama atau copy personal?
3. Apakah default visual lebih dekat ke light editorial, dark digital, atau arah lain?
4. Apakah browser mockup boleh memakai preview dari URL live, atau sementara cukup berupa UI preview buatan yang diberi label?
5. Apakah `Copyright` perlu ditampilkan di footer?

## 16. Keputusan Ponytail

- Tidak membuat backend karena contact link sudah cukup untuk versi pertama.
- Tidak membuat CMS karena konten project masih sedikit dan statis.
- Tidak menambah component library karena kebutuhan dapat ditangani dengan HTML, CSS, dan TypeScript sederhana.
- Tidak membuat statistik, testimonial, foto/avatar, atau logo project karena belum ada data dan persetujuan.
- Tidak mengirim instruksi ke OpenCode sebelum PRD ini direview dan disetujui.
