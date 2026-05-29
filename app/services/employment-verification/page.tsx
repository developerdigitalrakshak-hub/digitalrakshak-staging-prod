import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Briefcase, Users, Star, Clock, Zap, Building } from "lucide-react"

export default function EmploymentVerificationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Employment+Verification+Background')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 mb-4">
                                DIGITALRAKSHAK EMPLOYMENT VERIFICATION
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Verify Employment
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {" "}
                                    History
                                </span>{" "}
                                Instantly
                            </h1>
                            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                                Authenticate work experience, job titles, and employment duration from 25,000+ companies worldwide with
                                99.7% accuracy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                                >
                                    Book a Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-purple-400 text-purple-100 hover:bg-purple-800/50 bg-transparent"
                                >
                                    View Pricing
                                </Button>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-purple-200">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>99.7% Accuracy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>25,000+ Companies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>48hr Turnaround</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                        <Briefcase className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">Employment Verified</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-green-300 text-sm">Work History Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/placeholder.svg?height=300&width=400&text=Employment+History+Verification"
                                    alt="Employment verification process"
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
                        <p className="text-gray-600 font-medium">Trusted by leading HR departments and recruitment agencies</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                        {["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix"].map((company) => (
                            <div key={company} className="text-center opacity-60 hover:opacity-100 transition-opacity">
                                <Image
                                    src={`/enerate an image based on the text provided in the query parameters.png?height=40&width=120&text=${company}`}
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

            {/* Why DigitalRakshak Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-purple-100 text-purple-800 mb-4">WHY DIGITALRAKSHAK</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive Employment Verification for Better Hiring Decisions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our advanced verification system connects directly with HR departments and employment databases worldwide
                            for authentic work history validation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">99.7%</div>
                            <div className="text-gray-600">Verification Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Building className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">25,000+</div>
                            <div className="text-gray-600">Companies Connected</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">48hrs</div>
                            <div className="text-gray-600">Average Turnaround</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">75M+</div>
                            <div className="text-gray-600">Employees Verified</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Advanced System Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-blue-100 text-blue-800 mb-4">OUR ADVANCED SYSTEM</Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Direct HR Verification with AI-Powered Fraud Detection
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our proprietary system connects directly with HR departments, payroll systems, and employment databases
                                to provide authentic verification with AI-powered fraud detection capabilities.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Direct HR Contact</h4>
                                        <p className="text-gray-600">Real-time verification with HR departments</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">AI Fraud Detection</h4>
                                        <p className="text-gray-600">Advanced algorithms detect fake references</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Global Coverage</h4>
                                        <p className="text-gray-600">Companies from 195+ countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl">
                                <Image
                                    src="/placeholder.svg?height=400&width=500&text=Employment+Verification+System"
                                    alt="Employment verification system"
                                    width={500}
                                    height={400}
                                    className="rounded-xl mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Fraud Prevention Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    Our Evolving AI Stops Rising Employment Frauds
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">×</span>
                                        </div>
                                        <span className="text-gray-700">Fake employment history detected</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">×</span>
                                        </div>
                                        <span className="text-gray-700">Inflated job titles identified</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-gray-700">Authentic work history verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Advanced Employment Fraud Detection</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fraudsters are getting very innovative with employment frauds. Our AI-powered solutions defend you
                                against various types of fraudulent activities including fake references, inflated job titles, and
                                fabricated work experience.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-bold text-red-600 mb-2">92%</div>
                                    <div className="text-gray-600">Fraud Detection Rate</div>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">0.3%</div>
                                    <div className="text-gray-600">False Positive Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Companies Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 mb-4">
                            GLOBAL COMPANY DATABASES
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Connect to Companies Worldwide!</h2>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                            Access employment verification from companies across 195+ countries and verify work history in real-time!
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <Image
                                src="/placeholder.svg?height=400&width=800&text=Global+Company+Network"
                                alt="Global company network"
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
                                        src="/placeholder.svg?height=60&width=120&text=Accenture"
                                        alt="Accenture logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Accenture</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Reduced hiring fraud by 78% and improved candidate quality significantly with DigitalRakshak's
                                    employment verification."
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
                                        src="/placeholder.svg?height=60&width=120&text=Deloitte"
                                        alt="Deloitte logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Deloitte</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Streamlined our global hiring process by verifying 50,000+ candidates across 40+ countries
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
                                        src="/placeholder.svg?height=60&width=120&text=PwC"
                                        alt="PwC logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">PwC</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Cut verification time from weeks to 48 hours while maintaining 99.7% accuracy in employment
                                    validation."
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
                                <CardTitle>How do you verify employment with companies that no longer exist?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    We maintain historical employment databases and work with government records, tax authorities, and
                                    industry databases to verify employment from defunct companies.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>What information do you verify about employment history?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    We verify job titles, employment dates, salary ranges, reporting relationships, reason for leaving,
                                    and eligibility for rehire through direct HR contact.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>How do you handle international employment verification?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    We have partnerships with verification agencies in 195+ countries and direct relationships with
                                    multinational corporations for seamless global verification.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Verify Employment History?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start verifying employment credentials with our comprehensive verification services. Ensure authentic work
                        history and make informed hiring decisions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                            Book a Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                            Go-live in 4 hours • No-code Workflows
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-8 mt-8 text-sm text-purple-200">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>25,000+ Companies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>99.7% Accuracy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>48hr Turnaround</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
