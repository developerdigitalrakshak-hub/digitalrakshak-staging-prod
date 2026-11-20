"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BgvContactCtaProps } from "./types";

export default function BgvContactCta({
  title = "Let’s Talk",
  subtitle = "Get in touch with our verification specialists to protect your hiring pipeline today.",
  imageSrc = "/images/bgv/b305a.png",
  emailPlaceholder = "Enter your work email",
  companyPlaceholder = "Enter your company name",
  buttonText = "Get Started",
  onSubmit,
}: BgvContactCtaProps) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, company });
    }
    setSubmitted(true);
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Main Rounded White Container */}
        <div className="relative w-full max-w-[1288px] mx-auto bg-white rounded-[32px] md:rounded-[53px] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px] lg:min-h-[560px]">
            {/* Left Photo Column */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full overflow-hidden rounded-t-[32px] lg:rounded-t-none lg:rounded-l-[53px]">
              <Image
                src={imageSrc}
                alt="Let's Talk - Consultation"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2d2e2e] leading-tight mb-3">
                {title}
              </h2>
              <p className="text-base sm:text-lg lg:text-[18px] font-medium text-[#2d2e2e]/80 leading-relaxed mb-8">
                {subtitle}
              </p>

              {submitted ? (
                <div className="p-6 rounded-[18px] bg-emerald-50 border border-emerald-200 text-emerald-800 animate-in fade-in">
                  <h4 className="font-semibold text-lg mb-1">Thank you!</h4>
                  <p className="text-sm">
                    We have received your details and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[420px]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={emailPlaceholder}
                    className="w-full px-5 py-4 rounded-[18px] bg-[#f6f6f6] text-[#2d2e2e] text-[17px] font-medium placeholder-[#7a7979] focus:outline-none focus:ring-2 focus:ring-[#0084ff]/50 border border-transparent transition-all"
                  />

                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={companyPlaceholder}
                    className="w-full px-5 py-4 rounded-[18px] bg-[#f6f6f6] text-[#2d2e2e] text-[17px] font-medium placeholder-[#7a7979] focus:outline-none focus:ring-2 focus:ring-[#0084ff]/50 border border-transparent transition-all"
                  />

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 rounded-[18px] bg-[#b0daff] text-[#1e1e1e] font-medium text-[18px] transition-all hover:brightness-105 hover:scale-[1.01] active:scale-[0.99] shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
                  >
                    {buttonText}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
