"use client"

import React, { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, Facebook, Twitter, Linkedin, ChevronRight, FileText, ArrowRight, ExternalLink } from "lucide-react"
import { searchSite, SearchItem } from "@/lib/search-index"

function SearchResultsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""

  const [inputQuery, setInputQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchItem[]>([])

  useEffect(() => {
    setInputQuery(initialQuery)
    if (initialQuery.trim()) {
      const found = searchSite(initialQuery.trim())
      setResults(found)
    } else {
      setResults([])
    }
  }, [initialQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputQuery.trim())}`)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-6xl">
        
        {/* Breadcrumb Navigation & Social Share */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 mb-6 border-b border-gray-100 text-sm">
          <div className="flex items-center gap-1.5 text-gray-600 flex-wrap">
            <Link href="/" className="text-amber-700 hover:underline font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-500 font-normal">
              Search Results for &quot;<span className="text-gray-800 font-medium">{initialQuery || "all"}</span>&quot;
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <button aria-label="Share on Facebook" className="hover:text-blue-600 transition-colors">
              <Facebook className="w-4 h-4 fill-current" />
            </button>
            <button aria-label="Share on X" className="hover:text-gray-900 transition-colors">
              <Twitter className="w-4 h-4 fill-current" />
            </button>
            <button aria-label="Share on LinkedIn" className="hover:text-blue-700 transition-colors">
              <Linkedin className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* Main Heading Matching Image 3 */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
          Search Results For : <span className="font-semibold text-gray-800">{initialQuery || ""}</span>
        </h1>

        {/* Central Gray Search Box Container (Matching Image 3) */}
        <div className="bg-[#e9e6e1] rounded-md p-6 md:p-8 mb-8 border border-stone-300 shadow-sm">
          <form onSubmit={handleSearchSubmit} className="flex items-center justify-center max-w-2xl mx-auto">
            <div className="flex w-full rounded-md shadow-sm">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Search whole website..."
                className="w-full px-4 py-2.5 text-base text-gray-900 bg-white border border-stone-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <button
                type="submit"
                className="bg-[#f39c12] hover:bg-[#e67e22] text-gray-900 font-bold px-6 py-2.5 rounded-r-md transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* Count Summary Indicator (Matching Image 3) */}
        <div className="text-xs sm:text-sm text-gray-600 font-medium mb-6">
          {results.length > 0 ? (
            <span>
              1 - {results.length} of Total {results.length} {results.length === 1 ? "result" : "results"}
            </span>
          ) : (
            <span>Total 0 results found</span>
          )}
        </div>

        {/* Results List (Matching Image 3 design) */}
        {results.length > 0 ? (
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {results.map((item) => (
              <div key={item.id} className="py-5 hover:bg-stone-50/60 transition-colors px-2 rounded-sm group">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-block px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase bg-amber-100 text-amber-900 rounded border border-amber-200">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{item.href}</span>
                </div>

                <Link href={item.href} className="block group-hover:translate-x-0.5 transition-transform">
                  {/* Orange Title Hyperlink matching Image 3 */}
                  <h2 className="text-lg sm:text-xl font-medium text-[#d97706] hover:text-[#b45309] hover:underline flex items-center gap-1.5 leading-snug">
                    {item.title}
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity inline" />
                  </h2>
                </Link>

                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state when query has no matches */
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-10 text-center">
            <FileText className="w-12 h-12 text-stone-400 mx-auto mb-3 stroke-1" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              No matching content found for &quot;{initialQuery}&quot;
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              Try checking for typos or searching for broader terms such as <span className="font-semibold text-amber-700">&quot;kyc&quot;, &quot;esign&quot;, &quot;aadhaar&quot;, &quot;court&quot;, &quot;verification&quot;</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["e-Sign", "e-KYC", "Crime Check", "Geo Fencing", "OCR", "API Pricing"].map((term) => (
                <button
                  key={term}
                  onClick={() => router.push(`/search?q=${encodeURIComponent(term)}`)}
                  className="px-3 py-1 text-xs font-medium bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-800 border border-gray-300 rounded-full transition-colors flex items-center gap-1"
                >
                  <span>{term}</span>
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white py-12 text-center text-gray-500 font-medium">
        Loading search results...
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  )
}
