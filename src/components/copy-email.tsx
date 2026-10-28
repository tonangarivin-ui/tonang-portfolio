"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="label rounded-sharp border border-lum-line px-2.5 py-1.5 text-lum-dim bloom hover:border-lum-focus hover:text-lum-ink"
      aria-live="polite"
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}
