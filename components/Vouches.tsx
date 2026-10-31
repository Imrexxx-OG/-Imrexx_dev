import { vouches } from "@/lib/data";
import { XIcon } from "./icons";
import Reveal from "./Reveal";

export default function Vouches() {
  return (
    <section
      id="vouches"
      className="scroll-mt-20 border-b border-line-light py-16 dark:border-line-dark sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-3 block h-[3px] w-8 rounded-full bg-signal-pass" />
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Vouched for by
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {vouches.map((v, i) => (
            <Reveal key={v.handle} delay={i * 60}>
              <figure className="h-full rounded-xl2 border border-line-light bg-paper-card p-6 shadow-card transition hover:-translate-y-1 hover:border-signal-pass/60 hover:shadow-lg dark:border-line-dark dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-signal-pass/40">
                <blockquote className="font-display text-[1.05rem] italic leading-snug text-ink-950 dark:text-paper">
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 border-t border-line-light pt-4 dark:border-line-dark">
                  {v.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={v.avatar}
                      alt={v.name}
                      className="h-8 w-8 flex-none rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-signal-pass/10 font-mono text-xs font-semibold text-signal-pass">
                      {v.name.charAt(0)}
                    </span>
                  )}
                  <span className="text-sm font-semibold">{v.name}</span>
                  <a
                    href={`https://x.com/${v.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-xs text-muted-light hover:text-ink-950 dark:text-muted-dark dark:hover:text-paper"
                  >
                    <XIcon className="h-3 w-3" />@{v.handle}
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
