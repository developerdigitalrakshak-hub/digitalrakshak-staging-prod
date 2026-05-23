import { Mail, MapPin, Phone, Shield } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Shield className="h-8 w-8 text-blue-400" />
                            <span className="text-xl font-bold">Digital Rakshak</span>
                        </Link>
                        <p className="text-gray-300">
                            Digital Rakshak provides comprehensive data protection and compliance solutions.
                            Your trusted partner for GDPR compliance and security consulting.
                        </p>
                        <p className="text-blue-400 text-sm font-bold">PROTECTING YOUR DATA RIGHTS</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span className="text-sm">+91 73870 22442</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span className="text-sm">contact@digitalrakshak.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-blue-400" />
                                <span className="text-sm">Ahmedabad, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">GDPR Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services/gdpr-compliance"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    GDPR Compliance Assessment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/data-protection-impact"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Data Protection Impact Assessments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/privacy-policy-development"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Privacy Policy Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/data-processing-agreements"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Data Processing Agreements
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/gdpr-training" className="text-gray-300 hover:text-white transition-colors">
                                    GDPR Staff Training
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Compliance</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/gdpr-compliance" className="text-gray-300 hover:text-white transition-colors">
                                    GDPR Implementation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/iso-27001" className="text-gray-300 hover:text-white transition-colors">
                                    ISO 27001 Certification
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/data-privacy" className="text-gray-300 hover:text-white transition-colors">
                                    Data Privacy Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/soc2-compliance" className="text-gray-300 hover:text-white transition-colors">
                                    SOC 2 Compliance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/hipaa-compliance" className="text-gray-300 hover:text-white transition-colors">
                                    HIPAA Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources/gdpr-guides" className="text-gray-300 hover:text-white transition-colors">
                                    GDPR Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Digital Rakshak. All rights reserved. Certified data protection professionals.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                LinkedIn
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Twitter
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Facebook
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
