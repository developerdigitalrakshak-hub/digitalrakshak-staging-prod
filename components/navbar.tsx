// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"

// import { ChevronDown, Menu, Shield, X, Users, Scale, Video, FileText, Award, MessageSquare, BookOpen, Search, Star, TrendingUp, Database, Cloud, Eye, UserCheck, GraduationCap, Briefcase, MapPin, ShieldCheck, AlertTriangle, FileCheck, Settings, Globe, Phone, HelpCircle, User } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
// import { useState, useRef, useEffect } from "react"

// // Type definitions
// interface ServiceItem {
//   name: string
//   description: string
//   href?: string
//   isNew?: boolean
// }

// interface SubService {
//   name: string
//   description: string
//   services: ServiceItem[]
//   href?: string
//   isNew?: boolean
// }

// interface MainService {
//   name: string
//   description: string
//   icon: string
//   isNew?: boolean
//   subservices: SubService[]
// }

// interface InHouseService {
//   name: string
//   description: string
//   icon: string
//   isNew?: boolean
//   isDisplay?: boolean
//   subservices: SubService[]
// }

// interface Industry {
//   name: string
//   href: string
//   icon: React.ElementType
//   description: string
// }

// interface ResourceItem {
//   name: string
//   href: string
//   icon: React.ElementType
//   description: string
// }

// interface NavigationItem {
//   name: string
//   href: string
//   hasDropdown: boolean
//   dropDownMenu: string[] | ResourceItem[]
//   icon: React.ElementType | null
//   description: string | null
// }

// interface SupportLink {
//   label: string
//   href: string
// }

// interface AccountLink {
//   label: string
//   href: string
// }

// interface LanguageConfig {
//   [key: string]: {
//     flag: string
//     locale: string
//   }
// }

// export default function Bar() {
//   const languageConfig: LanguageConfig = {
//     "العربية": { flag: "🇸🇦", locale: "ar" },
//     "Bahasa Indonesia": { flag: "🇮🇩", locale: "id" },
//     "Deutsch": { flag: "🇩🇪", locale: "de" },
//     "English": { flag: "🇬🇧", locale: "en" },
//     "Español": { flag: "🇪🇸", locale: "es" },
//     "Français": { flag: "🇫🇷", locale: "fr" },
//     "Italiano": { flag: "🇮🇹", locale: "it" },
//     "Português": { flag: "🇧🇷", locale: "pt" },
//     "Tiếng Việt": { flag: "🇻🇳", locale: "vi" },
//     "Türkçe": { flag: "🇹🇷", locale: "tr" },
//     "Русский": { flag: "🇷🇺", locale: "ru" },
//     "ไทย": { flag: "🇹🇭", locale: "th" },
//     "日本語": { flag: "🇯🇵", locale: "ja" },
//     "한국어": { flag: "🇰🇷", locale: "ko" },
//     "中文 (简体)": { flag: "🇨🇳", locale: "zh" },
//     "中文 (繁體)": { flag: "🇹🇼", locale: "zh-TW" },
//   }

//   const detectLanguageFromBrowser = (): string => {
//     const saved = typeof window !== "undefined" ? localStorage.getItem("preferred-language") : null
//     if (saved && languageConfig[saved]) return saved

//     const browserLocale = (typeof navigator !== "undefined" ? navigator.language : "en").toLowerCase()
//     const match = Object.entries(languageConfig).find(([, cfg]) =>
//       browserLocale.startsWith(cfg.locale.toLowerCase())
//     )
//     return match ? match[0] : "English"
//   }

//   const router = useRouter()
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [selectedCategory, setSelectedCategory] = useState<string>("ID & e-KYC Data Stack")
//   const [selectedInhouseCategory, setSelectedInhouseCategory] = useState<string>("HR Excellence Suite")
//   const [selectedDigitalTransformationCategory, setSelectedDigitalTransformationCategory] = useState<string>("Digital Transformation")
//   const [selectedLang, setSelectedLang] = useState<string>(() => {
//     if (typeof window === "undefined") return "English"
//     return detectLanguageFromBrowser()
//   })

//   const [activeUtilityDropdown, setActiveUtilityDropdown] = useState<string | null>(null)
//   const [expandedCards, setExpandedCards] = useState<string[]>([])

//   const utilityDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
//   const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

//   const handleDropdownToggle = (itemName: string) => {
//     setActiveDropdown(activeDropdown === itemName ? null : itemName)
//     if (itemName === "Services") {
//       setSelectedCategory("Identity & KYC")
//     }
//   }

//   const handleMouseEnter = (itemName: string) => {
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current)
//       hideTimeoutRef.current = null
//     }
//     setActiveDropdown(itemName)
//     if (itemName === "Services") {
//       setSelectedCategory("ID & e-KYC Data Stack")
//     }
//   }

//   const handleMouseLeave = () => {
//     hideTimeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null)
//     }, 200)
//   }

//   useEffect(() => {
//     return () => {
//       if (hideTimeoutRef.current) {
//         clearTimeout(hideTimeoutRef.current)
//       }
//     }
//   }, [])

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (activeUtilityDropdown) {
//         const currentRef = utilityDropdownRefs.current[activeUtilityDropdown]
//         if (currentRef && !currentRef.contains(event.target as Node)) {
//           setActiveUtilityDropdown(null)
//         }
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [activeUtilityDropdown])

//   const toggleUtilityDropdown = (dropdownName: string) => {
//     if (activeUtilityDropdown === dropdownName) {
//       setActiveUtilityDropdown(null)
//     } else {
//       setActiveUtilityDropdown(dropdownName)
//     }
//   }

//   const languages = [
//     "العربية",
//     "Bahasa Indonesia",
//     "Deutsch",
//     "English",
//     "Español",
//     "Français",
//     "Italiano",
//     "Português",
//     "Tiếng Việt",
//     "Türkçe",
//     "Русский",
//     "ไทย",
//     "日本語",
//     "한국어",
//     "中文 (简体)",
//     "中文 (繁體)",
//   ]

//   const supportLinks: SupportLink[] = [
//     { label: "Support Center", href: "/support-center" },
//     { label: "Expert Help", href: "/expert-help" },
//     { label: "Knowledge Center", href: "/knowledge-center" },
//     { label: "Support Overview", href: "/support-overview" },
//   ]

//   const accountLinks: AccountLink[] = [
//     { label: "Account Management Console", href: "/console" },
//     { label: "Account Settings", href: "/account-settings" },
//     { label: "Billing & Cost Management", href: "/billing" },
//     { label: "Security Credentials", href: "/security-credentials" },
//     { label: "Personal Health Dashboard", href: "/health-dashboard" },
//   ]

//   const servicesCategories = [
//     "Identity & KYC",
//     "Vehicle & Transportation",
//     "Financial & Banking",
//     "Government & Compliance",
//     "Utility & Address Verification",
//     "Business & Professional",
//     "Document & Security",
//     "HR Excellence Suite",
//     "Digital Transformation (Dx)"
//   ]

//   const servicesData: MainService[] = [
//     {
//       name: 'ID & e-KYC Data Stack',
//       description: 'Complete digital identity and KYC solutions',
//       icon: '🔐',
//       subservices: [
//         {
//           name: 'e-KYC Onboarding',
//           description: 'Seamless digital onboarding with document access',
//           services: [
//             { name: 'Access Digi-Locker', description: 'Access digital documents' },
//             { name: 'Aadhar', description: 'Aadhar verification' },
//             { name: 'PAN', description: 'PAN verification' }
//           ]
//         },
//         {
//           name: 'Security/Auth',
//           description: 'Advanced security and authentication services',
//           services: [
//             { name: 'Face Match', description: 'Biometric face matching' },
//             { name: 'Liveness Check', description: 'Anti-spoofing liveness verification' },
//             { name: 'KYC - OCR', href: '/kyc-ocr', description: 'Optical character recognition for KYC', isNew: true },
//             { name: 'Email / Mobile Verification', href: '/email-and-mobile-verification', description: 'Channel verification', isNew: true },
//             { name: 'Email Fraud Check', description: 'Detect email fraud' },
//             { name: 'Mobile No. Revocation List (MNRL)', description: 'Check mobile revocation' }
//           ]
//         },
//         {
//           name: 'Identity Verification',
//           description: 'Verify multiple identity documents',
//           services: [
//             { name: 'Aadhar Card', description: 'Aadhar verification' },
//             { name: 'PAN Card', description: 'PAN verification' },
//             { name: 'Passport', description: 'Passport verification' },
//             { name: 'Voter ID', description: 'Voter ID verification' },
//             { name: 'Ration Card Details', description: 'Ration card verification' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Document Intelligence',
//       description: 'Advanced document verification and validation',
//       icon: '📄',
//       subservices: [
//         {
//           name: 'Due Diligence',
//           description: 'Comprehensive verification and validation',
//           services: [
//             { name: 'Name Match', description: 'Verify name consistency' },
//             { name: 'Address Match', description: 'Address verification' },
//             { name: 'Address Split', description: 'Parse address components' },
//             { name: 'Geo Fencing', href: '/geo-fencing', description: 'Geographic boundary verification', isNew: true },
//             { name: 'Reverse GeoCodes', href: '/reverse-geocodes', description: 'Reverse geocoding services', isNew: true },
//             { name: 'Property Tax Verification', description: 'Property tax records check' },
//             // { name: 'Driving Licence (DL)', description: 'DL verification' },
//             // { name: 'Vehicle RC Verification', description: 'RC verification' },
//             // { name: 'Fast Tag Verification', description: 'FASTag verification' },
//             // { name: 'FASTTAG Last Location', description: 'FASTag location tracking' },
//             { name: 'Electricity Bill Verify', description: 'Electricity bill verification' },
//             { name: 'LPG ID Verification', description: 'LPG ID check' },
//             { name: 'PNG Verification', description: 'PNG verification' }
//           ]
//         },

