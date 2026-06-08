import {
    Mail,
    MapPin,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    ArrowUpRight,
    Shield
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const servicesData = [
    {
        name: 'ID & e-KYC Data Stack',
        description: 'Complete digital identity and KYC solutions',
        icon: '🔐',
        subservices: [
            { name: 'e-KYC Onboarding' },
            { name: 'Security/Auth' },
            { name: 'Identity Verification' },
            { name: 'Membership Verification' },
            { name: 'Business Verification' }
        ]
    },
    {
        name: 'Document Intelligence',
        description: 'Advanced document verification and validation',
        icon: '📄',
        subservices: [
            { name: 'Due Diligence' },
            { name: 'Financial Verification' }
        ]
    },
    {
        name: 'Crime & Background Verification',
        icon: '🛡️',
        subservices: [
            { name: 'Employment BGV' },
            { name: 'Education BGV' },
            { name: 'Crime / Court Records Check' },
            { name: 'Forgery Detection' }
        ]
    },
    {
        name: 'HR Excellence Suite',
        icon: '👥',
        subservices: [
            { name: 'Employment 360' },
            { name: 'Employee BGV' },
            { name: 'Managed Services' }
        ]
    },
    {
        name: 'Digital Transformation',
        icon: '🚀',
        subservices: [
            { name: 'AI / ML' },
            { name: 'Cybersecurity' },
            { name: 'License / Certification' }
        ]
    }
]

const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/idigitalrakshak/', label: 'LinkedIn' },
    { Icon: Facebook, href: 'https://www.facebook.com/iDigitalRakshak', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/idigitalrakshak/', label: 'Instagram' },
    { Icon: Twitter, href: 'https://x.com/iDigitalRakshak', label: 'Twitter / X' }
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
                    padding-top: 24px
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
                    max-width: calc(100% - 150px);
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
                    background: #0f172a;
                    margin-top: -120px;
                    padding-top: 160px;
                    padding-bottom: 0;
                    border-radius: 40px 40px 0 0;
                }
                .footer-inner {
                    max-width: 80%;
                    margin: 0 auto;
                    padding: 0 2rem 2.5rem;
                }

                /* ── GRID ── */
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1.6fr 1.6fr 2.2fr 1.7fr 1.8fr;
                    gap: 2.5rem 2rem;
                    padding-bottom: 3rem;
                }

                /* ── BRAND ── */
                .brand-logo {
                min-width: 260px;
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
                    width: 36px; height: 36px;
                    border-radius: 10px;
                    border: 1px solid #1e293b;
                    background: #1e293b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #c7c7c7;
                    transition: all 0.2s;
                    text-decoration: none;
                }
                .social-link:hover {
                    background: #334155;
                    color: #e2e8f0;
                    transform: translateY(-2px);
                    border-color: #334155;
                }

                /* ── SERVICE COLUMNS ── */
                .col-label {
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #6366f1;
                    margin-bottom: 1.25rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid #1e293b;
                }
                .service-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    color: #c7c7c7;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }
                .service-list a {
                    font-size: 1rem;
                    color: #c7c7c7;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    transition: color 0.2s, transform 0.15s;
                }
                .service-list a::before {
                    content: '';
                    display: inline-block;
                    width: 4px; height: 4px;
                    border-radius: 50%;
                    background: #334155;
                    flex-shrink: 0;
                    transition: background 0.2s;
                }
                .service-list a:hover {
                    color: #c7d2fe;
                    transform: translateX(3px);
                }
                .service-list a:hover::before {
                    background: #6366f1;
                }

                /* ── CONTACT ── */
                .contact-items {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .contact-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.625rem;
                }
                .contact-icon {
                    width: 32px; height: 32px;
                    border-radius: 8px;
                    background: #1e293b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    color: #6366f1;
                }
                .contact-text {
                    font-size: 1rem;
                    color: #c7c7c7;
                    text-decoration: none;
                    line-height: 1.5;
                    padding-top: 0.35rem;
                    transition: color 0.2s;
                }
                a.contact-text:hover { color: #c7d2fe; }

                /* ── DIVIDER + BOTTOM ── */
                .footer-divider {
                    border: none;
                    border-top: 1px solid #1e293b;
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
                    font-size: 0.78rem;
                    color: #334155;
                }
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .footer-links a {
                    font-size: 0.78rem;
                    color: #334155;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-links a:hover { color: #64748b; }

                /* ── RESPONSIVE ── */

                /* Laptop / large tablet: 2-col service area */
                @media (max-width: 1800px) {
                    .footer-inner { max-width: 90%; padding: 0 1.5rem 2rem; }
                }
                /* Laptop / large tablet: 2-col service area */
                @media (max-width: 1700px) {
                    .footer-grid {
                        grid-template-columns: 2fr 2fr 2fr;
                        grid-template-rows: auto auto;
                    }
                }
                /* Laptop / large tablet: 2-col service area */
                @media (max-width: 1600px) {
                    .footer-inner { max-width: 90%; padding: 0 1.5rem 2rem; }
                }
                /* Laptop / large tablet: 2-col service area */
                @media (max-width: 1300px) {
                    .footer-grid {
                        grid-template-columns: 2fr 2fr 2fr;
                        grid-template-rows: auto auto;
                    }
                    .brand-col {
                        grid-column: 1 / -1;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                        align-items: start;
                    }
                    .footer-inner { max-width: 90%; padding: 0 1.5rem 2rem; }
                }
                /* Laptop / large tablet: 2-col service area */
                @media (max-width: 1100px) {
                    .footer-grid {
                        grid-template-columns: 2fr 2fr 2fr;
                        grid-template-rows: auto auto;
                    }
                    .brand-col {
                        grid-column: 1 / -1;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                        align-items: start;
                    }
                    .footer-inner { max-width: 90%; padding: 0 1.5rem 2rem; }
                }

                /* Tablet */
                @media (max-width: 860px) {
                    .footer-main { border-radius: 28px 28px 0 0; }
                    .cta-card { border-radius: 24px; padding: 2.75rem 2rem; }
                    .cta-illustration { display: none; }
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem 1.5rem;
                    }
                    .brand-col {
                        grid-column: 1 / -1;
                        grid-template-columns: 1fr 1fr;
                    }
                    .footer-inner { max-width: 90%; padding: 0 1.5rem 2rem; }
                }

                /* Mobile */
                @media (max-width: 540px) {
                    .footer-main {
                        margin-top: -80px;
                        padding-top: 110px;
                        border-radius: 22px 22px 0 0;
                    }
                    .cta-wrapper { padding: 0 1rem; }
                    .cta-card { border-radius: 20px; padding: 2rem 1.5rem; }
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 1.75rem 1.25rem;
                    }
                    .brand-col {
                        grid-column: 1 / -1;
                        display: flex;
                        flex-direction: column;
                        gap: 0;
                    }
                    .contact-col { grid-column: 1 / -1; }
                    .footer-inner { max-width: 1000%; padding: 0 1.25rem 1.5rem; }
                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.75rem;
                    }
                }

                /* Very small mobile */
                @media (max-width: 360px) {
                    .footer-grid { grid-template-columns: 1fr; }
                    .brand-col, .contact-col { grid-column: 1; }
                }
            `}</style>

            <footer className="footer-root">
                {/* CTA */}
                <div className="cta-wrapper">
                    <div className="cta-card">
                        <div>
                            <h2 className="cta-heading">
                                Ready to Improve Conversions and Reduce Risk?
                            </h2>
                            <Link href="/register" className="cta-btn">
                                Book a demo
                                <span className="cta-btn-icon">
                                    <ArrowUpRight size={16} />
                                </span>
                            </Link>
                        </div>
                        <div className="cta-illustration">
                            <div className="cta-illustration-inner">
                                {['🔐', '📄', '🛡️', '👥'].map((em, i) => (
                                    <div className="cta-dot" key={i}>{em}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

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
                                        <span className="brand-name">DigitalRakshak <br/> <span className="text-xs text-blue-600 font-medium">SECURE | SWIFT | COMPLIANT</span></span>
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

                            {/* Service cols — first two full */}
                            {servicesData.slice(0, 2).map(service => (
                                <div key={service.name}>
                                    <h4 className="col-label">{service.name}</h4>
                                    <ul className="service-list">
                                        {service.subservices.map(sub => (
                                            <li key={sub.name}>
                                                <a href="#">{sub.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* More services */}
                            <div>
                                <h4 className="col-label">More Services</h4>
                                <ul className="service-list">
                                    {servicesData.slice(2).map(service => (
                                        <li key={service.name}>
                                            <a href="#">{service.icon}&nbsp; {service.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="contact-col">
                                <h4 className="col-label">Contact Us</h4>
                                <div className="contact-items">
                                    {[
                                        { icon: <Mail size={15} />, href: 'mailto:info@digitalrakshak.com', text: 'info@digitalrakshak.com' },
                                        { icon: <Mail size={15} />, href: 'mailto:sales@digitalrakshak.com', text: 'sales@digitalrakshak.com' },
                                        { icon: <MapPin size={15} />, text: 'Gandhinagar, Gujarat, India' },
                                        { icon: <Phone size={15} />, href: 'tel:+917387022442', text: '+91 88666 11427' }
                                    ].map(({ icon, href, text }, i) => (
                                        <div className="contact-row" key={i}>
                                            <div className="contact-icon">{icon}</div>
                                            {href
                                                ? <a href={href} className="contact-text">{text}</a>
                                                : <span className="contact-text">{text}</span>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Policies */}
                            <div className="contact-col">
                                <h4 className="col-label">Policies</h4>
                                <ul className="service-list">
                                      {[
                                        { href: '/privacy-policy', text: 'Privacy Policy' },
                                        { href: '/terms-and-conditions', text: 'T&C of Services' },
                                        { href: '/responsible-disclosure', text: 'Responsible Disclosure Policy' },
                                        { href: '/consumer-grievance-redressal-policy', text: 'Grievance Redressal Policy' }
                                    ].map(service => (
                                        <li key={service.text}>
                                            <Link href={service.href}>{service.text}</Link>
                                        </li>
                                    ))}
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
