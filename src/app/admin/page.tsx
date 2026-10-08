"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  LogOut,
  FolderPlus,
  Radio,
  Edit2,
  Trash2,
  ExternalLink,
  Activity,
  Layers,
  Cpu,
  Clock,
  CheckCircle,
  Plus,
  X
} from "lucide-react";
import type { Project } from "@/lib/projects";

export default function AdminDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newCategory, setNewCategory] = useState("Web Platform");
  const [newDescription, setNewDescription] = useState("");
  const [newMetrics, setNewMetrics] = useState("");
  const [newStatus, setNewStatus] = useState("Live");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);
        }
      }
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle.trim(),
          url: newUrl.trim() || "#",
          category: newCategory,
          description: newDescription.trim() || "Production system deployment.",
          status: newStatus,
          metrics: newMetrics.trim() || "Active",
        }),
      });

      if (res.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to create project");
      }

      const created: Project = await res.json();
      setProjects((prev) => [created, ...prev]);

      setNewTitle("");
      setNewUrl("");
      setNewDescription("");
      setNewMetrics("");
      setNewCategory("Web Platform");
      setNewStatus("Live");
      setIsModalOpen(false);
    } catch (err: any) {
      console.error("Error creating project:", err);
      setFormError(err.message || "Failed to create project.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this project?")) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });

      if (res.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to delete project");
      }

      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      console.error("Error deleting project:", err);
      alert(err.message || "Failed to delete project");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-gray-200">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 border-b border-surface-border bg-canvas/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-mono text-sm font-bold text-white hover:text-amber-glow">
              TONANG<span className="text-amber-glow">.AI</span>
            </Link>
            <span className="text-gray-600 font-mono">/</span>
            <span className="font-mono text-xs font-semibold text-gray-300">ADMIN CONSOLE</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono text-emerald-400 sm:inline-flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              SYSTEM HEALTHY (99.98%)
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded border border-surface-border bg-surface-card px-3 py-1.5 text-xs font-mono text-gray-300 transition hover:border-red-500 hover:text-red-400"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {/* KPI Telemetry Grid (2x2 on Mobile, 4-col on Desktop) */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-lg border border-surface-border bg-surface-card p-4">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs uppercase">Projects</span>
              <Layers className="h-4 w-4 text-amber-glow" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white">{projects.length}</div>
            <div className="mt-1 font-mono text-[11px] text-emerald-400">+1 this week</div>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-card p-4">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs uppercase">Est. Views</span>
              <Activity className="h-4 w-4 text-amber-glow" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white">14.2k</div>
            <div className="mt-1 font-mono text-[11px] text-emerald-400">+18.4% traffic</div>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-card p-4">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs uppercase">Active Bots</span>
              <Cpu className="h-4 w-4 text-amber-glow" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white">6 Active</div>
            <div className="mt-1 font-mono text-[11px] text-amber-gold">Buffer • Grok • VO</div>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-card p-4">
            <div className="flex items-center justify-between text-gray-400">
              <span className="font-mono text-xs uppercase">Edge Ping</span>
              <Clock className="h-4 w-4 text-amber-glow" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white">24ms</div>
            <div className="mt-1 font-mono text-[11px] text-emerald-400">Optimal Response</div>
          </div>
        </section>

        {/* Action Header & Modal Trigger */}
        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Project Showcase Manager
            </h2>
            <p className="text-xs text-gray-400">
              Manage items displayed on the public portfolio surface
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 rounded bg-amber-glow px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-400 sm:w-auto"
          >
            <Plus className="h-4 w-4" />
            Add New Project
          </button>
        </div>

        {/* Mobile Touch Cards (Shown on mobile < 768px) */}
        <div className="mt-6 space-y-3 md:hidden">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-surface-border bg-surface-card p-4 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] font-mono text-gray-400 uppercase">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-white">{p.title}</h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
                  {p.status}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                <span className="truncate">{p.url}</span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-surface-border pt-3">
                <span className="font-mono text-[11px] text-gray-500">{p.metrics}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="rounded p-1.5 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                    title="Delete Project"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Data Table (Shown on screens >= 768px) */}
        <div className="mt-6 hidden overflow-hidden rounded-lg border border-surface-border bg-surface-card md:block">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-surface-border bg-surface-elevated font-mono uppercase text-gray-400">
              <tr>
                <th className="px-5 py-3">Project Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Metrics</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border font-mono">
              {projects.map((p) => (
                <tr key={p.id} className="transition hover:bg-surface-elevated/40">
                  <td className="px-5 py-3.5">
                    <div className="font-sans font-bold text-white">{p.title}</div>
                    <div className="text-[11px] text-gray-500">{p.url}</div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-300">{p.category}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] text-emerald-400">
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">{p.metrics}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="rounded p-1 text-gray-400 transition hover:text-red-400"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick System Controls Panel */}
        <section className="mt-8 rounded-lg border border-surface-border bg-surface-card p-5">
          <h3 className="font-mono text-xs font-semibold text-amber-gold uppercase tracking-wider">
            Quick System Settings
          </h3>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Maintenance Mode</div>
              <div className="text-xs text-gray-400">
                Temporarily pause public traffic and show maintenance beacon
              </div>
            </div>
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`rounded px-4 py-1.5 text-xs font-mono font-semibold transition ${
                maintenanceMode
                  ? "bg-red-500 text-white"
                  : "border border-surface-border bg-surface-elevated text-gray-300 hover:text-white"
              }`}
            >
              {maintenanceMode ? "ENABLED (Traffic Locked)" : "DISABLED (Normal)"}
            </button>
          </div>
        </section>

        {/* Add Project Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-xl border border-surface-border bg-surface-card p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <h3 className="text-base font-bold text-white">Add New Showcase Project</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleAddProject} className="mt-4 space-y-4">
                <div>
                  <label className="block font-mono text-xs text-gray-300">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. VUNK AI Engine"
                    className="mt-1 block w-full rounded border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-amber-glow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-300">Target URL / Domain</label>
                  <input
                    type="text"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://..."
                    className="mt-1 block w-full rounded border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-amber-glow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-300">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="mt-1 block w-full rounded border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-white focus:border-amber-glow focus:outline-none"
                  >
                    <option value="Web Platform">Web Platform</option>
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Creative AI">Creative AI</option>
                  </select>
                </div>

                {formError && (
                  <div className="rounded border border-red-500/30 bg-red-500/10 p-2 text-xs text-red-400">
                    {formError}
                  </div>
                )}

                <div className="mt-6 flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded border border-surface-border px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-surface-elevated"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-amber-glow px-4 py-2 text-xs font-semibold text-black hover:bg-amber-400 disabled:opacity-50"
                  >
                    {isSubmitting ? "Saving..." : "Save Project"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
