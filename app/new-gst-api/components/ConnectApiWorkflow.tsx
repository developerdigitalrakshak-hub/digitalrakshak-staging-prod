'use client'

import React, { useState } from 'react'
import {
  Code2,
  Copy,
  Check,
  Zap,
  Shield,
  Layers,
  Terminal,
  Cpu,
  ArrowRight,
  Database
} from 'lucide-react'

export default function ConnectApiWorkflow() {
  const [copied, setCopied] = useState(false)
  const [activeLang, setActiveLang] = useState<'curl' | 'node' | 'python'>('curl')

  const codeSnippets = {
    curl: `curl -X POST "https://api.digitalrakshak.com/v1/gstin/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "gstin": "27AAACR4051D1Z1",
    "include_filing_history": true
  }'`,
    node: `const axios = require('axios');

const response = await axios.post(
  'https://api.digitalrakshak.com/v1/gstin/verify',
  {
    gstin: '27AAACR4051D1Z1',
    include_filing_history: true
  },
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`,
    python: `import requests

url = "https://api.digitalrakshak.com/v1/gstin/verify"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "gstin": "27AAACR4051D1Z1",
    "include_filing_history": True
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const workflowSteps = [
    {
      num: '01',
      title: 'Generate API Key',
      desc: 'Create your developer account and access your Sandbox & Live API credentials instantly.'
    },
    {
      num: '02',
      title: 'Dispatch GSTIN Payload',
      desc: 'Send a simple JSON payload with the 15-digit GSTIN or batch upload CSV.'
    },
    {
      num: '03',
      title: 'Redundant GSP Routing',
      desc: 'Our intelligent routing automatically queries multiple GSP nodes for zero-failure verification.'
    },
    {
      num: '04',
      title: 'Consume Structured Data',
      desc: 'Receive standardized JSON response with verified entity legal names, tax status & risks.'
    }
  ]

  return (
    <section className="py-24 bg-[#050a17] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>DEVELOPER-FIRST ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect GST Verification API <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              With Your Existing System
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Integrate in minutes with standardized JSON responses, interactive Postman collections, and robust SDKs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 4 Workflow Steps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0b1224]/90 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-0.5 shrink-0">
                  <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-purple-300">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Architecture Highlights Pill */}
            <div className="p-4 bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-blue-950/40 border border-white/10 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-white">ISO 27001 & SOC-2 Certified</div>
                  <div className="text-[11px] text-gray-400">256-Bit TLS End-to-End Encryption</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                100% SECURE
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code Console */}
          <div className="lg:col-span-7 bg-[#0a0f1d] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between">
            
            {/* Terminal Top Bar */}
            <div className="bg-[#070b15] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-gray-400 ml-2">api.digitalrakshak.com</span>
              </div>

              {/* Language Switcher Tabs */}
              <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-white/10">
                {(['curl', 'node', 'python'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all ${
                      activeLang === lang
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto leading-relaxed flex-1 bg-[#060a14]">
              <pre>
                <code>{codeSnippets[activeLang]}</code>
              </pre>
            </div>

            {/* Bottom Actions Bar */}
            <div className="bg-[#070b15] px-6 py-3.5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Response Time: <strong className="text-emerald-400">118ms</strong></span>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
