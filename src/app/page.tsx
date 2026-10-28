import Link from "next/link";
import { getProjects, type Project } from "@/lib/projects";

export const revalidate = 0;

const services = [
  {
    title: "Agent Systems",
    items: [
      "Hermes agent runtime",
      "Delegation trees & cron watchers",
      "Self-healing deploys",
      "Telegram control surface",
    ],
  },
  {
    title: "Edge Platforms",
    items: [
      "Next.js 15 App Router",
      "Cloudflare tunnels & Workers",
      "Multi-tenant Nginx",
      "Sub-50ms static hydration",
    ],
  },
  {
    title: "Generative Media",
    items: [
      "Remotion scene graphs",
      "GPU render farm (T4)",
      "Voice synthesis & muxing",
      "Buffer GraphQL publishing",
    ],
  },
  {
    title: "Delivery",
    items: [
      "PostgreSQL & atomic JSON stores",
      "Type-safe APIs",
      "Admin panels, not spreadsheets",
      "Monitoring that pages me",
    ],
  },
];

const stack = [
  "Next.js 15",
  "TypeScript",
  "Cloudflare",
  "PostgreSQL",
  "Oracle Linux",
  "Colab T4",
  "Telegram",
  "Buffer",
];

function Monogram({ label }: { label: string }) {
  const letters = label
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(204,255,0,0.10),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(0,240,255,0.12),transparent_55%)]">
      <span className="font-display text-[clamp(2rem,6vw,4rem)] font-bold tracking-[-0.04em] text-lum-ink/15">
        {letters}
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="label rounded-sharp border border-lum-line bg-white/[0.03] px-2 py-1 text-lum-dim">
      {children}
    </span>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  const external = Boolean(p.url && p.url !== "#");
  const inner = (
    <>
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-t-card border-b border-lum-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/work/reel.png"
          alt={`${p.title} interface`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="label absolute left-3 top-3 rounded-sharp bg-lum-deep/80 px-2 py-1 text-lum-lime backdrop-blur-sm">
          {p.category}
        </span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight tracking-[-0.03em]">
            {p.title}
          </h3>
          <span className="label text-lum-mute">[{p.status}]</span>
        </div>
        <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-lum-dim">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>{p.tag}</Tag>
          <Tag>{p.metrics}</Tag>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-lum-lime">
          <span className="label">{external ? "Inspect live system" : "In the lab"}</span>
          <span aria-hidden>{external ? "→" : "·"}</span>
        </span>
      </div>
    </>
  );

  const cls = "group block overflow-hidden rounded-card border border-lum-line bg-lum-base bloom";
  return external ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Card({ p }: { p: Project }) {
  const external = Boolean(p.url && p.url !== "#");
  const inner = (
    <>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-t-card border-b border-lum-line">
        <Monogram label={p.title} />
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">{p.title}</h3>
          <span className="label shrink-0 text-lum-mute">{p.status}</span>
        </div>
        <p className="mt-2 text-[14px] leading-relaxed text-lum-dim">{p.description}</p>
        <p className="label mt-4 text-lum-mute">{p.tag}</p>
      </div>
    </>
  );
  const cls = "group block overflow-hidden rounded-card border border-lum-line bg-lum-base bloom";
  return external ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default async function WorksPage() {
  const projects = await getProjects();
  const [featured, ...rest] = projects;

  return (
    <>
      {/* hero */}
      <section className="pt-14 md:pt-20">
        <div className="flex flex-wrap gap-2">
          <Tag>Surabaya // WIB</Tag>
          <Tag>Since 2021</Tag>
          <Tag>{String(projects.length).padStart(2, "0")} systems tracked</Tag>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-end">
          <h1 className="font-display text-[clamp(2.1rem,5.2vw,3.9rem)] font-semibold uppercase leading-[0.98] tracking-[-0.04em]">
            Shipping <span className="text-lum-lime">agent</span> systems
            <br />
            &amp; <span className="text-lum-cyan">edge</span> platforms.
          </h1>

          <div className="border-t border-lum-line pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="label text-lum-lime">[ Discipline index ]</p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-lum-dim">
              One operator building autonomous agent pipelines, edge web platforms and generative
              media systems — deployed, monitored and kept alive in production.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#archive"
            className="label-lg rounded-sharp bg-lum-lime px-5 py-3 font-bold text-lum-deep bloom"
          >
            Explore selected works ↓
          </a>
          <Link
            href="/contact"
            className="label-lg rounded-sharp border border-lum-line px-5 py-3 text-lum-ink bloom hover:border-lum-focus hover:bg-lum-elev"
          >
            Initiate dialogue ↗
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-lum-line pt-6 sm:grid-cols-3">
          {[
            ["04", "Systems in production"],
            ["24/7", "Unattended automation"],
            ["T4", "GPU render farm"],
          ].map(([k, v]) => (
            <div key={v}>
              <dd className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-none tracking-[-0.03em]">
                {k}
              </dd>
              <dt className="label mt-2 text-lum-mute">{v}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* stack strip */}
      <section className="mt-16 border-y border-lum-line py-5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="label text-lum-mute">Runs on</span>
          {stack.map((s) => (
            <span key={s} className="label text-lum-dim">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* archive */}
      <section id="archive" className="pt-16 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label text-lum-lime">01 // Archive of productions</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-none tracking-[-0.03em]">
              Selected deployments
            </h2>
          </div>
          <p className="label text-lum-mute">
            {String(projects.length).padStart(2, "0")} entries
          </p>
        </div>

        {projects.length === 0 ? (
          <p className="label mt-8 text-lum-mute">Index empty — nothing deployed yet.</p>
        ) : (
          <div className="mt-8 space-y-4">
            {featured && <FeaturedCard p={featured} />}
            {rest.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <Card key={p.id} p={p} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* methodology */}
      <section className="pt-16 md:pt-24">
        <p className="label text-lum-lime">02 // Operational methodology</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <h2 className="font-display text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Boring infrastructure, so the product doesn&apos;t have to be.
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-lum-dim">
            Everything I ship runs unattended: cron watchers sweep the logs, broken deploys retry
            themselves, and the report lands before I wake up. Four layers, one operator.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-card border border-lum-line bg-lum-base p-5">
              <h3 className="font-display text-[18px] font-semibold tracking-[-0.02em]">
                {s.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-[14px] text-lum-dim">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-lum-lime" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* status table — replaces an awards list with something verifiable */}
      <section className="pt-16 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="label text-lum-lime">03 // System status</p>
          <p className="label text-lum-mute">Verified 28 Oct 2026</p>
        </div>

        <div className="mt-4 overflow-hidden rounded-card border border-lum-line">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`grid grid-cols-2 items-center gap-3 px-4 py-3.5 md:grid-cols-[2fr_1fr_1.4fr_auto] ${
                i > 0 ? "border-t border-lum-line" : ""
              } ${i % 2 ? "bg-lum-base/40" : "bg-lum-base"}`}
            >
              <span className="font-display text-[15px] font-medium">{p.title}</span>
              <span className="label text-lum-dim">{p.status}</span>
              <span className="label hidden text-lum-mute md:block">{p.metrics}</span>
              {p.url && p.url !== "#" ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label justify-self-end text-lum-cyan ghost-link"
                >
                  Open ↗
                </a>
              ) : (
                <span className="label justify-self-end text-lum-mute">internal</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="pt-16 md:pt-24">
        <div className="rounded-card border border-lum-line bg-lum-base p-6 md:p-10">
          <p className="label text-lum-lime">Available for select commissions</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.8rem,4.4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            Have a system that needs building?
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-lum-dim">
            Agent pipelines, edge platforms, render farms. One operator, no handoff tax.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:tonangarivin@darklabs.tech"
              className="label-lg rounded-sharp bg-lum-lime px-5 py-3 font-bold text-lum-deep bloom"
            >
              tonangarivin@darklabs.tech
            </a>
            <Link
              href="/contact"
              className="label-lg rounded-sharp border border-lum-line px-5 py-3 text-lum-ink bloom hover:border-lum-focus hover:bg-lum-elev"
            >
              Inquiries →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
