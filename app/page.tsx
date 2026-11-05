'use client';

import { useState, useEffect, useCallback } from "react"
import { ArrowRight, CheckCircle, Globe, Shield, Users, FileCheck, Search, Building, CreditCard, MapPin, Play, Star, TrendingUp, Zap, Lock, Database, Smartphone, Award, Eye, Clock, Target, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRegisterModal } from "@/components/register-modal-provider"
import dynamic from "next/dynamic"

const HeroAnimation = dynamic(() => import("@/components/home/HeroAnimation"), {
    ssr: false,
    loading: () => <div style={{ width: "100%", height: "400px" }} />,
});

export default function HomePage() {
    const { openRegisterModal } = useRegisterModal()
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
            iconBg: "bg-blue-500/20 text-[#76bbf8] border-blue-400/30",
        },
        {
            icon: Zap,
            title: "Launch journeys faster",
            description: "Deploy security solutions quickly with our proven methodologies",
            color: "from-purple-500 to-purple-600",
            iconBg: "bg-purple-500/20 text-purple-300 border-purple-400/30",
        },
        {
            icon: Users,
            title: "Manage fewer vendors",
            description: "One-stop solution for all your cybersecurity and compliance needs",
            color: "from-green-500 to-green-600",
            iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
        },
        {
            icon: Shield,
            title: "Catch more fraudsters",
            description: "Advanced threat detection and prevention mechanisms",
            color: "from-red-500 to-red-600",
            iconBg: "bg-rose-500/20 text-rose-300 border-rose-400/30",
        },
    ]

    const industries = [
        {
            icon: Building,
            title: "NBFC",
            description: "Enable instant security assessments, expedite compliance processes, & prevent fraud",
            color: "bg-blue-500/15 border-blue-400/25",
            iconColor: "text-[#76bbf8]",
            image: "/placeholder.svg?height=200&width=300&text=NBFC+Security",
        },
        {
            icon: TrendingUp,
            title: "Securities & Brokerages",
            description: "Manage security downtimes & prevent vulnerabilities during operations",
            color: "bg-emerald-500/15 border-emerald-400/25",
            iconColor: "text-emerald-400",
            image: "/placeholder.svg?height=200&width=300&text=Securities+Security",
        },
        {
            icon: Shield,
            title: "Insurance",
            description: "Seamless security experience across all partners & acquisition channels",
            color: "bg-purple-500/15 border-purple-400/25",
            iconColor: "text-purple-400",
            image: "/placeholder.svg?height=200&width=300&text=Insurance+Security",
        },
        {
            icon: MapPin,
            title: "Logistics & E-comm",
            description: "Secure platforms instantly & stop impersonation attacks",
            color: "bg-orange-500/15 border-orange-400/25",
            iconColor: "text-orange-400",
            image: "/placeholder.svg?height=200&width=300&text=Logistics+Security",
        },
        {
            icon: CreditCard,
            title: "Gaming",
            description: "Maximize security during transactions and eliminate identity frauds",
            color: "bg-rose-500/15 border-rose-400/25",
            iconColor: "text-rose-400",
            image: "/placeholder.svg?height=200&width=300&text=Gaming+Security",
        },
        {
            icon: Globe,
            title: "Remittance",
            description: "Reduce financial risk, ensure global compliance & enhance trust",
            color: "bg-indigo-500/15 border-indigo-400/25",
            iconColor: "text-indigo-400",
            image: "/placeholder.svg?height=200&width=300&text=Remittance+Security",
        },
        {
            icon: Database,
            title: "Crypto",
            description: "Meet your crypto compliance needs & maximize security",
            color: "bg-amber-500/15 border-amber-400/25",
            iconColor: "text-amber-400",
            image: "/placeholder.svg?height=200&width=300&text=Crypto+Security",
        },
        {
            icon: Search,
            title: "Marketplace",
            description: "Streamline security, ensure compliance & secure marketplace operations",
            color: "bg-pink-500/15 border-pink-400/25",
            iconColor: "text-pink-400",
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
        <div className="flex flex-col min-h-screen bg-[#02050f] text-white selection:bg-[#B0DAFF] selection:text-[#081a2e]">

            {/* Hero Animation (placeholder preserved) */}
            {/* <HeroAnimation /> */}

            {/* ── 1. HERO SECTION ── */}
            <section className="relative overflow-hidden pt-28 sm:pt-34 lg:pt-36 pb-16 sm:pb-24 px-[5%] lg:px-[6%] border-b border-white/[0.08]">
                {/* Background Ambient Glows & Grid Pattern */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
                <div className="absolute top-20 right-[10%] w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

                <div className="max-w-[1340px] mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Hero Content */}
                        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wider shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#76bbf8] animate-pulse" />
                                <span>Enterprise Cyber Security Suite</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.12] tracking-tight">
                                Secure your business with the best{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-indigo-300">
                                    conversion rates
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Minimize security risks and compliance gaps while maintaining business continuity and growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                                <button
                                    onClick={openRegisterModal}
                                    className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#081a2e] font-bold text-base sm:text-lg px-8 py-4 rounded-[16px] shadow-[0_0_25px_rgba(118,187,248,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
                                >
                                    <span>Contact US</span>
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right Hero Card: Trusted Companies & Rating */}
                        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-[32px] blur-2xl pointer-events-none" />

                            <div className="relative bg-[#070e22]/85 backdrop-blur-2xl rounded-[28px] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {trustedCompanies.slice(0, 4).map((company, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-400/30 rounded-xl p-3 sm:p-4 text-center transition-all flex items-center justify-center min-h-[70px]"
                                        >
                                            <Image
                                                src={company.logo || "/placeholder.svg"}
                                                alt={`${company.name} logo`}
                                                width={90}
                                                height={34}
                                                className="mx-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-all object-contain max-h-[30px]"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center pt-4 border-t border-white/10">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Count on us</p>
                                    <div className="flex justify-center items-center gap-2.5 flex-wrap">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                                            ))}
                                        </div>
                                        <span className="font-bold text-white text-base sm:text-lg">4.9/5</span>
                                        <span className="text-white/60 text-sm">Customer Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. STATS SECTION ── */}
            <section className="py-14 sm:py-20 bg-[#040817] border-b border-white/[0.08] relative">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-purple-400">
                                1000+
                            </span>{" "}
                            Customers Secured
                        </h2>
                        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Proven at scale, our security ensures protection across diverse industries and environments
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-[#070d1e]/80 border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all shadow-xl group">
                            <div className="bg-blue-500/15 border border-blue-400/30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#76bbf8] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                                <Smartphone className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Works even with legacy systems</h3>
                            <p className="text-sm sm:text-base text-white/65 leading-relaxed">Compatible with existing infrastructure</p>
                        </div>

                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-[#070d1e]/80 border border-white/10 hover:border-emerald-400/30 hover:bg-white/[0.04] transition-all shadow-xl group">
                            <div className="bg-emerald-500/15 border border-emerald-400/30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                                <Users className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Industry and size agnostic</h3>
                            <p className="text-sm sm:text-base text-white/65 leading-relaxed">Scalable solutions for all business types</p>
                        </div>

                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-[#070d1e]/80 border border-white/10 hover:border-purple-400/30 hover:bg-white/[0.04] transition-all shadow-xl group">
                            <div className="bg-purple-500/15 border border-purple-400/30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-300 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                <Globe className="h-7 w-7 sm:h-8 sm:w-8" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Compatible with 100+ frameworks</h3>
                            <p className="text-sm sm:text-base text-white/65 leading-relaxed">Extensive integration capabilities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. CONVERSION RATE COMPARISON ── */}
            <section className="py-14 sm:py-20 bg-[#02050f] border-b border-white/[0.08] relative">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                            Security implementation success rate with DigitalRakshak
                        </h2>
                    </div>

                    {/* Outer Blue Border Box - signature GST API style */}
                    <div className="relative bg-[#040d24]/80 border-2 border-[#1677ff] rounded-[24px] p-6 sm:p-10 shadow-[0_0_35px_rgba(22,119,255,0.35)] backdrop-blur-md">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3.5 h-3.5 bg-gradient-to-r from-blue-400 to-[#76bbf8] rounded-full shadow-[0_0_10px_rgba(118,187,248,0.8)]"></div>
                                            <span className="font-bold text-white text-base sm:text-lg">DigitalRakshak</span>
                                        </div>
                                        <span className="font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] to-blue-400">
                                            96%
                                        </span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-5 sm:h-6 overflow-hidden p-0.5 border border-white/10">
                                        <div
                                            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-[#76bbf8] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                            style={{ width: "96%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-3.5 h-3.5 bg-slate-500 rounded-full"></div>
                                            <span className="font-medium text-white/60 text-base sm:text-lg">Other Competitors</span>
                                        </div>
                                        <span className="font-bold text-2xl sm:text-3xl text-white/60">73%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-5 sm:h-6 overflow-hidden p-0.5 border border-white/10">
                                        <div
                                            className="bg-slate-600 h-full rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: "73%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center lg:border-l lg:border-white/10 lg:pl-10">
                                <div className="bg-blue-500/15 border border-blue-400/30 rounded-full w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                    <TrendingUp className="h-14 w-14 sm:h-18 sm:w-18 text-[#76bbf8]" />
                                </div>
                                <p className="text-xl sm:text-2xl font-bold text-white mb-1.5">23% higher success rate</p>
                                <p className="text-sm sm:text-base text-white/60">Industry-leading performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. PLATFORM FEATURES ── */}
            <section className="py-14 sm:py-20 bg-[#040817] border-b border-white/[0.08]">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                            We secure your business. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-purple-400">
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
                                    className="text-center bg-[#070d1e]/85 border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.04] transition-all duration-300 rounded-[22px] shadow-xl group overflow-hidden relative"
                                >
                                    <CardHeader className="relative z-10 pb-2">
                                        <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 rounded-2xl w-fit border shadow-lg ${feature.iconBg} group-hover:scale-110 transition-transform`}>
                                            <IconComponent className="h-7 w-7 sm:h-8 sm:w-8" />
                                        </div>
                                        <CardTitle className="text-base sm:text-xl font-bold text-white group-hover:text-[#76bbf8] transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10 pt-0">
                                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── 5. DIGITALRAKSHAK ONE PLATFORM ── */}
            <section className="py-14 sm:py-20 bg-[#02050f] border-b border-white/[0.08] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 shadow-sm">
                            <Sparkles className="w-4 h-4 text-[#76bbf8]" />
                            <span>DIGITALRAKSHAK</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">ONE platform for all your cybersecurity needs</h2>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#070d1e]/90 border border-white/10 hover:border-blue-400/40 rounded-[22px] p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group">
                            <div>
                                <div className="p-3.5 bg-blue-500/15 border border-blue-400/25 rounded-2xl w-fit mb-5 text-[#76bbf8] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                                    <Zap className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold text-white mb-5 group-hover:text-[#76bbf8] transition-colors leading-snug">
                                    Build custom security frameworks in minutes
                                </h3>
                                <ul className="space-y-3.5 text-white/75 mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">No-code security builder</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Personalize for unique business needs</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Deploy without system downtime</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base py-3 px-5 rounded-xl border border-white/15 transition-all"
                            >
                                <span>See how it works</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#070d1e]/90 border border-white/10 hover:border-emerald-400/40 rounded-[22px] p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group">
                            <div>
                                <div className="p-3.5 bg-emerald-500/15 border border-emerald-400/25 rounded-2xl w-fit mb-5 text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                                    <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold text-white mb-5 group-hover:text-emerald-400 transition-colors leading-snug">
                                    Dominate security compliance rates
                                </h3>
                                <ul className="space-y-3.5 text-white/75 mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Step-wise analytics with compliance insights</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Discover the top 5 vulnerability points</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Protection against security downtimes</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base py-3 px-5 rounded-xl border border-white/15 transition-all"
                            >
                                <span>See how it works</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#070d1e]/90 border border-white/10 hover:border-purple-400/40 rounded-[22px] p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group md:col-span-2 lg:col-span-1">
                            <div>
                                <div className="p-3.5 bg-purple-500/15 border border-purple-400/25 rounded-2xl w-fit mb-5 text-purple-300 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                    <Users className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold text-white mb-5 group-hover:text-purple-300 transition-colors leading-snug">
                                    Choose from 100+ Security Integrations
                                </h3>
                                <ul className="space-y-3.5 text-white/75 mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Hassle-free vendor management</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Category best integrations</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-sm sm:text-base">Support all security use-cases</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base py-3 px-5 rounded-xl border border-white/15 transition-all"
                            >
                                <span>See how it works</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. GLOBAL EXPANSION ── */}
            <section className="py-14 sm:py-20 bg-[#040817] border-b border-white/[0.08] overflow-hidden">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
                                Effortlessly expand{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-purple-400">
                                    across the Globe
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
                                Secure businesses anywhere in the world. No regulation or compliance standard can hold you back.
                            </p>
                            <div className="bg-[#070d1e]/90 border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl">
                                <p className="text-sm text-white/70 mb-4 sm:mb-6 font-medium">
                                    See the average security implementation success rate in your target country
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6">
                                    <input
                                        type="text"
                                        placeholder="Enter your country here"
                                        className="flex-grow px-4 py-3 border border-white/15 rounded-xl focus:outline-none focus:border-[#76bbf8] bg-white/[0.04] text-white shadow-sm text-sm sm:text-base placeholder-slate-400"
                                    />
                                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg w-full sm:w-auto text-sm sm:text-base cursor-pointer transition-all">
                                        Show Me
                                    </button>
                                </div>
                                <div className="bg-white/[0.03] rounded-xl p-4 sm:p-6 border border-white/10 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                src="/placeholder.svg?height=24&width=36&text=🇺🇸"
                                                alt="US Flag"
                                                width={36}
                                                height={24}
                                                className="rounded"
                                            />
                                            <span className="font-semibold text-white text-sm sm:text-base">United States</span>
                                        </div>
                                        <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] to-blue-400">
                                            96%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-4 lg:mt-0">
                            <div className="bg-gradient-to-br from-[#0c1630] to-[#060b18] border border-white/15 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                                <Image
                                    src="https://i.ibb.co/RGNNkJYf/unnamed.png?height=400&width=500&text=Global+Security+Coverage+Map"
                                    alt="Global security coverage map"
                                    width={500}
                                    height={400}
                                    className="w-full h-auto rounded-2xl shadow-lg object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 7. INDUSTRIES SECTION ── */}
            <section className="py-14 sm:py-20 bg-[#02050f] border-b border-white/[0.08]">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Tailored for every industry's unique needs</h2>
                        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive security solutions designed specifically for your industry requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {industries.map((industry, index) => {
                            const IconComponent = industry.icon
                            return (
                                <Card
                                    key={index}
                                    className="bg-[#070d1e]/85 border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.04] transition-all duration-300 rounded-[22px] shadow-lg group overflow-hidden"
                                >
                                    <div className="p-4 sm:p-6 pb-2 text-center">
                                        <div className={`p-3 sm:p-4 rounded-2xl w-fit mx-auto shadow-md border ${industry.color} group-hover:scale-110 transition-transform`}>
                                            <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${industry.iconColor}`} />
                                        </div>
                                    </div>
                                    <CardHeader className="pb-1 sm:pb-2 px-3 sm:px-6 pt-2 text-center">
                                        <CardTitle className="text-sm sm:text-lg font-bold text-white group-hover:text-[#76bbf8] transition-colors">
                                            {industry.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-3 sm:px-6 pb-4 sm:pb-6 pt-0 text-center">
                                        <p className="text-white/65 text-xs sm:text-sm leading-relaxed">{industry.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── 8. WHY CHOOSE DIGITALRAKSHAK SECTION ── */}
            <section className="py-14 sm:py-20 bg-[#040817] border-b border-white/[0.08]">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Why DigitalRakshak?</h2>
                        <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                            Trusted security partner delivering reliable, accurate, and compliant solutions
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">
                        {whyChooseUsFeatures.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 sm:space-x-6 p-6 sm:p-8 bg-[#070d1e]/90 border border-white/10 hover:border-white/20 rounded-2xl shadow-xl transition-all duration-300 group"
                                >
                                    <div
                                        className={`p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                                    >
                                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#76bbf8] transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/75 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── 9. SECURITY SERVICES — SUREPASS-STYLE ACCORDION ── */}
            <section className="py-14 sm:py-20 bg-[#02050f] border-b border-white/[0.08] overflow-hidden">
                <style dangerouslySetInnerHTML={{
                    __html: `
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
                        border: 1px solid rgba(255, 255, 255, 0.12);
                    }
                    .sec-card.active { 
                        flex: 4.5; 
                        border-color: rgba(56, 189, 248, 0.5);
                        box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
                    }
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
                        background: linear-gradient(to top, rgba(2,5,15,0.95) 0%, rgba(2,5,15,0.6) 45%, rgba(7,13,30,0.4) 100%);
                        transition: background 0.4s ease;
                    }
                    .sec-card.active .sec-card-overlay {
                        background: linear-gradient(to top, rgba(2,5,15,0.9) 0%, rgba(2,5,15,0.45) 50%, rgba(7,13,30,0.25) 100%);
                    }
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
                    .sec-content h3 { font-size: 23px; }
                    .sec-content p { font-size: 17px; }
                    .sec-icon-badge {
                        position: absolute;
                        top: 18px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 42px; height: 42px;
                        border-radius: 12px;
                        background: rgba(255,255,255,0.12);
                        backdrop-filter: blur(8px);
                        border: 1px solid rgba(255,255,255,0.25);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: opacity 0.25s ease, transform 0.3s ease;
                    }
                    .sec-card.active .sec-icon-badge {
                        opacity: 0;
                        transform: translateX(-50%) scale(0.7);
                    }
                    .sec-read-more {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        margin-top: 12px;
                        color: #76bbf8;
                        font-size: 13px;
                        font-weight: 600;
                        text-decoration: none;
                        transition: color 0.2s, gap 0.2s;
                    }
                    .sec-read-more:hover { color: #fff; gap: 10px; }
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
                        .sec-icon-badge { opacity: 0 !important; pointer-events: none; }
                        .sec-content {
                            opacity: 1 !important;
                            transform: translateY(0) !important;
                            pointer-events: auto !important;
                            padding: 16px 16px;
                        }
                        .sec-content h3 { font-size: 18px; }
                        .sec-content p { display: none; }
                    }
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
                            opacity: 0 !important;
                            pointer-events: none;
                        }
                        .sec-content {
                            opacity: 1 !important;
                            transform: translateY(0) !important;
                            pointer-events: auto !important;
                            padding: 24px 22px;
                        }
                        .sec-content h3 { font-size: 20px; }
                        .sec-content p { font-size: 15px; }
                    }
                `}} />
                <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
                            Securing every aspect of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] to-purple-400">
                                Customer&apos;s Journey
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive security services covering all touchpoints of your business operations
                        </p>
                    </div>

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
                                    <div
                                        className="sec-card-bg"
                                        style={{ backgroundImage: `url('${service.bgImage}')` }}
                                    />
                                    <div className="sec-card-overlay" />

                                    <div className="sec-icon-badge">
                                        <IconComponent className="h-5 w-5 text-white" />
                                    </div>

                                    <span className="sec-title-vertical">{service.name}</span>

                                    <div className="sec-content">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0">
                                                <IconComponent className="h-5 w-5 text-white" />
                                            </div>
                                            <h3 className="text-white text-lg font-bold leading-tight">{service.name}</h3>
                                        </div>
                                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
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

            {/* ── 10. IMPLEMENTATION PROCESS ── */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-[#02050f] via-[#091128] to-[#02050f] text-white relative overflow-hidden border-b border-white/[0.08]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes icon-pulse {
                        0%, 100% { box-shadow: 0 0 0 0 rgba(56,189,248,0.4), 0 0 20px rgba(56,189,248,0.15); }
                        50%      { box-shadow: 0 0 0 8px rgba(56,189,248,0), 0 0 30px rgba(56,189,248,0.35); }
                    }
                    .step-icon-ring { animation: icon-pulse 2.5s ease-in-out infinite; }
                `}} />

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-12 sm:mb-20">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300 tracking-tight">
                            Increase security compliance in 30 days
                        </h2>
                        <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Our proven methodology ensures rapid deployment and measurable results
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                        {[
                            { title: "Analyze security posture", description: "Comprehensive assessment with our experts", icon: Search },
                            { title: "Optimized framework", description: "Tailored security journey for your industry", icon: Target },
                            { title: "Personalize measures", description: "Based on your users and business requirements", icon: Users },
                            { title: "Test & optimize performance", description: "Continuous improvement and monitoring", icon: TrendingUp },
                        ].reduce<React.ReactNode[]>((acc, item, index, arr) => {
                            const IconComponent = item.icon

                            acc.push(
                                <div key={`step-${index}`} className="flex flex-col items-center text-center group w-36 sm:w-44">
                                    <div className="step-icon-ring relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-600/30 to-purple-600/30 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                                        <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-[#76bbf8] relative z-10 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                                    </div>
                                    <h3 className="text-xs sm:text-base font-semibold leading-snug mb-1 text-white group-hover:text-[#76bbf8] transition-colors">{item.title}</h3>
                                    <p className="text-white/55 text-xs leading-relaxed hidden sm:block">{item.description}</p>
                                </div>
                            )

                            if (index < arr.length - 1) {
                                acc.push(
                                    <div key={`conn-${index}`} className="hidden md:flex items-center justify-center flex-1 relative" style={{ minWidth: '48px', height: '80px' }}>
                                        <svg className="w-full" style={{ height: '20px', overflow: 'visible' }} viewBox="0 0 100 20" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id={`base-g-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
                                                    <stop offset="30%" stopColor="#818cf8" stopOpacity="0.6" />
                                                    <stop offset="70%" stopColor="#818cf8" stopOpacity="0.6" />
                                                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
                                                </linearGradient>
                                                <linearGradient id={`sweep-g-${index}`} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                                                    <stop offset="40%" stopColor="#c4b5fd" stopOpacity="0.9" />
                                                    <stop offset="60%" stopColor="#c4b5fd" stopOpacity="0.9" />
                                                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                                                    <animateTransform
                                                        attributeName="gradientTransform"
                                                        type="translate"
                                                        from="-100 0"
                                                        to="200 0"
                                                        dur={`${1.6 + index * 0.3}s`}
                                                        repeatCount="indefinite"
                                                    />
                                                </linearGradient>
                                                <filter id={`tip-glow-${index}`} x="-80%" y="-80%" width="260%" height="260%">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                                </filter>
                                            </defs>
                                            <line x1="0" y1="10" x2="88" y2="10" stroke="rgba(56,189,248,0.12)" strokeWidth="6" strokeLinecap="round" />
                                            <line x1="0" y1="10" x2="88" y2="10" stroke={`url(#base-g-${index})`} strokeWidth="2" strokeLinecap="round" />
                                            <line x1="0" y1="10" x2="88" y2="10" stroke={`url(#sweep-g-${index})`} strokeWidth="2" strokeLinecap="round" />
                                            <polygon points="88,4 100,10 88,16" fill="#818cf8" filter={`url(#tip-glow-${index})`} />
                                        </svg>

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

            {/* ── 11. PROMISE SECTION ── */}
            <section className="py-14 sm:py-20 bg-[#040817] text-white relative overflow-hidden border-b border-white/[0.08]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-transparent"></div>
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5 shadow-sm">
                            <Shield className="w-4 h-4 text-[#76bbf8]" />
                            <span>DIGITALRAKSHAK'S PROMISE</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tight">
                            We will not give up till you see{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-300 to-purple-400">
                                business impact.
                            </span>
                        </h2>
                        <p className="text-base sm:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                            Your success is our commitment. We work tirelessly until your security goals are achieved.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 12. CUSTOMER TESTIMONIAL CAROUSEL ── */}
            <section className="py-14 sm:py-24 bg-[#02050f] relative overflow-hidden border-b border-white/[0.08]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }} />
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite 2s' }} />
                </div>

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6 bg-white/[0.06] border border-white/15 backdrop-blur-md">
                            <Star className="h-4 w-4 text-amber-400 fill-current" />
                            <span className="text-white/80 text-sm font-medium">Trusted by Industry Leaders</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
                            Customers{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] to-purple-400">
                                love
                            </span>
                            {" "}DigitalRakshak!
                        </h2>
                        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">Real stories from the companies securing their future with us</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div
                                key={activeTestimonial}
                                className="rounded-3xl p-1 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 shadow-2xl backdrop-blur-2xl"
                            >
                                <div className="rounded-3xl p-6 sm:p-10 bg-[#070d1e]/80">
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
                                            <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/10">
                                                🏢 {testimonials[activeTestimonial].company}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 opacity-20">
                                            <Quote className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                                        </div>
                                    </div>

                                    <blockquote className="text-white/90 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 font-light italic">
                                        &ldquo;{testimonials[activeTestimonial].review}&rdquo;
                                    </blockquote>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                                            ))}
                                            <span className="ml-2 text-white/60 text-sm">5.0 / 5.0</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-500/15 border border-blue-400/30 text-blue-300"
                                        >
                                            <TrendingUp className="h-4 w-4" />
                                            {testimonials[activeTestimonial].metric}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={prevTestimonial}
                                id="testimonial-prev-btn"
                                aria-label="Previous testimonial"
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-7 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-[#070d1e] border border-white/20 text-white shadow-xl hover:bg-white/10 cursor-pointer"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                id="testimonial-next-btn"
                                aria-label="Next testimonial"
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-7 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-[#070d1e] border border-white/20 text-white shadow-xl hover:bg-white/10 cursor-pointer"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    id={`testimonial-dot-${i}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    onClick={() => goToTestimonial(i)}
                                    className="transition-all duration-300 rounded-full cursor-pointer"
                                    style={{
                                        width: i === activeTestimonial ? '32px' : '8px',
                                        height: '8px',
                                        background: i === activeTestimonial
                                            ? 'linear-gradient(90deg, #76bbf8, #818cf8)'
                                            : 'rgba(255,255,255,0.2)',
                                    }}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8">
                            {testimonials.map((t, i) => (
                                <button
                                    key={i}
                                    id={`testimonial-avatar-${i}`}
                                    onClick={() => goToTestimonial(i)}
                                    aria-label={`View testimonial from ${t.name}`}
                                    className={`transition-all duration-300 rounded-xl flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${t.avatarColor} cursor-pointer`}
                                    style={{
                                        width: i === activeTestimonial ? '44px' : '36px',
                                        height: i === activeTestimonial ? '44px' : '36px',
                                        opacity: i === activeTestimonial ? 1 : 0.45,
                                        boxShadow: i === activeTestimonial ? '0 0 0 3px rgba(118,187,248,0.7)' : 'none',
                                    }}
                                >
                                    {t.avatar}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 13. COMPLIANCE & SECURITY AT CORE ── */}
            <section className="py-14 sm:py-20 bg-[#040817] border-b border-white/[0.08]">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">We are compliant and secure at our core</h2>
                        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                            Built with enterprise-grade security and compliance standards from the ground up
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
                        <Card className="text-center bg-[#070d1e]/85 border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.04] transition-all duration-300 rounded-[22px] shadow-lg group">
                            <CardContent className="p-6 sm:p-8">
                                <div className="bg-emerald-500/15 border border-emerald-400/30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                                    <Lock className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors">
                                    Encrypt user details
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed">to prevent data breach and ensure privacy</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-[#070d1e]/85 border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.04] transition-all duration-300 rounded-[22px] shadow-lg group">
                            <CardContent className="p-6 sm:p-8">
                                <div className="bg-blue-500/15 border border-blue-400/30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-[#76bbf8] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                                    <Shield className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#76bbf8] transition-colors">
                                    Stay compliant
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed">with global regulations and standards</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-[#070d1e]/85 border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.04] transition-all duration-300 rounded-[22px] shadow-lg group sm:col-span-1 col-span-1">
                            <CardContent className="p-6 sm:p-8">
                                <div className="bg-purple-500/15 border border-purple-400/30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-purple-300 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                    <FileCheck className="h-7 w-7 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                                    Maintain audit trail
                                </h3>
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed">of every security assessment and action</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Certification Badges */}
                    <div className="bg-[#070d1e]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 items-center">
                            {[
                                { name: "NIST Framework", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/05/nsit-1.5.png.webp?height=80&width=80&text=NIST" },
                                { name: "SOC 2 Type II", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/05/aicpa.webp?height=80&width=80&text=SOC2" },
                                { name: "ISO 27001", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/02/iso.webp?height=80&width=80&text=ISO" },
                                { name: "GDPR Compliant", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/02/gdpr.webp?height=80&width=80&text=GDPR" },
                            ].map((cert, index) => (
                                <div key={index} className="text-center group bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-blue-400/30 rounded-2xl p-4 sm:p-5 transition-all">
                                    <div className="mb-3">
                                        <Image
                                            src={cert.logo || "/placeholder.svg"}
                                            alt={cert.name}
                                            width={80}
                                            height={80}
                                            className="mx-auto filter brightness-0 invert opacity-75 group-hover:opacity-100 transition-all w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                        />
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-white/80 group-hover:text-[#76bbf8] transition-colors">
                                        {cert.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 14. CTA SECTION ── */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-[#08122c] via-[#04091a] to-[#02050f] text-white relative overflow-hidden border-t border-white/[0.08]">
                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tight">
                        Ready to supercharge your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-300 to-indigo-200">business security?</span>
                    </h2>
                    <p className="text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-white/75 leading-relaxed">
                        🚀 Go-live in 4 hours • 🛠️ No-code Workflows • 🔧 24/7 Support • 📊 Real-time Analytics
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={openRegisterModal}
                            className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#081a2e] font-bold text-base sm:text-lg px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(118,187,248,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
                        >
                            <span>Contact US</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
