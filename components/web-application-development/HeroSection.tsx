import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '13+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '150+', label: 'Tech Experts' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1b2e] via-[#0f2550] to-[#0a1628] min-h-[90vh] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wider uppercase">Web App Development</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Build{' '}
              <span className="text-gradient">Scalable</span>{' '}
              Web Applications That Drive Growth
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Transform your business vision into powerful web applications. Our expert team delivers
              secure, high-performance, and user-centric web solutions tailored to your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl scale-105" />
              
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden">
                <div className="p-1">
                  {/* Browser chrome */}
                  <div className="bg-gray-900/80 rounded-2xl overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <div className="flex-1 mx-4 bg-white/10 rounded-md h-6 flex items-center px-3">
                        <span className="text-gray-400 text-xs">https://yourapp.com/dashboard</span>
                      </div>
                    </div>
                    
                    {/* Dashboard preview */}
                    <div className="p-6 space-y-4">
                      {/* Top metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Revenue', val: '$84.2K', up: true },
                          { label: 'Users', val: '12.5K', up: true },
                          { label: 'Conversion', val: '3.8%', up: false },
                        ].map((m) => (
                          <div key={m.label} className="bg-white/5 rounded-xl p-3">
                            <div className="text-gray-400 text-xs">{m.label}</div>
                            <div className="text-white font-display font-bold text-lg mt-1">{m.val}</div>
                            <div className={`text-xs mt-1 ${m.up ? 'text-green-400' : 'text-red-400'}`}>
                              {m.up ? '↑ 12.4%' : '↓ 0.8%'}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chart bars */}
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-gray-400 text-xs mb-3">Monthly Performance</div>
                        <div className="flex items-end gap-2 h-20">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-t-sm ${i === 11 ? 'bg-blue-500' : 'bg-blue-500/30'}`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Table preview */}
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-gray-400 text-xs mb-3">Recent Activity</div>
                        <div className="space-y-2">
                          {['New user signup', 'Order #1284 completed', 'API integration synced'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-600/30 flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                              </div>
                              <span className="text-gray-300 text-xs">{item}</span>
                              <span className="text-gray-500 text-xs ml-auto">{i + 1}m ago</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-1/3 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-gray-900">99.9%</div>
                  <div className="text-gray-500 text-xs">Uptime SLA</div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-gray-900">10x Faster</div>
                  <div className="text-gray-500 text-xs">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
