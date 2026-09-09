# The AI Ad Machine — masterclass landing page

Next.js 16 (App Router) + Tailwind CSS v4 build of the AI Ad Machine masterclass
landing page, based on the supplied desktop and mobile Figma designs.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Design tokens

Colours and the type scale are taken verbatim from the Figma export. The
palette lives in the `@theme` block at the top of [`app/globals.css`](app/globals.css)
and is available as normal Tailwind utilities (`bg-cream`, `text-acid-2`, …):

| Token       | Value     | Used for                                    |
| ----------- | --------- | ------------------------------------------- |
| `cream`     | `#f1ede5` | Page background                             |
| `cream-2`   | `#f2ede4` | Alternating "Who this is for" cards         |
| `ink`       | `#030302` | Body copy, buttons, the dark curriculum band |
| `ink-2`     | `#181201` | Producer band, testimonial cards            |
| `acid`      | `#dffa60` | Badges, offer bars, highlights              |
| `acid-2`    | `#d4f92f` | Producer name, stat figures, hairlines      |
| `acid-pale` | `#efffa6` | Blurred glows, quote marks                  |
| `sage`      | `#e8efb8` | Closing "The future isn't…" band            |

## Type

Two families, both self-hosted by `next/font` (no requests leave the origin):

- **Body — Inter**, via `next/font/google`. Drives `--font-sans` and everything
  that isn't a headline or a quote.
- **Headlines — "Adgram Display"**, a local variable font at
  [`app/fonts/adgram-display-variable.woff2`](app/fonts/adgram-display-variable.woff2).
  Drives `--font-display`, applied to `h1`/`h2` in
  [`globals.css`](app/globals.css) plus the `font-display` utility on CTA
  buttons, the hero badge/subtitle, card titles, the "Who This Is For" body
  copy, and the producer name/stat figures.
- **Testimonial quotes — Playfair Display**, via `next/font/google`. Drives
  `--font-quote`, applied only to the quote line in
  [`testimonials.tsx`](components/testimonials.tsx) via the `font-quote`
  utility.

`Adgram Display` is built from the ABC Solar Display trial family. The build
step pins the slant axis, subsets to latin, renames the family, and converts to
woff2 — 1.7 MB TTF down to **176 KB**, weight axis 200–900 intact. Sources live
in `design/fonts-source/` (gitignored); to rebuild after replacing them:

```bash
python scripts/build-display-font.py "design/fonts-source/ABCSolarDisplayVariable-Trial.ttf" app/fonts/adgram-display-variable.woff2
```

> **Licensing.** The source is an *unlicensed trial* cut. Renaming the family
> keeps the foundry's name out of your CSS and devtools, but it does **not**
> grant a license — shipping this to production needs a real licence from
> Dinamo, or a substitute face. The foundry copyright record is deliberately
> left intact inside the font binary. To swap the face out entirely, change the
> one `localFont` call in [`app/layout.tsx`](app/layout.tsx).

## Content

Every string, price, date and list on the page is in
[`lib/site-data.ts`](lib/site-data.ts) — nothing is hard-coded in the markup.
The placeholders to fill in before launch are all in the `EVENT` object at the
top of that file:

```ts
dateLabel: "DD:MM:YYYY",   // → e.g. "24 May 2026"
timeLabel: "XX:XX (IST)",
seatsLabel: "<xxx seats filled already.>",
offerSeconds: 15 * 60,     // countdown length on the offer bars
registerUrl: "#register",  // → your checkout / registration link
```

## Images

Real assets are in for the hero photo, the "Who This Is For" photos, and the
brand logos. What's left is still placeholder art generated to match the
palette — replace it in place, keeping the filenames, and nothing else needs
to change:

| Path                                    | What it is                     | Aspect      |
| ---------------------------------------- | ------------------------------- | ----------- |
| `public/illustrations/producer-hero.png` | Reyon's photo — hero card       | 304:270     |
| `public/illustrations/producer.svg`      | *Placeholder* — full bio photo  | portrait    |
| `public/illustrations/audience-1…5.png`  | "Who this is for" photos        | varies      |
| `public/illustrations/perk-1…6.svg`      | *Placeholder* — studio perks    | ~5:4        |
| `public/illustrations/reel-1…6.svg`      | *Placeholder* — ad creatives    | 9:16        |
| `public/brands/brand-1…6.png`            | Client logos                    | native size |

The hero card and the full producer-bio section use two different fields —
`HERO.producer.image` and `PRODUCER.image` in
[`site-data.ts`](lib/site-data.ts) — because the supplied photo is a landscape
crop that only fits the hero card; the bio section is still on its placeholder
portrait pending a matching photo.

Brand logos keep their own intrinsic `width`/`height` in the `BRANDS` array
(real logos, real — and differing — aspect ratios) rather than one fixed size.

`components/ui/smart-image.tsx` marks `.svg` sources as `unoptimized` (next/image
blocks SVG otherwise) and lets real `.jpg`/`.png` files go through the image
optimizer automatically — so dropping in photos needs no code change.

## Structure

```
app/
  layout.tsx        fonts, metadata, viewport
  fonts/            self-hosted display face
  globals.css       design tokens, keyframes, scroll-reveal, marker highlight
  page.tsx          section composition
components/
  hero.tsx          badge, headline, producer card, event strip, CTA
  offer-bar.tsx     static acid bar + persistent sticky conversion bar
  testimonials.tsx  swipe carousel (mobile) → five-up row (desktop)
  brands.tsx        looping logo marquee with edge fades
  who-this-is-for.tsx  sticky card deck that stacks on scroll
  what-you-learn.tsx   six-card curriculum grid on the dark band
  webinar-extras.tsx   pass perks + organic-blob studio perks
  before-after.tsx     pipeline strip and before/after columns
  producer.tsx         bio band with stat cards
  future.tsx           closing pitch + looping creative reel strip
  faq.tsx              accessible accordion
  ui/                  Reveal, CtaButton, SectionHeading, icons, decor
lib/
  site-data.ts      all copy and configuration
  use-countdown.ts  MM:SS offer timer
```

## Motion

- **Scroll reveal** — `components/ui/reveal.tsx` adds `.is-revealed` via
  `IntersectionObserver`; the transition itself is CSS. Supports `up`/`left`/
  `right`/`zoom` and a `delay` for staggering rows.
- **Marker highlight** — `.marker` draws an acid (or ink) bar behind a phrase
  once its section reveals.
- **Sticky card deck** — the "Who This Is For" cards pin at increasing offsets
  so they pile up as you scroll.
- **Marquees** — brand logos and the creative reel strip loop with pure CSS and
  pause on hover.
- **Sticky CTA** — the bottom offer bar slides up once the hero scrolls away.

Everything above is disabled under `prefers-reduced-motion: reduce`.

> `body` uses `overflow-x: clip` rather than `hidden` on purpose — `hidden`
> turns the body into a scroll container and silently breaks every
> `position: sticky` on the page.
