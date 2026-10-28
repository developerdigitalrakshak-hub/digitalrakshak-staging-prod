"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  PenTool,
  CheckCircle,
  TrendingUp,
  Cpu,
  UserCheck,
  FileCheck,
  ShieldAlert,
  Scale,
  Code,
  ArrowUpRight,
  Mail,
  Check,
} from "lucide-react";

interface BlogCategory {
  id: number;
  badge: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  IconComponent: React.ElementType;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [emailInput, setEmailInput] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const blogCategories: BlogCategory[] = [
    {
      id: 1,
      badge: "IDENTITY",
      category: "Identity",
      title: "Onboarding & Identity",
      description: "Best practices for making customer and vendor sign-ups secure, fast, and simple.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      readTime: "4 min read",
      date: "Oct 18, 2026",
      IconComponent: UserCheck,
    },
    {
      id: 2,
      badge: "SCREENING",
      category: "Screening",
      title: "Background Screening",
      description: "Modern approaches to employee verification, continuous compliance, and building a trusted workforce.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      readTime: "6 min read",
      date: "Oct 12, 2026",
      IconComponent: FileCheck,
    },
    {
      id: 3,
      badge: "FRAUD",
      category: "Fraud",
      title: "Fraud Defense",
      description: "A look at emerging fraud tactics, identity theft patterns, and practical ways to mitigate risk.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      readTime: "5 min read",
      date: "Oct 05, 2026",
      IconComponent: ShieldAlert,
    },
    {
      id: 4,
      badge: "COMPLIANCE",
      category: "Compliance",
      title: "Regulatory Updates",
      description: "What changes like the DPDP Act or new ISO standards mean for your daily operations, minus the legalese.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      readTime: "7 min read",
      date: "Sep 28, 2026",
      IconComponent: Scale,
    },
    {
      id: 5,
      badge: "ENGINEERING",
      category: "Engineering",
      title: "Tech & Architecture",
      description: "How to build scalable verification pipelines, optimize API calls, and automate your trust infrastructure.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      readTime: "8 min read",
      date: "Sep 20, 2026",
      IconComponent: Code,
    },
  ];

  const categories = ["All", "Identity", "Screening", "Fraud", "Compliance", "Engineering"];

