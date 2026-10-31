const navItems = [
  { href: "#services", label: "Services" },
  { href: "#shipped", label: "Shipped" },
  { href: "#vouches", label: "Vouched for" },
  { href: "#log", label: "Test log" },
  { href: "#method", label: "Method" },
];

const legend: { label: string; className: string }[] = [
  { label: "Shipped", className: "border-signal-pass text-signal-pass" },
  { label: "Mixed", className: "border-signal-mixed text-signal-mixed" },
  { label: "Skip", className: "border-signal-skip text-signal-skip" },
];

export default function SideRail() {
  return (
    <header className="sticky top-0 z-20 bg-paper-light/95 backdrop-blur dark:bg-ink-950/95 lg:static lg:z-auto lg:w-56 lg:flex-none lg:border-r lg:border-line-light lg:bg-transparent lg:py-14 lg:pl-6 dark:lg:border-line-dark">
      <div className="flex items-center justify-between border-b border-line-light px-5 py-5 dark:border-line-dark lg:block lg:border-none lg:px-0 lg:py-0">
        <span className="text-[1.05rem] font-semibold tracking-tight">
          Imrexx
        </span>

        {/* Mobile nav: horizontal scroll chips */}
        <nav className="flex gap-2 overflow-x-auto lg:hidden" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-line-light px-3 py-1 text-sm text-muted-light dark:border-line-dark dark:text-muted-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop nav */}
      <nav
        className="hidden flex-col gap-1 lg:mt-10 lg:flex"
        aria-label="Sections"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-light transition hover:border-line-light hover:text-ink-950 dark:text-muted-dark dark:hover:border-line-dark dark:hover:text-paper"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Verdict legend, desktop only */}
      <div className="hidden lg:mt-12 lg:block">
        <p className="mb-3 pl-4 font-mono text-xs text-muted-light dark:text-muted-dark">
          verdict key
        </p>
        <ul className="flex flex-col gap-2 pl-4">
          {legend.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span
                className={`rounded-sm border px-1.5 py-0.5 font-mono text-[0.7rem] ${item.className}`}
              >
                {item.label.toLowerCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
