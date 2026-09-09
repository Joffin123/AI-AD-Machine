import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/ui/reveal";
import { BRANDS } from "@/lib/site-data";

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-cream pb-10 pt-4 sm:pb-14 lg:pb-16 lg:pt-8">
      <div className="mx-auto w-full max-w-[1296px] px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-2xl border border-ink py-9 lg:rounded-3xl lg:py-12">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-cream px-3 text-center text-[10px] font-semibold text-ink sm:text-base lg:-top-5 lg:px-4 lg:text-[26px]">
              Brands That Trust Our Work
            </span>

            <div className="group relative overflow-hidden">
              <div className="flex w-max animate-marquee items-center [animation-play-state:running] group-hover:[animation-play-state:paused]">
                {loop.map((brand, index) => (
                  <div
                    key={`${brand.src}-${index}`}
                    className="flex shrink-0 items-center px-6 lg:px-8"
                    aria-hidden={index >= BRANDS.length}
                  >
                    <SmartImage
                      src={brand.src}
                      alt={index >= BRANDS.length ? "" : brand.name}
                      width={brand.width}
                      height={brand.height}
                      className="h-5 w-auto opacity-45 grayscale transition-opacity duration-300 hover:opacity-80 lg:h-8"
                    />
                  </div>
                ))}
              </div>

              {/* Edge fades */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent lg:w-40"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent lg:w-40"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
