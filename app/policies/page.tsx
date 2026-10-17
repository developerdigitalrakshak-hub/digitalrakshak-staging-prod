'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  ChevronRight,
  Shield,
  FileText,
  AlertTriangle,
  Headphones
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
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <style jsx global>{`
        .policies-content-container .max-w-8xl.px-\\[10\\%\\] {
          padding-left: 2rem !important;
          padding-right: 2rem !important;
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
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-xs">
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-all cursor-pointer shadow-2xs"
          aria-label="Open Policies Menu"
        >
          <Menu className="w-4 h-4 text-slate-600" />
          <span>Policies</span>
        </button>

        <span className="text-xs font-semibold text-slate-600 truncate max-w-[200px]">
          {activePolicy.name}
        </span>
      </div>

      {/* Mobile Drawer (Slides in from LEFT) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white border-r border-slate-200 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <span className="font-bold text-slate-900 text-base">Company Policies</span>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 flex flex-col gap-1 overflow-y-auto flex-1">
          {POLICIES_LIST.map((policy) => {
            const isCurrent = policy.id === activePolicyId

            return (
              <button
                key={policy.id}
                type="button"
                onClick={() => handleSelectPolicy(policy.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>{policy.name}</span>
                {isCurrent && <ChevronRight className="w-4 h-4 text-blue-600 shrink-0" />}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Full-Width Layout */}
      <div className="w-full flex-1 flex flex-col lg:flex-row items-stretch">
        {/* Left Desktop Sidebar (Hidden on Mobile) */}
        <aside className="hidden lg:block w-72 shrink-0 bg-white border-r border-slate-200 self-stretch">
          <div className="sticky top-[120px] p-5 max-h-[calc(100vh-130px)] overflow-y-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
              Policies
            </h3>

            <nav className="flex flex-col space-y-1" aria-label="Policies List">
              {POLICIES_LIST.map((policy) => {
                const isCurrent = policy.id === activePolicyId

                return (
                  <button
                    key={policy.id}
                    type="button"
                    onClick={() => handleSelectPolicy(policy.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-50 text-blue-700 font-semibold shadow-2xs border-l-4 border-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{policy.name}</span>
                    {isCurrent && (
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0" />
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
          className="policies-content-container flex-1 min-w-0 w-full bg-white overflow-hidden"
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
