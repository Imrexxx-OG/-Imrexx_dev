"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-b border-line-light bg-paper py-16 dark:border-line-dark dark:bg-ink-900/40 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-3 block h-[3px] w-8 rounded-full bg-signal-pass" />
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Before you reach out
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-line-light dark:divide-line-dark">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <span
                    className={`flex-none font-mono text-lg text-signal-pass transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-prose text-sm text-muted-light dark:text-muted-dark">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