//       ]
//     },
//     {
//       name: 'Crime & Background Verification',
//       description: 'Comprehensive background and criminal record checks',
//       icon: '🛡️',
//       subservices: [

//         {
//           name: 'Crime / Court Records Check',
//           description: 'Criminal and court record verification',
//           services: [
//             { name: 'e-FIR Check', description: 'Electronic FIR check' },
//             { name: 'National Criminal DB Check', description: 'National criminal database' },
//             { name: 'Police Verification', description: 'Police records check' },
//             { name: 'State Criminal Database', description: 'State criminal records' },
//             { name: 'e-Court (Criminal/Civil)', description: 'e-Court records' },
//             { name: 'Supreme / High Court Litigation', description: 'Supreme court check' },
//             { name: 'District Court Record Search', description: 'District court records' },
//             { name: 'Magistrate Court Search', description: 'Magistrate court records' },
//             { name: 'Court/Criminal Record via Law Firm', description: 'Legal firm verification' },
//             { name: 'Sex Offender Registry Check', description: 'National registry check' },
//             { name: 'NCLT DB Check', description: 'NCLT database check' }
//           ]
//         },
//         {
//           name: 'Forgery Detection',
//           description: 'Advanced forgery and fraud detection',
//           services: [
//             { name: 'Global DB - Negative Media Check', description: 'Global database screening' },
//             { name: 'Advance Forgery Check', description: 'Advanced forgery detection' },
//             { name: 'IP Quality Check', description: 'IP reputation check' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Business & ID Stack',
//       description: '',
//       icon: '🛡️',
//       subservices: [
//         {
//           name: 'Membership Verification',
//           description: 'Professional membership verification',
//           services: [
//             { name: 'CA - Chartered Accountant', description: 'Verify CA membership' },
//             { name: 'ICSI - Institute of Company Secretaries', description: 'Verify ICSI membership' },
//             { name: 'ICWAI - Institute of Cost Accountants', description: 'Verify ICWAI membership' }
//           ]
//         },
//         {
//           name: 'Business Verification',
//           description: 'Comprehensive business entity verification',
//           href: '/business-verification',
//           isNew: true,
//           services: [
//             { name: 'Company & LLP Check', description: 'Company and LLP verification' },
//             { name: 'PAN Verify', description: 'Business PAN verification' },
//             { name: 'TAN Verify', description: 'TAN verification' },
//             { name: 'TIN Verify', description: 'TIN verification' },
//             { name: 'GSTIN Verify', description: 'GST registration verification' },
//             { name: 'Import / Export Certificate', description: 'Import/export verification' },
//             { name: 'Shop & Establishment', href: '/shop-establishment', description: 'Shop registration verification', isNew: true },
//             { name: 'MSME / Udyam', description: 'MSME registration check' },
//             { name: 'EPFO Establishment Search', description: 'EPFO verification' }
//           ]
//         },
//         {
//           name: 'GST Verification',
//           description: 'KPI for GST online verification',
//           services: [
//             { name: 'Prevent Fraudulent Invoices', description: 'Company and LLP verification' },
//             { name: 'Ensure Input Tax Credit (ITC) Compliance', description: 'Business PAN verification' },
//             { name: 'Enhance Audit Preparedness', description: 'TAN verification' },
//             { name: 'Reduce Administrative Errors', description: 'TIN verification' },
//             { name: 'Build Vendor Transparency and Business Trust', description: 'GST registration verification' },
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Employment Check',
//       description: '',
//       icon: '🛡️',
//       subservices: [
//         {
//           name: 'Employment BGV',
//           description: 'Employment background verification',
//           services: [
//             { name: 'EPF Employee Name Search', description: 'Search EPF records' },
//             { name: 'EPF UAN Validation', href: '/uan-validation', description: 'Validate UAN number', isNew: true },
//             { name: 'EPF Records Check', description: 'Check EPF history' },
//             { name: 'Single Record - Last Comp', description: 'Last company record' }
//           ]
//         },

//       ]
//     },
//     {
//       name: 'Education Check',
//       description: '',
//       icon: '🛡️',
//       subservices: [
//         {
//           name: 'Education BGV',
//           description: 'Education verification',
//           services: [
//             { name: 'SSC', description: 'Verify SSC' },
//             { name: 'HSC', description: 'Verify HSC' },
//             { name: 'Graduate', description: 'Verify graduation' },
//             { name: 'Post Graduate', description: 'Verify post-graduation' },
//             { name: 'PhD', description: 'Verify doctoral degree' }
//           ]
//         },

//       ]
//     },
//     {
//       name: 'Banking Due Diligence',
//       description: '',
//       icon: '🛡️',
//       subservices: [
//         {
//           name: 'Financial Verification',
//           description: 'Financial records and history verification',
//           services: [
//             { name: 'Bank Account Verification', description: 'Bank account validation' },
//             { name: 'Compensation Verification', description: 'Verify via bank statement' },
//             { name: 'IFSC Check', description: 'IFSC code verification' },
//             { name: 'Income Tax Return - ITR', description: 'ITR verification' },
//             { name: 'Credit / CIBIL History', description: 'Credit history check' },
//             { name: 'Digital Media Forensic', description: 'Digital forensics' },
//             { name: 'Social Media & Reputation', description: 'Social media screening' },
//             { name: 'Cheque Verify', description: 'Cheque verification' },
//             { name: 'OCR - Intelligent Doc Processing', description: 'Document OCR' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'Trace Automobile',
//       description: '',
//       icon: '🛡️',
//       subservices: [
//         {
//           name: 'Vehicle & Transportation',
//           description: 'Automobile verification and Tracking',
//           services: [
//             { name: 'Driving Licence (DL)', description: 'DL verification' },
//             { name: 'Vehicle RC Verification', description: 'RC verification' },
//             { name: 'Fast Tag Verification', description: 'FASTag verification' },
//             { name: 'FASTTAG Last Location', description: 'FASTag location tracking' },
//           ]
//         }
//       ]
//     },
//   ]

//   const inHouseServicesData: InHouseService[] = [
//     {
//       name: 'HR Excellence Suite',
//       isDisplay: false,
//       description: 'Complete HR and employee management solutions',
//       icon: '👥',
//       subservices: [
//         {
//           name: 'Employment 360',
//           description: 'End-to-end recruitment and onboarding',
//           services: [
//             { name: 'Technical Recruitment', description: 'Technical talent recruitment' },
//             { name: 'ATS Ready Resume/CV', description: 'Resume parsing' },
//             { name: 'On-boarding', description: 'Employee onboarding' },
//             { name: 'Off-boarding / FnF', description: 'Employee exit management' },
//             { name: 'Training / Webinars / Seminars', description: 'Training programs' }
//           ]
//         },
//         {
//           name: 'Employee BGV',
//           description: 'Employee background verification',
//           services: [
//             { name: 'Employee Verification', description: 'Complete employee screening' },
//             { name: 'ID & BGV', description: 'ID and background verification' },
//             { name: 'Education', description: 'Educational Qualifications' },
//             { name: 'Employment', description: 'Employment History' },
//             { name: 'Physical Address', description: 'Physical Address Verification' }
//           ]
//         },
//         {
//           name: 'Managed Services',
//           description: 'Outsourced HR and compliance services',
//           services: [
//             { name: 'EPFO', description: 'Employee provident fund' },
//             { name: 'ESIC', description: 'Employee state insurance' },
//             { name: 'TDS', description: 'Tax deducted at source' },
//             { name: 'Professional Tax (PT)', description: 'Professional tax management' },
//             { name: 'Employment & Labour Dept', description: 'Government assistance' },
//             { name: 'ITR-1 (Sahaj) Assistance', description: 'ITR filing assistance' },
//             { name: 'Cloud HR Tools', description: 'HR software solutions' },
//             { name: 'Biometric Device / Data', description: 'Biometric solutions' }
//           ]
//         }
//       ]
//     },
//   ]

//   const digitalTransformationData: InHouseService[] = [
//     {
//       name: 'Digital Transformation',
//       description: 'Modern tech solutions and security services',
//       icon: '🚀',
//       subservices: [
//         {
//           name: 'AI / ML',
//           description: 'Artificial intelligence solutions',
//           services: [
//             { name: 'Agents as a Service', description: 'AI agent deployment' }
//           ]
//         },
//         {
//           name: 'Web Application Development',
//           href: '/web-application-development',
//           description: 'Web application development services',
//           services: [
//             { name: 'FrontEnd', description: 'Frontend development' },
//             { name: 'Backend', description: 'Backend development' },
//             { name: 'Integration', description: 'System integration' },
//             { name: 'Database', description: 'Database management' },
//             { name: 'Cloud', description: 'Cloud services' }
//           ]
//         },
//         {
//           name: 'Cybersecurity',
//           description: 'Security and threat management',
//           services: [
//             { name: 'VAPT Service', description: 'Vulnerability assessment' },
//             { name: 'SOC', description: 'Security operations center' }
//           ]
//         },
//         {
//           name: 'License / Certification',
//           description: 'Compliance certifications',
//           services: [
//             { name: 'ISO 9001', description: 'Quality management' },
//             { name: 'ISO 27001', description: 'Information security' },
//             { name: 'SOC - 1 & 2', description: 'Service organization control' },
//             { name: 'GDPR Policy', description: 'GDPR compliance' },
//             { name: 'DPDA Act', description: 'Data protection compliance' },
//             { name: 'E-Waste Management', description: 'E-waste certification' }
//           ]
//         }
//       ]
//     }
//   ]

