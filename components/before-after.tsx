import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckIcon } from "@/components/ui/icons";
import { AFTER, BEFORE } from "@/lib/site-data";

const PIPELINE = [
  "IDEA",
  "HOOK",
  "SCRIPT",
  "ANGLE",
  "VISUAL",
  "AD",
  "PERFORMANCE",
];

export function BeforeAfter() {
  return (
    <section className="overflow-hidden bg-cream pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24 lg:pt-8">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <SectionHeading subtitle="By the end of the masterclass, you'll have a clearer understanding of how to approach AI-powered advertising from a performance-first perspective.">
          Don&apos;t leave with another AI tool. Leave with a high-value skill.
        </SectionHeading>

        {/* Pipeline */}
        <Reveal delay={100} className="mt-10 lg:mt-14">
          <div className="rounded-2xl bg-acid p-5 lg:rounded-3xl lg:p-8">
            <p className="text-center font-display text-[13px] font-medium text-ink lg:text-lg">
              You&apos;ll know how to think through:
            </p>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-display text-lg font-bold leading-tight text-ink sm:text-2xl lg:mt-5 lg:text-[35px]">
              {PIPELINE.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="transition-transform duration-300 ease-[var(--ease-out-expo)] hover:scale-110">
                    {step}
                  </span>
                  {index < PIPELINE.length - 1 && (
                    <span aria-hidden className="text-ink/60">
                      →
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        {/* Before / after */}
        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <h3 className="font-display text-center text-xl font-bold text-ink lg:text-[32px]">
              Before
            </h3>
            <ul className="mt-5 space-y-4 lg:mt-6 lg:space-y-6">
              {BEFORE.map((line) => (
                <li
                  key={line}
                  className="font-display text-[13px] leading-snug text-ink opacity-65 lg:text-[22px]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="right">
            <h3 className="font-display text-center text-xl font-bold text-ink lg:text-[32px]">
              After
            </h3>
            <ul className="mt-5 space-y-4 lg:mt-6 lg:space-y-6">
              {AFTER.map((line) => (
                <li key={line} className="group flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-acid transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-110 lg:h-10 lg:w-10">
                    <CheckIcon className="h-[18px] w-[18px] text-ink lg:h-6 lg:w-6" />
                  </span>
                  <span className="font-display text-[12px] leading-snug text-ink lg:text-[22px]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Closing lines */}
        <Reveal delay={120} className="mx-auto mt-12 max-w-[980px] lg:mt-20">
          <p className="text-center font-display text-lg font-medium text-ink lg:text-3xl">
            The goal isn’t to make more AI content.
          </p>
          <p className="mt-2 text-balance text-center font-display text-lg font-bold text-ink lg:text-3xl">
            It’s to know how to turn it into winning, performing ads.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
