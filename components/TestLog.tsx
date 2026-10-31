import { log, Verdict } from "@/lib/data";
import Reveal from "./Reveal";

const dot: Record<Verdict, string> = {
  shipped: "bg-signal-pass",
  mixed: "bg-signal-mixed",
  skip: "bg-signal-skip",
};

const label: Record<Verdict, string> = {
  shipped: "text-signal-pass",
  mixed: "text-signal-mixed",
  skip: "text-signal-skip",
};

export default function TestLog() {
  return (
    <section
      id="log"
      className="scroll-mt-20 border-b border-line-light bg-paper dark:border-line-dark dark:bg-ink-900/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Test log
          </h2>
        </Reveal>

        <div className="relative mt-10 pl-8">
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-line-light dark:bg-line-dark" />
          <div className="flex flex-col gap-9">
            {log.map((entry, i) => (
              <Reveal key={`${entry.date}-${entry.product}`} delay={i * 60}>
                <div className="relative">
                  <span
                    className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-paper-light dark:ring-ink-950 ${dot[entry.verdict]}`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
                      {entry.date}
                    </span>
                    <span
                      className={`font-mono text-xs font-medium ${label[entry.verdict]}`}
                    >
                      {entry.verdict}
                    </span>
                    <h3 className="text-base font-semibold">
                      {entry.product}
                    </h3>
                  </div>
                  <p className="mt-1.5 max-w-prose text-sm text-muted-light dark:text-muted-dark">
                    {entry.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
