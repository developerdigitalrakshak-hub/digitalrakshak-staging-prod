import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="Gaming"
            intro={[
                "Gaming platforms must verify players, enforce age restrictions, and block abuse without breaking immersion.",
                "Our verification stack adds trust and safety while preserving a seamless player experience across devices.",
            ]}
            features={[
                {
                    title: "Player KYC & Age Checks",
                    description: "Verify identity and age instantly to meet regulatory needs.",
                },
                {
                    title: "Anti-Fraud Controls",
                    description: "Detect multi-accounting and location spoofing with device intelligence.",
                },
                {
                    title: "Fair Play Assurance",
                    description: "Reduce chargebacks and disputes with stronger proof of identity.",
                },
            ]}
            reasons={[
                "SDKs optimized for mobile and web.",
                "Privacy-first with data minimization practices.",
                "Battle-tested at scale during peak traffic.",
            ]}
            cta={{ label: "Talk to Experts", href: "/contact" }}
        />
    )
}
