'use client';

import { ArrowRight, CheckCircle, Globe, Shield, Users, FileCheck, Search, Building, CreditCard, MapPin, Play, Star, TrendingUp, Zap, Lock, Database, Smartphone, Award, Eye, Clock, Target } from "lucide-react"
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
        { name: "VAPT Testing", icon: Eye, bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80" },
        { name: "ID Validation & Verification", icon: FileCheck, bgImage: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&q=80" },
        { name: "Know Your Customer (KYC)", icon: Users, bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80" },
        { name: "Financial Data & BGV", icon: Database, bgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80" },
        { name: "Fraud Detection", icon: Shield, bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80" },
        { name: "Compliance Auditing", icon: Award, bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" },
        { name: "Video KYC", icon: Play, bgImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80" },
        { name: "Digital Identity Verification", icon: Smartphone, bgImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80" },
        { name: "GDPR Compliance", icon: Lock, bgImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&q=80" },
        { name: "ISO Certifications", icon: Award, bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80" },
        { name: "Security Assessments", icon: Search, bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80" },
        { name: "Risk Management", icon: Target, bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80" },
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
            {/* Announcement Banner */}
            {/* <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 px-4 text-center text-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10">
                    <span className="font-medium">🚀 The Annual Cybersecurity Excellence Report 2025 is live. </span>
                    <Link href="#" className="underline hover:no-underline font-semibold transition-all hover:text-blue-200">
                        Download now!
                    </Link>
                </div>
            </div> */}

            {/* Hero Animation */}
            {/* <div className="w-full max-w-7.2xl p-28 mx-auto"> */}
                <HeroAnimation />
            {/* </div> */}

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {/* <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-4 py-2 text-sm font-semibold">
                                🛡️ SECURITY PLATFORM
                            </Badge> */}
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Secure your business with the best{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    conversion rates
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                                Minimize security risks and compliance gaps while maintaining business continuity and growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/register">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Get a Free Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                                {/* <div className="text-center mb-6">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="relative">
                                            <Shield className="h-12 w-12 text-blue-600" />
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        DIGITALRAKSHAK ONE
                                    </h3>
                                    <p className="text-gray-600">Complete Security Platform</p>
                                </div> */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {trustedCompanies.slice(0, 4).map((company, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-all"
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
                                    <div className="flex justify-center items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="font-semibold text-lg">4.9/5</span>
                                        <span className="text-gray-500">Customer Rating</span>
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1000+</span>{" "}
                            Customers Secured
                        </h2>
                        <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                            Proven at scale, our security ensures protection across diverse industries and environments
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Works even with legacy systems</h3>
                            <p className="text-gray-600">Compatible with existing infrastructure</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry and size agnostic</h3>
                            <p className="text-gray-600">Scalable solutions for all business types</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compatible with 100+ frameworks</h3>
                            <p className="text-gray-600">Extensive integration capabilities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion Rate Comparison */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Security implementation success rate with DigitalRakshak
                            </h2>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                                <span className="font-semibold text-blue-600 text-lg">DigitalRakshak</span>
                                            </div>
                                            <span className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                96%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: "96%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                                <span className="font-semibold text-gray-600 text-lg">Other Competitors</span>
                                            </div>
                                            <span className="font-bold text-3xl text-gray-600">73%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                                            <div
                                                className="bg-gray-400 h-6 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: "73%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <TrendingUp className="h-20 w-20 text-blue-600" />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900 mb-2">23% higher success rate</p>
                                    <p className="text-gray-600">Industry-leading performance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            We secure your business. <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                You grow your business!
                            </span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                    <CardHeader className="relative z-10">
                                        <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${feature.color} rounded-2xl w-fit shadow-lg`}>
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <p className="text-gray-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* DigitalRakshak ONE Platform */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-lg px-6 py-3 font-semibold">
                            🚀 DIGITALRAKSHAK
                        </Badge>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">ONE platform for all your cybersecurity needs</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardHeader className="relative z-10">
                                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl w-fit mb-4 shadow-lg">
                                    <Zap className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                                    Build custom security frameworks in minutes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-4 text-gray-600 mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>No-code security builder</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Personalize for unique business needs</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Deploy without system downtime</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white group-hover:border-blue-300 transition-all"
                                >
                                    See how it works
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardHeader className="relative z-10">
                                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mb-4 shadow-lg">
                                    <TrendingUp className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                                    Dominate security compliance rates
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-4 text-gray-600 mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Step-wise analytics with compliance insights</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Discover the top 5 vulnerability points</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Protection against security downtimes</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white group-hover:border-green-300 transition-all"
                                >
                                    See how it works
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0"></div>
                            <CardHeader className="relative z-10">
                                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit mb-4 shadow-lg">
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                                    Choose from 100+ Security Integrations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <ul className="space-y-4 text-gray-600 mb-6">
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Hassle-free vendor management</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Category best integrations</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                        </div>
                                        <span>Support all security use-cases</span>
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    className="w-full bg-white/80 backdrop-blur-sm border-2 hover:bg-white group-hover:border-purple-300 transition-all"
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Effortlessly expand{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    across the Globe
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Secure businesses anywhere in the world. No regulation or compliance standard can hold you back.
                            </p>
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                                <p className="text-sm text-gray-600 mb-6 font-medium">
                                    See the average security implementation success rate in your target country
                                </p>
                                <div className="flex gap-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Enter your country here"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                                    />
                                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 shadow-lg">
                                        Show Me
                                    </Button>
                                </div>
                                <div className="bg-white rounded-xl p-6 border shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                src="/placeholder.svg?height=24&width=36&text=🇺🇸"
                                                alt="US Flag"
                                                width={36}
                                                height={24}
                                                className="rounded"
                                            />
                                            <span className="font-semibold text-gray-900">United States</span>
                                        </div>
                                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            96%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                                <Image
                                    src="https://i.ibb.co/RGNNkJYf/unnamed.png?height=400&width=500&text=Global+Security+Coverage+Map"
                                    alt="Global security coverage map"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored for every industry's unique needs</h2>
                        <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                            Comprehensive security solutions designed specifically for your industry requirements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => {
                            const IconComponent = industry.icon
                            return (
                                <Card
                                    key={index}
                                    className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group overflow-hidden"
                                >
                                    <div className={`${industry.color} p-6 transition-all group-hover:scale-105`}>
                                        <div className="text-center mb-4">
                                            <div className={`p-4 bg-white rounded-2xl w-fit mx-auto shadow-lg`}>
                                                <IconComponent className={`h-8 w-8 ${industry.iconColor}`} />
                                            </div>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                            {industry.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm">{industry.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose DigitalRakshak Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why DigitalRakshak?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Trusted security partner delivering reliable, accurate, and compliant solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {whyChooseUsFeatures.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="flex items-start space-x-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                                >
                                    <div
                                        className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                                    >
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Security Services */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Securing every aspect of{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Customer's Journey
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                            Comprehensive security services covering all touchpoints of your business operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {securityServices.map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl group border border-white/30 transition-all duration-300 hover:-translate-y-1"
                                    style={{ minHeight: '160px' }}
                                >
                                    {/* Background image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${service.bgImage}')` }}
                                    />
                                    {/* Dark gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-blue-900/50 group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300" />
                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center" style={{ minHeight: '160px' }}>
                                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                                            <IconComponent className="h-6 w-6 text-white drop-shadow" />
                                        </div>
                                        <span className="text-white font-semibold text-sm leading-tight drop-shadow-md">
                                            {service.name}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
                {/* Background ambient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <style dangerouslySetInnerHTML={{__html: `
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

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Increase security compliance in 90 days
                        </h2>
                        <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
                            Our proven methodology ensures rapid deployment and measurable results
                        </p>
                    </div>

                    {/* Steps + Connectors row */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                        {[
                            { title: "Analyze security posture",      description: "Comprehensive assessment with our experts",        icon: Search    },
                            { title: "Optimized framework",           description: "Tailored security journey for your industry",      icon: Target    },
                            { title: "Personalize measures",          description: "Based on your users and business requirements",   icon: Users     },
                            { title: "Test & optimize performance",   description: "Continuous improvement and monitoring",           icon: TrendingUp },
                        ].reduce<React.ReactNode[]>((acc, item, index, arr) => {
                            const IconComponent = item.icon

                            // Step node
                            acc.push(
                                <div key={`step-${index}`} className="flex flex-col items-center text-center group w-44">
                                    {/* Icon ring */}
                                    <div className="step-icon-ring relative w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600/60 to-purple-700/60 backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                                        <IconComponent className="h-8 w-8 text-white relative z-10 drop-shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                                    </div>
                                    <h3 className="text-base font-semibold leading-snug mb-1 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                                    <p className="text-blue-200/50 text-xs leading-relaxed">{item.description}</p>
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
                                                    <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.1" />
                                                    <stop offset="30%"  stopColor="#818cf8" stopOpacity="0.6" />
                                                    <stop offset="70%"  stopColor="#818cf8" stopOpacity="0.6" />
                                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                                                </linearGradient>
                                                {/* Animated sweep — bright moving highlight */}
                                                <linearGradient id={`sweep-g-${index}`} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%"   stopColor="#a78bfa" stopOpacity="0" />
                                                    <stop offset="40%"  stopColor="#c4b5fd" stopOpacity="0.9" />
                                                    <stop offset="60%"  stopColor="#c4b5fd" stopOpacity="0.9" />
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
                                                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
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
                                                        <stop offset="0%"   stopColor="#818cf8" stopOpacity="0.1" />
                                                        <stop offset="50%"  stopColor="#818cf8" stopOpacity="0.7" />
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
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-lg px-6 py-3 font-semibold">
                            🤝 DIGITALRAKSHAK'S PROMISE
                        </Badge>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            We will not give up till you see{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                business impact.
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                            Your success is our commitment. We work tirelessly until your security goals are achieved.
                        </p>
                    </div>
                </div>
            </section>

            {/* Customer Testimonial */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Customers love DigitalRakshak!</h2>
                        <p className="text-xl text-gray-600">See what our clients say about our security solutions</p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <Card className="border-0 shadow-2xl overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid lg:grid-cols-2">
                                    <div className="p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
                                        <Image
                                            src="/placeholder.svg?height=80&width=150&text=TCS+Logo"
                                            alt="TCS Logo"
                                            width={150}
                                            height={80}
                                            className="mb-8"
                                        />
                                        <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                                            "DigitalRakshak delivered way more than what was expected. Couldn't have asked for more
                                            comprehensive security solutions."
                                        </blockquote>
                                        <div className="border-l-4 border-blue-600 pl-6">
                                            <p className="font-semibold text-gray-900 text-lg">Rajesh Kumar</p>
                                            <p className="text-gray-600">CISO, TCS</p>
                                        </div>
                                    </div>
                                    <div className="p-12 bg-white flex flex-col justify-center">
                                        <div className="text-center">
                                            <div className="from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                                {/* <Shield className="h-10 w-10 text-white" /> */}
                                                <Image src="/images/logo.png" alt="DigitalRakshak Logo" width={250} height={250} />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                                TCS partners with DigitalRakshak for Swift Security Implementation
                                            </h3>
                                            <div className="flex justify-center items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-blue-600 font-semibold text-lg">5.0 Customer Rating</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Compliance & Security */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">We are compliant and secure at our core</h2>
                        <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                            Built with enterprise-grade security and compliance standards from the ground up
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                            <CardContent className="p-8">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Lock className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                                    Encrypt user details
                                </h3>
                                <p className="text-gray-600">to prevent data breach and ensure privacy</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                            <CardContent className="p-8">
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Shield className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                                    Stay compliant
                                </h3>
                                <p className="text-gray-600">with global regulations and standards</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                            <CardContent className="p-8">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <FileCheck className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                                    Maintain audit trail
                                </h3>
                                <p className="text-gray-600">of every security assessment and action</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Certification Badges */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                            {[
                                { name: "NIST Framework", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/05/nsit-1.5.png.webp?height=80&width=80&text=NIST" },
                                { name: "SOC 2 Type II", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/05/aicpa.webp?height=80&width=80&text=SOC2" },
                                { name: "ISO 27001", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/02/iso.webp?height=80&width=80&text=ISO" },
                                { name: "GDPR Compliant", logo: "https://cdn.hyperverge.co/wp-content/uploads/2024/02/gdpr.webp?height=80&width=80&text=GDPR" },
                            ].map((cert, index) => (
                                <div key={index} className="text-center group">
                                    <div className="p-4 mb-4">
                                        <Image
                                            src={cert.logo || "/placeholder.svg"}
                                            alt={cert.name}
                                            width={80}
                                            height={80}
                                            className="mx-auto filter grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                        {cert.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Ready to supercharge your <span className="text-blue-200">business security?</span>
                    </h2>
                    <p className="text-xl mb-8 max-w-6xl mx-auto text-blue-100 leading-relaxed">
                        🚀 Go-live in 4 hours • 🛠️ No-code Workflows • 🔧 24/7 Support • 📊 Real-time Analytics
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all"
                            >
                                Book a demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
