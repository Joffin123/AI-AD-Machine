"use client";

import { useEffect, useState } from "react";

/**
 * Counts down from `seconds` and formats the remainder as MM:SS.
 * The first render always returns the full duration so the server and client
 * markup match; ticking only starts once mounted.
 */
export function useCountdown(seconds: number) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining((value) => (value <= 0 ? 0 : value - 1));
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  const minutes = Math.floor(remaining / 60);
  const secs = remaining % 60;

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
