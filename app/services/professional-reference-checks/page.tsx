import { ArrowRight, CheckCircle, FileText, Phone, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfessionalReferenceChecksPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Reference Checks</h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Comprehensive professional reference verification services to validate candidate performance, work
                                ethic, and professional relationships. Get insights from former supervisors and colleagues.
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
                                        <Phone className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">References Verified</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-green-600 text-sm">Professional Contacts Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/placeholder.svg?height=300&width=400&text=Reference+Check+Process"
                                    alt="Professional reference check process illustration"
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
                                <CardTitle>Structured Interviews</CardTitle>
                                <CardDescription>
                                    Comprehensive structured interviews with professional references and supervisors
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Multiple References</CardTitle>
                                <CardDescription>
                                    Verification through multiple professional contacts including managers and peers
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Performance Insights</CardTitle>
                                <CardDescription>
                                    Detailed insights into work performance, skills, and professional behavior
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                <CardTitle>Confidential Process</CardTitle>
                                <CardDescription>
                                    Confidential and professional reference checking process with privacy protection
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Professional Reference Check Process Map
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our systematic approach ensures thorough professional reference verification through structured
                                interviews and comprehensive performance assessment.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Reference Collection</h4>
                                        <p className="text-gray-600">
                                            Collect professional reference contacts and verify their authenticity
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Structured Interviews</h4>
                                        <p className="text-gray-600">
                                            Conduct comprehensive interviews with references using standardized questionnaires
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Performance Assessment</h4>
                                        <p className="text-gray-600">
                                            Evaluate work performance, skills, and professional behavior through detailed discussions
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
                                            Detailed reference report with performance insights and professional recommendations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=500&width=600&text=Reference+Check+Process"
                                alt="Professional reference check process flowchart"
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
                                Why Professional Reference Checks Are Required?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Performance Validation</h4>
                                        <p className="text-gray-600">
                                            Validate candidate's work performance and achievements through former supervisors and colleagues
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Cultural Fit Assessment</h4>
                                        <p className="text-gray-600">
                                            Assess candidate's work style, team collaboration, and cultural fit within organizations
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Skill Verification</h4>
                                        <p className="text-gray-600">
                                            Verify technical skills, competencies, and professional capabilities through reference feedback
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Risk Mitigation</h4>
                                        <p className="text-gray-600">
                                            Identify potential performance issues and reduce hiring risks through professional insights
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                                <Image
                                    src="/placeholder.svg?height=400&width=300&text=Reference+Check+Mobile"
                                    alt="Mobile professional reference check interface"
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
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Conduct Professional Reference Checks?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start comprehensive professional reference verification with our structured interview process. Get valuable
                        insights into candidate performance and professional behavior.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Start Reference Checks
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
