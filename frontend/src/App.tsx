import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnNav from './components/ScrollToTopOnNav'
import ChatWidget from './components/ChatWidget'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import WebsiteDesign from './pages/WebsiteDesign'
import BrandDevelopment from './pages/BrandDevelopment'
import SEOStrategy from './pages/SEOStrategy'
import ContentMarketing from './pages/ContentMarketing'
import DigitalMarketing from './pages/DigitalMarketing'
import PhotographyVideo from './pages/PhotographyVideo'
import EmailMarketing from './pages/EmailMarketing'
import PaidMediaSEM from './pages/PaidMediaSEM'
import DataAnalytics from './pages/DataAnalytics'
import PublicRelations from './pages/PublicRelations'
import AiAutomations from './pages/AiAutomations'
import VirtualAssistant from './pages/VirtualAssistant'
import TrellisCaseStudy from './pages/TrellisCaseStudy'
import DroneReel from './pages/DroneReel'
import DealerNetwork from './pages/DealerNetwork'
import BrandSystem from './pages/BrandSystem'
import PortfolioTemplate from './pages/PortfolioTemplate'
import CRELandingPage from './pages/CRELandingPage'
import SavannaCoffee from './pages/SavannaCoffee'
import NexusTech from './pages/NexusTech'
import BloomWellness from './pages/BloomWellness'
import PeakAdventure from './pages/PeakAdventure'
import CoastalRealty from './pages/CoastalRealty'
import EmberCreative from './pages/EmberCreative'
import HarvestKitchen from './pages/HarvestKitchen'
import AtlasFinancial from './pages/AtlasFinancial'
import VerdeOrganics from './pages/VerdeOrganics'
import SkylineArchitecture from './pages/SkylineArchitecture'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTopOnNav />
      <main className="flex-1 pt-[72px] lg:pt-[88px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/brand-development" element={<BrandDevelopment />} />
          <Route path="/services/seo-strategy" element={<SEOStrategy />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/photography-video" element={<PhotographyVideo />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/paid-media" element={<PaidMediaSEM />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/public-relations" element={<PublicRelations />} />
          <Route path="/services/ai-automations" element={<AiAutomations />} />
          <Route path="/services/virtual-assistant" element={<VirtualAssistant />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/trellis-replica" element={<TrellisCaseStudy />} />
          <Route path="/portfolio/drone-reel" element={<DroneReel />} />
          <Route path="/portfolio/dealer-network" element={<DealerNetwork />} />
          <Route path="/portfolio/brand-system" element={<BrandSystem />} />
          <Route path="/portfolio/portfolio-template" element={<PortfolioTemplate />} />
          <Route path="/portfolio/cre-landing" element={<CRELandingPage />} />
          <Route path="/portfolio/savanna-coffee" element={<SavannaCoffee />} />
          <Route path="/portfolio/nexus-tech" element={<NexusTech />} />
          <Route path="/portfolio/bloom-wellness" element={<BloomWellness />} />
          <Route path="/portfolio/peak-adventure" element={<PeakAdventure />} />
          <Route path="/portfolio/coastal-realty" element={<CoastalRealty />} />
          <Route path="/portfolio/ember-creative" element={<EmberCreative />} />
          <Route path="/portfolio/harvest-kitchen" element={<HarvestKitchen />} />
          <Route path="/portfolio/atlas-financial" element={<AtlasFinancial />} />
          <Route path="/portfolio/verde-organics" element={<VerdeOrganics />} />
          <Route path="/portfolio/skyline-architecture" element={<SkylineArchitecture />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>
      <ScrollToTop />
      <ChatWidget />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
