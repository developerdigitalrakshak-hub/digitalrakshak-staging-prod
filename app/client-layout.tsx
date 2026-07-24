"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AccessibilityProvider } from "@/components/accessibility/accessibility-provider"
import AccessibilityToolsModal from "@/components/accessibility/accessibility-tools-modal"
import AccessibilityTriggerButton from "@/components/accessibility/accessibility-trigger-button"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isClientOrAdmin =
        pathname.includes("/client") || pathname.includes("/admin2025")

    return (
        <AccessibilityProvider>
            {!isClientOrAdmin && <Navbar />}
            <main>{children}</main>
            {!isClientOrAdmin && <Footer />}
            <AccessibilityToolsModal />
            <AccessibilityTriggerButton />
        </AccessibilityProvider>
    )
}

