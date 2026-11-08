import { shipped } from "@/lib/data";
import { ExternalIcon, CodeIcon } from "./icons";
import Reveal from "./Reveal";

export default function Shipped() {
  return (
    <section
      id="shipped"
      className="scroll-mt-20 border-b border-line-light bg-paper dark:border-line-dark dark:bg-ink-900/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-3 block h-[3px] w-8 rounded-full bg-signal-pass" />
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Shipped
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {shipped.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="flex h-full flex-col spotlight rounded-xl2 border border-line-light bg-paper-card p-6 shadow-card transition hover:-translate-y-1 hover:border-signal-pass/60 hover:shadow-lg dark:border-line-dark dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-signal-pass/40">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex flex-none gap-1.5">
                    <span className="rounded-full border border-line-light px-2.5 py-0.5 font-mono text-[0.68rem] text-muted-light dark:border-line-dark dark:text-muted-dark">
                      {item.category.toLowerCase()}
                    </span>
                    <span className="rounded-full border border-signal-pass px-2.5 py-0.5 font-mono text-[0.68rem] text-signal-pass">
                      {item.tag.toLowerCase()}
                    </span>
                  </div>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-light dark:text-muted-dark">
                  {item.description}
                </p>
                {(item.visitUrl || item.codeUrl) && (
                  <div className="mt-5 flex gap-5 border-t border-line-light pt-4 text-sm dark:border-line-dark">
                    {item.visitUrl && (
                      <a
                        href={item.visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-ink-950 hover:text-signal-pass dark:text-paper dark:hover:text-signal-pass-vivid"
                      >
                        Visit <ExternalIcon />
                      </a>
                    )}
                    {item.codeUrl && (
                      <a
                        href={item.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-light hover:text-ink-950 dark:text-muted-dark dark:hover:text-paper"
                      >
                        <CodeIcon /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
