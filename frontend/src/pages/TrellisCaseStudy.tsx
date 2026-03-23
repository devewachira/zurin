import HeroSection from "../components/trellis/HeroSection";
import ProjectInfo from "../components/trellis/ProjectInfo";
import ImageShowcase from "../components/trellis/ImageShowcase";
import ContentSection from "../components/trellis/ContentSection";
import TestimonialSection from "../components/trellis/TestimonialSection";
import CtaSection from "../components/trellis/CtaSection";
import PortfolioBottomMarquee from "../components/trellis/PortfolioBottomMarquee";
import { NavLink, useParams } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Data Bank: Every project starts with the Trellis content          */
/* ------------------------------------------------------------------ */

type CaseStudyData = {
  title: string
  hero: string
  description: string
  headquarters: string
  industry: string
  services: string[]
  showcaseImages: string[]
  sections: { title: string; body: string; images: string[] }[]
  featureImages: string[]
  testimonial: { quote: string; author: string; role: string }
}

const trellisTemplate: CaseStudyData = {
  title: "Trellis",
  hero: "/assets/img/portfolio/trellis-macbook.png",
  description: "Trellis is a Business Resource Planning (BRP) system—a dynamic, connected platform that helps small businesses organize their people, processes, and priorities in one place. It is designed to deliver high-quality operational clarity to growing teams, without the cost of a seasoned executive or the complexity of enterprise software.",
  headquarters: "Muskegon, Michigan",
  industry: "Software, Information Technology, Business and Finance",
  services: ["Website Design & Development", "Brand Collateral", "UI/UX Design"],
  showcaseImages: ["/assets/img/portfolio/trellis-1.png", "/assets/img/portfolio/trellis-2.png", "/assets/img/portfolio/trellis-3.png"],
  sections: [
    {
      title: "Translating Brand Identity into Tangible Design",
      body: "Trellis came to JSL with established brand standards featuring a bold color palette and dynamic gradients—elements that immediately sparked our creative interest. However, their identity guidelines had not yet been applied to any printed materials, and their website wasn't fully capturing the intended aesthetic or meeting marketing expectations. We believe a business card serves as a company's physical identity—it creates a memorable first impression and reinforces credibility beyond the digital space. Our team agreed that a thoughtfully designed card was key to supporting Trellis's goals. We chose a clean, vertical layout that highlighted Trellis's core brand elements—fonts, gradients, and contrast—resulting in a simple yet striking design that conveys both modernity and creativity.",
      images: ["/assets/img/portfolio/trellis-4.png"]
    },
    {
      title: "The Trellis Digital Experience",
      body: "The new Trellis website features a dark-themed layout illuminated by vibrant flares of color—reminiscent of the northern lights in a night sky—that evoke a sense of technology and wonder. Dynamic patterns of orange, blue, and green 3D waves add visual consistency and guide visitors through a cohesive narrative. Key information is presented in sleek, semi-opaque floating boxes, occasionally enhanced with imagery or icons to strengthen the message and improve clarity. Together, these elements create a visually captivating and immersive digital experience that reflects Trellis's innovative and modern identity.",
      images: ["/assets/img/portfolio/trellis-5.png"]
    },
    {
      title: "Balancing Aesthetics and Usability",
      body: "The motion and scrolling effects integrated into the live Trellis site play a key role in delivering the seamless online experience the design set out to achieve. Subtle movement and dynamic color enhancements draw the user's attention, making their journey through the site both engaging and enjoyable. At JSL, usability and functionality are just as important as aesthetics, so ensuring that navigation remained intuitive, efficient, and fully responsive across all devices was essential. The result is a website that not only looks striking but also performs beautifully —balancing visual storytelling with effortless user interaction.",
      images: ["/assets/img/portfolio/trellis-6.png"]
    }
  ],
  featureImages: ["/assets/img/portfolio/trellis-7.png", "/assets/img/portfolio/trellis-8.png"],
  testimonial: {
    quote: "JSL made the process so smooth—listening to my feedback and creating a website that truly represents our vision. The integration works perfectly, and the design is exactly what I envisioned!",
    author: "STEPHANIE S.",
    role: "Product Owner"
  }
}

// Initializing all projects with the Trellis template
const studies: Record<string, CaseStudyData> = {
  'trellis-replica': { ...trellisTemplate },
  'drone-reel': { ...trellisTemplate, title: "Commercial Drone Reel" },
  'dealer-network': { ...trellisTemplate, title: "Dealer Network" },
  'brand-system': { ...trellisTemplate, title: "Brand System" },
  'portfolio-template': { ...trellisTemplate, title: "Portfolio Template" },
  'cre-landing': { ...trellisTemplate, title: "CRE Landing Page" },
  'savanna-coffee': { ...trellisTemplate, title: "Savanna Coffee Roasters" },
  'nexus-tech': { ...trellisTemplate, title: "Nexus Tech Solutions" },
  'bloom-wellness': { ...trellisTemplate, title: "Bloom Wellness Spa" },
  'peak-adventure': { ...trellisTemplate, title: "Peak Adventure Co." },
  'coastal-realty': { ...trellisTemplate, title: "Coastal Realty Group" },
  'ember-creative': { ...trellisTemplate, title: "Ember Creative Studio" },
  'harvest-kitchen': { ...trellisTemplate, title: "Harvest Kitchen & Bar" },
  'atlas-financial': { ...trellisTemplate, title: "Atlas Financial Partners" },
  'verde-organics': { ...trellisTemplate, title: "Verde Organics" },
  'skyline-architecture': { ...trellisTemplate, title: "Skyline Architecture" },
}

const TrellisCaseStudy = () => {
  const { slug = "trellis-replica" } = useParams();
  const data = studies[slug] || trellisTemplate;

  return (
    <div className="min-h-screen bg-white text-[#1e1e3f] selection:bg-[#32a386] selection:text-white overflow-hidden font-sans">
      {/* Back to Portfolio Link */}
      <div className="absolute top-20 left-10 z-50">
        <NavLink 
          to="/portfolio" 
          className="inline-flex items-center text-xs font-bold text-navy-900/40 hover:text-navy-900 transition-all gap-2 group uppercase tracking-[0.2em]"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </NavLink>
      </div>

      <HeroSection title={data.title} image={data.hero} />
      
      <ProjectInfo 
        description={data.description}
        headquarters={data.headquarters}
        industry={data.industry}
        services={data.services}
      />
      
      {/* Image Showcase */}
      <ImageShowcase images={data.showcaseImages} />

      {/* Dynamic Content Sections */}
      {data.sections.map((sec, idx) => (
        <ContentSection
          key={idx}
          title={sec.title}
          body={sec.body}
          images={sec.images}
          centered={true}
        />
      ))}

      {/* Feature Highlights Grid */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-[1.01]">
              <img 
                src={data.featureImages[0]} 
                alt="Feature 1" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-[#0b1b2a] transition-all duration-700 hover:scale-[1.01]">
              <img 
                src={data.featureImages[1]} 
                alt="Feature 2" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & CTA */}
      <TestimonialSection 
        quote={data.testimonial.quote}
        author={data.testimonial.author}
        role={data.testimonial.role}
      />
      <CtaSection />
      
      {/* Bottom Marquee */}
      <PortfolioBottomMarquee />
    </div>
  );
};

export default TrellisCaseStudy;
