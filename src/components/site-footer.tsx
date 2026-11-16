import Link from "next/link";

const cols = [
  {
    title: "Index",
    links: [
      { href: "/", label: "Works" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Inquiries" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { href: "https://x.com/0xAI_D", label: "X / Twitter", ext: true },
      { href: "https://github.com/tonangarivin-ui", label: "GitHub", ext: true },
      { href: "https://movie.darklabs.my.id", label: "DramaFlow", ext: true },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-lum-line">
      <div className="mx-auto max-w-page px-5 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[17px] font-bold tracking-[-0.02em]">DARKLABS</span>
              <span className="label text-lum-mute">/ studio</span>
            </div>
            <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-lum-dim">
              One operator. Agent systems, edge platforms and programmatic video — deployed and kept alive.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="label text-lum-mute">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.ext ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ghost-link text-[14px] text-lum-dim transition-colors hover:text-lum-ink"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="ghost-link text-[14px] text-lum-dim transition-colors hover:text-lum-ink"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-lum-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-lum-mute">© 2026 Darklabs — Arifin Tonang</p>
          <p className="label text-lum-mute">
            Surabaya, ID ·{" "}
            <Link href="/admin" className="hover:text-lum-dim">
              admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
