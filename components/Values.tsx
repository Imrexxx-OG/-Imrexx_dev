import { values, ValueIcon } from "@/lib/data";
import { CompassIcon, ShieldIcon, SproutIcon, FeatherIcon } from "./icons";
import Reveal from "./Reveal";

const iconMap: Record<ValueIcon, (props: { className?: string }) => JSX.Element> = {
  compass: CompassIcon,
  shield: ShieldIcon,
  sprout: SproutIcon,
  feather: FeatherIcon,
};

export default function Values() {
  return (
    <section
      id="values"
      className="scroll-mt-20 border-b border-line-light bg-paper py-16 dark:border-line-dark dark:bg-ink-900/40 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-3 block h-[3px] w-8 rounded-full bg-signal-pass" />
          <p className="font-mono text-sm text-muted-light dark:text-muted-dark">
            How I work
          </p>
          <h2 className="mt-2 max-w-[24ch] font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A few things worth knowing before you hire me
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {values.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <Reveal key={value.title} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-xl2 border border-line-light bg-paper-card p-6 shadow-card transition hover:-translate-y-1 hover:border-signal-pass/60 hover:shadow-lg dark:border-line-dark dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-signal-pass/40">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-signal-pass/10 text-signal-pass">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-light dark:text-muted-dark">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
