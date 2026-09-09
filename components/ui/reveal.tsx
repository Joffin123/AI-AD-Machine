"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "zoom";

type RevealProps = {
  children: ReactNode;
  /** Direction the element travels in from. */
  from?: RevealDirection;
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Reveals its children once they scroll into view. Falls back to visible
 * content when IntersectionObserver is unavailable, and is disabled entirely
 * by `prefers-reduced-motion` (handled in globals.css).
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={from}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
