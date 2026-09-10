import illus1 from "@/public/illus-1.png";
import illus2 from "@/public/illus-2.png";
import illus3 from "@/public/illus-3.png";
import illus4 from "@/public/illus-4.png";
import illus5 from "@/public/illus-5.png";

export const EVENT = {
  /** Swap these for the real values once the date is locked in. */
  dateLabel: "DD:MM:YYYY",
  timeLabel: "XX:XX (IST)",
  durationLabel: "5 hours",
  platformLabel: "On Zoom",
  priceOriginal: "₹1,999",
  price: "₹499",
  /** Countdown length for the offer timer, in seconds. */
  offerSeconds: 15 * 60,
  registerUrl: "#register",
};

export const HERO = {
  badge: "A Proven System Behind Winning Ads",
  headingLines: ["Turn Your Ideas Into Winning", "AI Ads with The AI Ad Machine"],
  /** The circled phrase within headingLines[1] — see CircleScribble in hero.tsx. */
  headingCircled: "The AI Ad Machine",
  subtitleMuted: "AI can make ads look good.",
  subtitleStrong: "The AI Ad Machine makes them sell.",
  cta: "Learn from a Working AI Ad Producer",
  producer: {
    name: "Reyon Mathai",
    role: "Performance-Driven Storyteller",
    link: "Know more about the producer →",
    image: "/illustrations/producer-hero.png",
    stats: [
      { value: "10+", label: "Years in Marketing & Communications" },
      { value: "100+", label: "Brands" },
      { value: "₹50Cr+", label: "Ad Spend" },
      { value: "10K+", label: "Ads Shipped" },
    ],
  },
};

export const TESTIMONIALS = [
  {
    quote:
      "I was using five different AI tools and still couldn't make one good ad. The workflow finally made the whole process click for me.",
    name: "Riya Kapoor",
    role: "Performance Marketer",
  },
  {
    quote:
      "The idea that one person with a laptop can build and test multiple ad creatives changes the economics of content production completely.",
    name: "Dev Malhotra",
    role: "D2C Founder",
  },
  {
    quote:
      "It finally connected the creative side with the performance side. I stopped thinking 'Does this look good?' and started asking 'Will this make someone stop and act?'",
    name: "Ishita Bansal",
    role: "Social Media Strategist",
  },
  {
    quote:
      "We cut our creative turnaround from three weeks to three days without giving up on quality. The angles framework alone was worth it.",
    name: "Arjun Nair",
    role: "Growth Lead",
  },
  {
    quote:
      "I came in for the AI tools and left with a way of thinking about ads. That is a far more useful thing to walk away with.",
    name: "Meera Shah",
    role: "Brand Manager",
  },
];

export const BRANDS = [
  { name: "Client logo 1", src: "/brands/brand-1.png", width: 231, height: 90 },
  { name: "Client logo 2", src: "/brands/brand-2.png", width: 271, height: 84 },
  { name: "Client logo 3", src: "/brands/brand-3.png", width: 468, height: 93 },
  { name: "Client logo 4", src: "/brands/brand-4.png", width: 544, height: 72 },
  { name: "Client logo 5", src: "/brands/brand-5.png", width: 413, height: 60 },
  { name: "Client logo 6", src: "/brands/brand-6.png", width: 544, height: 72 },
];

export const AUDIENCE = [
  {
    title: "Your AI ads look good, but don't perform",
    highlight: true,
    body: "You can create cinematic visuals, AI avatars and polished-looking videos. But looking good isn't the same as performing. You need to understand the creative thinking behind the ad.",
    image: "/illustrations/audience-1.png",
  },
  {
    title: "You are tired of expensive, slow ad production",
    highlight: true,
    body: "Shoots. Crews. Editors. Agencies. Back-and-forth.\nCreating a new creative shouldn't always require an entire production setup.",
    image: "/illustrations/audience-2.png",
  },
  {
    title: "You are overwhelmed by AI tools with no clear workflow",
    highlight: true,
    body: "Every week there's another tool. Another tutorial. Another “game-changing” AI platform.\nBut knowing 10 tools doesn't mean you know how to make one good ad.",
    image: "/illustrations/audience-3.png",
  },
  {
    title: "You need more creative variations to test",
    highlight: true,
    body: "One ad isn't enough. You need different hooks, scripts, angles and creative approaches to understand what actually resonates.",
    image: "/illustrations/audience-5.png",
  },
  {
    title: "You want to stay ahead of AI-driven advertising",
    highlight: true,
    body: "AI is changing the production side of advertising rapidly. You don't need to become an AI expert. You need to understand how to use it strategically.",
    image: "/illustrations/audience-4.png",
  },
];

export const CURRICULUM = [
  {
    icon: "megaphone" as const,
    title: "1. Build Performing Ads, Not Just AI Videos",
    body: "Learn how to take an idea and turn it into a complete AI-powered performance ad.",
  },
  {
    icon: "target" as const,
    title: "2. Create Hooks That Stop The Scroll",
    body: "Understand what makes someone stop and pay attention - and how to develop different hooks for different audiences and angles.",
  },
  {
    icon: "script" as const,
    title: "3. Write Scripts That Hold Attention",
    body: "Learn how to structure your messaging so the creative doesn't lose people after the first few seconds.",
  },
  {
    icon: "bulb" as const,
    title: "4. Find Winning Ad Angles",
    body: "Learn how to approach the same product or offer from different creative angles instead of repeatedly making the same ad.",
  },
  {
    icon: "bolt" as const,
    title: "5. Turn Ideas Into AI-Powered Creatives",
    body: "Understand the workflow from concept and script to visuals and final creative.",
  },
  {
    icon: "chart" as const,
    title: "6. Understand What Makes An Ad Perform",
    body: "Learn what metrics like hook rate, hold rate and CTR tell you about your creativity and why performance isn't just about how good an ad looks.",
  },
];

