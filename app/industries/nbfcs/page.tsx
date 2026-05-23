import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="NBFCs"
            intro={[
                "NBFCs require ultra-fast decisioning to stay competitive, yet must manage identity risks and evolving KYC mandates.",
                "We combine rapid identity verification with intelligent risk checks to shorten time-to-approve while preventing fraud.",
            ]}
            features={[
                {
                    title: "Instant ID Verification",
                    description: "Authenticate applicants with OCR, liveness, and doc checks.",
                },
                { title: "Bureau & Registry Signals", description: "Integrate with registries to reduce risk and defaults." },
                { title: "Field Force Tools", description: "Mobile-ready tools for doorstep verification where required." },
            ]}
            reasons={[
                "Pre-built flows for consumer and SME lending.",
                "Lower CAC via higher approved conversions.",
                "Flexible APIs and dashboard for operations teams.",
            ]}
            cta={{ label: "Get Started", href: "/contact" }}
        />
    )
}
