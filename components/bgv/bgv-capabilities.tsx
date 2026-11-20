"use client";

import React from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { BgvCapabilitiesProps } from "./types";

export default function BgvCapabilities({
  sectionTag = "Benefits",
  title = "Our BGV Capabilities",
  iconSrc = "/images/bgv/4d8b3.svg",
  capabilities = [
    "Identity & Live e-KYC Verification",
    "Address Verification – Digital & Physical",
    "Employment History Verification",
    "Education Qualification Verification",
    "Moonlighting & ITR Verification",
    "Credit History Verification",
    "Social Media & Court Record Checks",
    "Police Verification (Gujarat)",
  ],
  showcaseImage = "/images/bgv/f0016.png",
}: BgvCapabilitiesProps) {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Top Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-white leading-tight tracking-tight">
            {sectionTag}
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Capabilities List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Title with Rocket Badge */}
            <div className="flex items-center gap-4 mb-10">
              <div className="relative size-[55px] shrink-0 flex items-center justify-center">
                <Image
                  src="/images/bgv/369f6.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
                <div className="relative z-10 size-[32px] flex items-center justify-center text-white">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt="Rocket Icon"
                      width={32}
                      height={32}
                      className="object-contain brightness-0 invert"
                    />
                  ) : (
                    <Rocket className="size-6 text-white" />
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-semibold text-white tracking-tight">
                {title}
              </h3>
            </div>

            {/* Ordered Capabilities */}
            <ol className="flex flex-col gap-5 sm:gap-6">
              {capabilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-white/90 group transition-all duration-200 hover:translate-x-1.5"
                >
                  <span className="flex items-center justify-center size-8 sm:size-9 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base shrink-0 group-hover:bg-[#b0daff] group-hover:text-black transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-base sm:text-lg lg:text-[22px] font-medium leading-snug text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right Column: Showcase Card Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[705px] aspect-[705/697] rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={showcaseImage}
                alt="BGV Capabilities Showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
