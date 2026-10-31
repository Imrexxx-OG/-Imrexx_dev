import { services, ServiceIcon } from "@/lib/data";
import { CodeIcon, PenIcon, MegaphoneIcon, ChartIcon } from "./icons";
import Reveal from "./Reveal";

const iconMap: Record<ServiceIcon, (props: { className?: string }) => JSX.Element> = {
  code: CodeIcon,
  pen: PenIcon,
  megaphone: MegaphoneIcon,
  chart: ChartIcon,
};

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-b border-line-light py-16 dark:border-line-dark sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-3 block h-[3px] w-8 rounded-full bg-signal-pass" />
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What I do
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={i * 60}>
                <div className="h-full rounded-xl2 border border-line-light bg-paper-card p-6 shadow-card transition hover:-translate-y-1 hover:border-signal-pass/60 hover:shadow-lg dark:border-line-dark dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-signal-pass/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-pass/10 text-signal-pass">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-light dark:text-muted-dark">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
