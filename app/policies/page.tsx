'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  ChevronRight,
  Shield,
  FileText,
  AlertTriangle,
  Headphones,
  Sparkles,
  Lock
} from 'lucide-react'
import PrivacyPolicy from '../privacy-policy/page'
import TermsAndConditionsPage from '../terms-and-conditions/page'
import ResponsibleDisclosurePage from '../responsible-disclosure/page'
import ConsumerGrievanceRedressalPage from '../consumer-grievance-redressal-policy/page'

const POLICIES_LIST = [
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    icon: Shield
  },
  {
    id: 'terms-and-conditions',
    name: 'Terms & Conditions',
    icon: FileText
  },
  {
    id: 'responsible-disclosure',
    name: 'Responsible Disclosure Policy',
    icon: AlertTriangle
  },
  {
    id: 'consumer-grievance-redressal-policy',
    name: 'Consumer Grievance Redressal Policy',
    icon: Headphones
  }
]

export default function PoliciesPage() {
  // Default 1st one ('privacy-policy') selected
  const [activePolicyId, setActivePolicyId] = useState<string>(POLICIES_LIST[0].id)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const contentTopRef = useRef<HTMLDivElement>(null)

  const activePolicy =
    POLICIES_LIST.find((p) => p.id === activePolicyId) || POLICIES_LIST[0]

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  const handleSelectPolicy = (id: string) => {
    setActivePolicyId(id)
    setIsDrawerOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full min-h-screen bg-[#02050f] text-white flex flex-col pt-16 sm:pt-[68px] selection:bg-[#B0DAFF] selection:text-[#081a2e]">
      <style jsx global>{`
        .policies-content-container .max-w-8xl.px-\\[10\\%\\] {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
          max-width: 100% !important;
        }
        @media (min-width: 1024px) {
          .policies-content-container .max-w-8xl.px-\\[10\\%\\] {
            padding-left: 3rem !important;
            padding-right: 3rem !important;
          }
        }
        .policies-content-container .min-h-screen {
          min-height: auto !important;
        }
      `}</style>

      {/* Mobile Top Sub-bar with Hamburger Button (Hidden on Desktop) */}
      <div className="lg:hidden sticky top-16 sm:top-[68px] z-40 bg-[#070d1e]/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between shadow-lg">
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
          aria-label="Open Policies Menu"
        >
          <Menu className="w-4 h-4 text-[#76bbf8]" />
          <span>Policies</span>
        </button>

        <span className="text-xs font-semibold text-[#76bbf8] truncate max-w-[200px]">
          {activePolicy.name}
        </span>
      </div>

      {/* Mobile Drawer (Slides in from LEFT) */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[85vw] bg-[#070d1e] border-r border-white/10 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#76bbf8]" />
            <span className="font-bold text-white text-sm sm:text-base">Company Policies</span>
          </div>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 flex flex-col gap-1.5 overflow-y-auto flex-1">
          {POLICIES_LIST.map((policy) => {
            const isCurrent = policy.id === activePolicyId
            const Icon = policy.icon

            return (
              <button
                key={policy.id}
                type="button"
                onClick={() => handleSelectPolicy(policy.id)}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/15 text-white font-semibold border-l-4 border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#76bbf8]' : 'text-slate-500'}`} />
                  <span>{policy.name}</span>
                </div>
                {isCurrent && <ChevronRight className="w-4 h-4 text-[#76bbf8] shrink-0" />}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Full-Width Layout */}
      <div className="w-full flex-1 flex flex-col lg:flex-row items-stretch">
        {/* Left Desktop Sidebar (Hidden on Mobile) */}
        <aside className="hidden lg:block w-72 xl:w-80 shrink-0 bg-[#070d1e]/80 backdrop-blur-xl border-r border-white/10 self-stretch">
          <div className="sticky top-[88px] p-5 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-[11px] font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3 text-[#76bbf8]" />
              <span>Policies &amp; Legal</span>
            </div>

            <nav className="flex flex-col space-y-1.5" aria-label="Policies List">
              {POLICIES_LIST.map((policy) => {
                const isCurrent = policy.id === activePolicyId
                const Icon = policy.icon

                return (
                  <button
                    key={policy.id}
                    type="button"
                    onClick={() => handleSelectPolicy(policy.id)}
                    className={`group w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isCurrent
                        ? 'bg-gradient-to-r from-blue-600/25 via-blue-500/10 to-transparent text-white font-semibold border-l-4 border-[#38bdf8] border-y border-r border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.12)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1.5 rounded-lg transition-colors ${isCurrent ? 'bg-blue-500/20 text-[#76bbf8]' : 'bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10'}`}>
                        <Icon className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="truncate">{policy.name}</span>
                    </div>
                    {isCurrent && (
                      <ChevronRight className="w-4 h-4 text-[#76bbf8] shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Right Content Area: Active Policy Component (Full Width) */}
        <section
          ref={contentTopRef}
          key={activePolicyId}
          className="policies-content-container flex-1 min-w-0 w-full bg-[#02050f] overflow-hidden"
        >
          {activePolicyId === 'privacy-policy' && <PrivacyPolicy />}
          {activePolicyId === 'terms-and-conditions' && <TermsAndConditionsPage />}
          {activePolicyId === 'responsible-disclosure' && <ResponsibleDisclosurePage />}
          {activePolicyId === 'consumer-grievance-redressal-policy' && (
            <ConsumerGrievanceRedressalPage />
          )}
        </section>
      </div>
    </div>
  )
}
