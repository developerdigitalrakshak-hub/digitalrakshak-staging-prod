export interface SearchItem {
  id: string
  title: string
  description: string
  href: string
  category: 'Services' | 'Products' | 'Industries' | 'Resources' | 'Company' | 'Legal'
  keywords: string[]
}

export const SITE_SEARCH_INDEX: SearchItem[] = [
  // Services & Solutions - Identity & KYC
  {
    id: 'identity-ekyc',
    title: 'Identity & e-KYC Data Stack',
    description: 'Complete digital identity verification, Aadhaar, PAN, Passport, Voter ID and Digi-Locker access.',
    href: '/identity-ekyc',
    category: 'Services',
    keywords: ['kyc', 'ekyc', 'identity', 'aadhaar', 'pan', 'passport', 'voter id', 'digilocker', 'onboarding']
  },
  {
    id: 'kyc-ocr',
    title: 'KYC - OCR Verification',
    description: 'Automated Optical Character Recognition for document data extraction and validation.',
    href: '/kyc-ocr',
    category: 'Services',
    keywords: ['ocr', 'document', 'kyc', 'extraction', 'identity', 'ai', 'net', 'scan']
  },
  {
    id: 'email-and-mobile-verification',
    title: 'Email & Mobile Verification',
    description: 'Instant channel verification, OTP validation, email fraud checks, and mobile revocation status.',
    href: '/email-and-mobile-verification',
    category: 'Services',
    keywords: ['email', 'mobile', 'otp', 'verification', 'fraud', 'mnrl', 'phone']
  },
  {
    id: 'e-stamp-and-e-sign',
    title: 'e-Stamp & e-Sign Digital Signatures',
    description: 'Legal digital signatures, Aadhaar e-sign, state e-stamping, agreement execution and document workflows.',
    href: '/e-stamp-and-e-sign',
    category: 'Services',
    keywords: ['esign', 'estamp', 'stamp', 'sign', 'signature', 'legal', 'document', 'aadhaar sign', 'contract']
  },
  {
    id: 'uan-validation',
    title: 'UAN & EPFO Verification',
    description: 'Universal Account Number (UAN) validation, EPFO employment verification, and PF history check.',
    href: '/uan-validation',
    category: 'Services',
    keywords: ['uan', 'epfo', 'pf', 'employment', 'salary', 'hr', 'work', 'verification']
  },
  {
    id: 'geo-fencing',
    title: 'Geo Fencing & Location Intelligence',
    description: 'Geographic boundary verification, location compliance, and live GPS perimeter validation.',
    href: '/geo-fencing',
    category: 'Services',
    keywords: ['geo', 'geofencing', 'location', 'gps', 'perimeter', 'tracking', 'map']
  },
  {
    id: 'reverse-geocodes',
    title: 'Reverse Geocoding Services',
    description: 'Convert coordinates into verified postal addresses with building and street-level precision.',
    href: '/reverse-geocodes',
    category: 'Services',
    keywords: ['reverse', 'geocode', 'address', 'coordinates', 'lat', 'lng', 'location', 'map']
  },
  {
    id: 'business-verification',
    title: 'Business & Merchant Verification',
    description: 'GSTIN, CIN, DIN, MCA records check, Director identification, and corporate due diligence.',
    href: '/business-verification',
    category: 'Services',
    keywords: ['business', 'gstin', 'mca', 'cin', 'din', 'company', 'merchant', 'b2b', 'corporate']
  },
  {
    id: 'shop-establishment',
    title: 'Shop & Establishment License Check',
    description: 'Commercial entity registration verification across state labor databases.',
    href: '/shop-establishment',
    category: 'Services',
    keywords: ['shop', 'establishment', 'license', 'commercial', 'trade', 'labor', 'business']
  },
  {
    id: 'ai-services',
    title: 'AI & Machine Learning Services',
    description: 'Face matching, anti-spoofing liveness check, document classification, and AI fraud prevention.',
    href: '/ai-services',
    category: 'Services',
    keywords: ['ai', 'ml', 'liveness', 'face match', 'biometric', 'fraud', 'artificial intelligence']
  },
  {
    id: 'web-application-development',
    title: 'Web Application & Platform Development',
    description: 'Custom secure web development, API integration, and cloud architecture implementation.',
    href: '/web-application-development',
    category: 'Services',
    keywords: ['web', 'app', 'development', 'software', 'api', 'cloud', 'engineering']
  },

  // Specialized Background Verification Services
  {
    id: 'criminal-record-check',
    title: 'National Criminal & Court Record Check',
    description: 'Screening against e-Courts, criminal databases, police records, magistrate courts, and litigation data.',
    href: '/services/criminal-record-check',
    category: 'Services',
    keywords: ['criminal', 'court', 'litigation', 'police', 'efir', 'law', 'background', 'check', 'record', 'net']
  },
  {
    id: 'efir-check',
    title: 'e-FIR & Police Record Verification',
    description: 'Instant verification of police FIR status, active warrants, and state criminal database matches.',
    href: '/services/efir-check',
    category: 'Services',
    keywords: ['efir', 'fir', 'police', 'crime', 'warrant', 'investigation', 'legal']
  },
  {
    id: 'global-database-check',
    title: 'Global Database & Negative Media Screening',
    description: 'Screening against international sanctions, Interpol lists, PEP (Politically Exposed Persons), and negative media.',
    href: '/services/global-database-check',
    category: 'Services',
    keywords: ['global', 'sanctions', 'pep', 'interpol', 'negative media', 'compliance', 'aml']
  },
  {
    id: 'employment-verification',
    title: 'Employment & Work History Verification',
    description: 'Past employer background check, designation, tenure, HR verification, and salary slip validation.',
    href: '/services/employment-verification',
    category: 'Services',
    keywords: ['employment', 'work', 'job', 'hr', 'history', 'experience', 'verification']
  },
  {
    id: 'education-verification',
    title: 'Educational Qualification Verification',
    description: 'Verification of university degrees, college diplomas, marksheets, and board certificates.',
    href: '/services/education-verification',
    category: 'Services',
    keywords: ['education', 'degree', 'university', 'college', 'certificate', 'student', 'qualification']
  },

  // Industries
  {
    id: 'ind-banks',
    title: 'Banking & Financial Institutions',
    description: 'KYC, AML, loan onboarding, account opening, and regulatory compliance for banks.',
    href: '/industries/banks',
    category: 'Industries',
    keywords: ['bank', 'banking', 'finance', 'financial', 'loans', 'credit', 'compliance', 'rbi']
  },
  {
    id: 'ind-nbfcs',
    title: 'NBFCs & Microfinance',
    description: 'Digital lending onboarding, instant identity verification, and credit risk assessment.',
    href: '/industries/nbfcs',
    category: 'Industries',
    keywords: ['nbfc', 'lending', 'microfinance', 'loans', 'credit', 'fintech']
  },
  {
    id: 'ind-insurance',
    title: 'Insurance Industry Solutions',
    description: 'Claims verification, policyholder KYC, agent onboarding, and fraud mitigation.',
    href: '/industries/insurance',
    category: 'Industries',
    keywords: ['insurance', 'policy', 'claims', 'underwriting', 'agent', 'health insurance']
  },
  {
    id: 'ind-crypto',
    title: 'Crypto & Digital Assets Compliance',
    description: 'Travel rule compliance, FIU-IND reporting, crypto exchange KYC, and wallet risk screening.',
    href: '/industries/crypto',
    category: 'Industries',
    keywords: ['crypto', 'bitcoin', 'web3', 'exchange', 'fiu', 'travel rule', 'digital asset']
  },
  {
    id: 'ind-gaming',
    title: 'Online Gaming & Real Money Play',
    description: 'Age verification, PAN validation, TDS compliance, and player identity checks.',
    href: '/industries/gaming',
    category: 'Industries',
    keywords: ['gaming', 'real money', 'game', 'age verification', 'tds', 'player', 'esports']
  },
  {
    id: 'ind-logistics',
    title: 'Logistics & E-Commerce Delivery',
    description: 'Delivery partner onboarding, driver RC/DL check, and location tracking.',
    href: '/industries/logistics-ecommerce',
    category: 'Industries',
    keywords: ['logistics', 'ecommerce', 'delivery', 'driver', 'vehicle', 'rc', 'dl']
  },

  // Company & Resources
  {
    id: 'about',
    title: 'About DigitalRakshak',
    description: 'Learn about our mission, leadership, security standards, and identity verification infrastructure.',
    href: '/about',
    category: 'Company',
    keywords: ['about', 'company', 'mission', 'team', 'digitalrakshak', 'security', 'who we are']
  },
  {
    id: 'contact',
    title: 'Contact Us & Sales Enquiries',
    description: 'Get in touch with our security experts, request API keys, schedule a product demo, or talk to support.',
    href: '/contact',
    category: 'Company',
    keywords: ['contact', 'support', 'help', 'sales', 'demo', 'email', 'phone', 'address']
  },
  {
    id: 'pricing',
    title: 'Pricing & Subscription Plans',
    description: 'Flexible pay-as-you-go pricing, enterprise API plans, and custom identity stack packages.',
    href: '/pricing',
    category: 'Company',
    keywords: ['pricing', 'plans', 'cost', 'subscription', 'api price', 'enterprise']
  },
  {
    id: 'community',
    title: 'Developer Community & Documentation',
    description: 'API documentation, developer forums, integration SDKs, code snippets, and guides.',
    href: '/community',
    category: 'Resources',
    keywords: ['community', 'docs', 'developer', 'api', 'sdk', 'code', 'documentation', 'net']
  },

  // Legal & Compliance Policies
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Our data protection principles, privacy guidelines, and how we handle user data.',
    href: '/privacy-policy',
    category: 'Legal',
    keywords: ['privacy', 'policy', 'data protection', 'gdpr', 'dpdp', 'security']
  },
  {
    id: 'terms-and-conditions',
    title: 'Terms & Conditions',
    description: 'Terms of service, usage agreement, API service level agreement (SLA), and user terms.',
    href: '/terms-and-conditions',
    category: 'Legal',
    keywords: ['terms', 'conditions', 'terms of service', 'legal', 'agreement', 'sla']
  },
  {
    id: 'consumer-grievance',
    title: 'Consumer Grievance Redressal Policy',
    description: 'Nodal officer details, grievance handling workflow, and dispute resolution policy.',
    href: '/consumer-grievance-redressal-policy',
    category: 'Legal',
    keywords: ['grievance', 'consumer', 'nodal officer', 'complaint', 'redressal']
  },
  {
    id: 'responsible-disclosure',
    title: 'Responsible Vulnerability Disclosure',
    description: 'Report security vulnerabilities, bug bounty policy, and security response protocol.',
    href: '/responsible-disclosure',
    category: 'Legal',
    keywords: ['security', 'vulnerability', 'disclosure', 'bug bounty', 'report', 'exploit']
  }
]

export function searchSite(query: string): SearchItem[] {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return []

  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean)

  return SITE_SEARCH_INDEX.filter((item) => {
    const title = item.title.toLowerCase()
    const desc = item.description.toLowerCase()
    const cat = item.category.toLowerCase()
    const keywords = item.keywords.map((k) => k.toLowerCase())

    // Direct substring match on full query
    if (title.includes(normalizedQuery) || desc.includes(normalizedQuery) || cat.includes(normalizedQuery)) {
      return true
    }

    // Match keywords
    if (keywords.some((k) => k.includes(normalizedQuery) || normalizedQuery.includes(k))) {
      return true
    }

    // Token match: check if all query tokens are covered by title, desc, or keywords
    return queryTokens.every((token) => {
      return (
        title.includes(token) ||
        desc.includes(token) ||
        cat.includes(token) ||
        keywords.some((k) => k.includes(token))
      )
    })
  })
}
