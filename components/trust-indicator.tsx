import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface TrustIndicatorProps {
    title?: string;
    subtitle?: string;
    companies: string[];
    ctaText?: string;
    ctaHref?: string;
}

export function TrustIndicator({
    title = "Trusted by industry leaders",
    subtitle = "Trusted by 500+ organizations worldwide",
    companies = [],
    ctaText = "View customer case studies",
    ctaHref = "/case-studies",
}: TrustIndicatorProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-lg font-medium text-gray-500 mb-2">{title}</h3>
                    {subtitle && (
                        <h2 className="text-2xl font-bold text-gray-800">{subtitle}</h2>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {companies.map((domain) => (
                        <div
                            key={domain}
                            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
                        >
                            <div className="relative w-full h-12">
                                <Image
                                    src={`https://logo.clearbit.com/${domain}`}
                                    alt={`${domain.split('.')[0]} logo`}
                                    fill
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* {ctaText && ctaHref && (
                    <div className="mt-12 text-center">
                        <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
                            <Link href={ctaHref}>
                                {ctaText}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                )} */}
            </div>
        </section>
    );
}
