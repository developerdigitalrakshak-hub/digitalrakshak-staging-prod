import { ArrowRight, CheckCircle, Network, Shield, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NetworkPenetrationTestingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Network Penetration Testing</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive network infrastructure security assessment to identify vulnerabilities in your network
                            perimeter, internal systems, and wireless networks.
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link href="/contact">
                                Get Network Security Assessment
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Protect Your Network Infrastructure</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Network penetration testing simulates real-world attacks on your network infrastructure to identify
                                security weaknesses before malicious actors can exploit them. Our comprehensive approach covers both
                                external and internal network assessments.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">External Network Testing</h4>
                                        <p className="text-gray-600">Assessment of internet-facing systems and services</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Internal Network Assessment</h4>
                                        <p className="text-gray-600">Testing of internal network segmentation and lateral movement</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Wireless Security Testing</h4>
                                        <p className="text-gray-600">Comprehensive assessment of wireless network security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                            <Image
                                src="/placeholder.svg?height=400&width=500&text=Network+Security+Testing"
                                alt="Network penetration testing showing network topology and security assessment"
                                width={500}
                                height={400}
                                className="rounded-lg mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Network Testing Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive network security testing across all network layers and components
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Network className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>External Network Testing</CardTitle>
                                <CardDescription>Assessment of internet-facing network infrastructure</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Port scanning and service enumeration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Firewall configuration testing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        DMZ security assessment
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Shield className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Internal Network Testing</CardTitle>
                                <CardDescription>Assessment of internal network security and segmentation</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Network segmentation testing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Lateral movement simulation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Privilege escalation testing
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Wifi className="h-16 w-16 text-blue-600 mb-4" />
                                <CardTitle>Wireless Security Testing</CardTitle>
                                <CardDescription>Comprehensive wireless network security assessment</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        WPA/WPA2/WPA3 security testing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Rogue access point detection
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Guest network isolation testing
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Secure Your Network Infrastructure</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Identify network vulnerabilities before attackers do. Get comprehensive network penetration testing from our
                        certified security experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">
                                Schedule Network Assessment
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
