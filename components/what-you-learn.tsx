import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CurriculumIcon } from "@/components/ui/icons";
import { CURRICULUM } from "@/lib/site-data";

export function WhatYouLearn() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <SectionHeading
          tone="light"
          subtitle="In this 5-hour live masterclass, you'll go beyond generating AI videos. You'll learn how to think about performance creatives from start to finish."
        >
          What Will You Learn Inside This Masterclass
        </SectionHeading>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {CURRICULUM.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(index % 3) * 110}
              className="h-full"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink bg-cream p-4 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 sm:p-6 lg:rounded-3xl lg:p-8">
                {/* Soft acid wash that swells on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-24 top-2 h-[420px] w-[420px] rounded-full bg-acid-pale transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-110 lg:h-[572px] lg:w-[572px]"
                />

                <div className="relative">
                  <CurriculumIcon
                    name={item.icon}
                    className="h-5 w-5 text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                  />
                  <h3 className="mt-4 text-balance text-[13px] font-bold leading-snug text-ink sm:text-lg lg:mt-6 lg:text-2xl lg:font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-pretty text-[10px] leading-relaxed text-ink-2 sm:text-sm lg:mt-3 lg:text-lg">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-8 flex justify-center lg:mt-12">
          <div className="w-full max-w-[640px] rounded-2xl bg-cream p-3 lg:rounded-3xl lg:p-8">
            <CtaButton className="w-full [&>a]:w-full">
              Yes, I want to learn the AI ad system
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
