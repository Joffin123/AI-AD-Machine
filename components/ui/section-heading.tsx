import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  children: ReactNode;
  subtitle?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** Centred section title, optionally followed by a supporting paragraph. */
export function SectionHeading({
  children,
  subtitle,
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const title = tone === "dark" ? "text-ink" : "text-cream";
  const body = tone === "dark" ? "text-ink" : "text-cream";

  return (
    <div className={`mx-auto max-w-[900px] text-center ${className}`}>
      <Reveal>
        <h2
          className={`text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-4xl lg:text-5xl ${title}`}
        >
          {children}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={100}>
          <p
            className={`mx-auto mt-5 max-w-[820px] text-pretty font-display text-[13px] leading-relaxed sm:text-base lg:mt-6 lg:text-xl ${body}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
