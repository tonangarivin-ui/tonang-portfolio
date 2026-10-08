# Execution Plan: Tonang Portfolio & Admin Dashboard

**Target Directory:** `/home/ubuntu/projects/tonang-portfolio`  
**Execution Tool:** OpenCode (to be executed after user review and approval)  
**Ponytail Rule:** Smallest working diff, zero speculative dependencies.

---

## Phase 0: Prototype & Design Review (Current Gate)
- [x] Create Google Stitch Project (`projects/16573123285877022295`).
- [x] Generate Public Portfolio Screen via Stitch.
- [x] Generate Admin Dashboard Screen via Stitch.
- [x] Download prototype previews to `prototypes/` for user inspection.
- [x] Publish PRD.md & PLAN.md.
- [ ] **USER APPROVAL GATE:** User confirms visual direction & PRD specifications before code scaffolding.

---

## Phase 1: Clean Foundation & Public Showcase (Slice 1)
1. Initialize clean, minimal Next.js App Router structure with Tailwind CSS in `/home/ubuntu/projects/tonang-portfolio`.
2. Seed initial `/data/projects.json` with real Vunk ecosystem entries (`movie.vunk.my.id`, `shop.vunk.my.id`, AI bot pipelines).
3. Build the public homepage (`src/app/page.tsx`) matching the Obsidian Cyber-Minimalism design tokens from Stitch.
4. Verify local build: `bun run build` or `npm run build`.

---

## Phase 2: Admin Authentication & Boundary (Slice 2)
1. Implement route group `/admin/(auth)/login` and `/admin/(dashboard)/layout.tsx` to prevent redirect loops.
2. Minimal server-side password check via Server Action / API using HttpOnly signed session cookie (Ponytail: simple HMAC or standard `jose` token with environment secret).
3. Test unauthenticated request: `curl http://localhost:3000/admin` -> Redirects to `/admin/login`.

---

## Phase 3: Admin Dashboard & CRUD Operations (Slice 3)
1. Render Admin Dashboard (`/admin`) with KPI stats and Project management table from the Stitch template.
2. Implement Add/Edit/Delete actions persisting directly to `/data/projects.json`.
3. Verify changes made in admin immediately appear on the public homepage without rebuild.

---

## Phase 4: Production Service & Cloudflare Tunnel Verification (Slice 4)
1. Setup systemd service `/etc/systemd/system/tonang-portfolio.service` on port `3000`.
2. Start and enable service: `sudo systemctl enable --now tonang-portfolio`.
3. Check Cloudflare Tunnel health: `curl -sI https://portfolio.vunk.my.id` -> Confirm `200 OK`.
