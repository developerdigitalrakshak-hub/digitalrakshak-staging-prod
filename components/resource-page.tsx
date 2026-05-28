"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Star, Zap, Shield, Rocket } from "lucide-react"

type Feature = { title: string; description: string }
type ResourcePageProps = {
    title: string
    intro: string[]
    features?: Feature[]
    whyChoose?: string[]
    cta?: { label: string; href: string }
    children?: ReactNode
}

export default function ResourcePage({
    title,
    intro,
    features = [],
    whyChoose = [],
    cta = { label: "Get Started", href: "/contact" },
    children,
}: ResourcePageProps) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff33,_transparent_70%)]"></div>
                <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-blue-100 text-lg">{intro[0]}</p>
                    {intro[1] ? (
                        <p className="mt-2 max-w-3xl mx-auto text-blue-100 text-lg">{intro[1]}</p>
                    ) : null}
                </div>
            </section>

            {/* Extra children slot */}
            {children ? (
                <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
                    {children}
                </section>
            ) : null}

            {/* Features */}
            {features.length > 0 ? (
                <section className="border-t border-border bg-muted/20">
                    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
                        <h2 className="text-3xl font-semibold tracking-tight text-center">
                            ✨ Key Benefits
                        </h2>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((f, i) => (
                                <div
                                    key={f.title}
                                    className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl"
                                >
                                    <Card className="border-0 bg-transparent shadow-none">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                {i % 3 === 0 ? (
                                                    <Star className="w-6 h-6 text-purple-600" />
                                                ) : i % 3 === 1 ? (
                                                    <Zap className="w-6 h-6 text-blue-600" />
                                                ) : (
                                                    <Shield className="w-6 h-6 text-green-600" />
                                                )}
                                                <h3 className="font-semibold text-lg">{f.title}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{f.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* Why Choose Us */}
            {whyChoose.length > 0 ? (
                <section className="border-t border-border">
                    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
                        <h2 className="text-3xl font-semibold tracking-tight text-center">
                            🚀 Why Choose Us
                        </h2>
                        <div className="relative mt-10 max-w-3xl mx-auto">
                            <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                            <ul className="space-y-10 pl-12">
                                {whyChoose.map((point, i) => (
                                    <li
                                        key={point}
                                        className="relative flex gap-4 items-start text-muted-foreground"
                                    >
                                        <CheckCircle2 className="absolute -left-7 w-6 h-6 text-green-500 bg-background rounded-full" />
                                        <span className="text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ) : null}

            {/* CTA */}
            <section className="relative border-t border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800"></div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#ffffff33,_transparent_70%)]"></div>
                <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 flex flex-col sm:flex-row items-center justify-between gap-8 text-white rounded-lg">
                    <div>
                        <h3 className="text-2xl font-extrabold flex items-center gap-2">
                            <Rocket className="w-6 h-6 text-yellow-300" />
                            Ready to take the next step?
                        </h3>
                        <p className="mt-2 text-blue-100 max-w-xl">
                            Our team can help you plan, implement, and scale with confidence.
                        </p>
                    </div>
                    <Link
                        href={cta.href}
                        className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-base font-semibold text-black shadow-xl hover:scale-105 transition-transform"
                    >
                        {cta.label}
                    </Link>
                </div>
            </section>
        </main>
    )
}
