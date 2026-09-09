import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCER } from "@/lib/site-data";

export function Producer() {
  return (
    <section className="overflow-hidden bg-ink-2 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[433px_minmax(0,1fr)] lg:gap-12">
          {/* Portrait in its acid frame */}
          <Reveal from="left" className="mx-auto w-full max-w-[433px]">
            <div className="group rounded-[16px] bg-acid p-2 lg:rounded-[30px] lg:p-4">
              <div className="relative aspect-[403/612] w-full overflow-hidden rounded-xl bg-ink lg:rounded-[22px]">
                <SmartImage
                  src={PRODUCER.image}
                  alt={`${PRODUCER.name}, ${PRODUCER.role}`}
                  fill
                  sizes="(min-width: 1024px) 403px, 90vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="flex flex-col justify-center">
            <Reveal from="right">
              <p className="font-display text-xl font-bold text-cream lg:text-3xl">
                {PRODUCER.eyebrow}
              </p>
              <p className="mt-3 font-display text-[34px] font-bold leading-none text-acid-2 sm:text-5xl lg:mt-5 lg:text-[73px]">
                {PRODUCER.name}
              </p>
              <p className="mt-2 font-display text-sm font-medium text-acid-2 lg:mt-3 lg:text-[26px]">
                {PRODUCER.role}
              </p>
            </Reveal>

            <Reveal from="right" delay={110} className="mt-6 lg:mt-10">
              <p className="font-display text-[13px] leading-relaxed text-cream lg:text-[22px]">
                {PRODUCER.intro}
              </p>
              <div className="mt-4 space-y-4 lg:mt-6 lg:space-y-6">
                {PRODUCER.bio.map((line) => (
                  <p
                    key={line}
                    className="text-pretty font-display text-[13px] leading-relaxed text-cream lg:text-[22px]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <ul className="mt-10 grid grid-cols-3 gap-2.5 lg:mt-16 lg:gap-6">
          {PRODUCER.stats.map((stat, index) => (
            <Reveal key={stat.label} as="li" delay={index * 120}>
              <div className="flex h-full flex-col items-center justify-center gap-1 rounded-xl border border-acid-2 bg-ink-2 p-3 text-center transition-colors duration-500 hover:bg-acid-2/10 lg:gap-2 lg:rounded-2xl lg:p-6">
                <span className="font-display text-lg font-bold leading-tight text-acid-2 sm:text-3xl lg:text-[54px]">
                  {stat.value}
                </span>
                <span className="font-display text-[9px] leading-tight text-cream sm:text-sm lg:text-2xl">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
