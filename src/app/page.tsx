import Link from "next/link";
import Clock from "@/components/clock";
import { getProjects } from "@/lib/projects";

export const revalidate = 0;

const stack = [
  {
    title: "Runtimes",
    body: "TypeScript, Next.js 15 App Router, Node 22, Python 3.12. Nothing exotic, everything current.",
    icon: "code",
  },
  {
    title: "Infrastructure",
    body: "Cloudflare Zero Trust tunnels, Workers, multi-tenant Nginx, Oracle Linux VPS with a 4 TB block volume.",
    icon: "server",
  },
  {
    title: "Intelligence",
    body: "Hermes agent runtime, 9Router gateway, Claude · Gemini · DeepSeek behind one OpenAI-shaped endpoint.",
    icon: "spark",
  },
  {
    title: "Delivery",
    body: "Atomic JSON stores, PostgreSQL, Buffer GraphQL, Telegram Bot API. Shipped, not demoed.",
    icon: "send",
  },
];

const practice = [
  {
    title: "Autonomous systems",
    body: "Agents that sweep logs, retry their own failures and file the report before I wake up. Cron watchers, delegation trees, self-healing deploys.",
  },
  {
    title: "Edge web platforms",
    body: "Multi-tenant routing, isolated subdomains, static hydration under 50ms. The infrastructure stays boring so the product does not.",
  },
  {
    title: "Generative media",
    body: "Programmatic video, voice synthesis and render farms on borrowed GPUs. From prompt to published reel without a human in the middle.",
  },
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-here-yellow" strokeWidth="2.2" aria-hidden>
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons: Record<string, string> = {
  code: "M8 5L3 10l5 5M16 5l5 5-5 5",
  server: "M3 5h18v5H3zM3 14h18v5H3zM7 7.5h.01M7 16.5h.01",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6.4 6.4l2.8 2.8M14.8 14.8l2.8 2.8M17.6 6.4l-2.8 2.8M9.2 14.8l-2.8 2.8",
  send: "M3 11l18-8-8 18-2-8-8-2z",
};

function Bars({ className = "" }: { className?: string }) {
  const h = [28, 54, 38, 72, 48, 86, 60, 96, 72, 58, 88, 44];
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {h.map((v, i) => (
        <span key={i} className="flex-1 rounded-[2px] bg-here-bg/20" style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-here-cream text-here-bg shadow-[0_28px_60px_-24px_rgba(0,0,0,0.75)] ${className}`}
    >
      <div className="flex shrink-0 items-center justify-between px-4 pb-1 pt-2.5 text-[9px] font-bold text-here-bg/45">
        <span className="tnum">9:41</span>
        <span className="tracking-[0.15em]">▪▪▪</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      <div className="mx-auto mb-2 mt-1.5 h-1 w-12 shrink-0 rounded-full bg-here-bg/20" />
    </div>
  );
}

export default async function HomePage() {
  const projects = await getProjects();
  const live = projects.filter((p) => p.url && p.url !== "#").length;

  return (
    <div className="min-h-screen bg-here-bg">
      {/* utility strip */}
      <div className="bg-here-deep">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-2.5 text-[12px] text-here-dim md:px-8">
          <p className="uppercase tracking-[0.14em]">Basalt · Independent studio</p>
          <div className="flex items-center gap-5">
            <a href="mailto:tonangarivin@basalt.works" className="text-here-muted underline underline-offset-4 hover:text-here-cream">
              Available for work
            </a>
            <span className="hidden sm:inline">Surabaya, Indonesia</span>
          </div>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-here-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-5 py-3 md:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path d="M12 1.6l9.2 5.3v10.2L12 22.4l-9.2-5.3V6.9L12 1.6z" fill="none" stroke="#f7b302" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M12 7.6l4 2.3v4.2l-4 2.3-4-2.3V9.9l4-2.3z" fill="#fce823" />
            </svg>
            <span className="text-[20px] font-extrabold tracking-tight">Basalt.</span>
          </Link>

          <nav className="hidden items-center gap-9 text-[15px] font-bold md:flex">
            <a href="#work" className="text-here-yellow">
              Work
              <span className="mt-1 block h-[2px] w-full rounded-full bg-here-yellow" />
            </a>
            <a href="#stack" className="text-here-cream/85 hover:text-here-cream">Stack</a>
            <a href="#practice" className="text-here-cream/85 hover:text-here-cream">Practice</a>
            <a href="#contact" className="text-here-cream/85 hover:text-here-cream">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Clock />
            <a
              href="mailto:tonangarivin@basalt.works"
              className="rounded-[16px] bg-here-cream px-4 py-2 text-[13px] font-bold text-here-bg transition hover:bg-white md:px-5 md:text-[15px]"
            >
              Start a project
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[900px]" aria-hidden />

        <div className="relative mx-auto max-w-page px-5 pt-12 md:px-8 md:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-[180px_1fr_180px]">
            <div className="hidden lg:block">
              <p className="text-[13px] text-here-muted">Running since</p>
              <p className="mt-1 flex items-center gap-2 text-[19px] font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-here-yellow opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-here-yellow" />
                </span>
                2021
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-[clamp(2.3rem,7.4vw,5.2rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em]">
                <span className="grad block">AI Systems</span>
                <span className="block text-here-cream">Built To Ship</span>
              </h1>
              <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-relaxed text-here-muted md:text-[19px]">
                Studio of Arifin Tonang. Autonomous agents, edge web platforms and
                generative media pipelines — built, deployed and kept alive in production.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#work"
                  className="rounded-[16px] bg-here-cream px-6 py-3 text-[15px] font-bold text-here-bg transition hover:bg-white"
                >
                  See the work
                </a>
                <a
                  href="https://x.com/0xAI_D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[16px] border border-white/15 px-6 py-3 text-[15px] font-bold text-here-cream transition hover:border-white/35 hover:bg-white/5"
                >
                  @0xAI_D
                </a>
              </div>
            </div>

            <div className="hidden text-right lg:block">
              <p className="text-[13px] text-here-muted">In production</p>
              <p className="mt-1 text-[19px] font-bold tnum">
                {String(live).padStart(2, "0")} systems
              </p>
            </div>
          </div>

          {/* phone trio */}
          <div className="mt-12 flex items-end justify-center md:mt-16">
            <div className="hidden shrink-0 translate-y-5 md:block">
              <Phone className="float-side -mr-10 aspect-[9/16] w-[220px]">
                <div className="flex h-full flex-col px-4 pb-4">
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-here-bg/45">
                    Stack
                  </p>
                  <div className="mt-2 space-y-1.5">
                    {["Next.js 15", "TypeScript", "Cloudflare", "Postgres", "Hermes"].map((s) => (
                      <div
                        key={s}
                        className="flex items-center justify-between rounded-lg border border-here-bg/10 px-2.5 py-1.5"
                      >
                        <span className="text-[10px] font-bold">{s}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-here-yellow" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 rounded-lg bg-here-yellow/15 px-2.5 py-2 text-[9px] font-bold leading-snug text-here-bg/70">
                    Zero-downtime deploys, every push.
                  </p>
                  <Bars className="mt-auto h-14" />
                </div>
              </Phone>
            </div>

            <Phone className="float z-20 aspect-[9/16] w-[290px]">
              <div className="flex h-full flex-col px-4 pb-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-here-bg/40">
                  <span>QR</span>
                  <span>Bell</span>
                  <span>Team</span>
                  <span>⚙</span>
                </div>
                <div className="mt-3 flex gap-1 rounded-full bg-here-bg/[0.06] p-1 text-[9px] font-bold text-here-bg/50">
                  <span className="rounded-full px-2 py-1">Overview</span>
                  <span className="rounded-full bg-white px-2 py-1 text-here-bg shadow-sm">Projects</span>
                  <span className="rounded-full px-2 py-1">Stack</span>
                </div>

                <div className="mt-3 rounded-2xl border border-here-bg/10 p-3">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-here-bg/45">All systems</p>
                  <p className="tnum text-[24px] font-extrabold leading-tight">
                    {String(projects.length).padStart(2, "0")}{" "}
                    <span className="text-[11px] font-bold text-here-bg/45">tracked</span>
                  </p>
                  <div className="mt-2 flex gap-2">
                    <span className="rounded-lg bg-[#fce823] px-3 py-1.5 text-[10px] font-extrabold text-here-bg">
                      Live
                    </span>
                    <span className="rounded-lg bg-[#fdbf1c] px-3 py-1.5 text-[10px] font-extrabold text-here-bg">
                      Mail
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-[9px] uppercase tracking-[0.14em] text-here-bg/45">Projects</p>
                <div className="mt-1.5 space-y-1">
                  {projects.slice(0, 4).map((p) => (
                    <div key={p.id} className="flex items-center justify-between gap-2 py-1">
                      <span className="truncate text-[10px] font-bold">{p.title}</span>
                      <span className="shrink-0 text-[9px] font-semibold text-here-bg/45">{p.status}</span>
                    </div>
                  ))}
                </div>
                <Bars className="mt-auto h-16" />
              </div>
            </Phone>

            <div className="hidden shrink-0 translate-y-5 md:block">
              <Phone className="float-side -ml-10 aspect-[9/16] w-[220px]">
                <div className="flex h-full flex-col px-4 pb-4">
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-here-bg/45">
                    This week
                  </p>
                  <p className="mt-2 rounded-lg bg-[#fce823] px-2.5 py-1.5 text-[9px] font-extrabold leading-snug">
                    Renders go out every night, unattended.
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      ["Reels", "18"],
                      ["Renders", "212"],
                      ["Commits", "64"],
                      ["Uptime", "99.9%"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-here-bg/60">{k}</span>
                        <span className="tnum text-[11px] font-extrabold">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto h-1.5 overflow-hidden rounded-full bg-here-bg/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#fdbf1c] to-[#c74ad5]" />
                  </div>
                </div>
              </Phone>
            </div>
          </div>
        </div>
      </section>

      {/* work */}
      <section id="work" className="mx-auto max-w-page px-5 pt-20 md:px-8 md:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[clamp(2rem,4.6vw,3.1rem)] font-extrabold leading-[1.02] tracking-tight">
            Selected work.
          </h2>
          <p className="text-[15px] text-here-muted">Live, in production, nobody watching.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => {
            const external = Boolean(p.url && p.url !== "#");
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-here-yellow">
                    {String(i + 1).padStart(2, "0")} · {p.category}
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-here-muted">
                    {p.status}
                  </span>
                </div>

                <h3 className="mt-5 text-[26px] font-extrabold leading-none tracking-tight md:text-[30px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-here-muted">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {[p.tag, p.metrics].map((line) => (
                    <li key={line} className="flex gap-2.5 text-[13px] text-here-cream/80">
                      <Check />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-bold text-here-yellow">
                  {external ? "Try it out" : "In the lab"}
                  <span aria-hidden>{external ? "↗" : "·"}</span>
                </span>
              </>
            );

            const cls =
              "group flex flex-col rounded-[22px] border border-here-line bg-here-card/50 p-6 transition hover:border-white/25 hover:bg-here-card md:p-7";

            return external ? (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <div key={p.id} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* stack */}
      <section id="stack" className="mx-auto max-w-page px-5 pt-20 md:px-8 md:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[clamp(2rem,4.6vw,3.1rem)] font-extrabold leading-[1.02] tracking-tight">
              Runs on what?
            </h2>
            <p className="mt-2 text-[15px] text-here-muted">Everything below is already in production somewhere.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {stack.map((s) => (
            <div key={s.title} className="rounded-[22px] border border-here-line bg-here-card/50 p-6">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-here-yellow" strokeWidth="1.8" aria-hidden>
                <path d={icons[s.icon]} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-4 text-[19px] font-extrabold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-here-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* practice */}
      <section id="practice" className="mx-auto max-w-page px-5 pt-20 md:px-8 md:pt-28">
        <h2 className="text-[clamp(2rem,4.6vw,3.1rem)] font-extrabold leading-[1.02] tracking-tight">
          Three things, repeatedly.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {practice.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col rounded-[22px] border border-here-line bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <span className="tnum text-[12px] font-bold text-here-yellow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[21px] font-extrabold leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-here-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="mx-auto max-w-page px-5 pt-20 md:px-8 md:pt-28">
        <div className="rounded-[28px] border border-here-line bg-here-deep px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="text-[clamp(2.1rem,5.6vw,3.8rem)] font-extrabold leading-[1] tracking-tight">
            <span className="grad block">Let&apos;s build.</span>
            <span className="block text-here-cream">Tell me what you ship.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-relaxed text-here-muted">
            Two build slots open. Agents, web platforms, media pipelines — one operator,
            no handoff tax.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:tonangarivin@basalt.works"
              className="rounded-[16px] bg-here-cream px-7 py-3 text-[15px] font-bold text-here-bg transition hover:bg-white"
            >
              tonangarivin@basalt.works
            </a>
            <a
              href="https://github.com/tonangarivin-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[16px] border border-white/15 px-7 py-3 text-[15px] font-bold text-here-cream transition hover:border-white/35 hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="mt-20 border-t border-white/[0.06] bg-here-deep">
        <div className="mx-auto max-w-page px-5 py-10 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <path d="M12 1.6l9.2 5.3v10.2L12 22.4l-9.2-5.3V6.9L12 1.6z" fill="none" stroke="#f7b302" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M12 7.6l4 2.3v4.2l-4 2.3-4-2.3V9.9l4-2.3z" fill="#fce823" />
                </svg>
                <span className="text-[18px] font-extrabold tracking-tight">Basalt.</span>
              </div>
              <p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-here-dim">
                Studio of Arifin Tonang. Autonomous systems, edge web, generative media.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 text-[13px] font-bold">
              <a href="#work" className="text-here-muted hover:text-here-cream">Work</a>
              <a href="#stack" className="text-here-muted hover:text-here-cream">Stack</a>
              <a href="#practice" className="text-here-muted hover:text-here-cream">Practice</a>
              <a href="#contact" className="text-here-muted hover:text-here-cream">Contact</a>
              <a href="https://x.com/0xAI_D" target="_blank" rel="noopener noreferrer" className="text-here-muted hover:text-here-cream">
                X / Twitter
              </a>
              <Link href="/admin" className="text-here-dim hover:text-here-muted">
                Admin
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-5 text-[12px] text-here-dim sm:flex-row sm:justify-between">
            <p>© 2026 Basalt — Arifin Tonang. All systems running.</p>
            <p>Set in Cabinet Grotesk · basalt.works</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
