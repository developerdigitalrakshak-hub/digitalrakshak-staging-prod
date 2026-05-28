import { ArrowRight, CheckCircle, FileText, Scale, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CriminalRecordCheckPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Criminal Record Check</h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Comprehensive criminal background verification services to ensure workplace safety and security. Access
                                nationwide criminal databases and court records for thorough screening.
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
                                        <Scale className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Criminal Check</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-green-600 text-sm">Background Cleared</span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/placeholder.svg?height=300&width=400&text=Criminal+Record+Check+Process"
                                    alt="Criminal record check process illustration"
                                    width={400}
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <p className="text-gray-600 font-medium">Trusted by leading organizations</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
                        {["Airtel", "Paytm", "PayU", "Flipkart", "OLA", "Zomato"].map((company) => (
                            <div key={company} className="text-center">
                                <Image
                                    src={`/placeholder.svg?height=40&width=120&text=${company}`}
                                    alt={`${company} logo`}
                                    width={120}
                                    height={40}
                                    className="mx-auto grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Nationwide Coverage</CardTitle>
                                <CardDescription>
                                    Access to comprehensive criminal databases across all states and jurisdictions
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Multi-Level Screening</CardTitle>
                                <CardDescription>
                                    Federal, state, and county-level criminal record searches for complete coverage
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Detailed Reports</CardTitle>
                                <CardDescription>
                                    Comprehensive criminal history reports with case details and disposition information
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Legal Compliance</CardTitle>
                                <CardDescription>
                                    FCRA-compliant screening processes ensuring legal protection and privacy rights
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Process Map */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Criminal Record Check Process Map</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our systematic approach ensures thorough criminal background screening through multiple database
                                searches and court record verification.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Identity Verification</h4>
                                        <p className="text-gray-600">
                                            Confirm candidate identity and collect necessary personal information
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Database Search</h4>
                                        <p className="text-gray-600">
                                            Comprehensive search across federal, state, and county criminal databases
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Court Record Verification</h4>
                                        <p className="text-gray-600">
                                            Direct verification with court systems for accurate case information
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">4</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Comprehensive Report</h4>
                                        <p className="text-gray-600">
                                            Detailed criminal history report with legal compliance documentation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=500&width=600&text=Criminal+Check+Process+Flow"
                                alt="Criminal record check process flowchart"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Verification is Required */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Why Criminal Record Check Is Required?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Workplace Safety</h4>
                                        <p className="text-gray-600">
                                            Ensure a safe work environment by identifying candidates with violent or theft-related offenses
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Legal Compliance</h4>
                                        <p className="text-gray-600">
                                            Meet industry regulations and legal requirements for background screening
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Risk Mitigation</h4>
                                        <p className="text-gray-600">
                                            Reduce liability and protect against negligent hiring claims and lawsuits
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Trust and Integrity</h4>
                                        <p className="text-gray-600">
                                            Build trust with clients and stakeholders through thorough background verification
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                                <Image
                                    src="/placeholder.svg?height=400&width=300&text=Criminal+Check+Mobile"
                                    alt="Mobile criminal record check interface"
                                    width={300}
                                    height={400}
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Conduct Criminal Background Checks?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start comprehensive criminal record verification with our nationwide screening services. Ensure workplace
                        safety and legal compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Start Criminal Record Check
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
