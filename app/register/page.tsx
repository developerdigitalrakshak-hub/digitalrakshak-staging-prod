"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { openGlobalRegisterModal } from "@/components/register-modal-provider"

export default function RegisterPage() {
    const router = useRouter()

    useEffect(() => {
        router.replace("/?register=true")
        setTimeout(() => {
            openGlobalRegisterModal()
        }, 150)
    }, [router])

    return (
        <div className="min-h-screen bg-[#02050f] flex items-center justify-center text-white">
            <div className="text-center space-y-3">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-sm text-gray-400">Opening DigitalRakshak Inquiry Form...</p>
            </div>
        </div>
    )
}
