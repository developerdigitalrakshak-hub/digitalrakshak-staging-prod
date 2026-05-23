"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isClientOrAdmin =
        pathname.includes("/client") || pathname.includes("/admin2025")

    return (
        <>
            {!isClientOrAdmin && <Navbar />}
            <main>{children}</main>
            {!isClientOrAdmin && <Footer />}
        </>
    )
}
