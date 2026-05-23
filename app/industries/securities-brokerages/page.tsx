import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="Securities & Brokerages"
            intro={[
                "Brokers must onboard investors swiftly while meeting strict KYC/AML and suitability standards.",
                "Our solutions streamline account opening with compliant checks and clear auditability.",
            ]}
            features={[
                { title: "Investor KYC & AML", description: "Sanctions screening and identity verification for investors." },
                { title: "Suitability Checks", description: "Capture declarations and risk profiles as required." },
                { title: "Ongoing Monitoring", description: "Flag changes and keep profiles up to date." },
            ]}
            reasons={[
                "SEBI-adjacent workflows and disclosures support.",
                "Low-latency hosted and API options.",
                "Battle-tested with high transaction volumes.",
            ]}
            cta={{ label: "Book a Demo", href: "/contact" }}
        />
    )
}
