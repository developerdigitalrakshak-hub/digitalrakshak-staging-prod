import Banner from "@/components/blog/Banner"
import OverviewSection from "@/components/blog/OverviewSection"
import Services from "@/components/blog/Services"
import CTASection from "@/components/blog/CTASection"

export const metadata = {
    title: "Digital Rakshak Blog - Insights on Verification, Compliance & Digital Trust",
    description: "Real-world commentary on data privacy laws, identity tech, fraud trends, and engineering trust, straight from the Digital Rakshak team.",
}

export default function Page() {
    return (
        <>
            <Banner />
            <OverviewSection />
            <Services />
            <CTASection />
        </>
    )
}
