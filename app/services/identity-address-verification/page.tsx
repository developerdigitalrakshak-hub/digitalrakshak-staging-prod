import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, MapPin, Shield, Users, Star, Clock, Globe, Award, Zap, Database } from "lucide-react"

export default function IdentityAddressVerificationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Identity+Verification+Background')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-4">
                                DIGITALRAKSHAK IDENTITY VERIFICATION
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Simplify Your Digital
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    {" "}
                                    Identity Verification
                                </span>{" "}
                                Process
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Reduce user drop-offs with DigitalRakshak: 50M+ verified identities across 195+ countries for unmatched
                                security and convenience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
                                >
                                    Book a Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-blue-400 text-blue-100 hover:bg-blue-800/50 bg-transparent"
                                >
                                    View Pricing
                                </Button>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-blue-200">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>99.8% Accuracy Rate</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>&lt;3sec Processing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                                        <MapPin className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">Identity Verified</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-green-300 text-sm">Address Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="https://cdn.pixabay.com/photo/2020/12/08/16/56/eye-5814965_1280.jpg"
                                    alt="Identity verification process"
                                    width={400}
                                    height={300}
                                    className="rounded-xl w-full object-contain bg-transparent"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            {/* <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <p className="text-gray-600 font-medium">Trusted by leading organizations worldwide</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                        {["Airtel", "Paytm", "PayU", "Flipkart", "OLA", "Zomato"].map((company) => (
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
            </section> */}

            {/* Why DigitalRakshak Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-800 mb-4">WHY DIGITALRAKSHAK</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Seamless Identity Verification for Better Customer Onboarding
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our advanced AI technology works even on low-bandwidth connections and low-end devices, ensuring smooth
                            customer onboardings
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
                            <div className="text-gray-600">Automation Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">195+</div>
                            <div className="text-gray-600">Countries Supported</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">&lt;3sec</div>
                            <div className="text-gray-600">Avg Time to Complete</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="h-10 w-10 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">+40%</div>
                            <div className="text-gray-600">Conversion Increase</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Native AI Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-purple-100 text-purple-800 mb-4">OUR NATIVE AI</Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Highly Accurate AI Models Powering Seamless Onboardings
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our proprietary AI models are engineered to work in real-time even in low bandwidth environments, on
                                low-end devices and enable us to innovate fast, add custom AI checks as new needs are identified.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                                        <p className="text-gray-600">Lightning-fast verification in under 3 seconds</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Low Bandwidth Optimized</h4>
                                        <p className="text-gray-600">Works seamlessly even on 2G connections</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Device Agnostic</h4>
                                        <p className="text-gray-600">Compatible with 500+ device models</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-3xl">
                                <Image
                                    src="/placeholder.svg?height=400&width=500&text=AI+Processing+Visualization"
                                    alt="AI processing visualization"
                                    width={500}
                                    height={400}
                                    className="rounded-xl mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Experience Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    When did making users do more work become acceptable?
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">×</span>
                                        </div>
                                        <span className="text-gray-700">Complex gestures required</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">×</span>
                                        </div>
                                        <span className="text-gray-700">Multiple video recordings</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-gray-700">Single selfie verification</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Our Single Image Passive Liveness Technology
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our single image passive liveness technology enables you to convert more users by improving CX and
                                verifying liveness with just a selfie and without any complex gestures or videos.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">+40%</div>
                                    <div className="text-gray-600">Conversion Rate</div>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">-60%</div>
                                    <div className="text-gray-600">Drop-off Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-yellow-100 text-yellow-800 mb-4">CERTIFICATIONS WE HAVE</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry-Leading Security Standards</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle>ISO 27001</CardTitle>
                                <CardDescription>International standard for information security management systems</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="text-center hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle>SOC 2 Type II</CardTitle>
                                <CardDescription>Comprehensive security and availability compliance certification</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="text-center hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Database className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle>GDPR Compliant</CardTitle>
                                <CardDescription>Full compliance with European data protection regulations</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Global Databases Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-4">GLOBAL CENTRAL DATABASES</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Connect to Databases Easily!</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Connect to multiple databases around the world and expand your business globally in a hassle-free manner!
                        </p>
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <Image
                                src="/placeholder.svg?height=400&width=800&text=Global+Database+Network+Visualization"
                                alt="Global database network"
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Learn How We Supercharge Businesses!</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=120&text=Paytm"
                                        alt="Paytm logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Paytm</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "In 1 year, Paytm has been able to onboard 10M+ customers using DigitalRakshak's identity
                                    verification."
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
                                        src="/placeholder.svg?height=60&width=120&text=Flipkart"
                                        alt="Flipkart logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Flipkart</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Reduced cost of onboarding by 90% using DigitalRakshak's advanced verification technology."
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
                                        src="/placeholder.svg?height=60&width=120&text=Zomato"
                                        alt="Zomato logo"
                                        width={120}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <CardTitle className="text-xl">Zomato</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    "Scaled rapidly to 7M+ customers by using OCR, face-match and single-image liveness technology."
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
                                <CardTitle>How accurate is your identity verification system?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Our AI-powered system achieves 99.8% accuracy with advanced liveness detection and document
                                    verification capabilities.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>What documents do you support for verification?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    We support 3000+ document types from 195+ countries including passports, driver's licenses, national
                                    IDs, and more.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>How long does the verification process take?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Our average verification time is under 3 seconds, with real-time processing and instant results.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Supercharge Your Business?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Start verifying identities with our comprehensive verification services. Ensure authentic customer
                        information and prevent fraud.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            Book a Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                            Go-live in 4 hours • No-code Workflows
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-8 mt-8 text-sm text-blue-200">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>Go-live in 4 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>No-code Workflows</span>
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
