import {
  ArrowUpRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface SubMenuItem {
  name: string
  href: string
}

interface ServiceItem {
  name: string
  href: string
  subservices?: SubMenuItem[]
}

const platformsData = [
  { name: 'API Hub', href: '#' },
  { name: 'e-Sign Solution', href: '/e-stamp-and-e-sign' },
  { name: 'e-Stamping Solution', href: '/e-stamp-and-e-sign' },
  { name: 'e-Onboarding Platform', href: '#' }
]

const servicesData: ServiceItem[] = [
  { name: 'e-KYC', href: '/identity-ekyc' },
  { name: 'CKYC 2.0 Verification', href: '#' },
  {
    name: 'Background Verification (BGV)',
    href: '#',
    subservices: [
      {
        name: 'ID Verification',
        // href: '/services' 
        href: '#'
      },
      {
        name: 'Employee Verification',
        // href: '/services/employment-verification' 
        href: '#'
      },
      {
        name: 'Education Verification',
        // href: '/services/education-verification'
        href: '#'
      },
      {
        name: 'Employment History',
        // href: '/services/employment-history-check' 
        href: '#'
      },
      {
        name: 'Physical Address Check',
        // href: '/services'
        href: '#'
      }
    ]
  }
]

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/idigitalrakshak/', label: 'LinkedIn' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/iDigitalRakshak', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/idigitalrakshak/', label: 'Instagram' },
  { Icon: TwitterIcon, href: 'https://x.com/iDigitalRakshak', label: 'Twitter / X' },
  { Icon: YouTubeIcon, href: 'https://www.youtube.com/@iDigitalRakshak', label: 'YouTube' },
]

