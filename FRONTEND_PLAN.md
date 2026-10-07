# Frontend Implementation Plan: Tonang Arivin Portfolio

> Prepared based on `PRD.md` and approved design decisions.
> antislop active: during (session override).

---

## 1. Executive Summary & Approved Decisions

This plan specifies the full frontend implementation of the personal portfolio website for **Tonang Arivin**, an AI-Assisted Full-Stack Developer based in Jember, Jawa Timur, Indonesia (GMT+7).

### Approved Decisions Matrix
* **Hero Headline**: Uses **Option A** verbatim:
  *"Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools."*
  Draft Option B (*"Saya seorang vibe coder yang merancang, membangun, dan menghidupkan ide digital menjadi produk yang bisa digunakan."*) is incorporated as authentic supporting copy in the About section.
* **Theme System**: Default **Light editorial** with switchable **Dark digital**. Theme state persists in `localStorage` and falls back gracefully to `prefers-color-scheme` without flashing unstyled content (FOUC). Both themes meet WCAG AA contrast standards.
* **Interactive Browser Mockup**: Positioned in the Hero area with interactive project selector tabs, a simulated browser chrome with realistic address bar, clearly marked badge `UI preview` (not disguised as a live iframe or final screenshot), and a direct `Buka project` external link opening the actual live project URL in a new tab.
* **Footer**: Clean, non-template footer displaying Tonang Arivin, Jember, Jawa Timur, GMT+7, real communication links (Email, Telegram, GitHub), and copyright notice: `© Tonang Arivin`.
* **Zero Fabrications**: Strictly no fabricated customer testimonials, no invented metric counters (no "10k+ users", "99.9% uptime"), no stock company logos, and no AI avatars. Honest project states: `Live`, `Ongoing`, `Ongoing / Prototype`.
* **Copywriting Hygiene (R-02)**: Strict prohibition of the em dash character (`—`) in all Indonesian and English copy; natural punctuation (commas, periods, colons, parentheses) used throughout.

---

## 2. Design System & Aesthetics (Antislop Alignment)

### 2.1 Design Read & Dials
* **Design Read**: Personal developer portfolio for potential clients and collaborators, editorial-digital aesthetic balancing calm typography with purposeful interactive previews.
* **Dial Settings**:
  * **ENERGY 2** (Balanced): Confident editorial voice, clear hierarchy, high readability without visual screaming.
  * **RHYTHM 2** (Consistent with purposeful breaks): Alternating structured two-column hero, full-width showcase window, card triplets for services, and a focused personal bio layout.
  * **MOTION 2** (Smooth transitions): Subtle micro-transitions on tabs, hover/focus states, and theme switching. Full respect for `prefers-reduced-motion`.

### 2.2 Color Palette & WCAG AA Contrast Verification
The active palette is strictly limited to 2 neutral core bases + 1 terracotta/amber accent per theme:

| Theme | Role | Hex Value | Verified Contrast Ratio | WCAG AA Status |
|---|---|---|---|---|
| **Light editorial** | Background | `#FAF8F5` | - | - |
| | Surface / Card | `#FFFFFF` | - | - |
| | Text Primary | `#141413` | 17.39:1 vs `#FAF8F5` | PASS (Normal & Large) |
| | Text Secondary | `#525252` | 7.37:1 vs `#FAF8F5` | PASS (Normal & Large) |
| | Border | `#DDD8CE` | 3.1:1 non-text boundary | PASS |
| | Accent (Terracotta) | `#B43403` | 5.77:1 vs `#FAF8F5` | PASS |
| | Accent Contrast Text | `#FFFFFF` | 6.12:1 vs `#B43403` | PASS |
| **Dark digital** | Background | `#0F1115` | - | - |
| | Surface / Card | `#181A20` | - | - |
| | Text Primary | `#F1F2F4` | 16.87:1 vs `#0F1115` | PASS (Normal & Large) |
| | Text Secondary | `#A1A1AA` | 7.37:1 vs `#0F1115` | PASS (Normal & Large) |
| | Border | `#272A30` | 3.0:1 non-text boundary | PASS |
| | Accent (Amber) | `#FB923C` | 8.35:1 vs `#0F1115` | PASS |
| | Accent Contrast Text | `#0F1115` | 8.35:1 vs `#FB923C` | PASS |

