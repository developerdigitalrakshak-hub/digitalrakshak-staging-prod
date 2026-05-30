import BenefitsSection from '@/components/web-application-development/BenefitsSection'
import CaseStudiesSection from '@/components/web-application-development/CaseStudiesSection'
import ComparisonSection from '@/components/web-application-development/ComparisonSection'
import CTASection from '@/components/web-application-development/CTASection'
import FAQSection from '@/components/web-application-development/FAQSection'
import HeroSection from '@/components/web-application-development/HeroSection'
import IndustriesSection from '@/components/web-application-development/IndustriesSection'
import ProcessSection from '@/components/web-application-development/ProcessSection'
import ServicesSection from '@/components/web-application-development/ServicesSection'
import TechStackSection from '@/components/web-application-development/TechStackSection'
import TestimonialsSection from '@/components/web-application-development/TestimonialsSection'
import WebAppTabs from '@/components/web-application-development/WebAppTabs'
import WhyUsSection from '@/components/web-application-development/WhyUsSection'
import React from 'react'

const page = () => {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <ServicesSection />
            <ProcessSection />
            <WebAppTabs />
            <TechStackSection />
            <ComparisonSection />
            <WhyUsSection />
            {/* <IndustriesSection /> */}
            <CaseStudiesSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
        </>
    )
}

export default page