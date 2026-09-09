import type { ReactNode } from "react";
import { EVENT } from "@/lib/site-data";

type CtaButtonProps = {
  children: ReactNode;
  /** Renders the struck-through original price next to the offer price. */
  showPrice?: boolean;
  /** Renders the ↗ glyph after the label. */
  showArrow?: boolean;
  /** Floating "<xxx seats filled already.>" pill above the button. */
  seatsBadge?: boolean;
  href?: string;
  className?: string;
  size?: "md" | "lg";
};

export function CtaButton({
  children,
  showPrice = true,
  showArrow = false,
  seatsBadge = false,
  href = EVENT.registerUrl,
  className = "",
  size = "md",
}: CtaButtonProps) {
  const pad =
    size === "lg"
      ? "px-7 py-5 text-lg sm:text-xl md:text-2xl"
      : "px-6 py-4 text-base sm:text-lg md:text-xl";

  return (
    <div className={`relative inline-flex max-w-full flex-col ${className}`}>
      {seatsBadge && (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-acid-2 bg-cream px-4 py-1.5 text-[12px] font-semibold text-ink sm:text-[13px]">
          {EVENT.seatsLabel}
        </span>
      )}

      <a
        href={href}
        className={`group relative flex items-center justify-center gap-2 rounded-2xl bg-ink text-center font-bold text-cream shadow-cta transition-all duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:shadow-cta-lg active:translate-y-0 ${pad}`}
      >
        <span className="relative z-10 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
          <span>{children}</span>
          {showPrice && (
            <span className="flex items-baseline gap-2">
              <span className="text-[0.72em] font-light text-cream/70 line-through decoration-cream/70">
                {EVENT.priceOriginal}
              </span>
              <span>{EVENT.price}</span>
            </span>
          )}
          {showArrow && (
            <span className="inline-block transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          )}
        </span>

        {/* Acid sheen that sweeps across on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-acid/25 transition-all duration-700 ease-[var(--ease-out-expo)] group-hover:left-[150%]" />
        </span>
      </a>
    </div>
  );
}
