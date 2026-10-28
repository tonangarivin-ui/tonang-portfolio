import type { Metadata } from "next";
import Clock from "@/components/clock";
import CopyEmail from "@/components/copy-email";

export const metadata: Metadata = {
  title: "Contact — Darklabs",
  description: "Direct line to Arifin Tonang for agent systems, edge platforms and render pipelines.",
};

const EMAIL = "tonangarivin@darklabs.tech";

const scopes = ["Agent pipeline", "Edge web platform", "Render farm", "Something else"];

const links = [
  { label: "X / Twitter", value: "@0xAI_D", href: "https://x.com/0xAI_D" },
  { label: "GitHub", value: "tonangarivin-ui", href: "https://github.com/tonangarivin-ui" },
  { label: "DramaFlow", value: "movie.vunk.my.id", href: "https://movie.vunk.my.id" },
  { label: "Autopilot", value: "t.me/dgoldenbullet", href: "https://t.me/dgoldenbullet" },
];

export default function ContactPage() {
  return (
    <div className="pt-14 md:pt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label text-lum-lime">02 // Initiate dialogue</p>
          <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(2.1rem,5.4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Let&apos;s engineer something singular.
          </h1>
        </div>
        <div className="text-right">
          <p className="label text-lum-mute">Response window</p>
          <p className="mt-1 text-[15px] text-lum-dim">Under 24 hours, WIB cycle</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        {/* direct line */}
        <div className="rounded-card border border-lum-line bg-lum-base p-6 md:p-8">
          <p className="label text-lum-cyan">Direct channel</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="break-all font-display text-[clamp(1.15rem,3vw,1.9rem)] font-semibold tracking-[-0.02em] transition-colors hover:text-lum-lime"
            >
              {EMAIL}
            </a>
            <CopyEmail email={EMAIL} />
          </div>

          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-lum-dim">
            Send the constraint, not the brief template: what has to exist, what it runs on, and
            when it has to be live. I answer with a scope and a date, or a straight no.
          </p>

          <p className="label mt-6 text-lum-mute">Typical scopes</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {scopes.map((s) => (
              <span
                key={s}
                className="label rounded-sharp border border-lum-line bg-lum-elev px-2.5 py-1.5 text-lum-dim"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Project%20inquiry`}
              className="label-lg rounded-sharp bg-lum-lime px-5 py-3 font-bold text-lum-deep bloom"
            >
              Transmit proposal →
            </a>
            <a
              href="https://t.me/dgoldenbullet"
              target="_blank"
              rel="noopener noreferrer"
              className="label-lg rounded-sharp border border-lum-line px-5 py-3 text-lum-ink bloom hover:border-lum-focus hover:bg-lum-elev"
            >
              Telegram ↗
            </a>
          </div>
        </div>

        {/* side panel */}
        <div className="space-y-4">
          <div className="rounded-card border border-lum-line bg-lum-base p-6">
            <p className="label text-lum-cyan">Authenticated networks</p>
            <ul className="mt-3 space-y-2.5">
              {links.map((l) => (
                <li key={l.label} className="flex items-baseline justify-between gap-3">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-lum-dim transition-colors hover:text-lum-ink ghost-link"
                  >
                    {l.label}
                  </a>
                  <span className="truncate text-[13px] text-lum-mute">{l.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-lum-line bg-lum-base p-6">
            <p className="label text-lum-cyan">Operations</p>
            <dl className="mt-3 space-y-2.5 text-[14px]">
              <div className="flex items-center justify-between gap-3">
                <dt className="label text-lum-mute">Base</dt>
                <dd className="text-lum-dim">Surabaya, ID</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="label text-lum-mute">Coverage</dt>
                <dd className="text-lum-dim">&amp; remote worldwide</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="label text-lum-mute">Local time</dt>
                <dd className="text-lum-dim">
                  <Clock />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="label text-lum-mute">Status</dt>
                <dd className="flex items-center gap-2 text-lum-dim">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lum-lime opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lum-lime" />
                  </span>
                  Currently active
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="label text-lum-mute">Slots</dt>
                <dd className="text-lum-dim">2 open</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="pt-12">
        <p className="label text-lum-mute">
          Prefer async? Email works better than a call — I reply with a written scope.
        </p>
      </section>
    </div>
  );
}