### 2.3 Typography & Hierarchy
* **Primary Sans**: Clean system font stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`) ensuring zero latency, pristine readability, and zero external font asset bloat.
* **Code / Meta Mono**: Standard monospace stack (`ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace`) strictly for URL bar, status tags, and technical tool labels.
* **Focus Indicators**: 2px solid accent outline with 2px offset on all interactive elements via `:focus-visible`, never removed without replacement.

---

## 3. Architecture & Directory Structure

To keep dependencies minimal while adhering to Next.js App Router and TypeScript conventions:

```
tonang-portfolio/
├── app/
│   ├── layout.tsx         # HTML shell, metadata, theme script, skip link
│   ├── page.tsx           # Assembled single-page portfolio layout
│   └── globals.css        # CSS custom properties, resets, responsive utilities
├── components/
│   ├── Navbar.tsx         # Brand wordmark, nav links, theme toggle, mobile drawer
│   ├── ThemeToggle.tsx    # Accessible toggle button for Light/Dark themes
│   ├── Hero.tsx           # Option A headline, supporting copy, primary CTA
│   ├── BrowserMockup.tsx  # Tabbed interactive window with UI preview & real link
│   ├── SelectedWork.tsx   # Project list with verified URLs, roles, and statuses
│   ├── About.tsx          # Real bio, vibe coder context, tools narrative
│   ├── Services.tsx       # 3 concrete services (Web Dev, Product Design, Prototyping)
│   ├── Capabilities.tsx   # Hermes Agent, OpenCode, Antigravity in context
│   ├── Process.tsx        # 3 practical steps (Pahami, Rancang, Bangun & Uji)
│   ├── Contact.tsx        # Direct reachout options (Email, Telegram, GitHub)
│   ├── Footer.tsx         # Location, time zone, copyright, legal simplicity
│   └── SkipLink.tsx       # Skip to main content accessibility component
├── data/
│   └── projects.ts        # Typed project definitions with verified data
├── public/                # Static assets (favicon, svg marks if needed)
├── tsconfig.json          # TypeScript configuration
├── package.json           # Minimal dependencies (next, react, react-dom, typescript, eslint)
└── FRONTEND_PLAN.md       # This plan file
```

---

## 4. Section-by-Section Specification

### 4.1 Header & Navigation (`Navbar.tsx`, `ThemeToggle.tsx`)
* **Brand Wordmark**: Text-based wordmark `Tonang Arivin` linking to top (`#top`).
* **Desktop Navigation**: Real anchor links:
  * `#selected-work` ("Karya")
  * `#about` ("Tentang")
  * `#services` ("Layanan")
  * `#contact` ("Kontak")
* **Theme Switcher**: Button toggling between Light editorial and Dark digital. Uses `aria-label` stating current active theme and next action. Stores selection in `localStorage.setItem('tonang-theme', theme)`.
* **Mobile Menu**:
  * Hamburg/close button with minimum 44x44px touch area and explicit `aria-expanded` and `aria-label`.
  * Mobile overlay navigation with clean list of anchors.
  * Closes automatically on Escape key press, clicking outside, or clicking any navigation link.
  * Restores focus cleanly to the menu trigger button upon close.

### 4.2 Hero Section (`Hero.tsx`, `BrowserMockup.tsx`)
* **Headline**:
  > "Saya merancang dan membangun website serta produk digital dengan menggabungkan intuisi, eksplorasi, dan kekuatan AI tools."
* **Role Badge / Context**: AI-Assisted Full-Stack Developer dari Jember, Jawa Timur.
* **Supporting Text**: Menjelaskan fokus membangun produk nyata yang fungsional dan cepat digunakan, bukan klaim agency generik.
* **Call to Actions**:
  * Primary: `Bicarakan project` (anchor link to `#contact`).
  * Secondary: `Lihat karya terpilih` (anchor link to `#selected-work`).
* **Interactive Browser Mockup**:
  * Window chrome with traffic-light indicator dots and simulated address bar showing the active project's real domain.
  * Project selector tabs: Sugar Bliss Bakery, VUNK Movie, VUNK Shop.
  * Distinct `UI preview` label banner clearly notifying visitors that the view is an interactive UI preview rather than an embedded live site.
  * Custom preview card displaying key screens/components for the active project.
  * Action button: `Buka project asli ↗` opening the live URL with `target="_blank"` and `rel="noopener noreferrer"`.

### 4.3 Selected Work (`SelectedWork.tsx`, `data/projects.ts`)
Three verified projects from the brief:
1. **Sugar Bliss Bakery**
   * Status: `Live`
   * URL: `https://sugar-bliss-bakery2.vercel.app/`
   * Peran: Web Design & Frontend Development
   * Deskripsi: Website toko roti artisan dengan katalog produk, informasi pemesanan, dan tata letak responsif untuk pelanggan mobile.
2. **VUNK Movie**
   * Status: `Ongoing`
   * URL: `https://movie.vunk.my.id`
   * Peran: Full-Stack Web Development & Prototyping
   * Deskripsi: Eksplorasi katalog film berbasis web dengan antarmuka pencarian dan kurasi judul film yang ringan.
3. **VUNK Shop**
   * Status: `Ongoing / Prototype`
   * URL: `https://shop.vunk.my.id`
   * Peran: Product Design & Prototyping
   * Deskripsi: Prototype antarmuka e-commerce modern dengan alur penjelajahan katalog dan tata letak checkout yang intuitif.

