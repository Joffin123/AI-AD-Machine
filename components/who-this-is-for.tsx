import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { AUDIENCE } from "@/lib/site-data";

export function WhoThisIsFor() {
  return (
    <section className="bg-cream pb-12 pt-6 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
            Who This Is For
          </h2>
        </Reveal>

        {/*
          Sticky stacking deck: each card pins a little lower than the one
          before it, so they pile up like a deck of cards as you scroll.
        */}
        <div className="mt-10 lg:mt-16">
          {AUDIENCE.map((item, index) => (
            <div
              key={item.title}
              className="sticky mb-5 lg:mb-8"
              style={{ top: `calc(5rem + ${index * 14}px)` }}
            >
              <Reveal from="zoom" className="h-full">
                <article
                  className={`relative grid overflow-hidden rounded-2xl border border-ink/90 lg:grid-cols-2 lg:rounded-[32px] ${
                    index % 2 === 0 ? "bg-cream" : "bg-cream-2"
                  }`}
                >
                  <div className="order-2 flex flex-col justify-center gap-3 px-6 py-6 text-center sm:px-9 lg:order-1 lg:gap-4 lg:px-[73px] lg:py-14 lg:text-left">
                    <h3 className="font-display text-balance text-[17px] font-semibold leading-snug sm:text-2xl lg:text-[32px]">
                      {item.highlight ? (
                        <span className="box-decoration-clone rounded bg-ink px-2 py-0.5 text-cream lg:px-3 lg:py-1">
                          {item.title}
                        </span>
                      ) : (
                        <span className="text-ink">{item.title}</span>
                      )}
                    </h3>
                    <p className="whitespace-pre-line font-display text-pretty text-[11px] font-light leading-relaxed text-ink sm:text-sm lg:text-[22px] lg:font-normal">
                      {item.body}
                    </p>
                  </div>

                  <div className="order-1 relative aspect-[16/10] w-full overflow-hidden lg:order-2 lg:aspect-auto lg:h-[405px]">
                    <SmartImage
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 620px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
