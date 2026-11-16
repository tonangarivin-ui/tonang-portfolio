import Link from "next/link";
import { getProjects, type Project } from "@/lib/projects";

export const revalidate = 0;

const services = [
  {
    title: "Agent runtimes",
    items: [
      "OpenMausBot threads & routines",
      "Hermes gateway, Codex, Claude Code",
      "9Router: one gateway, many models",
      "Watchdog timers that restart what dies",
    ],
  },
  {
    title: "Bounty pipelines",
    items: [
      "make.fun agent competitions, end to end",
      "Repo + build transcript, submitted in one pass",
      "On-chain USDC escrow, verified before entering",
      "Daily sweeps that skip dead boards",
    ],
  },
  {
    title: "Programmatic video",
    items: [
      "Bang Motion: SVG scenes, GSAP beats",
      "Headless Chrome frames, ffmpeg mux",
      "~350 frames per minute on 2 ARM cores",
      "Styles packaged as reusable recipes",
    ],
  },
  {
    title: "VPS operations",
    items: [
      "Oracle Linux, systemd user timers",
      "Healthcheck that pages me on Telegram",
      "Cloudflare Tunnel, multi-tenant Nginx",
      "PostgreSQL & atomic JSON stores",
    ],
  },
];

const stack = [
  "Claude Code",
  "Codex CLI",
  "9Router",
  "Next.js 15",
  "Oracle Linux",
  "PostgreSQL",
  "Cloudflare Tunnel",
  "ffmpeg",
];

const isLive = (s: string) => /^(live|running|active)$/i.test(s);

