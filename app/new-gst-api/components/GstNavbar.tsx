'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function GstNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'API Product', href: '#features' },
    { name: 'BGV', href: '/bank-account-verification' },
    { name: 'E-stamping', href: '/e-stamp-and-e-sign' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 pb-3">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between">

          {/* 1. Left: White Eagle Logo with subtle soft white glow */}
          <Link href="/" className="relative flex items-center shrink-0 group">
            {/* Soft white ambient radial glow behind logo */}
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-125 pointer-events-none group-hover:bg-white/30 transition-all duration-300" />
            <div className="relative h-12 w-28 sm:h-14 sm:w-32 flex items-center justify-start">
              <Image
                src="/images/header-logo.png"
                alt="DigitalRakshak Logo"
                fill
                className="object-contain object-left drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                priority
              />
            </div>
          </Link>

          {/* 2. Center: Rounded Dark Capsule Pill Navigation */}
          <nav className="hidden lg:flex items-center bg-[#2e2e2e]/85 backdrop-blur-xl border border-white/10 rounded-[30px] px-8 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-7 xl:gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200 tracking-normal whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* 3. Right: Standalone "Book Demo" Pill Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-medium text-white bg-[#3a3a3a]/90 hover:bg-[#4a4a4a] border border-white/15 hover:border-white/30 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-200 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[1400px] mx-auto px-6 mt-3">
          <div className="bg-[#1c1c1c]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 px-4 py-2.5 rounded-xl transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 text-[15px] font-semibold text-white bg-[#3a3a3a] border border-white/20 rounded-full hover:bg-[#4a4a4a]"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
