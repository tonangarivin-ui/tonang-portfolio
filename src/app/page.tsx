"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  Menu,
  X,
  Lock,
  Sparkles,
  Zap,
  Globe,
  Radio
} from "lucide-react";
import type { Project } from "@/lib/projects";

const techStack = [
  { category: "Core Runtimes", items: ["TypeScript", "Next.js 15 (App Router)", "Node.js", "Python 3.12+"] },
  { category: "Edge & Infra", items: ["Cloudflare Tunnels", "Cloudflare Workers", "Nginx Multi-Tenant", "Oracle Linux VPS"] },
  { category: "AI & Orchestration", items: ["9Router Gateway", "Gemini 3.8 Flash", "Claude 3.7/Sonnet", "OpenCode CLI", "Hermes Agent"] },
  { category: "Data & Automation", items: ["PostgreSQL", "Atomic JSON Engines", "Buffer GraphQL", "Telegram Bot API"] },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data)) {
            setProjects(data);
          }
        }
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-gray-200">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-surface-border bg-canvas/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-amber-glow/20 border border-amber-glow/40 text-amber-glow font-mono font-bold text-sm">
              T
            </span>
            <span className="font-mono font-bold tracking-wider text-white">
              TONANG<span className="text-amber-glow">.AI</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              ONLINE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-400 md:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#stack" className="transition hover:text-white">Tech Stack</a>
            <a href="#services" className="transition hover:text-white">Capabilities</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <Link
              href="/admin"
              className="flex items-center gap-1.5 rounded border border-surface-border bg-surface-card px-3 py-1.5 text-xs font-mono text-gray-300 transition hover:border-amber-glow hover:text-amber-glow"
            >
              <Lock className="h-3 w-3" />
              Admin Portal
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded border border-surface-border bg-surface-card text-gray-300 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-surface-border bg-surface-card px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 font-medium">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-gray-300 hover:text-amber-glow"
              >
                Projects Showcase
              </a>
              <a
                href="#stack"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-gray-300 hover:text-amber-glow"
              >
                Technical Stack
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-gray-300 hover:text-amber-glow"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-gray-300 hover:text-amber-glow"
              >
                Contact
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded border border-amber-glow/40 bg-amber-glow/10 py-2.5 text-xs font-mono font-semibold text-amber-glow"
              >
                <Lock className="h-3.5 w-3.5" />
                Go to Admin Dashboard
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HERO SECTION */}
        <section className="py-12 sm:py-20 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-glow/30 bg-amber-glow/10 px-3.5 py-1 text-xs font-mono font-medium text-amber-glow">
            <Radio className="h-3 w-3 animate-pulse text-amber-glow" />
            <span>SYSTEM OPERATIONAL • 24/7 AUTONOMOUS AGENTS</span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Architecting{" "}
            <span className="bg-gradient-to-r from-amber-gold via-amber-glow to-amber-200 bg-clip-text text-transparent">
              Autonomous AI
            </span>{" "}
            & High-Yield Digital Engines.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            Creative AI Engineer & Automation Architect. Bridging generative intelligence, multi-agent workflows, and scalable edge web platforms with resilient production infrastructure.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded bg-amber-glow px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/admin"
              className="flex items-center gap-2 rounded border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-amber-glow hover:text-white"
            >
              <Lock className="h-4 w-4 text-amber-glow" />
              Admin Portal
            </Link>
          </div>

          {/* Live Telemetry Status Strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 border-y border-surface-border py-4 sm:grid-cols-4">
            <div>
              <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">System Latency</div>
              <div className="mt-1 font-mono text-sm font-semibold text-emerald-400">24ms (Edge)</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Platform Uptime</div>
              <div className="mt-1 font-mono text-sm font-semibold text-white">99.98%</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Active Pipelines</div>
              <div className="mt-1 font-mono text-sm font-semibold text-amber-gold">6 Continuous</div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Target Domain</div>
              <div className="mt-1 font-mono text-sm font-semibold text-gray-300">vunk.my.id</div>
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE */}
        <section id="projects" className="py-12 sm:py-16">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-glow">
                <Sparkles className="h-3.5 w-3.5" />
                Production Systems
              </div>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Featured Deployments
              </h2>
            </div>
            <p className="text-xs text-gray-400 sm:text-right">
              Live applications & autonomous pipelines running in production
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {loading ? (
              <>
                <div className="rounded-lg border border-surface-border bg-surface-card p-5 sm:p-6 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-20 rounded bg-surface-elevated" />
                    <div className="h-4 w-16 rounded bg-surface-elevated" />
                  </div>
                  <div className="mt-4 h-6 w-3/4 rounded bg-surface-elevated" />
                  <div className="mt-2 h-10 w-full rounded bg-surface-elevated" />
                  <div className="mt-6 flex justify-between border-t border-surface-border pt-4">
                    <div className="h-4 w-24 rounded bg-surface-elevated" />
                    <div className="h-4 w-20 rounded bg-surface-elevated" />
                  </div>
                </div>
                <div className="rounded-lg border border-surface-border bg-surface-card p-5 sm:p-6 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-20 rounded bg-surface-elevated" />
                    <div className="h-4 w-16 rounded bg-surface-elevated" />
                  </div>
                  <div className="mt-4 h-6 w-3/4 rounded bg-surface-elevated" />
                  <div className="mt-2 h-10 w-full rounded bg-surface-elevated" />
                  <div className="mt-6 flex justify-between border-t border-surface-border pt-4">
                    <div className="h-4 w-24 rounded bg-surface-elevated" />
                    <div className="h-4 w-20 rounded bg-surface-elevated" />
                  </div>
                </div>
              </>
            ) : projects.length === 0 ? (
              <div className="col-span-full rounded-lg border border-surface-border bg-surface-card p-8 text-center text-xs font-mono text-gray-500">
                No active projects deployed yet.
              </div>
            ) : (
              projects.map((proj) => (
                <div
                  key={proj.id}
                  className="glow-card flex flex-col justify-between rounded-lg bg-surface-card p-5 sm:p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] font-mono uppercase text-gray-400">
                        {proj.category}
                      </span>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono font-medium ${proj.badgeColor || "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-surface-border pt-4">
                    <span className="font-mono text-xs text-gray-500">
                      {proj.metrics}
                    </span>
                    {proj.url && proj.url !== "#" ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-amber-gold transition hover:text-amber-300"
                      >
                        Visit Platform
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-500">Internal Engine</span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* TECHNICAL STACK MATRIX */}
        <section id="stack" className="py-12 sm:py-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-glow">
            <Cpu className="h-3.5 w-3.5" />
            Infrastructure & Tooling
          </div>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Engineering Matrix
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group) => (
              <div key={group.category} className="rounded-lg border border-surface-border bg-surface-card p-5">
                <h3 className="font-mono text-xs font-semibold text-amber-gold uppercase tracking-wider">
                  {group.category}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="h-1 w-1 rounded-full bg-amber-glow/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES / SERVICES */}
        <section id="services" className="py-12 sm:py-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-glow">
            <Zap className="h-3.5 w-3.5" />
            Core Capabilities
          </div>
          <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            Autonomous Workflows & Architecture
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-surface-border bg-surface-card p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-amber-glow/10 text-amber-glow">
                <Terminal className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">Autonomous Agent Systems</h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Multi-agent delegation, self-healing cron watchers, and automated developer tooling executing without continuous human oversight.
              </p>
            </div>

            <div className="rounded-lg border border-surface-border bg-surface-card p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-amber-glow/10 text-amber-glow">
                <Globe className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">Edge Web & Multi-Tenant Routing</h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Cloudflare Zero Trust tunnels, isolated subdomains, high-throughput Nginx reverse proxies, and sub-50ms static hydration.
              </p>
            </div>

            <div className="rounded-lg border border-surface-border bg-surface-card p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-amber-glow/10 text-amber-glow">
                <Layers className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">Generative Media Pipelines</h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Headless programmatic video rendering, automated audio voice synthesis, and multi-channel social media syndication.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer id="contact" className="border-t border-surface-border py-12 text-sm text-gray-400">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="font-mono font-bold text-white">ARIFIN TONANG</div>
              <p className="mt-1 text-xs text-gray-500">
                Creative AI Engineer • Surabaya / Jakarta (WIB, UTC+7)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://github.com/tonangarivin-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-glow"
              >
                GitHub @tonangarivin-ui
              </a>
              <a
                href="https://x.com/0xAI_D"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-glow"
              >
                X @0xAI_D
              </a>
              <Link
                href="/admin"
                className="text-gray-500 transition hover:text-amber-glow"
              >
                [Admin Login]
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-600">
            © {2026} Tonang.ai • Built with Next.js 15 & Cloudflare Edge.
          </div>
        </footer>
      </main>
    </div>
  );
}
