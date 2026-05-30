"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle, Shield, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        corporateEmail: "",
        phoneNumber: "",
        countryCode: "+91",
        hearAboutUs: "",
        agreeToTerms: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
    }

    const benefits = [
        {
            icon: CheckCircle,
            text: "Minimize security risks during business operations",
            color: "text-blue-600",
        },
        {
            icon: CheckCircle,
            text: "Improve compliance timelines with optimized frameworks",
            color: "text-blue-600",
        },
        {
            icon: CheckCircle,
            text: "Seamless user experience with enhanced security protocols",
            color: "text-blue-600",
        },
    ]

    const trustedCompanies = [
        { name: "TCS", logo: "/placeholder.svg?height=40&width=120&text=TCS" },
        { name: "Infosys", logo: "/placeholder.svg?height=40&width=120&text=Infosys" },
        { name: "Wipro", logo: "/placeholder.svg?height=40&width=120&text=Wipro" },
        { name: "HDFC", logo: "/placeholder.svg?height=40&width=120&text=HDFC" },
        { name: "ICICI", logo: "/placeholder.svg?height=40&width=120&text=ICICI" },
        { name: "SBI", logo: "/placeholder.svg?height=40&width=120&text=SBI" },
    ]

    const ratings = [
        { year: "2022", rating: "High Performer", color: "bg-orange-500" },
        { year: "2022", rating: "High Performer", color: "bg-orange-500" },
        { year: "2023", rating: "Leader", color: "bg-red-500" },
        { year: "2023", rating: "Momentum Leader", color: "bg-red-500" },
        { year: "2023", rating: "Leader", color: "bg-red-500" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Side - Benefits and Information */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Optimize your{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Security Framework,
                                </span>
                                <br />
                                boost your compliance!
                            </h1>

                            <div className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon
                                    return (
                                        <div key={index} className="flex items-center space-x-3">
                                            <IconComponent className={`h-5 w-5 ${benefit.color}`} />
                                            <span className="text-gray-700">{benefit.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Customer Testimonial */}
                        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <blockquote className="text-gray-700 mb-4 italic">
                                            "We take immense satisfaction in our ability to achieve a 5-minute end-to-end target TAT for
                                            security assessments, and DigitalRakshak continues to be a pivotal partner in this endeavour."
                                        </blockquote>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <Users className="h-5 w-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Abhishek Sharma</p>
                                                <p className="text-sm text-gray-600">CDO at L&T Finance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Trusted Companies */}
                        {/* <div className="space-y-4">
                            <p className="text-sm text-gray-600 font-medium">Trusted by leading companies</p>
                            <div className="grid grid-cols-3 gap-4">
                                {trustedCompanies.map((company, index) => (
                                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/80 transition-all">
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
                        </div> */}
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="lg:pl-8">
                        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign up</h2>
                                    <p className="text-gray-600">Start your 30-day free trial.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="corporateEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                            Corporate Email*
                                        </label>
                                        <input
                                            type="email"
                                            id="corporateEmail"
                                            name="corporateEmail"
                                            value={formData.corporateEmail}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                                            placeholder="Enter your corporate email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone number (With Country Code)*
                                        </label>
                                        <div className="flex space-x-2">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleInputChange}
                                                className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                                            >
                                                <option value="+91">India (+91)</option>
                                                <option value="+1">USA (+1)</option>
                                                <option value="+44">UK (+44)</option>
                                                <option value="+61">Australia (+61)</option>
                                            </select>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                                                placeholder="Enter phone number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                                            Where did you hear about us?*
                                        </label>
                                        <textarea
                                            id="hearAboutUs"
                                            name="hearAboutUs"
                                            value={formData.hearAboutUs}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm resize-none"
                                            placeholder="Tell us how you discovered DigitalRakshak"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-xs text-gray-600 leading-relaxed">
                                            By clicking Submit, you agree that you:
                                            <br />
                                            1. Consent to DigitalRakshak to process your data as per the{" "}
                                            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                                                Privacy Policy
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy-notice" className="text-blue-600 hover:underline">
                                                Privacy Notice
                                            </Link>
                                            , and
                                            <br />
                                            2. Agree to receive marketing communications from DigitalRakshak and acknowledge that you can opt
                                            out at any time by writing to us at{" "}
                                            <Link href="mailto:privacy@digitalrakshak.co" className="text-blue-600 hover:underline">
                                                privacy@digitalrakshak.co
                                            </Link>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="agreeToTerms"
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleInputChange}
                                                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                required
                                            />
                                            <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                                                I agree to the above terms. *
                                            </label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                        disabled={!formData.agreeToTerms}
                                    >
                                        Submit
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>

                                <div className="mt-6 text-center">
                                    <p className="text-sm text-gray-600">
                                        Already have an account?{" "}
                                        <Link href="/login" className="text-blue-600 hover:underline font-medium">
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