export const PASS_PERKS = [
  {
    icon: "chat" as const,
    title: "Live Q&A",
    body: "Get your questions answered live and learn directly from the team.",
  },
  {
    icon: "bolt" as const,
    title: "Fast-Action Bonus",
    body: "Stay till the end for an exclusive offer on AI Ad Machine Studio, available only to webinar attendees.",
  },
];

/**
 * Statically imported so Next reads each PNG's real intrinsic size. These
 * illustrations are re-exported often and no two share an aspect ratio, so
 * hardcoding width/height here would reserve the wrong box and shift the
 * layout as each one loads.
 */
export const STUDIO_PERKS = [
  {
    title: "50+ Hook & Script Templates",
    body: "A ready-to-use vault to help you create stronger ads faster.",
    image: illus1,
  },
  {
    title: "AI Assistant + Competitor Analysis",
    body: "Get AI-powered support and free competitor analysis through the community.",
    image: illus2,
  },
  {
    title: "Community Credit Pricing",
    body: "Get ongoing credits at a rate lower than the public price.",
    image: illus3,
  },
  {
    title: "Real Brand Work Opportunities",
    body: "Get listed in the talent pool for potential brand-work referrals.",
    image: illus4,
  },
  {
    title: "Weekly Rewards & Recognition",
    body: "Weekly credit bounties, Creative of the Week and certification.",
    image: illus5,
  },
];

export const BEFORE = [
  "“Which AI tool should I use?”",
  "“My AI videos look good but don't convert.”",
  "“I don't know what to say.”",
  "“I keep making the same creative.”",
  "“How do I know if this ad works?”",
];

export const AFTER = [
  "A clearer AI ad creation workflow",
  "A performance-first creative mindset",
  "Frameworks for hooks and scripts",
  "Multiple ways to approach an ad",
  "An understanding of key creative metrics",
];

export const PRODUCER = {
  eyebrow: "Meet Your Producer",
  name: "Reyon Mathai",
  role: "Performance-Driven Storyteller",
  image: "/illustrations/meet-producer.png",
  intro: "10 years of experience in communications and marketing",
  bio: [
    "His specialisation lies in performance-first AI video advertising, creating ads built to convert, not just look real.",
    "After years of seeing beautifully produced campaigns fail to deliver, Reyon and his team developed systems to create, test, and ship high-performing ads at scale.",
    "Today, his work sits at the intersection of storytelling, performance marketing and AI-powered creative production.",
  ],
  stats: [
    { value: "100+", label: "Brand associations" },
    { value: "₹50 Cr+", label: "Ad spend managed" },
    { value: "10,000+", label: "Ads shipped" },
  ],
};

/** Real ad creatives, self-hosted on the AdGraam CDN. */
export const SHOWCASE = [
  "https://cdn.adgraam.com/landing-page-assets/Novra%20Slip%20On%20.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-16%20at%2009.35.49.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-16%20at%2009.35.51.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-16%20at%2009.36.16.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-16%20at%2009.36.18.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-18%20at%2016.21.20%20(1).mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-26%20at%2012.13.41%20(1).mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-27%20at%2017.55.06.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-29%20at%2017.10.14.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-07-01%20at%2019.26.32.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-07-01%20at%2020.12.08.mp4",
  "https://cdn.adgraam.com/landing-page-assets/seasoul_product_final.mp4",
  "https://cdn.adgraam.com/landing-page-assets/Powerlook%20Jersey-02.mp4",
  "https://cdn.adgraam.com/landing-page-assets/WhatsApp%20Video%202026-06-19%20at%2013.46.19.mp4",
];

export const FAQS = [
  {
    q: "Will I get access to the recording after the masterclass?",
    a: "No, the recording will not be shared. We highly encourage you to attend the session live and make the most of the experience.",
  },
  {
    q: "Do I need any editing or design experience?",
    a: "No. You don't need a professional editing or design background to attend the masterclass.",
  },
  {
    q: "Do I need to be technical to learn this?",
    a: "No. The session is designed around a practical workflow and focuses on the advertising thinking behind the process.",
  },
  {
    q: "How will I join the masterclass?",
    a: "The Zoom link and all important details will be shared on your registered email ID and WhatsApp group before the session begins.",
  },
  {
    q: "Do I need expensive software?",
    a: "No. The focus is on understanding a streamlined AI-powered workflow rather than building a complicated stack of subscriptions.",
  },
  {
    q: "Will the ads actually look professional?",
    a: "The focus isn't simply on making AI videos look good. You'll learn the creative and performance principles that go into building stronger advertising creatives.",
  },
  {
    q: "What language is the masterclass in?",
    a: "English, with Hindi/Hinglish mixed in to keep the session approachable and easy to follow.",
  },
  {
    q: "Who is this masterclass for?",
    a: "D2C founders, business owners, performance marketers, in-house creatives, freelancers and creators who want to understand AI-powered performance advertising.",
  },
  {
    q: "What do I get for ₹499?",
    a: "You get access to the complete 5-hour live masterclass, including the end-to-end ad walkthrough, performance frameworks and live Q&A.",
  },
  {
    q: "What happens after the masterclass?",
    a: "You'll have the option to continue learning through AI Ad Machine Studio, a separate 21-day live program. Joining it is completely optional.",
  },
];
