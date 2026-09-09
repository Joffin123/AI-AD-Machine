import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { CornerArrow } from "@/components/ui/icons";
import { SHOWCASE } from "@/lib/site-data";

export function Future() {
  const reels = [...SHOWCASE, ...SHOWCASE];

  return (
    <section className="overflow-hidden bg-sage py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <Reveal className="relative">
          <CornerArrow className="mx-auto mb-4 h-8 w-8 text-ink lg:absolute lg:left-0 lg:top-4 lg:mb-0 lg:h-[42px] lg:w-[42px]" />
          <h2 className="mx-auto max-w-[1000px] text-balance text-center text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink sm:text-5xl lg:text-6xl">
            The future isn’t just{" "}
            <span className="marker">AI-generated ads.</span> It’s{" "}
            <span className="marker">AI-generated ads that win.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-8 max-w-[850px] space-y-1 text-center text-[15px] leading-relaxed text-ink lg:mt-10 lg:text-[22px]">
            <p>The technology is already here.</p>
            <p>The question is whether you know how to use it.</p>
            <p>You can keep watching AI tools evolve.</p>
            <p>
              Or you can learn how to use them to create ads that are actually
              built to perform.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-[1000px] text-balance text-center text-lg font-semibold text-ink lg:mt-10 lg:text-3xl">
            One laptop. One system. A new way to make ads that sell.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-8 flex justify-center lg:mt-12">
          <CtaButton size="lg" className="w-full max-w-[400px] [&>a]:w-full">
            Reserve my seat
          </CtaButton>
        </Reveal>
      </div>

      {/* Vertical-format creative showcase, autoplaying on an infinite loop */}
      <div className="group relative mt-12 overflow-hidden lg:mt-16">
        <div className="flex w-max animate-marquee-slow items-center group-hover:[animation-play-state:paused]">
          {reels.map((src, index) => (
            <div key={`${src}-${index}`} className="shrink-0 px-2 lg:px-3">
              <div className="relative aspect-[9/16] w-[150px] overflow-hidden rounded-[10px] border-[0.5px] border-black/80 bg-ink sm:w-[180px] lg:w-[216px]">
                <video
                  src={src}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
