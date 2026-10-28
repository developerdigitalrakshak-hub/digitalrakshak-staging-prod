'use client'

import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import {
  Globe,
  ShieldCheck,
  CheckCircle,
  Zap,
  ArrowRight,
  AlertTriangle,
  Database,
  Lock,
  ShieldAlert,
  Server,
  Activity
} from 'lucide-react'

export default function IPQualityCheckPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-md">
            <Globe className="w-4 h-4" />
            Enterprise IP Reputation & Threat Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
            IP Quality Check API
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation mapping, and bot risk scoring to safeguard your web applications and API endpoints.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all"
              onClick={() => router.push('/register')}
            >
              Contact US
            </Button>
            <Button
              size="lg"
              className="border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 h-14 rounded-full text-lg transition-all"
              onClick={() => router.push('/contact')}
            >
              Talk to an API Specialist
            </Button>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-border/40">
            {[
              { label: "Latency", value: "< 50ms", desc: "Sub-50ms response" },
              { label: "Threat DB", value: "Real-time", desc: "Global IP threat intelligence" },
              { label: "Uptime SLA", value: "99.99%", desc: "Enterprise infrastructure" },
              { label: "Detection", value: "VPN / Tor / Proxy", desc: "Advanced proxy screening" },
            ].map((metric, i) => (
              <div key={i} className="p-4 rounded-2xl bg-background/60 backdrop-blur-md border border-border/50 shadow-sm">
                <div className="text-2xl md:text-3xl font-extrabold text-blue-600">{metric.value}</div>
                <div className="text-sm font-semibold text-foreground">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Core Capabilities */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-3 text-blue-600 border-blue-600/30 bg-blue-500/10 px-3 py-1">
              Fraud Prevention & Defense
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Core IP Quality Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proactively identify high-risk IP addresses before bad actors exploit your platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Proxy & VPN Detection",
                desc: "Identify datacenter proxies, residential VPNs, Tor exit nodes, and anonymous connections in real time.",
                icon: Server,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20"
              },
              {
                title: "Bot & Abuse Risk Score",
                desc: "Calculate dynamic 0-100 fraud scores to block automated botnets, web scrapers, and malicious traffic.",
                icon: ShieldAlert,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20"
              },
              {
                title: "Geolocation Intelligence",
                desc: "Accurate ISO country code, state, city, ISP name, ASN, and geographic coordinate lookup.",
                icon: Globe,
                color: "text-green-500",
                bg: "bg-green-500/10",
                border: "border-green-500/20"
              },
              {
                title: "Account Takeover Protection",
                desc: "Detect suspicious multi-account signups, credential stuffing, and location anomalies.",
                icon: Lock,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20"
              },
            ].map((feature, i) => (
              <Card key={i} className={`p-6 border ${feature.border} hover:shadow-lg transition-all duration-300 group bg-background`}>
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="px-6 py-20 md:px-12 bg-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How IP Quality Check Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to analyze and filter incoming web traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Client IP",
                desc: "Pass the visitor's IP address automatically via REST API call or middleware request header.",
                icon: Database
              },
              {
                step: "02",
                title: "Real-Time Threat Scan",
                desc: "Our system queries global IP threat databases, proxy blacklists, and ISP registries.",
                icon: Activity
              },
              {
                step: "03",
                title: "Receive Risk Score",
                desc: "Get sub-50ms JSON output containing fraud score, VPN/Tor flags, and geolocation data.",
                icon: CheckCircle
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 border border-border/60 hover:shadow-xl transition-all text-center bg-background group">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-600 font-extrabold flex items-center justify-center mb-6 mx-auto text-xl group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQ & CTA Banner */}
      <section className="px-6 py-20 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers about our IP Quality Check API.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "What is the IP Quality Check API?",
                a: "The IP Quality Check API evaluates visitor IP addresses in real time to detect proxies, VPNs, Tor nodes, bot traffic, and malicious intent before processing transactions or user registrations."
              },
              {
                q: "How fast is the API response latency?",
                a: "Our global IP intelligence engine processes queries in under 50ms, ensuring zero impact on your user experience or page load speed."
              },
              {
                q: "Can the API detect residential VPNs and proxies?",
                a: "Yes! Our database continuously updates residential, mobile, and datacenter proxy IP signatures to accurately flag anonymizers."
              },
              {
                q: "How do I integrate the API into my platform?",
                a: "You can integrate via clean REST API endpoints or server-side middleware in Node.js, Python, PHP, Java, or Go within minutes."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 rounded-xl px-4 bg-background">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600 transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Banner */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-balance">
            Protect Your Platform with Real-Time IP Threat Intelligence
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant API sandbox access and start detecting high-risk IP traffic in sub-50ms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-slate-100 font-extrabold text-lg h-14 px-8 rounded-full shadow-2xl transition-all"
              onClick={() => router.push('/register')}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 font-bold px-8 h-14 rounded-full text-lg transition-all"
              onClick={() => router.push('/contact')}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
