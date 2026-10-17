'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Globe,
  Mail,
  Shield,
  FileText
} from 'lucide-react'

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const footerSocials = [
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/idigitalrakshak/', label: 'LinkedIn', hover: 'hover:border-[#0077b5]/50 hover:text-[#0077b5] hover:bg-[#0077b5]/10' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/iDigitalRakshak', label: 'Facebook', hover: 'hover:border-[#1877f2]/50 hover:text-[#1877f2] hover:bg-[#1877f2]/10' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/idigitalrakshak/', label: 'Instagram', hover: 'hover:border-[#e4405f]/50 hover:text-[#e4405f] hover:bg-[#e4405f]/10' },
  { Icon: TwitterIcon, href: 'https://x.com/iDigitalRakshak', label: 'Twitter / X', hover: 'hover:border-white/50 hover:text-white hover:bg-white/10' },
  { Icon: YouTubeIcon, href: 'https://www.youtube.com/@iDigitalRakshak', label: 'YouTube', hover: 'hover:border-[#ff0000]/50 hover:text-[#ff0000] hover:bg-[#ff0000]/10' },
]

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

            <div className="flex items-center gap-3 text-gray-300 flex-wrap">
              {footerSocials.map(({ Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)] ${hover}`}
                >
                  <Icon />
                </a>
              ))}
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
