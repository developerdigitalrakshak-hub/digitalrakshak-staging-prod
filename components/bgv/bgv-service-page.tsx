"use client";

import React from "react";
import {
  BgvHero,
  BgvWhyImportant,
  BgvCapabilities,
  BgvHowItWorks,
  BgvStats,
  BgvContactCta,
} from "./index";
import { BgvServicePageData } from "./types";

interface BgvServicePageProps {
  data: BgvServicePageData;
}

export default function BgvServicePage({ data }: BgvServicePageProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#b0daff] selection:text-black pt-16 sm:pt-20 lg:pt-24">
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <div id="hero">
          <BgvHero {...data.hero} />
        </div>

        {/* Why Important Section */}
        <div id="why-important">
          <BgvWhyImportant {...data.whyImportant} />
        </div>

        {/* Capabilities Section */}
        <div id="capabilities">
          <BgvCapabilities {...data.capabilities} />
        </div>

        {/* How It Works Section */}
        <div id="how-it-works">
          <BgvHowItWorks {...data.howItWorks} />
        </div>

        {/* Statistics Section */}
        <div id="stats">
          <BgvStats {...data.stats} />
        </div>

        {/* Contact CTA Section */}
        <div id="contact">
          <BgvContactCta {...data.contactCta} />
        </div>
      </main>
    </div>
  );
}
