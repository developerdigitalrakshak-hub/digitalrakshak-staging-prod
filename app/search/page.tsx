"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  FileText,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  ShieldCheck,
  X,
  Share2,
} from "lucide-react";
import { searchSite, SearchItem } from "@/lib/search-index";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setInputQuery(initialQuery);
    if (initialQuery.trim()) {
      const found = searchSite(initialQuery.trim());
      setResults(found);
    } else {
      setResults([]);
    }
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputQuery.trim())}`);
    }
  };

  // Extract unique categories from actual results
  const resultCategories = [
    "All",
    ...Array.from(new Set(results.map((item) => item.category))),
  ];

  const filteredResults =
    selectedCategory === "All"
      ? results
      : results.filter((item) => item.category === selectedCategory);

  const popularTerms = [
    "documents",
    "e-Sign",
    "e-KYC",
    "GST Verification",
    "Bank Account",
    "Driving License",
    "FASTag",
    "ITR Verification",
    "Pricing",
    "Careers",
  ];

  return (
    <div className="min-h-screen bg-[#02050f] text-white pt-24 sm:pt-28 pb-20 relative overflow-hidden">
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-32 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── BREADCRUMB & SOCIAL SHARE ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 mb-8 border-b border-white/10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-white/60 flex-wrap">
            <Link href="/" className="text-[#76bbf8] hover:underline font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white/40">Search</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white/80 font-medium truncate max-w-[200px] sm:max-w-none">
              &quot;{initialQuery || "all"}&quot;
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-white/60">
            <span className="text-xs text-white/40 hidden sm:inline flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" /> Share:
            </span>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    "_blank"
                  );
                }
              }}
              aria-label="Share on Facebook"
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 fill-current" />
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Search results for ${initialQuery} on DigitalRakshak`)}`,
                    "_blank"
                  );
                }
              }}
              aria-label="Share on X"
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center hover:text-white transition-colors"
            >
              <Twitter className="w-3.5 h-3.5 fill-current" />
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                    "_blank"
                  );
                }
              }}
              aria-label="Share on LinkedIn"
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>

        {/* ── HEADER BANNER ── */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3 text-[#76bbf8]" />
            <span>DigitalRakshak Search</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Search Results For :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-indigo-300">
              {initialQuery ? `"${initialQuery}"` : "All Services"}
            </span>
          </h1>
        </div>

        {/* ── SEARCH INPUT BOX ── */}
        <div className="bg-[#070e20]/90 backdrop-blur-2xl rounded-[24px] p-4 sm:p-6 mb-8 border border-white/15 shadow-[0_0_40px_rgba(22,119,255,0.15)]">
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full flex items-center rounded-[18px] bg-[#040817] border border-white/20 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/30 transition-all">
              <Search className="w-5 h-5 text-white/40 ml-4 stroke-[2]" />
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Search APIs, services, compliance guides, documents..."
                className="w-full px-3 py-3.5 text-sm sm:text-base text-white bg-transparent placeholder-white/40 focus:outline-none"
              />
              {inputQuery && (
                <button
                  type="button"
                  onClick={() => setInputQuery("")}
                  className="mr-3 p-1 rounded-full text-white/40 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold px-8 py-3.5 rounded-[18px] transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] shrink-0 text-sm sm:text-base"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search</span>
            </button>
          </form>

          {/* Quick Suggested Term Pills */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10 flex-wrap text-xs">
            <span className="text-white/50">Popular:</span>
            {popularTerms.slice(0, 6).map((term) => (
              <button
                key={term}
                onClick={() => {
                  setInputQuery(term);
                  router.push(`/search?q=${encodeURIComponent(term)}`);
                }}
                className={`px-2.5 py-1 rounded-full border transition-all ${
                  initialQuery.toLowerCase() === term.toLowerCase()
                    ? "bg-blue-500/25 border-blue-400/50 text-[#76bbf8]"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* ── COUNT SUMMARY & CATEGORY FILTER TABS ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="text-xs sm:text-sm text-white/60 font-medium">
            {filteredResults.length > 0 ? (
              <span>
                Showing 1 – {filteredResults.length} of Total{" "}
                <span className="text-white font-bold">{filteredResults.length}</span>{" "}
                {filteredResults.length === 1 ? "result" : "results"}
              </span>
            ) : (
              <span>Total 0 results found</span>
            )}
          </div>

          {resultCategories.length > 2 && (
            <div className="flex flex-wrap gap-1.5">
              {resultCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#B0DAFF] text-[#0a1e36] shadow-sm shadow-blue-400/30"
                      : "bg-[#070e20] text-white/60 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}{" "}
                  <span className="opacity-70 text-[10px]">
                    (
                    {cat === "All"
                      ? results.length
                      : results.filter((r) => r.category === cat).length}
                    )
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── RESULTS LIST ── */}
        {filteredResults.length > 0 ? (
          <div className="space-y-4">
            {filteredResults.map((item) => (
              <div
                key={item.id}
                className="bg-[#070e20]/80 hover:bg-[#0c142b] border border-white/10 hover:border-blue-400/40 rounded-[22px] p-5 sm:p-6 transition-all duration-200 group shadow-md"
              >
                <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase font-mono bg-blue-500/15 text-[#76bbf8] rounded-full border border-blue-400/30">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/40 font-mono">{item.href}</span>
                </div>

                <Link href={item.href} className="block group/link">
                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover/link:text-[#76bbf8] transition-colors flex items-center gap-2 leading-snug">
                    <span>{item.title}</span>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover/link:text-[#76bbf8] group-hover/link:translate-x-0.5 transition-all" />
                  </h2>
                </Link>

                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/10 text-xs font-semibold text-[#76bbf8]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {item.keywords && item.keywords.length > 0 && (
                    <div className="hidden sm:flex items-center gap-1.5 text-white/40 text-[11px]">
                      <span>Tags:</span>
                      {item.keywords.slice(0, 3).map((kw, i) => (
                        <span key={i} className="text-white/60">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── EMPTY STATE ── */
          <div className="bg-[#070e20]/80 border border-white/15 rounded-[28px] p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/25 text-[#76bbf8] flex items-center justify-center mx-auto mb-5 shadow-inner">
              <FileText className="w-8 h-8 stroke-[1.5]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              No matching content found for &quot;{initialQuery}&quot;
            </h3>

            <p className="text-sm text-white/65 max-w-md mx-auto mb-8 leading-relaxed">
              Try checking for typos or searching for broader terms such as{" "}
              <span className="font-semibold text-[#76bbf8]">
                &quot;documents&quot;, &quot;kyc&quot;, &quot;esign&quot;, &quot;aadhaar&quot;, &quot;gst&quot;, &quot;verification&quot;
              </span>
              .
            </p>

            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-white/50 block">
                Suggested Searches
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {popularTerms.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setInputQuery(term);
                      router.push(`/search?q=${encodeURIComponent(term)}`);
                    }}
                    className="px-3.5 py-1.5 text-xs font-medium bg-[#040817] hover:bg-blue-500/15 text-white/80 hover:text-[#76bbf8] border border-white/10 hover:border-blue-400/40 rounded-full transition-all flex items-center gap-1.5"
                  >
                    <span>{term}</span>
                    <ArrowRight className="w-3 h-3 text-[#76bbf8]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#02050f] pt-32 text-center text-white/60 font-medium">
          Loading search results...
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
