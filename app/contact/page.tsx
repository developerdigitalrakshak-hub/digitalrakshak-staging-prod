"use client"

import type React from "react"

import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        toast({
            title: "Message sent successfully!",
            description: "We'll get back to you within 24 hours.",
        })

        setIsSubmitting(false)

        // Reset form
        const form = e.target as HTMLFormElement
        form.reset()
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Our Security Experts</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Ready to discuss your cybersecurity needs? Get in touch with our experienced team for VAPT services and
                            more.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                                    <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name *</Label>
                                                <Input id="firstName" name="firstName" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name *</Label>
                                                <Input id="lastName" name="lastName" required />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input id="email" name="email" type="email" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" name="phone" type="tel" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company Name</Label>
                                            <Input id="company" name="company" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="service">Service Interested In *</Label>
                                            <Select name="service" required>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="vapt">VAPT Services</SelectItem>
                                                    <SelectItem value="web-app-security">Web Application Security</SelectItem>
                                                    <SelectItem value="mobile-app-security">Mobile App Security Testing</SelectItem>
                                                    <SelectItem value="network-penetration">Network Penetration Testing</SelectItem>
                                                    <SelectItem value="gdpr">GDPR Compliance</SelectItem>
                                                    <SelectItem value="iso">ISO Certifications</SelectItem>
                                                    <SelectItem value="cybersecurity-consulting">Cybersecurity Consulting</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="budget">Estimated Budget</Label>
                                            <Select name="budget">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select budget range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                                                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                                                    <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                                                    <SelectItem value="over-50k">Over $50,000</SelectItem>
                                                    <SelectItem value="discuss">Prefer to discuss</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Please describe your legal needs and any specific requirements..."
                                                className="min-h-[120px]"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-2">
                                                <input type="checkbox" id="consent" name="consent" className="mt-1" required />
                                                <Label htmlFor="consent" className="text-sm text-gray-600">
                                                    I consent to the processing of my personal data for the purpose of this inquiry. By submitting
                                                    this form, I agree to the privacy policy. *
                                                </Label>
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full md:w-auto bg-orange-500 hover:bg-orange-700 text-white"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Get in Touch</CardTitle>
                                    <CardDescription>Multiple ways to reach our legal team</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Phone className="h-6 w-6 text-blue-600 mt-1" />
                                        <div>
                                            <h4 className="font-semibold">Phone</h4>
                                            <p className="text-gray-600">+91 88666 11427</p>
                                            <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="h-6 w-6 text-blue-600 mt-1" />
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                            <p className="text-gray-600">contact@digitalrakshak.com</p>
                                            <p className="text-sm text-gray-500">We respond within 24 hours</p>
                                        </div>
                                    </div>

                                    {/* <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Office</h4>
                      <p className="text-gray-600">
                        123 Legal Street
                        <br />
                        Suite 456
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div> */}
                                </CardContent>
                            </Card>

                            {/* <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Emergency consultations</strong> available 24/7 for existing clients
                    </p>
                  </div>
                </CardContent>
              </Card> */}

                            <Card>
                                <CardHeader>
                                    <CardTitle>Free Consultation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Schedule a free 30-minute consultation to discuss your legal needs.
                                    </p>
                                    <Button className="w-full bg-orange-500 hover:bg-orange-700 text-white" asChild>
                                        <a href="tel:+15551234567">Call Now</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-gray-600">Located in the heart of the legal district</p>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Placeholder</p>
          </div>
        </div>
      </section> */}
        </div>
    )
}
