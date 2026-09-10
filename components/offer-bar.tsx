"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, ClockIcon } from "@/components/ui/icons";
import { OfferTimer } from "@/components/offer-timer";
import { EVENT } from "@/lib/site-data";

function PriceBlock() {
  return (
    <div className="shrink-0">
      <p className="font-bold leading-none text-ink">
        <span className="text-[21px]">
          <span className="line-through decoration-ink/60">
            {EVENT.priceOriginal}
          </span>
        </span>{" "}
        <span className="text-[31px]">{EVENT.price}</span>
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

/**
 * Persistent conversion bar. Slides up once the hero has scrolled away and
 * stays docked to the bottom of the viewport. Desktop only for now.
 */
export function OfferBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 hidden bg-acid transition-transform duration-500 ease-[var(--ease-out-expo)] lg:block ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1296px] items-center justify-between gap-8 px-8 py-4">
        <PriceBlock />
        <Schedule />
        <BarButton label="Register for the Masterclass" />
      </div>
    </div>
  );
}
