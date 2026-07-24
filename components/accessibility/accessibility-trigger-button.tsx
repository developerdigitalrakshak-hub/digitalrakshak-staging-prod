"use client"

import React from "react"
import { useAccessibility } from "./accessibility-provider"
import { PersonStanding } from "lucide-react"

export default function AccessibilityTriggerButton() {
  const { openModal, contrastMode, fontSize, highlightLinks, textSpacing, lineHeight, hideImages, bigCursor } =
    useAccessibility()

  const isAnyActive =
    contrastMode !== "normal" ||
    fontSize !== 100 ||
    highlightLinks ||
    textSpacing ||
    lineHeight ||
    hideImages ||
    bigCursor

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={openModal}
        aria-label="Open Accessibility Tools"
        title="Accessibility Tools"
        className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 ${
          isAnyActive
            ? "bg-blue-700 text-white ring-blue-400 animate-pulse"
            : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300"
        }`}
      >
        <PersonStanding className="w-7 h-7" />

        {isAnyActive && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">
            ✓
          </span>
        )}
      </button>
    </div>
  )
}
