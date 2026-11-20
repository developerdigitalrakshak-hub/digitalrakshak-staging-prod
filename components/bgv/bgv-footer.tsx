"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BgvFooterProps } from "./types";

export default function BgvFooter({
  brandName = "DigitalRakshak",
  trademark = "TM",
  tagline = "SECURE | SWIFT | COMPLIANT",
  logoSrc = "/images/bgv/a0e33.png",
  socialLinks = [
    {
      iconSrc: "/images/bgv/a3822.svg",
      href: "#",
      ariaLabel: "LinkedIn",
    },
    {
      iconSrc: "/images/bgv/61a9d.svg",
      href: "#",
      ariaLabel: "Twitter",
    },
    {
      iconSrc: "/images/bgv/1591d.svg",
      href: "#",
      ariaLabel: "Instagram",
    },
    {
      iconSrc: "/images/bgv/b80a2.svg",
      href: "#",
      ariaLabel: "Facebook",
    },
  ],
  columns = [
    {
      title: "Links",
      links: [
        { label: "About", href: "/about" },
        { label: "Product", href: "#api-product" },
        { label: "Resources", href: "/resources" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Support", href: "#support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-and-conditions" },
      ],
    },
  ],
  copyrightText = "© 2026 Digital Rakshak. All Rights Reserved.",
}: BgvFooterProps) {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-[#000b58] to-[#59259b] pt-20 md:pt-28 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">
          {/* Brand Info & Logo Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            {/* Brand Title with TM */}
            <div className="flex items-baseline gap-1.5 mb-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {brandName}
              </h3>
              {trademark && (
                <span className="text-xs font-semibold text-white/80">
                  {trademark}
                </span>
              )}
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base font-medium text-white/80 tracking-widest uppercase mb-6">
              {tagline}
            </p>

            {/* Logo illustration */}
            <div className="relative w-[220px] sm:w-[280px] h-[120px] sm:h-[150px] mb-8 overflow-hidden drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
              <Image
                src={logoSrc}
                alt={`${brandName} Emblem`}
                fill
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="relative size-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                >
                  <Image
                    src={item.iconSrc}
                    alt={item.ariaLabel}
                    width={20}
                    height={20}
                    className="object-contain brightness-0 invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-xl sm:text-[22px] font-medium text-white tracking-tight">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-base sm:text-[18px] text-white/80 hover:text-white font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Copyright Bar */}
        <div className="text-center text-sm sm:text-base text-white/80 font-medium">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
}