//   const industriesList: Industry[] = [
//     {
//       name: "Banks",
//       href: "/industries/banks",
//       icon: Briefcase,
//       description: "KYC, AML and fraud prevention for banking.",
//     },
//     { name: "NBFCs", href: "/industries/nbfcs", icon: Scale, description: "Faster onboarding and loan risk checks." },
//     { name: "Gaming", href: "/industries/gaming", icon: Video, description: "Player KYC and anti-cheat verification." },
//     {
//       name: "Crypto",
//       href: "/industries/crypto",
//       icon: ShieldCheck,
//       description: "Compliance-first onboarding for VASPs.",
//     },
//     {
//       name: "EdTech",
//       href: "/industries/edtech",
//       icon: GraduationCap,
//       description: "Learner/teacher verification and proctoring.",
//     },
//     {
//       name: "Insurance",
//       href: "/industries/insurance",
//       icon: Shield,
//       description: "Fraud reduction and policyholder KYC.",
//     },
//     {
//       name: "Marketplace",
//       href: "/industries/marketplace",
//       icon: Users,
//       description: "Seller/buyer verification at scale.",
//     },
//     {
//       name: "Logistics & Ecommerce",
//       href: "/industries/logistics-ecommerce",
//       icon: MapPin,
//       description: "Courier/warehouse workforce screening.",
//     },
//     {
//       name: "Securities & Brokerages",
//       href: "/industries/securities-brokerages",
//       icon: TrendingUp,
//       description: "SEBI-compliant investor onboarding.",
//     },
//   ]

//   const displayServicesName: { [key: string]: string } = {
//     "Services": 'Explore API',
//     "inhouseServices": 'HR Excellence Suite',
//     digitalTransformation: 'Digital Transformation (Dx)',
//     Industries: 'Industries',
//     Pricing: 'Pricing',
//     Resources: 'Resources'
//   }

//   const navigation: NavigationItem[] = [
//     {
//       name: "Services",
//       href: "/services",
//       hasDropdown: true,
//       dropDownMenu: servicesCategories,
//       icon: Users,
//       description: "Comprehensive verification and background screening services",
//     },
//     {
//       name: "inhouseServices",
//       href: "/services",
//       hasDropdown: true,
//       dropDownMenu: servicesCategories,
//       icon: Users,
//       description: "Comprehensive verification and background screening services",
//     },
//     {
//       name: "digitalTransformation",
//       href: "/services",
//       hasDropdown: true,
//       dropDownMenu: servicesCategories,
//       icon: Users,
//       description: "Comprehensive verification and background screening services",
//     },
//     // {
//     //   name: "Industries",
//     //   href: "/industries",
//     //   hasDropdown: true,
//     //   dropDownMenu: [],
//     //   icon: Briefcase,
//     //   description: "Tailored solutions for various industries and sectors",
//     // },
//     // {
//     //   name: "Pricing",
//     //   href: "/pricing",
//     //   hasDropdown: false,
//     //   icon: null,
//     //   description: null,
//     //   dropDownMenu: []
//     // },
//     {
//       name: "Resources",
//       href: "/resources",
//       hasDropdown: true,
//       dropDownMenu: [
//         {
//           name: "Academy",
//           href: "/resources/academy",
//           icon: BookOpen,
//           description: "Learn about background verification and compliance",
//         },
//         {
//           name: "Blog",
//           href: "/resources/blog",
//           icon: BookOpen,
//           description: "Stay up-to-date with the latest industry news",
//         },
//         {
//           name: "Glossary",
//           href: "/resources/glossary",
//           icon: MessageSquare,
//           description: "Understand key terms and concepts in background verification",
//         },
//         {
//           name: "About Us",
//           href: "/resources/about-us",
//           icon: FileText,
//           description: "Learn more about our company and our mission",
//         },
//       ],
//       icon: null,
//       description: null
//     },
//   ]

//   const isDisplayMainServices = inHouseServicesData?.find(service => service?.isDisplay == true)
//   const isDisplayDigitalTransformationDataServices = digitalTransformationData?.find(service => service?.isDisplay == true)

//   const toggleCard = (cardName: string) => {
//     setExpandedCards((prev) =>
//       prev.includes(cardName)
//         ? prev.filter((item) => item !== cardName)
//         : [...prev, cardName]
//     )
//   }

//   return (
//     <div className="bg-white shadow-lg sticky top-0 z-50">
//       {/* Top Utility Bar */}
//       <div className="bg-gray-800 text-white text-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-end items-center h-10">
//             <div className="flex items-center space-x-6">
//               {/* Language Dropdown */}
//               <div
//                 className="relative"
//                 ref={(el) => { utilityDropdownRefs.current['language'] = el }}
//               >
//                 <div
//                   className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
//                   onClick={() => toggleUtilityDropdown('language')}
//                 >
//                   <span className="text-base leading-none" aria-label={selectedLang}>
//                     {languageConfig[selectedLang]?.flag ?? "🌐"}
//                   </span>
//                   <span>{selectedLang}</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </div>

//                 {activeUtilityDropdown === 'language' && (
//                   <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
//                     <ul className="max-h-64 overflow-y-auto">
//                       {languages.map((lang) => (
//                         <li
//                           key={lang}
//                           className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2 ${lang === selectedLang ? "bg-gray-100 font-semibold" : ""
//                             }`}
//                           onClick={() => {
//                             setSelectedLang(lang)
//                             setActiveUtilityDropdown(null)
//                           }}
//                         >
//                           <span>{languageConfig[lang]?.flag}</span>
//                           <span className="flex-1">{lang}</span>
//                           {lang === selectedLang && (
//                             <span className="text-blue-500 text-xs">✓</span>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="border-t px-4 py-3 space-y-2">
//                       <button
//                         className="w-full text-sm text-center bg-blue-600 text-white rounded-md py-1.5 hover:bg-blue-700 transition-colors"
//                         onClick={() => {
//                           localStorage.setItem("preferred-language", selectedLang)
//                           setActiveUtilityDropdown(null)
//                         }}
//                       >
//                         Set as default language
//                       </button>
//                       <button
//                         className="w-full text-xs text-center text-gray-500 hover:text-red-500 transition-colors"
//                         onClick={() => {
//                           localStorage.removeItem("preferred-language")
//                           setActiveUtilityDropdown(null)
//                         }}
//                       >
//                         Clear saved preference
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Contact */}
//               <Link
//                 href="/contact"
//                 className="hover:text-blue-300 transition-colors flex items-center space-x-1"
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact us</span>
//               </Link>

//               {/* Support Dropdown */}
//               <div
//                 className="relative"
//                 ref={(el) => { utilityDropdownRefs.current['support'] = el }}
//               >
//                 <div
//                   className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
//                   onClick={() => toggleUtilityDropdown('support')}
//                 >
//                   <HelpCircle className="h-4 w-4" />
//                   <span>Support</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </div>

//                 {activeUtilityDropdown === 'support' && (
//                   <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
//                     <ul>
//                       {supportLinks.map((item) => (
//                         <li key={item.label}>
//                           <Link
//                             href={item.href}
//                             className="block px-4 py-2 hover:bg-gray-100"
//                             onClick={() => setActiveUtilityDropdown(null)}
//                           >
//                             {item.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* My Account Dropdown */}
//               <div
//                 className="relative"
//                 ref={(el) => { utilityDropdownRefs.current['account'] = el }}
//               >
//                 <div
//                   className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
//                   onClick={() => toggleUtilityDropdown('account')}
//                 >
//                   <User className="h-4 w-4" />
//                   <span>My account</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </div>

//                 {activeUtilityDropdown === 'account' && (
//                   <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
//                     <ul>
//                       {accountLinks.map((item) => (
//                         <li key={item.label}>
//                           <Link
//                             href={item.href}
//                             className="block px-4 py-2 hover:bg-gray-100"
//                             onClick={() => setActiveUtilityDropdown(null)}
//                           >
//                             {item.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               {/* Avatar Profile Popup */}
//               <div
//                 className="relative"
//                 ref={(el) => { utilityDropdownRefs.current['profile'] = el }}
//               >
//                 <div
//                   className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center ml-4 cursor-pointer"
//                   onClick={() => toggleUtilityDropdown('profile')}
//                 >
//                   <User className="h-4 w-4" />
//                 </div>

//                 {activeUtilityDropdown === 'profile' && (
//                   <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded shadow-lg p-4 z-50">
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="font-semibold">Profile</h3>
//                       <button onClick={() => setActiveUtilityDropdown(null)}>
//                         <X className="h-4 w-4 text-gray-500 hover:text-black" />
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4">
//                       Your profile helps improve your interactions with select experiences.
//                     </p>
//                     {/* Buttons */}
//                     <div className="flex space-x-3">
//                       <Link href="/login">
//                         <button
//                           className="px-4 py-2 border rounded-full hover:bg-gray-100"
//                           onClick={() => setActiveUtilityDropdown(null)}
//                         >
//                           Log in
//                         </button>
//                       </Link>
//                       <Link href="/contact">
//                         <button
//                           className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
//                           onClick={() => setActiveUtilityDropdown(null)}
//                         >
//                           Create profile
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="bg-white border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-3">
//               <div className="relative">
//                 {/* <Shield className="h-10 w-10 text-blue-600" />
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                 </div> */}
//                 <Image src="/images/logo-without-tagline.jpg" alt="DigitalRakshak Logo" width={65} height={65} />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xl font-bold text-gray-900">DigitalRakshak</span>
//                 <span className="text-xs text-blue-600 font-medium">SECURE | SWIFT | COMPLIANT</span>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden xl:flex items-center space-x-3">
//               {navigation.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative group"
//                   onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
//                   onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
//                 >
//                   {item.hasDropdown ? (
//                     <div>
//                       <button
//                         className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 ${pathname.startsWith(item.href)
//                           ? "text-blue-600 border-b-2 border-blue-600"
//                           : ""
//                           }`}
//                       >
//                         <span>{displayServicesName[item.name]}</span>
//                         <ChevronDown className="h-4 w-4" />
//                       </button>

