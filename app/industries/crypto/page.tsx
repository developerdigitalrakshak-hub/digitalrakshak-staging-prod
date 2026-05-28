import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="Crypto"
            intro={[
                "Crypto exchanges and wallets face high scrutiny around KYC/AML while users expect fast onboarding.",
                "We deliver compliance-grade verification that doesn’t sacrifice speed, helping you combat fraud and meet global standards.",
            ]}
            features={[
                { title: "Global KYC/AML", description: "PEP, sanctions, watchlist screening with robust audit trails." },
                {
                    title: "Liveness & Doc Checks",
                    description: "Prevent identity theft with biometric and document validation.",
                },
                { title: "Travel Rule Support", description: "Integrations to support compliant transfers and monitoring." },
            ]}
            reasons={[
                "Flexible regional configurations for VASP requirements.",
                "Secure storage and data residency options.",
                "Rapid deployment via API or hosted flows.",
            ]}
            cta={{ label: "Contact Compliance Team", href: "/contact" }}
        />
    )
}
