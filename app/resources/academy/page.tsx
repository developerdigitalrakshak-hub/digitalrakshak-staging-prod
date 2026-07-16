import Banner from "@/components/academy/Banner"
import OverviewSection from "@/components/academy/OverviewSection"
import Services from "@/components/academy/Services"
import BenefitsSection from "@/components/academy/BenefitsSection"
import CTASection from "@/components/academy/CTASection"

export const metadata = {
    title: "DigitalRakshak Academy - Identity Verification, Compliance & Digital Trust",
    description: "Build practical expertise in KYC, workforce screening, fraud prevention, and changing compliance laws with blueprints and guides designed by industry practitioners.",
}

export default function Page() {
    return (
        <>
            <Banner />
            <OverviewSection />
            <Services />
            <BenefitsSection />
            <CTASection />
        </>
    )
}
