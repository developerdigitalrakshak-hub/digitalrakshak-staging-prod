import ResourcePage from "@/components/resource-page"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
    return (
        <ResourcePage
            title="Blog"
            intro={[
                "Insights on compliance operations, identity verification, fraud, and risk management for digital businesses.",
                "Deep dives, how-tos, and frameworks to help you ship faster while staying audit-ready.",
            ]}
            features={[
                { title: "Guides & playbooks", description: "Step-by-step how-tos you can apply immediately." },
                { title: "Case studies", description: "What leading teams are doing right now—and how to replicate it." },
                { title: "Regulatory updates", description: "Digestible summaries of changes and what they mean for you." },
            ]}
            whyChoose={[
                "Original research and practical perspectives",
                "Real examples from high-scale companies",
                "Clear, no-fluff writing you can act on",
            ]}
            cta={{ label: "Get updates", href: "/contact" }}
        >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Operationalizing KYC in 30 Days", href: "/resources/blog" },
                    { title: "Modern AML: Risk Signals That Matter", href: "/resources/blog" },
                    { title: "How to Audit-Proof Your Program", href: "/resources/blog" },
                ].map((p) => (
                    <Card key={p.title}>
                        <CardHeader>
                            <CardTitle className="text-base">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Read the article</p>
                            <Link href={p.href} className="mt-2 inline-flex text-sm text-primary underline underline-offset-4">
                                Open
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ResourcePage>
    )
}
