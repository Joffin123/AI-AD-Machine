import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CurriculumIcon } from "@/components/ui/icons";
import { EVENT, PASS_PERKS, STUDIO_PERKS } from "@/lib/site-data";

/** Hand-drawn looking blob silhouettes, one per studio perk. */
const BLOB_SHAPES = [
  "62% 38% 40% 60% / 45% 42% 58% 55%",
  "38% 62% 58% 42% / 55% 60% 40% 45%",
  "58% 42% 62% 38% / 42% 58% 45% 55%",
  "42% 58% 38% 62% / 58% 45% 55% 40%",
  "60% 40% 55% 45% / 40% 55% 45% 62%",
  "45% 55% 42% 58% / 62% 40% 58% 42%",
];

export function WebinarExtras() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
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

        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
          {STUDIO_PERKS.map((perk, index) => (
            <Reveal
              key={perk.title}
              as="li"
              delay={(index % 3) * 110}
              className="h-full"
            >
              <article className="group flex h-full flex-col items-center text-center">
                <div
                  className="relative flex aspect-square w-full max-w-[300px] items-center justify-center bg-white p-8 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-2 group-hover:rotate-1"
                  style={{ borderRadius: BLOB_SHAPES[index] }}
                >
                  <SmartImage
                    src={perk.image}
                    alt=""
                    width={260}
                    height={200}
                    className="h-auto w-[72%] object-contain transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 text-balance font-display text-[15px] font-semibold text-ink lg:text-[17px]">
                  {perk.title}
                </h3>
                <p className="mt-2 max-w-[280px] text-pretty font-display text-xs leading-relaxed text-ink lg:text-[13px]">
                  {perk.body}
                </p>
              </article>
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
