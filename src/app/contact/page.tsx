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
  { label: "DramaFlow", value: "movie.darklabs.my.id", href: "https://movie.darklabs.my.id" },
  { label: "Telegram", value: "t.me/dgoldenbullet", href: "https://t.me/dgoldenbullet" },
];

export default function ContactPage() {
  return (
    <div className="pt-12 md:pt-16">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-lum-line pb-4">
        <span className="label text-lum-mute">Contact</span>
        <span className="label text-lum-mute">Replies usually within a day</span>
      </div>

      <h1 className="mt-12 max-w-[24ch] text-balance font-display text-[clamp(2.1rem,5.4vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.035em]">
        Tell me the constraint.{" "}
        <span className="text-lum-lime">I&apos;ll answer with a scope and a date.</span>
      </h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="max-w-[52ch] text-[16px] leading-relaxed text-lum-dim">
            What has to exist, what it runs on, and when it has to be live. Send that much and the
            first reply is a scope, a date, or a straight no — not a discovery call.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href={`mailto:${EMAIL}`}
              className="break-all font-display text-[clamp(1.2rem,3vw,1.9rem)] font-medium tracking-[-0.02em] transition-colors hover:text-lum-lime"
            >
              {EMAIL}
            </a>
            <CopyEmail email={EMAIL} />
          </div>

          <div className="mt-10 border-t border-lum-line pt-5">
            <p className="label text-lum-mute">What the work usually is</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[14px] text-lum-dim">
              {scopes.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Project%20inquiry`}
              className="label-lg bg-lum-ink px-5 py-3 text-lum-deep bloom hover:bg-lum-lime"
            >
              Write to me
            </a>
            <a
              href="https://t.me/dgoldenbullet"
              target="_blank"
              rel="noopener noreferrer"
              className="label-lg border border-lum-line px-5 py-3 bloom hover:border-lum-ink"
            >
              Telegram ↗
            </a>
          </div>
        </div>

        <dl className="self-start border-t border-lum-line">
          {links.map((l) => (
            <div
              key={l.label}
              className="flex items-baseline justify-between gap-4 border-b border-lum-line py-3"
            >
              <dt className="text-[14px] text-lum-ink">{l.label}</dt>
              <dd>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-link text-[13px] text-lum-mute hover:text-lum-ink"
                >
                  {l.value}
                </a>
              </dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 border-b border-lum-line py-3">
            <dt className="text-[14px] text-lum-ink">Local time</dt>
            <dd className="text-[13px] text-lum-mute">
              <Clock /> · Surabaya
            </dd>
          </div>
        </dl>
      </div>

      <p className="mt-16 border-t border-lum-line pt-5 text-[14px] text-lum-mute">
        Async is better than a call — the scope ends up written down either way.
      </p>
    </div>
  );
}
