import ResourcePage from "@/components/resource-page"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
    const terms = [
        {
            t: "KYC (Know Your Customer)",
            d: "Verification processes to confirm a customer's identity before providing services.",
        },
        { t: "AML (Anti-Money Laundering)", d: "Controls that detect and prevent money-laundering activities." },
        { t: "PEP", d: "Politically Exposed Person—individuals with higher risk requiring enhanced due diligence." },
        {
            t: "Sanctions Screening",
            d: "Checking individuals/entities against government or international sanction lists.",
        },
        { t: "Risk Scoring", d: "A method to quantify risk signals into a single, comparable score." },
    ]

    return (
        <ResourcePage
            title="Glossary"
            intro={[
                "A plain-language, practical reference for the acronyms, frameworks, and processes you encounter in compliance, KYC, and risk.",
                "Each definition is designed for clarity—use it to onboard teammates or align stakeholders fast.",
            ]}
            features={[
                { title: "A–Z index", description: "Quickly locate terms and related concepts for faster understanding." },
                { title: "Plain language", description: "No jargon. No fluff. Direct, practical definitions." },
                { title: "Linked concepts", description: "Understand how terms relate across risk, fraud, and compliance." },
            ]}
            whyChoose={[
                "Consistent definitions team-wide",
                "Great for onboarding and training",
                "Continuously updated with evolving terminology",
            ]}
            cta={{ label: "Request a term", href: "/contact" }}
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {terms.map((item) => (
                    <Card key={item.t}>
                        <CardContent className="p-5">
                            <h3 className="text-base font-medium">{item.t}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ResourcePage>
    )
}
