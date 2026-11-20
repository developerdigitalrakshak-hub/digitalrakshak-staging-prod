"use client";

import React from "react";
import Image from "next/image";
import { BgvHowItWorksProps } from "./types";

export default function BgvHowItWorks({
  title = "How It Works?",
  illustrationImage = "/images/bgv/49dd1.png",
  steps = [
    {
      stepNumber: 1,
      title: "Submit Employee Details",
      description:
        "Provide the employee's name, email address and mobile number to initiate verification.",
    },
    {
      stepNumber: 2,
      title: "Complete Verification",
      description:
        "With applicant consent, the required background checks are conducted through the verification process.",
    },
    {
      stepNumber: 3,
      title: "Receive Verified Reports",
      description:
        "Access consolidated verification reports to support informed recruitment decisions.",
    },
  ],
}: BgvHowItWorksProps) {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-250px] w-[600px] md:w-[848px] h-[600px] md:h-[848px] pointer-events-none opacity-30 mix-blend-screen -z-10">
        <Image
          src="/images/bgv/4b12c.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Graphic Illustration */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[705px] aspect-[705/506] rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={illustrationImage}
                alt="How DigitalRakshak BGV Works"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Title + Vertical Process Timeline */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-white leading-tight mb-10 tracking-tight">
              {title}
            </h2>

            {/* Steps with Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/30 flex flex-col gap-10">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-3.5 sm:size-4 rounded-full bg-[#b0daff] shadow-[0_0_12px_#b0daff] group-hover:scale-125 transition-transform" />

                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-white leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[18px] font-normal text-white/80 leading-relaxed max-w-[485px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
