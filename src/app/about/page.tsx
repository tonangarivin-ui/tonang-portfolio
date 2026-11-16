import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Darklabs",
  description:
    "Arifin Tonang, one operator running autonomous agent systems, edge web platforms and generative media pipelines.",
};

const facts: [string, string][] = [
  ["Operator", "Arifin Tonang"],
  ["Based", "Surabaya, Indonesia (UTC+7)"],
  ["Working since", "2021"],
  ["Practice", "Agent systems · edge web · media"],
];

const principles = [
  {
    title: "Autonomy over dashboards",
    body: "If a task needs a human to click it every morning, it isn't finished. Cron watchers, self-retrying deploys, reports that arrive before I ask.",
  },
  {
    title: "Boring infrastructure",
    body: "Multi-tenant routing, isolated subdomains, atomic writes. The parts nobody photographs are the parts that keep the product online.",
  },
  {
    title: "Ship, then measure",
    body: "A pipeline that renders 200 reels a week is a better argument than a deck about pipelines. Everything here runs in production or it gets deleted.",
  },
];

const instruments: [string, string[]][] = [
  ["Runtimes", ["TypeScript", "Next.js 15 App Router", "Node 22", "Python 3.12"]],
  ["Infrastructure", ["Cloudflare Zero Trust", "Workers + Tunnels", "Nginx multi-tenant", "Oracle Linux VPS"]],
  ["Intelligence", ["Hermes agent runtime", "9Router gateway", "Claude · Gemini · DeepSeek", "OpenCode CLI"]],
  ["Delivery", ["PostgreSQL", "Atomic JSON stores", "Buffer GraphQL", "Telegram Bot API"]],
];

export default function AboutPage() {
  return (
    <div className="pt-12 md:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-lum-line pb-4">
        <span className="label text-lum-mute">About</span>
        <span className="label text-lum-mute">Darklabs — Surabaya, Indonesia</span>
      </div>

      <h1 className="mt-12 max-w-[26ch] font-display text-[clamp(2.1rem,5.4vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.035em]">
        One operator. <span className="text-lum-lime">No handoff tax.</span>
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-[16px] leading-[1.7] text-lum-dim">
          <p>
            Darklabs is the studio of Arifin Tonang. I build the machinery that lets generative
            work actually ship: agent runtimes that run themselves, edge platforms that stay up,
            and render pipelines that turn a brief into published media without a human in the
            middle.
          </p>
          <p>
            The work is deliberately narrow. I don&apos;t take on brand decks or growth retainers.
            I take systems that need to exist, be deployed, and keep running after the invoice is
            paid — autonomous agents, multi-tenant web platforms, video and voice pipelines.
          </p>
          <p>
            Everything on this site runs in production. If a project page says it&apos;s live, you
            can open it. If it isn&apos;t, it says so.
          </p>
        </div>

        <dl className="self-start border-t border-lum-line">
          {facts.map(([k, v]) => (
            <div
              key={k}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-lum-line py-3"
            >
              <dt className="label text-lum-mute">{k}</dt>
              <dd className="text-[14px] text-lum-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="pt-16 md:pt-24">
        <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-medium tracking-[-0.02em]">
          How it gets built
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-lum-line pt-5">
              <h3 className="font-display text-[17px] font-medium leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-lum-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-16 md:pt-24">
        <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-medium tracking-[-0.02em]">
          What it runs on
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {instruments.map(([group, items]) => (
            <div key={group} className="border-t border-lum-line pt-4">
              <h3 className="label text-lum-mute">{group}</h3>
              <ul className="mt-3 text-[14px] leading-[1.9] text-lum-dim">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-16 md:pt-24">
        <div className="border-t border-lum-line pt-8 md:pt-12">
          <h2 className="max-w-[26ch] text-balance font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            Want the long version, or a system built?
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:tonangarivin@darklabs.tech"
              className="label-lg bg-lum-ink px-5 py-3 text-lum-deep bloom hover:bg-lum-lime"
            >
              Email me
            </a>
            <a
              href="https://github.com/tonangarivin-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="label-lg border border-lum-line px-5 py-3 bloom hover:border-lum-ink"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
