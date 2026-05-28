import IndustryPage from "@/components/industry-page"

export default function Page() {
    return (
        <IndustryPage
            title="Logistics & Ecommerce"
            intro={[
                "Logistics and eCommerce operations require rapid hiring and reliable delivery networks.",
                "We enable safe onboarding of couriers and warehouse staff while protecting customer experience.",
            ]}
            features={[
                { title: "Workforce Screening", description: "Identity and background checks for field staff." },
                { title: "Address Verification", description: "Confirm pickup and delivery addresses programmatically." },
                { title: "Ops-Friendly Dashboards", description: "Simple review workflows for large ops teams." },
            ]}
            reasons={[
                "At-scale processing for seasonal spikes.",
                "Mobile SDKs for low-connectivity environments.",
                "Flexible SLAs for enterprise programs.",
            ]}
            cta={{ label: "Optimize Operations", href: "/contact" }}
        />
    )
}
