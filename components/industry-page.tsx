"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Star, Rocket, Shield, Zap } from "lucide-react"

type IndustryPageProps = {
    title: string
    intro: string[]
    features: { title: string; description: string }[]
    reasons: string[]
    cta?: { label: string; href: string }
}

export default function IndustryPage({
    title,
    intro,
    features,
    reasons,
    cta = { label: "Get Started", href: "/contact" },
}: IndustryPageProps) {
    return (
        <main className="bg-background text-foreground">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_70%)]"></div>
                <div className="container mx-auto px-4 py-24 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg max-w-2xl mx-auto text-blue-100">
                        Expert verification and compliance solutions tailored to {title}.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="container mx-auto px-4 py-16">
                <div className="prose prose-lg max-w-4xl mx-auto text-pretty text-muted-foreground">
                    {intro.map((p, i) => (
                        <p key={i} className="leading-8 text-lg">
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-semibold mb-12 text-center">
                    ✨ Key Features & Benefits
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={f.title}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl p-6 flex flex-col items-start"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                                {i % 3 === 0 ? <Star className="w-6 h-6" /> : i % 3 === 1 ? <Zap className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                            <p className="mt-2 text-sm text-blue-50">{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Us - Timeline */}
            <section className="bg-muted/40 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-12 text-center">
                        🚀 Why Choose Us
                    </h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                        <ul className="space-y-10 pl-12">
                            {reasons.map((r, i) => (
                                <li key={i} className="relative flex gap-4 items-start">
                                    <CheckCircle2 className="absolute -left-7 w-6 h-6 text-green-500 bg-background rounded-full" />
                                    <span className="text-muted-foreground text-lg">{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800"></div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff33,_transparent_70%)]"></div>
                <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                    <div>
                        <h3 className="text-3xl font-extrabold flex items-center gap-2">
                            <Rocket className="w-7 h-7 text-yellow-300" />
                            Ready to accelerate onboarding?
                        </h3>
                        <p className="text-blue-100 mt-3 max-w-xl">
                            Talk to our experts to see how we can help your {title.toLowerCase()} needs.
                        </p>
                    </div>
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-xl hover:scale-105 transition-transform"
                    >
                        <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
