"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BgvHeroProps } from "./types";

export default function BgvHero({
  headline = "Employee Background Verification Services You Can Rely On",
  subheadline = "Verify employee identities, employment history, educational qualifications and other critical credentials with DigitalRakshak™. Our comprehensive BGV solutions help organisations minimise hiring risks, prevent fraud and build a reliable workforce.",
  primaryButton = {
    text: "Get Started",
    href: "#contact",
  },
  secondaryButton = {
    text: "Explore Our Services",
    href: "#services",
  },
  images = {
    mainMockup: "/images/bgv/4aef0.png",
    leftCard: "/images/bgv/46bb4.png",
    rightCard: "/images/bgv/b69e7.png",
  },
}: BgvHeroProps) {
  return (
    <section className="relative w-full overflow-hidden pt-12 md:pt-20 pb-20 md:pb-28">
      {/* Background Glows & Ambience */}
      <div className="absolute -top-[100px] left-[-250px] w-[600px] md:w-[848px] h-[600px] md:h-[848px] pointer-events-none opacity-40 mix-blend-screen -z-10">
        <Image
          src="/images/bgv/4c577.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Text & CTAs Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 md:mb-20">
          {/* Main Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-tight lg:leading-[1.25] tracking-tight">
              {headline}
            </h1>
          </div>

          {/* Subtitle & Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
            <p className="text-base sm:text-lg lg:text-[22px] font-normal sm:font-medium text-white/90 leading-relaxed mb-8">
              {subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {primaryButton.onClick ? (
                <button
                  type="button"
                  onClick={primaryButton.onClick}
                  className="relative px-7 py-3.5 rounded-[18px] bg-[#b0daff] text-[#1e1e1e] font-medium text-[17px] transition-all hover:brightness-105 hover:scale-105 active:scale-95 shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
                >
                  {primaryButton.text}
                </button>
              ) : (
                <Link
                  href={primaryButton.href || "#"}
                  className="relative px-7 py-3.5 rounded-[18px] bg-[#b0daff] text-[#1e1e1e] font-medium text-[17px] transition-all hover:brightness-105 hover:scale-105 active:scale-95 shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
                >
                  {primaryButton.text}
                </Link>
              )}

              {secondaryButton.onClick ? (
                <button
                  type="button"
                  onClick={secondaryButton.onClick}
                  className="relative px-7 py-3.5 rounded-[18px] bg-white text-[#1e1e1e] font-medium text-[17px] transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
                >
                  {secondaryButton.text}
                </button>
              ) : (
                <Link
                  href={secondaryButton.href || "#"}
                  className="relative px-7 py-3.5 rounded-[18px] bg-white text-[#1e1e1e] font-medium text-[17px] transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Visual Mockups Composition (Exact Multi-Card Layout from Figma) */}
        <div className="relative w-full max-w-[1280px] mx-auto min-h-[420px] sm:min-h-[560px] md:min-h-[720px] lg:min-h-[820px] flex items-center justify-center">
          {/* Main Showcase / Background Dashboard */}
          <div className="relative w-full max-w-[1042px] aspect-[1042/678] rounded-[18px] overflow-hidden shadow-2xl border border-white/10 z-10 transition-transform duration-500 hover:scale-[1.01]">
            <Image
              src={images.mainMockup}
              alt="DigitalRakshak BGV Platform Interface"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Left Floating Card Frame */}
          <div className="hidden md:block absolute left-0 bottom-[-40px] lg:bottom-[-60px] w-[260px] lg:w-[360px] xl:w-[378px] aspect-[378/588] rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 z-20 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
            <Image
              src={images.leftCard}
              alt="Verification Process Card"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Floating Card Frame */}
          <div className="hidden md:block absolute right-[-10px] lg:right-0 top-[-30px] lg:top-[-40px] w-[280px] lg:w-[370px] xl:w-[392px] aspect-[392/344] rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 z-20 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
            <Image
              src={images.rightCard}
              alt="Verification Metric Summary"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mobile preview cards list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:hidden">
          <div className="relative w-full aspect-[378/400] rounded-[18px] overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={images.leftCard}
              alt="Verification Process Card"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[392/300] rounded-[18px] overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={images.rightCard}
              alt="Verification Metric Summary"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
