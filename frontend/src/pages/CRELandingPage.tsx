import HeroSection from "../components/trellis/HeroSection";
import ProjectInfo from "../components/trellis/ProjectInfo";
import ImageShowcase from "../components/trellis/ImageShowcase";
import ContentSection from "../components/trellis/ContentSection";
import TestimonialSection from "../components/trellis/TestimonialSection";
import CtaSection from "../components/trellis/CtaSection";
import PortfolioBottomMarquee from "../components/trellis/PortfolioBottomMarquee";
import { NavLink } from "react-router-dom";

const CRELandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#1e1e3f] selection:bg-[#32a386] selection:text-white overflow-hidden font-sans">
      <div className="absolute top-20 left-10 z-50">
        <NavLink 
          to="/portfolio" 
          className="inline-flex items-center text-xs font-bold text-navy-900/40 hover:text-navy-900 transition-all gap-2 group uppercase tracking-[0.2em]"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </NavLink>
      </div>

      <HeroSection title="I Heart Travel and Tours" image="/assets/img/portfolio/tours/1.png" />
      <ProjectInfo 
        description="I Heart Travel and Tours is an accredited travel agency which provides curated, immersive, and unique international travel services and tours throughout different locations across the globe. They utilize total cultural immersion as a vehicle to provide a platform to enlighten and educate their travelers."
        headquarters="Muskegon, Michigan"
        industry="Software, Information Technology, Business and Finance"
        services={["Website Design & Development", "Brand Collateral", "UI/UX Design"]}
      />
      
      {/* 00.png section: The Image Showcase (Workflow + 2-Column Grid) */}
      <ImageShowcase images={["/assets/img/portfolio/tours/2.png", "/assets/img/portfolio/tours/3.png", "/assets/img/portfolio/tours/4.png"]} />

      {/* 01.png section: The Content Section (Title + Text + Image) below the Image Showcase images */}
      <ContentSection
        title="Ignite the Dormant Traveling Spirit with the Branding
"
        body="The logo conveys authenticity, warmth, enthusiasm, and personal growth while embodying the clients’ passion for curated international travel experiences. David wanted to convey a concise message through his brand, but he was flexible with any aesthetic approach our designer was willing to take to exemplify the I Heart Travel and Tours’ core values. The new trademark shows an object cutting through a heart-shaped cloud. The twist is that the airplane is replaced by a paper plane, a unique and less frequently used item that expresses the same concept.

The client hoped to see a wider selection of warm and cold pastel tones, so our designer devised a strategy to smoothly integrate reds, greens, and blues (colors proposed by the client) and avoid these very different shades colliding when used on any of the brand assets."
        images={["/assets/img/portfolio/tours/5.png"]}
        centered={true}
      />

      
      {/* Two Column Feature Highlights (78.png) */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-[1.01]">
              <img src="/assets/img/portfolio/tours/6.png" alt="Feature 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-[#0b1b2a] transition-all duration-700 hover:scale-[1.01]">
              <img src="/assets/img/portfolio/tours/7.png" alt="Feature 2" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection 
        quote="JSL made the process so smooth—listening to my feedback and creating a website that truly represents our vision. The integration works perfectly, and the design is exactly what I envisioned!"
        author="STEPHANIE S."
        role="Product Owner"
      />
      <CtaSection />
      
      <PortfolioBottomMarquee />
    </div>
  );
};

export default CRELandingPage;
