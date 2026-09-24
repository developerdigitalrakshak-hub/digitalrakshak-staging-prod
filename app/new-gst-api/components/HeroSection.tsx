'use client'

import React from 'react'
import Link from 'next/link'
import {
  Search,
  ShoppingCart,
  User,
  Plus,
  ArrowRight,
  Sparkles,
  Activity,
  Heart,
  Droplet,
  Pill,
  Check
} from 'lucide-react'

export default function HeroSection() {
  // Vertical gradient bars data matching Figma Group 11 (Rectangle 20 to 33)
  const verticalBars = [
    { bg: 'from-[#0055ff]/80 via-[#002b80]/50 to-transparent', glow: 'rgba(0, 160, 255, 0.4)' },
    { bg: 'from-[#0048e6]/80 via-[#002473]/50 to-transparent', glow: 'rgba(0, 140, 255, 0.35)' },
    { bg: 'from-[#0038cc]/80 via-[#001c59]/50 to-transparent', glow: 'rgba(0, 100, 240, 0.3)' },
    { bg: 'from-[#002cb3]/80 via-[#001540]/50 to-transparent', glow: 'transparent' },
    { bg: 'from-[#001f99]/80 via-[#000f2d]/50 to-transparent', glow: 'transparent' },
    { bg: 'from-[#001480]/80 via-[#000858]/50 to-transparent', glow: 'transparent' },
    { bg: 'from-[#050e70]/80 via-[#000858]/50 to-transparent', glow: 'transparent' },
    { bg: 'from-[#140b6e]/80 via-[#080230]/50 to-transparent', glow: 'transparent' },
    { bg: 'from-[#280878]/80 via-[#120340]/50 to-transparent', glow: 'transparent' },
    { bg: 'from-[#3e0582]/80 via-[#1c0250]/50 to-transparent', glow: 'rgba(147, 51, 234, 0.25)' },
    { bg: 'from-[#54028c]/80 via-[#260160]/50 to-transparent', glow: 'rgba(168, 85, 247, 0.35)' },
    { bg: 'from-[#6a0096]/80 via-[#300070]/50 to-transparent', glow: 'rgba(192, 38, 211, 0.4)' },
  ]

  return (
    <section className="relative min-h-[920px] pt-32 lg:pt-36 pb-20 bg-black overflow-hidden flex items-center">

      {/* Background GIF */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg-frame.gif"
          alt="Hero Background Animation"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Headline, Subtitle, Description & Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.08] mb-3">
                GST Verification<br />Services (GVS)
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-white font-normal mb-20 lg:mb-28">
                Verify GST Details. Integrate GST Workflows.
              </p>
            </div>

            <div>
              {/* Description */}
              <p className="text-base sm:text-[17px] text-gray-200 max-w-lg leading-relaxed mb-8 font-normal">
                Access GSTIN and available GST information through portal or API-based workflows, with support for GSTR, GST filing, e-Invoicing and e-Way Bills.
              </p>

              {/* CTA Action Buttons matching Figma */}
              <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
                {/* Demo Button */}
                <Link
                  href="#contact"
                  className="px-8 py-3.5 rounded-full bg-[#8fb6d9]/40 hover:bg-[#8fb6d9]/60 backdrop-blur-md text-white font-medium text-base border border-white/20 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.3)] min-w-[125px] text-center"
                >
                  Demo
                </Link>

                {/* Get API Access Button */}
                <Link
                  href="#contact"
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-950 font-bold text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.35)] min-w-[190px] text-center"
                >
                  Get API Access
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Exact 3-Device Mockup Composition matching Figma */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">

            {/* 1. Large Left Tablet Mockup (sm:col-span-7) */}
            <div className="sm:col-span-7 bg-white text-gray-900 rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-t-[7px] border-r-[7px] border-gray-950 p-4 sm:p-5 flex flex-col justify-between min-h-[460px] transform transition-transform duration-300 hover:scale-[1.01]">

              {/* Tablet Top Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="font-semibold text-gray-700">GST Portal View</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-3.5 h-3.5 text-gray-400" />
                  <User className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-gray-600">Upload Records</span>
                  <Plus className="w-3 h-3 text-gray-400" />
                </div>
                <div className="p-2.5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-pink-100 flex items-center justify-between relative overflow-hidden">
                  <span className="text-[10px] font-semibold text-pink-700 z-10">Live Gateway</span>
                  <div className="w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-pink-600 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Middle Row: Orange Bio Age Card + Results Pending Card */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                {/* Orange Gradient Card */}
                <div className="bg-gradient-to-br from-[#ff6b4a] to-[#ff4724] text-white rounded-2xl p-3 shadow-md flex flex-col justify-between">
                  <div className="text-[9px] uppercase tracking-wider font-semibold opacity-90">
                    Biological age
                  </div>
                  <div className="my-1">
                    <span className="text-3xl font-extrabold tracking-tight">25</span>
                  </div>
                  <div className="text-[9px] opacity-90 leading-tight">
                    2.5 years younger
                  </div>
                  {/* Wave sparkline */}
                  <div className="mt-1 flex items-end gap-0.5 h-3">
                    {[3, 5, 8, 4, 9, 6, 10, 8, 12].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/70 rounded-full" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </div>

                {/* Results Pending Card */}
                <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-col justify-between">
                  <div className="text-[9px] text-gray-500 font-medium leading-tight">
                    Your results are pending
                  </div>
                  <div className="text-xl font-extrabold text-gray-900 my-1">
                    7-10 <span className="text-xs font-normal text-gray-500">Days</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 border-t border-gray-200 text-[9px] text-gray-500">
                    <Droplet className="w-3 h-3 text-orange-500" />
                    <span>Lab Test Sample</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Top Supplements for You */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-[11px] font-bold text-gray-900">Top Supplements for You</div>
                    <div className="text-[8px] text-gray-400">Support your balance with supplements picked for you</div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 hover:text-gray-900 cursor-pointer">
                    See All
                  </span>
                </div>

                {/* 3 Supplement Cards */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 text-center flex flex-col items-center justify-between">
                    <span className="text-[7px] font-bold text-gray-900 bg-amber-300 px-1.5 py-0.5 rounded-full mb-1">
                      Best Seller
                    </span>
                    <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center my-0.5">
                      <Pill className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">$24.30</span>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 text-center flex flex-col items-center justify-between">
                    <span className="text-[7px] font-bold text-gray-900 bg-amber-300 px-1.5 py-0.5 rounded-full mb-1">
                      Best Seller
                    </span>
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center my-0.5">
                      <Droplet className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">$19.90</span>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 text-center flex flex-col items-center justify-between">
                    <span className="text-[7px] font-bold text-gray-600 bg-gray-200 px-1.5 py-0.5 rounded-full mb-1">
                      Fair Price
                    </span>
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center my-0.5">
                      <Activity className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">$45.00</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 2. Right Stacked Devices Column (sm:col-span-5) */}
            <div className="sm:col-span-5 flex flex-col gap-4">

              {/* Top Right Card: Health Records & Radial Orb */}
              <div className="bg-white/95 text-gray-900 rounded-[24px] p-4 shadow-xl border border-white/20 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-medium text-gray-500">Upload Health Records</span>
                  <Plus className="w-3 h-3 text-gray-400" />
                </div>

                {/* Glowing Magenta Orb */}
                <div className="relative w-full h-24 rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-pink-200/50 flex items-center justify-center overflow-hidden mb-2">
                  <div className="absolute w-20 h-20 rounded-full bg-pink-500/20 blur-xl animate-pulse" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.6)]">
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-pink-600" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] text-gray-500">
                  <span>Existing Records (2 files)</span>
                  <span className="font-bold text-gray-800">7-10 Days</span>
                </div>
              </div>

              {/* Bottom Right Phone Card: Green Metric Pills & Phone Edge */}
              <div className="bg-[#0b0f19] text-white rounded-[26px] p-3 shadow-2xl border-2 border-gray-800 relative overflow-hidden">
                {/* Green metric cards row */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-[#1b4332] rounded-xl p-2 border border-emerald-500/30">
                    <div className="text-xs font-bold text-white">103 <span className="text-[8px] font-normal text-emerald-200">mg/dl</span></div>
                    <div className="text-[8px] text-emerald-300">LDL Cholesterol</div>
                  </div>
                  <div className="bg-[#1b4332] rounded-xl p-2 border border-emerald-500/30">
                    <div className="text-xs font-bold text-white">43 <span className="text-[8px] font-normal text-emerald-200">ng/dL</span></div>
                    <div className="text-[8px] text-emerald-300">Vitamin D</div>
                  </div>
                </div>

                {/* Phone Bottom Orb Card */}
                <div className="bg-white text-gray-900 rounded-xl p-2.5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-1 text-[9px] text-gray-600">
                    <span>Connect Health Tracker</span>
                    <Plus className="w-3 h-3 text-gray-400" />
                  </div>

                  <div className="h-14 rounded-lg bg-gradient-to-r from-pink-50 to-rose-50 flex items-center justify-center relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center shadow-lg">
                      <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
