const features = [
  'Dedicated Project Manager',
  'Transparent Communication',
  'Agile Methodology',
  'Source Code Ownership',
  'Post-Launch Support',
  'NDA & IP Protection',
  'Scalable Team',
  'On-Time Delivery',
]

const columns = [
  { label: 'DigitalRakshak', primary: true },
  { label: 'Freelancers', primary: false },
  { label: 'Other Agencies', primary: false },
]

const data = [
  [true, false, true],
  [true, false, false],
  [true, false, true],
  [true, true, false],
  [true, false, false],
  [true, true, false],
  [true, false, false],
  [true, false, false],
]

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Why DigitalRakshak</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            How We Perform Against the Competition
          </h2>
          <p className="text-gray-500 text-lg">
            See how DigitalRakshak stacks up versus freelancers and other agencies.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-gray-100">
            <div className="p-5 text-sm text-gray-500 font-medium">Features</div>
            {columns.map((col) => (
              <div
                key={col.label}
                className={`p-5 text-center font-display font-bold text-sm ${col.primary ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
              >
                {col.label}
                {col.primary && (
                  <div className="text-blue-200 text-xs font-normal mt-0.5">Recommended</div>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {features.map((feature, ri) => (
            <div
              key={feature}
              className={`grid grid-cols-4 border-b border-gray-50 ${ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <div className="p-4 text-sm text-gray-700 font-medium">{feature}</div>
              {data[ri].map((val, ci) => (
                <div key={ci} className={`p-4 flex justify-center ${ci === 0 ? 'bg-blue-50/40' : ''}`}>
                  {val ? (
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
