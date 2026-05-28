import { ArrowRight, CheckCircle, Code, Lock, Smartphone, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MobileApplicationSecurityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Mobile Application Security Testing</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive security assessment of iOS and Android mobile applications to identify vulnerabilities and
                            ensure robust protection against mobile-specific threats.
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/contact">
                                Get Mobile Security Assessment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Secure Your Mobile Applications</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Mobile applications face unique security challenges. Our comprehensive mobile security testing covers
                                both static and dynamic analysis, API security, data storage, and runtime protection to ensure your
                                mobile apps are secure against evolving threats.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">OWASP Mobile Top 10 Coverage</h4>
                                        <p className="text-gray-600">Complete assessment against all OWASP Mobile Top 10 risks</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">iOS & Android Testing</h4>
                                        <p className="text-gray-600">Platform-specific security testing for both major mobile platforms</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">API Security Assessment</h4>
                                        <p className="text-gray-600">Comprehensive testing of mobile app APIs and backend services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                            <Image
                                src="/placeholder.svg?height=400&width=500&text=Mobile+Security+Testing"
                                alt="Mobile security testing process showing various mobile devices and security analysis"
                                width={500}
                                height={400}
                                className="rounded-lg mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing Areas */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Mobile Security Testing</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our mobile security testing covers all critical areas to ensure complete protection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Code className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Static Analysis (SAST)</CardTitle>
                                <CardDescription>Source code analysis without executing the application</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Source code vulnerability scanning
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Hardcoded secrets detection
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Insecure coding practices
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Smartphone className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Dynamic Analysis (DAST)</CardTitle>
                                <CardDescription>Runtime testing of the mobile application</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Runtime behavior analysis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Memory corruption testing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Runtime application tampering
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Wifi className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Network Communication</CardTitle>
                                <CardDescription>Analysis of network traffic and API communications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        SSL/TLS implementation review
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Certificate pinning validation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        API endpoint security testing
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Lock className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Data Storage Security</CardTitle>
                                <CardDescription>Assessment of local data storage mechanisms</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Local database encryption
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Keychain/Keystore security
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Sensitive data exposure
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CheckCircle className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Authentication & Authorization</CardTitle>
                                <CardDescription>Testing of user authentication and access controls</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Biometric authentication bypass
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Session management flaws
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        OAuth implementation review
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Code className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Platform-Specific Testing</CardTitle>
                                <CardDescription>iOS and Android specific security assessments</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        iOS App Transport Security
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Android manifest analysis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Platform permission abuse
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* OWASP Mobile Top 10 */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">OWASP Mobile Top 10 Coverage</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We test against all OWASP Mobile Top 10 security risks to ensure comprehensive coverage
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "M1: Improper Platform Usage",
                            "M2: Insecure Data Storage",
                            "M3: Insecure Communication",
                            "M4: Insecure Authentication",
                            "M5: Insufficient Cryptography",
                            "M6: Insecure Authorization",
                            "M7: Client Code Quality",
                            "M8: Code Tampering",
                            "M9: Reverse Engineering",
                            "M10: Extraneous Functionality",
                        ].map((risk, index) => (
                            <Card key={risk} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <span className="font-medium text-gray-900">{risk}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testing Process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=500&width=600&text=Mobile+Testing+Process"
                                alt="Mobile application security testing process workflow diagram"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mobile Testing Process</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">App Analysis & Setup</h3>
                                        <p className="text-gray-600">
                                            Initial application analysis, environment setup, and testing device configuration.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Static & Dynamic Testing</h3>
                                        <p className="text-gray-600">
                                            Comprehensive static code analysis and dynamic runtime testing of the mobile application.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Network & API Testing</h3>
                                        <p className="text-gray-600">
                                            Analysis of network communications, API security, and backend service interactions.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Reporting & Remediation</h3>
                                        <p className="text-gray-600">
                                            Detailed vulnerability report with risk ratings and step-by-step remediation guidance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mobile Security Testing Packages</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the package that best fits your mobile application security needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Basic</CardTitle>
                                <div className="text-3xl font-bold text-blue-600 mt-4">$3,500</div>
                                <CardDescription>Perfect for simple mobile apps</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Single platform testing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">OWASP Mobile Top 10</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Basic vulnerability report</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-2 border-blue-500">
                            <CardHeader className="text-center">
                                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                                    Most Popular
                                </div>
                                <CardTitle className="text-2xl">Professional</CardTitle>
                                <div className="text-3xl font-bold text-blue-600 mt-4">$6,500</div>
                                <CardDescription>Ideal for complex mobile applications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">iOS & Android testing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">API security assessment</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Detailed technical report</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Remediation consultation</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Enterprise</CardTitle>
                                <div className="text-3xl font-bold text-blue-600 mt-4">Custom</div>
                                <CardDescription>For enterprise mobile applications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Multiple app testing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Advanced threat modeling</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Executive & technical reports</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Ongoing support & monitoring</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Secure Your Mobile Applications Today</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Don't let mobile vulnerabilities compromise your business. Get comprehensive mobile security testing from
                        our certified experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Schedule Mobile Security Test
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-blue-600"
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
