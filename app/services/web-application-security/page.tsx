import { ArrowRight, CheckCircle, Code, Globe, Search, Shield } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WebApplicationSecurityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 to-orange-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Web Application Security Testing</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive security assessment of your web applications to identify vulnerabilities and ensure robust
                            protection against cyber threats.
                        </p>
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
                            <Link href="/contact">
                                Get Security Assessment
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Protect Your Web Applications from Cyber Threats
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our web application security testing service provides comprehensive vulnerability assessment using
                                industry-standard methodologies like OWASP Top 10, ensuring your applications are secure against the
                                latest threats.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">OWASP Top 10 Coverage</h4>
                                        <p className="text-gray-600">Complete assessment against all OWASP Top 10 vulnerabilities</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Manual & Automated Testing</h4>
                                        <p className="text-gray-600">Combination of automated tools and manual testing techniques</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Detailed Reporting</h4>
                                        <p className="text-gray-600">Comprehensive reports with remediation recommendations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
                            <Globe className="h-24 w-24 text-orange-500 mx-auto mb-6" />
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Coverage</h3>
                                <p className="text-gray-600">
                                    We test all aspects of your web application including authentication, authorization, data validation,
                                    and business logic flaws.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing Methodology */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Testing Methodology</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We follow a systematic approach to ensure comprehensive coverage of all potential security vulnerabilities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Search className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                                <CardTitle>1. Reconnaissance</CardTitle>
                                <CardDescription>Information gathering and application mapping</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Technology stack identification</li>
                                    <li>• Application architecture analysis</li>
                                    <li>• Entry point enumeration</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Shield className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                                <CardTitle>2. Vulnerability Assessment</CardTitle>
                                <CardDescription>Automated and manual vulnerability scanning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• OWASP Top 10 testing</li>
                                    <li>• Input validation testing</li>
                                    <li>• Authentication bypass attempts</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Code className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                                <CardTitle>3. Exploitation</CardTitle>
                                <CardDescription>Proof of concept development for identified vulnerabilities</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• SQL injection testing</li>
                                    <li>• XSS payload development</li>
                                    <li>• Business logic flaw exploitation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CheckCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                                <CardTitle>4. Reporting</CardTitle>
                                <CardDescription>Detailed documentation and remediation guidance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Executive summary</li>
                                    <li>• Technical findings</li>
                                    <li>• Remediation roadmap</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Vulnerabilities Covered */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vulnerabilities We Test For</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive coverage of all major web application security vulnerabilities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "SQL Injection",
                            "Cross-Site Scripting (XSS)",
                            "Cross-Site Request Forgery (CSRF)",
                            "Insecure Direct Object References",
                            "Security Misconfiguration",
                            "Sensitive Data Exposure",
                            "Missing Function Level Access Control",
                            "Using Components with Known Vulnerabilities",
                            "Unvalidated Redirects and Forwards",
                            "Broken Authentication",
                            "Session Management Flaws",
                            "Business Logic Vulnerabilities",
                        ].map((vulnerability) => (
                            <Card key={vulnerability} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="font-medium text-gray-900">{vulnerability}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the package that best fits your security testing needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Basic</CardTitle>
                                <div className="text-3xl font-bold text-orange-500 mt-4">$2,500</div>
                                <CardDescription>Perfect for small applications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Up to 10 pages testing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">OWASP Top 10 coverage</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Basic vulnerability report</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-2 border-orange-500">
                            <CardHeader className="text-center">
                                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                                    Most Popular
                                </div>
                                <CardTitle className="text-2xl">Professional</CardTitle>
                                <div className="text-3xl font-bold text-orange-500 mt-4">$5,000</div>
                                <CardDescription>Ideal for medium-sized applications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Up to 50 pages testing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Comprehensive vulnerability assessment</span>
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
                                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Enterprise</CardTitle>
                                <div className="text-3xl font-bold text-orange-500 mt-4">Custom</div>
                                <CardDescription>For large-scale applications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Unlimited pages testing</span>
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
                                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Secure Your Web Applications Today</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Don't wait for a security breach. Get your web applications tested by our certified security experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Schedule Assessment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-orange-500"
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
