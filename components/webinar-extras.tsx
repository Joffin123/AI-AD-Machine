import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CurriculumIcon } from "@/components/ui/icons";
import { EVENT, PASS_PERKS, STUDIO_PERKS } from "@/lib/site-data";

export function WebinarExtras() {
  return (
    <section className="relative overflow-hidden bg-cream pb-6 pt-16 sm:pb-8 sm:pt-20 lg:pb-8 lg:pt-24">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <SectionHeading>More Than Just a Webinar</SectionHeading>

        <Reveal delay={90}>
          <p className="mt-5 text-center font-display text-base font-semibold text-ink sm:text-xl lg:mt-6 lg:text-[28px]">
            🎁 What You Get With Your {EVENT.price} Pass
          </p>
        </Reveal>

        {/* Two headline perks */}
        <ul className="mt-8 grid gap-3 sm:gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6">
          {PASS_PERKS.map((perk, index) => (
            <Reveal
              key={perk.title}
              as="li"
              from={index === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink bg-acid p-5 sm:p-7 md:bg-white lg:rounded-[32px] lg:p-11">
                {/* Oversized watermark icon */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 top-1/2 hidden h-[160px] w-[160px] -translate-y-1/2 items-center justify-center rounded-full bg-acid/60 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-110 md:flex lg:right-10 lg:h-[159px] lg:w-[159px]"
                >
                  <CurriculumIcon
                    name={perk.icon}
                    className="h-24 w-24 text-ink lg:h-[110px] lg:w-[110px]"
                  />
                </span>

                <div className="relative md:max-w-[62%]">
                  <CurriculumIcon
                    name={perk.icon}
                    className="h-5 w-5 text-ink md:hidden"
                  />
                  <h3 className="mt-3 font-display text-lg font-bold text-ink sm:text-2xl md:mt-0 lg:text-[32px] lg:font-semibold">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-pretty font-display text-[11px] leading-relaxed text-ink sm:text-sm lg:mt-4 lg:text-lg">
                    {perk.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Studio perks */}
        <Reveal delay={80}>
          <p className="mx-auto mt-14 max-w-[900px] text-center font-display text-xl font-bold text-ink sm:text-3xl lg:mt-20 lg:text-4xl">
            And If You Join AI Ad Machine Studio…
          </p>
        </Reveal>


        <ul className="mt-8 flex flex-wrap justify-center gap-6 lg:mt-12 lg:gap-x-6 lg:gap-y-8">
          {STUDIO_PERKS.map((perk, index) => (
            <Reveal
              key={perk.title}
              as="li"
              delay={(index % 3) * 110}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* The image is the whole card — shape, icon, title and body
                  are all baked into the illustration itself. The fixed
                  aspect box keeps every card the same height even though the
                  exports don't all share one aspect ratio. */}
              <div className="group mx-auto aspect-[300/280] w-full max-w-[340px] transition-transform duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-2 hover:rotate-1">
                <SmartImage
                  src={perk.image}
                  alt={`${perk.title} — ${perk.body}`}
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-contain transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12 flex justify-center lg:mt-16">
          <CtaButton>Register for the Masterclass</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