  const filteredCategories =
    selectedCategory === "All"
      ? blogCategories
      : blogCategories.filter((item) => item.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#02050f] text-white pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-32 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />
      </div>

      {/* ── 1. HERO BANNER ── */}
      <section className="relative px-[5%] lg:px-[6%] py-12 lg:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#76bbf8] animate-pulse" />
                <span>DigitalRakshak Blog</span>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.12] tracking-tight">
                Insights on Verification, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] via-blue-400 to-indigo-300">
                  Compliance
                </span>{" "}
                &amp; Trust
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">
                Real-world commentary on data privacy laws, identity tech, fraud trends, and engineering trust, straight from the DigitalRakshak team.
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href="#articles"
                  className="inline-flex items-center justify-center gap-2 bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold text-sm sm:text-base px-8 py-3.5 rounded-[16px] shadow-[0_0_25px_rgba(118,187,248,0.35)] hover:scale-[1.02] transition-all"
                >
                  <span>Read the Latest Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-[16px] border border-white/15 transition-all"
                >
                  <span>Subscribe to Newsletter</span>
                </a>
              </div>

              {/* Publication stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">5,000+</div>
                  <div className="text-xs text-white/50">Active Readers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">Bi-Weekly</div>
                  <div className="text-xs text-white/50">Tech Blueprints</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-white/50">Practitioner Authored</div>
                </div>
              </div>
            </div>

            {/* Right Featured Article Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[32px] blur-2xl pointer-events-none" />

              <div className="relative bg-[#070e20]/80 backdrop-blur-2xl rounded-[28px] border border-white/15 p-6 sm:p-8 space-y-5 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-xs text-[#76bbf8] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#76bbf8]" />
                    Featured Post
                  </span>
                  <span className="bg-blue-500/15 border border-blue-400/30 text-blue-300 text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold tracking-wider">
                    HOT-OFF-THE-PRESS
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-indigo-400 tracking-widest uppercase">
                    Tech &amp; Architecture
                  </span>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug hover:text-blue-300 transition-colors cursor-pointer">
                    How to Build a Latency-Free Identity Verification Pipeline
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Optimizing Aadhaar API handshakes, setting up resilient webhooks, and reducing onboarding drop-offs to sub-second runtimes.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-white/50 text-xs pt-3 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#76bbf8]" />
                    July 4, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#76bbf8]" />
                    5 min read
                  </span>
                  <span className="text-white/70 font-medium ml-auto">
                    By DR Engineering
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href="#articles"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#76bbf8] hover:text-blue-300 transition-colors group"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY FOLLOW OUR BLOG ── */}
      <section className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-medium text-xs shadow-sm uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#76bbf8] animate-pulse" />
                <span>Developer &amp; Compliance Resource</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Why Follow Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76bbf8] to-purple-400">
                  Blog?
                </span>
              </h2>

              <div className="space-y-5 text-white/75 text-base sm:text-lg leading-relaxed">
                <p>
                  We don&apos;t do fluff or high-level summaries. Our articles are written by engineers and compliance experts who work on these problems every day.
                </p>
                <p>
                  You’ll get actionable technical blueprints, direct breakdowns of new laws, and honest insights into where the identity and security industries are heading.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  { text: "Practitioner Written", desc: "Authored by active trust engineers.", icon: PenTool },
                  { text: "Technical Blueprints", desc: "Production-ready code architecture.", icon: Cpu },
                  { text: "Direct Breakdowns", desc: "Regulations simplified instantly.", icon: CheckCircle },
                  { text: "Real Industry Trends", desc: "Actual data and insights from staging.", icon: TrendingUp },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-[#070e20] p-4 rounded-xl border border-white/10">
                    <item.icon className="w-5 h-5 text-[#76bbf8] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-sm text-white">{item.text}</span>
                      <span className="text-xs text-white/50">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Reader Metrics Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

              <div className="relative bg-[#070e20]/90 rounded-[28px] p-7 sm:p-9 shadow-2xl border border-white/15 text-white flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-semibold text-blue-400 font-mono tracking-wider">
                      READER METRICS
                    </span>
                    <span className="bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                      LIVE UPDATES
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Writing Standard</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Each article undergoes thorough technical review by our engineering and legal teams to guarantee accuracy, code safety, and compliant system architecture patterns.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {[
                    { label: "Engineering Content", val: "65%" },
                    { label: "Compliance Guides", val: "35%" },
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs text-white/60 font-medium">
                        <span>{stat.label}</span>
                        <span className="text-[#76bbf8] font-bold">{stat.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="bg-[#76bbf8] h-full rounded-full" style={{ width: stat.val }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reader Subscriber Highlight */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-xl">
                    📈
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">5,000+ Readers</div>
                    <div className="text-xs text-white/50">Active Industry Subscribers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE WRITE ABOUT (CATEGORIES GRID) ── */}
      <section id="articles" className="relative px-[5%] lg:px-[6%] py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
              Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-3">
              What We Write About
            </h2>
            <p className="text-white/70 text-base sm:text-lg">
              Explore in-depth engineering breakdowns, compliance advisories, and fraud patterns.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#B0DAFF] text-[#0a1e36] shadow-md shadow-blue-500/20"
                    : "bg-[#070e20] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-[24px] bg-[#070e20]/80 hover:bg-[#0c142b] border border-white/10 hover:border-blue-400/40 shadow-xl overflow-hidden transition-all duration-300 min-h-[420px]"
              >
                {/* Image */}
                <div className="relative w-full h-[190px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e20] via-transparent to-transparent opacity-90" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-5 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#070e20] shadow-md border border-white/20 text-[#76bbf8] group-hover:scale-110 group-hover:border-blue-400 transition-all">
                    <item.IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col flex-grow p-5 sm:p-6 pt-3">
                  <div className="flex items-center justify-between text-[11px] text-white/50 mb-2">
                    <span className="font-bold uppercase tracking-wider text-[#76bbf8] font-mono">
                      {item.badge}
                    </span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>

                  {/* Footer Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold text-[#76bbf8] group-hover:text-blue-300">
                    <span>Read Articles</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#76bbf8] group-hover:text-[#0a1e36] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. NEWSLETTER CTA SECTION ── */}
      <section id="newsletter" className="relative px-[5%] lg:px-[6%] py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto rounded-[32px] bg-gradient-to-r from-[#0d1c3e] via-[#091530] to-[#120f2e] border border-blue-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(22,119,255,0.25)] text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/15 border border-blue-400/30 px-3.5 py-1.5 rounded-full inline-block">
              Practical Engineering &amp; Legal Insights
            </span>

            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Get Actionable Trust Blueprints In Your Inbox
            </h2>

            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join 5,000+ developers, HR leads, and compliance officers who receive our practical guides and regulatory breakdowns.
            </p>

            {/* Email Form */}
            {isSubscribed ? (
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center gap-2 font-semibold text-sm">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Thank you for subscribing! Check your inbox for our latest blueprint.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-grow bg-[#070e20] text-white placeholder-white/40 px-5 py-3.5 rounded-[16px] border border-white/20 focus:outline-none focus:border-blue-400 text-sm shadow-inner"
                />
                <button
                  type="submit"
                  className="bg-[#B0DAFF] hover:bg-[#76bbf8] text-[#0a1e36] font-bold px-8 py-3.5 rounded-[16px] transition-all shadow-md active:scale-95 whitespace-nowrap text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-8 border-t border-white/10 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <span className="text-base">✉️</span> Bi-weekly Newsletter
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">🛡️</span> No Spam Ever
              </span>
              <span className="flex items-center gap-2">
                <span className="text-base">🔓</span> Unsubscribe Anytime
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
