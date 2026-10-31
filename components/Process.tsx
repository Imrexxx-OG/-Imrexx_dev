import { process } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-b border-line-light bg-paper py-16 dark:border-line-dark dark:bg-ink-900/40 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-3 block h-[3px] w-8 rounded-full bg-signal-pass" />
          <p className="font-mono text-sm text-muted-light dark:text-muted-dark">
            How we&apos;d work together
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Four steps, no surprises
          </h2>
        </Reveal>

        <div className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-line-light dark:bg-line-dark lg:block" />
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <div className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-signal-pass bg-paper-light font-display text-sm font-semibold text-signal-pass dark:bg-ink-950">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-1.5 max-w-prose text-sm text-muted-light dark:text-muted-dark">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