//                       {activeDropdown === item.name && (
//                         <div
//                           className={`absolute top-full left-0 mt-0 bg-white rounded-b-xl shadow-2xl border border-gray-100 z-50 max-h-[1100px] overflow-visible ${item.name === "Resources" ? "w-64" : item.name === "Services" ? "w-[1100px]" : "w-[1000px]"
//                             }`}
//                           style={{
//                             boxShadow:
//                               "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                             left: item.name === "Resources" ? "0" : "-400px",
//                           }}
//                         >
//                           <div className="flex">
//                             {/* Main Content */}
//                             <div className="flex-1 p-6">
//                               {item.name === "Industries" ? (
//                                 <div className="grid grid-cols-3 gap-6">
//                                   {industriesList.map((ind) => (
//                                     <Link
//                                       key={ind.name}
//                                       href={ind.href}
//                                       onClick={() => handleMouseLeave()}
//                                       className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50 transition-colors"
//                                     >
//                                       <div className="flex-shrink-0 rounded-full bg-blue-100 p-2">
//                                         <ind.icon className="h-5 w-5 text-blue-600" />
//                                       </div>
//                                       <div className="min-w-0">
//                                         <p className="text-sm font-semibold text-gray-900">
//                                           {ind.name}
//                                         </p>
//                                         <p className="text-sm text-gray-600">
//                                           {ind.description}
//                                         </p>
//                                       </div>
//                                     </Link>
//                                   ))}
//                                 </div>
//                               ) : item.name === "Resources" ? (
//                                 <div className="flex flex-col gap-2 w-full p-2">
//                                   {(item.dropDownMenu as ResourceItem[]).map((res) => (
//                                     <Link
//                                       key={res.name}
//                                       href={res.href}
//                                       className="flex items-center gap-3 w-full rounded-md px-3 py-2 hover:bg-gray-50 transition-colors"
//                                       onClick={() => handleMouseLeave()}
//                                     >
//                                       {res.icon && (
//                                         <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
//                                           <res.icon className="h-5 w-5 text-blue-600" />
//                                         </div>
//                                       )}
//                                       <span className="text-sm font-semibold text-gray-900">
//                                         {res.name}
//                                       </span>
//                                     </Link>
//                                   ))}
//                                 </div>
//                               ) : item.name === "Services" ? (
//                                 <div className="flex">
//                                   {/* Left Sidebar - Service Categories */}
//                                   <div className="w-56 border-r border-gray-200 py-4">
//                                     <div className="px-4 pb-4">
//                                       <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Services</h3>
//                                       <div className="space-y-1">
//                                         {servicesData.map((category) => (
//                                           <button
//                                             key={category.name}
//                                             onClick={() => setSelectedCategory(category.name)}
//                                             className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedCategory === category.name
//                                               ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
//                                               : "text-gray-700 hover:bg-gray-50"
//                                               }`}
//                                           >
//                                             {category.name}
//                                           </button>
//                                         ))}
//                                         <button
//                                           onClick={() => {
//                                             router.push(`/pricing`)
//                                             handleMouseLeave()
//                                           }}
//                                           className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all bg-[#FEE2E2] text-[#DC2626] border-l-2 border-[#DC2626]`}
//                                         >
//                                           Pricing
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>

//                                   {/* Right Content - Service Products Grid */}
//                                   <div className="flex-1 p-6">
//                                     <div className="grid grid-cols-3 gap-4">
//                                       {servicesData.map((mainService) => {
//                                         if (mainService.name === selectedCategory) {
//                                           return mainService.subservices.map((service, i) => {
//                                             return (
//                                               <Link
//                                                 key={service.name}
//                                                 href={service.href ?? '#'}
//                                                 className="cursor-pointer group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent min-h-[260px] flex flex-col"
//                                                 onClick={() => handleMouseLeave()}
//                                               >
//                                                 <div className="flex flex-col h-full" key={i}>
//                                                   <div className="mb-3">
//                                                     <div className="flex items-start gap-3 mb-2">
//                                                       <div className="flex-shrink-0">
//                                                         <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
//                                                           <Shield className="h-4 w-4 text-blue-600" />
//                                                         </div>
//                                                       </div>
//                                                       <div className="flex-1 min-w-0">
//                                                         <div className="flex items-center gap-2 flex-wrap">
//                                                           <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
//                                                             {service.name}
//                                                           </h4>
//                                                           {/* New Tag for main service */}
//                                                           {service.isNew && (
//                                                             <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
//                                                               New
//                                                             </span>
//                                                           )}
//                                                         </div>
//                                                       </div>
//                                                     </div>
//                                                   </div>

//                                                   <div className="flex-grow">
//                                                     <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
//                                                       {service.description}
//                                                     </p>

//                                                     {service.services && service.services.length > 0 && (
//                                                       <div className="space-y-2 mb-4">
//                                                         {(expandedCards.includes(service.name)
//                                                           ? service.services
//                                                           : service.services.slice(0, 4)
//                                                         ).map((subItem, idx) => (
//                                                           <div
//                                                             key={idx}
//                                                             onClick={(e) => {
//                                                               e.preventDefault()
//                                                               if (subItem.href) {
//                                                                 router.push(`${subItem.href}`)
//                                                                 handleMouseLeave()
//                                                               }
//                                                             }}
//                                                             className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer hover:text-blue-600 group/subitem"
//                                                           >
//                                                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
//                                                             <span className="line-clamp-1 flex items-center gap-1.5">
//                                                               {subItem.name}
//                                                               {/* New Tag for sub-service */}
//                                                               {subItem.isNew && (
//                                                                 <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 text-[10px]">
//                                                                   New
//                                                                 </span>
//                                                               )}
//                                                             </span>
//                                                           </div>
//                                                         ))}

//                                                         {service.services.length > 4 && (
//                                                           <button
//                                                             onClick={(e) => {
//                                                               e.preventDefault()
//                                                               e.stopPropagation()
//                                                               toggleCard(service.name)
//                                                             }}
//                                                             className="pl-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
//                                                           >
//                                                             {expandedCards.includes(service.name)
//                                                               ? "Show Less"
//                                                               : `+${service.services.length - 4} more services`}
//                                                           </button>
//                                                         )}
//                                                       </div>
//                                                     )}
//                                                   </div>

//                                                   <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
//                                                     <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700">Learn more</span>
//                                                     <div className="text-blue-600 group-hover:translate-x-0.5 transition-transform">
//                                                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                       </svg>
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                               </Link>
//                                             )
//                                           })
//                                         }
//                                         return null
//                                       })}
//                                     </div>
//                                   </div>
//                                 </div>
//                               ) : item.name === "inhouseServices" ? (
//                                 <div className="flex">
//                                   {
//                                     isDisplayMainServices?.name && (
//                                       <div className="w-56 border-r border-gray-200 py-4">
//                                         <div className="px-4 pb-4">
//                                           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Inhouse Services</h3>
//                                           <div className="space-y-1">
//                                             {inHouseServicesData.map((category) => (
//                                               <button
//                                                 key={category.name}
//                                                 onClick={() => setSelectedInhouseCategory(category.name)}
//                                                 className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedInhouseCategory === category.name
//                                                   ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
//                                                   : "text-gray-700 hover:bg-gray-50"
//                                                   }`}
//                                               >
//                                                 {category.name}
//                                               </button>
//                                             ))}
//                                           </div>
//                                         </div>
//                                       </div>
//                                     )
//                                   }
//                                   <div className="flex-1 p-6">
//                                     <div className="grid grid-cols-3 gap-4">
//                                       {inHouseServicesData.map((mainService) => {
//                                         if (mainService.name === selectedInhouseCategory) {
//                                           return mainService.subservices.map((service, i) => {
//                                             return (
//                                               <Link
//                                                 key={service?.name}
//                                                 href={service?.href ?? '#'}
//                                                 onClick={() => handleMouseLeave()}
//                                                 className="cursor-pointer group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent min-h-[260px] flex flex-col"
//                                               >
//                                                 <div className="flex flex-col h-full" key={i}>
//                                                   <div className="mb-3">
//                                                     <div className="flex items-start gap-3 mb-2">
//                                                       <div className="flex-shrink-0">
//                                                         <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
//                                                           <Shield className="h-4 w-4 text-blue-600" />
//                                                         </div>
//                                                       </div>
//                                                       <div className="flex-1 min-w-0">
//                                                         <div className="flex items-center gap-2 flex-wrap">
//                                                           <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
//                                                             {service.name}
//                                                           </h4>
//                                                           {/* New Tag for main service */}
//                                                           {service.isNew && (
//                                                             <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
//                                                               New
//                                                             </span>
//                                                           )}
//                                                         </div>
//                                                       </div>
//                                                     </div>
//                                                   </div>

//                                                   <div className="flex-grow">
//                                                     <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
//                                                       {service.description}
//                                                     </p>

