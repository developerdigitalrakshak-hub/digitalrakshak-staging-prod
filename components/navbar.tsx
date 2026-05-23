"use client"

import { ChevronDown, Menu, Shield, X, Users, Scale, Video, FileText, Award, MessageSquare, BookOpen, Search, Star, TrendingUp, Database, Cloud, Eye, UserCheck, GraduationCap, Briefcase, MapPin, ShieldCheck, AlertTriangle, FileCheck, Settings, Globe, Phone, HelpCircle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>("Identity & KYC")
    const [selectedLang, setSelectedLang] = useState("English");
    const [langOpen, setLangOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const handleDropdownToggle = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName)
        if (itemName === "Services") {
            setSelectedCategory("Identity & KYC") // Reset to default category when opening Services dropdown
        }
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
    ];

    const supportLinks = [
        { label: "Support Center", href: "/support-center" },
        { label: "Expert Help", href: "/expert-help" },
        { label: "Knowledge Center", href: "/knowledge-center" },
        { label: "Support Overview", href: "/support-overview" },
    ];

    const accountLinks = [
        { label: "Account Management Console", href: "/console" },
        { label: "Account Settings", href: "/account-settings" },
        { label: "Billing & Cost Management", href: "/billing" },
        { label: "Security Credentials", href: "/security-credentials" },
        { label: "Personal Health Dashboard", href: "/health-dashboard" },
    ];

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

    const serviceTypeProducts = {
        "Identity & KYC": [
            { name: "Driver's License Verification", href: "/services/drivers-license-verification", isNew: false },
            { name: "Voter ID Verification", href: "/services/voter-id-verification", isNew: false },
            { name: "Passport Verification", href: "/services/passport-verification", isNew: false },
            { name: "Hybrid Bank Account Verification", href: "/services/hybrid-bank-account-verification", isNew: true },
            { name: "KYC OCR Plus", href: "/services/kyc-ocr-plus", isNew: true },
            { name: "Mobile Verification", href: "/services/mobile-verification-otp", isNew: false },
        ],
        "Vehicle & Transportation": [
            { name: "Vehicle RC Authentication", href: "/services/vehicle-rc-authentication", isNew: false },
            { name: "Vehicle Reverse RC", href: "/services/vehicle-reverse-rc", isNew: true },
            { name: "FASTag Verification", href: "/services/fastag-verification", isNew: false },
            { name: "FASTag Last Location Verification", href: "/services/fastag-last-location", isNew: true },
            { name: "Geo Fencing", href: "/services/geo-fencing", isNew: false },
        ],
        "Financial & Banking": [
            { name: "IFSC Verification", href: "/services/ifsc-verification", isNew: false },
            { name: "Dynamic Bank Account Validation", href: "/services/dynamic-bank-validation", isNew: true },
            { name: "Experian Credit Bureau", href: "/services/experian-credit-bureau", isNew: false },
            { name: "ITR Verification", href: "/services/itr-verification", isNew: false },
            { name: "ITR Fetch", href: "/services/itr-fetch", isNew: true },
        ],
        "Government & Compliance": [
            { name: "EPF UAN Validation", href: "/services/epf-uan-validation", isNew: false },
            { name: "EPF UAN Lookup", href: "/services/epf-uan-lookup", isNew: false },
            { name: "EPFO Basic Establishment Search", href: "/services/epfo-establishment-search", isNew: true },
            { name: "EPFO Employee Name Search", href: "/services/epfo-employee-search", isNew: true },
            { name: "TAN Verification", href: "/services/tan-verification", isNew: false },
            { name: "TIN Fetch", href: "/services/tin-fetch", isNew: false },
            { name: "Udyam Verification", href: "/services/udyam-verification", isNew: true },
        ],
        "Utility & Address Verification": [
            { name: "Electricity Bill Authentication", href: "/services/electricity-bill-authentication", isNew: false },
            { name: "Reverse Geocode", href: "/services/reverse-geocode", isNew: true },
            { name: "Address Intelligence Suite", href: "/services/address-intelligence", isNew: true },
        ],
        "Business & Professional": [
            { name: "Shop and Establishment", href: "/services/shop-establishment", isNew: false },
            { name: "ICSI Membership Verification", href: "/services/icsi-membership", isNew: false },
            { name: "ROC Director Search", href: "/services/roc-director-search", isNew: true },
            { name: "Negative Due Diligence", href: "/services/negative-due-diligence", isNew: false },
        ],
        "Document & Security": [
            { name: "Advanced Forgery Lite", href: "/services/advanced-forgery-lite", isNew: false },
            { name: "Advanced Forgery", href: "/services/advanced-forgery", isNew: true },
            { name: "IP Quality Check", href: "/services/ip-quality-check", isNew: false },
            { name: "MNRL Check", href: "/services/mnrl-check", isNew: true },
            { name: "Document Authenticity Pro", href: "/services/document-authenticity", isNew: true },
        ],
        "HR Excellence Suite": [
            { name: "Employment Verification", href: "/services/employment-verification", isNew: false },
            { name: "Employment History Check", href: "/services/employment-history-check", isNew: false },
            { name: "Professional Reference Checks", href: "/services/professional-reference-checks", isNew: true },
            { name: "eReference Check", href: "/services/e-reference-check", isNew: true },
            { name: "Blue Collar Verification", href: "/services/blue-collar-verification", isNew: false },
            { name: "Education Verification", href: "/services/education-verification", isNew: false },
        ],
        "Digital Transformation (Dx)": [
            { name: "Web Application Security", href: "/services/web-application-security", isNew: false },
            { name: "Network Penetration Testing", href: "/services/network-penetration-testing", isNew: true },
            { name: "Mobile Application Security", href: "/services/mobile-application-security", isNew: true },
            { name: "GDPR Compliance", href: "/services/gdpr-compliance", isNew: false },
            { name: "Global Database Check", href: "/services/global-database-check", isNew: false },
            { name: "Digital Transformation Services", href: "/services/digital-transformation", isNew: true },
        ],
    }

    const industriesList = [
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

    const navigation = [
        {
            name: "Services",
            href: "/services",
            hasDropdown: true,
            dropDownMenu: servicesCategories,
            icon: Users,
            description: "Comprehensive verification and background screening services",
        },
        {
            name: "Industries",
            href: "/industries",
            hasDropdown: true,
            dropDownMenu: [],
            icon: Briefcase,
            description: "Tailored solutions for various industries and sectors",
        },
        {
            name: "Pricing",
            href: "/pricing",
            hasDropdown: false,
            icon: null,
            description: null,
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
                    name: "Blog",
                    href: "/resources/blog",
                    icon: BookOpen,
                    description: "Stay up-to-date with the latest industry news",
                },
                {
                    name: "Glossary",
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
        },
    ]

    const getCurrentCategoryServices = () => {
        const category = selectedCategory as keyof typeof serviceTypeProducts
        if (serviceTypeProducts[category]) {
            return serviceTypeProducts[category]
        }
        return []
    }

    return (
        <div className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Utility Bar */}
            <div className="bg-gray-800 text-white text-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-end items-center h-10">
                        <div className="flex items-center space-x-6">
                            {/* Language Dropdown */}
                            <div className="relative">
                                <div
                                    className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                                    onClick={() => setLangOpen(!langOpen)}
                                >
                                    <Globe className="h-4 w-4" />
                                    <span>{selectedLang}</span>
                                    <ChevronDown className="h-3 w-3" />
                                </div>

                                {langOpen && (
                                    <div className="absolute right-0 mt-2 w-52 bg-white text-black rounded shadow-lg z-50">
                                        <ul className="max-h-64 overflow-y-auto">
                                            {languages.map((lang) => (
                                                <li
                                                    key={lang}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${lang === selectedLang ? "bg-gray-200 font-semibold" : ""
                                                        }`}
                                                    onClick={() => {
                                                        setSelectedLang(lang);
                                                        setLangOpen(false);
                                                    }}
                                                >
                                                    {lang}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="border-t px-4 py-2 text-sm text-gray-600">
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" />
                                                <span>Detect language</span>
                                            </label>
                                            <p className="text-xs ml-6 text-gray-500">
                                                Automatically translated to English
                                            </p>
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
                                <span>Contact us</span>
                            </Link>

                            {/* Support Dropdown */}
                            <div className="relative">
                                <div
                                    className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                                    onClick={() => setSupportOpen(!supportOpen)}
                                >
                                    <HelpCircle className="h-4 w-4" />
                                    <span>Support</span>
                                    <ChevronDown className="h-3 w-3" />
                                </div>

                                {supportOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
                                        <ul>
                                            {supportLinks.map((item) => (
                                                <li key={item.label}>
                                                    <Link
                                                        href={item.href}
                                                        className="block px-4 py-2 hover:bg-gray-100"
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
                            <div className="relative">
                                <div
                                    className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                                    onClick={() => setAccountOpen(!accountOpen)}
                                >
                                    <User className="h-4 w-4" />
                                    <span>My account</span>
                                    <ChevronDown className="h-3 w-3" />
                                </div>

                                {accountOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
                                        <ul>
                                            {accountLinks.map((item) => (
                                                <li key={item.label}>
                                                    <Link
                                                        href={item.href}
                                                        className="block px-4 py-2 hover:bg-gray-100"
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
                            <div className="relative">
                                <div
                                    className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center ml-4 cursor-pointer"
                                    onClick={() => setProfileOpen(!profileOpen)}
                                >
                                    <User className="h-4 w-4" />
                                </div>

                                {profileOpen && (
                                    <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded shadow-lg p-4 z-50">
                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-semibold">Profile</h3>
                                            <button onClick={() => setProfileOpen(false)}>
                                                <X className="h-4 w-4 text-gray-500 hover:text-black" />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Your profile helps improve your interactions with select experiences.
                                        </p>
                                        {/* Buttons */}
                                        <div className="flex space-x-3">
                                            <Link href="/login">
                                                <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
                                                    Log in
                                                </button>
                                            </Link>
                                            <Link href="/contact">
                                                <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800">
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
                                <Shield className="h-10 w-10 text-blue-600" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-900">Digital Rakshak</span>
                                <span className="text-xs text-blue-600 font-medium">SECURE FOR SURE</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.hasDropdown ? (
                                        <div>
                                            <button
                                                className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 ${pathname.startsWith(item.href)
                                                    ? "text-blue-600 border-b-2 border-blue-600"
                                                    : ""
                                                    }`}
                                                onMouseEnter={() => setActiveDropdown(item.name)}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown className="h-4 w-4" />
                                            </button>

                                            {activeDropdown === item.name && (
                                                <div
                                                    className={`absolute top-full left-0 mt-0 bg-white rounded-b-xl shadow-2xl border border-gray-100 z-50 max-h-[600px] overflow-hidden ${item.name === "Resources" ? "w-64" : item.name === "Services" ? "w-[1100px]" : "w-[1000px]"
                                                        }`}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                    style={{
                                                        boxShadow:
                                                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                                        left: item.name === "Resources" ? "0" : "-200px",
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
                                                                    {item?.dropDownMenu.map((res: any) => (
                                                                        <Link
                                                                            key={res.name}
                                                                            href={res.href}
                                                                            className="flex items-center gap-3 w-full rounded-md px-3 py-2 hover:bg-gray-50 transition-colors"
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
                                                                                {servicesCategories.map((category) => (
                                                                                    <button
                                                                                        key={category}
                                                                                        onClick={() => setSelectedCategory(category)}
                                                                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                                                                            selectedCategory === category
                                                                                                ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                                                                                                : "text-gray-700 hover:bg-gray-50"
                                                                                        }`}
                                                                                    >
                                                                                        {category}
                                                                                    </button>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Right Content - Service Products Grid */}
                                                                    <div className="flex-1 p-6">
                                                                        {/* Products Grid - 3 Columns */}
                                                                        <div className="grid grid-cols-3 gap-4">
                                                                            {getCurrentCategoryServices().map((service: any) => (
                                                                                <Link
                                                                                    key={service.name}
                                                                                    href={service.href}
                                                                                    className="group relative p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent"
                                                                                >
                                                                                    <div className="flex flex-col h-full">
                                                                                        {/* Icon and Title */}
                                                                                        <div className="mb-3">
                                                                                            <div className="flex items-start gap-3 mb-2">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors">
                                                                                                        <Shield className="h-4 w-4 text-blue-600" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="flex-1 min-w-0">
                                                                                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                                                                                                        {service.name}
                                                                                                    </h4>
                                                                                                </div>
                                                                                            </div>
                                                                                            {service.isNew && (
                                                                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold whitespace-nowrap">
                                                                                                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                                                                                    New
                                                                                                </span>
                                                                                            )}
                                                                                        </div>

                                                                                        {/* Description */}
                                                                                        <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors mb-4 flex-grow">
                                                                                            Professional verification and compliance service designed to meet industry standards.
                                                                                        </p>

                                                                                        {/* Arrow Link */}
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
                                                                            ))}
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
                            <Button variant="ghost" size="icon">
                                <Search className="h-5 w-5" />
                            </Button>
                            <Link href={"/register"}>
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 hover:shadow-xl transition-all">
                                    Book Demo
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                                    onClick={() => handleDropdownToggle(item.name)}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                                {activeDropdown === item.name && (
                                                    <div className="pl-6 space-y-1">
                                                        {(item.name === "Industries"
                                                            ? industriesList
                                                            : item.name === "Resources"
                                                                ? (item as any).dropDownMenu
                                                                : servicesCategories
                                                        ).map((link: any) => (
                                                            <Link
                                                                key={link.name || link}
                                                                href={link.href || `#`}
                                                                className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                {link.name || link}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors ${pathname === item.href ? "text-blue-600" : ""
                                                    }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="px-3 py-2 space-y-2">
                                    <Button variant="outline" className="w-full bg-transparent" asChild>
                                        <Link href="/login" onClick={() => setIsOpen(false)}>
                                            Sign in to console
                                        </Link>
                                    </Button>
                                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white" asChild>
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Create account
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div >
    )
}