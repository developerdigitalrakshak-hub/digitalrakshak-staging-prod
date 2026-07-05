import Banner from "@/components/careers/Banner"
import OverviewSection from "@/components/careers/OverviewSection"
import WorkCulture from "@/components/careers/WorkCulture"
import OpeningsSection from "@/components/careers/OpeningsSection"

export const metadata = {
    title: "Careers - Digital Rakshak | Build the Future of Digital Trust",
    description: "Join a team building the secure, scalable verification infrastructure that helps modern businesses across India operate with confidence.",
}

export default function Page() {
    return (
        <>
            <Banner />
            <OverviewSection />
            <WorkCulture />
            <OpeningsSection />
        </>
    )
}
