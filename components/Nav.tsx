"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#shipped", label: "Shipped" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line-light/80 bg-paper-light/80 backdrop-blur-md dark:border-line-dark/80 dark:bg-ink-950/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          @Imrexx_dev
        </a>

        <nav
          className="hidden items-center gap-1 sm:flex"
          aria-label="Sections"
        >
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
        </nav>

        <nav className="flex gap-3 overflow-x-auto sm:hidden" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-muted-light dark:text-muted-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
