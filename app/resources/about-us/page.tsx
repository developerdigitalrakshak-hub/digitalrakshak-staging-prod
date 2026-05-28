import ResourcePage from "@/components/resource-page"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
    return (
        <ResourcePage
            title="About Us"
            intro={[
                "We help digital businesses verify identities, prevent fraud, and stay compliant—without slowing down growth.",
                "Our approach blends modern tooling, practical playbooks, and deep regulatory expertise so teams can ship confidently.",
            ]}
            features={[
                {
                    title: "Our mission",
                    description: "Make trust infrastructure fast, accessible, and reliable for every internet business.",
                },
                {
                    title: "Our values",
                    description: "Clarity, speed, and ownership—applied to every customer interaction and product decision.",
                },
                {
                    title: "Our impact",
                    description: "Millions of verifications processed and workflows standardized across industries.",
                },
            ]}
            whyChoose={[
                "Proven team of operators and compliance experts",
                "Customer-first approach with measurable outcomes",
                "Secure by design with robust privacy safeguards",
            ]}
            cta={{ label: "Contact us", href: "/contact" }}
        >
            <div className="grid gap-4 sm:grid-cols-3">
                {[
                    { title: "Trust & Security", desc: "We build with privacy and security as first principles." },
                    { title: "Customer Obsession", desc: "Your outcomes guide our roadmap and delivery." },
                    { title: "Continuous Improvement", desc: "We iterate quickly based on real-world feedback." },
                ].map((b) => (
                    <Card key={b.title}>
                        <CardHeader>
                            <CardTitle className="text-base">{b.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{b.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ResourcePage>
    )
}
