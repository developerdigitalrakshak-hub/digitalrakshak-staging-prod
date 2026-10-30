/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  ChevronDown,
  Menu,
  Shield,
  X,
  Users,
  Scale,
  Video,
  FileText,
  Award,
  MessageSquare,
  BookOpen,
  Search,
  Star,
  TrendingUp,
  Database,
  Cloud,
  Eye,
  UserCheck,
  GraduationCap,
  Briefcase,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  FileCheck,
  Settings,
  Globe,
  Phone,
  HelpCircle,
  User,
  ChevronRight,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Layers,
  Building2,
  Library,
  Grid3X3,
  Heart,
  Zap,
  Crown,
  Rocket,
  BriefcaseIcon,
  GraduationCapIcon,
  FileTextIcon,
  MessageCircle,
  FileSignature,
  PersonStanding,
} from "lucide-react"
import { useAccessibility } from "@/components/accessibility/accessibility-provider"

// Type definitions
interface ServiceItem {
  name: string
  description: string
  href?: string
  isNew?: boolean
}

interface SubService {
  name: string
  description: string
  services: ServiceItem[]
  href?: string
  isNew?: boolean
}

interface MainService {
  name: string
  description: string
  icon: string
  isNew?: boolean
  subservices: SubService[]
}

interface InHouseService {
  name: string
  description: string
  icon: string
  isNew?: boolean
  isDisplay?: boolean
  subservices: SubService[]
}

interface Industry {
  name: string
  href: string
  icon: React.ElementType
  description: string
}

interface ResourceItem {
  name: string
  href: string
  icon: React.ElementType
  description: string
}

interface NavigationItem {
  name: string
  href: string
  hasDropdown: boolean
  dropDownMenu: string[] | ResourceItem[]
  icon: React.ElementType | null
  description: string | null
}

