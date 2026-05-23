import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
    {
        name: "Banks",
        href: "/industries/banks",
        blurb: "KYC/AML and seamless onboarding for retail and corporate banking.",
    },
    { name: "NBFCs", href: "/industries/nbfcs", blurb: "Faster loan approvals with risk checks and fraud prevention." },
    { name: "Gaming", href: "/industries/gaming", blurb: "Player KYC, age verification, and anti-fraud controls." },
    { name: "Crypto", href: "/industries/crypto", blurb: "Compliance-first onboarding for exchanges and wallets." },
    { name: "EdTech", href: "/industries/edtech", blurb: "Verify learners, instructors, and exam integrity at scale." },
    { name: "Insurance", href: "/industries/insurance", blurb: "Policyholder KYC, claims fraud reduction, and trust." },
    { name: "Marketplace", href: "/industries/marketplace", blurb: "Seller/buyer verification and dispute reduction." },
    {
        name: "Logistics & Ecommerce",
        href: "/industries/logistics-ecommerce",
        blurb: "Courier onboarding and warehouse workforce screening.",
    },
    {
        name: "Securities & Brokerages",
        href: "/industries/securities-brokerages",
        blurb: "Investor onboarding and regulatory compliance.",
    },
]

export default function Page() {
    return (
        <main className="bg-background text-foreground">
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                <div className="container mx-auto px-4 py-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-balance">Industries</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Tailored verification and compliance solutions across sectors.
                    </p>
                </div>
            </section>
            <section className="container mx-auto px-4 py-10">
                <div className="grid md:grid-cols-3 gap-4">
                    {industries.map((i) => (
                        <Link key={i.name} href={i.href}>
                            <Card className="h-full hover:shadow-md transition-shadow">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold">{i.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-2">{i.blurb}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
