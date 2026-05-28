import { ArrowRight, CheckCircle, FileText, HardHat, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlueCollarVerificationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Blue Collar Verification</h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized verification services for blue-collar workers including skill validation, safety
                certifications, and work experience verification. Ensure qualified workforce for industrial and
                technical roles.
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
                    <HardHat className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Skills Verified</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 text-sm">Certifications Confirmed</span>
                    </div>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Blue+Collar+Worker+Verification"
                  alt="Blue collar worker verification process illustration"
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
                <CardTitle>Skill Validation</CardTitle>
                <CardDescription>Comprehensive validation of technical skills and trade certifications</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Safety Certifications</CardTitle>
                <CardDescription>Verification of safety training certificates and compliance records</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Detailed verification of hands-on work experience and project history</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle>License Verification</CardTitle>
                <CardDescription>Validation of professional licenses and regulatory compliance</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Verify Blue Collar Workers?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start comprehensive blue collar verification with our specialized services. Ensure qualified workforce for
            technical and industrial roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Blue Collar Verification
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