export default function Bar() {
  const router = useRouter()
  const pathname = usePathname()
  const { openModal } = useAccessibility()

  // Scroll state matching gst-verification-api header
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("ID & e-KYC Data Stack")
  const [selectedInhouseCategory, setSelectedInhouseCategory] = useState<string>("HR Excellence Suite")
  const [selectedDigitalTransformationCategory, setSelectedDigitalTransformationCategory] = useState<string>("Digital Transformation")

  // Search popover state
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const [expandedCards, setExpandedCards] = useState<string[]>([])

  // Mobile view states
  const [mobileSelectedMainTab, setMobileSelectedMainTab] = useState<string>(
    pathname.startsWith('/resources') ? "Resources" : "Explore API"
  )
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<string>("ID & e-KYC Data Stack")
  const [mobileExpandedSubServices, setMobileExpandedSubServices] = useState<Set<string>>(new Set())

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Listen to scroll to toggle compact floating capsule mode
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto focus search input when search popover opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // Close search and dropdown popovers on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleMouseEnter = (itemName: string) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    setActiveDropdown(itemName)
    if (itemName === "Services") {
      setSelectedCategory("ID & e-KYC Data Stack")
    }
  }

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  const toggleMobileSubServiceExpansion = (subServiceName: string) => {
    const newSet = new Set(mobileExpandedSubServices)
    if (newSet.has(subServiceName)) {
      newSet.delete(subServiceName)
    } else {
      newSet.add(subServiceName)
    }
    setMobileExpandedSubServices(newSet)
  }

  const servicesCategories = [
    "Identity & KYC",
    "Vehicle & Transportation",
    "Financial & Banking",
    "Government & Compliance",
    "Utility & Address Verification",
    "Business & Professional",
    "Document & Security",
    "HR Excellence Suite",
    "Digital Transformation (Dx)"
  ]

  const servicesData: MainService[] = [
    {
      name: 'ID & e-KYC Data Stack',
      description: '',
      icon: '🔐',
      subservices: [
        {
          name: 'e-KYC Onboarding',
          description: 'Seamless digital onboarding with document access',
          services: [
            { name: 'Access Digi-Locker', description: 'Access digital documents' },
            { name: 'Aadhar', description: 'Aadhar verification' },
            { name: 'PAN', description: 'PAN verification' }
          ]
        },
        {
          name: 'Security/Auth',
          description: 'Advanced security and authentication services',
          services: [
            { name: 'Face Match', description: 'Biometric face matching' },
            { name: 'Liveness Check', description: 'Anti-spoofing liveness verification' },
            { name: 'KYC - OCR', href: '/kyc-ocr', description: 'Optical character recognition for KYC', isNew: true },
            { name: 'Email / Mobile Verification', href: '/email-and-mobile-verification', description: 'Channel verification', isNew: true },
            { name: 'Email Fraud Check', description: 'Detect email fraud' },
            { name: 'Mobile No. Revocation List (MNRL)', href: '/mnrl-verification', description: 'Check mobile revocation', isNew: true }
          ]
        },
        {
          name: 'Identity Verification',
          description: 'Verify multiple identity documents',
          services: [
            { name: 'Aadhar Card', description: 'Aadhar verification' },
            { name: 'PAN Card', description: 'PAN verification' },
            { name: 'Passport', href: '/passport-verification', description: 'Passport verification', isNew: true },
            { name: 'Voter ID', href: '/voter-id-verification', description: 'Voter ID verification', isNew: true },
            { name: 'Ration Card Details', description: 'Ration card verification' }
          ]
        }
      ]
    },
    {
      name: 'Document Intelligence',
      description: '',
      icon: '📄',
      subservices: [
        {
          name: 'Due Diligence',
          description: 'Comprehensive verification and validation',
          services: [
            { name: 'Name Match', description: 'Verify name consistency' },
            { name: 'Address Match', description: 'Address verification' },
            { name: 'Address Split', description: 'Parse address components' },
            { name: 'Geo Fencing', href: '/geo-fencing', description: 'Geographic boundary verification', isNew: true },
            { name: 'Reverse GeoCodes', href: '/reverse-geocodes', description: 'Reverse geocoding services', isNew: true },
            { name: 'Property Tax Verification', description: 'Property tax records check' },
            { name: 'Electricity Bill Verify', description: 'Electricity bill verification' },
            { name: 'LPG ID Verification', description: 'LPG ID check' },
            { name: 'PNG Verification', description: 'PNG verification' }
          ]
        },
      ]
    },
    {
      name: 'Crime & Background Verification',
      description: '',
      icon: '🛡️',
      subservices: [
        {
          name: 'Crime / Court Records Check',
          description: 'Criminal and court record verification',
          services: [
            { name: 'e-FIR Check', description: 'Electronic FIR check' },
            { name: 'National Criminal DB Check', description: 'National criminal database' },
            { name: 'Police Verification', description: 'Police records check' },
            { name: 'State Criminal Database', description: 'State criminal records' },
            { name: 'e-Court (Criminal/Civil)', description: 'e-Court records' },
            { name: 'Supreme / High Court Litigation', description: 'Supreme court check' },
            { name: 'District Court Record Search', description: 'District court records' },
            { name: 'Magistrate Court Search', description: 'Magistrate court records' },
            { name: 'Court/Criminal Record via Law Firm', description: 'Legal firm verification' },
            { name: 'Sex Offender Registry Check', description: 'National registry check' },
            { name: 'NCLT DB Check', description: 'NCLT database check' }
          ]
        },
        {
          name: 'Forgery Detection',
          description: 'Advanced forgery and fraud detection',
          services: [
            { name: 'Global DB - Negative Media Check', href: '/negative-due-diligence', description: 'Global database screening', isNew: true },
            { name: 'Advance Forgery Check', href: '/document-forgery-detection', description: 'Advanced forgery detection', isNew: true },
            { name: 'IP Quality Check', href: '/ip-quality-check', description: 'IP reputation check', isNew: true }
          ]
        }
      ]
    },
    {
      name: 'Business & ID Stack',
      description: '',
      icon: '🛡️',
      subservices: [
        {
          name: 'Membership Verification',
          description: 'Professional membership verification',
          services: [
            { name: 'CA - Chartered Accountant', description: 'Verify CA membership' },
            { name: 'ICSI - Institute of Company Secretaries', description: 'Verify ICSI membership' },
            { name: 'ICWAI - Institute of Cost Accountants', description: 'Verify ICWAI membership' }
          ]
        },
        {
          name: 'Business Verification',
          description: 'Comprehensive business entity verification',
          href: '/business-verification',
          isNew: true,
          services: [
            { name: 'Company & LLP Check', description: 'Company and LLP verification' },
            { name: 'ROC Director Search', href: '/roc-director-search', description: 'Director DIN & MCA records search', isNew: true },
            { name: 'PAN Verify', description: 'Business PAN verification' },
            { name: 'TAN Verify', href: '/tan-verification', description: 'TAN verification', isNew: true },
            { name: 'TIN Verify', description: 'TIN verification' },
            { name: 'GSTIN Verify', href: '/gst-verification-api', description: 'GST registration verification', isNew: true },
            { name: 'Import / Export Certificate', description: 'Import/export verification' },
            { name: 'Shop & Establishment', href: '/shop-establishment', description: 'Shop registration verification', isNew: true },
            { name: 'MSME / Udyam', href: '/msme-udyam-verification', description: 'MSME registration check', isNew: true },
            { name: 'EPFO Establishment Search', href: '/epfo-establishment-search', description: 'EPFO verification', isNew: true }
          ]
        },
        {
          name: 'GST Verification',
          href: '/gst-verification-api',
          description: 'KPI for GST online verification',
          isNew: true,
          services: [
            { name: 'Prevent Fraudulent Invoices', description: '' },
            { name: 'Ensure Input Tax Credit (ITC) Compliance', description: '' },
            { name: 'Enhance Audit Preparedness', description: '' },
            { name: 'Reduce Administrative Errors', description: '' },
            { name: 'Build Vendor Transparency and Business Trust', description: '' },
          ]
        }
      ]
    },
    {
      name: 'Employment Check',
      description: '',
      icon: '🛡️',
      subservices: [
        {
          name: 'Employment BGV',
          description: 'Employment background verification',
          services: [
            { name: 'EPF Employee Name Search', description: 'Search EPF records' },
            { name: 'EPF UAN Validation', href: '/uan-validation', description: 'Validate UAN number', isNew: true },
            { name: 'EPF Records Check', description: 'Check EPF history' },
            { name: 'Single Record - Last Comp', description: 'Last company record' }
          ]
        },
      ]
    },
    {
      name: 'Education Check',
      description: '',
      icon: '🛡️',
      subservices: [
        {
          name: 'Education BGV',
          description: 'Education verification',
          services: [
            { name: 'SSC', description: 'Verify SSC' },
            { name: 'HSC', description: 'Verify HSC' },
            { name: 'Graduate', description: 'Verify graduation' },
            { name: 'Post Graduate', description: 'Verify post-graduation' },
            { name: 'PhD', description: 'Verify doctoral degree' }
          ]
        },
      ]
    },
    {
      name: 'Banking Due Diligence',
      description: '',
      icon: '🛡️',
      subservices: [
        {
          name: 'Financial Verification',
          description: 'Financial records and history verification',
          services: [
            { name: 'Bank Account Verification', href: '/bank-account-verification', description: 'Bank account validation', isNew: true },
            { name: 'Hybrid Bank Account Verification', href: '/hybrid-bank-account-verification', description: 'Hybrid Bank Account Verification', isNew: true },
            { name: 'Compensation Verification', description: 'Verify via bank statement' },
            { name: 'IFSC Check', href: '/ifsc-check', description: 'IFSC code verification', isNew: true },
            { name: 'Income Tax Return - ITR', href: '/itr-verification', description: 'ITR verification', isNew: true },
            { name: 'ITR Fetch', href: '/itr-fetch', description: 'ITR Fetch', isNew: true },
            { name: 'Credit / CIBIL History', description: 'Credit history check' },
            { name: 'Digital Media Forensic', description: 'Digital forensics' },
            { name: 'Social Media & Reputation', description: 'Social media screening' },
            { name: 'Cheque Verify', description: 'Cheque verification' },
            { name: 'OCR - Intelligent Doc Processing', description: 'Document OCR' },
            { name: 'Experian Credit Bureau', href: '/experian-credit-bureau', description: 'Experian Business Credit Bureau', isNew: true }
          ]
        }
      ]
    },
    {
      name: 'Trace Automobile',
      description: '',
      icon: '🛡️',
      subservices: [
        {
          name: 'Vehicle & Transportation',
          description: 'Automobile verification and Tracking',
          services: [
            { name: 'Driving Licence (DL)', href: '/driving-licence-verification', description: 'DL verification', isNew: true },
            { name: 'Vehicle RC Verification', href: '/vehicle-rc-verification', description: 'RC verification', isNew: true },
            { name: 'Vehicle Reverse RC', href: '/vehicle-reverse-rc', description: 'Vehicle Reverse RC', isNew: true },
            { name: 'Fast Tag Verification', href: '/fastag-verification', description: 'FASTag verification', isNew: true },
            { name: 'FASTTAG Last Location', description: 'FASTag location tracking' },
          ]
        }
      ]
    },
  ]

  const inHouseServicesData: InHouseService[] = [
    {
      name: 'HR Excellence Suite',
      isDisplay: false,
      description: 'Complete HR and employee management solutions',
      icon: '👥',
      subservices: [
        {
          name: 'Employee Verification',
          description: 'Comprehensive candidate screening and employee background verification.',
          services: []
        },
        {
          name: 'ID & BGV',
          description: 'Instant government ID validation, identity verification & criminal background checks.',
          services: []
        },
        {
          name: 'Education Verification',
          description: 'Authenticating educational qualifications, university degrees & academic certificates.',
          services: []
        },
        {
          name: 'Employment History',
          description: 'Validating prior work experience, employment tenure, and company designations.',
          services: []
        },
        {
          name: 'Physical Address Check',
          description: 'On-ground physical and digital verification of residential addresses.',
          services: []
        },
      ]
    },
  ]

  const digitalTransformationData: InHouseService[] = [
    {
      name: 'Digital Transformation',
      description: 'Modern tech solutions and security services',
      icon: '🚀',
      subservices: [
        {
          name: 'Secure Web Development',
          href: '/web-application-development',
          description: 'Secure Web Development services',
          isNew: true,
          services: [
            { name: 'FrontEnd', description: 'Frontend development' },
            { name: 'Backend', description: 'Backend development' },
            { name: 'Integration', description: 'System integration' },
            { name: 'Database', description: 'Database management' },
            { name: 'Cloud', description: 'Cloud services' }
          ]
        },
        {
          name: 'Cybersecurity',
          description: 'Security and threat management',
          services: [
            { name: 'VAPT Service', description: 'Vulnerability assessment' },
            { name: 'SOC', description: 'Security operations center' }
          ]
        },
        {
          name: 'License / Certification',
          description: 'Compliance certifications',
          services: [
            { name: 'ISO 9001', description: 'Quality management' },
            { name: 'ISO 27001', description: 'Information security' },
            { name: 'SOC - 1 & 2', description: 'Service organization control' },
            { name: 'GDPR Policy', description: 'GDPR compliance' },
            { name: 'DPDA Act', description: 'Data protection compliance' },
            { name: 'E-Waste Management', description: 'E-waste certification' }
          ]
        }
      ]
    }
  ]

  const industriesList: Industry[] = [
    {
      name: "Banks",
      href: "/industries/banks",
      icon: Briefcase,
      description: "KYC, AML and fraud prevention for banking.",
    },
    { name: "NBFCs", href: "/industries/nbfcs", icon: Scale, description: "Faster onboarding and loan risk checks." },
    { name: "Gaming", href: "/industries/gaming", icon: Video, description: "Player KYC and anti-cheat verification." },
    {
      name: "Crypto",
      href: "/industries/crypto",
      icon: ShieldCheck,
      description: "Compliance-first onboarding for VASPs.",
    },
    {
      name: "EdTech",
      href: "/industries/edtech",
      icon: GraduationCap,
      description: "Learner/teacher verification and proctoring.",
    },
    {
      name: "Insurance",
      href: "/industries/insurance",
      icon: Shield,
      description: "Fraud reduction and policyholder KYC.",
    },
    {
      name: "Marketplace",
      href: "/industries/marketplace",
      icon: Users,
      description: "Seller/buyer verification at scale.",
    },
    {
      name: "Logistics & Ecommerce",
      href: "/industries/logistics-ecommerce",
      icon: MapPin,
      description: "Courier/warehouse workforce screening.",
    },
    {
      name: "Securities & Brokerages",
      href: "/industries/securities-brokerages",
      icon: TrendingUp,
      description: "SEBI-compliant investor onboarding.",
    },
  ]

  const displayServicesName: { [key: string]: string } = {
    "Services": 'Explore API',
    "inhouseServices": 'Background Verification',
    "Digital Trust": 'Digital Trust',
    digitalTransformation: 'Digital Transformation (Dx)',
    Industries: 'Industries',
    Pricing: 'Pricing',
    Resources: 'Resources'
  }

  const digitalTrustData: ResourceItem[] = [
    {
      name: "e-Sign Solution",
      href: "/e-stamp-and-e-sign",
      icon: FileSignature,
      description: "Legally binding Aadhaar & digital signatures for swift paperless execution.",
    },
    {
      name: "e-Stamping Solution",
      href: "/e-stamp-and-e-sign",
      icon: FileCheck,
      description: "Instant online non-judicial digital stamp duty payment across Indian states.",
    },
    {
      name: "e-Onboarding Platform",
      href: "#",
      icon: UserCheck,
      description: "Automated digital user onboarding with instant verification and compliance.",
    },
  ]

  const navigation: NavigationItem[] = [
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropDownMenu: servicesCategories,
      icon: Users,
      description: "Comprehensive verification and background screening services",
    },
    {
      name: "inhouseServices",
      href: "/services",
      hasDropdown: true,
      dropDownMenu: servicesCategories,
      icon: Users,
      description: "Comprehensive verification and background screening services",
    },
    {
      name: "Digital Trust",
      href: "/e-stamp-and-e-sign",
      hasDropdown: true,
      dropDownMenu: digitalTrustData,
      icon: FileSignature,
      description: "E-Stamp & E-Sign Solutions",
    },
    {
      name: "Pricing",
      href: "/pricing",
      hasDropdown: false,
      dropDownMenu: [],
      icon: null,
      description: null,
    },
    {
      name: "Resources",
      href: "/resources",
      hasDropdown: true,
      dropDownMenu: [
        {
          name: "About Us",
          href: "/resources/about-us",
          icon: FileText,
          description: "Learn more about our company and our mission",
        },
        {
          name: "Career",
          href: "/resources/glossary",
          icon: MessageSquare,
          description: "Understand key terms and concepts in background verification",
        },
        {
          name: "Blogs, Research & Publication",
          href: "/resources/blog",
          icon: BookOpen,
          description: "Stay up-to-date with the latest industry news",
        },
      ],
      icon: null,
      description: null
    },
  ]

  const isDisplayMainServices = inHouseServicesData?.find(service => service?.isDisplay == true)

  const toggleCard = (cardName: string) => {
    setExpandedCards((prev) =>
      prev.includes(cardName)
        ? prev.filter((item) => item !== cardName)
        : [...prev, cardName]
    )
  }

  // Resources data for mobile
  const resourcesData: ResourceItem[] = [
    {
      name: "About Us",
      href: "/resources/about-us",
      icon: FileText,
      description: "Learn more about our company and our mission",
    },
    {
      name: "Career",
      href: "/resources/glossary",
      icon: MessageSquare,
      description: "Understand key terms and concepts in background verification",
    },
    {
      name: "Blogs, Research & Publication",
      href: "/resources/blog",
      icon: BookOpen,
      description: "Stay up-to-date with the latest industry news",
    },
  ]

  // Mobile Services Content
  const MobileServicesContent = () => {
    const getCurrentData = () => {
      if (mobileSelectedMainTab === "Explore API") return servicesData
      if (mobileSelectedMainTab === "HR Excellence Suite") return inHouseServicesData
      return []
    }

    const currentData = getCurrentData()
    const categories = currentData.map(item => item.name)
    const activeCategoryExists = categories.includes(mobileSelectedCategory)
    const activeCategory = activeCategoryExists ? mobileSelectedCategory : (categories[0] || "")

    useEffect(() => {
      const newData = getCurrentData()
      if (newData.length > 0 && !categories.includes(mobileSelectedCategory)) {
        setMobileSelectedCategory(newData[0].name)
      }
    }, [mobileSelectedMainTab])

    return (
      <div className="flex flex-col h-full space-y-4">
        {/* Category Selection Grid */}
        {currentData?.length > 1 && (
          <div className="bg-[#141824] border border-white/10 rounded-2xl p-3">
            <div className="grid grid-cols-2 gap-2">
              {currentData.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setMobileSelectedCategory(category.name)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 ${activeCategory === category.name
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-[1.02] border border-blue-400/40"
                    : "bg-[#1c2234] text-gray-300 border border-white/10 hover:border-white/20"
                    }`}
                >
                  <div className="text-xs sm:text-sm font-semibold truncate">
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services Cards */}
        <div className="space-y-3">
          {currentData.map((mainService) => {
            if (mainService.name === activeCategory) {
              return (
                <div key={mainService.name} className="space-y-3">
                  <div className="flex items-center gap-2.5 px-1">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full" />
                    <h3 className="text-base font-bold text-white">
                      {mainService.name === "HR Excellence Suite" ? "Background Verification" : mainService.name}
                    </h3>
                  </div>

                  {mainService.subservices.map((subService) => {
                    const isExpanded = mobileExpandedSubServices.has(subService.name)
                    const displayServices = isExpanded ? subService.services : []

                    return (
                      <div key={subService.name} className="bg-[#141824] rounded-2xl shadow-sm border border-white/10 overflow-hidden">
                        <button
                          onClick={() => {
                            if (subService.services && subService.services.length > 0) {
                              toggleMobileSubServiceExpansion(subService.name)
                            } else if (subService.href) {
                              router.push(subService.href)
                              setIsOpen(false)
                            }
                          }}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-white/[0.04] transition-colors"
                        >
                          <div className="flex-1 min-w-0 pr-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-semibold text-white text-sm">{subService.name}</h4>
                              {subService.isNew && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                  <Sparkles className="h-2.5 w-2.5 mr-1" />
                                  New
                                </span>
                              )}
                            </div>
                            {subService.description && (
                              <p className="text-xs text-gray-400 mt-1 leading-snug">{subService.description}</p>
                            )}
                          </div>
                          <div className={`p-1.5 rounded-full transition-colors shrink-0 ${isExpanded ? "bg-blue-500/20 text-[#76bbf8]" : "bg-white/10 text-gray-400"}`}>
                            {subService.services && subService.services.length > 0 ? (
                              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </div>
                        </button>

                        {isExpanded && displayServices.length > 0 && (
                          <div className="border-t border-white/10 bg-[#0f121d]/70">
                            {displayServices.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href || "#"}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.06] transition-colors group border-b border-white/5 last:border-0"
                              >
                                <div className="flex-1 min-w-0 pr-2">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#76bbf8]" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white">
                                      {item.name}
                                    </span>
                                    {item.isNew && (
                                      <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-medium bg-red-500/20 text-red-300 border border-red-500/30">
                                        New
                                      </span>
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="text-[11px] text-gray-400 mt-0.5 ml-3.5 leading-snug">{item.description}</p>
                                  )}
                                </div>
                                <ChevronRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#76bbf8] group-hover:translate-x-0.5 transition-all shrink-0" />
                              </Link>
                            ))}
                          </div>
                        )}

                        {!isExpanded && subService.services.length > 0 && (
                          <div className="px-4 pb-3 text-[11px] text-gray-400 border-t border-white/5 pt-2">
                            {subService.services.length} service{subService.services.length > 1 ? 's' : ''} available • Tap to expand
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    )
  }

  // Mobile Resources Content
  const MobileResourcesContent = () => {
    return (
      <div className="space-y-3 pb-6">
        <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-white/15 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2.5 mb-1.5">
            <Library className="h-6 w-6 text-[#76bbf8]" />
            <h3 className="text-lg font-bold">Resources</h3>
          </div>
          <p className="text-gray-300 text-xs">Explore knowledge base, company insights & industry research</p>
        </div>

        {resourcesData.map((resource) => (
          <Link
            key={resource.name}
            href={resource.href}
            onClick={() => setIsOpen(false)}
            className="flex items-start gap-3.5 p-4 bg-[#141824] rounded-2xl border border-white/10 shadow-sm hover:border-blue-400/40 hover:bg-[#1a1f30] transition-all group"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500/15 border border-blue-400/20 rounded-xl flex items-center justify-center text-[#76bbf8] group-hover:scale-105 transition-transform">
              <resource.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">{resource.name}</h4>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{resource.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#76bbf8] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    )
  }

  // Mobile Digital Trust Content
  const MobileDigitalTrustContent = () => {
    return (
      <div className="space-y-3 pb-6">
        <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-white/15 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2.5 mb-1.5">
            <FileSignature className="h-6 w-6 text-[#76bbf8]" />
            <h3 className="text-lg font-bold">Digital Trust</h3>
          </div>
          <p className="text-gray-300 text-xs">Paperless solutions for e-sign, stamping and digital onboarding</p>
        </div>

        {digitalTrustData.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="flex items-start gap-3.5 p-4 bg-[#141824] rounded-2xl border border-white/10 shadow-sm hover:border-blue-400/40 hover:bg-[#1a1f30] transition-all group"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500/15 border border-blue-400/20 rounded-xl flex items-center justify-center text-[#76bbf8] group-hover:scale-105 transition-transform">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">{item.name}</h4>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{item.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-[#76bbf8] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out pointer-events-none">
      {/* Main Navigation Bar - Full width when at top, compact floating pill from logo to last button when scrolled down */}
      <div
        className={`mx-auto transition-all duration-300 ease-out pointer-events-auto ${isScrolled
          ? 'w-[94%] xl:w-auto xl:max-w-fit mt-2 sm:mt-2.5 bg-[#141824]/95 backdrop-blur-2xl border border-white/15 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.7)] ring-1 ring-white/10 px-4 sm:px-6 py-1.5 sm:py-2'
          : 'w-full bg-[#141824]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.4)] rounded-none px-4 sm:px-8 lg:px-12 py-0'
          }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${isScrolled
            ? 'gap-4 xl:gap-8 h-12 sm:h-13'
            : 'w-full max-w-[1600px] h-16 sm:h-17'
            }`}
        >
          {/* Left: DigitalRakshak Logo with Eagle Icon & crisp branding */}
          <Link
            href="/"
            className="relative flex items-center gap-2.5 shrink-0 group py-0.5"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/images/header-logo.png"
                alt="DigitalRakshak Logo"
                className={`w-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out ${isScrolled
                  ? 'h-6 sm:h-7'
                  : 'h-7 sm:h-8 lg:h-9'
                  }`}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <span className={`text-white font-bold tracking-tight transition-all duration-300 ${isScrolled
                  ? 'text-sm sm:text-base'
                  : 'text-sm sm:text-base lg:text-lg'
                  }`}>
                  DigitalRakshak
                </span>
                <span className="text-[10px] text-white/80 font-bold ml-0.5 -mt-1.5">™</span>
              </div>
              <span className={`text-[8px] sm:text-[9px] text-[#76bbf8] font-semibold tracking-wider uppercase -mt-0.5 hidden ${isScrolled ? 'md:block' : 'sm:block'}`}>
                SECURE | SWIFT | COMPLIANT
              </span>
            </div>
          </Link>

          {/* Center: Navigation Bar with same spacing & text across the unified header */}
          <nav
            ref={navRef}
            className={`hidden xl:flex items-center transition-all duration-300 ${isScrolled ? 'gap-3 xl:gap-5' : 'gap-4 xl:gap-6'}`}
          >
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group py-1"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        if (activeDropdown === item.name) {
                          setActiveDropdown(null)
                        } else {
                          handleMouseEnter(item.name)
                        }
                      }}
                      className={`font-medium transition-all duration-200 tracking-normal whitespace-nowrap relative group rounded-full flex items-center gap-1.5 ${isScrolled ? 'py-1 px-2.5 text-[13px] xl:text-[14px]' : 'py-1.5 px-3 text-[14px] xl:text-[15px]'} ${pathname.startsWith(item.href) || activeDropdown === item.name
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/[0.08]'
                        }`}
                    >
                      <span>{displayServicesName[item.name] || item.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-[#76bbf8]' : 'text-gray-400 group-hover:text-white'
                          }`}
                      />
                      <span
                        className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transition-all duration-300 rounded-full ${activeDropdown === item.name || pathname.startsWith(item.href)
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                      />
                    </button>

                    {/* Mega Menu / Popover Dropdown matching gst-verification-api dark glass aesthetic */}
                    {activeDropdown === item.name && (
                      <div
                        className={
                          item.name === "Resources" || item.name === "Digital Trust"
                            ? "absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-84 sm:w-96 max-w-[90vw] animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
                            : "fixed left-1/2 -translate-x-1/2 top-[62px] sm:top-[68px] z-50 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto w-[94vw] max-w-[1150px]"
                        }
                        onMouseEnter={() => {
                          if (hideTimeoutRef.current) {
                            clearTimeout(hideTimeoutRef.current)
                            hideTimeoutRef.current = null
                          }
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-[#0b0e18]/95 backdrop-blur-3xl border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85),_0_0_25px_rgba(59,130,246,0.15)] overflow-hidden">
                          {/* Glowing top accent strip */}
                          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#76bbf8]/60 to-transparent" />

                          {item.name === "Resources" || item.name === "Digital Trust" ? (
                            <div className="p-3 space-y-1">
                              <div className="px-3 py-2 border-b border-white/10 mb-1">
                                <p className="text-[11px] font-bold text-[#76bbf8] uppercase tracking-wider">
                                  {displayServicesName[item.name] || item.name}
                                </p>
                              </div>
                              {(item.dropDownMenu as ResourceItem[]).map((res) => (
                                <Link
                                  key={res.name}
                                  href={res.href}
                                  className="flex items-start gap-3 w-full rounded-xl p-2.5 hover:bg-white/[0.08] transition-all group/res"
                                  onClick={() => handleMouseLeave()}
                                >
                                  {res.icon && (
                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500/15 border border-blue-400/20 text-[#76bbf8] group-hover/res:scale-105 transition-transform">
                                      <res.icon className="h-4 w-4" />
                                    </div>
                                  )}
                                  <div className="min-w-0 flex-1">
                                    <span className="text-sm font-semibold text-white group-hover/res:text-blue-300 transition-colors block leading-tight">
                                      {res.name}
                                    </span>
                                    {res.description && (
                                      <span className="text-xs text-gray-400 group-hover/res:text-gray-300 transition-colors block mt-0.5 leading-snug">
                                        {res.description}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : item.name === "Services" ? (
                            <div className="flex">
                              {/* Left Sidebar - Service Categories */}
                              <div className="w-56 sm:w-60 shrink-0 border-r border-white/10 p-4 bg-white/[0.02]">
                                <div className="px-2 pb-2">
                                  <h3 className="text-[11px] font-bold text-[#76bbf8] uppercase tracking-wider mb-3 px-1">
                                    Services
                                  </h3>
                                  <div className="space-y-1">
                                    {servicesData.map((category) => (
                                      <button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${selectedCategory === category.name
                                          ? "bg-blue-500/20 text-white border-l-2 border-[#76bbf8] shadow-[inset_0_0_12px_rgba(59,130,246,0.2)]"
                                          : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                                          }`}
                                      >
                                        <span className="truncate">{category.name}</span>
                                        <ChevronRight
                                          className={`w-3.5 h-3.5 transition-transform ${selectedCategory === category.name
                                            ? "text-[#76bbf8] translate-x-0.5"
                                            : "text-gray-500 opacity-0 group-hover:opacity-100"
                                            }`}
                                        />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right Content - Service Products Grid */}
                              <div className="flex-1 p-5 sm:p-6 max-h-[580px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#2a3348_transparent]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {servicesData.map((mainService) => {
                                    if (mainService.name === selectedCategory) {
                                      return mainService.subservices.map((service, i) => (
                                        <Link
                                          key={service.name}
                                          href={service.href ?? '#'}
                                          className="cursor-pointer group relative p-4 rounded-xl bg-[#131624]/90 hover:bg-[#181c2d] border border-white/10 hover:border-blue-400/50 hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 min-h-[260px] flex flex-col justify-between"
                                          onClick={() => handleMouseLeave()}
                                        >
                                          <div className="flex flex-col h-full" key={i}>
                                            <div className="mb-3">
                                              <div className="flex items-start gap-3 mb-2">
                                                <div className="flex-shrink-0">
                                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] group-hover:scale-105 group-hover:bg-blue-500/25 transition-all">
                                                    <Shield className="h-4 w-4" />
                                                  </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                  <div className="flex items-center gap-2 flex-wrap">
                                                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors leading-tight">
                                                      {service.name}
                                                    </h4>
                                                    {service.isNew && (
                                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                                        New
                                                      </span>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="flex-grow">
                                              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mb-3 leading-relaxed">
                                                {service.description}
                                              </p>

                                              {service.services && service.services.length > 0 && (
                                                <div className="space-y-1.5 mb-3">
                                                  {(expandedCards.includes(service.name)
                                                    ? service.services
                                                    : service.services.slice(0, 4)
                                                  ).map((subItem, idx) => (
                                                    <div
                                                      key={idx}
                                                      onClick={(e) => {
                                                        e.preventDefault()
                                                        if (subItem.href) {
                                                          router.push(`${subItem.href}`)
                                                          handleMouseLeave()
                                                        }
                                                      }}
                                                      className="flex items-start gap-2 text-xs text-gray-300 hover:text-white cursor-pointer group/subitem py-0.5"
                                                    >
                                                      <div className="w-1.5 h-1.5 rounded-full bg-[#76bbf8] mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(118,187,248,0.8)]" />
                                                      <span className="line-clamp-1 flex items-center gap-1.5">
                                                        {subItem.name}
                                                        {subItem.isNew && (
                                                          <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-medium bg-red-500/20 text-red-300 border border-red-500/30">
                                                            New
                                                          </span>
                                                        )}
                                                      </span>
                                                    </div>
                                                  ))}

                                                  {service.services.length > 4 && (
                                                    <button
                                                      onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        toggleCard(service.name)
                                                      }}
                                                      className="pl-3 text-xs font-semibold text-[#76bbf8] hover:text-blue-300 transition-colors pt-1"
                                                    >
                                                      {expandedCards.includes(service.name)
                                                        ? "Show Less"
                                                        : `+${service.services.length - 4} more services`}
                                                    </button>
                                                  )}
                                                </div>
                                              )}
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-white/10 group-hover:border-blue-400/30 transition-colors">
                                              <span className="text-xs font-medium text-[#76bbf8] group-hover:text-blue-300">
                                                Learn more
                                              </span>
                                              <ArrowRight className="w-3.5 h-3.5 text-[#76bbf8] group-hover:text-blue-300 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                          </div>
                                        </Link>
                                      ))
                                    }
                                    return null
                                  })}
                                </div>
                              </div>
                            </div>
                          ) : item.name === "inhouseServices" ? (
                            <div className="flex">
                              {isDisplayMainServices?.name && (
                                <div className="w-56 sm:w-60 shrink-0 border-r border-white/10 p-4 bg-white/[0.02]">
                                  <div className="px-2 pb-2">
                                    <h3 className="text-[11px] font-bold text-[#76bbf8] uppercase tracking-wider mb-3 px-1">
                                      Inhouse Services
                                    </h3>
                                    <div className="space-y-1">
                                      {inHouseServicesData.map((category) => (
                                        <button
                                          key={category.name}
                                          onClick={() => setSelectedInhouseCategory(category.name)}
                                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${selectedInhouseCategory === category.name
                                            ? "bg-blue-500/20 text-white border-l-2 border-[#76bbf8] shadow-[inset_0_0_12px_rgba(59,130,246,0.2)]"
                                            : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                                            }`}
                                        >
                                          <span className="truncate">{category.name}</span>
                                          <ChevronRight
                                            className={`w-3.5 h-3.5 transition-transform ${selectedInhouseCategory === category.name
                                              ? "text-[#76bbf8] translate-x-0.5"
                                              : "text-gray-500 opacity-0 group-hover:opacity-100"
                                              }`}
                                          />
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div className="flex-1 p-5 sm:p-6 max-h-[580px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#2a3348_transparent]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {inHouseServicesData.map((mainService) => {
                                    if (mainService.name === selectedInhouseCategory) {
                                      return mainService.subservices.map((service, i) => (
                                        <Link
                                          key={service?.name}
                                          href={service?.href ?? '#'}
                                          onClick={() => handleMouseLeave()}
                                          className="cursor-pointer group relative p-4 rounded-xl bg-[#131624]/90 hover:bg-[#181c2d] border border-white/10 hover:border-blue-400/50 hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 min-h-[260px] flex flex-col justify-between"
                                        >
                                          <div className="flex flex-col h-full" key={i}>
                                            <div className="mb-3">
                                              <div className="flex items-start gap-3 mb-2">
                                                <div className="flex-shrink-0">
                                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 border border-blue-400/30 text-[#76bbf8] group-hover:scale-105 group-hover:bg-blue-500/25 transition-all">
                                                    <Shield className="h-4 w-4" />
                                                  </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                  <div className="flex items-center gap-2 flex-wrap">
                                                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors leading-tight">
                                                      {service.name}
                                                    </h4>
                                                    {service.isNew && (
                                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                                        New
                                                      </span>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="flex-grow">
                                              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mb-3 leading-relaxed">
                                                {service.description}
                                              </p>

                                              {service.services && service.services.length > 0 && (
                                                <div className="space-y-1.5 mb-3">
                                                  {(expandedCards.includes(service.name)
                                                    ? service.services
                                                    : service.services.slice(0, 4)
                                                  ).map((subItem, idx) => (
                                                    <div
                                                      key={idx}
                                                      onClick={(e) => {
                                                        e.preventDefault()
                                                        if (subItem.href) {
                                                          router.push(`${subItem.href}`)
                                                          handleMouseLeave()
                                                        }
                                                      }}
                                                      className="flex items-start gap-2 text-xs text-gray-300 hover:text-white cursor-pointer group/subitem py-0.5"
                                                    >
                                                      <div className="w-1.5 h-1.5 rounded-full bg-[#76bbf8] mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(118,187,248,0.8)]" />
                                                      <span className="line-clamp-1 flex items-center gap-1.5">
                                                        {subItem.name}
                                                        {subItem.isNew && (
                                                          <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-medium bg-red-500/20 text-red-300 border border-red-500/30">
                                                            New
                                                          </span>
                                                        )}
                                                      </span>
                                                    </div>
                                                  ))}

                                                  {service.services.length > 4 && (
                                                    <button
                                                      onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        toggleCard(service.name)
                                                      }}
                                                      className="pl-3 text-xs font-semibold text-[#76bbf8] hover:text-blue-300 transition-colors pt-1"
                                                    >
                                                      {expandedCards.includes(service.name)
                                                        ? "Show Less"
                                                        : `+${service.services.length - 4} more services`}
                                                    </button>
                                                  )}
                                                </div>
                                              )}
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-white/10 group-hover:border-blue-400/30 transition-colors">
                                              <span className="text-xs font-medium text-[#76bbf8] group-hover:text-blue-300">
                                                Learn more
                                              </span>
                                              <ArrowRight className="w-3.5 h-3.5 text-[#76bbf8] group-hover:text-blue-300 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                          </div>
                                        </Link>
                                      ))
                                    }
                                    return null
                                  })}
                                </div>
                              </div>
                            </div>
                          ) : item.name === "Industries" ? (
                            <div className="p-6">
                              <div className="grid grid-cols-3 gap-4">
                                {industriesList.map((ind) => (
                                  <Link
                                    key={ind.name}
                                    href={ind.href}
                                    onClick={() => handleMouseLeave()}
                                    className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/[0.08] transition-all group/ind"
                                  >
                                    <div className="flex-shrink-0 rounded-lg bg-blue-500/15 border border-blue-400/20 p-2 text-[#76bbf8] group-hover/ind:scale-105 transition-transform">
                                      <ind.icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-semibold text-white group-hover/ind:text-blue-300 transition-colors">
                                        {ind.name}
                                      </p>
                                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                                        {ind.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleMouseLeave()}
                    className={`font-medium transition-all duration-200 tracking-normal whitespace-nowrap relative group rounded-full flex items-center ${isScrolled ? 'py-1 px-2.5 text-[13px] xl:text-[14px]' : 'py-1.5 px-3 text-[14px] xl:text-[15px]'} ${pathname === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                  >
                    <span>{displayServicesName[item.name] || item.name}</span>
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transition-all duration-300 rounded-full ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Search, Accessibility & Contact US */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
            {/* Search Popover Trigger */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                title="Search Website"
                aria-label="Search Website"
                className={`p-2 rounded-full transition-all flex items-center justify-center ${isSearchOpen
                  ? "bg-blue-500/20 text-[#76bbf8] ring-1 ring-blue-400/40"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                <Search className="h-4 w-4 stroke-[2.2]" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 pointer-events-auto">
                  <form
                    onSubmit={handleSearchSubmit}
                    className="bg-[#10121a]/95 backdrop-blur-2xl rounded-full shadow-2xl border border-white/20 p-1 flex items-center w-72 sm:w-80 ring-2 ring-blue-500/30"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search DigitalRakshak..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-4 py-1.5 text-sm text-white focus:outline-none bg-transparent placeholder-gray-400 font-normal"
                    />
                    <button
                      type="submit"
                      title="Execute Search"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-3.5 py-1.5 rounded-full transition-all flex items-center justify-center shadow-sm"
                    >
                      <Search className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Accessibility Modal Trigger */}
            <button
              onClick={openModal}
              title="Accessibility Tools"
              aria-label="Accessibility Tools"
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <PersonStanding className="h-4 w-4" />
            </button>

            {/* Contact US Button */}
            <Link
              href="/register"
              className={`inline-flex items-center justify-center font-medium text-white transition-all duration-300 ease-out whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-sm ${isScrolled
                ? 'text-[13px] xl:text-[14px] px-4 sm:px-5 py-1.5'
                : 'text-[14px] px-5 sm:px-6 py-2'
                }`}
            >
              Contact US
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-gray-200 hover:text-white p-2 rounded-xl transition-all duration-300 ease-out bg-white/10 border border-white/15 backdrop-blur-md"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown matching gst-verification-api dark design */}
      {isOpen && (
        <div className="xl:hidden pointer-events-auto fixed inset-x-0 top-16 sm:top-18 bottom-0 bg-[#080a12]/95 backdrop-blur-2xl z-40 overflow-y-auto overflow-x-hidden p-3 sm:p-6 pb-20">
          <div className="max-w-[700px] mx-auto bg-[#10121a]/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* 5 Main Tabs */}
            <div className="bg-[#141824] border-b border-white/10 sticky top-0 z-10 p-1.5">
              <div className="grid grid-cols-5 gap-1 w-full">
                {[
                  { id: "Explore API", label: "API", icon: <Zap className="h-3.5 w-3.5" /> },
                  { id: "HR Excellence Suite", label: "BGV", icon: <Users className="h-3.5 w-3.5" /> },
                  { id: "Digital Trust", label: "Trust", fullLabel: "Digital Trust", icon: <FileSignature className="h-3.5 w-3.5" /> },
                  { id: "Pricing", label: "Pricing", icon: <Crown className="h-3.5 w-3.5" /> },
                  { id: "Resources", label: "Resources", icon: <Library className="h-3.5 w-3.5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.id === "Pricing") {
                        router.push('/pricing')
                        setIsOpen(false)
                      } else {
                        setMobileSelectedMainTab(tab.id)
                      }
                    }}
                    className={`w-full py-2 px-1 text-center font-medium transition-all relative flex flex-col items-center justify-center gap-1 rounded-xl ${mobileSelectedMainTab === tab.id
                      ? "bg-white/15 text-white shadow-sm ring-1 ring-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                  >
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold">
                      {tab.icon}
                      <span className="truncate">{tab.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 bg-[#0d101a] min-h-[300px]">
              {mobileSelectedMainTab === "Resources" ? (
                <MobileResourcesContent />
              ) : mobileSelectedMainTab === "Digital Trust" ? (
                <MobileDigitalTrustContent />
              ) : (
                <MobileServicesContent />
              )}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-white/10 bg-[#10121a] flex flex-col gap-2.5">
              <Link href="/register" className="w-full" onClick={() => setIsOpen(false)}>
                <button className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all text-sm">
                  Contact US
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}