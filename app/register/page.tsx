"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    ArrowRight,
    CheckCircle,
    Shield,
    Users,
    ChevronDown,
    AlertCircle,
    Sparkles,
    Mail,
    Phone,
    ExternalLink,
    User,
    Building2,
    FileText,
    Briefcase,
    Loader2,
    RotateCcw,
    BadgeCheck
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Country, InquiryOption } from "@/lib/types/front-api"
import { useFrontApiData, getFlagEmoji, submitInquiry } from "@/lib/api/front-client"

// Forbidden personal email domains for Business Entity validation
const forbiddenDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "yandex.com",
    "protonmail.com",
    "zoho.com",
    "mail.com",
    "gmx.com"
]

// Zod validation schema for Business Entity
const businessSchema = z.object({
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
    countryId: z.coerce.number().min(1, { message: "Please select a country" }),
    phoneNumber: z
        .string()
        .min(1, { message: "Phone number is required" })
        .regex(/^\d{7,15}$/, { message: "Phone number must be between 7 and 15 digits (numbers only)" }),
    gstNo: z.string().optional(),
    optionId: z.coerce.number().min(1, { message: "Please select an inquiry option" }),
    agreeToTerms: z
        .boolean()
        .refine((val) => val === true, { message: "You must consent to the privacy policy and terms to proceed" }),
    agreeToMarketing: z
        .boolean()
        .refine((val) => val === true, { message: "You must agree to the marketing and opt-out terms to proceed" }),
    selectAll: z.boolean().optional(),
})

// Zod validation schema for Professionals (Personal email allowed, company name & GST omitted)
const professionalSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),
    countryId: z.coerce.number().min(1, { message: "Please select a country" }),
    phoneNumber: z
        .string()
        .min(1, { message: "Phone number is required" })
        .regex(/^\d{7,15}$/, { message: "Phone number must be between 7 and 15 digits (numbers only)" }),
    optionId: z.coerce.number().min(1, { message: "Please select an inquiry option" }),
    agreeToTerms: z
        .boolean()
        .refine((val) => val === true, { message: "You must consent to the privacy policy and terms to proceed" }),
    agreeToMarketing: z
        .boolean()
        .refine((val) => val === true, { message: "You must agree to the marketing and opt-out terms to proceed" }),
    selectAll: z.boolean().optional(),
})

type BusinessFormValues = z.infer<typeof businessSchema>
type ProfessionalFormValues = z.infer<typeof professionalSchema>

interface InquirySuccessDetails {
    email: string
    inquiryId?: number
    status?: string
    country?: string
    option?: string
}

interface FormProps {
    countries: Country[]
    inquiryOptions: InquiryOption[]
    isLoadingCountries: boolean
    isLoadingOptions: boolean
    defaultCountryId?: number
    onSuccess: (details: InquirySuccessDetails) => void
}

