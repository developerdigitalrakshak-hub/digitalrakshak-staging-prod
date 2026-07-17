import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, GraduationCap, Star, Clock, Globe, Zap, BookOpen } from "lucide-react"

export default function EducationVerificationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Education+Verification+Background')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 mb-4">
                                DIGITALRAKSHAK EDUCATION VERIFICATION
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Verify Academic
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    {" "}
                                    Credentials
                                </span>{" "}
                                Instantly
                            </h1>
                            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                                Authenticate degrees, certificates, and academic qualifications from 10,000+ institutions worldwide with
                                99.9% accuracy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0"
                                >
                                    Contact US
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-emerald-400 text-emerald-100 hover:bg-emerald-800/50 bg-transparent"
                                >
                                    View Pricing
                                </Button>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-emerald-200">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>99.9% Accuracy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>10,000+ Institutions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>Real-time Verification</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-full">
                                        <GraduationCap className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">Education Verified</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-green-300 text-sm">Credentials Authenticated</span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/placeholder.svg?height=300&width=400&text=Education+Certificate+Verification"
                                    alt="Education verification process"
                                    width={400}
                                    height={300}
                                    className="rounded-xl w-full object-cover"
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
                        <p className="text-gray-600 font-medium">Trusted by leading educational institutions and employers</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                        {["Harvard", "MIT", "Stanford", "Oxford", "Cambridge", "IIT"].map((institution) => (
                            <div key={institution} className="text-center opacity-60 hover:opacity-100 transition-opacity">
                                <Image
                                    src={`/enerate an image based on the text provided in the query parameters.png?height=40&width=120&text=${institution}`}
                                    alt={`${institution} logo`}
                                    width={120}
                                    height={40}
                                    className="mx-auto grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why DigitalRakshak Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-emerald-100 text-emerald-800 mb-4">WHY DIGITALRAKSHAK</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive Education Verification for Better Hiring Decisions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our advanced verification system connects directly with educational institutions and databases worldwide
                            for authentic credential validation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                            <div className="text-gray-600">Verification Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
                            <div className="text-gray-600">Institutions Connected</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">24hrs</div>
                            <div className="text-gray-600">Average Turnaround</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">50M+</div>
                            <div className="text-gray-600">Credentials Verified</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Advanced System Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-purple-100 text-purple-800 mb-4">OUR ADVANCED SYSTEM</Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Direct Institution Verification with Blockchain Security
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our proprietary system connects directly with educational institutions, government databases, and
                                accreditation bodies to provide authentic verification with blockchain-secured records.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Direct Institution Access</h4>
                                        <p className="text-gray-600">Real-time verification with registrar offices</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Blockchain Security</h4>
                                        <p className="text-gray-600">Tamper-proof verification records</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Global Coverage</h4>
                                        <p className="text-gray-600">Institutions from 195+ countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-3xl">
                                <Image
                                    src="/placeholder.svg?height=400&width=500&text=Education+Verification+System"
                                    alt="Education verification system"
                                    width={500}
                                    height={400}
                                    className="rounded-xl mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fraud Prevention Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    Our Evolving AI Stops Rising Education Frauds
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">×</span>
                                        </div>
                                        <span className="text-gray-700">Fake degree mills detected</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">×</span>
                                        </div>
                                        <span className="text-gray-700">Forged certificates identified</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-gray-700">Authentic credentials verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Advanced Fraud Detection Technology</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fraudsters are getting very innovative with education frauds. Our AI-powered solutions defend you
                                against various types of fraudulent activities including fake degrees, diploma mills, and forged
                                certificates.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                                    <div className="text-gray-600">Fraud Detection Rate</div>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">0.1%</div>
                                    <div className="text-gray-600">False Positive Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Database Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 mb-4">
                            GLOBAL EDUCATION DATABASES
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Connect to Educational Institutions Worldwide!</h2>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                            Access verification from universities, colleges, and educational institutions across 195+ countries in
                            real-time!
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <Image
                                src="/placeholder.svg?height=400&width=800&text=Global+Education+Network"
                                alt="Global education network"
                                width={800}
                                height={400}
                                className="rounded-xl mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Stories Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-green-100 text-green-800 mb-4">CUSTOMER STORIES</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Learn How We Help Organizations Hire Better!
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=120&text=TCS"
                                        alt="TCS logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">TCS</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Reduced hiring fraud by 85% and improved candidate quality significantly with DigitalRakshak's
                                    education verification."
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=120&text=Infosys"
                                        alt="Infosys logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Infosys</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Streamlined our global hiring process by verifying 100,000+ candidates across 50+ countries
                                    efficiently."
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=120&text=Wipro"
                                        alt="Wipro logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Wipro</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Cut verification time from weeks to hours while maintaining 99.9% accuracy in credential validation."
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Still have questions? Please chat with our friendly team</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>How do you verify international degrees?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    We have direct connections with 10,000+ educational institutions worldwide and work with government
                                    databases and accreditation bodies for authentic verification.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>What types of educational credentials can you verify?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    We verify all types of educational credentials including degrees, diplomas, certificates, transcripts,
                                    and professional certifications from accredited institutions.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>How long does the verification process take?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Most verifications are completed within 24-48 hours. Complex international verifications may take up
                                    to 5-7 business days.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Verify Education Credentials?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start verifying educational qualifications with our comprehensive verification services. Ensure authentic
                        credentials and reduce hiring risks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                            Contact US
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                            Go-live in 4 hours • No-code Workflows
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-8 mt-8 text-sm text-emerald-200">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>10,000+ Institutions</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>99.9% Accuracy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
