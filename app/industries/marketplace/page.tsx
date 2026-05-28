import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="Marketplace"
            intro={[
                "Marketplaces must verify buyers and sellers to prevent fraud and improve trust.",
                "Our verification stack helps reduce disputes and unlock safer transactions.",
            ]}
            features={[
                { title: "Seller KYC", description: "Validate seller identities and business credentials." },
                { title: "Buyer Risk Checks", description: "Detect suspicious behavior and reduce chargebacks." },
                { title: "Dispute Reduction Tools", description: "Evidence-driven flows to resolve issues faster." },
            ]}
            reasons={[
                "Designed for C2C, B2C, and B2B marketplaces.",
                "Friction-minimized UX for higher conversions.",
                "Configurable policy rules and thresholds.",
            ]}
            cta={{ label: "Get Started", href: "/contact" }}
        />
    )
}
