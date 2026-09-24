'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Shield,
  FileText
} from 'lucide-react'

export default function GstFooter() {
  const solutions = [
    { name: 'GSTIN Verification API', href: '/new-gst-api' },
    { name: 'Bank Account Verification', href: '/bank-account-verification' },
    { name: 'KYC OCR Engine', href: '/kyc-ocr' },
    { name: 'ITR Fetch & Verification', href: '/itr-verification' },
    { name: 'PAN & Aadhaar Validation', href: '/identity-ekyc' },
    { name: 'Vehicle RC Verification', href: '/vehicle-rc-verification' }
  ]

  const company = [
    { name: 'About DigitalRakshak', href: '/about' },
    { name: 'Security & Compliance', href: '/responsible-disclosure' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-and-conditions' },
    { name: 'Contact Sales', href: '/contact' }
  ]

  const developers = [
    { name: 'API Documentation', href: '#features' },
    { name: 'Postman Collection', href: '#how-it-works' },
    { name: 'System Uptime Status', href: '#features' },
    { name: 'Sandbox Keys', href: '#contact' },
    { name: 'Swagger Specs', href: '#features' }
  ]

  return (
    <footer className="bg-[#02050e] border-t border-purple-900/30 text-gray-400 relative overflow-hidden">
      {/* Subtle bottom purple flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-purple-900/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 shadow-[0_0_20px_rgba(147,51,234,0.5)] flex items-center justify-center">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-xl tracking-tight leading-none">
                  Digital<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Rakshak</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
                  Enterprise GST &amp; Risk Stack
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              India's premier API infrastructure for automated GST verification, counterparty fraud detection, and instant financial onboarding.
            </p>

            <div className="flex items-center gap-3 text-gray-400">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 hover:text-white border border-white/10 flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 hover:text-white border border-white/10 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 hover:text-white border border-white/10 flex items-center justify-center transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Verification APIs
            </h5>
            <ul className="space-y-2.5 text-sm">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Developers &amp; Ops
            </h5>
            <ul className="space-y-2.5 text-sm">
              {developers.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company &amp; Legal
            </h5>
            <ul className="space-y-2.5 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} DigitalRakshak Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit TLS Secured
            </span>
            <span>•</span>
            <span>GST Suvidha Provider (GSP) Partner</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
