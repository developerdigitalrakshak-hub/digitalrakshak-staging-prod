"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, CheckCircle, Shield, Users, ChevronDown, AlertCircle, Sparkles, Mail, Phone, ExternalLink, User, Building2, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Zod validation schema for the registration form
const forbiddenDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "yandex.com", "protonmail.com", "zoho.com", "mail.com", "gmx.com"]

const registerSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" })
        .refine(
            (val) => {
                const domain = val.split("@")[1]?.toLowerCase()
                return domain ? !forbiddenDomains.includes(domain) : true
            },
            { message: "Please use your corporate/business email address. Personal email domains are not allowed." }
        ),
    companyName: z.string().min(1, { message: "Company name is required" }),
    countryCode: z.string().min(1, { message: "Country code is required" }),
    phoneNumber: z
        .string()
        .min(1, { message: "Phone number is required" })
        .regex(/^\d{8,12}$/, { message: "Phone number must be between 8 and 12 digits (numbers only)" }),
    gstNo: z.string().optional(),
    dropdownValue: z.string().min(1, { message: "Please select an option" }),
    agreeToTerms: z
        .boolean()
        .refine((val) => val === true, { message: "You must consent to the privacy policy and terms to proceed" }),
    agreeToMarketing: z
        .boolean()
        .refine((val) => val === true, { message: "You must agree to the marketing and opt-out terms to proceed" }),
    selectAll: z.boolean().optional(),
})

type RegisterFormValues = z.infer<typeof registerSchema>

