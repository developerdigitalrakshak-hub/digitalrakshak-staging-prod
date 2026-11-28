'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
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

interface PolicySection {
  id: string
  label: string
}

interface PolicyItem {
  id: string
  name: string
  icon: React.ElementType
  sections: PolicySection[]
}

const POLICIES_LIST: PolicyItem[] = [
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    icon: Shield,
    sections: [
      { id: 'introduction', label: '1. Introduction' },
      { id: 'general', label: '2. General' },
      { id: 'information-collect', label: '3. Information We Collect' },
      { id: 'purposes', label: '4. Purposes & Use' },
      { id: 'disclosure', label: '5. Disclosure of Info' },
      { id: 'changes', label: '6. Changes to Info' },
      { id: 'security', label: '7. Security Practices' },
      { id: 'retention', label: '8. Data Retention' },
      { id: 'consent', label: '9. Consent Withdrawal' },
      { id: 'thirdparty', label: '10. Third-Party Links' },
      { id: 'laws', label: '11. Applicable Laws' },
      { id: 'grievance', label: '12. Grievance Officer' },
      { id: 'disclaimer', label: '13. Disclaimer' }
    ]
  },
  {
    id: 'terms-and-conditions',
    name: 'Terms & Conditions',
    icon: FileText,
    sections: [
      { id: 'scope', label: '1. Scope' },
      { id: 'services', label: '2. Our Services' },
      { id: 'access', label: '3. Access & Use' },
      { id: 'representations', label: '4. Warranties' },
      { id: 'undertakings', label: '5. Your Undertakings' },
      { id: 'proprietary', label: '6. Proprietary Rights' },
      { id: 'fees', label: '7. Fees and Payments' },
      { id: 'indemnification', label: '8. Indemnification' },
      { id: 'disclaimer', label: '9. Disclaimer' },
      { id: 'termination', label: '10. Termination' },
      { id: 'disputes', label: '11. Disputes' },
      { id: 'miscellaneous', label: '12. Miscellaneous' },
      { id: 'contact', label: '13. Contact / Agreement' }
    ]
  },
  {
    id: 'responsible-disclosure',
    name: 'Responsible Disclosure Policy',
    icon: AlertTriangle,
    sections: [
      { id: 'purpose', label: '1. Purpose' },
      { id: 'versioning', label: '2. Versioning & Contact' },
      { id: 'safe-harbour', label: '3. Safe-Harbour' },
      { id: 'disclaimer', label: '4. Disclaimer & Conduct' },
      { id: 'scope', label: '5. Permitted Scope' },
      { id: 'out-of-scope', label: '6. Out of Scope' },
      { id: 'qualifying', label: '7. Qualifying Vulnerabilities' },
      { id: 'reporting', label: '8. Reporting Guidelines' },
      { id: 'confidentiality', label: '9. Confidentiality' },
      { id: 'expectations', label: '10. What to Expect' },
      { id: 'governing', label: '11. Governing Law' }
    ]
  },
  {
    id: 'consumer-grievance-redressal-policy',
    name: 'Consumer Grievance Redressal Policy',
    icon: Headphones,
    sections: [
      { id: 'introduction', label: '1. Introduction' },
      { id: 'objectives', label: '2. Objectives' },
      { id: 'scope', label: '3. Scope' },
      { id: 'classification', label: '4. Classification' },
      { id: 'governance', label: '5. Governance & Reporting' },
      { id: 'retention', label: '6. Data Retention' },
      { id: 'channels', label: '7. Grievance Channels' },
      { id: 'disclaimer', label: '8. Disclaimer' }
    ]
  }
]

export default function PoliciesPage() {
  // Default 1st one ('privacy-policy') selected
  const [activePolicyId, setActivePolicyId] = useState<string>(POLICIES_LIST[0].id)
  const [activeSectionId, setActiveSectionId] = useState<string>(POLICIES_LIST[0].sections[0].id)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const contentTopRef = useRef<HTMLDivElement>(null)
  const pendingSectionRef = useRef<string | null>(null)

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

  const scrollToSectionElement = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  // Scroll to pending section after policy tab switches and mounts
  useEffect(() => {
    if (pendingSectionRef.current) {
      const targetId = pendingSectionRef.current
      pendingSectionRef.current = null
      requestAnimationFrame(() => {
        scrollToSectionElement(targetId)
      })
    }
  }, [activePolicyId, scrollToSectionElement])

  // Track visible section while scrolling
  useEffect(() => {
    const container = contentTopRef.current
    if (!container) return

    const sectionEls = Array.from(container.querySelectorAll('section[id]'))
    if (sectionEls.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSectionId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-120px 0px -60% 0px',
        threshold: 0
      }
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activePolicyId])

  const handleSelectPolicy = (id: string) => {
    const policy = POLICIES_LIST.find((p) => p.id === id)
    setActivePolicyId(id)
    if (policy?.sections[0]) {
      setActiveSectionId(policy.sections[0].id)
    }
    setIsDrawerOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectSection = (policyId: string, sectionId: string) => {
    setActiveSectionId(sectionId)
    setIsDrawerOpen(false)

    if (activePolicyId !== policyId) {
      pendingSectionRef.current = sectionId
      setActivePolicyId(policyId)
    } else {
      scrollToSectionElement(sectionId)
    }
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
              <div key={policy.id} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => handleSelectPolicy(policy.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isCurrent
                      ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/15 text-white font-semibold border-l-4 border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                      : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isCurrent ? 'text-[#76bbf8]' : 'text-slate-500'}`} />
                    <span className="truncate">{policy.name}</span>
                  </div>
                  {isCurrent ? (
                    <ChevronDown className="w-4 h-4 text-[#76bbf8] shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                  )}
                </button>

                {isCurrent && (
                  <div className="mt-1.5 ml-4 pl-3 border-l border-white/10 flex flex-col gap-0.5">
                    {policy.sections.map((section) => {
                      const isSectionActive = activeSectionId === section.id
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => handleSelectSection(policy.id, section.id)}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer truncate ${
                            isSectionActive
                              ? 'text-[#76bbf8] bg-blue-500/10 font-semibold'
                              : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                          }`}
                          title={section.label}
                        >
                          {section.label}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
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
                  <div key={policy.id} className="flex flex-col">
                    <button
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
                      {isCurrent ? (
                        <ChevronDown className="w-4 h-4 text-[#76bbf8] shrink-0 transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 shrink-0 transition-transform" />
                      )}
                    </button>

                    {isCurrent && (
                      <div className="mt-1.5 ml-5 pl-3 border-l border-white/10 flex flex-col space-y-0.5">
                        {policy.sections.map((section) => {
                          const isSectionActive = activeSectionId === section.id
                          return (
                            <button
                              key={section.id}
                              type="button"
                              onClick={() => handleSelectSection(policy.id, section.id)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer truncate ${
                                isSectionActive
                                  ? 'text-[#76bbf8] bg-blue-500/10 font-semibold border-l-2 border-[#38bdf8]'
                                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                              }`}
                              title={section.label}
                            >
                              {section.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
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
