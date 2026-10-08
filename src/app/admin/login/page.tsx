"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/admin";
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Password incorrect.");
      }
    } catch {
      setError("Network or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4 py-12">
      <div className="w-full max-w-sm rounded-xl border border-surface-border bg-surface-card p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-glow/40 bg-amber-glow/10 text-amber-glow">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-xl font-bold tracking-tight text-white">
            Admin Console Access
          </h1>
          <p className="mt-1 text-xs text-gray-400">
            Tonang.ai Portfolio Management System
          </p>
        </div>

        {error && (
          <div className="mt-5 flex items-center gap-2 rounded border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider"
            >
              Master Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password..."
              className="mt-2 block w-full rounded border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-amber-glow focus:outline-none focus:ring-1 focus:ring-amber-glow"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded bg-amber-glow py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400 disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Unlock Dashboard"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 border-t border-surface-border pt-4 text-center">
          <Link
            href="/"
            className="font-mono text-xs text-gray-500 transition hover:text-gray-300"
          >
            ← Back to Public Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
