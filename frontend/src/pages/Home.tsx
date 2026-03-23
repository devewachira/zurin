import { useEffect } from 'react'
import FAQ from '../components/FAQ'
import ConsultationCard from '../components/ConsultationCard'
import LocalImpactBanner from '../components/LocalImpactBanner'
import ImportanceSection from '../components/ImportanceSection'
import Hero from '../components/Hero'
import StatementBand from '../components/StatementBand'
import DallasWhySection from '../components/DallasWhySection'
import WhatToLookFor from '../components/WhatToLookFor'
import ServicesShowcase from '../components/ServicesShowcase'
import PartnerExpectSection from '../components/PartnerExpectSection'
import TestimonialPair from '../components/TestimonialPair'
import WorksGreatSection from '../components/WorksGreatSection'
import ImageMarquee from '../components/ImageMarquee'
import DallasTipsFullBleed from '../components/DallasTipsFullBleed'
import BenefitsWithJSL from '../components/BenefitsWithJSL'
import WebDevelopmentProcess from '../components/WebDevelopmentProcess'

export default function Home() {
  useEffect(() => {
    document.title = "Zurinty | #1 Digital Marketing & Web Design Agency in Nairobi"
  }, [])
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <ImportanceSection />
      <StatementBand />
      <DallasWhySection />
      <ConsultationCard />
      <PartnerExpectSection />
      <TestimonialPair />
      <ServicesShowcase />
      <WorksGreatSection />
      <ImageMarquee />
      <DallasTipsFullBleed />
      <WhatToLookFor />
      <LocalImpactBanner />
      <BenefitsWithJSL />
      <WebDevelopmentProcess />
      <FAQ />
    </div>
  )
}
