import { stack } from "@/lib/data";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <section className="border-b border-line-light py-14 dark:border-line-dark sm:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-muted-light dark:text-muted-dark">
            Tools I build with
          </p>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {stack.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-light dark:text-muted-dark">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line-light bg-paper-card px-3 py-1 font-mono text-xs dark:border-line-dark dark:bg-ink-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
