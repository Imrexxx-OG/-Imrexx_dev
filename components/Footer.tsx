import { social } from "@/lib/data";
import { XIcon, GitHubIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 bg-ink-950 px-6 py-14 text-center text-paper-light shadow-card-dark sm:py-16">
            <div className="glow pointer-events-none absolute -bottom-20 left-1/2 h-64 w-[30rem] -translate-x-1/2 opacity-70" />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a project, a platform, or a story to tell?
              </h2>
              <p className="mx-auto mt-3 max-w-prose text-white/60">
                I build software, write content, and help builders think
                through growth. Reach out.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-signal-pass px-5 py-2.5 text-sm font-medium text-ink-950 transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  <XIcon className="h-4 w-4" /> DM on X
                </a>
                <a
                  href={`mailto:${social.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-paper-light transition hover:-translate-y-0.5 hover:border-white/50"
                >
                  <MailIcon className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-muted-light dark:text-muted-dark">
            Built by Imrexx Digital Solutions · CAC BN 8609914
          </p>
          <div className="flex gap-4 text-muted-light dark:text-muted-dark">
            <a
              href={social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-ink-950 dark:hover:text-paper"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-ink-950 dark:hover:text-paper"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="hover:text-ink-950 dark:hover:text-paper"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
