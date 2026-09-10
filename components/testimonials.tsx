"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { QuoteMark } from "@/components/ui/icons";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const railRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  /** Keep the dots in sync with wherever the rail has been swiped to. */
  const syncActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 16;
    setActive(Math.round(rail.scrollLeft / step));
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener("scroll", syncActive, { passive: true });
    return () => rail.removeEventListener("scroll", syncActive);
  }, [syncActive]);

  const goTo = (index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-cream pb-14 pt-14 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
            See what people have to say about the{" "}
            <span className="marker">AI Ad Machine</span> experience
          </h2>
        </Reveal>

        {/* Swipe rail on small screens, five-up row from lg */}
        <ul
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:mt-14 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible"
        >
          {TESTIMONIALS.map((item, index) => (
            <Reveal
              key={item.name}
              as="li"
              delay={index * 90}
              className="w-[248px] shrink-0 snap-center sm:w-[280px] lg:w-auto"
            >
              <figure className="group flex h-full flex-col overflow-hidden rounded-2xl bg-ink-2 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5">
                <div className="flex items-start justify-center px-6 pb-2 pt-7">
                  <QuoteMark className="h-14 w-auto text-acid-pale transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110 lg:h-16" />
                </div>

                <blockquote className="flex flex-1 flex-col justify-between gap-4 px-5 pb-6 pt-2">
                  <p className="font-quote text-center text-[11px] leading-relaxed text-cream lg:text-[10.5px] xl:text-[11.5px]">
                    “{item.quote}”
                  </p>
                  <figcaption className="text-center text-[9px] text-cream">
                    <span className="block font-bold">{item.name}</span>
                    <span className="block italic">{item.role}</span>
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </ul>

        {/* Carousel dots — mobile only */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={active === index}
              onClick={() => goTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-[var(--ease-out-expo)] ${
                active === index ? "w-6 bg-ink" : "w-2.5 bg-ink/25"
              }`}
            />
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center lg:mt-14">
          <CtaButton size="lg" className="[&>a]:px-12 [&>a]:py-6 [&>a]:text-xl sm:[&>a]:text-2xl md:[&>a]:text-[26px]">Register for the Masterclass</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