// ----------------------------------------------------
// 1st Tab: Business Entity Form
// ----------------------------------------------------
function BusinessEntityForm({
    countries,
    inquiryOptions,
    isLoadingCountries,
    isLoadingOptions,
    defaultCountryId,
    onSuccess
}: FormProps) {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setError,
        formState: { errors, isSubmitting, touchedFields, isValid },
    } = useForm<BusinessFormValues>({
        resolver: zodResolver(businessSchema),
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            countryId: defaultCountryId || 2,
            phoneNumber: "",
            gstNo: "",
            optionId: undefined,
            agreeToTerms: false,
            agreeToMarketing: false,
            selectAll: false,
        },
    })

    const selectedCountryId = watch("countryId")
    const agreeToTerms = watch("agreeToTerms")
    const agreeToMarketing = watch("agreeToMarketing")
    const selectAll = watch("selectAll")

    // Auto-update countryId when defaultCountryId is available
    useEffect(() => {
        if (defaultCountryId && (!selectedCountryId || selectedCountryId === 0)) {
            setValue("countryId", defaultCountryId, { shouldValidate: true })
        }
    }, [defaultCountryId, selectedCountryId, setValue])

    useEffect(() => {
        if (agreeToTerms && agreeToMarketing && !selectAll) {
            setValue("selectAll", true, { shouldValidate: true })
        } else if ((!agreeToTerms || !agreeToMarketing) && selectAll) {
            setValue("selectAll", false, { shouldValidate: true })
        }
    }, [agreeToTerms, agreeToMarketing, selectAll, setValue])

    const selectedCountry = countries.find((c) => c.id === Number(selectedCountryId))
    const phonePrefix = selectedCountry?.phone_code ? `+${selectedCountry.phone_code}` : "+91"

    const onSubmit = async (data: BusinessFormValues) => {
        const payload = {
            type: "business",
            name: data.name.trim(),
            business_email: data.email.trim(),
            company_name: data.companyName.trim(),
            gst_number: data.gstNo?.trim() || undefined,
            mobile_number: data.phoneNumber.trim(),
            country_id: Number(data.countryId) || undefined,
            option_id: Number(data.optionId) || undefined,
            consent: {
                terms: data.agreeToTerms,
                marketing: data.agreeToMarketing,
            },
        }

        const res = await submitInquiry(payload)

        if (res.success && res.data) {
            toast({
                title: "Inquiry Submitted Successfully",
                description: `Inquiry #${res.data.id} has been recorded with status: ${res.data.status}.`,
            })
            onSuccess({
                email: data.email,
                inquiryId: res.data.id,
                status: res.data.status,
                country: res.data.country || undefined,
                option: res.data.option || undefined,
            })
            return
        }

        if (res.status === 422 && res.errors) {
            // Field-level validation messages from API
            Object.entries(res.errors).forEach(([field, msgs]) => {
                const message = Array.isArray(msgs) ? msgs.join(" ") : String(msgs)
                if (field === "name") setError("name", { message })
                else if (field === "business_email") setError("email", { message })
                else if (field === "company_name") setError("companyName", { message })
                else if (field === "gst_number") setError("gstNo", { message })
                else if (field === "mobile_number") setError("phoneNumber", { message })
                else if (field === "country_id") setError("countryId", { message })
                else if (field === "option_id") setError("optionId", { message })
            })
            toast({
                title: "Validation Error (422)",
                description: res.message || "Please correct the highlighted form errors.",
                variant: "destructive",
            })
            return
        }

        if (res.status === 401) {
            toast({
                title: "Authentication Error (401)",
                description: "API Token is missing or invalid. Please configure DIGITALRAKSHAK_API_TOKEN in .env.local",
                variant: "destructive",
            })
            return
        }

        toast({
            title: "Submission Error",
            description: res.message || "Unable to submit inquiry. Please try again.",
            variant: "destructive",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                    <label htmlFor="bus-name" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Name*
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="bus-name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.name
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.name
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        />
                        <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        {touchedFields.name && !errors.name && (
                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                        )}
                        {errors.name && (
                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                        )}
                    </div>
                    {errors.name && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email (With Corporate Email Validation) */}
                <div className="space-y-1.5">
                    <label htmlFor="bus-email" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Business Email*
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="bus-email"
                            placeholder="alex@company.com"
                            {...register("email")}
                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.email
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.email
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        />
                        <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        {touchedFields.email && !errors.email && (
                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                        )}
                        {errors.email && (
                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                        )}
                    </div>
                    {errors.email && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                    <label htmlFor="bus-companyName" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Company Name*
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="bus-companyName"
                            placeholder="Acme Corp"
                            {...register("companyName")}
                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.companyName
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.companyName
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        />
                        <Building2 className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        {touchedFields.companyName && !errors.companyName && (
                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                        )}
                        {errors.companyName && (
                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                        )}
                    </div>
                    {errors.companyName && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.companyName.message}
                        </p>
                    )}
                </div>

                {/* GST No */}
                <div className="space-y-1.5">
                    <label htmlFor="bus-gstNo" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        GST Number (Optional)
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="bus-gstNo"
                            placeholder="22AAAAA0000A1Z5"
                            {...register("gstNo")}
                            className="w-full pl-11 pr-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all"
                        />
                        <FileText className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                {/* Country & Mobile Number */}
                <div className="space-y-1.5">
                    <label htmlFor="bus-phoneNumber" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Mobile Number*
                    </label>
                    <div className="flex gap-2.5">
                        {/* Dynamic Country Dropdown */}
                        <div className="relative flex-shrink-0 w-32 sm:w-40">
                            <select
                                id="bus-countryId"
                                {...register("countryId")}
                                className="w-full appearance-none pl-3 pr-8 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs sm:text-sm truncate"
                            >
                                {isLoadingCountries ? (
                                    <option value="" className="bg-[#0b0e1a] text-white">Loading...</option>
                                ) : (
                                    countries.map((country) => (
                                        <option key={country.id} value={country.id} className="bg-[#0b0e1a] text-white">
                                            {country.iso_code_2} (+{country.phone_code})
                                        </option>
                                    ))
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-400">
                                <ChevronDown className="h-4 w-4" />
                            </div>
                        </div>

                        {/* Mobile Number Input */}
                        <div className="relative flex-grow">
                            <input
                                type="tel"
                                id="bus-phoneNumber"
                                placeholder="9876543210"
                                {...register("phoneNumber")}
                                className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.phoneNumber
                                    ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                    : touchedFields.phoneNumber
                                        ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                        : "border-white/10"
                                    }`}
                            />
                            <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            {touchedFields.phoneNumber && !errors.phoneNumber && (
                                <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                            )}
                            {errors.phoneNumber && (
                                <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                            )}
                        </div>
                    </div>
                    {errors.countryId && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.countryId.message}
                        </p>
                    )}
                    {errors.phoneNumber && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* Inquiry Option Dropdown */}
                <div className="space-y-1.5">
                    <label htmlFor="bus-optionId" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Inquiry Option*
                    </label>
                    <div className="relative">
                        <select
                            id="bus-optionId"
                            {...register("optionId")}
                            defaultValue=""
                            className={`w-full pl-4 pr-10 py-3 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs sm:text-sm ${errors.optionId
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.optionId
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        >
                            <option value="" disabled hidden className="bg-[#0b0e1a] text-gray-400">
                                {isLoadingOptions ? "Loading inquiry options..." : "Choose an inquiry option"}
                            </option>
                            {inquiryOptions.map((opt) => (
                                <option key={opt.id} value={opt.id} className="bg-[#0b0e1a] text-white">
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400">
                            <ChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                    {errors.optionId && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.optionId.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Terms & Conditions consent checkboxes */}
            <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="bus-agreeToTerms"
                            checked={agreeToTerms || false}
                            onChange={(e) => {
                                setValue("agreeToTerms", e.target.checked, { shouldValidate: true, shouldTouch: true })
                            }}
                            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                        />
                        <label htmlFor="bus-agreeToTerms" className="text-xs sm:text-sm font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                            I consent to DigitalRakshak to process my data as per the{" "}
                            <Link href="/privacy-policy" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                                Privacy Policy <ExternalLink className="h-2.5 w-2.5" />
                            </Link>{" "}
                            and{" "}
                            <Link href="/terms-and-conditions" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                                Terms & Services <ExternalLink className="h-2.5 w-2.5" />
                            </Link>. *
                        </label>
                    </div>
                    {errors.agreeToTerms && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.agreeToTerms.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="bus-agreeToMarketing"
                            checked={agreeToMarketing || false}
                            onChange={(e) => {
                                setValue("agreeToMarketing", e.target.checked, { shouldValidate: true, shouldTouch: true })
                            }}
                            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                        />
                        <label htmlFor="bus-agreeToMarketing" className="text-xs sm:text-sm font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                            I agree to receive marketing communications and acknowledge that I can opt out at any time by writing to{" "}
                            <Link href="mailto:privacy@digitalrakshak.com" className="text-[#76bbf8] hover:underline font-semibold">
                                privacy@digitalrakshak.com
                            </Link>. *
                        </label>
                    </div>
                    {errors.agreeToMarketing && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.agreeToMarketing.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="bus-selectAll"
                            checked={selectAll || false}
                            onChange={(e) => {
                                const checked = e.target.checked
                                setValue("selectAll", checked, { shouldValidate: true })
                                setValue("agreeToTerms", checked, { shouldValidate: true, shouldTouch: true })
                                setValue("agreeToMarketing", checked, { shouldValidate: true, shouldTouch: true })
                            }}
                            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                        />
                        <label htmlFor="bus-selectAll" className="text-xs sm:text-sm font-semibold text-white cursor-pointer select-none leading-relaxed">
                            Select all
                        </label>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 rounded-xl text-base font-bold shadow-[0_4px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !isValid}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Submitting Inquiry...</span>
                    </>
                ) : (
                    <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
        </form>
    )
}

// ----------------------------------------------------
// 2nd Tab: Professional Form
// ----------------------------------------------------
function ProfessionalForm({
    countries,
    inquiryOptions,
    isLoadingCountries,
    isLoadingOptions,
    defaultCountryId,
    onSuccess
}: FormProps) {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setError,
        formState: { errors, isSubmitting, touchedFields, isValid },
    } = useForm<ProfessionalFormValues>({
        resolver: zodResolver(professionalSchema),
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            countryId: defaultCountryId || 2,
            phoneNumber: "",
            optionId: undefined,
            agreeToTerms: false,
            agreeToMarketing: false,
            selectAll: false,
        },
    })

    const selectedCountryId = watch("countryId")
    const agreeToTerms = watch("agreeToTerms")
    const agreeToMarketing = watch("agreeToMarketing")
    const selectAll = watch("selectAll")

    // Auto-update countryId when defaultCountryId is available
    useEffect(() => {
        if (defaultCountryId && (!selectedCountryId || selectedCountryId === 0)) {
            setValue("countryId", defaultCountryId, { shouldValidate: true })
        }
    }, [defaultCountryId, selectedCountryId, setValue])

    useEffect(() => {
        if (agreeToTerms && agreeToMarketing && !selectAll) {
            setValue("selectAll", true, { shouldValidate: true })
        } else if ((!agreeToTerms || !agreeToMarketing) && selectAll) {
            setValue("selectAll", false, { shouldValidate: true })
        }
    }, [agreeToTerms, agreeToMarketing, selectAll, setValue])

    const selectedCountry = countries.find((c) => c.id === Number(selectedCountryId))
    const phonePrefix = selectedCountry?.phone_code ? `+${selectedCountry.phone_code}` : "+91"

    const onSubmit = async (data: ProfessionalFormValues) => {
        const payload = {
            type: "professional",
            name: data.name.trim(),
            business_email: data.email.trim(),
            mobile_number: data.phoneNumber.trim(),
            country_id: Number(data.countryId) || undefined,
            option_id: Number(data.optionId) || undefined,
            consent: {
                terms: data.agreeToTerms,
                marketing: data.agreeToMarketing,
            },
        }

        const res = await submitInquiry(payload)

        if (res.success && res.data) {
            toast({
                title: "Inquiry Submitted Successfully",
                description: `Inquiry #${res.data.id} has been recorded with status: ${res.data.status}.`,
            })
            onSuccess({
                email: data.email,
                inquiryId: res.data.id,
                status: res.data.status,
                country: res.data.country || undefined,
                option: res.data.option || undefined,
            })
            return
        }

        if (res.status === 422 && res.errors) {
            Object.entries(res.errors).forEach(([field, msgs]) => {
                const message = Array.isArray(msgs) ? msgs.join(" ") : String(msgs)
                if (field === "name") setError("name", { message })
                else if (field === "business_email") setError("email", { message })
                else if (field === "mobile_number") setError("phoneNumber", { message })
                else if (field === "country_id") setError("countryId", { message })
                else if (field === "option_id") setError("optionId", { message })
            })
            toast({
                title: "Validation Error (422)",
                description: res.message || "Please correct the highlighted form errors.",
                variant: "destructive",
            })
            return
        }

        if (res.status === 401) {
            toast({
                title: "Authentication Error (401)",
                description: "API Token is missing or invalid. Please configure DIGITALRAKSHAK_API_TOKEN in .env.local",
                variant: "destructive",
            })
            return
        }

        toast({
            title: "Submission Error",
            description: res.message || "Unable to submit inquiry. Please try again.",
            variant: "destructive",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                    <label htmlFor="prof-name" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Name*
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="prof-name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.name
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.name
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        />
                        <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        {touchedFields.name && !errors.name && (
                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                        )}
                        {errors.name && (
                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                        )}
                    </div>
                    {errors.name && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email (Without Business Email Restriction) */}
                <div className="space-y-1.5">
                    <label htmlFor="prof-email" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Email*
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="prof-email"
                            placeholder="you@example.com"
                            {...register("email")}
                            className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.email
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.email
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        />
                        <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        {touchedFields.email && !errors.email && (
                            <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                        )}
                        {errors.email && (
                            <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                        )}
                    </div>
                    {errors.email && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Country & Mobile Number */}
                <div className="space-y-1.5">
                    <label htmlFor="prof-phoneNumber" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Mobile Number*
                    </label>
                    <div className="flex gap-2.5">
                        {/* Dynamic Country Dropdown */}
                        <div className="relative flex-shrink-0 w-32 sm:w-40">
                            <select
                                id="prof-countryId"
                                {...register("countryId")}
                                className="w-full appearance-none pl-3 pr-8 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs sm:text-sm truncate"
                            >
                                {isLoadingCountries ? (
                                    <option value="" className="bg-[#0b0e1a] text-white">Loading...</option>
                                ) : (
                                    countries.map((country) => (
                                        <option key={country.id} value={country.id} className="bg-[#0b0e1a] text-white">
                                            {country.iso_code_2} (+{country.phone_code})
                                        </option>
                                    ))
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-400">
                                <ChevronDown className="h-4 w-4" />
                            </div>
                        </div>

                        {/* Mobile Number Input */}
                        <div className="relative flex-grow">
                            <input
                                type="tel"
                                id="prof-phoneNumber"
                                placeholder="9876543210"
                                {...register("phoneNumber")}
                                className={`w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810]/80 text-white placeholder-gray-500 transition-all ${errors.phoneNumber
                                    ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                    : touchedFields.phoneNumber
                                        ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                        : "border-white/10"
                                    }`}
                            />
                            <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                            {touchedFields.phoneNumber && !errors.phoneNumber && (
                                <CheckCircle className="absolute right-4 top-3.5 h-5 w-5 text-green-400" />
                            )}
                            {errors.phoneNumber && (
                                <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-400" />
                            )}
                        </div>
                    </div>
                    {errors.countryId && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.countryId.message}
                        </p>
                    )}
                    {errors.phoneNumber && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* Inquiry Option Dropdown */}
                <div className="space-y-1.5">
                    <label htmlFor="prof-optionId" className="block text-xs sm:text-sm font-semibold text-gray-200">
                        Inquiry Option*
                    </label>
                    <div className="relative">
                        <select
                            id="prof-optionId"
                            {...register("optionId")}
                            defaultValue=""
                            className={`w-full pl-4 pr-10 py-3 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs sm:text-sm ${errors.optionId
                                ? "border-red-500/60 focus:ring-red-500/20 focus:border-red-500"
                                : touchedFields.optionId
                                    ? "border-green-500/40 focus:ring-green-500/20 focus:border-green-500"
                                    : "border-white/10"
                                }`}
                        >
                            <option value="" disabled hidden className="bg-[#0b0e1a] text-gray-400">
                                {isLoadingOptions ? "Loading inquiry options..." : "Choose an inquiry option"}
                            </option>
                            {inquiryOptions.map((opt) => (
                                <option key={opt.id} value={opt.id} className="bg-[#0b0e1a] text-white">
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400">
                            <ChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                    {errors.optionId && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.optionId.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Terms & Conditions consent checkboxes */}
            <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="prof-agreeToTerms"
                            checked={agreeToTerms || false}
                            onChange={(e) => {
                                setValue("agreeToTerms", e.target.checked, { shouldValidate: true, shouldTouch: true })
                            }}
                            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                        />
                        <label htmlFor="prof-agreeToTerms" className="text-xs sm:text-sm font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                            I consent to DigitalRakshak to process my data as per the{" "}
                            <Link href="/privacy-policy" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                                Privacy Policy <ExternalLink className="h-2.5 w-2.5" />
                            </Link>{" "}
                            and{" "}
                            <Link href="/terms-and-conditions" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                                Terms & Services <ExternalLink className="h-2.5 w-2.5" />
                            </Link>. *
                        </label>
                    </div>
                    {errors.agreeToTerms && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.agreeToTerms.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="prof-agreeToMarketing"
                            checked={agreeToMarketing || false}
                            onChange={(e) => {
                                setValue("agreeToMarketing", e.target.checked, { shouldValidate: true, shouldTouch: true })
                            }}
                            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                        />
                        <label htmlFor="prof-agreeToMarketing" className="text-xs sm:text-sm font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                            I agree to receive marketing communications and acknowledge that I can opt out at any time by writing to{" "}
                            <Link href="mailto:privacy@digitalrakshak.com" className="text-[#76bbf8] hover:underline font-semibold">
                                privacy@digitalrakshak.com
                            </Link>. *
                        </label>
                    </div>
                    {errors.agreeToMarketing && (
                        <p className="text-xs font-medium text-red-400 flex items-center gap-1 pl-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.agreeToMarketing.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="prof-selectAll"
                            checked={selectAll || false}
                            onChange={(e) => {
                                const checked = e.target.checked
                                setValue("selectAll", checked, { shouldValidate: true })
                                setValue("agreeToTerms", checked, { shouldValidate: true, shouldTouch: true })
                                setValue("agreeToMarketing", checked, { shouldValidate: true, shouldTouch: true })
                            }}
                            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                        />
                        <label htmlFor="prof-selectAll" className="text-xs sm:text-sm font-semibold text-white cursor-pointer select-none leading-relaxed">
                            Select all
                        </label>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 rounded-xl text-base font-bold shadow-[0_4px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !isValid}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Submitting Inquiry...</span>
                    </>
                ) : (
                    <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
        </form>
    )
}

// ----------------------------------------------------
// Main Register Page Component
// ----------------------------------------------------
export default function RegisterPage() {
    const [isMounted, setIsMounted] = useState(false)
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false)
    const [successDetails, setSuccessDetails] = useState<InquirySuccessDetails | null>(null)
    const [accountType, setAccountType] = useState<"business" | "professional">("business")

    // Fetch dynamic countries and inquiry options globally
    const {
        countries,
        inquiryOptions,
        isLoadingCountries,
        isLoadingOptions,
        defaultCountryId
    } = useFrontApiData()

    // Mount animation trigger
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleSuccess = (details: InquirySuccessDetails) => {
        setSuccessDetails(details)
        setIsSubmittedSuccessfully(true)
    }

    const handleReset = () => {
        setIsSubmittedSuccessfully(false)
        setSuccessDetails(null)
    }

    const benefits = [
        {
            icon: CheckCircle,
            text: "Test our APIs in a secure sandbox environment to ensure smooth functionality and integration.",
            color: "text-blue-600",
        },
        {
            icon: CheckCircle,
            text: "Gain access to over 100+ verification APIs to streamline your KYC/KYB processes effortlessly.",
            color: "text-blue-600",
        },
        {
            icon: CheckCircle,
            text: "Enjoy seamless integration with developer-friendly documentation and 24/7 expert support.",
            color: "text-blue-600",
        },
    ]

    return (
        <div className="min-h-screen bg-[#02050f] relative overflow-hidden flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white">
            {/* Ambient background glows matching DigitalRakshak dark aesthetic */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div
                className={`container mx-auto max-w-7xl transition-all duration-1000 ease-out transform relative z-10 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
            >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Benefits and Information (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                                <span className="bg-gradient-to-r from-sky-400 via-[#38bdf8] to-blue-500 bg-clip-text text-transparent">
                                    Get API Key
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                                By creating a free account, you get
                            </p>

                            <div className="space-y-3.5">
                                {benefits.map((benefit, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3.5 bg-[#0b101e]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all shadow-sm"
                                        >
                                            <div className="w-5 h-5 rounded-full border border-sky-400 flex items-center justify-center text-sky-400 flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-sky-400" />
                                            </div>
                                            <span className="text-gray-300 font-medium text-sm sm:text-base leading-snug">
                                                {benefit.text}
                                            </span>
                                        </div>
                                    )
                                })}
                                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                                    Trusted by over  <span className="bg-gradient-to-r from-sky-400 via-[#38bdf8] to-blue-500 bg-clip-text text-transparent"> 1,000+</span> companies of all sizes
                                </p>
                            </div>
                        </div>

                        {/* Customer Testimonial */}
                        <div className="border border-white/10 shadow-2xl bg-[#0b101e]/90 backdrop-blur-md rounded-2xl p-6 transition-all duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="bg-gradient-to-tr from-blue-600 to-sky-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.35)] text-white">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <blockquote className="text-gray-300 mb-4 italic text-sm sm:text-base leading-relaxed">
                                        &ldquo;We take immense satisfaction in our ability to achieve a 5-minute end-to-end target TAT for
                                        security assessments, and DigitalRakshak continues to be a pivotal partner in this endeavour.&rdquo;
                                    </blockquote>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/10 text-gray-300">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">Abhishek Sharma</p>
                                            <p className="text-xs text-gray-400 font-medium">CDO at L&T Finance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Registration Card (7 cols) */}
                    <div className="lg:col-span-7 lg:pl-6">
                        <div className="border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#0a0d18]/95 backdrop-blur-2xl rounded-3xl overflow-hidden transition-all duration-500">
                            <div className="p-6 sm:p-10 relative">
                                {!isSubmittedSuccessfully ? (
                                    <>
                                        <div className="text-center mb-6">
                                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-[#76bbf8] mb-3 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                                <Sparkles className="h-3 w-3 text-[#76bbf8]" /> Start Your Trial
                                            </span>
                                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Submit Inquiry</h2>
                                            <p className="text-xs sm:text-sm text-gray-400 mt-1.5">Register your business inquiry to access DigitalRakshak services.</p>
                                        </div>

                                        {/* Toggle Slider for Account Type */}
                                        <div className="mb-7">
                                            <div className="bg-[#060810] p-1.5 rounded-2xl flex items-center relative border border-white/10 gap-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setAccountType("business")}
                                                    className={`flex-1 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer select-none ${accountType === "business"
                                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                                                        : "text-gray-400 hover:text-white"
                                                        }`}
                                                >
                                                    <Building2 className="h-4 w-4" />
                                                    Business Entity
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setAccountType("professional")}
                                                    className={`flex-1 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer select-none ${accountType === "professional"
                                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                                                        : "text-gray-400 hover:text-white"
                                                        }`}
                                                >
                                                    <Briefcase className="h-4 w-4" />
                                                    Professionals
                                                </button>
                                            </div>
                                        </div>

                                        {/* Render Separate Form for each tab */}
                                        {accountType === "business" ? (
                                            <BusinessEntityForm
                                                countries={countries}
                                                inquiryOptions={inquiryOptions}
                                                isLoadingCountries={isLoadingCountries}
                                                isLoadingOptions={isLoadingOptions}
                                                defaultCountryId={defaultCountryId}
                                                onSuccess={handleSuccess}
                                            />
                                        ) : (
                                            <ProfessionalForm
                                                countries={countries}
                                                inquiryOptions={inquiryOptions}
                                                isLoadingCountries={isLoadingCountries}
                                                isLoadingOptions={isLoadingOptions}
                                                defaultCountryId={defaultCountryId}
                                                onSuccess={handleSuccess}
                                            />
                                        )}
                                    </>
                                ) : (
                                    /* Success State View - Animated with Inquiry ID & Status as required by documentation */
                                    <div className="text-center py-10 px-4 space-y-6 animate-fade-in-up">
                                        <div className="w-20 h-20 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(34,197,94,0.25)] relative">
                                            <CheckCircle className="h-10 w-10 text-green-400" />
                                        </div>

                                        <div className="space-y-2">
                                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Inquiry Submitted Successfully</h2>
                                            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
                                                Thank you for choosing DigitalRakshak. Your inquiry has been submitted and is currently being processed.
                                            </p>
                                        </div>

                                        {/* Reference and Status Badges */}
                                        <div className="bg-[#060810]/80 border border-white/10 rounded-2xl p-5 max-w-md mx-auto shadow-sm space-y-3">
                                            <div className="flex items-center justify-between text-sm py-1 border-b border-white/10">
                                                <span className="text-gray-400 font-medium">Inquiry Reference ID:</span>
                                                <span className="font-mono font-bold text-sky-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10 shadow-2xs">
                                                    #{successDetails?.inquiryId ?? "N/A"}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm py-1 border-b border-white/10">
                                                <span className="text-gray-400 font-medium">Inquiry Status:</span>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                                    {successDetails?.status ?? "pending"}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm py-1">
                                                <span className="text-gray-400 font-medium">Notification Sent To:</span>
                                                <span className="font-mono text-xs sm:text-sm text-gray-200 font-semibold truncate max-w-[200px]">
                                                    {successDetails?.email}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                                            Please check your inbox for an email confirmation with next steps to start setting up your trials.
                                        </p>

                                        <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                                            <Button
                                                onClick={handleReset}
                                                variant="outline"
                                                className="flex-1 rounded-xl py-3 font-semibold border-white/15 hover:bg-white/10 text-white transition-all cursor-pointer flex items-center justify-center gap-2"
                                            >
                                                <RotateCcw className="h-4 w-4" />
                                                New Inquiry
                                            </Button>

                                            <Link href="/" className="flex-1">
                                                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl py-3 font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.35)] transition-all cursor-pointer">
                                                    Go to Homepage
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
