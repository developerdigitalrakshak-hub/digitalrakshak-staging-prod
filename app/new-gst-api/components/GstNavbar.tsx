'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function GstNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'API Product', href: '#api-product' },
    { name: 'BGV', href: '/bank-account-verification' },
    { name: 'E-stamping', href: '/e-stamp-and-e-sign' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full">
      {/* 1. Full-width top backdrop & bottom border: visible initially across 100vw, smoothly fades out on scroll */}
      <div
        className={`absolute inset-x-0 top-0 h-16 sm:h-16 lg:h-17 bg-[#02050f]/85 backdrop-blur-md border-b border-white/[0.06] transition-opacity duration-500 ease-out pointer-events-none ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Main Navigation Bar:
          - Initially: Full-width spanning across the screen (px-6 sm:px-10 lg:px-12)
          - Scrolled: Seamlessly transitions to match the exact page content width and left/right spacing (px-[5%] lg:px-[6%] and max-w-[1400px])
      */}
      <div
        className={`w-full mx-auto transition-all duration-500 ease-out pointer-events-auto ${
          isScrolled
            ? 'px-[5%] lg:px-[6%]'
            : 'px-6 sm:px-10 lg:px-12'
        }`}
      >
        <div
          className={`w-full mx-auto transition-all duration-500 ease-out flex items-center justify-between ${
            isScrolled
              ? 'max-w-[1400px] pt-2 sm:pt-2.5 h-13 sm:h-14'
              : 'max-w-[1600px] pt-0 h-16 sm:h-16 lg:h-17'
          }`}
        >
          {/* Left: White Eagle Logo (aligned with content start on scroll) */}
          <Link
            href="/"
            className="relative flex items-center shrink-0 group py-0.5"
          >
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-125 pointer-events-none group-hover:bg-white/35 transition-all duration-300" />
            <img
              src="/assets/a0e33.png"
              alt="DigitalRakshak Logo"
              className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] ${
                isScrolled
                  ? 'h-7 sm:h-8 lg:h-9'
                  : 'h-8 sm:h-9 lg:h-10'
              }`}
            />
          </Link>

          {/* Center: Rounded Dark Capsule Pill Navigation */}
          <nav
            className={`hidden lg:flex items-center transition-all duration-500 ease-out ${
              isScrolled
                ? 'bg-[#181a24]/90 backdrop-blur-2xl border border-white/15 rounded-full px-5 xl:px-6 py-1.5 sm:py-2 shadow-[0_10px_30px_rgba(0,0,0,0.65)] ring-1 ring-white/10 gap-4 xl:gap-6'
                : 'bg-transparent border-transparent shadow-none rounded-none px-0 py-0 gap-5 xl:gap-7'
            }`}
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-200 tracking-normal whitespace-nowrap relative group py-1 px-2.5 rounded-full ${
                  isScrolled
                    ? 'text-[13px] xl:text-[14px] text-gray-200 hover:text-white hover:bg-white/[0.08]'
                    : 'text-[14px] xl:text-[15px] text-gray-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right: "Book Demo" Pill Button (aligned with content end on scroll) */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              className={`inline-flex items-center justify-center font-medium text-white transition-all duration-500 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] ${
                isScrolled
                  ? 'text-[13px] xl:text-[14px] bg-[#252836]/90 hover:bg-[#323648] backdrop-blur-xl border border-white/20 rounded-full px-5 py-1.5 sm:py-2 shadow-[0_4px_16px_rgba(0,0,0,0.45)]'
                  : 'text-[14px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-5 sm:px-6 py-2 shadow-sm'
              }`}
            >
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-200 hover:text-white p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown matching content width */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto w-full px-[5%] lg:px-[6%] mt-2">
          <div className="max-w-[1400px] mx-auto bg-[#10121a]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl space-y-1.5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[14px] font-medium text-gray-200 hover:text-white hover:bg-white/10 px-3.5 py-2.5 rounded-xl transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2.5 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-5 py-2.5 text-[14px] font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:brightness-110 transition-all"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