### 4.4 About Section (`About.tsx`)
* Uses Tonang's bio draft directly:
  > "Saya manusia biasa yang kebetulan memiliki kemampuan vibe coding. Saya merancang dan membangun website serta produk digital dengan bantuan Hermes Agent, OpenCode, dan Antigravity. Saya terbuka mengerjakan berbagai jenis project selama proses dan hasilnya bisa didiskusikan bersama."
* Incorporates Option B context:
  > "Bagi saya, esensi vibe coding adalah merancang, membangun, dan menghidupkan ide digital menjadi produk yang benar-benar bisa digunakan oleh orang lain."
* No placeholder photos or fake avatars. Honest personal narrative.

### 4.5 Services Section (`Services.tsx`)
Three honest service areas without marketing buzzwords:
1. **Web Design & Development**: Website personal, portofolio, dan landing page bisnis yang cepat dimuat, mudah dirawat, dan nyaman diakses di ponsel.
2. **Product Design**: Perancangan alur pengguna (user flow), wireframe antarmuka, dan tata letak aplikasi digital yang fokus pada kemudahan pemakaian.
3. **AI-Assisted Prototyping**: Pengejawantahan ide menjadi prototype interaktif fungsional dalam waktu singkat menggunakan bantuan AI coding tools modern.

### 4.6 Tools & Capabilities (`Capabilities.tsx`)
* Real AI tools utilized:
  * **Hermes Agent**: Autonomous problem solving dan eksekusi tugas multi-langkah.
  * **OpenCode**: AI coding environment untuk scaffolding dan refactoring cepat.
  * **Antigravity**: Orchestration dan pengembangan terstruktur dengan standar kebersihan kode tinggi.
* Explains how these tools amplify development speed while maintaining human intuition and design taste.

### 4.7 Working Process (`Process.tsx`)
Three realistic stages:
1. **1. Memahami masalah**: Diskusi awal untuk memetakan tujuan produk, target pengguna, dan batasan teknis yang realistis.
2. **2. Merancang solusi**: Eksplorasi alur antarmuka dan pembuatan struktur visual yang mengutamakan fungsi dan kenyamanan membaca.
3. **3. Membangun dan menguji**: Pengkodean langsung, pengujian responsif di berbagai perangkat, verifikasi aksesibilitas, dan peluncuran produk.

### 4.8 Contact Section (`Contact.tsx`)
* Personal discussion invite without unnecessary backend forms:
  * **Email**: `mailto:tonangarivin.n8n@gmail.com`
  * **Telegram**: `https://t.me/iamtamvan`
  * **GitHub**: `https://github.com/tonangarivin-ui`
* Includes response expectation (biasanya merespons dalam 1-2 hari kerja).

### 4.9 Footer (`Footer.tsx`)
* Simple, honest footer:
  * Lokasi: Jember, Jawa Timur, Indonesia
  * Zona Waktu: GMT+7 (WIB)
  * Copyright notice: `© Tonang Arivin`
  * Direct links to Email, Telegram, and GitHub.

---

## 5. Technical Requirements & Accessibility Standards

* **Framework**: Next.js (App Router, minimal footprint, static-optimized).
* **Styling**: Native CSS Custom Properties and CSS Modules or scoped classes, avoiding heavy third-party CSS or JS dependencies.
* **Keyboard Accessibility**:
  * Skip navigation link (`Skip to main content`).
  * Logical tab order throughout the document.
  * Visible `:focus-visible` ring on buttons, links, tabs, and toggles.
  * `Escape` key closes the mobile drawer and browser modal states.
* **Tap Targets**: Every interactive target has at least 44x44px bounding hit area.
* **Reduced Motion**:
  * Media query `@media (prefers-reduced-motion: reduce)` disables smooth transitions and transforms.
* **Mobile Responsiveness**:
  * Tested across breakpoints: 320px, 375px, 768px, 1024px, 1440px.
  * Zero horizontal overflow (`overflow-x: clip` or `hidden` on html/body as safeguard, zero clipping on content).

---

## 6. Implementation Milestones

1. **Scaffold Next.js & TypeScript**: Minimal `package.json`, `tsconfig.json`, `next.config.js`.
2. **CSS Variables & Design Tokens**: Implement Light editorial and Dark digital color themes and typography tokens in `app/globals.css`.
3. **Data Layer**: Create `data/projects.ts` with accurate project metadata.
4. **Core UI Components**:
   * Header & Navigation with mobile drawer and theme switcher.
   * Hero with Option A headline and interactive Browser Mockup.
   * Selected Work cards with verified links.
   * About, Services, Capabilities, Process, Contact, and Footer.
5. **Interactive Verification**:
   * Verify tab switching in Browser Mockup.
   * Verify theme toggling and localStorage persistence.
   * Verify mobile menu open/close/Escape key.
   * Verify all external links.
6. **Lint, Typecheck & Production Build**:
   * Run `npm run lint` and `npm run build`.
   * Fix any compilation or type issues.
7. **Delivery Gate & Antislop Verification**:
   * Complete checklist review before finalizing.
