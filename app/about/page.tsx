import { Award, CheckCircle, Globe, Scale, Shield, Users } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Digital Rakshak</h1>
            <p className="text-xl text-gray-300 mb-8">
              With over 10 years of experience, we are dedicated to providing exceptional cybersecurity and VAPT
              services that protect and empower businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2013, our company has grown from a small team focused on cybersecurity to a comprehensive
                  VAPT (Vulnerability Assessment and Penetration Testing) services provider specializing in
                  vulnerability assessments, compliance, and digital security.
                </p>
                <p>
                  As cybersecurity threats evolved globally, we recognized the critical need for specialized expertise
                  in vulnerability assessments, compliance, and cybersecurity. Today, we are proud to be recognized
                  leaders in this field.
                </p>
                <p>
                  Our mission is to make complex digital security and compliance requirements accessible and manageable
                  for businesses of all sizes, from startups to Fortune 500 companies.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our office"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
                <CardDescription>
                  We maintain the highest ethical standards and transparency in all our dealings
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Client-Focused</CardTitle>
                <CardDescription>
                  Your success is our priority. We tailor our services to meet your specific needs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We strive for excellence in every aspect of our legal services and client relationships
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  We embrace technology and innovative approaches to deliver efficient legal solutions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Scale className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Justice</CardTitle>
                <CardDescription>
                  We are committed to upholding justice and protecting our clients' rights and interests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Reliability</CardTitle>
                <CardDescription>
                  You can count on us to deliver consistent, dependable legal services when you need them
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to your legal success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sarah Johnson"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription className="text-orange-600 font-semibold">
                  Managing Partner & VAPT Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  10+ years experience in cybersecurity. Certified VAPT practitioner and recognized expert in
                  international security regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Chen"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription className="text-orange-600 font-semibold">
                  Senior Partner & Compliance Expert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Specializes in ISO 27001/27018 implementations. Former cybersecurity consultant with deep technical
                  and legal expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Emily Rodriguez"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Emily Rodriguez</CardTitle>
                <CardDescription className="text-orange-600 font-semibold">Cybersecurity Consultant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Expert in network security, vulnerability management, and security awareness training. Trusted advisor
                  to startups and established enterprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Security Assessments</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Security Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
