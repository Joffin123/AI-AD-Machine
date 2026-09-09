import { Hero } from "@/components/hero";
import { OfferBar, StickyOfferBar } from "@/components/offer-bar";
import { Testimonials } from "@/components/testimonials";
import { Brands } from "@/components/brands";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { WhatYouLearn } from "@/components/what-you-learn";
import { WebinarExtras } from "@/components/webinar-extras";
import { BeforeAfter } from "@/components/before-after";
import { Producer } from "@/components/producer";
import { Future } from "@/components/future";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <>
      {/* Bottom padding keeps the last section clear of the sticky CTA bar */}
      <main className="pb-24 lg:pb-32">
        <Hero />
        <OfferBar />
        <Testimonials />
        <Brands />
        <WhoThisIsFor />
        <WhatYouLearn />
        <WebinarExtras />
        <BeforeAfter />
        <Producer />
        <Future />
        <Faq />
      </main>

      <StickyOfferBar />
    </>
  );
}
