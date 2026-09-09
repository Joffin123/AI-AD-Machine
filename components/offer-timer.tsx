"use client";

import { useCountdown } from "@/lib/use-countdown";
import { EVENT } from "@/lib/site-data";

/** Live MM:SS countdown for the limited-price offer. */
export function OfferTimer({ className = "" }: { className?: string }) {
  const value = useCountdown(EVENT.offerSeconds);

  return (
    <time className={`tabular-nums ${className}`} suppressHydrationWarning>
      {value}
    </time>
  );
}
