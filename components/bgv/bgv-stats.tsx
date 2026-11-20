"use client";

import React from "react";
import { BgvStatsProps } from "./types";

export default function BgvStats({
  heading = "Key Verification Statistics",
  subheading = "Proven impact in minimizing organizational risk and hiring discrepancies through automated background verification.",
  stats = [
    {
      value: "11%",
      title: "Resume Fraud",
      description: "Resumes contain false information",
    },
    {
      value: "03",
      title: "Employment Checks",
      description: "Up to 3 previous employers",
    },
    {
      value: "10+",
      title: "BGV Checks",
      description: "Multiple verification categories",
    },
  ],
}: BgvStatsProps) {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Top Header (2-column on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold text-white leading-tight md:leading-[44px]">
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg lg:text-[18px] font-medium text-white/80 leading-relaxed max-w-[580px]">
              {subheading}
            </p>
          </div>
        </div>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col relative pl-6 md:pl-8 lg:pl-12 ${
                index > 0 ? "border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0" : "border-t md:border-t-0 md:border-l-0 border-white/20 pt-6 md:pt-0"
              }`}
            >
              {/* Big Impact Metric */}
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[110px] font-bold text-white tracking-tight leading-none mb-3">
                {item.value}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white leading-snug mb-2">
                {item.title}
              </h3>

              {/* Subtext */}
              <p className="text-sm sm:text-base lg:text-[18px] font-medium text-white/70 leading-normal max-w-[240px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
