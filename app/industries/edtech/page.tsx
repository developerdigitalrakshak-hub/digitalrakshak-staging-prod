import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="EdTech"
            intro={[
                "EdTech platforms need to trust learners and educators while protecting exam integrity.",
                "Our verification helps reduce impersonation and credential fraud while streamlining onboarding.",
            ]}
            features={[
                { title: "Learner & Teacher KYC", description: "Verify identities during sign-up or onboarding flows." },
                { title: "Proctoring Signals", description: "Detect anomalies during remote assessments." },
                { title: "Credential Validation", description: "Confirm education certifications where applicable." },
            ]}
            reasons={[
                "Friction-optimized UX for higher completion rates.",
                "Privacy-first and COPPA-conscious approaches.",
                "Dashboards for support and quick review.",
            ]}
            cta={{ label: "Explore Solutions", href: "/contact" }}
        />
    )
}
