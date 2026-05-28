import { ArrowRight, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function VisaApplicationVerificationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Visa Application Verification</h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Comprehensive visa application verification services to validate supporting documents, employment
                                details, and financial information. Ensure accurate visa applications and prevent document fraud.
                            </p>
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/contact">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-lg p-8 border">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Plane className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Visa Documents Verified</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-green-600 text-sm">Application Validated</span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/placeholder.svg?height=300&width=400&text=Visa+Application+Verification"
                                    alt="Visa application verification process illustration"
                                    width={400}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Verify Visa Applications?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start comprehensive visa application verification with our document validation services. Ensure accurate
                        applications and prevent visa fraud.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Start Visa Verification
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                            asChild
                        >
                            <Link href="tel:+1234567890">Call: (123) 456-7890</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