//                                                     {service.services && service.services.length > 0 && (
//                                                       <div className="space-y-2 mb-4">
//                                                         {(expandedCards.includes(service.name)
//                                                           ? service.services
//                                                           : service.services.slice(0, 4)
//                                                         ).map((subItem, idx) => (
//                                                           <div
//                                                             key={idx}
//                                                             onClick={(e) => {
//                                                               e.preventDefault()
//                                                               if (subItem.href) {
//                                                                 router.push(`${subItem.href}`)
//                                                                 handleMouseLeave()
//                                                               }
//                                                             }}
//                                                             className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer hover:text-blue-600 group/subitem"
//                                                           >
//                                                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
//                                                             <span className="line-clamp-1 flex items-center gap-1.5">
//                                                               {subItem.name}
//                                                               {/* New Tag for sub-service */}
//                                                               {subItem.isNew && (
//                                                                 <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 text-[10px]">
//                                                                   New
//                                                                 </span>
//                                                               )}
//                                                             </span>
//                                                           </div>
//                                                         ))}

//                                                         {service.services.length > 4 && (
//                                                           <button
//                                                             onClick={(e) => {
//                                                               e.preventDefault()
//                                                               e.stopPropagation()
//                                                               toggleCard(service.name)
//                                                             }}
//                                                             className="pl-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
//                                                           >
//                                                             {expandedCards.includes(service.name)
//                                                               ? "Show Less"
//                                                               : `+${service.services.length - 4} more services`}
//                                                           </button>
//                                                         )}
//                                                       </div>
//                                                     )}
//                                                   </div>

//                                                   <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
//                                                     <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700">Learn more</span>
//                                                     <div className="text-blue-600 group-hover:translate-x-0.5 transition-transform">
//                                                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                       </svg>
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                               </Link>
//                                             )
//                                           })
//                                         }
//                                         return null
//                                       })}
//                                     </div>
//                                   </div>
//                                 </div>
//                               ) : item.name === "digitalTransformation" ? (
//                                 <div className="flex">
//                                   {
//                                     isDisplayDigitalTransformationDataServices?.name && (
//                                       <div className="w-56 border-r border-gray-200 py-4">
//                                         <div className="px-4 pb-4">
//                                           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Inhouse Services</h3>
//                                           <div className="space-y-1">
//                                             {digitalTransformationData.map((category) => (
//                                               <button
//                                                 key={category.name}
//                                                 onClick={() => setSelectedDigitalTransformationCategory(category.name)}
//                                                 className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedDigitalTransformationCategory === category.name
//                                                   ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
//                                                   : "text-gray-700 hover:bg-gray-50"
//                                                   }`}
//                                               >
//                                                 {category.name}
//                                               </button>
//                                             ))}
//                                           </div>
//                                         </div>
//                                       </div>
//                                     )
//                                   }
//                                   <div className="flex-1 p-6">
//                                     <div className="grid grid-cols-4 gap-4">
//                                       {digitalTransformationData.map((mainService) => {
//                                         if (mainService.name === selectedDigitalTransformationCategory) {
//                                           return mainService.subservices.map((service, i) => {
//                                             return (
//                                               <Link
//                                                 key={service.name}
//                                                 href={service.href ?? '#'}
//                                                 onClick={() => handleMouseLeave()}
//                                                 className="cursor-pointer group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent min-h-[260px] flex flex-col"
//                                               >
//                                                 <div className="flex flex-col h-full" key={i}>
//                                                   <div className="mb-3">
//                                                     <div className="flex items-start gap-3 mb-2">
//                                                       <div className="flex-shrink-0">
//                                                         <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
//                                                           <Shield className="h-4 w-4 text-blue-600" />
//                                                         </div>
//                                                       </div>
//                                                       <div className="flex-1 min-w-0">
//                                                         <div className="flex items-center gap-2 flex-wrap">
//                                                           <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
//                                                             {service.name}
//                                                           </h4>
//                                                           {/* New Tag for main service */}
//                                                           {service.isNew && (
//                                                             <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
//                                                               New
//                                                             </span>
//                                                           )}
//                                                         </div>
//                                                       </div>
//                                                     </div>
//                                                   </div>

//                                                   <div className="flex-grow">
//                                                     <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
//                                                       {service.description}
//                                                     </p>

//                                                     {service.services && service.services.length > 0 && (
//                                                       <div className="space-y-2 mb-4">
//                                                         {(expandedCards.includes(service.name)
//                                                           ? service.services
//                                                           : service.services.slice(0, 4)
//                                                         ).map((subItem, idx) => (
//                                                           <div
//                                                             key={idx}
//                                                             onClick={(e) => {
//                                                               e.preventDefault()
//                                                               if (subItem.href) {
//                                                                 router.push(`${subItem.href}`)
//                                                                 handleMouseLeave()
//                                                               }
//                                                             }}
//                                                             className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer hover:text-blue-600 group/subitem"
//                                                           >
//                                                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
//                                                             <span className="line-clamp-1 flex items-center gap-1.5">
//                                                               {subItem.name}
//                                                               {/* New Tag for sub-service */}
//                                                               {subItem.isNew && (
//                                                                 <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 text-[10px]">
//                                                                   New
//                                                                 </span>
//                                                               )}
//                                                             </span>
//                                                           </div>
//                                                         ))}

//                                                         {service.services.length > 4 && (
//                                                           <button
//                                                             onClick={(e) => {
//                                                               e.preventDefault()
//                                                               e.stopPropagation()
//                                                               toggleCard(service.name)
//                                                             }}
//                                                             className="pl-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
//                                                           >
//                                                             {expandedCards.includes(service.name)
//                                                               ? "Show Less"
//                                                               : `+${service.services.length - 4} more services`}
//                                                           </button>
//                                                         )}
//                                                       </div>
//                                                     )}
//                                                   </div>

//                                                   <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
//                                                     <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700">Learn more</span>
//                                                     <div className="text-blue-600 group-hover:translate-x-0.5 transition-transform">
//                                                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                       </svg>
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                               </Link>
//                                             )
//                                           })
//                                         }
//                                         return null
//                                       })}
//                                     </div>
//                                   </div>
//                                 </div>
//                               ) : (
//                                 <div className="mb-6">
//                                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                                     Browse All {item.name}
//                                   </h3>
//                                   <p className="text-sm text-gray-600">
//                                     Explore all {item.name.toLowerCase()} and solutions
//                                   </p>
//                                   <Link
//                                     href={item.href}
//                                     className="text-sm text-blue-600 hover:text-blue-700 underline mt-1 inline-block"
//                                   >
//                                     Browse all {item.name.toLowerCase()}
//                                   </Link>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       onClick={() => handleMouseLeave()}
//                       className={`text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 ${pathname === item.href
//                         ? "text-blue-600 border-b-2 border-blue-600"
//                         : ""
//                         }`}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Right Side Actions */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                 <Search className="h-5 w-5 text-gray-600" />
//               </button>
//               <Link href={"/register"}>
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg hover:shadow-xl transition-all">
//                   Book Demo
//                 </button>
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <div className="xl:hidden">
//               <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="xl:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
//                 {navigation.map((item) => (
//                   item?.name != 'inhouseServices' && item?.name != 'digitalTransformation' && (
//                     <div key={item.name}>
//                       {item.hasDropdown ? (
//                         <div>
//                           <button
//                             className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                             onClick={() => handleDropdownToggle(item.name)}
//                           >
//                             <span>{item.name}</span>
//                             <ChevronDown
//                               className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
//                             />
//                           </button>

//                           {activeDropdown === item.name && (item?.name != 'inhouseServices' && item?.name != 'digitalTransformation') && (
//                             <div className="pl-6 space-y-1">
//                               {(item.name === "Industries"
//                                 ? industriesList
//                                 : item.name === "Resources"
//                                   ? (item.dropDownMenu as ResourceItem[])
//                                   : item?.name == 'Services' || item?.name == 'inhouseServices' || item?.name == 'digitalTransformation'
//                                     ? servicesCategories
//                                     : []
//                               ).map((link: any) => (
//                                 <Link
//                                   key={link?.name || link}
//                                   href={link.href || `#`}
//                                   className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
//                                   onClick={() => setIsOpen(false)}
//                                 >
//                                   {link.name || link}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <Link
//                           href={item.href}
//                           className={`block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors ${pathname === item.href ? "text-blue-600" : ""
//                             }`}
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {item.name}
//                         </Link>
//                       )}
//                     </div>
//                   )
//                 ))}
//                 <div className="px-3 py-2 space-y-2">
//                   <Link href="/login" className="block w-full text-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
//                     Sign in to console
//                   </Link>
//                   <Link href="/contact" className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
//                     Create account
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   )
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ChevronDown, Menu, Shield, X, Users, Scale, Video, FileText, Award, MessageSquare, BookOpen, Search, Star, TrendingUp, Database, Cloud, Eye, UserCheck, GraduationCap, Briefcase, MapPin, ShieldCheck, AlertTriangle, FileCheck, Settings, Globe, Phone, HelpCircle, User, ChevronRight, Sparkles, CheckCircle, ArrowRight, Layers, Building2, Library, Grid3X3, Heart, Zap, Crown, Rocket, BriefcaseIcon, GraduationCapIcon, FileTextIcon, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"

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

interface SupportLink {
  label: string
  href: string
}

interface AccountLink {
  label: string
  href: string
}

interface LanguageConfig {
  [key: string]: {
    flag: string
    locale: string
  }
}

