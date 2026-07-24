"use client"

import React, { useEffect, useRef } from "react"
import { useAccessibility } from "./accessibility-provider"
import {
  X,
  Sun,
  SunMedium,
  Link as LinkIcon,
  CircleDot,
  Droplet,
  MoveHorizontal,
  MoveVertical,
  ImageOff,
  MousePointer,
  RotateCcw,
  Check,
} from "lucide-react"

export default function AccessibilityToolsModal() {
  const {
    isModalOpen,
    closeModal,
    contrastMode,
    setContrastMode,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    highlightLinks,
    toggleHighlightLinks,
    textSpacing,
    toggleTextSpacing,
    lineHeight,
    toggleLineHeight,
    hideImages,
    toggleHideImages,
    bigCursor,
    toggleBigCursor,
    resetAll,
  } = useAccessibility()

  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal when pressing Escape or clicking outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen, closeModal])

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-tools-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <h2 id="accessibility-tools-title" className="text-xl font-bold text-gray-800 text-center flex-1">
            Accessibility Tools
          </h2>
          <button
            onClick={closeModal}
            aria-label="Close accessibility tools"
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Color Contrast */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Color Contrast</h3>
          <div className="grid grid-cols-3 gap-2.5">
            {/* High Contrast */}
            <button
              onClick={() => setContrastMode(contrastMode === "high" ? "normal" : "high")}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                contrastMode === "high"
                  ? "bg-black text-white border-black ring-2 ring-black ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {contrastMode === "high" && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <Sun className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">High Contrast</span>
            </button>

            {/* Normal Contrast */}
            <button
              onClick={() => setContrastMode("normal")}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                contrastMode === "normal"
                  ? "bg-white text-gray-900 border-gray-400 shadow-sm ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {contrastMode === "normal" && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <SunMedium className="w-6 h-6 mb-1.5 text-gray-700" />
              <span className="text-xs font-medium text-center leading-tight text-blue-600 underline">Normal Contrast</span>
            </button>

            {/* Highlight Links */}
            <button
              onClick={toggleHighlightLinks}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                highlightLinks
                  ? "bg-amber-50 text-amber-900 border-amber-400 ring-2 ring-amber-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {highlightLinks && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <LinkIcon className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Highlight Links</span>
            </button>

            {/* Invert */}
            <button
              onClick={() => setContrastMode(contrastMode === "invert" ? "normal" : "invert")}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                contrastMode === "invert"
                  ? "bg-indigo-900 text-white border-indigo-900 ring-2 ring-indigo-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {contrastMode === "invert" && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <CircleDot className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Invert</span>
            </button>

            {/* Saturation / Monochrome */}
            <button
              onClick={() => setContrastMode(contrastMode === "monochrome" ? "normal" : "monochrome")}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                contrastMode === "monochrome"
                  ? "bg-gray-800 text-white border-gray-800 ring-2 ring-gray-600 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {contrastMode === "monochrome" && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <Droplet className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Saturation</span>
            </button>
          </div>
        </div>

        {/* Section 2: Text Size */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Text Size</h3>
          <div className="grid grid-cols-3 gap-2.5 mb-2.5">
            {/* Font Size Increase */}
            <button
              onClick={increaseFontSize}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                fontSize > 100
                  ? "bg-blue-50 text-blue-900 border-blue-300 ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl font-extrabold mb-1 leading-none">A+</span>
              <span className="text-[11px] font-medium text-center leading-tight">Font Size Increase</span>
            </button>

            {/* Font Size Decrease */}
            <button
              onClick={decreaseFontSize}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                fontSize < 100
                  ? "bg-blue-50 text-blue-900 border-blue-300 ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl font-extrabold mb-1 leading-none">A-</span>
              <span className="text-[11px] font-medium text-center leading-tight">Font Size Decrease</span>
            </button>

            {/* Normal Font */}
            <button
              onClick={resetFontSize}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                fontSize === 100
                  ? "bg-white text-gray-900 border-gray-300 shadow-sm ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {fontSize === 100 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <span className="text-2xl font-extrabold mb-1 leading-none">A</span>
              <span className="text-[11px] font-medium text-center leading-tight underline">Normal Font</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Text Spacing */}
            <button
              onClick={toggleTextSpacing}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                textSpacing
                  ? "bg-blue-50 text-blue-900 border-blue-300 ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {textSpacing && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <MoveHorizontal className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Text Spacing</span>
            </button>

            {/* Line Height */}
            <button
              onClick={toggleLineHeight}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                lineHeight
                  ? "bg-blue-50 text-blue-900 border-blue-300 ring-2 ring-blue-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {lineHeight && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <MoveVertical className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Line Height</span>
            </button>
          </div>
        </div>

        {/* Section 3: Other controls */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Other controls</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {/* Hide Images */}
            <button
              onClick={toggleHideImages}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                hideImages
                  ? "bg-rose-50 text-rose-900 border-rose-300 ring-2 ring-rose-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {hideImages && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <ImageOff className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Hide Images</span>
            </button>

            {/* Big Cursor */}
            <button
              onClick={toggleBigCursor}
              className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all ${
                bigCursor
                  ? "bg-purple-50 text-purple-900 border-purple-300 ring-2 ring-purple-500 ring-offset-1"
                  : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {bigCursor && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <MousePointer className="w-6 h-6 mb-1.5" />
              <span className="text-xs font-medium text-center leading-tight">Big Cursor</span>
            </button>
          </div>
        </div>

        {/* Footer Action: Reset All */}
        <div className="pt-3 border-t border-gray-100">
          <button
            onClick={resetAll}
            className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset All Accessibility Settings
          </button>
        </div>
      </div>
    </div>
  )
}
