'use client';

import { useState, useEffect, useCallback } from "react"
import { ArrowRight, CheckCircle, Globe, Shield, Users, FileCheck, Search, Building, CreditCard, MapPin, Play, Star, TrendingUp, Zap, Lock, Database, Smartphone, Award, Eye, Clock, Target, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import dynamic from "next/dynamic"


const HeroAnimation = dynamic(() => import("@/components/home/HeroAnimation"), {
    ssr: false,
    loading: () => <div style={{ width: "100%", height: "400px" }} />, // placeholder while loading
});

export default function HomePage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [isTestimonialAnimating, setIsTestimonialAnimating] = useState(false)
    const [activeSecurityCard, setActiveSecurityCard] = useState(2)

    const testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            role: "CISO",
            company: "TCS",
            avatar: "RK",
            avatarColor: "from-blue-500 to-indigo-600",
            accentColor: "blue",
            review: "DigitalRakshak delivered way more than what was expected. Their KYC verification suite helped us onboard 3x more users with zero compliance issues. Couldn't have asked for more comprehensive security solutions.",
            rating: 5,
            metric: "3x faster onboarding",
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "VP of Product",
            company: "HDFC Bank",
            avatar: "PS",
            avatarColor: "from-purple-500 to-pink-600",
            accentColor: "purple",
            review: "We integrated DigitalRakshak's fraud detection APIs in under 4 hours. The real-time alerts and detailed analytics dashboard are incredibly intuitive. Our fraud rate dropped by 68% within the first month.",
            rating: 5,
            metric: "68% drop in fraud",
        },
        {
            id: 3,
            name: "Arjun Mehta",
            role: "Head of Risk & Compliance",
            company: "Wipro",
            avatar: "AM",
            avatarColor: "from-emerald-500 to-teal-600",
            accentColor: "emerald",
            review: "The geo-fencing and identity eKYC modules are best-in-class. DigitalRakshak's team was incredibly responsive and helped us stay 100% GDPR and DPDP compliant during a critical audit cycle.",
            rating: 5,
            metric: "100% audit compliance",
        },
        {
            id: 4,
            name: "Sneha Iyer",
            role: "Director of Engineering",
            company: "ICICI Bank",
            avatar: "SI",
            avatarColor: "from-orange-500 to-red-600",
            accentColor: "orange",
            review: "Exceptional developer experience! The API documentation is crystal clear, sandbox testing was seamless, and the support team is truly 24/7. We went live with UAN validation and eKYC in record time.",
            rating: 5,
            metric: "4-hour go-live",
        },
        {
            id: 5,
            name: "Vikram Nair",
            role: "CTO",
            company: "Infosys BPM",
            avatar: "VN",
            avatarColor: "from-cyan-500 to-blue-600",
            accentColor: "cyan",
            review: "DigitalRakshak is not just a vendor — they're a strategic security partner. Their business verification and shop-establishment checks have saved us millions in due-diligence costs and eliminated manual processes entirely.",
            rating: 5,
            metric: "₹2Cr+ saved in costs",
        },
    ]

    const goToTestimonial = useCallback((index: number) => {
        if (isTestimonialAnimating) return
        setIsTestimonialAnimating(true)
        setActiveTestimonial(index)
        setTimeout(() => setIsTestimonialAnimating(false), 400)
    }, [isTestimonialAnimating])

    const nextTestimonial = useCallback(() => {
        goToTestimonial((activeTestimonial + 1) % testimonials.length)
    }, [activeTestimonial, testimonials.length, goToTestimonial])

    const prevTestimonial = useCallback(() => {
        goToTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)
    }, [activeTestimonial, testimonials.length, goToTestimonial])

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000)
        return () => clearInterval(timer)
    }, [nextTestimonial])
    const trustedCompanies = [
        { name: "Infosys", logo: "https://companieslogo.com/img/orig/INFY-bf47e1fb.png?t=1720244492?height=40&width=120&text=Infosys" },
        { name: "Wipro", logo: "https://companieslogo.com/img/orig/WIT-1453b096.png?t=1739861069?height=40&width=120&text=Wipro" },
        { name: "HDFC Bank", logo: "https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1720244492?height=40&width=120&text=HDFC" },
        { name: "ICICI Bank", logo: "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1720244492?height=40&width=120&text=ICICI" },
    ]

    const platformFeatures = [
        {
            icon: TrendingUp,
            title: "Convert more users",
            description: "Increase conversion rates with streamlined security processes",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: Zap,
            title: "Launch journeys faster",
            description: "Deploy security solutions quickly with our proven methodologies",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: Users,
            title: "Manage fewer vendors",
            description: "One-stop solution for all your cybersecurity and compliance needs",
            color: "from-green-500 to-green-600",
        },
        {
            icon: Shield,
            title: "Catch more fraudsters",
            description: "Advanced threat detection and prevention mechanisms",
            color: "from-red-500 to-red-600",
        },
    ]

    const industries = [
        {
            icon: Building,
            title: "NBFC",
            description: "Enable instant security assessments, expedite compliance processes, & prevent fraud",
            color: "bg-gradient-to-br from-blue-50 to-blue-100",
            iconColor: "text-blue-600",
            image: "/placeholder.svg?height=200&width=300&text=NBFC+Security",
        },
        {
            icon: TrendingUp,
            title: "Securities & Brokerages",
            description: "Manage security downtimes & prevent vulnerabilities during operations",
            color: "bg-gradient-to-br from-green-50 to-green-100",
            iconColor: "text-green-600",
            image: "/placeholder.svg?height=200&width=300&text=Securities+Security",
        },
        {
            icon: Shield,
            title: "Insurance",
            description: "Seamless security experience across all partners & acquisition channels",
            color: "bg-gradient-to-br from-purple-50 to-purple-100",
            iconColor: "text-purple-600",
            image: "/placeholder.svg?height=200&width=300&text=Insurance+Security",
        },
        {
            icon: MapPin,
            title: "Logistics & E-comm",
            description: "Secure platforms instantly & stop impersonation attacks",
            color: "bg-gradient-to-br from-orange-50 to-orange-100",
            iconColor: "text-orange-600",
            image: "/placeholder.svg?height=200&width=300&text=Logistics+Security",
        },
        {
            icon: CreditCard,
            title: "Gaming",
            description: "Maximize security during transactions and eliminate identity frauds",
            color: "bg-gradient-to-br from-red-50 to-red-100",
            iconColor: "text-red-600",
            image: "/placeholder.svg?height=200&width=300&text=Gaming+Security",
        },
        {
            icon: Globe,
            title: "Remittance",
            description: "Reduce financial risk, ensure global compliance & enhance trust",
            color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
            iconColor: "text-indigo-600",
            image: "/placeholder.svg?height=200&width=300&text=Remittance+Security",
        },
        {
            icon: Database,
            title: "Crypto",
            description: "Meet your crypto compliance needs & maximize security",
            color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
            iconColor: "text-yellow-600",
            image: "/placeholder.svg?height=200&width=300&text=Crypto+Security",
        },
        {
            icon: Search,
            title: "Marketplace",
            description: "Streamline security, ensure compliance & secure marketplace operations",
            color: "bg-gradient-to-br from-pink-50 to-pink-100",
            iconColor: "text-pink-600",
            image: "/placeholder.svg?height=200&width=300&text=Marketplace+Security",
        },
    ]

    const securityServices = [
        { name: "ID Validation & Verification", icon: FileCheck, bgImage: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80", description: "Instantly verify government-issued IDs with real-time checks ensuring authenticity and compliance across all channels.", link: "/identity-ekyc" },
        { name: "Know Your Customer (KYC)", icon: Users, bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", description: "Streamline customer onboarding with automated KYC workflows. Stay compliant while delivering a frictionless experience.", link: "/identity-ekyc" },
        { name: "Financial Data & BGV", icon: Database, bgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", description: "Comprehensive background verification and financial data checks to mitigate risk and make confident hiring & lending decisions.", link: "/business-verification" },
        { name: "Fraud Detection", icon: Shield, bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", description: "AI-powered real-time fraud detection that catches suspicious activity before it impacts your business and customers.", link: "/services" },
        { name: "Video KYC", icon: Play, bgImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80", description: "Conduct secure, live video-based KYC sessions that replace in-person visits and accelerate remote customer onboarding.", link: "/identity-ekyc" },
        { name: "Digital Identity", icon: Smartphone, bgImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80", description: "Establish and verify digital identities with multi-factor authentication and biometric signals for ironclad security.", link: "/identity-ekyc" },
        { name: "GDPR Compliance", icon: Lock, bgImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80", description: "Achieve and maintain full GDPR & DPDP compliance with automated data governance workflows and privacy-by-design principles.", link: "/services" },
        { name: "ISO Certifications", icon: Award, bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80", description: "Navigate ISO 27001, SOC 2 and other international certification pathways with expert guidance and pre-built control frameworks.", link: "/services" },
        { name: "Compliance Auditing", icon: Award, bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", description: "End-to-end compliance auditing and reporting to keep your organization audit-ready and aligned with global standards.", link: "/services" },
        { name: "Security Assessments", icon: Search, bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", description: "Holistic security posture assessments that benchmark your controls against industry standards and surface critical gaps.", link: "/services" },
        { name: "VAPT Testing", icon: Eye, bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", description: "In-depth vulnerability assessment and penetration testing to identify and eliminate security loopholes before attackers exploit them.", link: "/services" },
        { name: "Risk Management", icon: Target, bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", description: "Proactively identify, quantify, and mitigate enterprise risks with real-time dashboards and prioritised remediation playbooks.", link: "/services" },
    ]

    const whyChooseUsFeatures = [
        {
            icon: Shield,
            title: "Compliance and Data Security",
            description: "ISO certified paperless platform for end-to-end security with enterprise-grade protection",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Target,
            title: "Customized Solutions",
            description: "Flexibility to pick and choose from 50+ security services that align with your unique needs",
            color: "from-orange-500 to-red-500",
        },
        {
            icon: Clock,
            title: "Fast Turnaround Time",
            description:
                "DigitalRakshak's robust processes ensure more than 90% of assessments completed in less than 5 days",
            color: "from-blue-500 to-indigo-500",
        },
        {
            icon: Award,
            title: "Precision and Accuracy",
            description: "Trusted by 3000+ organizations across 25+ industries. ISO compliant audit-ready reports",
            color: "from-pink-500 to-purple-500",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Animation */}
            {/* <HeroAnimation /> */}

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-14 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Secure your business with the best{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    conversion rates
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Minimize security risks and compliance gaps while maintaining business continuity and growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/register">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Contact US
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative mt-4 lg:mt-0">
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                                    {trustedCompanies.slice(0, 4).map((company, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 text-center hover:shadow-md transition-all"
                                        >
                                            <Image
                                                src={company.logo || "/placeholder.svg"}
                                                alt={`${company.name} logo`}
                                                width={80}
                                                height={30}
                                                className="mx-auto filter grayscale hover:grayscale-0 transition-all"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 mb-2">Count on us</p>
                                    <div className="flex justify-center items-center gap-2 flex-wrap">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="font-semibold text-base sm:text-lg">4.9/5</span>
                                        <span className="text-gray-500 text-sm">Customer Rating</span>
                                    </div>
                                </div>
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1000+</span>{" "}
                            Customers Secured
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Proven at scale, our security ensures protection across diverse industries and environments
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Works even with legacy systems</h3>
                            <p className="text-sm sm:text-base text-gray-600">Compatible with existing infrastructure</p>
                        </div>
                        <div className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Industry and size agnostic</h3>
                            <p className="text-sm sm:text-base text-gray-600">Scalable solutions for all business types</p>
                        </div>
                        <div className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Compatible with 100+ frameworks</h3>
                            <p className="text-sm sm:text-base text-gray-600">Extensive integration capabilities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion Rate Comparison */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Security implementation success rate with DigitalRakshak
                            </h2>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-5 sm:p-8 border border-white/20">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="space-y-6 sm:space-y-8">
                                    <div>
                                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                                <span className="font-semibold text-blue-600 text-base sm:text-lg">DigitalRakshak</span>
                                            </div>
                                            <span className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                96%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6 overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: "96%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                                <span className="font-semibold text-gray-600 text-base sm:text-lg">Other Competitors</span>
                                            </div>
                                            <span className="font-bold text-2xl sm:text-3xl text-gray-600">73%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6 overflow-hidden">
                                            <div
                                                className="bg-gray-400 h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: "73%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                                        <TrendingUp className="h-16 w-16 sm:h-20 sm:w-20 text-blue-600" />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">23% higher success rate</p>
                                    <p className="text-sm sm:text-base text-gray-600">Industry-leading performance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Features */}
            <section className="py-14 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            We secure your business. <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                You grow your business!
                            </span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                        {platformFeatures.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <Card
                                    key={index}
                                    className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden relative"
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                                    ></div>
                                    <CardHeader className="relative z-10 pb-2">
                                        <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-r ${feature.color} rounded-2xl w-fit shadow-lg`}>
                                            <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-base sm:text-xl group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10 pt-0">
                                        <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* DigitalRakshak ONE Platform */}
            <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-semibold">
                            🚀 DIGITALRAKSHAK
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">ONE platform for all your cybersecurity needs</h2>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardHeader className="relative z-10">
                                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl w-fit mb-3 sm:mb-4 shadow-lg">
                                    <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <CardTitle className="text-lg sm:text-2xl group-hover:text-blue-600 transition-colors">
                                    Build custom security frameworks in minutes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-3 sm:space-y-4 text-gray-600 mb-5 sm:mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">No-code security builder</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Personalize for unique business needs</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Deploy without system downtime</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white group-hover:border-blue-300 transition-all text-sm sm:text-base"
                                >
                                    See how it works
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardHeader className="relative z-10">
                                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mb-3 sm:mb-4 shadow-lg">
                                    <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <CardTitle className="text-lg sm:text-2xl group-hover:text-green-600 transition-colors">
                                    Dominate security compliance rates
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-3 sm:space-y-4 text-gray-600 mb-5 sm:mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Step-wise analytics with compliance insights</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Discover the top 5 vulnerability points</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Protection against security downtimes</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white group-hover:border-green-300 transition-all text-sm sm:text-base"
                                >
                                    See how it works
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden md:col-span-2 lg:col-span-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardHeader className="relative z-10">
                                <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit mb-3 sm:mb-4 shadow-lg">
                                    <Users className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <CardTitle className="text-lg sm:text-2xl group-hover:text-purple-600 transition-colors">
                                    Choose from 100+ Security Integrations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-3 sm:space-y-4 text-gray-600 mb-5 sm:mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Hassle-free vendor management</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Category best integrations</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span className="text-sm sm:text-base">Support all security use-cases</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white group-hover:border-purple-300 transition-all text-sm sm:text-base"
                                >
                                    See how it works
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Global Expansion */}
            <section className="py-14 sm:py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Effortlessly expand{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    across the Globe
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                                Secure businesses anywhere in the world. No regulation or compliance standard can hold you back.
                            </p>
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-5 sm:p-8 shadow-lg">
                                <p className="text-sm text-gray-600 mb-4 sm:mb-6 font-medium">
                                    See the average security implementation success rate in your target country
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6">
                                    <input
                                        type="text"
                                        placeholder="Enter your country here"
                                        className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm text-sm sm:text-base"
                                    />
                                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 shadow-lg w-full sm:w-auto text-sm sm:text-base">
                                        Show Me
                                    </Button>
                                </div>
                                <div className="bg-white rounded-xl p-4 sm:p-6 border shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                src="/placeholder.svg?height=24&width=36&text=🇺🇸"
                                                alt="US Flag"
                                                width={36}
                                                height={24}
                                                className="rounded"
                                            />
                                            <span className="font-semibold text-gray-900 text-sm sm:text-base">United States</span>
                                        </div>
                                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            96%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-4 lg:mt-0">
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                                <Image
                                    src="https://i.ibb.co/RGNNkJYf/unnamed.png?height=400&width=500&text=Global+Security+Coverage+Map"
                                    alt="Global security coverage map"
                                    width={500}
                                    height={400}
                                    className="w-full h-auto rounded-2xl shadow-lg object-contain"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-14 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Tailored for every industry's unique needs</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive security solutions designed specifically for your industry requirements
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {industries.map((industry, index) => {
                            const IconComponent = industry.icon
                            return (
                                <Card
                                    key={index}
                                    className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden"
                                >
                                    <div className={`${industry.color} p-4 sm:p-6 transition-all group-hover:scale-105`}>
                                        <div className="text-center mb-2 sm:mb-4">
                                            <div className={`p-3 sm:p-4 bg-white rounded-2xl w-fit mx-auto shadow-lg`}>
                                                <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${industry.iconColor}`} />
                                            </div>
                                        </div>
                                    </div>
                                    <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
                                        <CardTitle className="text-sm sm:text-lg group-hover:text-blue-600 transition-colors">
                                            {industry.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6 pt-0">
                                        <p className="text-gray-600 text-xs sm:text-sm">{industry.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose DigitalRakshak Section */}
            <section className="py-14 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why DigitalRakshak?</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                            Trusted security partner delivering reliable, accurate, and compliant solutions
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">
                        {whyChooseUsFeatures.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 sm:space-x-6 p-5 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                                >
                                    <div
                                        className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                                    >
                                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Security Services — SurePass-style Accordion */}
            <section className="py-14 sm:py-20 bg-white overflow-hidden">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    /* ── DESKTOP accordion ── */
                    .sec-accordion {
                        display: flex;
                        width: 100%;
                        height: 440px;
                        gap: 12px;
                    }
                    .sec-card {
                        position: relative;
                        flex: 1;
                        min-width: 0;
                        overflow: hidden;
                        cursor: pointer;
                        border-radius: 20px;
                        transition: flex 0.55s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .sec-card.active { flex: 4.5; }

                    .sec-card-bg {
                        position: absolute;
                        inset: 0;
                        background-size: cover;
                        background-position: center;
                        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .sec-card:hover .sec-card-bg { transform: scale(1.07); }

                    .sec-card-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 45%, rgba(15,23,42,0.35) 100%);
                        transition: background 0.4s ease;
                    }
                    .sec-card.active .sec-card-overlay {
                        background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.38) 50%, rgba(15,23,42,0.22) 100%);
                    }

                    /* Collapsed vertical title */
                    .sec-title-vertical {
                        position: absolute;
                        bottom: 26px;
                        left: 50%;
                        transform: translateX(-50%) rotate(180deg);
                        writing-mode: vertical-rl;
                        white-space: nowrap;
                        color: #fff;
                        font-size: 23px;
                        font-weight: 700;
                        letter-spacing: 0.05em;
                        opacity: 1;
                        transition: opacity 0.2s ease;
                        text-shadow: 0 2px 8px rgba(0,0,0,0.8);
                    }
                    .sec-card.active .sec-title-vertical { opacity: 0; pointer-events: none; }

                    /* Expanded content */
                    .sec-content {
                        position: absolute;
                        bottom: 0; left: 0; right: 0;
                        padding: 28px 26px;
                        opacity: 0;
                        transform: translateY(14px);
                        transition: opacity 0.32s ease 0.12s, transform 0.32s ease 0.12s;
                        pointer-events: none;
                    }
                    .sec-card.active .sec-content {
                        opacity: 1;
                        transform: translateY(0);
                        pointer-events: auto;
                    }
                    .sec-content h3 {
                        font-size: 23px;
                    }
                    .sec-content p {
                        font-size: 17px;
                    }

                    /* Icon badge (collapsed) */
                    .sec-icon-badge {
                        position: absolute;
                        top: 18px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 42px; height: 42px;
                        border-radius: 12px;
                        background: rgba(255,255,255,0.18);
                        backdrop-filter: blur(6px);
                        border: 1px solid rgba(255,255,255,0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: opacity 0.25s ease, transform 0.3s ease;
                    }
                    .sec-card.active .sec-icon-badge {
                        opacity: 0;
                        transform: translateX(-50%) scale(0.7);
                    }

                    /* Read more */
                    .sec-read-more {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        margin-top: 12px;
                        color: #93c5fd;
                        font-size: 13px;
                        font-weight: 600;
                        text-decoration: none;
                        transition: color 0.2s, gap 0.2s;
                    }
                    .sec-read-more:hover { color: #fff; gap: 10px; }

                    /* ── TABLET (641px–1023px): 2-row grid of equal fixed cards ── */
                    @media (min-width: 641px) and (max-width: 1023px) {
                        .sec-accordion {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-template-rows: repeat(2, 220px);
                            height: auto;
                            gap: 12px;
                        }
                        .sec-card { flex: none; border-radius: 16px; height: 220px; }
                        .sec-card.active { flex: none; }
                        .sec-title-vertical { display: none; }
                        .sec-icon-badge {
                            opacity: 0 !important;
                            pointer-events: none;
                        }
                        .sec-content {
                            opacity: 1 !important;
                            transform: translateY(0) !important;
                            pointer-events: auto !important;
                            padding: 16px 16px;
                        }
                        .sec-content h3 { font-size: 18px; }
                        .sec-content p { display: none; }
                    }

                    /* ── MOBILE (<641px): snap carousel, one card at a time ── */
                    @media (max-width: 640px) {
                        .sec-accordion {
                            display: flex;
                            flex-direction: row;
                            overflow-x: scroll;
                            scroll-snap-type: x mandatory;
                            -webkit-overflow-scrolling: touch;
                            height: auto;
                            gap: 14px;
                            border-radius: 0;
                            padding-bottom: 4px;
                            scrollbar-width: none;
                        }
                        .sec-accordion::-webkit-scrollbar { display: none; }
                        .sec-card {
                            flex: 0 0 82vw;
                            min-width: 82vw;
                            height: 360px;
                            border-radius: 20px;
                            scroll-snap-align: center;
                        }
                        .sec-card.active { flex: 0 0 82vw; }
                        .sec-title-vertical { display: none; }
                        .sec-icon-badge {
                            opacity: 1 !important;
                            transform: translateX(-50%) scale(1) !important;
                        }
                        .sec-card .sec-icon-badge {
                            opacity: 0 !important;
                            transform: translateX(-50%) scale(0.7) !important;
                        }
                        .sec-content {
                            opacity: 1 !important;
                            transform: translateY(0) !important;
                            pointer-events: auto !important;
                            padding: 24px 22px;
                        }
                        .sec-content h3 {
                            font-size: 20px;
                        }
                        .sec-content p {
                            font-size: 15px;
                        }
                    }
                `}} />
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Heading — dark text on white bg */}
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Securing every aspect of{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Customer&apos;s Journey
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
                            Comprehensive security services covering all touchpoints of your business operations
                        </p>
                    </div>

                    {/* Accordion / Grid / Carousel */}
                    <div className="sec-accordion">
                        {securityServices.map((service, index) => {
                            const IconComponent = service.icon
                            const isActive = activeSecurityCard === index
                            return (
                                <div
                                    key={index}
                                    className={`sec-card${isActive ? ' active' : ''}`}
                                    onMouseEnter={() => setActiveSecurityCard(index)}
                                    onClick={() => setActiveSecurityCard(index)}
                                >
                                    {/* BG image */}
                                    <div
                                        className="sec-card-bg"
                                        style={{ backgroundImage: `url('${service.bgImage}')` }}
                                    />
                                    {/* Overlay */}
                                    <div className="sec-card-overlay" />

                                    {/* Collapsed icon badge */}
                                    <div className="sec-icon-badge">
                                        <IconComponent className="h-5 w-5 text-white" />
                                    </div>

                                    {/* Collapsed vertical title (desktop only) */}
                                    <span className="sec-title-vertical">{service.name}</span>

                                    {/* Expanded content */}
                                    <div className="sec-content">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="h-5 w-5 text-white" />
                                            </div>
                                            <h3 className="text-white text-lg font-bold leading-tight">{service.name}</h3>
                                        </div>
                                        <p className="text-white/75 text-sm leading-relaxed max-w-xs">
                                            {service.description}
                                        </p>
                                        <Link href={'#'} className="sec-read-more">
                                            Read More <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
                {/* Background ambient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes icon-pulse {
                        0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4), 0 0 20px rgba(99,102,241,0.15); }
                        50%      { box-shadow: 0 0 0 8px rgba(99,102,241,0), 0 0 30px rgba(99,102,241,0.35); }
                    }
                    @keyframes beam-sweep {
                        0%   { x: -100%; }
                        100% { x: 100%; }
                    }
                    .step-icon-ring { animation: icon-pulse 2.5s ease-in-out infinite; }
                `}} />

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-12 sm:mb-20">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Increase security compliance in 30 days
                        </h2>
                        <p className="text-sm sm:text-lg text-blue-200/70 max-w-2xl mx-auto">
                            Our proven methodology ensures rapid deployment and measurable results
                        </p>
                    </div>

                    {/* Steps + Connectors row */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                        {[
                            { title: "Analyze security posture", description: "Comprehensive assessment with our experts", icon: Search },
                            { title: "Optimized framework", description: "Tailored security journey for your industry", icon: Target },
                            { title: "Personalize measures", description: "Based on your users and business requirements", icon: Users },
                            { title: "Test & optimize performance", description: "Continuous improvement and monitoring", icon: TrendingUp },
                        ].reduce<React.ReactNode[]>((acc, item, index, arr) => {
                            const IconComponent = item.icon

                            // Step node
                            acc.push(
                                <div key={`step-${index}`} className="flex flex-col items-center text-center group w-36 sm:w-44">
                                    {/* Icon ring */}
                                    <div className="step-icon-ring relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-600/60 to-purple-700/60 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                                        <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white relative z-10 drop-shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                                    </div>
                                    <h3 className="text-xs sm:text-base font-semibold leading-snug mb-1 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                                    <p className="text-blue-200/50 text-xs leading-relaxed hidden sm:block">{item.description}</p>
                                </div>
                            )

                            // Animated connector between steps
                            if (index < arr.length - 1) {
                                acc.push(
                                    <div key={`conn-${index}`} className="hidden md:flex items-center justify-center flex-1 relative" style={{ minWidth: '48px', height: '80px' }}>
                                        <svg className="w-full" style={{ height: '20px', overflow: 'visible' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                                            <defs>
                                                {/* Base track gradient — fades at both ends */}
                                                <linearGradient id={`base-g-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                                                    <stop offset="30%" stopColor="#818cf8" stopOpacity="0.6" />
                                                    <stop offset="70%" stopColor="#818cf8" stopOpacity="0.6" />
                                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                                                </linearGradient>
                                                {/* Animated sweep — bright moving highlight */}
                                                <linearGradient id={`sweep-g-${index}`} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                                                    <stop offset="40%" stopColor="#c4b5fd" stopOpacity="0.9" />
                                                    <stop offset="60%" stopColor="#c4b5fd" stopOpacity="0.9" />
                                                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                                                    <animateTransform
                                                        attributeName="gradientTransform"
                                                        type="translate"
                                                        from="-100 0"
                                                        to="200 0"
                                                        dur={`${1.6 + index * 0.3}s`}
                                                        repeatCount="indefinite"
                                                    />
                                                </linearGradient>
                                                {/* Glow filter for arrowhead */}
                                                <filter id={`tip-glow-${index}`} x="-80%" y="-80%" width="260%" height="260%">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                                </filter>
                                            </defs>

                                            {/* Outer glow track */}
                                            <line x1="0" y1="10" x2="88" y2="10"
                                                stroke="rgba(99,102,241,0.12)"
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                            />

                                            {/* Base track line */}
                                            <line x1="0" y1="10" x2="88" y2="10"
                                                stroke={`url(#base-g-${index})`}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />

                                            {/* Animated bright sweep overlay */}
                                            <line x1="0" y1="10" x2="88" y2="10"
                                                stroke={`url(#sweep-g-${index})`}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />

                                            {/* Solid filled arrowhead polygon */}
                                            <polygon
                                                points="88,4 100,10 88,16"
                                                fill="#818cf8"
                                                filter={`url(#tip-glow-${index})`}
                                            />
                                        </svg>

                                        {/* Mobile connector */}
                                        <div className="md:hidden flex justify-center mt-4 mb-4">
                                            <svg width="20" height="48" viewBox="0 0 20 48">
                                                <defs>
                                                    <linearGradient id={`mv-g-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1" />
                                                        <stop offset="50%" stopColor="#818cf8" stopOpacity="0.7" />
                                                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
                                                    </linearGradient>
                                                </defs>
                                                <line x1="10" y1="0" x2="10" y2="34" stroke={`url(#mv-g-${index})`} strokeWidth="2" strokeLinecap="round" />
                                                <polygon points="4,34 10,44 16,34" fill="#818cf8" />
                                            </svg>
                                        </div>
                                    </div>
                                )
                            }

                            return acc
                        }, [])}
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="py-14 sm:py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 font-semibold">
                            🤝 DIGITALRAKSHAK'S PROMISE
                        </Badge>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                            We will not give up till you see{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                business impact.
                            </span>
                        </h2>
                        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
                            Your success is our commitment. We work tirelessly until your security goals are achieved.
                        </p>
                    </div>
                </div>
            </section>

            {/* Customer Testimonial Carousel */}
            <section className="py-14 sm:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>
                {/* Animated background orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }} />
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite 2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white/80 text-sm font-medium">Trusted by Industry Leaders</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                            Customers{" "}
                            <span style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                love
                            </span>
                            {" "}DigitalRakshak!
                        </h2>
                        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">Real stories from the companies securing their future with us</p>
                    </div>

                    {/* Carousel */}
                    <div className="max-w-4xl mx-auto">
                        {/* Main Card */}
                        <div className="relative">
                            <div
                                key={activeTestimonial}
                                className="rounded-3xl p-1"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    animation: 'fadeSlideIn 0.4s ease-out forwards',
                                }}
                            >
                                <div className="rounded-3xl p-6 sm:p-10" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}>
                                    {/* Quote icon */}
                                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl bg-gradient-to-br ${testimonials[activeTestimonial].avatarColor} shadow-lg`}
                                            >
                                                {testimonials[activeTestimonial].avatar}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-white text-base sm:text-lg">{testimonials[activeTestimonial].name}</p>
                                            <p className="text-white/50 text-sm">{testimonials[activeTestimonial].role}</p>
                                            <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                                                🏢 {testimonials[activeTestimonial].company}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 opacity-20">
                                            <Quote className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                                        </div>
                                    </div>

                                    {/* Review text */}
                                    <blockquote className="text-white/85 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 font-light italic">
                                        &ldquo;{testimonials[activeTestimonial].review}&rdquo;
                                    </blockquote>

                                    {/* Stars + Metric */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                            <span className="ml-2 text-white/60 text-sm">5.0 / 5.0</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                                            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))', border: '1px solid rgba(139,92,246,0.4)', color: '#c4b5fd' }}
                                        >
                                            <TrendingUp className="h-4 w-4" />
                                            {testimonials[activeTestimonial].metric}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prev / Next Buttons */}
                            <button
                                onClick={prevTestimonial}
                                id="testimonial-prev-btn"
                                aria-label="Previous testimonial"
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-7 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                id="testimonial-next-btn"
                                aria-label="Next testimonial"
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-7 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Dot navigation */}
                        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    id={`testimonial-dot-${i}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    onClick={() => goToTestimonial(i)}
                                    className="transition-all duration-300 rounded-full"
                                    style={{
                                        width: i === activeTestimonial ? '32px' : '8px',
                                        height: '8px',
                                        background: i === activeTestimonial
                                            ? 'linear-gradient(90deg, #a78bfa, #60a5fa)'
                                            : 'rgba(255,255,255,0.25)',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Avatar strip */}
                        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8">
                            {testimonials.map((t, i) => (
                                <button
                                    key={i}
                                    id={`testimonial-avatar-${i}`}
                                    onClick={() => goToTestimonial(i)}
                                    aria-label={`View testimonial from ${t.name}`}
                                    className={`transition-all duration-300 rounded-xl flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${t.avatarColor}`}
                                    style={{
                                        width: i === activeTestimonial ? '44px' : '36px',
                                        height: i === activeTestimonial ? '44px' : '36px',
                                        opacity: i === activeTestimonial ? 1 : 0.45,
                                        boxShadow: i === activeTestimonial ? '0 0 0 3px rgba(167,139,250,0.6)' : 'none',
                                    }}
                                >
                                    {t.avatar}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Compliance & Security */}
            <section className="py-14 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">We are compliant and secure at our core</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Built with enterprise-grade security and compliance standards from the ground up
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
                        <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                            <CardContent className="p-5 sm:p-8">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Lock className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">
                                    Encrypt user details
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">to prevent data breach and ensure privacy</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                            <CardContent className="p-5 sm:p-8">
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                                    Stay compliant
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">with global regulations and standards</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group sm:col-span-1 col-span-1">
                            <CardContent className="p-5 sm:p-8">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <FileCheck className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                </div>
                                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                                    Maintain audit trail
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">of every security assessment and action</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Certification Badges */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-5 sm:p-8 shadow-2xl border border-white/20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 items-center">
                            {[
                                { name: "NIST Framework", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/05/nsit-1.5.png.webp?height=80&width=80&text=NIST" },
                                { name: "SOC 2 Type II", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/05/aicpa.webp?height=80&width=80&text=SOC2" },
                                { name: "ISO 27001", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/02/iso.webp?height=80&width=80&text=ISO" },
                                { name: "GDPR Compliant", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/02/gdpr.webp?height=80&width=80&text=GDPR" },
                            ].map((cert, index) => (
                                <div key={index} className="text-center group">
                                    <div className="p-3 sm:p-4 mb-2 sm:mb-4">
                                        <Image
                                            src={cert.logo || "/placeholder.svg"}
                                            alt={cert.name}
                                            width={80}
                                            height={80}
                                            className="mx-auto filter grayscale group-hover:grayscale-0 transition-all w-14 h-14 sm:w-20 sm:h-20 object-contain"
                                        />
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                        {cert.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        Ready to supercharge your <span className="text-blue-200">business security?</span>
                    </h2>
                    <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                        🚀 Go-live in 4 hours • 🛠️ No-code Workflows • 🔧 24/7 Support • 📊 Real-time Analytics
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all"
                            >
                                Contact US
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        {/* <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-base sm:text-lg font-semibold bg-transparent"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Watch Demo
                        </Button> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
