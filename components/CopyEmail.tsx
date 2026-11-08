"use client";

import { useState } from "react";
import { MailIcon } from "./icons";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-paper-light transition hover:-translate-y-0.5 hover:border-white/50"
    >
      <MailIcon className="h-4 w-4" />
      <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}