"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, PersonStanding, ChevronDown, Phone, HelpCircle, User, X } from "lucide-react"
import { useAccessibility } from "@/components/accessibility/accessibility-provider"

interface LanguageConfig {
  [key: string]: {
    flag: string
    locale: string
  }
}

interface SupportLink {
  label: string
  href: string
}

interface AccountLink {
  label: string
  href: string
}

export default function TopUtilityBar() {
  const router = useRouter()
  const { openModal } = useAccessibility()

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeUtilityDropdown, setActiveUtilityDropdown] = useState<string | null>(null)

  const searchRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const utilityDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const languageConfig: LanguageConfig = {
    "العربية": { flag: "🇸🇦", locale: "ar" },
    "Bahasa Indonesia": { flag: "🇮🇩", locale: "id" },
    "Deutsch": { flag: "🇩🇪", locale: "de" },
    "English": { flag: "🇬🇧", locale: "en" },
    "Español": { flag: "🇪🇸", locale: "es" },
    "Français": { flag: "🇫🇷", locale: "fr" },
    "Italiano": { flag: "🇮🇹", locale: "it" },
    "Português": { flag: "🇧🇷", locale: "pt" },
    "Tiếng Việt": { flag: "🇻🇳", locale: "vi" },
    "Türkçe": { flag: "🇹🇷", locale: "tr" },
    "Русский": { flag: "🇷🇺", locale: "ru" },
    "ไทย": { flag: "🇹🇭", locale: "th" },
    "日本語": { flag: "🇯🇵", locale: "ja" },
    "한국어": { flag: "🇰🇷", locale: "ko" },
    "中文 (简体)": { flag: "🇨🇳", locale: "zh" },
    "中文 (繁體)": { flag: "🇹🇼", locale: "zh-TW" },
  }

  const languages = Object.keys(languageConfig)

  const [selectedLang, setSelectedLang] = useState<string>(() => {
    if (typeof window === "undefined") return "English"
    const saved = localStorage.getItem("preferred-language")
    return saved && languageConfig[saved] ? saved : "English"
  })

  const supportLinks: SupportLink[] = [
    { label: "Support Center", href: "/support-center" },
    { label: "Expert Help", href: "/expert-help" },
    { label: "Knowledge Center", href: "/knowledge-center" },
    { label: "Support Overview", href: "/support-overview" },
  ]

  const accountLinks: AccountLink[] = [
    { label: "Account Management Console", href: "/console" },
    { label: "Account Settings", href: "/account-settings" },
    { label: "Billing & Cost Management", href: "/billing" },
    { label: "Security Credentials", href: "/security-credentials" },
    { label: "Personal Health Dashboard", href: "/health-dashboard" },
  ]

  // Close popovers on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }

      if (activeUtilityDropdown) {
        const currentRef = utilityDropdownRefs.current[activeUtilityDropdown]
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setActiveUtilityDropdown(null)
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeUtilityDropdown])

  // Auto focus search input when popover opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  const toggleUtilityDropdown = (dropdownName: string) => {
    if (activeUtilityDropdown === dropdownName) {
      setActiveUtilityDropdown(null)
    } else {
      setActiveUtilityDropdown(dropdownName)
    }
  }

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="bg-gray-800 text-white text-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between sm:justify-end items-center h-10">

          {/* Mobile title fallback */}
          <div className="sm:hidden text-[11px] text-gray-300 font-semibold truncate max-w-[100px] xs:max-w-none">
            DigitalRakshak™
          </div>

          {/* Right side utility icons & dropdowns */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">

            {/* 1. Language Dropdown */}
            {/* <div
              className="relative"
              ref={(el) => { utilityDropdownRefs.current['language'] = el }}
            >
              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => toggleUtilityDropdown('language')}
              >
                <span className="text-base leading-none" aria-label={selectedLang}>
                  {languageConfig[selectedLang]?.flag ?? "🌐"}
                </span>
                <span className="hidden sm:inline">{selectedLang}</span>
                <ChevronDown className="h-3 w-3" />
              </div>

              {activeUtilityDropdown === 'language' && (
                <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
                  <ul className="max-h-64 overflow-y-auto">
                    {languages.map((lang) => (
                      <li
                        key={lang}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2 ${lang === selectedLang ? "bg-gray-100 font-semibold" : ""
                          }`}
                        onClick={() => {
                          setSelectedLang(lang)
                          setActiveUtilityDropdown(null)
                        }}
                      >
                        <span>{languageConfig[lang]?.flag}</span>
                        <span className="flex-1">{lang}</span>
                        {lang === selectedLang && (
                          <span className="text-blue-500 text-xs">✓</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t px-4 py-3 space-y-2">
                    <button
                      className="w-full text-sm text-center bg-blue-600 text-white rounded-md py-1.5 hover:bg-blue-700 transition-colors"
                      onClick={() => {
                        localStorage.setItem("preferred-language", selectedLang)
                        setActiveUtilityDropdown(null)
                      }}
                    >
                      Set as default language
                    </button>
                    <button
                      className="w-full text-xs text-center text-gray-500 hover:text-red-500 transition-colors"
                      onClick={() => {
                        localStorage.removeItem("preferred-language")
                        setActiveUtilityDropdown(null)
                      }}
                    >
                      Clear saved preference
                    </button>
                  </div>
                </div>
              )}
            </div> */}

            {/* 2. Interactive Search Popover Button */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                title="Search Website"
                aria-label="Search Website"
                className={`p-1 rounded hover:text-blue-300 transition-colors flex items-center justify-center ${isSearchOpen ? "text-blue-400" : "text-gray-200"
                  }`}
              >
                <Search className="h-4 w-4 stroke-[2.25]" />
              </button>

              {/* Floating Search Input Popover */}
              {isSearchOpen && (
                <div className="absolute -right-8 sm:right-0 top-full mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <form
                    onSubmit={handleSearchSubmit}
                    className="bg-white rounded-full shadow-2xl border border-stone-300 p-1 flex items-center w-72 sm:w-80 ring-2 ring-blue-500/20"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-1.5 text-sm text-gray-800 focus:outline-none bg-transparent placeholder-gray-500 font-normal"
                    />
                    <button
                      type="submit"
                      title="Execute Search"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-4 py-2 rounded-full transition-all flex items-center justify-center shadow-sm"
                    >
                      <Search className="w-4 h-4 text-white stroke-[2.5]" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* 3. Accessibility Tools Trigger */}
            <button
              onClick={openModal}
              title="Accessibility Tools"
              aria-label="Accessibility Tools"
              className="hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <PersonStanding className="h-4 w-4" />
              <span className="hidden lg:block text-xs font-medium">Accessibility</span>
            </button>

            {/* 4. Contact Us */}
            {/* <Link
              href="/contact"
              className="hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:block">Contact us</span>
            </Link> */}

            {/* 5. Support Dropdown */}
            {/* <div
              className="hidden md:block relative"
              ref={(el) => { utilityDropdownRefs.current['support'] = el }}
            >
              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => toggleUtilityDropdown('support')}
              >
                <HelpCircle className="h-4 w-4" />
                <span className="hidden sm:block">Support</span>
                <ChevronDown className="h-3 w-3" />
              </div>

              {activeUtilityDropdown === 'support' && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
                  <ul>
                    {supportLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-xs text-gray-800"
                          onClick={() => setActiveUtilityDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}

            {/* 6. My Account Dropdown */}
            {/* <div
              className="hidden md:block relative"
              ref={(el) => { utilityDropdownRefs.current['account'] = el }}
            >
              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => toggleUtilityDropdown('account')}
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:block">My account</span>
                <ChevronDown className="h-3 w-3" />
              </div>

              {activeUtilityDropdown === 'account' && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
                  <ul>
                    {accountLinks.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-gray-100 text-xs text-gray-800"
                          onClick={() => setActiveUtilityDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}

            {/* 7. Profile Avatar */}
            {/* <div
              className="relative"
              ref={(el) => { utilityDropdownRefs.current['profile'] = el }}
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors"
                onClick={() => toggleUtilityDropdown('profile')}
              >
                <User className="h-4 w-4 text-white" />
              </div>

              {activeUtilityDropdown === 'profile' && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white text-black rounded shadow-lg p-4 z-50">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-sm">Profile</h3>
                    <button onClick={() => setActiveUtilityDropdown(null)}>
                      <X className="h-4 w-4 text-gray-500 hover:text-black" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    Your profile helps improve your interactions with select experiences.
                  </p>
                  <div className="flex space-x-3">
                    <Link href="/register">
                      <button
                        className="px-3.5 py-1.5 border border-gray-300 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors text-gray-800"
                        onClick={() => setActiveUtilityDropdown(null)}
                      >
                        Log in
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button
                        className="px-3.5 py-1.5 bg-gray-900 text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
                        onClick={() => setActiveUtilityDropdown(null)}
                      >
                        Create profile
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}
