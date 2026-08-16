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
    id: 'gstin-verify',
    title: 'GSTIN Verification API',
    description: 'Instant real-time GSTIN lookup, taxpayer profiling, GSTR filing status, and ITC fraud prevention.',
    href: '/gstin-verify',
    category: 'Services',
    keywords: ['gst', 'gstin', 'tax', 'verification', 'api', 'gstr1', 'gstr3b', 'itc', 'taxpayer', 'invoice', 'b2b']
  },
  {
    id: 'bank-account-verification',
    title: 'Bank Account Verification API',
    description: 'Instant bank account validation, penny drop name match, IFSC verification, and payout bounce prevention.',
    href: '/bank-account-verification',
    category: 'Services',
    keywords: ['bank', 'account', 'verification', 'penny drop', 'ifsc', 'imps', 'neft', 'payout', 'beneficiary', 'name match', 'banking']
  },
  {
    id: 'ip-quality-check',
    title: 'IP Quality Check API',
    description: 'Real-time IP reputation scoring, VPN/Proxy/Tor detection, geolocation intelligence, and bot risk score.',
    href: '/ip-quality-check',
    category: 'Services',
    keywords: ['ip', 'proxy', 'vpn', 'tor', 'bot', 'reputation', 'security', 'geolocation', 'fraud', 'risk', 'ip quality']
  },
  {
    id: 'epfo-establishment-search',
    title: 'EPFO Establishment Search API',
    description: 'Real-time EPFO establishment ID lookup, PF active status, ECR filing history, and employer verification.',
    href: '/epfo-establishment-search',
    category: 'Services',
    keywords: ['epfo', 'pf', 'establishment', 'employer', 'ecr', 'provident fund', 'bgv', 'compliance', 'search', 'verification']
  },
  {
    id: 'passport-verification',
    title: 'Passport Verification API',
    description: 'Real-time passport number validation, MRZ code OCR extraction, DOB, expiry, and travel document authenticity check.',
    href: '/passport-verification',
    category: 'Services',
    keywords: ['passport', 'mrz', 'ocr', 'travel', 'identity', 'kyc', 'verification', 'visa', 'aviation', 'nri', 'document']
  },
  {
    id: 'voter-id-verification',
    title: 'Voter ID Verification API',
    description: 'Real-time EPIC voter ID lookup, ECI electoral roll search, voter name, age, gender, assembly constituency, and state.',
    href: '/voter-id-verification',
    category: 'Services',
    keywords: ['voter', 'epic', 'voter id', 'eci', 'election', 'constituency', 'kyc', 'identity', 'verification', 'address', 'age']
  },
  {
    id: 'driving-licence-verification',
    title: 'Driving License (DL) Verification API',
    description: 'Real-time Driving License validation, vehicle class endorsements, expiry date, RTO jurisdiction, and Sarathi database lookup.',
    href: '/driving-licence-verification',
    category: 'Services',
    keywords: ['dl', 'driving license', 'parivahan', 'sarathi', 'rto', 'vehicle', 'driver', 'kyc', 'verification', 'lmv', 'hmv']
  },
  {
    id: 'vehicle-rc-verification',
    title: 'Vehicle RC Verification API',
    description: 'Real-time vehicle Registration Certificate (RC) lookup, owner details, insurance validity, PUCC, and chassis/engine numbers.',
    href: '/vehicle-rc-verification',
    category: 'Services',
    keywords: ['rc', 'vehicle', 'registration', 'vahan', 'parivahan', 'chassis', 'engine', 'insurance', 'pucc', 'rto', 'car', 'bike']
  },
  {
    id: 'fastag-verification',
    title: 'FASTag Verification API',
    description: 'Real-time FASTag account lookup, Tag ID verification, active/blacklist status, issuing bank, and vehicle VRN match.',
    href: '/fastag-verification',
    category: 'Services',
    keywords: ['fastag', 'toll', 'npci', 'netc', 'tag id', 'vrn', 'vehicle', 'bank', 'blacklist', 'fleet', 'verification']
  },
  {
    id: 'ifsc-check',
    title: 'IFSC Code Verification API',
    description: 'Real-time IFSC code lookup, bank branch details, MICR code, NEFT/IMPS/RTGS transfer capability, and RBI directory sync.',
    href: '/ifsc-check',
    category: 'Services',
    keywords: ['ifsc', 'bank', 'branch', 'micr', 'neft', 'imps', 'rtgs', 'upi', 'rbi', 'payout', 'verification']
  },
  {
    id: 'itr-verification',
    title: 'Income Tax Return (ITR) Verification API',
    description: 'Real-time ITR filing verification, gross income, taxable income, acknowledgment number, assessment year, and ITD portal sync.',
    href: '/itr-verification',
    category: 'Services',
    keywords: ['itr', 'income tax', 'tax return', 'gross income', 'acknowledgment', 'pan', 'itd', 'financial', 'kyc', 'underwriting']
  },
  {
    id: 'msme-udyam-verification',
    title: 'MSME / Udyam Registration Verification API',
    description: 'Real-time Udyam Registration Number (URN) lookup without OTP, enterprise category (Micro/Small/Medium), DIC, and NIC activity.',
    href: '/msme-udyam-verification',
    category: 'Services',
    keywords: ['msme', 'udyam', 'urn', 'enterprise', 'micro', 'small', 'medium', 'vendor', 'psl', 'dic', 'nic', 'business']
  },
  {
    id: 'tan-verification',
    title: 'TAN Verification API',
    description: 'Real-time Tax Deduction Account Number (TAN) lookup, deductor legal entity name, AO code jurisdiction, and TDS compliance.',
    href: '/tan-verification',
    category: 'Services',
    keywords: ['tan', 'tax deduction', 'deductor', 'ao code', 'tds', 'income tax', 'itd', 'compliance', 'vendor', 'business']
  },
  {
    id: 'mnrl-verification',
    title: 'TRAI MNRL Verification API',
    description: 'Real-time TRAI Mobile Number Revocation List (MNRL) check to detect recycled, disconnected, and SIM-swapped phone numbers.',
    href: '/mnrl-verification',
    category: 'Services',
    keywords: ['mnrl', 'trai', 'mobile', 'revocation', 'recycled', 'deactivated', 'sim swap', 'otp fraud', 'telecom', 'jio', 'airtel', 'vi']
  },
  {
    id: 'negative-due-diligence',
    title: 'Negative Due Diligence & Media Check API',
    description: 'Real-time adverse media screening, global sanctions, PEP watchlists, court litigation records, and RBI defaulter checks.',
    href: '/negative-due-diligence',
    category: 'Services',
    keywords: ['negative media', 'due diligence', 'sanctions', 'pep', 'interpol', 'adverse news', 'court', 'aml', 'kyc', 'defaulter']
  },
  {
    id: 'document-forgery-detection',
    title: 'Document Forgery Detection API',
    description: 'AI-powered document tampering check, image manipulation detection, font & text alignment analysis, and EXIF metadata audit.',
    href: '/document-forgery-detection',
    category: 'Services',
    keywords: ['forgery', 'tampering', 'photoshop', 'manipulation', 'fake document', 'exif', 'font', 'cloning', 'kyc', 'fraud']
  },
  {
    id: 'vehicle-reverse-rc',
    title: 'Vehicle Reverse RC Verification API',
    description: 'Real-time reverse vehicle lookup by owner name, mobile number, chassis, or engine number to discover all linked vehicles.',
    href: '/vehicle-reverse-rc',
    category: 'Services',
    keywords: ['reverse rc', 'vehicle', 'vahan', 'owner search', 'chassis', 'engine', 'fleet', 'repossession', 'rc lookup', 'car']
  },
  {
    id: 'hybrid-bank-account-verification',
    title: 'Hybrid Bank Account Verification API',
    description: 'Intelligent multi-mode bank account verification combining Penny Drop, Penny-Less, and UPI failover for 100% success rate.',
    href: '/hybrid-bank-account-verification',
    category: 'Services',
    keywords: ['hybrid bank account', 'bank verification', 'penny drop', 'penny-less', 'upi', 'imps', 'beneficiary', 'payout', 'failover']
  },
  {
    id: 'itr-fetch',
    title: 'ITR Fetch API',
    description: 'Real-time Income Tax Return (ITR) financial data retrieval, income computation breakdown, Form 26AS/AIS summaries, and ITD sync.',
    href: '/itr-fetch',
    category: 'Services',
    keywords: ['itr fetch', 'income tax fetch', 'tax data retrieval', 'form 26as', 'ais', 'gross income', 'deductions', 'pan', 'underwriting']
  },
  {
    id: 'experian-credit-bureau',
    title: 'Experian Credit Bureau API',
    description: 'Real-time Experian credit score retrieval, commercial credit risk rank, active loan accounts, DPD delinquency, and bureau credit reports.',
    href: '/experian-credit-bureau',
    category: 'Services',
    keywords: ['experian', 'credit bureau', 'credit score', 'cmr rank', 'cibil', 'dpd', 'delinquency', 'credit report', 'underwriting', 'loan']
  },
  {
    id: 'roc-director-search',
    title: 'ROC Director Search API',
    description: 'Real-time DIN lookup, director associated companies, MCA directorship history, appointment dates, and Section 164 disqualification check.',
    href: '/roc-director-search',
    category: 'Services',
    keywords: ['roc director', 'din', 'mca', 'directorship', 'company director', 'llp partner', 'disqualification', 'corporate governance', 'compliance']
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
  // {
  //   id: 'criminal-record-check',
  //   title: 'National Criminal & Court Record Check',
  //   description: 'Screening against e-Courts, criminal databases, police records, magistrate courts, and litigation data.',
  //   href: '/services/criminal-record-check',
  //   category: 'Services',
  //   keywords: ['criminal', 'court', 'litigation', 'police', 'efir', 'law', 'background', 'check', 'record', 'net']
  // },
  // {
  //   id: 'efir-check',
  //   title: 'e-FIR & Police Record Verification',
  //   description: 'Instant verification of police FIR status, active warrants, and state criminal database matches.',
  //   href: '/services/efir-check',
  //   category: 'Services',
  //   keywords: ['efir', 'fir', 'police', 'crime', 'warrant', 'investigation', 'legal']
  // },
  // {
  //   id: 'global-database-check',
  //   title: 'Global Database & Negative Media Screening',
  //   description: 'Screening against international sanctions, Interpol lists, PEP (Politically Exposed Persons), and negative media.',
  //   href: '/services/global-database-check',
  //   category: 'Services',
  //   keywords: ['global', 'sanctions', 'pep', 'interpol', 'negative media', 'compliance', 'aml']
  // },
  // {
  //   id: 'employment-verification',
  //   title: 'Employment & Work History Verification',
  //   description: 'Past employer background check, designation, tenure, HR verification, and salary slip validation.',
  //   href: '/services/employment-verification',
  //   category: 'Services',
  //   keywords: ['employment', 'work', 'job', 'hr', 'history', 'experience', 'verification']
  // },
  // {
  //   id: 'education-verification',
  //   title: 'Educational Qualification Verification',
  //   description: 'Verification of university degrees, college diplomas, marksheets, and board certificates.',
  //   href: '/services/education-verification',
  //   category: 'Services',
  //   keywords: ['education', 'degree', 'university', 'college', 'certificate', 'student', 'qualification']
  // },

  // Industries
  // {
  //   id: 'ind-banks',
  //   title: 'Banking & Financial Institutions',
  //   description: 'KYC, AML, loan onboarding, account opening, and regulatory compliance for banks.',
  //   href: '/industries/banks',
  //   category: 'Industries',
  //   keywords: ['bank', 'banking', 'finance', 'financial', 'loans', 'credit', 'compliance', 'rbi']
  // },
  // {
  //   id: 'ind-nbfcs',
  //   title: 'NBFCs & Microfinance',
  //   description: 'Digital lending onboarding, instant identity verification, and credit risk assessment.',
  //   href: '/industries/nbfcs',
  //   category: 'Industries',
  //   keywords: ['nbfc', 'lending', 'microfinance', 'loans', 'credit', 'fintech']
  // },
  // {
  //   id: 'ind-insurance',
  //   title: 'Insurance Industry Solutions',
  //   description: 'Claims verification, policyholder KYC, agent onboarding, and fraud mitigation.',
  //   href: '/industries/insurance',
  //   category: 'Industries',
  //   keywords: ['insurance', 'policy', 'claims', 'underwriting', 'agent', 'health insurance']
  // },
  // {
  //   id: 'ind-crypto',
  //   title: 'Crypto & Digital Assets Compliance',
  //   description: 'Travel rule compliance, FIU-IND reporting, crypto exchange KYC, and wallet risk screening.',
  //   href: '/industries/crypto',
  //   category: 'Industries',
  //   keywords: ['crypto', 'bitcoin', 'web3', 'exchange', 'fiu', 'travel rule', 'digital asset']
  // },
  // {
  //   id: 'ind-gaming',
  //   title: 'Online Gaming & Real Money Play',
  //   description: 'Age verification, PAN validation, TDS compliance, and player identity checks.',
  //   href: '/industries/gaming',
  //   category: 'Industries',
  //   keywords: ['gaming', 'real money', 'game', 'age verification', 'tds', 'player', 'esports']
  // },
  // {
  //   id: 'ind-logistics',
  //   title: 'Logistics & E-Commerce Delivery',
  //   description: 'Delivery partner onboarding, driver RC/DL check, and location tracking.',
  //   href: '/industries/logistics-ecommerce',
  //   category: 'Industries',
  //   keywords: ['logistics', 'ecommerce', 'delivery', 'driver', 'vehicle', 'rc', 'dl']
  // },

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
