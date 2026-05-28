import { ArrowRight, CheckCircle, FileText, Scale, Shield, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GDPRCompliancePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 to-orange-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">GDPR Compliance Services</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive GDPR assessment, implementation, and ongoing compliance support to protect your business
                            from hefty fines and ensure data privacy compliance.
                        </p>
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
                            <Link href="/contact">
                                Get GDPR Assessment
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
                                Protect Your Business from GDPR Fines
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                GDPR violations can result in fines up to €20 million or 4% of annual global turnover. Our comprehensive
                                GDPR compliance service ensures your organization meets all regulatory requirements while maintaining
                                operational efficiency.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Scale className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">
                                            <strong>Did you know?</strong> GDPR fines have exceeded €1.5 billion since implementation. Don't
                                            let your business be next.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Complete Gap Analysis</h4>
                                        <p className="text-gray-600">Comprehensive assessment of your current data protection practices</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Implementation Roadmap</h4>
                                        <p className="text-gray-600">Step-by-step plan to achieve full GDPR compliance</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Ongoing Support</h4>
                                        <p className="text-gray-600">Continuous monitoring and updates to maintain compliance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
                            <Shield className="h-24 w-24 text-orange-500 mx-auto mb-6" />
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance</h3>
                                <p className="text-gray-600">
                                    Ensure your organization meets all GDPR requirements with our expert guidance and comprehensive
                                    compliance framework.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GDPR Requirements */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key GDPR Requirements We Address</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive approach covers all essential GDPR requirements to ensure full compliance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <FileText className="h-12 w-12 text-orange-500 mb-4" />
                                <CardTitle>Data Protection Impact Assessment</CardTitle>
                                <CardDescription>Systematic assessment of data processing activities and their risks</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Risk identification and mitigation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Processing activity documentation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Compliance verification
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Users className="h-12 w-12 text-orange-500 mb-4" />
                                <CardTitle>Data Subject Rights</CardTitle>
                                <CardDescription>Implementation of processes to handle data subject requests</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Right to access procedures
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Data portability mechanisms
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Erasure and rectification processes
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Shield className="h-12 w-12 text-orange-500 mb-4" />
                                <CardTitle>Privacy by Design</CardTitle>
                                <CardDescription>Integration of privacy principles into system design and operations</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Technical safeguards implementation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Organizational measures
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Data minimization strategies
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <FileText className="h-12 w-12 text-orange-500 mb-4" />
                                <CardTitle>Privacy Policies & Notices</CardTitle>
                                <CardDescription>Development of compliant privacy documentation</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Privacy policy drafting
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Cookie consent mechanisms
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Data processing agreements
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Users className="h-12 w-12 text-orange-500 mb-4" />
                                <CardTitle>Staff Training</CardTitle>
                                <CardDescription>Comprehensive GDPR awareness and training programs</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Role-based training modules
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Regular awareness sessions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Compliance testing and certification
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Scale className="h-12 w-12 text-orange-500 mb-4" />
                                <CardTitle>Breach Response</CardTitle>
                                <CardDescription>Incident response procedures for data breaches</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        72-hour notification procedures
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Breach assessment protocols
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Communication templates
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our GDPR Implementation Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to achieving and maintaining GDPR compliance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                            <p className="text-gray-600">
                                Comprehensive gap analysis of current data protection practices and identification of compliance gaps.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Planning</h3>
                            <p className="text-gray-600">
                                Development of detailed implementation roadmap with timelines, responsibilities, and resource
                                requirements.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                            <p className="text-gray-600">
                                Execution of compliance measures including policy development, technical controls, and staff training.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">4</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                            <p className="text-gray-600">
                                Ongoing compliance monitoring, regular audits, and updates to maintain compliance with evolving
                                regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">GDPR Compliance Packages</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the package that best fits your organization's compliance needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Starter</CardTitle>
                                <div className="text-3xl font-bold text-orange-500 mt-4">$5,000</div>
                                <CardDescription>Perfect for small businesses</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Basic gap analysis</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Privacy policy template</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Basic staff training</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Compliance checklist</span>
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
                                <div className="text-3xl font-bold text-orange-500 mt-4">$15,000</div>
                                <CardDescription>Ideal for medium-sized organizations</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Comprehensive gap analysis</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Custom policy development</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">DPIA templates and guidance</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Comprehensive staff training</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">6 months support</span>
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
                                <CardDescription>For large organizations</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Full compliance program</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Dedicated compliance officer</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Ongoing monitoring & audits</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">24/7 incident response</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Annual compliance reviews</span>
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
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Risk GDPR Fines</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Protect your business from hefty GDPR fines. Get expert compliance guidance from our certified data
                        protection specialists.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Start GDPR Assessment
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
