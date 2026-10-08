# PRD: Tonang Portfolio & Admin Dashboard

**Target Domain:** `portfolio.vunk.my.id` (Port 3000 via Cloudflare Tunnel)  
**Workspace:** `/home/ubuntu/projects/tonang-portfolio`  
**Status:** DRAFT — Awaiting User Approval before OpenCode Execution  
**Prototype Stitch Project ID:** `16573123285877022295`  

---

## 1. Executive Summary & Goals

Transform `portfolio.vunk.my.id` from an inactive/failing state (currently Cloudflare 502) into a fast, high-impact personal developer portfolio with a lightweight, secure Admin Dashboard for managing projects and content.

### Goals
1. **Public Showcase:** Fast, responsive showcase for Arifin Tonang (Creative AI Engineer, Full-Stack & Automation Builder) featuring real projects (`movie.vunk.my.id`, `shop.vunk.my.id`, autonomous bots, video pipelines).
2. **Admin Dashboard:** A private, authenticated panel at `/admin` to view status telemetry and manage portfolio projects (CRUD: Add/Edit/Delete/Toggle visibility) without redeploying code.
3. **Rock-solid Uptime:** Clean Next.js App Router server bound to `127.0.0.1:3000`, resolving the Cloudflare Tunnel 502 gateway issue.
4. **Ponytail Simplicity:** Native web features, zero database bloat (local JSON store with atomic writes or lightweight SQLite), minimal dependencies.

### Non-Goals (YAGNI)
- No complex OAuth multi-user system (single admin password/token suffices).
- No heavy external CMS dependencies (Sanity, Strapi, Supabase) — keep origin self-contained.
- No heavy WebGL/Three.js bundles that slow down initial load (prioritize sub-1s FCP).

---

## 2. Positioning & Audience

- **Top Telemetry Badge:** `[ 🟢 SYSTEM OPERATIONAL • 24/7 AUTONOMOUS AGENTS ]` (Pulsing emerald beacon, amber glow border).
- **Hero Headline (Dynamic Dual-Tone):**
  - **"Architecting Autonomous AI & High-Yield Digital Engines"**
  - Text treatment: High-contrast white (`#FFFFFF`) with luminous amber gold gradient (`#F59E0B`) on key accents, eliminating flat typography.
- **Supporting Copy:** *"Creative AI Engineer & Automation Architect. Bridging generative intelligence with resilient edge systems."*
- **Live Terminal Metrics Strip:** Monospaced runtime stats: `Uptime: 99.98% • Latency: 24ms • Pipelines: 6 Active`.
- **Audience:** Clients, tech collaborators, Superteam Earn scouts, and web visitors exploring Vunk ecosystem products.

---

## 3. Design System (Obsidian Cyber-Minimalism)

Derived directly from the verified Google Stitch prototype:

| Token | Value | Purpose |
|---|---|---|
| **Canvas / Background** | `#08090B` / `#121315` | Deep obsidian dark canvas |
| **Surface Cards** | `#181920` / `#1F2022` | Card backgrounds with 1px `#2D2F3D` borders |
| **Primary Accent** | `#F59E0B` (Amber Gold) | Primary buttons, active badges, glowing accents |
| **Secondary Accent** | `#E5A93C` / `#10B981` | Secondary tags and live system status beacons |
| **Typography** | Geist (Headings), Inter (Body), JetBrains Mono (Telemetry/Code) | Instrument-grade precision hierarchy |

### Design Dials
- **ENERGY:** High-focus dark room workstation (low albedo, crisp amber glows).
- **RHYTHM:** Modular 12-column grid, compact telemetry cards, razor-thin borders.
- **MOTION:** Subtle CSS hover transforms (`translate-y-[-2px]`), 150ms border blend, no janky scroll hijackers.

---

## 4. Architecture & Page Structure

### Mobile-First Responsive Design (User Requirement)
- **Viewport Target:** Full smartphone compatibility (tested against 390px-430px mobile viewports).
- **Mobile Public Header:** Sticky compact navigation bar with `TONANG.AI` badge, live green pulse node, and tap-friendly hamburger drawer (min 48px touch targets).
- **Mobile Hero:** Dynamic stacked headline with metallic gold highlights, high visual punch, avoiding flat text blocks.
- **Mobile Project Showcase:** Single-column touch card stream or horizontal swipe cards with instant preview triggers.
- **Mobile Admin Dashboard:** 2x2 compact KPI metrics grid (`Projects`, `Views`, `Bots`, `Latency`) and stacked project cards replacing the wide table for seamless smartphone editing.

### A. Public Surface (`/`)
1. **Navigation:** Brand mark `TONANG.AI`, quick jump links (Projects, Stack, Services, Contact), subtle `/admin` trigger.
2. **Hero:** Headline, live status indicator (`Available for AI & Automation Contracts`), CTA buttons (*Explore Projects*, *Contact*).
3. **Projects Showcase:**
   - **VUNK Movie Portal:** Streaming & discovery platform (`movie.vunk.my.id`).
   - **VUNK E-Commerce:** High-performance storefront (`shop.vunk.my.id`).
   - **Autonomous Social Engine:** Automated content curation & multi-channel posting pipeline.
   - **Bang Motion AI Video:** Headless video motion graphics engine.
4. **Tech Matrix:** Node.js/Next.js, Python, Cloudflare Workers/Tunnels, Postgres, AI Model Routing.
5. **Contact & Socials:** GitHub (`tonangarivin-ui`), X (`@0xAI_D`), Telegram.

### B. Admin Surface (`/admin`)
1. **Auth Boundary:** Route `/admin/login` protected by session cookie (HttpOnly JWT or secure secret cookie). Unauthenticated requests redirect to `/admin/login`.
2. **Dashboard Overview (`/admin`):**
   - KPI telemetry (Active Projects count, Total views/clicks, Bot status, Edge latency).
   - Projects CRUD table (Title, URL, Category, Status badge, Edit/Delete buttons).
   - Quick Add Project form / modal.
   - System controls (Maintenance mode toggle, Cache flush).

---

## 5. Technical Constraints & Ponytail Rungs

- **Framework:** Next.js 15+ (App Router) with Tailwind CSS.
- **Storage:** Local JSON file `/data/projects.json` with synchronous atomic write (lazy rung 3/4 — no database server required, instant backup, zero maintenance). Upgrade path: SQLite/Postgres only if multi-editor concurrency is requested.
- **Hosting:** Systemd service `tonang-portfolio.service` running `bun run next start -p 3000` or `node server.js` on `127.0.0.1:3000`, connected via existing Cloudflare Tunnel `portfolio.vunk.my.id`.

---

## 6. Acceptance Criteria

1. `curl -sI https://portfolio.vunk.my.id` returns `HTTP/2 200 OK` (no 502 Bad Gateway).
2. Public home page loads clean dark UI with all links functional.
3. Accessing `/admin` when logged out redirects to `/admin/login`.
4. Logging into `/admin` with the admin secret unlocks the dashboard.
5. Adding or editing a project in `/admin` immediately reflects on the public homepage.
6. Zero TypeScript/ESLint errors on `npm run build`.
