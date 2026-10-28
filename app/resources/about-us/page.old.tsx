import Banner from "@/components/about-us/Banner"
import CoreIdentity from "@/components/about-us/CoreIdentity"
import VisionMission from "@/components/about-us/VisionMission"
import EcosystemStack from "@/components/about-us/EcosystemStack"
import BusinessVerticals from "@/components/about-us/BusinessVerticals"
import WhyTrustUs from "@/components/about-us/WhyTrustUs"
import CTASection from "@/components/about-us/CTASection"

export const metadata = {
    title: "About Us - DigitalRakshak | Building Digital Trust Infrastructure",
    description: "DigitalRakshak builds the backend infrastructure that powers secure hiring, verification, and compliance.",
}

export default function Page() {
    return (
        <>
            <Banner />
            <CoreIdentity />
            <VisionMission />
            <EcosystemStack />
            <BusinessVerticals />
            <WhyTrustUs />
            <CTASection />
        </>
    )
}
