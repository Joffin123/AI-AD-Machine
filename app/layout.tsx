import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Serif face for the testimonial quotes only. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Display face for headings. Built from the licensed-trial source in
 * design/fonts-source/ — subsetted to latin, slant axis pinned, and renamed
 * to a neutral family so no foundry name is exposed in CSS or devtools.
 * See README for the rebuild command.
 */
const adgram = localFont({
  src: "./fonts/adgram-display-variable.woff2",
  variable: "--font-adgram",
  weight: "200 900",
  display: "swap",
  fallback: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "The AI Ad Machine — Turn Your Ideas Into Winning AI Ads",
  description:
    "A 5-hour live masterclass with Reyon Mathai. Go beyond generating AI videos and learn the system behind AI ads that actually perform.",
  openGraph: {
    title: "The AI Ad Machine — Turn Your Ideas Into Winning AI Ads",
    description:
      "A 5-hour live masterclass on building AI ads that sell. Hooks, scripts, angles, creatives and the metrics that matter.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f1ede5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${adgram.variable} ${playfair.variable} antialiased`}
    >
      <head>
        {/* Every [data-reveal] block starts at opacity 0 in globals.css and
            is only ever revealed by components/ui/reveal.tsx's client-side
            IntersectionObserver. If scripts are blocked or the bundle fails
            to load, that never fires — this <noscript> override is what
            keeps the page from rendering blank in that case. Doing it this
            way (rather than a script that toggles a class on <html> before
            hydration) means there's nothing for React to hydrate against, so
            no hydration-mismatch warning. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="bg-cream text-ink font-sans">{children}</body>
    </html>
  );
}