export default function RegisterPage() {
    const { toast } = useToast()
    const [isMounted, setIsMounted] = useState(false)
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false)
    const [registeredEmail, setRegisteredEmail] = useState("")

    // Initialize React Hook Form with Zod resolver
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting, touchedFields, isValid },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            countryCode: "+91",
            phoneNumber: "",
            gstNo: "",
            dropdownValue: "",
            agreeToTerms: false,
            agreeToMarketing: false,
            selectAll: false,
        },
    })

    const agreeToTerms = watch("agreeToTerms")
    const agreeToMarketing = watch("agreeToMarketing")
    const selectAll = watch("selectAll")

    // Synchronize selectAll checkbox with agreeToTerms and agreeToMarketing
    useEffect(() => {
        if (agreeToTerms && agreeToMarketing && !selectAll) {
            setValue("selectAll", true, { shouldValidate: true })
        } else if ((!agreeToTerms || !agreeToMarketing) && selectAll) {
            setValue("selectAll", false, { shouldValidate: true })
        }
    }, [agreeToTerms, agreeToMarketing, selectAll, setValue])

    // Mount animation trigger
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const onSubmit = async (data: RegisterFormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Registered successfully:", data)
        setRegisteredEmail(data.email)
        setIsSubmittedSuccessfully(true)
        toast({
            title: "Verification Email Sent",
            description: `We have sent an activation link to ${data.email}.`,
        })
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div
                className={`container mx-auto max-w-7xl transition-all duration-1000 ease-out transform ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
            >
                {/* Logo and Home Navigation */}
                <div className="mb-12 flex justify-start">
                    <Link href="/" className="flex items-center space-x-3 group bg-white/40 hover:bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/40 shadow-sm transition-all duration-300">
                        <div className="relative">
                            <Image
                                src="/images/logo-without-tagline.jpg"
                                alt="DigitalRakshak Logo"
                                width={50}
                                height={50}
                                className="rounded-xl group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col relative pr-4">
                            <span className="text-lg font-bold text-gray-900 leading-tight">DigitalRakshak</span>
                            <span className="absolute top-0 right-0 text-[20px] font-bold text-gray-700 leading-none">™</span>
                            <span className="text-[10px] text-blue-600 font-semibold tracking-wider">SECURE | SWIFT | COMPLIANT</span>
                        </div>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column - Benefits and Information (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                                Optimize your{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Security Framework,
                                </span>
                                <br />
                                boost your compliance!
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Join leading enterprises optimizing their security postures and compliance timelines using DigitalRakshak.
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, index) => {
                                    const IconComponent = benefit.icon
                                    return (
                                        <div key={index} className="flex items-center space-x-3 bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm hover:shadow-md transition-all">
                                            <IconComponent className={`h-6 w-6 ${benefit.color} flex-shrink-0`} />
                                            <span className="text-gray-700 font-medium text-sm sm:text-base">{benefit.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Customer Testimonial */}
                        <Card className="border border-white/40 shadow-xl bg-white/60 backdrop-blur-md rounded-2xl hover:shadow-2xl transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                                        <Shield className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <blockquote className="text-gray-700 mb-4 italic text-sm sm:text-base leading-relaxed">
                                            "We take immense satisfaction in our ability to achieve a 5-minute end-to-end target TAT for
                                            security assessments, and DigitalRakshak continues to be a pivotal partner in this endeavour."
                                        </blockquote>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border border-white">
                                                <Users className="h-5 w-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">Abhishek Sharma</p>
                                                <p className="text-xs text-gray-600 font-medium">CDO at L&T Finance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Registration Card (7 cols) */}
                    <div className="lg:col-span-7 lg:pl-8">
                        <Card className="border border-white/40 shadow-2xl bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-500">
                            <CardContent className="p-6 sm:p-10 relative">
                                {!isSubmittedSuccessfully ? (
                                    <>
                                        <div className="text-center mb-8">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3 border border-blue-100 shadow-sm animate-pulse">
                                                <Sparkles className="h-3 w-3" /> Start Your Trial
                                            </span>
                                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
                                            <p className="text-sm text-gray-600 mt-2">Get access to your 7-day free trial setup.</p>
                                        </div>

                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="space-y-6">
                                                {/* Name */}
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                                                        Name*
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            placeholder="John Doe"
                                                            {...register("name")}
                                                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 bg-white transition-all ${errors.name
                                                                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500"
                                                                : touchedFields.name
                                                                    ? "border-green-300 focus:ring-green-500/10 focus:border-green-500"
                                                                    : "border-gray-300 focus:ring-blue-500/10"
                                                                }`}
                                                        />
                                                        <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                                        {touchedFields.name && !errors.name && (
                                                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-500" />
                                                        )}
                                                        {errors.name && (
                                                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-500" />
                                                        )}
                                                    </div>
                                                    {errors.name && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.name.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Email */}
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                                                        Email*
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            placeholder="you@example.com"
                                                            {...register("email")}
                                                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 bg-white transition-all ${errors.email
                                                                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500"
                                                                : touchedFields.email
                                                                    ? "border-green-300 focus:ring-green-500/10 focus:border-green-500"
                                                                    : "border-gray-300 focus:ring-blue-500/10"
                                                                }`}
                                                        />
                                                        <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                                        {touchedFields.email && !errors.email && (
                                                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-500" />
                                                        )}
                                                        {errors.email && (
                                                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-500" />
                                                        )}
                                                    </div>
                                                    {errors.email && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.email.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Company Name */}
                                                <div className="space-y-2">
                                                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-800">
                                                        Company Name*
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="companyName"
                                                            placeholder="Acme Corp"
                                                            {...register("companyName")}
                                                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-4 focus:border-blue-500 bg-white transition-all ${errors.companyName
                                                                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500"
                                                                : touchedFields.companyName
                                                                    ? "border-green-300 focus:ring-green-500/10 focus:border-green-500"
                                                                    : "border-gray-300 focus:ring-blue-500/10"
                                                                }`}
                                                        />
                                                        <Building2 className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                                        {touchedFields.companyName && !errors.companyName && (
                                                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-500" />
                                                        )}
                                                        {errors.companyName && (
                                                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-500" />
                                                        )}
                                                    </div>
                                                    {errors.companyName && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.companyName.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* GST No */}
                                                <div className="space-y-2">
                                                    <label htmlFor="gstNo" className="block text-sm font-semibold text-gray-800">
                                                        GST Number (Optional)
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="gstNo"
                                                            placeholder="22AAAAA0000A1Z5"
                                                            {...register("gstNo")}
                                                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 bg-white transition-all"
                                                        />
                                                        <FileText className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                                    </div>
                                                </div>

                                                {/* Mobile Number */}
                                                <div className="space-y-2">
                                                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-800">
                                                        Mobile Number*
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <div className="relative flex-shrink-0">
                                                            <select
                                                                id="countryCode"
                                                                {...register("countryCode")}
                                                                className="appearance-none pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 bg-white shadow-sm font-medium text-gray-700 cursor-pointer transition-all"
                                                            >
                                                                <option value="+91">🇮🇳 (+91)</option>
                                                                <option value="+1">🇺🇸 (+1)</option>
                                                                <option value="+44">🇬🇧 (+44)</option>
                                                                <option value="+61">🇦🇺 (+61)</option>
                                                            </select>
                                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                                                                <ChevronDown className="h-4 w-4" />
                                                            </div>
                                                        </div>
                                                        <div className="relative flex-grow">
                                                            <input
                                                                type="tel"
                                                                id="phoneNumber"
                                                                placeholder="98765 43210"
                                                                {...register("phoneNumber")}
                                                                className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-4 focus:border-blue-500 bg-white transition-all ${errors.phoneNumber
                                                                    ? "border-red-300 focus:ring-red-500/10 focus:border-red-500"
                                                                    : touchedFields.phoneNumber
                                                                        ? "border-green-300 focus:ring-green-500/10 focus:border-green-500"
                                                                        : "border-gray-300 focus:ring-blue-500/10"
                                                                    }`}
                                                            />
                                                            <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                                            {touchedFields.phoneNumber && !errors.phoneNumber && (
                                                                <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-500" />
                                                            )}
                                                            {errors.phoneNumber && (
                                                                <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-500" />
                                                            )}
                                                        </div>
                                                    </div>
                                                    {errors.phoneNumber && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.phoneNumber.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Dropdown Field */}
                                                <div className="space-y-2">
                                                    <label htmlFor="dropdownValue" className="block text-sm font-semibold text-gray-800">
                                                        Select Option*
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            id="dropdownValue"
                                                            {...register("dropdownValue")}
                                                            className={`w-full pl-4 pr-10 py-3 border rounded-xl appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 bg-white shadow-sm font-medium text-gray-700 cursor-pointer transition-all ${errors.dropdownValue
                                                                ? "border-red-300 focus:ring-red-500/10 focus:border-red-500"
                                                                : touchedFields.dropdownValue
                                                                    ? "border-green-300 focus:ring-green-500/10 focus:border-green-500"
                                                                    : "border-gray-300 focus:ring-blue-500/10"
                                                                }`}
                                                        >
                                                            <option value="" disabled hidden>Choose an option</option>
                                                            <option value="value1">Option 1</option>
                                                            <option value="value2">Option 2</option>
                                                            <option value="value3">Option 3</option>
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400">
                                                            <ChevronDown className="h-5 w-5" />
                                                        </div>
                                                    </div>
                                                    {errors.dropdownValue && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.dropdownValue.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Terms & Conditions consent checkboxes */}
                                            <div className="space-y-4 pt-2">
                                                {/* Consent to Terms Checkbox */}
                                                <div className="space-y-2">
                                                    <div className="flex items-start space-x-3">
                                                        <input
                                                            type="checkbox"
                                                            id="agreeToTerms"
                                                            checked={agreeToTerms || false}
                                                            onChange={(e) => {
                                                                setValue("agreeToTerms", e.target.checked, { shouldValidate: true, shouldTouch: true })
                                                            }}
                                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                                                        />
                                                        <label htmlFor="agreeToTerms" className="text-sm font-medium text-gray-700 cursor-pointer select-none leading-relaxed">
                                                            I consent to DigitalRakshak to process my data as per the{" "}
                                                            <Link href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline inline-flex items-center gap-0.5 font-semibold">
                                                                Privacy Policy <ExternalLink className="h-2.5 w-2.5" />
                                                            </Link>{" "}
                                                            and{" "}
                                                            <Link href="/terms-and-conditions" target="_blank" className="text-blue-600 hover:underline inline-flex items-center gap-0.5 font-semibold">
                                                                Terms & Services <ExternalLink className="h-2.5 w-2.5" />
                                                            </Link>. *
                                                        </label>
                                                    </div>
                                                    {errors.agreeToTerms && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.agreeToTerms.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Consent to Marketing Checkbox */}
                                                <div className="space-y-2">
                                                    <div className="flex items-start space-x-3">
                                                        <input
                                                            type="checkbox"
                                                            id="agreeToMarketing"
                                                            checked={agreeToMarketing || false}
                                                            onChange={(e) => {
                                                                setValue("agreeToMarketing", e.target.checked, { shouldValidate: true, shouldTouch: true })
                                                            }}
                                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                                                        />
                                                        <label htmlFor="agreeToMarketing" className="text-sm font-medium text-gray-700 cursor-pointer select-none leading-relaxed">
                                                            I agree to receive marketing communications and acknowledge that I can opt out at any time by writing to{" "}
                                                            <Link href="mailto:privacy@digitalrakshak.com" className="text-blue-600 hover:underline font-semibold">
                                                                privacy@digitalrakshak.com
                                                            </Link>. *
                                                        </label>
                                                    </div>
                                                    {errors.agreeToMarketing && (
                                                        <p className="text-xs font-medium text-red-600 flex items-center gap-1 pl-1">
                                                            <AlertCircle className="h-3.5 w-3.5" />
                                                            {errors.agreeToMarketing.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Select All Checkbox */}
                                                <div className="space-y-2 pt-2 border-t border-gray-100">
                                                    <div className="flex items-start space-x-3">
                                                        <input
                                                            type="checkbox"
                                                            id="selectAll"
                                                            checked={selectAll || false}
                                                            onChange={(e) => {
                                                                const checked = e.target.checked
                                                                setValue("selectAll", checked, { shouldValidate: true })
                                                                setValue("agreeToTerms", checked, { shouldValidate: true, shouldTouch: true })
                                                                setValue("agreeToMarketing", checked, { shouldValidate: true, shouldTouch: true })
                                                            }}
                                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                                                        />
                                                        <label htmlFor="selectAll" className="text-sm font-semibold text-gray-800 cursor-pointer select-none leading-relaxed">
                                                            Select all
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                                                disabled={isSubmitting || !isValid}
                                            >
                                                {isSubmitting ? "Creating Account..." : "Submit"}
                                                {!isSubmitting && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                                            </Button>
                                        </form>

                                        {/* <div className="mt-6 text-center">
                                            <p className="text-sm text-gray-600">
                                                Already have an account?{" "}
                                                <Link href="/#" className="text-blue-600 hover:underline font-semibold">
                                                    Sign in here
                                                </Link>
                                            </p>
                                        </div> */}
                                    </>
                                ) : (
                                    /* Success State View - Animated */
                                    <div className="text-center py-12 px-4 space-y-6 animate-fade-in-up">
                                        <div className="w-20 h-20 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-sm relative animate-bounce">
                                            <CheckCircle className="h-10 w-10 text-green-500" />
                                        </div>

                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Account Pending Verification</h2>
                                            <p className="text-gray-600 max-w-md mx-auto">
                                                Thank you for choosing DigitalRakshak. We've sent a verification email to:
                                            </p>
                                            <div className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 w-fit mx-auto font-mono text-sm text-blue-700 font-semibold shadow-sm">
                                                {registeredEmail}
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                                            Please click the link inside that email to verify your email address and start setting up your trials.
                                        </p>

                                        <div className="pt-6 flex flex-col gap-3 max-w-xs mx-auto">
                                            <Link href="/">
                                                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-3 font-semibold shadow transition-all cursor-pointer">
                                                    Go to Homepage
                                                </Button>
                                            </Link>
                                            <Link href="/#">
                                                <Button variant="outline" className="w-full rounded-xl py-3 font-semibold border-gray-200 hover:bg-slate-50 transition-all cursor-pointer">
                                                    Sign In Console
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
