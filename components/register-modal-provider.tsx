"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import RegisterModal from "./register-modal"

interface RegisterModalContextType {
    isOpen: boolean
    openRegisterModal: () => void
    closeRegisterModal: () => void
    toggleRegisterModal: () => void
}

const RegisterModalContext = createContext<RegisterModalContextType | null>(null)

export function RegisterModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const openRegisterModal = useCallback(() => setIsOpen(true), [])
    const closeRegisterModal = useCallback(() => {
        setIsOpen(false)
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href)
            if (url.searchParams.has("register")) {
                url.searchParams.delete("register")
                const newSearch = url.searchParams.toString()
                const newPath = url.pathname + (newSearch ? `?${newSearch}` : "") + (url.hash || "")
                window.history.replaceState(null, "", newPath)
            }
        }
    }, [])
    const toggleRegisterModal = useCallback(() => setIsOpen((prev) => !prev), [])

    // Global event listeners (custom window events + intercepting /register links)
    useEffect(() => {
        const handleOpen = () => setIsOpen(true)
        const handleClose = () => setIsOpen(false)
        const handleToggle = () => setIsOpen((prev) => !prev)

        window.addEventListener("open-register-modal", handleOpen)
        window.addEventListener("close-register-modal", handleClose)
        window.addEventListener("toggle-register-modal", handleToggle)

        // Global click interceptor for any link pointing to /register or #register
        const handleDocumentClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement | null)?.closest("a, button")
            if (target) {
                const href = target.getAttribute("href")
                if (href === "/register" || href === "#register" || href?.includes("register=true")) {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsOpen(true)
                }
            }
        }
        document.addEventListener("click", handleDocumentClick, true)

        return () => {
            window.removeEventListener("open-register-modal", handleOpen)
            window.removeEventListener("close-register-modal", handleClose)
            window.removeEventListener("toggle-register-modal", handleToggle)
            document.removeEventListener("click", handleDocumentClick, true)
        }
    }, [])

    // Detect if current URL has ?register=true or hash #register
    useEffect(() => {
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href)
            if (url.searchParams.get("register") === "true" || window.location.hash === "#register") {
                setIsOpen(true)
            }
        }
    }, [pathname])

    return (
        <RegisterModalContext.Provider
            value={{
                isOpen,
                openRegisterModal,
                closeRegisterModal,
                toggleRegisterModal,
            }}
        >
            {children}
            <RegisterModal isOpen={isOpen} onClose={closeRegisterModal} />
        </RegisterModalContext.Provider>
    )
}

export function useRegisterModal() {
    const context = useContext(RegisterModalContext)
    if (!context) {
        throw new Error("useRegisterModal must be used within a RegisterModalProvider")
    }
    return context
}

export function openGlobalRegisterModal() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("open-register-modal"))
    }
}

export function closeGlobalRegisterModal() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("close-register-modal"))
    }
}
