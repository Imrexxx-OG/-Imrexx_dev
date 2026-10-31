import { ShieldIcon } from "./icons";
import Reveal from "./Reveal";

const rules = [
  "I don't shill what I haven't personally used.",
  "I don't cover anonymous teams with no public founder.",
  "If something I covered turns out bad, I post the correction as its own post — not a buried reply.",
];

export default function Method() {
  return (
    <section
      id="method"
      className="scroll-mt-20 border-b border-line-light py-16 dark:border-line-dark sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-xl2 border border-line-light bg-paper-card p-7 shadow-card dark:border-line-dark dark:bg-ink-900 dark:shadow-card-dark sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-signal-pass/10 text-signal-pass">
                <ShieldIcon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  How I test
                </h2>
                <p className="mt-2 max-w-prose text-sm text-muted-light dark:text-muted-dark">
                  I say plainly whether a test was on testnet or mainnet, and
                  with real funds or faucet funds, before I say anything about
                  whether a product is good.
                </p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 border-t border-line-light pt-6 dark:border-line-dark sm:grid-cols-3">
              {rules.map((rule) => (
                <li
                  key={rule}
                  className="text-sm text-muted-light dark:text-muted-dark"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
