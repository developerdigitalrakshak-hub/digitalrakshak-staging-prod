"use client";

import React from "react";
import Image from "next/image";
import { Hand } from "lucide-react";
import { BgvWhyImportantProps, FeatureItem } from "./types";

interface CardProps {
  feature: FeatureItem;
  defaultIcon?: React.ReactNode;
}

function FeatureCard({ feature, defaultIcon }: CardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-[340px] mx-auto p-4 transition-transform hover:-translate-y-1 duration-200">
      {/* Icon with glowing circular badge */}
      <div className="relative size-[60px] mb-5 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bgv/d258c.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="relative z-10 size-[32px] flex items-center justify-center text-white">
          {feature.iconSrc ? (
            <Image
              src={feature.iconSrc}
              alt={feature.title}
              width={32}
              height={32}
              className="object-contain brightness-0 invert"
            />
          ) : (
            defaultIcon
          )}
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white leading-tight mb-3">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base lg:text-[18px] font-normal sm:font-medium text-white/80 leading-relaxed max-w-[260px]">
        {feature.description}
      </p>
    </div>
  );
}

export default function BgvWhyImportant({
  title = "Why Is Employee Background Verification Important?",
  subtitle = "Make informed hiring decisions by verifying employee information and protecting your organisation from potential risks.",
  centerImage = "/images/bgv/05f01.png",
  features = {
    topLeft: {
      id: "1",
      title: "Prevent Resume Fraud",
      description: "Identify false qualifications, employment details and misleading information.",
      iconSrc: "",
    },
    bottomLeft: {
      id: "2",
      title: "Verify Employee Credentials",
      description: "Validate identity, address, education and previous employment records.",
      iconSrc: "/images/bgv/16b77.svg",
    },
    topRight: {
      id: "3",
      title: "Reduce Business Risks",
      description: "Minimise financial losses, compliance issues and reputational damage.",
      iconSrc: "/images/bgv/53705.svg",
    },
    bottomRight: {
      id: "4",
      title: "Build Workforce Trust",
      description: "Create a reliable workplace with informed and verified hiring decisions.",
      iconSrc: "/images/bgv/dea7e.svg",
    },
  },
}: BgvWhyImportantProps) {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-250px] w-[600px] md:w-[848px] h-[600px] md:h-[848px] pointer-events-none opacity-30 mix-blend-screen -z-10">
        <Image
          src="/images/bgv/4ab3d.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-white leading-tight md:leading-[60px] mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg lg:text-[18px] font-normal sm:font-medium text-white/80 leading-relaxed max-w-[500px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 3-Column Desktop Layout (Left 2 cards | Center Image | Right 2 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (2 Feature Cards) */}
          <div className="lg:col-span-3 flex flex-col gap-12 lg:gap-20">
            <FeatureCard
              feature={features.topLeft}
              defaultIcon={<Hand className="size-7" />}
            />
            <FeatureCard
              feature={features.bottomLeft}
            />
          </div>

          {/* Center Column (Prominent Phone/UI Mockup Card) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[483px] aspect-[483/528] rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={centerImage}
                alt="Verification Dashboard in action"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column (2 Feature Cards) */}
          <div className="lg:col-span-3 flex flex-col gap-12 lg:gap-20">
            <FeatureCard
              feature={features.topRight}
            />
            <FeatureCard
              feature={features.bottomRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
