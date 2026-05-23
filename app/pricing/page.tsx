import React from "react"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function PricingPage() {
    const pricingPlans = [
        {
            name: "Start",
            description: "For Start-up companies",
            price: "Free",
            features: [
                "Free trial in sandbox environment",
                "1 month period",
                "Integrate in less than 4 hours",
                "View & Manage verifications",
            ],
            buttonText: "Start Free Trial",
            buttonVariant: "default",
            image: "/abstract-purple-hand-holding-star.jpg",
            popular: false,
        },
        {
            name: "Grow",
            description: "For Mid-size companies",
            price: "$49/month",
            features: [
                "End-to-end ID verification suite",
                "Central Database Checks",
                "Access to AML Checks",
                "Custom workflow for business",
            ],
            buttonText: "Buy Now",
            buttonVariant: "default",
            image: "/abstract-pink-hand-holding-box.jpg",
            popular: true,
        },
        {
            name: "Enterprise",
            description: "For Enterprise-level organizations",
            price: "Custom",
            features: [
                "Collaborate - Lead - Solve",
                "Custom Price Structure",
                "Dedicated Support",
                "Custom Collaborative Innovation",
            ],
            buttonText: "Contact Sales",
            buttonVariant: "outline",
            image: "/abstract-blue-building-blocks.jpg",
            popular: false,
        },
    ]

    const comparisonFeatures = [
        {
            category: "General",
            items: [
                { name: "Free Trials", start: true, grow: true, enterprise: true },
                { name: "Dedicated Account Manager", start: false, grow: true, enterprise: true },
                { name: "Priority Support", start: false, grow: true, enterprise: true },
            ],
        },
        {
            category: "Verification Features",
            items: [
                { name: "Verified 100+ countries IDs from Govt.", start: true, grow: true, enterprise: true },
                { name: "Document Data Extraction", start: false, grow: true, enterprise: true },
                { name: "ID Card Checks", start: false, grow: true, enterprise: true },
                { name: "MRZ Validation", start: false, grow: true, enterprise: true },
                { name: "NFC reading & Validation", start: false, grow: true, enterprise: true },
                { name: "AML Checks", start: false, grow: true, enterprise: true },
            ],
        },
        {
            category: "SDK & Integration",
            items: [
                { name: "Configurable Workflow Orchestration", start: true, grow: true, enterprise: true },
                { name: "Barcode Scanning Support", start: true, grow: true, enterprise: true },
                { name: "Assisted Image Capture", start: false, grow: true, enterprise: true },
                { name: "API Access", start: true, grow: true, enterprise: true },
                { name: "Webhooks", start: true, grow: true, enterprise: true },
            ],
        },
        {
            category: "Reporting & Analytics",
            items: [
                { name: "Basic Analytics Dashboard", start: true, grow: true, enterprise: true },
                { name: "Advanced Reporting", start: false, grow: true, enterprise: true },
                { name: "Customizable Reports", start: false, grow: false, enterprise: true },
            ],
        },
    ]

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-24 lg:py-32">
            <div className="">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="max-w-[800px] text-lg text-gray-600 md:text-xl">
                        Find the perfect plan to secure your business, from startups to large enterprises. No hidden fees, just
                        powerful verification solutions.
                    </p>
                </div>

                {/* Pricing Tiers Section */}
                <div className="grid gap-8 md:grid-cols-3 mt-12 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col items-center p-8 text-center rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] ${plan.popular ? "border-2 border-blue-600 bg-white" : "bg-white"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    Most Popular
                                </span>
                            )}
                            <CardHeader className="flex flex-col items-center p-0 pb-6">
                                <div className="relative w-28 h-28 mb-4">
                                    <Image
                                        src={plan.image || "/placeholder.svg"}
                                        alt={`${plan.name} plan icon`}
                                        width={112}
                                        height={112}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <CardTitle className="text-3xl font-bold text-gray-900">{plan.name}</CardTitle>
                                <CardDescription className="text-gray-500 mt-2">{plan.description}</CardDescription>
                                <div className="mt-4 text-xl font-extrabold text-gray-900">
                                    {plan.price === "Custom" ? (
                                        <span>{plan.price}</span>
                                    ) : (
                                        <>
                                            <span>{plan.price}</span>
                                            {plan.price !== "Free" && <span className="text-lg font-medium text-gray-500">/month</span>}
                                        </>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between w-full p-0 pt-6 border-t border-gray-100">
                                <div className="space-y-3 text-left mb-8">
                                    <h3 className="font-semibold text-gray-800 text-lg mb-3">What's included:</h3>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-base text-gray-700">
                                                <Check className="mr-3 h-5 w-5 text-green-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 hover:shadow-xl transition-all"
                                    variant="default"
                                >
                                    {plan.buttonText}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Compare Plans Table Section */}
                <div className="mt-24 max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Detailed Plan Comparison</h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        A comprehensive breakdown of features across all our plans.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-200 bg-gray-50">
                                    <th className="py-5 px-4 text-base font-semibold text-gray-800 w-1/4 rounded-tl-xl"></th>
                                    <th className="py-5 px-4 text-center text-xl font-bold text-gray-900 w-1/4">
                                        Start
                                        <p className="text-sm font-normal text-gray-500">For Start-up companies</p>
                                        <Button variant="default" className="mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                                            Start Free Trial
                                        </Button>
                                    </th>
                                    <th className="py-5 px-4 text-center text-xl font-bold text-gray-900 w-1/4">
                                        Grow
                                        <p className="text-sm font-normal text-gray-500">For Mid-size companies</p>
                                        <Button variant="default" className="mt-3 bg-gray-800 hover:bg-gray-900 text-white">
                                            Buy Now
                                        </Button>
                                    </th>
                                    <th className="py-5 px-4 text-center text-xl font-bold text-gray-900 w-1/4 rounded-tr-xl">
                                        Enterprise
                                        <p className="text-sm font-normal text-gray-500">For Enterprise-level organizations</p>
                                        <Button
                                            variant="outline"
                                            className="mt-3 border-gray-300 text-gray-800 hover:bg-gray-100 bg-transparent"
                                        >
                                            Contact Sales
                                        </Button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((category, categoryIndex) => (
                                    <React.Fragment key={categoryIndex}>
                                        <tr className="bg-gray-100">
                                            <td className="py-4 px-4 text-base font-bold text-gray-800 uppercase tracking-wider" colSpan={4}>
                                                {category.category}
                                            </td>
                                        </tr>
                                        {category.items.map((item, itemIndex) => (
                                            <tr key={itemIndex} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                                                <td className="py-4 px-4 text-base text-gray-700">{item.name}</td>
                                                <td className="py-4 px-4 text-center">
                                                    {item.start ? (
                                                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                                                    ) : (
                                                        <Minus className="h-6 w-6 text-gray-400 mx-auto" />
                                                    )}
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    {item.grow ? (
                                                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                                                    ) : (
                                                        <Minus className="h-6 w-6 text-gray-400 mx-auto" />
                                                    )}
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    {item.enterprise ? (
                                                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                                                    ) : (
                                                        <Minus className="h-6 w-6 text-gray-400 mx-auto" />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