function Frame({
  p,
  className,
  children,
}: {
  p: Project;
  className: string;
  children: React.ReactNode;
}) {
  if (!p.url) return <div className={className}>{children}</div>;
  const external = /^https?:/i.test(p.url);
  return (
    <a
      href={p.url}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function Shot({ p, className }: { p: Project; className: string }) {
  if (!p.image) {
    return (
      <div className={`flex items-end border-lum-line bg-lum-elev p-4 ${className}`}>
        <span className="label text-lum-mute">Nothing to show yet</span>
      </div>
    );
  }
  return (
    <div className={`overflow-hidden bg-[#0C0E11] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.image}
        alt={`${p.title} — interface`}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

export default async function WorksPage() {
  const projects = await getProjects();
  const [lead, second, ...tail] = projects;
  const inProduction = projects.filter((p) => isLive(p.status)).length;

  return (
    <>
      <section className="pt-12 md:pt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-lum-line pb-4">
          <span className="label text-lum-mute">Darklabs — studio of Arifin Tonang</span>
          <span className="label text-lum-mute">Surabaya, Indonesia</span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <h1 className="font-display text-[clamp(2.2rem,5.4vw,4rem)] font-medium leading-[1.03] tracking-[-0.035em]">
            Systems that <span className="text-lum-lime">keep running</span> while nobody is
            watching.
          </h1>

          <div>
            <p className="max-w-[42ch] text-[16px] leading-relaxed text-lum-dim">
              Agent pipelines, bounty pipelines and programmatic video — built, deployed and supervised by
              one person. {inProduction} of the {projects.length} below are in production right now.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#archive"
                className="label-lg bg-lum-ink px-5 py-3 text-lum-deep bloom hover:bg-lum-lime"
              >
                See the work
              </a>
              <Link
                href="/contact"
                className="label-lg border border-lum-line px-5 py-3 bloom hover:border-lum-ink"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-lum-line py-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-lum-mute">
          <span className="text-lum-ink">Running on</span>
          {stack.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-lum-line">/</span>}
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="archive" className="pt-14 md:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-medium tracking-[-0.03em]">
            Selected work
          </h2>
          <p className="text-[13px] text-lum-mute">
            {projects.length} {projects.length === 1 ? "project" : "projects"} — newest first
          </p>
        </div>

        {projects.length === 0 ? (
          <p className="mt-8 text-[15px] text-lum-mute">Nothing published yet.</p>
        ) : (
          <div className="mt-8">
            {/* lead: the one project with a live URL and a shot that carries itself */}
            {lead && (
              <Frame
                p={lead}
                className="group grid border border-lum-line bg-lum-base md:grid-cols-[1.15fr_1fr]"
              >
                <Shot p={lead} className="aspect-[8/5] md:aspect-auto md:h-full md:min-h-[360px]" />
                <div className="flex flex-col justify-between gap-10 border-t border-lum-line p-6 md:border-l md:border-t-0 md:p-10">
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="label text-lum-mute">{lead.tag}</span>
                      <span
                        className={`label ${isLive(lead.status) ? "text-lum-lime" : "text-lum-mute"}`}
                      >
                        {lead.status}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                      {lead.title}
                    </h3>
                    <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-lum-dim">
                      {lead.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-[13px] text-lum-mute">
                    <span>{lead.metrics}</span>
                    {lead.url && (
                      <span className="label text-lum-ink group-hover:text-lum-lime">
                        Open live site ↗
                      </span>
                    )}
                  </div>
                </div>
              </Frame>
            )}

            {/* second: a build you can click through, so the image gets the wide side */}
            {second && (
              <Frame
                p={second}
                className="group mt-4 grid border border-lum-line bg-lum-elev md:grid-cols-[1fr_1.3fr]"
              >
                <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
                  <div>
                    <span className="label text-lum-mute">{second.tag}</span>
                    <h3 className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2rem)] font-medium tracking-[-0.02em]">
                      {second.title}
                    </h3>
                    <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-lum-dim">
                      {second.description}
                    </p>
                  </div>
                  <span className="label text-lum-ink group-hover:text-lum-lime">
                    {second.url ? "Walk through it →" : second.metrics}
                  </span>
                </div>
                <Shot
                  p={second}
                  className="aspect-[16/9] border-t border-lum-line md:aspect-auto md:h-full md:border-l md:border-t-0"
                />
              </Frame>
            )}

            {/* the rest: an index, not another row of identical cards */}
            {tail.length > 0 && (
              <div className="mt-10 border-t border-lum-line">
                {tail.map((p, i) => {
                  const rowClass =
                    "grid grid-cols-[1.6rem_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-lum-line py-5 sm:grid-cols-[1.6rem_1fr_12rem_6rem]";
                  const body = (
                    <>
                      <span className="label text-lum-mute tnum">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="font-display text-[17px] font-medium tracking-[-0.01em]">
                          {p.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-lum-mute">{p.tag}</span>
                      </div>
                      <span className="hidden text-[13px] text-lum-dim sm:block">{p.metrics}</span>
                      <span
                        className={`label ${isLive(p.status) ? "text-lum-lime" : "text-lum-mute"}`}
                      >
                        {p.status}
                      </span>
                    </>
                  );
                  return p.url ? (
                    <a
                      key={p.id}
                      href={p.url}
                      className={`group ${rowClass}`}
                      {...(/^https?:/i.test(p.url)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {body}
                    </a>
                  ) : (
                    <div key={p.id} className={rowClass}>
                      {body}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>

      <section className="pt-16 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-medium leading-[1.1] tracking-[-0.03em]">
            Boring infrastructure, so the product doesn&apos;t have to be.
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-lum-dim">
            Everything I ship runs unattended: cron watchers sweep the logs, broken deploys retry
            themselves, and the report lands before I wake up. Four layers, one operator.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="border-t border-lum-line pt-5">
              <h3 className="font-display text-[17px] font-medium tracking-[-0.01em]">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-[14px] text-lum-dim">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-16 md:pt-24">
        <div className="border-t border-lum-line pt-8 md:pt-12">
          <h2 className="max-w-[24ch] font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            Have a system that needs building?
          </h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-lum-dim">
            Agent pipelines, bounty pipelines, programmatic video. One operator, no handoff tax.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="mailto:tonangarivin@darklabs.tech"
              className="label-lg bg-lum-ink px-5 py-3 text-lum-deep bloom hover:bg-lum-lime"
            >
              tonangarivin@darklabs.tech
            </a>
            <Link
              href="/contact"
              className="label-lg border border-lum-line px-5 py-3 bloom hover:border-lum-ink"
            >
              More ways to reach me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
