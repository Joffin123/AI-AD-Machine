"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { FAQS } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className="overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1040px] px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center text-[30px] font-bold tracking-[-0.01em] text-ink lg:text-5xl">
            FAQ
          </h2>
        </Reveal>

        <ul className="mt-8 space-y-2 lg:mt-12 lg:space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <Reveal key={item.q} as="li" delay={Math.min(index, 6) * 50}>
                <div
                  className={`overflow-hidden rounded-xl border border-ink transition-colors duration-400 lg:rounded-2xl ${
                    isOpen ? "bg-acid" : "bg-cream hover:bg-acid/25"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left lg:p-6"
                    >
                      <span className="text-[13px] font-semibold leading-snug text-ink lg:text-xl">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className={`grid h-6 w-6 shrink-0 place-items-center text-xl font-semibold text-ink transition-transform duration-400 ease-[var(--ease-out-expo)] lg:text-2xl ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {/* 0fr → 1fr gives a smooth, height-agnostic reveal */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[var(--ease-out-expo)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-[12px] leading-relaxed text-ink lg:px-6 lg:pb-6 lg:text-lg">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
