import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { Blob, CircleScribble, GridLines } from "@/components/ui/decor";
import { CalendarIcon, ClockIcon, PresentIcon } from "@/components/ui/icons";
import { OfferTimer } from "@/components/offer-timer";
import { EVENT, HERO } from "@/lib/site-data";

const EVENT_ITEMS = [
  { Icon: CalendarIcon, label: "Live", value: EVENT.dateLabel },
  { Icon: ClockIcon, label: EVENT.durationLabel, value: EVENT.timeLabel },
  { Icon: PresentIcon, label: "Online", value: EVENT.platformLabel },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-14 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      {/* Decorative background */}
      <GridLines />
      <Blob className="-left-40 -top-48 h-[420px] w-[420px] lg:h-[572px] lg:w-[572px]" />
      <Blob
        slow
        className="-right-32 top-[45%] h-[380px] w-[380px] lg:h-[500px] lg:w-[500px]"
      />

      <div className="relative mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        {/* Badge */}
        <Reveal className="flex justify-center">
          <p className="rounded-full bg-acid px-6 py-3 text-center font-display text-[15px] font-medium leading-tight text-ink sm:text-lg lg:text-[26px]">
            {HERO.badge}
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={80}>
          <h1 className="mx-auto mt-6 max-w-[1150px] text-balance text-center text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl lg:mt-8 lg:text-[66px]">
            {HERO.headingLines[0]}{" "}
            <span className="lg:block">
              {HERO.headingLines[1].replace(HERO.headingCircled, "")}
              <span className="relative inline-block">
                {HERO.headingCircled}
                {/* Sits outside the text's own box (not clipped to it) so
                    the loop can bleed past the words on every side, per the
                    design. Desktop only — at narrower widths the heading
                    reflows, and a fixed loop would drift off the phrase. */}
                <CircleScribble
                  className="pointer-events-none absolute left-1/2 top-[58%] hidden h-[135%] w-[122%] max-w-none -translate-x-1/2 -translate-y-1/2 text-acid lg:block"
                />
              </span>
            </span>
          </h1>
        </Reveal>

        <div className="relative mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Sub-headline */}
          <Reveal
            delay={140}
            className="relative z-10 lg:col-start-1 lg:row-start-1"
          >
            <p className="font-display text-center text-[19px] leading-snug text-ink sm:text-2xl lg:text-left lg:text-[37px]">
              {HERO.subtitleMuted}
            </p>
            <p className="mt-2 flex items-stretch justify-center gap-3 text-center font-display text-[19px] font-semibold leading-snug text-ink sm:text-2xl lg:justify-start lg:text-left lg:text-[37px]">
              <span
                aria-hidden
                className="w-[4px] shrink-0 bg-ink lg:w-[8px]"
              />
              <span>{HERO.subtitleStrong}</span>
            </p>
          </Reveal>

          {/* Producer card */}
          <Reveal
            from="zoom"
            delay={200}
            className="relative z-10 mx-auto w-full max-w-[335px] lg:col-start-2 lg:row-span-3 lg:row-start-1"
          >
            <ProducerCard />
          </Reveal>

          {/* Event details */}
          <Reveal
            delay={180}
            className="relative z-10 lg:col-start-1 lg:row-start-2"
          >
            <dl className="grid grid-cols-3 rounded-xl border border-ink/85 p-3 lg:flex lg:items-center lg:rounded-none lg:border-0 lg:p-0">
              {EVENT_ITEMS.map(({ Icon, label, value }) => (
                <div
                  key={label + value}
                  className="flex flex-col items-center gap-1 px-1 text-center lg:flex-row lg:gap-4 lg:border-l lg:border-ink-2 lg:px-7 lg:text-left lg:first:border-l-0 lg:first:pl-0"
                >
                  <Icon className="h-[18px] w-[18px] shrink-0 text-ink-2 sm:h-6 sm:w-6 lg:h-[34px] lg:w-[34px]" />
                  <div className="lg:space-y-1.5">
                    <dt className="text-[10px] text-ink-2 sm:text-xs lg:text-[16px]">
                      {label}
                    </dt>
                    <dd className="text-[11px] font-semibold text-ink-2 sm:text-sm lg:text-[20px]">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Call to action */}
          <Reveal
            delay={240}
            className="relative z-10 lg:col-start-1 lg:row-start-3"
          >
            {/* Mobile: price card. Desktop: single wide button. */}
            <div className="rounded-2xl bg-acid p-3 shadow-cta lg:hidden">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xl font-bold leading-none text-ink">
                  <span className="text-base font-medium line-through decoration-ink/60">
                    {EVENT.priceOriginal}
                  </span>{" "}
                  <span className="text-[26px]">{EVENT.price}</span>
                </p>
                <p className="text-right text-xs text-ink">
                  (Offer Ends in <OfferTimer />)
                </p>
              </div>
              <CtaButton
                showPrice={false}
                showArrow
                className="mt-3 w-full font-display [&>a]:w-full"
              >
                Register for the Masterclass
              </CtaButton>
            </div>

            {/* Wrapper rather than `hidden lg:inline-flex` on the button:
                two unprefixed display utilities would race in the stylesheet. */}
            <div className="hidden lg:block">
              <CtaButton size="lg" className="font-display">{HERO.cta} –</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProducerCard() {
  return (
    <div className="group overflow-hidden rounded-[21px] bg-ink-2 p-4 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1">
      <div className="relative aspect-[304/270] w-full overflow-hidden rounded-2xl bg-ink">
        <SmartImage
          src={HERO.producer.image}
          alt={`${HERO.producer.name}, ${HERO.producer.role}`}
          fill
          priority
          sizes="(min-width: 1024px) 340px, 90vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
        />
      </div>

      <p className="mt-4 text-center text-[22px] font-bold text-acid-2">
        {HERO.producer.name}
      </p>
      <p className="mt-1 text-center text-[9px] font-medium text-cream sm:text-[10px]">
        {HERO.producer.role}
      </p>

      <dl className="mt-4 grid grid-cols-4 gap-1.5">
        {HERO.producer.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-[13px] font-bold leading-tight text-acid-2 sm:text-[15px]">
                {stat.value}
              </span>
              <span className="mt-0.5 block text-[8px] leading-tight text-cream sm:text-[9px]">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 text-center font-display text-[9px] font-semibold text-cream transition-colors duration-300 group-hover:text-acid-2">
        {HERO.producer.link}
      </p>
    </div>
  );
}
