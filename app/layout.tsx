import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "DigitalRakshak - Your Digital Guardian for Cybersecurity & Compliance",
    description:
        "DigitalRakshak provides comprehensive cybersecurity services, VAPT testing, and compliance solutions. Protecting your digital assets with expert security guidance.",
    icons: {
        icon: "/icon.svg",
    },
    generator: 'v0.app'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientLayout>{children}</ClientLayout>
                <Toaster />
            </body>
        </html>
    )
}
