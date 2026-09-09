import type { SVGProps } from "react";

/** Faint blueprint grid used behind the hero. */
export function GridLines({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.16] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, #8B5CF6 1px, transparent 1px), linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)",
        backgroundSize: "71px 70px",
      }}
    />
  );
}

/** Soft blurred acid glow. */
export function Blob({
  className = "",
  slow = false,
}: {
  className?: string;
  slow?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-acid-pale blur-[54px] ${
        slow ? "animate-blob-slow" : "animate-blob"
      } ${className}`}
    />
  );
}

/**
 * Hand-drawn circle annotation that loops around "The AI Ad Machine" in the
 * hero headline. Stroke colour comes from `currentColor`, so pair it with a
 * `text-*` utility (used with `text-acid` in the hero).
 */
export function CircleScribble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 620 190"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth={9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M328 16C199 4 54 32 22 79C-8 123 55 162 196 176C349 191 505 172 574 128C625 96 610 50 538 26C477 6 402 2 336 12C330 13 326 15 322 19" />
    </svg>
  );
}

