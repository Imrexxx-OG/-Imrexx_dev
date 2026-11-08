"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#shipped", label: "Shipped" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-30 border-b backdrop-blur-md transition-shadow ${
        scrolled
          ? "border-line-light bg-paper-light/90 shadow-sm dark:border-line-dark dark:bg-ink-950/85"
          : "border-transparent bg-paper-light/60 dark:bg-ink-950/50"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          @Imrexx_dev
        </a>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                active === item.href
                  ? "bg-ink-950 text-paper-light dark:bg-signal-pass/15 dark:text-signal-pass-vivid"
                  : "text-muted-light hover:text-ink-950 dark:text-muted-dark dark:hover:text-paper"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-ink-950 px-4 py-1.5 text-sm font-medium text-paper-light transition hover:-translate-y-0.5 dark:bg-signal-pass dark:text-ink-950"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line-light dark:border-line-dark sm:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line-light bg-paper-light/95 px-5 pb-5 pt-2 dark:border-line-dark dark:bg-ink-950/95 sm:hidden"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-light py-3.5 text-base dark:border-line-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-ink-950 py-3 text-center text-sm font-medium text-paper-light dark:bg-signal-pass dark:text-ink-950"
          >
            Hire me
          </a>
        </nav>
      )}
    </header>
  );
}