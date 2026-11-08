import { social, shipped, vouches, buildingSince, availability } from "@/lib/data";
import { XIcon, GitHubIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line-light dark:border-line-dark"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2" />

      <div className="hero-stagger relative mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        {availability.open && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line-light bg-paper-card px-3 py-1 dark:border-line-dark dark:bg-ink-900">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-pass opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-pass" />
            </span>
            <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
              {availability.label}
            </span>
          </div>
        )}
        <p className="mb-5 font-mono text-sm text-muted-light dark:text-muted-dark">
          Imrexx — full-stack dev & content creator
        </p>

        <h1 className="max-w-[17ch] font-display text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.1] tracking-tight">
          I build things,{" "}
          <span className="italic text-signal-pass-vivid">
            ship them
          </span>
          , and stand behind what I make.
        </h1>

        <p className="mt-6 max-w-prose text-lg text-muted-light dark:text-muted-dark">
          Full-stack developer, content creator, and web3 builder. I write
          about what I ship — follow the account for the rest.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 text-sm font-medium text-paper-light shadow-card transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-signal-pass dark:text-ink-950"
          >
            <XIcon className="h-4 w-4" />
            Follow on X
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-light px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-ink-950 dark:border-line-dark dark:hover:border-paper"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line-light pt-6 dark:border-line-dark">
          <div>
            <dt className="font-mono text-xs text-muted-light dark:text-muted-dark">
              shipped
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold">
              {shipped.length}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted-light dark:text-muted-dark">
              vouched for by
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold">
              {vouches.length}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted-light dark:text-muted-dark">
              building since
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold">
              {buildingSince}
            </dd>
          </div>
        </dl>
      </div>

      <a
        href="#values"
        aria-label="Scroll to content"
        className="animate-bob absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-light transition hover:text-ink-950 dark:text-muted-dark dark:hover:text-paper sm:block"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
