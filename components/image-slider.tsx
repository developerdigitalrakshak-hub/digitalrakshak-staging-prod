"use client"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

interface Slide {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    imageAlt: string
    ctaText: string
    ctaLink: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Your Digital Guardian",
        subtitle: "for Cybersecurity & Compliance",
        description:
            "DigitalRakshak provides comprehensive cybersecurity and compliance solutions. Your trusted partner for GDPR implementation, data protection, and security consulting.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
        imageAlt: "Cybersecurity professionals working on security assessment and monitoring",
        ctaText: "Get Free Security Assessment",
        ctaLink: "/contact",
        secondaryCtaText: "View Our Services",
        secondaryCtaLink: "/vapt-services",
    },
    // {
    //   id: 2,
    //   title: "Advanced VAPT Services",
    //   subtitle: "Comprehensive Security Testing",
    //   description:
    //     "From web applications to mobile apps and network infrastructure - our certified experts identify vulnerabilities before attackers do. OWASP-compliant testing methodologies.",
    //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    //   imageAlt: "Security testing laboratory with multiple screens showing vulnerability assessments",
    //   ctaText: "Schedule VAPT Assessment",
    //   ctaLink: "/vapt-services",
    //   secondaryCtaText: "Learn More",
    //   secondaryCtaLink: "/services/web-application-security",
    // },
    {
        id: 3,
        title: "Compliance Made Simple",
        subtitle: "ISO 27001, GDPR & More",
        description:
            "Navigate complex compliance requirements with confidence. Our experts help you achieve and maintain ISO 27001, GDPR, SOC 2, and other critical certifications.",
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&auto=format&fit=crop",
        imageAlt: "Professional compliance audit meeting with documents and certification materials",
        ctaText: "Start Compliance Journey",
        ctaLink: "/services/gdpr-compliance",
        secondaryCtaText: "View All Compliance Services",
        secondaryCtaLink: "/compliance",
    },
    {
        id: 4,
        title: "24/7 Security Monitoring",
        subtitle: "Always Vigilant, Always Protected",
        description:
            "Round-the-clock security monitoring and incident response. Our security operations center ensures your digital assets are protected against emerging threats.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop",
        imageAlt: "Modern security operations center with analysts monitoring multiple security dashboards",
        ctaText: "Learn About SOC Services",
        ctaLink: "/contact",
        secondaryCtaText: "Contact Security Team",
        secondaryCtaLink: "/contact",
    },
]

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
        // Resume auto-play after 10 seconds of manual interaction
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Slider Container */}
            <div className="relative h-[600px] lg:h-[700px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="container mx-auto px-4 h-full">
                            <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-12">
                                {/* Content */}
                                <div className="space-y-8 z-10">
                                    <div className="space-y-4">
                                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                            {slide.title} <span className="text-blue-400">{slide.subtitle}</span>
                                        </h1>
                                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{slide.description}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                                            <Link href={slide.ctaLink}>
                                                {slide.ctaText}
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                        {slide.secondaryCtaText && slide.secondaryCtaLink && (
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="border-white text-black hover:text-slate-900"
                                                asChild
                                            >
                                                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                                            </Button>
                                        )}
                                    </div>

                                    {/* Statistics - only show on first slide */}
                                    {index === 0 && (
                                        <div className="flex items-center gap-8 pt-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">1000+</div>
                                                <div className="text-sm text-gray-400">Security Assessments</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">10+</div>
                                                <div className="text-sm text-gray-400">Years Experience</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">99%</div>
                                                <div className="text-sm text-gray-400">Client Satisfaction</div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                        <Image
                                            src={slide.image || "/placeholder.svg"}
                                            alt={slide.imageAlt}
                                            width={600}
                                            height={400}
                                            className="rounded-lg w-full h-auto"
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 z-20"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-400 scale-125" : "bg-white/50 hover:bg-white/70"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
                <div
                    className="h-full bg-blue-400 transition-all duration-300 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    }}
                />
            </div>

            {/* Auto-play Indicator */}
            {/* <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-black/30 hover:bg-black/50 text-white px-3 py-1 rounded-full text-sm transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
      </div> */}
        </section>
    )
}
