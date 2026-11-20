"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BgvNavbarProps } from "./types";

export default function BgvNavbar({
  logo = {
    src: "/images/bgv/a0e33.png",
    alt: "DigitalRakshak Logo",
    width: 165,
    height: 108,
  },
  navLinks = [
    { label: "API Product", href: "#api-product" },
    { label: "BGV", href: "#bgv" },
    { label: "E-stamping", href: "#e-stamping" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ],
  demoButtonText = "Demo",
  onDemoClick,
  demoHref = "#demo",
}: BgvNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-50 pt-4 md:pt-8 px-4 sm:px-8 max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="relative shrink-0 flex items-center drop-shadow-[0_2px_24px_rgba(255,255,255,0.4)] transition-transform hover:scale-105"
        >
          <div className="w-[120px] sm:w-[150px] md:w-[165px] h-[50px] sm:h-[65px] md:h-[75px] relative overflow-hidden">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/20 rounded-[30px] px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
        >
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium text-[17px] lg:text-[19px] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Demo Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {onDemoClick ? (
            <button
              onClick={onDemoClick}
              type="button"
              className="relative hidden sm:inline-flex items-center justify-center px-8 py-3 md:py-4 rounded-[30px] bg-white text-[#1e1e1e] font-medium text-[16px] md:text-[18px] transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
            >
              {demoButtonText}
            </button>
          ) : (
            <Link
              href={demoHref}
              className="relative hidden sm:inline-flex items-center justify-center px-8 py-3 md:py-4 rounded-[30px] bg-white text-[#1e1e1e] font-medium text-[16px] md:text-[18px] transition-all hover:bg-slate-50 hover:scale-105 active:scale-95 shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42),2px_2px_5.7px_rgba(0,0,0,0.25)]"
            >
              {demoButtonText}
            </Link>
          )}

          {/* Hamburger Button for Mobile/Tablet */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="xl:hidden p-2.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-4 bg-[#0a0f24]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-3">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white/90 hover:text-white text-lg font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2 border-t border-white/10">
            <Link
              href={demoHref}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 rounded-full bg-white text-[#1e1e1e] font-semibold text-base shadow-[inset_5px_-2px_8.7px_0px_rgba(0,132,255,0.42)]"
            >
              {demoButtonText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
