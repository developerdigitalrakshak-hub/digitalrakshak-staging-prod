"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type ContrastMode = "normal" | "high" | "invert" | "monochrome"

interface AccessibilityState {
  contrastMode: ContrastMode
  fontSize: number // percentage: 85, 100, 115, 130
  highlightLinks: boolean
  textSpacing: boolean
  lineHeight: boolean
  hideImages: boolean
  bigCursor: boolean
  isModalOpen: boolean
}

interface AccessibilityContextType extends AccessibilityState {
  setContrastMode: (mode: ContrastMode) => void
  setFontSize: (size: number) => void
  increaseFontSize: () => void
  decreaseFontSize: () => void
  resetFontSize: () => void
  toggleHighlightLinks: () => void
  toggleTextSpacing: () => void
  toggleLineHeight: () => void
  toggleHideImages: () => void
  toggleBigCursor: () => void
  resetAll: () => void
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

const STORAGE_KEY = "digitalrakshak_accessibility_settings"

const defaultState: AccessibilityState = {
  contrastMode: "normal",
  fontSize: 100,
  highlightLinks: false,
  textSpacing: false,
  lineHeight: false,
  hideImages: false,
  bigCursor: false,
  isModalOpen: false,
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AccessibilityState>(defaultState)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setState((prev) => ({
          ...prev,
          contrastMode: parsed.contrastMode || "normal",
          fontSize: typeof parsed.fontSize === "number" ? parsed.fontSize : 100,
          highlightLinks: Boolean(parsed.highlightLinks),
          textSpacing: Boolean(parsed.textSpacing),
          lineHeight: Boolean(parsed.lineHeight),
          hideImages: Boolean(parsed.hideImages),
          bigCursor: Boolean(parsed.bigCursor),
        }))
      }
    } catch (e) {
      console.error("Failed to load accessibility settings:", e)
    } finally {
      setIsInitialized(true)
    }
  }, [])

  // Sync state changes to localStorage and document DOM
  useEffect(() => {
    if (!isInitialized) return

    // Save state
    try {
      const toSave = {
        contrastMode: state.contrastMode,
        fontSize: state.fontSize,
        highlightLinks: state.highlightLinks,
        textSpacing: state.textSpacing,
        lineHeight: state.lineHeight,
        hideImages: state.hideImages,
        bigCursor: state.bigCursor,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
    } catch (e) {
      console.error("Failed to save accessibility settings:", e)
    }

    // Apply to DOM
    const htmlEl = document.documentElement
    const bodyEl = document.body

    // Font size scale
    if (state.fontSize === 100) {
      htmlEl.style.fontSize = ""
    } else {
      htmlEl.style.fontSize = `${state.fontSize}%`
    }

    // Contrast mode
    htmlEl.classList.remove("acc-high-contrast", "acc-invert", "acc-monochrome")
    if (state.contrastMode === "high") {
      htmlEl.classList.add("acc-high-contrast")
    } else if (state.contrastMode === "invert") {
      htmlEl.classList.add("acc-invert")
    } else if (state.contrastMode === "monochrome") {
      htmlEl.classList.add("acc-monochrome")
    }

    // Highlight links
    bodyEl.classList.toggle("acc-highlight-links", state.highlightLinks)

    // Text spacing
    bodyEl.classList.toggle("acc-text-spacing", state.textSpacing)

    // Line height
    bodyEl.classList.toggle("acc-line-height", state.lineHeight)

    // Hide images
    bodyEl.classList.toggle("acc-hide-images", state.hideImages)

    // Big cursor
    bodyEl.classList.toggle("acc-big-cursor", state.bigCursor)

  }, [state, isInitialized])

  const setContrastMode = (mode: ContrastMode) => {
    setState((prev) => ({ ...prev, contrastMode: mode }))
  }

  const setFontSize = (size: number) => {
    const clamped = Math.min(150, Math.max(75, size))
    setState((prev) => ({ ...prev, fontSize: clamped }))
  }

  const increaseFontSize = () => {
    setState((prev) => {
      const nextSize = prev.fontSize < 100 ? 100 : prev.fontSize < 115 ? 115 : prev.fontSize < 130 ? 130 : 145
      return { ...prev, fontSize: nextSize }
    })
  }

  const decreaseFontSize = () => {
    setState((prev) => {
      const nextSize = prev.fontSize > 115 ? 115 : prev.fontSize > 100 ? 100 : prev.fontSize > 85 ? 85 : 75
      return { ...prev, fontSize: nextSize }
    })
  }

  const resetFontSize = () => {
    setState((prev) => ({ ...prev, fontSize: 100 }))
  }

  const toggleHighlightLinks = () => {
    setState((prev) => ({ ...prev, highlightLinks: !prev.highlightLinks }))
  }

  const toggleTextSpacing = () => {
    setState((prev) => ({ ...prev, textSpacing: !prev.textSpacing }))
  }

  const toggleLineHeight = () => {
    setState((prev) => ({ ...prev, lineHeight: !prev.lineHeight }))
  }

  const toggleHideImages = () => {
    setState((prev) => ({ ...prev, hideImages: !prev.hideImages }))
  }

  const toggleBigCursor = () => {
    setState((prev) => ({ ...prev, bigCursor: !prev.bigCursor }))
  }

  const resetAll = () => {
    setState((prev) => ({
      ...defaultState,
      isModalOpen: prev.isModalOpen,
    }))
  }

  const openModal = () => setState((prev) => ({ ...prev, isModalOpen: true }))
  const closeModal = () => setState((prev) => ({ ...prev, isModalOpen: false }))
  const toggleModal = () => setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }))

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        setContrastMode,
        setFontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        toggleHighlightLinks,
        toggleTextSpacing,
        toggleLineHeight,
        toggleHideImages,
        toggleBigCursor,
        resetAll,
        openModal,
        closeModal,
        toggleModal,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}
