import ResourcePage from "@/components/resource-page"

export default function Page() {
    return (
        <ResourcePage
            title="Academy"
            intro={[
                "Learn compliance, KYC, AML, and risk workflows through expert-led micro-courses designed for fast-moving teams.",
                "Build job-ready skills with templates, checklists, and practical exercises aligned to real regulatory scenarios.",
            ]}
            features={[
                {
                    title: "Expert-led tracks",
                    description: "Short, focused modules curated by practitioners with years of industry experience.",
                },
                {
                    title: "Certificates & badges",
                    description: "Showcase your progress with shareable certificates and completion badges.",
                },
                {
                    title: "Hands-on templates",
                    description: "Download-ready SOPs, playbooks, and audit-ready checklists you can use immediately.",
                },
                {
                    title: "Role-based paths",
                    description: "Tailored learning for compliance officers, analysts, operations, and leadership.",
                },
                {
                    title: "Always up-to-date",
                    description: "Content updated as regulations, risks, and best practices evolve.",
                },
                {
                    title: "Team analytics",
                    description: "Track team adoption and completion to ensure organization-wide baseline compliance.",
                },
            ]}
            whyChoose={[
                "Industry-first training engineered for high-growth companies",
                "Actionable templates that reduce time-to-value",
                "Guided learning paths for every role and maturity level",
            ]}
            cta={{ label: "Browse courses", href: "/contact" }}
        />
    )
}