export default function Footer() {
  const startYear = 2025
  const currentYear = new Date().getFullYear()

  return (
    <>
      <style>{`
                .footer-root {
                    color: #fff;
                    font-family: 'Sora', 'Inter', sans-serif;
                }

                /* ── CTA ── */
                .cta-wrapper {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    position: relative;
                    z-index: 10;
                }
                .cta-card {
                    border-radius: 32px;
                    background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #4338ca 100%);
                    padding: 3.5rem 3rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 2rem;
                    box-shadow: 0 25px 60px rgba(99, 102, 241, 0.35);
                    position: relative;
                    overflow: hidden;
                }
                .cta-card::before {
                    content: '';
                    position: absolute;
                    top: -60px; right: -60px;
                    width: 260px; height: 260px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .cta-card::after {
                    content: '';
                    position: absolute;
                    bottom: -80px; left: 30%;
                    width: 200px; height: 200px;
                    background: rgba(255,255,255,0.04);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .cta-heading {
                    font-size: clamp(1.75rem, 4vw, 3.25rem);
                    font-weight: 700;
                    line-height: 1.15;
                    letter-spacing: -0.02em;
                    max-width: 100%;
                    margin: 0 0 1.75rem;
                }
                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: #fff;
                    padding: 0.875rem 1.75rem;
                    border-radius: 9999px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                    backdrop-filter: blur(6px);
                }
                .cta-btn:hover {
                    background: rgba(255,255,255,0.25);
                    transform: translateY(-1px);
                }
                .cta-btn-icon {
                    background: #fff;
                    color: #4338ca;
                    border-radius: 50%;
                    padding: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .cta-illustration {
                    flex-shrink: 0;
                    width: 180px;
                    height: 180px;
                    border-radius: 28px;
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(10px);
                }
                .cta-illustration-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
                .cta-dot {
                    width: 36px; height: 36px;
                    border-radius: 10px;
                    background: rgba(255,255,255,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                }

                /* ── MAIN FOOTER ── */
                .footer-main {
                    padding-top: 60px;
                    padding-bottom: 0;
                }
                .footer-inner {
                    max-width: 1400px;
                    width: 92%;
                    margin: 0 auto;
                    padding: 0 1.5rem 2.5rem;
                }

                /* ── GRID ── */
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1.5fr 1.2fr 1.5fr;
                    gap: 2.5rem 2rem;
                    padding-bottom: 3rem;
                }

                /* ── BRAND ── */
                .brand-logo {
                    min-width: 240px;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .brand-logo-icon {
                    position: relative;
                }
                .brand-name {
                    font-size: 1.35rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    background: linear-gradient(135deg, #60a5fa, #a78bfa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: #fff;
                    min-width: 175px;
                }
                .brand-legal {
                    font-size: 1rem;
                    color: #fff;
                    margin-bottom: 0.25rem;
                    margin-top: 0.25rem;
                }
                .brand-cin {
                    font-size: 0.9rem;
                    color: #ccc;
                    margin-bottom: 1.25rem;
                    font-family: monospace;
                    letter-spacing: 0.04em;
                }
                .brand-desc {
                    font-size: 0.9rem;
                    line-height: 1.75;
                    color: #c7c7c7;
                    margin-bottom: 1.5rem;
                }
                .socials {
                    display: flex;
                    gap: 0.75rem;
                }
                .social-link {
                    width: 38px;
                    height: 38px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    background: rgba(255, 255, 255, 0.06);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255, 255, 255, 0.85);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    text-decoration: none;
                }
                .social-link:hover {
                    background: rgba(255, 255, 255, 0.16);
                    color: #ffffff;
                    transform: translateY(-2px);
                    border-color: rgba(168, 85, 247, 0.55);
                    box-shadow: 0 6px 20px rgba(147, 51, 234, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2);
                }

                /* ── SERVICE COLUMNS ── */
                .col-label {
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #818cf8;
                    margin-bottom: 1.25rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
                }
                .service-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    color: #c7c7c7;
                    display: flex;
                    flex-direction: column;
                    gap: 0.65rem;
                }
                .service-list a {
                    font-size: 0.95rem;
                    color: #c7c7c7;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    transition: color 0.2s, transform 0.15s;
                }
                .service-list a::before {
                    content: '';
                    display: inline-block;
                    width: 4px; height: 4px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.35);
                    flex-shrink: 0;
                    transition: background 0.2s;
                }
                .service-list a:hover {
                    color: #c7d2fe;
                    transform: translateX(3px);
                }
                .service-list a:hover::before {
                    background: #a78bfa;
                }

                /* ── SUBMENU ── */
                .service-submenu {
                    list-style: none;
                    padding: 0;
                    margin: 0.45rem 0 0.35rem 0.65rem;
                    padding-left: 0.85rem;
                    border-left: 1.5px solid rgba(168, 85, 247, 0.4);
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .service-submenu a {
                    font-size: 0.88rem;
                    color: #94a3b8;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    transition: color 0.2s, transform 0.15s;
                }
                .service-submenu a::before {
                    content: '';
                    display: inline-block;
                    width: 4px; height: 1.5px;
                    border-radius: 1px;
                    background: rgba(255, 255, 255, 0.3);
                    flex-shrink: 0;
                    transition: background 0.2s;
                }
                .service-submenu a:hover {
                    color: #c7d2fe;
                    transform: translateX(2px);
                }
                .service-submenu a:hover::before {
                    background: #a78bfa;
                }

                /* ── DIVIDER + BOTTOM ── */
                .footer-divider {
                    border: none;
                    border-top: 1px solid rgba(255, 255, 255, 0.12);
                    margin: 0;
                }
                .footer-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 1.5rem 0;
                    flex-wrap: wrap;
                }
                .footer-copyright {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.7);
                }
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .footer-links a {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-links a:hover { color: #ffffff; }

                /* ── RESPONSIVE ── */

                @media (max-width: 1200px) {
                    .footer-inner { max-width: 95%; padding: 0 1.5rem 2rem; }
                    .footer-grid {
                        grid-template-columns: 1.6fr 1fr 1fr 1.25fr;
                        gap: 2rem 1.5rem;
                    }
                }

                /* Tablet */
                @media (max-width: 860px) {
                    .cta-card { border-radius: 24px; padding: 2.75rem 2rem; }
                    .cta-illustration { display: none; }
                    .cta-heading { max-width: 100%; }
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem 1.5rem;
                    }
                    .footer-inner { max-width: 94%; padding: 0 1.5rem 2rem; }
                }

                /* Mobile */
                @media (max-width: 600px) {
                    .footer-main {
                        padding-top: 40px;
                    }
                    .cta-wrapper { padding: 0 1rem; }
                    .cta-card { border-radius: 20px; padding: 2rem 1.5rem; }
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 1.75rem 1.25rem;
                    }
                    .brand-col {
                        grid-column: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 0;
                    }
                    .footer-inner { max-width: 100%; padding: 0 1.25rem 1.5rem; }
                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.75rem;
                    }
                }

                /* Very small mobile */
                @media (max-width: 360px) {
                    .footer-grid { grid-template-columns: 1fr; }
                }
            `}</style>

      <footer className="footer-root bg-gradient-to-b from-black via-[#000b58] to-[#59259b]">

        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-inner">
            <div className="footer-grid">

              {/* Brand */}
              <div className="brand-col">
                <div>
                  <div className="brand-logo">
                    <div className="brand-logo-icon">
                      {/* <Shield size={38} color="#6366f1" /> */}
                      <Image src="/images/logo-white.png" alt="DigitalRakshak Logo" width={80} height={80} />
                    </div>
                    <span className="brand-name">DigitalRakshak  <span className="text-[30px] font-bold leading-none">™</span><br /> <span className="text-xs text-blue-600 font-medium">SECURE | SWIFT | COMPLIANT</span></span>
                  </div>
                  <p className="brand-legal">DigitalRakshak InfoTech Pvt. Ltd</p>
                  <p className="brand-cin">CIN: U78300GJ2025PTC171397</p>
                  <p className="brand-desc">
                    Your trusted partner for comprehensive API, BGV and
                    compliance solutions. Secure, reliable, and compliant
                    services for your business.
                  </p>
                  <div>
                    <div className="socials">
                      {socialLinks.map(({ Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={label}
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Platforms & Software */}
              <div>
                <h4 className="col-label">Platforms & Software</h4>
                <ul className="service-list">
                  {platformsData.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          if (item.href === '#') e.preventDefault()
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="col-label">Services</h4>
                <ul className="service-list">
                  {servicesData.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          if (item.href === '#') e.preventDefault()
                        }}
                      >
                        {item.name}
                      </Link>
                      {item.subservices && item.subservices.length > 0 && (
                        <ul className="service-submenu">
                          {item.subservices.map(sub => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                onClick={(e) => {
                                  if (sub.href === '#') e.preventDefault()
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div>
                <h4 className="col-label">Policies</h4>
                <ul className="service-list">
                  <li>
                    <Link href="/policies">
                      Policies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
              <p className="footer-copyright">
                © {startYear}–{String(currentYear).slice(-2)} DigitalRakshak InfoTech Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}