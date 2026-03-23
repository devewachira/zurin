import HeroSection from "../components/trellis/HeroSection";
import ProjectInfo from "../components/trellis/ProjectInfo";
import ImageShowcase from "../components/trellis/ImageShowcase";
import ContentSection from "../components/trellis/ContentSection";
import TestimonialSection from "../components/trellis/TestimonialSection";
import CtaSection from "../components/trellis/CtaSection";
import PortfolioBottomMarquee from "../components/trellis/PortfolioBottomMarquee";
import { NavLink } from "react-router-dom";

const AtlasFinancial = () => {
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

      <HeroSection title="Lamar Street Tattoo Club" image="/assets/img/portfolio/lamar/1.png" />
      <ProjectInfo 
        description="Trellis is a Business Resource Planning (BRP) system—a dynamic, connected platform that helps small businesses organize their people, processes, and priorities in one place. It is designed to deliver high-quality operational clarity to growing teams, without the cost of a seasoned executive or the complexity of enterprise software."
        headquarters="Muskegon, Michigan"
        industry="Software, Information Technology, Business and Finance"
        services={["Website Design & Development", "Brand Collateral", "UI/UX Design"]}
      />
      
      {/* 00.png section: The Image Showcase (Workflow + 2-Column Grid) */}
      <ImageShowcase images={["/assets/img/portfolio/lamar/2.png", "/assets/img/portfolio/lamar/3.png", "/assets/img/portfolio/lamar/4.png"]} />

      {/* 01.png section: The Content Section (Title + Text + Image) below the Image Showcase images */}
      <ContentSection
        title="Translating Brand Identity into Tangible Design"
        body="Trellis came to JSL with established brand standards featuring a bold color palette and dynamic gradients—elements that immediately sparked our creative interest. However, their identity guidelines had not yet been applied to any printed materials, and their website wasn't fully capturing the intended aesthetic or meeting marketing expectations.\n\nWe believe a business card serves as a company's physical identity—it creates a memorable first impression and reinforces credibility beyond the digital space. Our team agreed that a thoughtfully designed card was key to supporting Trellis's goals. We chose a clean, vertical layout that highlighted Trellis's core brand elements—fonts, gradients, and contrast—resulting in a simple yet striking design that conveys both modernity and creativity."
        images={["/assets/img/portfolio/lamar/5.png"]}
        centered={true}
      />

     

      <ContentSection
        title="Balancing Aesthetics and Usability"
        body="The motion and scrolling effects integrated into the live Trellis site play a key role in delivering the seamless online experience the design set out to achieve. Subtle movement and dynamic color enhancements draw the user's attention, making their journey through the site both engaging and enjoyable. At JSL, usability and functionality are just as important as aesthetics, so ensuring that navigation remained intuitive, efficient, and fully responsive across all devices was essential. The result is a website that not only looks striking but also performs beautifully —balancing visual storytelling with effortless user interaction."
        images={["/assets/img/portfolio/lamar/6.png"]}
        centered={true}
      />

      {/* Two Column Feature Highlights (78.png) */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-[1.01]">
              <img src="/assets/img/portfolio/lamar/7.png" alt="Feature 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-[#0b1b2a] transition-all duration-700 hover:scale-[1.01]">
              <img src="/assets/img/portfolio/lamar/8.png" alt="Feature 2" className="w-full h-auto object-cover" />
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

export default AtlasFinancial;
