"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    ArrowRight,
    CheckCircle,
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
    X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Country, InquiryOption, InquiryPayload } from "@/lib/types/front-api"
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
    inquiryId: number
    status: string
    country?: string | null
    option?: string | null
}

// ----------------------------------------------------
// 1. Business Entity Form
// ----------------------------------------------------
function BusinessEntityForm({
    countries,
    inquiryOptions,
    isLoadingCountries,
    isLoadingOptions,
    defaultCountryId,
    onSuccess,
}: {
    countries: Country[]
    inquiryOptions: InquiryOption[]
    isLoadingCountries: boolean
    isLoadingOptions: boolean
    defaultCountryId?: number
    onSuccess: (details: InquirySuccessDetails) => void
}) {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+91")

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        setError,
        formState: { errors },
    } = useForm<BusinessFormValues>({
        resolver: zodResolver(businessSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            countryId: defaultCountryId,
            phoneNumber: "",
            gstNo: "",
            optionId: 0,
            agreeToTerms: false,
            agreeToMarketing: false,
            selectAll: false,
        },
    })

    const watchAgreeToTerms = watch("agreeToTerms")
    const watchAgreeToMarketing = watch("agreeToMarketing")
    const watchCountryId = watch("countryId")

    useEffect(() => {
        if (defaultCountryId && (!watchCountryId || watchCountryId === 0)) {
            setValue("countryId", defaultCountryId)
        }
    }, [defaultCountryId, setValue, watchCountryId])

    useEffect(() => {
        if (watchCountryId && countries.length > 0) {
            const country = countries.find((c) => c.id === Number(watchCountryId))
            if (country) {
                const phone = country.phone_code || ""
                const code = phone.startsWith("+") ? phone : (phone ? `+${phone}` : "+91")
                setSelectedCountryCode(code)
            }
        }
    }, [watchCountryId, countries])

    useEffect(() => {
        if (watchAgreeToTerms && watchAgreeToMarketing) {
            setValue("selectAll", true)
        } else {
            setValue("selectAll", false)
        }
    }, [watchAgreeToTerms, watchAgreeToMarketing, setValue])

    const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setValue("selectAll", isChecked)
        setValue("agreeToTerms", isChecked, { shouldValidate: true })
        setValue("agreeToMarketing", isChecked, { shouldValidate: true })
    }

    const onSubmit = async (data: BusinessFormValues) => {
        setIsSubmitting(true)
        const payload: InquiryPayload = {
            type: "business",
            name: data.name.trim(),
            business_email: data.email.trim(),
            company_name: data.companyName.trim(),
            gst_number: data.gstNo?.trim() || undefined,
            mobile_number: data.phoneNumber.trim(),
            country_id: Number(data.countryId),
            option_id: Number(data.optionId),
            consent: {
                terms: data.agreeToTerms,
                marketing: data.agreeToMarketing,
            },
        }

        const res = await submitInquiry(payload)
        setIsSubmitting(false)

        if ((res.status === 200 || res.status === 201 || res.success) && res.data) {
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

        toast({
            title: "Submission Error",
            description: res.message || "Unable to submit inquiry. Please try again.",
            variant: "destructive",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-3.5">
                {/* Name */}
                <div className="space-y-1">
                    <label htmlFor="bus-name" className="block text-xs font-semibold text-gray-200">
                        Name*
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="bus-name"
                            {...register("name")}
                            placeholder="John Doe"
                            className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                errors.name ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                            }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                            <User className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Business Email */}
                <div className="space-y-1">
                    <label htmlFor="bus-email" className="block text-xs font-semibold text-gray-200">
                        Business Email*
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="bus-email"
                            {...register("email")}
                            placeholder="alex@company.com"
                            className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                errors.email ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                            }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                            <Mail className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                    <label htmlFor="bus-company" className="block text-xs font-semibold text-gray-200">
                        Company Name*
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="bus-company"
                            {...register("companyName")}
                            placeholder="Acme Corp"
                            className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                errors.companyName ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                            }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                            <Building2 className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.companyName && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.companyName.message}
                        </p>
                    )}
                </div>

                {/* GST Number (Optional) */}
                <div className="space-y-1">
                    <label htmlFor="bus-gst" className="block text-xs font-semibold text-gray-200">
                        GST Number (Optional)
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="bus-gst"
                            {...register("gstNo")}
                            placeholder="22AAAAA0000A1Z5"
                            className="w-full px-4 py-2.5 bg-[#060810] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all text-xs sm:text-sm uppercase"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                            <FileText className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                {/* Mobile Number with Country Dial Code */}
                <div className="space-y-1">
                    <label htmlFor="bus-phone" className="block text-xs font-semibold text-gray-200">
                        Mobile Number*
                    </label>
                    <div className="flex gap-2">
                        <div className="w-[125px] sm:w-[145px] shrink-0 relative">
                            <select
                                id="bus-country"
                                {...register("countryId")}
                                disabled={isLoadingCountries}
                                className="w-full pl-3 pr-7 py-2.5 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs border-white/10 truncate"
                            >
                                {isLoadingCountries ? (
                                    <option value="0">Loading...</option>
                                ) : (
                                    countries.map((c) => {
                                        const phone = c.phone_code || ""
                                        const code = phone.startsWith("+") ? phone : (phone ? `+${phone}` : "+91")
                                        const iso = c.iso_code_2 || ""
                                        return (
                                            <option key={c.id} value={c.id} className="bg-[#0b0e1a] text-white py-1">
                                                {getFlagEmoji(c.iso_code_2)} {iso} ({code})
                                            </option>
                                        )
                                    })
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                                <ChevronDown className="h-3.5 w-3.5" />
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <input
                                type="tel"
                                id="bus-phone"
                                {...register("phoneNumber")}
                                placeholder="9876543210"
                                className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                    errors.phoneNumber ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                                }`}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                <Phone className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    {errors.phoneNumber && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* Inquiry Option */}
                <div className="space-y-1">
                    <label htmlFor="bus-optionId" className="block text-xs font-semibold text-gray-200">
                        Inquiry Option*
                    </label>
                    <div className="relative">
                        <select
                            id="bus-optionId"
                            {...register("optionId")}
                            disabled={isLoadingOptions}
                            className={`w-full pl-3.5 pr-9 py-2.5 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs sm:text-sm ${
                                errors.optionId ? "border-red-500/80 focus:border-red-500" : "border-white/10"
                            }`}
                        >
                            <option value="0" disabled hidden className="bg-[#0b0e1a] text-gray-400">
                                {isLoadingOptions ? "Loading inquiry options..." : "Choose an inquiry option"}
                            </option>
                            {inquiryOptions.map((opt) => (
                                <option key={opt.id} value={opt.id} className="bg-[#0b0e1a] text-white py-1">
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.optionId && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.optionId.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2.5 pt-1">
                <div className="flex items-start space-x-2.5">
                    <input
                        type="checkbox"
                        id="bus-agreeToTerms"
                        {...register("agreeToTerms")}
                        className="mt-0.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                    />
                    <label htmlFor="bus-agreeToTerms" className="text-[11px] sm:text-xs font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                        I consent to DigitalRakshak to process my data as per the{" "}
                        <a href="/privacy-policy" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                            Privacy Policy <ExternalLink className="h-2.5 w-2.5" />
                        </a>{" "}
                        and{" "}
                        <a href="/terms-and-conditions" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                            Terms & Services <ExternalLink className="h-2.5 w-2.5" />
                        </a>. *
                    </label>
                </div>
                {errors.agreeToTerms && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 pl-6">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.agreeToTerms.message}
                    </p>
                )}

                <div className="flex items-start space-x-2.5">
                    <input
                        type="checkbox"
                        id="bus-agreeToMarketing"
                        {...register("agreeToMarketing")}
                        className="mt-0.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                    />
                    <label htmlFor="bus-agreeToMarketing" className="text-[11px] sm:text-xs font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                        I agree to receive marketing communications and can opt out anytime via{" "}
                        <a href="mailto:privacy@digitalrakshak.com" className="text-[#76bbf8] hover:underline font-semibold">
                            privacy@digitalrakshak.com
                        </a>. *
                    </label>
                </div>
                {errors.agreeToMarketing && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 pl-6">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.agreeToMarketing.message}
                    </p>
                )}

                <div className="flex items-start space-x-2.5 pt-1.5 border-t border-white/10">
                    <input
                        type="checkbox"
                        id="bus-selectAll"
                        {...register("selectAll")}
                        onChange={handleSelectAllChange}
                        className="mt-0.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                    />
                    <label htmlFor="bus-selectAll" className="text-[11px] sm:text-xs font-semibold text-white cursor-pointer select-none leading-relaxed">
                        Select all
                    </label>
                </div>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting || isLoadingCountries || isLoadingOptions}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-xl text-sm font-bold shadow-[0_4px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 mt-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting Inquiry...</span>
                    </>
                ) : (
                    <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
        </form>
    )
}

// ----------------------------------------------------
// 2. Professionals Form
// ----------------------------------------------------
function ProfessionalForm({
    countries,
    inquiryOptions,
    isLoadingCountries,
    isLoadingOptions,
    defaultCountryId,
    onSuccess,
}: {
    countries: Country[]
    inquiryOptions: InquiryOption[]
    isLoadingCountries: boolean
    isLoadingOptions: boolean
    defaultCountryId?: number
    onSuccess: (details: InquirySuccessDetails) => void
}) {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+91")

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        setError,
        formState: { errors },
    } = useForm<ProfessionalFormValues>({
        resolver: zodResolver(professionalSchema),
        defaultValues: {
            name: "",
            email: "",
            countryId: defaultCountryId,
            phoneNumber: "",
            optionId: 0,
            agreeToTerms: false,
            agreeToMarketing: false,
            selectAll: false,
        },
    })

    const watchAgreeToTerms = watch("agreeToTerms")
    const watchAgreeToMarketing = watch("agreeToMarketing")
    const watchCountryId = watch("countryId")

    useEffect(() => {
        if (defaultCountryId && (!watchCountryId || watchCountryId === 0)) {
            setValue("countryId", defaultCountryId)
        }
    }, [defaultCountryId, setValue, watchCountryId])

    useEffect(() => {
        if (watchCountryId && countries.length > 0) {
            const country = countries.find((c) => c.id === Number(watchCountryId))
            if (country) {
                const phone = country.phone_code || ""
                const code = phone.startsWith("+") ? phone : (phone ? `+${phone}` : "+91")
                setSelectedCountryCode(code)
            }
        }
    }, [watchCountryId, countries])

    useEffect(() => {
        if (watchAgreeToTerms && watchAgreeToMarketing) {
            setValue("selectAll", true)
        } else {
            setValue("selectAll", false)
        }
    }, [watchAgreeToTerms, watchAgreeToMarketing, setValue])

    const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setValue("selectAll", isChecked)
        setValue("agreeToTerms", isChecked, { shouldValidate: true })
        setValue("agreeToMarketing", isChecked, { shouldValidate: true })
    }

    const onSubmit = async (data: ProfessionalFormValues) => {
        setIsSubmitting(true)
        const payload: InquiryPayload = {
            type: "professional",
            name: data.name.trim(),
            business_email: data.email.trim(),
            mobile_number: data.phoneNumber.trim(),
            country_id: Number(data.countryId),
            option_id: Number(data.optionId),
            consent: {
                terms: data.agreeToTerms,
                marketing: data.agreeToMarketing,
            },
        }

        const res = await submitInquiry(payload)
        setIsSubmitting(false)

        if ((res.status === 200 || res.status === 201 || res.success) && res.data) {
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

        toast({
            title: "Submission Error",
            description: res.message || "Unable to submit inquiry. Please try again.",
            variant: "destructive",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-3.5">
                {/* Name */}
                <div className="space-y-1">
                    <label htmlFor="prof-name" className="block text-xs font-semibold text-gray-200">
                        Name*
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="prof-name"
                            {...register("name")}
                            placeholder="John Doe"
                            className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                errors.name ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                            }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                            <User className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                    <label htmlFor="prof-email" className="block text-xs font-semibold text-gray-200">
                        Email Address*
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="prof-email"
                            {...register("email")}
                            placeholder="john@example.com"
                            className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                errors.email ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                            }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                            <Mail className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Mobile Number with Country Dial Code */}
                <div className="space-y-1">
                    <label htmlFor="prof-phone" className="block text-xs font-semibold text-gray-200">
                        Mobile Number*
                    </label>
                    <div className="flex gap-2">
                        <div className="w-[125px] sm:w-[145px] shrink-0 relative">
                            <select
                                id="prof-country"
                                {...register("countryId")}
                                disabled={isLoadingCountries}
                                className="w-full pl-3 pr-7 py-2.5 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs border-white/10 truncate"
                            >
                                {isLoadingCountries ? (
                                    <option value="0">Loading...</option>
                                ) : (
                                    countries.map((c) => {
                                        const phone = c.phone_code || ""
                                        const code = phone.startsWith("+") ? phone : (phone ? `+${phone}` : "+91")
                                        const iso = c.iso_code_2 || ""
                                        return (
                                            <option key={c.id} value={c.id} className="bg-[#0b0e1a] text-white py-1">
                                                {getFlagEmoji(c.iso_code_2)} {iso} ({code})
                                            </option>
                                        )
                                    })
                                )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                                <ChevronDown className="h-3.5 w-3.5" />
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <input
                                type="tel"
                                id="prof-phone"
                                {...register("phoneNumber")}
                                placeholder="9876543210"
                                className={`w-full px-4 py-2.5 bg-[#060810] border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-xs sm:text-sm ${
                                    errors.phoneNumber ? "border-red-500/80 focus:border-red-500" : "border-white/10 focus:border-blue-400"
                                }`}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                <Phone className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    {errors.phoneNumber && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* Inquiry Option */}
                <div className="space-y-1">
                    <label htmlFor="prof-optionId" className="block text-xs font-semibold text-gray-200">
                        Inquiry Option*
                    </label>
                    <div className="relative">
                        <select
                            id="prof-optionId"
                            {...register("optionId")}
                            disabled={isLoadingOptions}
                            className={`w-full pl-3.5 pr-9 py-2.5 border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 bg-[#060810] text-white shadow-sm font-medium cursor-pointer transition-all text-xs sm:text-sm ${
                                errors.optionId ? "border-red-500/80 focus:border-red-500" : "border-white/10"
                            }`}
                        >
                            <option value="0" disabled hidden className="bg-[#0b0e1a] text-gray-400">
                                {isLoadingOptions ? "Loading inquiry options..." : "Choose an inquiry option"}
                            </option>
                            {inquiryOptions.map((opt) => (
                                <option key={opt.id} value={opt.id} className="bg-[#0b0e1a] text-white py-1">
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                    {errors.optionId && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                            <AlertCircle className="h-3 w-3 shrink-0" /> {errors.optionId.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2.5 pt-1">
                <div className="flex items-start space-x-2.5">
                    <input
                        type="checkbox"
                        id="prof-agreeToTerms"
                        {...register("agreeToTerms")}
                        className="mt-0.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                    />
                    <label htmlFor="prof-agreeToTerms" className="text-[11px] sm:text-xs font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                        I consent to DigitalRakshak to process my data as per the{" "}
                        <a href="/privacy-policy" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                            Privacy Policy <ExternalLink className="h-2.5 w-2.5" />
                        </a>{" "}
                        and{" "}
                        <a href="/terms-and-conditions" target="_blank" className="text-[#76bbf8] hover:underline inline-flex items-center gap-0.5 font-semibold">
                            Terms & Services <ExternalLink className="h-2.5 w-2.5" />
                        </a>. *
                    </label>
                </div>
                {errors.agreeToTerms && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 pl-6">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.agreeToTerms.message}
                    </p>
                )}

                <div className="flex items-start space-x-2.5">
                    <input
                        type="checkbox"
                        id="prof-agreeToMarketing"
                        {...register("agreeToMarketing")}
                        className="mt-0.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                    />
                    <label htmlFor="prof-agreeToMarketing" className="text-[11px] sm:text-xs font-normal text-gray-300 cursor-pointer select-none leading-relaxed">
                        I agree to receive marketing communications and can opt out anytime via{" "}
                        <a href="mailto:privacy@digitalrakshak.com" className="text-[#76bbf8] hover:underline font-semibold">
                            privacy@digitalrakshak.com
                        </a>. *
                    </label>
                </div>
                {errors.agreeToMarketing && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 pl-6">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.agreeToMarketing.message}
                    </p>
                )}

                <div className="flex items-start space-x-2.5 pt-1.5 border-t border-white/10">
                    <input
                        type="checkbox"
                        id="prof-selectAll"
                        {...register("selectAll")}
                        onChange={handleSelectAllChange}
                        className="mt-0.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 bg-[#060810] border-white/20 rounded cursor-pointer"
                    />
                    <label htmlFor="prof-selectAll" className="text-[11px] sm:text-xs font-semibold text-white cursor-pointer select-none leading-relaxed">
                        Select all
                    </label>
                </div>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting || isLoadingCountries || isLoadingOptions}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-xl text-sm font-bold shadow-[0_4px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 mt-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting Inquiry...</span>
                    </>
                ) : (
                    <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
        </form>
    )
}

// ----------------------------------------------------
// 3. Main Global Register / Inquiry Modal Component
// ----------------------------------------------------
export default function RegisterModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) {
    const [accountType, setAccountType] = useState<"business" | "professional">("business")
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false)
    const [successDetails, setSuccessDetails] = useState<InquirySuccessDetails | null>(null)

    // Dynamic countries and inquiry options
    const {
        countries,
        inquiryOptions,
        isLoadingCountries,
        isLoadingOptions,
        defaultCountryId
    } = useFrontApiData()

    // Handle ESC key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose()
            }
        }
        if (isOpen) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleKeyDown)
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen, onClose])

    const handleSuccess = (details: InquirySuccessDetails) => {
        setSuccessDetails(details)
        setIsSubmittedSuccessfully(true)
    }

    const handleReset = () => {
        setIsSubmittedSuccessfully(false)
        setSuccessDetails(null)
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-5 bg-[#020612]/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose()
                }
            }}
        >
            <div className="relative w-full max-w-[600px] bg-gradient-to-b from-[#0f1426] via-[#090c17] to-[#060810] border border-white/15 rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_80px_rgba(59,130,246,0.15)] overflow-hidden my-auto animate-in zoom-in-95 duration-200">
                {/* Glowing top line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-[#38bdf8] to-indigo-500" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white bg-white/[0.08] hover:bg-white/[0.18] border border-white/10 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 hover:rotate-90 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                    aria-label="Close Inquiry Modal"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Modal Scrollable Body */}
                <div className="p-5 sm:p-7 max-h-[calc(90vh-2rem)] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#2a3348_transparent]">
                    {!isSubmittedSuccessfully ? (
                        <>
                            {/* Modal Header */}
                            <div className="text-center mb-5 pr-8 pl-8">
                                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/15 text-[#76bbf8] mb-2 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    <Sparkles className="h-3 w-3 text-[#76bbf8]" /> Start Your Trial
                                </span>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                                    Submit Inquiry
                                </h2>
                                <p className="text-xs text-gray-400 mt-1">
                                    Register your business inquiry to access DigitalRakshak services.
                                </p>
                            </div>

                            {/* Toggle Slider for Account Type */}
                            <div className="mb-5">
                                <div className="bg-[#060810] p-1 rounded-xl flex items-center relative border border-white/10 gap-1">
                                    <button
                                        type="button"
                                        onClick={() => setAccountType("business")}
                                        className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                                            accountType === "business"
                                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                                                : "text-gray-400 hover:text-white"
                                        }`}
                                    >
                                        <Building2 className="h-3.5 w-3.5" />
                                        Business Entity
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setAccountType("professional")}
                                        className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                                            accountType === "professional"
                                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                                                : "text-gray-400 hover:text-white"
                                        }`}
                                    >
                                        <Briefcase className="h-3.5 w-3.5" />
                                        Professionals
                                    </button>
                                </div>
                            </div>

                            {/* Render Selected Form */}
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
                        /* Success View */
                        <div className="text-center py-6 px-2 space-y-4 animate-in fade-in duration-300">
                            <div className="w-16 h-16 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                                <CheckCircle className="h-8 w-8 text-green-400" />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                                    Inquiry Submitted Successfully
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto">
                                    Thank you for choosing DigitalRakshak. Your inquiry has been submitted and is currently being processed.
                                </p>
                            </div>

                            {/* Reference ID and Status */}
                            <div className="bg-[#060810]/80 border border-white/10 rounded-xl p-3.5 max-w-sm mx-auto shadow-sm space-y-2">
                                <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                                    <span className="text-gray-400 font-medium">Inquiry Reference ID:</span>
                                    <span className="font-mono font-bold text-sky-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                        #{successDetails?.inquiryId ?? "N/A"}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                                    <span className="text-gray-400 font-medium">Inquiry Status:</span>
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                        {successDetails?.status ?? "pending"}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-xs py-1">
                                    <span className="text-gray-400 font-medium">Notification Sent To:</span>
                                    <span className="font-mono text-xs text-gray-200 font-semibold truncate max-w-[180px]">
                                        {successDetails?.email}
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                                Please check your inbox for an email confirmation with next steps to start setting up your trials.
                            </p>

                            <div className="pt-2 flex gap-3 max-w-xs mx-auto">
                                <Button
                                    onClick={handleReset}
                                    variant="outline"
                                    className="flex-1 rounded-xl py-2 text-xs font-semibold border-white/15 hover:bg-white/10 text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                                >
                                    <RotateCcw className="h-3.5 w-3.5" />
                                    New Inquiry
                                </Button>

                                <Button
                                    onClick={onClose}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl py-2 text-xs font-semibold shadow-md transition-all cursor-pointer"
                                >
                                    Done
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