export default function Bar() {
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

  const detectLanguageFromBrowser = (): string => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("preferred-language") : null
    if (saved && languageConfig[saved]) return saved

    const browserLocale = (typeof navigator !== "undefined" ? navigator.language : "en").toLowerCase()
    const match = Object.entries(languageConfig).find(([, cfg]) =>
      browserLocale.startsWith(cfg.locale.toLowerCase())
    )
    return match ? match[0] : "English"
  }

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("ID & e-KYC Data Stack")
  const [selectedInhouseCategory, setSelectedInhouseCategory] = useState<string>("HR Excellence Suite")
  const [selectedDigitalTransformationCategory, setSelectedDigitalTransformationCategory] = useState<string>("Digital Transformation")
  const [selectedLang, setSelectedLang] = useState<string>(() => {
    if (typeof window === "undefined") return "English"
    return detectLanguageFromBrowser()
  })

  const [activeUtilityDropdown, setActiveUtilityDropdown] = useState<string | null>(null)
  const [expandedCards, setExpandedCards] = useState<string[]>([])

  // Mobile view states - Beautiful vertical hierarchy (all collapsed by default)
  const [mobileSelectedMainTab, setMobileSelectedMainTab] = useState<string>("Explore API")
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<string>("ID & e-KYC Data Stack")
  // All subservices start collapsed (empty set)
  const [mobileExpandedSubServices, setMobileExpandedSubServices] = useState<Set<string>>(new Set())

  const utilityDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
    if (itemName === "Services") {
      setSelectedCategory("Identity & KYC")
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeUtilityDropdown) {
        const currentRef = utilityDropdownRefs.current[activeUtilityDropdown]
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setActiveUtilityDropdown(null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeUtilityDropdown])

  const toggleUtilityDropdown = (dropdownName: string) => {
    if (activeUtilityDropdown === dropdownName) {
      setActiveUtilityDropdown(null)
    } else {
      setActiveUtilityDropdown(dropdownName)
    }
  }

  // Mobile view helpers - Toggle subservice expansion (collapsed by default, opens on click)
  const toggleMobileSubServiceExpansion = (subServiceName: string) => {
    const newSet = new Set(mobileExpandedSubServices)
    if (newSet.has(subServiceName)) {
      newSet.delete(subServiceName)
    } else {
      newSet.add(subServiceName)
    }
    setMobileExpandedSubServices(newSet)
  }

  const languages = [
    "العربية",
    "Bahasa Indonesia",
    "Deutsch",
    "English",
    "Español",
    "Français",
    "Italiano",
    "Português",
    "Tiếng Việt",
    "Türkçe",
    "Русский",
    "ไทย",
    "日本語",
    "한국어",
    "中文 (简体)",
    "中文 (繁體)",
  ]

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
      description: 'Complete digital identity and KYC solutions',
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
            { name: 'Mobile No. Revocation List (MNRL)', description: 'Check mobile revocation' }
          ]
        },
        {
          name: 'Identity Verification',
          description: 'Verify multiple identity documents',
          services: [
            { name: 'Aadhar Card', description: 'Aadhar verification' },
            { name: 'PAN Card', description: 'PAN verification' },
            { name: 'Passport', description: 'Passport verification' },
            { name: 'Voter ID', description: 'Voter ID verification' },
            { name: 'Ration Card Details', description: 'Ration card verification' }
          ]
        }
      ]
    },
    {
      name: 'Document Intelligence',
      description: 'Advanced document verification and validation',
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
      description: 'Comprehensive background and criminal record checks',
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
            { name: 'Global DB - Negative Media Check', description: 'Global database screening' },
            { name: 'Advance Forgery Check', description: 'Advanced forgery detection' },
            { name: 'IP Quality Check', description: 'IP reputation check' }
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
            { name: 'PAN Verify', description: 'Business PAN verification' },
            { name: 'TAN Verify', description: 'TAN verification' },
            { name: 'TIN Verify', description: 'TIN verification' },
            { name: 'GSTIN Verify', description: 'GST registration verification' },
            { name: 'Import / Export Certificate', description: 'Import/export verification' },
            { name: 'Shop & Establishment', href: '/shop-establishment', description: 'Shop registration verification', isNew: true },
            { name: 'MSME / Udyam', description: 'MSME registration check' },
            { name: 'EPFO Establishment Search', description: 'EPFO verification' }
          ]
        },
        {
          name: 'GST Verification',
          description: 'KPI for GST online verification',
          services: [
            { name: 'Prevent Fraudulent Invoices', description: 'Company and LLP verification' },
            { name: 'Ensure Input Tax Credit (ITC) Compliance', description: 'Business PAN verification' },
            { name: 'Enhance Audit Preparedness', description: 'TAN verification' },
            { name: 'Reduce Administrative Errors', description: 'TIN verification' },
            { name: 'Build Vendor Transparency and Business Trust', description: 'GST registration verification' },
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
            { name: 'Bank Account Verification', description: 'Bank account validation' },
            { name: 'Compensation Verification', description: 'Verify via bank statement' },
            { name: 'IFSC Check', description: 'IFSC code verification' },
            { name: 'Income Tax Return - ITR', description: 'ITR verification' },
            { name: 'Credit / CIBIL History', description: 'Credit history check' },
            { name: 'Digital Media Forensic', description: 'Digital forensics' },
            { name: 'Social Media & Reputation', description: 'Social media screening' },
            { name: 'Cheque Verify', description: 'Cheque verification' },
            { name: 'OCR - Intelligent Doc Processing', description: 'Document OCR' }
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
            { name: 'Driving Licence (DL)', description: 'DL verification' },
            { name: 'Vehicle RC Verification', description: 'RC verification' },
            { name: 'Fast Tag Verification', description: 'FASTag verification' },
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
          name: 'Employment 360',
          description: 'End-to-end recruitment and onboarding',
          services: [
            { name: 'Technical Recruitment', description: 'Technical talent recruitment' },
            { name: 'ATS Ready Resume/CV', description: 'Resume parsing' },
            { name: 'On-boarding', description: 'Employee onboarding' },
            { name: 'Off-boarding / FnF', description: 'Employee exit management' },
            { name: 'Training / Webinars / Seminars', description: 'Training programs' }
          ]
        },
        {
          name: 'Employee BGV',
          description: 'Employee background verification',
          services: [
            { name: 'Employee Verification', description: 'Complete employee screening' },
            { name: 'ID & BGV', description: 'ID and background verification' },
            { name: 'Education', description: 'Educational Qualifications' },
            { name: 'Employment', description: 'Employment History' },
            { name: 'Physical Address', description: 'Physical Address Verification' }
          ]
        },
        {
          name: 'Managed Services',
          description: 'Outsourced HR and compliance services',
          services: [
            { name: 'EPFO', description: 'Employee provident fund' },
            { name: 'ESIC', description: 'Employee state insurance' },
            { name: 'TDS', description: 'Tax deducted at source' },
            { name: 'Professional Tax (PT)', description: 'Professional tax management' },
            { name: 'Employment & Labour Dept', description: 'Government assistance' },
            { name: 'ITR-1 (Sahaj) Assistance', description: 'ITR filing assistance' },
            { name: 'Cloud HR Tools', description: 'HR software solutions' },
            { name: 'Biometric Device / Data', description: 'Biometric solutions' }
          ]
        }
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
          name: 'AI / ML',
          description: 'Artificial intelligence solutions',
          services: [
            { name: 'Agents as a Service', description: 'AI agent deployment' }
          ]
        },
        {
          name: 'Web Application Development',
          href: '/web-application-development',
          description: 'Web application development services',
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
    "inhouseServices": 'HR Excellence Suite',
    digitalTransformation: 'Digital Transformation (Dx)',
    Industries: 'Industries',
    Pricing: 'Pricing',
    Resources: 'Resources'
  }

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
      name: "digitalTransformation",
      href: "/services",
      hasDropdown: true,
      dropDownMenu: servicesCategories,
      icon: Users,
      description: "Comprehensive verification and background screening services",
    },
    {
      name: "Resources",
      href: "/resources",
      hasDropdown: true,
      dropDownMenu: [
        {
          name: "Academy",
          href: "/resources/academy",
          icon: BookOpen,
          description: "Learn about background verification and compliance",
        },
        {
          name: "Blogs, Research & Publication",
          href: "/resources/blog",
          icon: BookOpen,
          description: "Stay up-to-date with the latest industry news",
        },
        {
          name: "Career",
          href: "/resources/glossary",
          icon: MessageSquare,
          description: "Understand key terms and concepts in background verification",
        },
        {
          name: "About Us",
          href: "/resources/about-us",
          icon: FileText,
          description: "Learn more about our company and our mission",
        },
      ],
      icon: null,
      description: null
    },
  ]

  const isDisplayMainServices = inHouseServicesData?.find(service => service?.isDisplay == true)
  const isDisplayDigitalTransformationDataServices = digitalTransformationData?.find(service => service?.isDisplay == true)

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
      name: "Academy",
      href: "/resources/academy",
      icon: GraduationCapIcon,
      description: "Learn about background verification and compliance",
    },
    {
      name: "Blogs, Research & Publication",
      href: "/resources/blog",
      icon: BookOpen,
      description: "Stay up-to-date with the latest industry news",
    },
    {
      name: "Career",
      href: "/resources/glossary",
      icon: MessageCircle,
      description: "Understand key terms and concepts",
    },
    {
      name: "About Us",
      href: "/resources/about-us",
      icon: Heart,
      description: "Learn more about our company and mission",
    },
  ]

  // Mobile Services Content - Beautiful Card Design (All subservices collapsed by default)
  const MobileServicesContent = () => {
    // Determine which data to show based on selected main tab
    const getCurrentData = () => {
      if (mobileSelectedMainTab === "Explore API") return servicesData
      if (mobileSelectedMainTab === "HR Excellence Suite") return inHouseServicesData
      if (mobileSelectedMainTab === "Digital Transformation") return digitalTransformationData
      return []
    }

    const currentData = getCurrentData()
    const categories = currentData.map(item => item.name)
    const activeCategoryExists = categories.includes(mobileSelectedCategory)
    const activeCategory = activeCategoryExists ? mobileSelectedCategory : (categories[0] || "")

    // Update selected category when switching tabs
    useEffect(() => {
      const newData = getCurrentData()
      if (newData.length > 0 && !categories.includes(mobileSelectedCategory)) {
        setMobileSelectedCategory(newData[0].name)
      }
    }, [mobileSelectedMainTab])

    return (
      <div className="flex flex-col h-full">
        {/* Category Selection - Beautiful Grid */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4">
          <div className="grid grid-cols-2 gap-2">
            {currentData?.length > 1 &&currentData.map((category) => (
              <button
                key={category.name}
                onClick={() => setMobileSelectedCategory(category.name)}
                className={`p-3 rounded-xl text-left transition-all duration-200 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02]"
                    : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-2">
                  {/* <span className="text-xl">{category.icon}</span> */}
                  <div>
                    <div className={`text-sm font-semibold ${activeCategory === category.name ? "text-white" : "text-gray-800"}`}>
                      {category.name}
                    </div>
                    <div className={`text-xs ${activeCategory === category.name ? "text-blue-100" : "text-gray-500"}`}>
                      {category.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Pricing Button */}
          <button
            onClick={() => {
              router.push(`/pricing`)
              setIsOpen(false)
            }}
            className="w-full mt-3 p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5" />
              <span className="font-semibold">Pricing Plans</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Services Content - Beautiful Cards (All collapsed by default) */}
        <div className="flex-1 bg-gray-50 p-4 pb-24">
          {currentData.map((mainService) => {
            if (mainService.name === activeCategory) {
              return (
                <div key={mainService.name} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-800">{mainService.name}</h3>
                  </div>
                  
                  {mainService.subservices.map((subService) => {
                    // Check if this subservice is expanded (default is false/collapsed)
                    const isExpanded = mobileExpandedSubServices.has(subService.name)
                    // Only show services if expanded
                    const displayServices = isExpanded ? subService.services : []
                    
                    return (
                      <div key={subService.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Subservice Header - Click to expand/collapse */}
                        <button
                          onClick={() => toggleMobileSubServiceExpansion(subService.name)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-semibold text-gray-900">{subService.name}</h4>
                              {subService.isNew && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <Sparkles className="h-3 w-3 mr-1" />
                                  New
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{subService.description}</p>
                          </div>
                          <div className={`p-1 rounded-full transition-colors ${isExpanded ? "bg-blue-100" : "bg-gray-100"}`}>
                            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                          </div>
                        </button>

                        {/* Services List - Only shown when expanded */}
                        {isExpanded && displayServices.length > 0 && (
                          <div className="border-t border-gray-100 bg-gray-50/30">
                            {displayServices.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href || "#"}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition-colors group border-b border-gray-100 last:border-0"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600"></div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                      {item.name}
                                    </span>
                                    {item.isNew && (
                                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-800">
                                        New
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5 ml-2.5">{item.description}</p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                              </Link>
                            ))}
                          </div>
                        )}
                        
                        {/* Hint text when collapsed - shows how many services are available */}
                        {!isExpanded && subService.services.length > 0 && (
                          <div className="px-4 pb-3 text-xs text-gray-400 border-t border-gray-50 pt-2">
                            {subService.services.length} service{subService.services.length > 1 ? 's' : ''} available • Click to expand
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

  // Mobile Resources Content - Beautiful Design
  const MobileResourcesContent = () => {
    return (
      <div className="p-4 space-y-4 pb-24">
        {/* Resources Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Library className="h-8 w-8" />
            <h3 className="text-xl font-bold">Resources</h3>
          </div>
          <p className="text-purple-100 text-sm">Explore our knowledge base and stay informed</p>
        </div>
        
        {/* Resources Cards */}
        {resourcesData.map((resource) => (
          <Link
            key={resource.name}
            href={resource.href}
            onClick={() => setIsOpen(false)}
            className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <resource.icon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{resource.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{resource.description}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center h-10">
            <div className="flex items-center space-x-6">
              {/* Language Dropdown */}
              <div
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
                  <span>{selectedLang}</span>
                  <ChevronDown className="h-3 w-3" />
                </div>

                {activeUtilityDropdown === 'language' && (
                  <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
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
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className="hover:text-blue-300 transition-colors flex items-center space-x-1"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:block">Contact us</span>
              </Link>

              {/* Support Dropdown */}
              <div
                className="relative"
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
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setActiveUtilityDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* My Account Dropdown */}
              <div
                className="relative"
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
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setActiveUtilityDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Avatar Profile Popup */}
              <div
                className="relative"
                ref={(el) => { utilityDropdownRefs.current['profile'] = el }}
              >
                <div
                  className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center ml-4 cursor-pointer"
                  onClick={() => toggleUtilityDropdown('profile')}
                >
                  <User className="h-4 w-4" />
                </div>

                {activeUtilityDropdown === 'profile' && (
                  <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded shadow-lg p-4 z-50">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Profile</h3>
                      <button onClick={() => setActiveUtilityDropdown(null)}>
                        <X className="h-4 w-4 text-gray-500 hover:text-black" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Your profile helps improve your interactions with select experiences.
                    </p>
                    {/* Buttons */}
                    <div className="flex space-x-3">
                      <Link href="/login">
                        <button
                          className="px-4 py-2 border rounded-full hover:bg-gray-100"
                          onClick={() => setActiveUtilityDropdown(null)}
                        >
                          Log in
                        </button>
                      </Link>
                      <Link href="/contact">
                        <button
                          className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
                          onClick={() => setActiveUtilityDropdown(null)}
                        >
                          Create profile
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image src="/images/logo-without-tagline.jpg" alt="DigitalRakshak Logo" width={65} height={65} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">DigitalRakshak</span>
                <span className="text-xs text-blue-600 font-medium">SECURE | SWIFT | COMPLIANT</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-3">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 ${pathname.startsWith(item.href)
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : ""
                          }`}
                      >
                        <span>{displayServicesName[item.name]}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      {activeDropdown === item.name && (
                        <div
                          className={`absolute top-full left-0 mt-0 bg-white rounded-b-xl shadow-2xl border border-gray-100 z-50 max-h-[1100px] overflow-visible ${item.name === "Resources" ? "w-64" : item.name === "Services" ? "w-[1100px]" : "w-[1000px]"
                            }`}
                          style={{
                            boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            left: item.name === "Resources" ? "0" : "-400px",
                          }}
                        >
                          <div className="flex">
                            {/* Main Content */}
                            <div className="flex-1 p-6">
                              {item.name === "Industries" ? (
                                <div className="grid grid-cols-3 gap-6">
                                  {industriesList.map((ind) => (
                                    <Link
                                      key={ind.name}
                                      href={ind.href}
                                      onClick={() => handleMouseLeave()}
                                      className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="flex-shrink-0 rounded-full bg-blue-100 p-2">
                                        <ind.icon className="h-5 w-5 text-blue-600" />
                                      </div>
                                      <div className="min-w-0">
                                        <p className="text-sm font-semibold text-gray-900">
                                          {ind.name}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                          {ind.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ) : item.name === "Resources" ? (
                                <div className="flex flex-col gap-2 w-full p-2">
                                  {(item.dropDownMenu as ResourceItem[]).map((res) => (
                                    <Link
                                      key={res.name}
                                      href={res.href}
                                      className="flex items-center gap-3 w-full rounded-md px-3 py-2 hover:bg-gray-50 transition-colors"
                                      onClick={() => handleMouseLeave()}
                                    >
                                      {res.icon && (
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                                          <res.icon className="h-5 w-5 text-blue-600" />
                                        </div>
                                      )}
                                      <span className="text-sm font-semibold text-gray-900">
                                        {res.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              ) : item.name === "Services" ? (
                                <div className="flex">
                                  {/* Left Sidebar - Service Categories */}
                                  <div className="w-56 border-r border-gray-200 py-4">
                                    <div className="px-4 pb-4">
                                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Services</h3>
                                      <div className="space-y-1">
                                        {servicesData.map((category) => (
                                          <button
                                            key={category.name}
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedCategory === category.name
                                              ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                                              : "text-gray-700 hover:bg-gray-50"
                                              }`}
                                          >
                                            {category.name}
                                          </button>
                                        ))}
                                        <button
                                          onClick={() => {
                                            router.push(`/pricing`)
                                            handleMouseLeave()
                                          }}
                                          className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all bg-[#FEE2E2] text-[#DC2626] border-l-2 border-[#DC2626]`}
                                        >
                                          Pricing
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right Content - Service Products Grid */}
                                  <div className="flex-1 p-6">
                                    <div className="grid grid-cols-3 gap-4">
                                      {servicesData.map((mainService) => {
                                        if (mainService.name === selectedCategory) {
                                          return mainService.subservices.map((service, i) => {
                                            return (
                                              <Link
                                                key={service.name}
                                                href={service.href ?? '#'}
                                                className="cursor-pointer group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent min-h-[260px] flex flex-col"
                                                onClick={() => handleMouseLeave()}
                                              >
                                                <div className="flex flex-col h-full" key={i}>
                                                  <div className="mb-3">
                                                    <div className="flex items-start gap-3 mb-2">
                                                      <div className="flex-shrink-0">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
                                                          <Shield className="h-4 w-4 text-blue-600" />
                                                        </div>
                                                      </div>
                                                      <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                                                            {service.name}
                                                          </h4>
                                                          {/* New Tag for main service */}
                                                          {service.isNew && (
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                                              New
                                                            </span>
                                                          )}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="flex-grow">
                                                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                                                      {service.description}
                                                    </p>

                                                    {service.services && service.services.length > 0 && (
                                                      <div className="space-y-2 mb-4">
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
                                                            className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer hover:text-blue-600 group/subitem"
                                                          >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                                            <span className="line-clamp-1 flex items-center gap-1.5">
                                                              {subItem.name}
                                                              {/* New Tag for sub-service */}
                                                              {subItem.isNew && (
                                                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 text-[10px]">
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
                                                            className="pl-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                                          >
                                                            {expandedCards.includes(service.name)
                                                              ? "Show Less"
                                                              : `+${service.services.length - 4} more services`}
                                                          </button>
                                                        )}
                                                      </div>
                                                    )}
                                                  </div>

                                                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                                                    <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700">Learn more</span>
                                                    <div className="text-blue-600 group-hover:translate-x-0.5 transition-transform">
                                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Link>
                                            )
                                          })
                                        }
                                        return null
                                      })}
                                    </div>
                                  </div>
                                </div>
                              ) : item.name === "inhouseServices" ? (
                                <div className="flex">
                                  {
                                    isDisplayMainServices?.name && (
                                      <div className="w-56 border-r border-gray-200 py-4">
                                        <div className="px-4 pb-4">
                                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Inhouse Services</h3>
                                          <div className="space-y-1">
                                            {inHouseServicesData.map((category) => (
                                              <button
                                                key={category.name}
                                                onClick={() => setSelectedInhouseCategory(category.name)}
                                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedInhouseCategory === category.name
                                                  ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                                                  : "text-gray-700 hover:bg-gray-50"
                                                  }`}
                                              >
                                                {category.name}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  }
                                  <div className="flex-1 p-6">
                                    <div className="grid grid-cols-3 gap-4">
                                      {inHouseServicesData.map((mainService) => {
                                        if (mainService.name === selectedInhouseCategory) {
                                          return mainService.subservices.map((service, i) => {
                                            return (
                                              <Link
                                                key={service?.name}
                                                href={service?.href ?? '#'}
                                                onClick={() => handleMouseLeave()}
                                                className="cursor-pointer group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent min-h-[260px] flex flex-col"
                                              >
                                                <div className="flex flex-col h-full" key={i}>
                                                  <div className="mb-3">
                                                    <div className="flex items-start gap-3 mb-2">
                                                      <div className="flex-shrink-0">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
                                                          <Shield className="h-4 w-4 text-blue-600" />
                                                        </div>
                                                      </div>
                                                      <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                                                            {service.name}
                                                          </h4>
                                                          {/* New Tag for main service */}
                                                          {service.isNew && (
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                                              New
                                                            </span>
                                                          )}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="flex-grow">
                                                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                                                      {service.description}
                                                    </p>

                                                    {service.services && service.services.length > 0 && (
                                                      <div className="space-y-2 mb-4">
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
                                                            className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer hover:text-blue-600 group/subitem"
                                                          >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                                            <span className="line-clamp-1 flex items-center gap-1.5">
                                                              {subItem.name}
                                                              {/* New Tag for sub-service */}
                                                              {subItem.isNew && (
                                                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 text-[10px]">
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
                                                            className="pl-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                                          >
                                                            {expandedCards.includes(service.name)
                                                              ? "Show Less"
                                                              : `+${service.services.length - 4} more services`}
                                                          </button>
                                                        )}
                                                      </div>
                                                    )}
                                                  </div>

                                                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                                                    <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700">Learn more</span>
                                                    <div className="text-blue-600 group-hover:translate-x-0.5 transition-transform">
                                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Link>
                                            )
                                          })
                                        }
                                        return null
                                      })}
                                    </div>
                                  </div>
                                </div>
                              ) : item.name === "digitalTransformation" ? (
                                <div className="flex">
                                  {
                                    isDisplayDigitalTransformationDataServices?.name && (
                                      <div className="w-56 border-r border-gray-200 py-4">
                                        <div className="px-4 pb-4">
                                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Inhouse Services</h3>
                                          <div className="space-y-1">
                                            {digitalTransformationData.map((category) => (
                                              <button
                                                key={category.name}
                                                onClick={() => setSelectedDigitalTransformationCategory(category.name)}
                                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${selectedDigitalTransformationCategory === category.name
                                                  ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                                                  : "text-gray-700 hover:bg-gray-50"
                                                  }`}
                                              >
                                                {category.name}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  }
                                  <div className="flex-1 p-6">
                                    <div className="grid grid-cols-4 gap-4">
                                      {digitalTransformationData.map((mainService) => {
                                        if (mainService.name === selectedDigitalTransformationCategory) {
                                          return mainService.subservices.map((service, i) => {
                                            return (
                                              <Link
                                                key={service.name}
                                                href={service.href ?? '#'}
                                                onClick={() => handleMouseLeave()}
                                                className="cursor-pointer group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent min-h-[260px] flex flex-col"
                                              >
                                                <div className="flex flex-col h-full" key={i}>
                                                  <div className="mb-3">
                                                    <div className="flex items-start gap-3 mb-2">
                                                      <div className="flex-shrink-0">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
                                                          <Shield className="h-4 w-4 text-blue-600" />
                                                        </div>
                                                      </div>
                                                      <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                                                            {service.name}
                                                          </h4>
                                                          {/* New Tag for main service */}
                                                          {service.isNew && (
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                                              New
                                                            </span>
                                                          )}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="flex-grow">
                                                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                                                      {service.description}
                                                    </p>

                                                    {service.services && service.services.length > 0 && (
                                                      <div className="space-y-2 mb-4">
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
                                                            className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer hover:text-blue-600 group/subitem"
                                                          >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                                            <span className="line-clamp-1 flex items-center gap-1.5">
                                                              {subItem.name}
                                                              {/* New Tag for sub-service */}
                                                              {subItem.isNew && (
                                                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 text-[10px]">
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
                                                            className="pl-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                                          >
                                                            {expandedCards.includes(service.name)
                                                              ? "Show Less"
                                                              : `+${service.services.length - 4} more services`}
                                                          </button>
                                                        )}
                                                      </div>
                                                    )}
                                                  </div>

                                                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                                                    <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700">Learn more</span>
                                                    <div className="text-blue-600 group-hover:translate-x-0.5 transition-transform">
                                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Link>
                                            )
                                          })
                                        }
                                        return null
                                      })}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-6">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Browse All {item.name}
                                  </h3>
                                  <p className="text-sm text-gray-600">
                                    Explore all {item.name.toLowerCase()} and solutions
                                  </p>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-blue-600 hover:text-blue-700 underline mt-1 inline-block"
                                  >
                                    Browse all {item.name.toLowerCase()}
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleMouseLeave()}
                      className={`text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 ${pathname === item.href
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <Link href={"/register"}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg hover:shadow-xl transition-all">
                  Book Demo
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Beautiful 4 Tabs Design (All subservices collapsed by default) */}
          {isOpen && (
            <div className="xl:hidden fixed inset-x-0 top-[calc(72px+40px)] bottom-0 bg-white z-40 overflow-y-auto">
              {/* 4 Main Tabs - Beautiful Gradient Design */}
              <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
                <div className="flex">
                  {[
                    { id: "Explore API", icon: <Zap className="h-4 w-4" />, color: "from-blue-500 to-cyan-500" },
                    { id: "HR Excellence Suite", icon: <Users className="h-4 w-4" />, color: "from-emerald-500 to-teal-500" },
                    { id: "Digital Transformation", icon: <Rocket className="h-4 w-4" />, color: "from-purple-500 to-pink-500" },
                    { id: "Resources", icon: <Library className="h-4 w-4" />, color: "from-orange-500 to-red-500" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setMobileSelectedMainTab(tab.id)}
                      className={`flex-1 py-4 px-2 text-center font-medium transition-all relative flex flex-col items-center gap-1 ${
                        mobileSelectedMainTab === tab.id
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${tab.color}`
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className={`flex items-center gap-1 ${mobileSelectedMainTab === tab.id ? `bg-gradient-to-r ${tab.color} bg-clip-text text-transparent` : ""}`}>
                        {tab.icon}
                        <span className="text-xs sm:text-sm">{tab.id === "Explore API" ? "API" : tab.id === "HR Excellence Suite" ? "HR" : tab.id === "Digital Transformation" ? "DX" : "Resources"}</span>
                      </div>
                      <div className="text-[10px] sm:text-xs truncate max-w-full px-1">
                        {tab.id === "Explore API" ? "Explore API" : tab.id === "HR Excellence Suite" ? "HR Excellence Suite" : tab.id === "Digital Transformation" ? "Digital Transformation" : tab.id === "Resources" && "Explore Resources" }
                      </div>
                      {mobileSelectedMainTab === tab.id && (
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tab.color} rounded-full`}></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-gray-50 min-h-full">
                {mobileSelectedMainTab === "Resources" ? (
                  <MobileResourcesContent />
                ) : (
                  <MobileServicesContent />
                )}
              </div>

              {/* Bottom Actions - Sticky */}
              <div className="p-4 border-t border-gray-100 bg-white sticky bottom-0 shadow-lg">
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                  <Link href="/register" className="flex-1" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                      Book Demo
                    </button>
                  </Link>
                </div>
                <div className="flex gap-3 mt-3">
                  <Link href="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-2 border border-gray-200 rounded-xl text-gray-600 text-sm hover:bg-gray-50 transition-colors">
                      Sign in to console
                    </button>
                  </Link>
                  <Link href="/contact" className="flex-1" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-xl text-sm hover:bg-gray-800 transition-colors">
                      Create account
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}