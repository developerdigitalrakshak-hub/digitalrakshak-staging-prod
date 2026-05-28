import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="Banks"
            intro={[
                "Banks face relentless pressure to deliver instant onboarding while meeting strict AML and KYC obligations. Customer expectations for mobile-first, zero-friction experiences are higher than ever.",
                "Our platform accelerates compliant onboarding with accurate identity verification, risk signals, and audit-ready logs—reducing drop-offs while keeping regulators satisfied.",
            ]}
            features={[
                {
                    title: "eKYC & Video KYC",
                    description: "Faster, compliant KYC with document checks and assisted video verification.",
                },
                {
                    title: "AML Screening",
                    description: "Sanctions, PEP, and adverse media checks to flag high-risk customers.",
                },
                {
                    title: "Fraud Signals",
                    description: "Device, geo, and behavior signals to prevent mule accounts and fraud.",
                },
            ]}
            reasons={[
                "Bank-grade security and privacy with strong certifications.",
                "Proven scalability for millions of checks per month.",
                "Configurable flows to fit retail, corporate, and BNPL journeys.",
            ]}
            cta={{ label: "Contact Us", href: "/contact" }}
        />
    )
}
