"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, ClockIcon } from "@/components/ui/icons";
import { OfferTimer } from "@/components/offer-timer";
import { EVENT } from "@/lib/site-data";

function PriceBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className="shrink-0">
      <p className="font-bold leading-none text-ink">
        <span className={compact ? "text-base" : "text-[21px]"}>
          <span className="line-through decoration-ink/60">
            {EVENT.priceOriginal}
          </span>
        </span>{" "}
        <span className={compact ? "text-2xl" : "text-[31px]"}>
          {EVENT.price}
        </span>
      </p>
      <p className="mt-0.5 text-[11px] text-ink/90">
        (Offer Ends in <OfferTimer />)
      </p>
    </div>
  );
}

function Schedule() {
  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <span className="flex items-center gap-2.5">
        <CalendarIcon className="h-[22px] w-[22px] text-ink" />
        <span className="text-[15px] font-bold text-ink">
          {EVENT.dateLabel}
        </span>
      </span>
      <span className="flex items-center gap-2.5">
        <ClockIcon className="h-[22px] w-[22px] text-ink" />
        <span className="text-[15px] font-bold text-ink">
          {EVENT.timeLabel}
        </span>
      </span>
      <span className="hidden items-center gap-2.5 xl:flex">
        <ClockIcon className="h-[22px] w-[22px] text-ink" />
        <span className="text-[15px] font-bold text-ink">
          {EVENT.durationLabel}
        </span>
      </span>
    </div>
  );
}

function BarButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={EVENT.registerUrl}
      className={`group flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-center font-display text-sm font-bold text-cream shadow-cta transition-all duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:shadow-cta-lg ${className}`}
    >
      {label}
      <span className="inline-block transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

/** The static acid bar that sits directly beneath the hero. */
export function OfferBar() {
  return (
    <div className="hidden bg-acid lg:block">
      <div className="mx-auto flex w-full max-w-[1296px] items-center justify-between gap-8 px-8 py-4">
        <PriceBlock />
        <Schedule />
        <BarButton label="Register for the Masterclass" />
      </div>
    </div>
  );
}

/**
 * Persistent conversion bar. Slides up once the hero has scrolled away and
 * stays docked to the bottom of the viewport.
 */
export function StickyOfferBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-acid transition-transform duration-500 ease-[var(--ease-out-expo)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:gap-8 lg:px-12 lg:py-6">
        <PriceBlock compact />

        <div className="hidden lg:block">
          <Schedule />
        </div>

        <div className="relative">
          <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-acid-2 bg-cream px-4 py-1.5 text-[13px] font-semibold text-ink lg:block">
            {EVENT.seatsLabel}
          </span>
          <BarButton
            label="Reserve my seat"
            className="whitespace-nowrap lg:px-10 lg:py-5 lg:text-xl"
          />
        </div>
      </div>
    </div>
  );
}
