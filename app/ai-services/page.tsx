import Banner from '@/components/ai-services/Banner'
import BenefitsSection from '@/components/ai-services/BenefitsSection'
import CaseStudiesSection from '@/components/ai-services/CaseStudiesSection'
import ClientReview from '@/components/ai-services/ClientReview'
import ClientReviewSuccessRate from '@/components/ai-services/ClientReviewSuccessRate'
import CTASection from '@/components/ai-services/CTASection'
import Services from '@/components/ai-services/Services'
import OverviewSection from '@/components/ai-services/OverviewSection'
import DifferentiateSection from '@/components/ai-services/DifferentiateSection'
import SectorsWeServeSection from '@/components/ai-services/SectorsWeServeSection'
import ContactUsSection from '@/components/ai-services/ContactUsSection'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <OverviewSection />
            <ClientReview />
            <ClientReviewSuccessRate />
            <Services />
            <DifferentiateSection />
            <SectorsWeServeSection />
            <BenefitsSection />
            <CaseStudiesSection />
            <ContactUsSection />
            <CTASection />
        </>
    )
}

export default page