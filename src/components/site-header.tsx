import Link from "next/link";
import Clock from "@/components/clock";

const nav = [
  { href: "/", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-lum-line glass">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-4 md:px-12">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-[18px] font-bold tracking-[-0.02em]">DARKLABS</span>
          <span className="label hidden text-lum-mute sm:inline">/ studio</span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="label text-lum-dim transition-colors hover:text-lum-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Clock />
          <span className="hidden items-center gap-2 rounded-full border border-lum-line bg-lum-elev px-3 py-1.5 sm:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lum-lime opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lum-lime" />
            </span>
            <span className="label text-lum-dim">Available Q4</span>
          </span>
        </div>
      </div>
    </header>
  );
}
