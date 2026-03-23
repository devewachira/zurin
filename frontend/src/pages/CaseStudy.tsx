import { useParams, NavLink } from 'react-router-dom'

/* ------------------------------------------------------------------ */
/*  Per-project case-study data                                       */
/* ------------------------------------------------------------------ */
type CaseStudyData = {
  title: string
  hero: string
  description: string
  headquarters: string
  industry: string
  services: string[]
  sections: { heading: string; body: string; image?: string }[]
  testimonial?: { quote: string; author: string; role: string }
  relatedSlugs: string[]
  liveLink?: string
}

const studies: Record<string, CaseStudyData> = {
  'ar-51': {
    title: 'Dentist Website',
    hero: '/assets/img/portfolio/1.png',
    liveLink: 'https://comfy-horse-e7613d.netlify.app/',
    description:
      'A modern, patient-friendly website for a dental practice — designed to build trust, simplify appointment booking, and showcase services with a clean, professional aesthetic.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Healthcare, Dental',
    services: ['Web Design', 'UI/UX', 'SEO'],
    sections: [
      {
        heading: 'Building Patient Trust Online',
        body: 'We focused on warm imagery, clear service descriptions, and prominent calls-to-action so new patients feel confident booking their first visit.',
        image: '/assets/img/portfolio/1.png',
      },
      {
        heading: 'Streamlined Booking Experience',
        body: 'An integrated appointment form reduces friction — patients can request a visit in under 30 seconds without leaving the site.',
      },
    ],
    testimonial: {
      quote: 'The new site doubled our online appointment requests within the first month. Patients constantly compliment how easy it is to navigate.',
      author: 'Dr. Amani',
      role: 'Practice Owner',
    },
    relatedSlugs: ['rim-manufacturing', 'the-clayground', 'vorex'],
  },

  'rim-manufacturing': {
    title: 'TEMBEA Website',
    hero: '/assets/img/portfolio/2.png',
    liveLink: 'https://aesthetic-gumption-f22415.netlify.app/',
    description:
      'A vibrant travel platform showcasing tour packages, destinations, and seamless booking — designed to inspire wanderlust and convert visitors into travelers.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Travel & Tourism',
    services: ['Web Design', 'Branding', 'Content Strategy'],
    sections: [
      {
        heading: 'Inspiring Exploration',
        body: 'Bold photography and immersive layouts invite users to explore destinations before they even pack a bag.',
        image: '/assets/img/portfolio/2.png',
      },
      {
        heading: 'Conversion-First Design',
        body: 'Strategic placement of CTAs and package highlights guide visitors from browsing to booking with minimal clicks.',
      },
    ],
    relatedSlugs: ['ar-51', 'vorex', 'dental-practice'],
  },

  'the-clayground': {
    title: 'REPAIR',
    hero: '/assets/img/portfolio/3.png',
    liveLink: 'https://gleaming-biscuit-04ace2.netlify.app/',
    description:
      'Brand identity and web presence for a repair services company — communicating reliability, speed, and expertise through a cohesive visual system.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Home Services, Repair',
    services: ['Branding', 'Logo Design', 'Web Design'],
    sections: [
      {
        heading: 'Trustworthy Visual Identity',
        body: 'We built a brand system around reliability — strong typography, a dependable color palette, and iconography that communicates competence at a glance.',
        image: '/assets/img/portfolio/3.png',
      },
      {
        heading: 'Service-Focused Layout',
        body: 'Each service category has its own dedicated section with clear descriptions, pricing transparency, and easy contact options.',
      },
    ],
    relatedSlugs: ['clover-esthetics', 'presa-solutions', 'savanna-coffee'],
  },

  vorex: {
    title: 'HELP',
    hero: '/assets/img/portfolio/4.png',
    liveLink: 'https://glistening-banoffee-90dd4c.netlify.app/',
    description:
      'A helpdesk and support platform designed with clarity and efficiency in mind — making it easy for users to find answers and submit requests.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Software, SaaS',
    services: ['Web Design', 'UI/UX', 'Branding'],
    sections: [
      {
        heading: 'Intuitive Support Experience',
        body: 'A clean knowledge base structure and smart search let users resolve issues without waiting for a support agent.',
        image: '/assets/img/portfolio/4.png',
      },
    ],
    relatedSlugs: ['ar-51', 'rim-manufacturing', 'dental-practice'],
  },

  'ios-concept': {
    title: 'Law Firm',
    hero: '/assets/img/portfolio/5.png',
    liveLink: 'https://fascinating-narwhal-80efbd.netlify.app/',
    description:
      'A polished, authoritative brand identity for a law firm — balancing professionalism with approachability to attract and reassure prospective clients.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Legal Services',
    services: ['Branding', 'Logo Design', 'Print Design'],
    sections: [
      {
        heading: 'Authority Meets Approachability',
        body: 'Deep navy tones paired with warm accents create a brand that feels both prestigious and welcoming — essential for a client-facing practice.',
        image: '/assets/img/portfolio/5.png',
      },
      {
        heading: 'Cohesive Collateral',
        body: "From business cards to letterheads, every touchpoint reinforces the firm's credibility and attention to detail.",
      },
    ],
    testimonial: {
      quote: 'Our new brand identity has elevated how clients perceive us. We look as professional as the service we deliver.',
      author: 'Managing Partner',
      role: 'Law Firm',
    },
    relatedSlugs: ['the-clayground', 'clover-esthetics', 'savanna-coffee'],
  },

  'clover-esthetics': {
    title: 'Wash Me',
    hero: '/assets/img/portfolio/6.png',
    liveLink: 'https://merry-semifreddo-e703aa.netlify.app/',
    description:
      'Fresh, playful branding for a car wash business — designed to stand out on the street and create a memorable, trustworthy impression.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Automotive Services',
    services: ['Branding', 'Logo Design', 'Signage'],
    sections: [
      {
        heading: 'Bold Street Presence',
        body: "Vibrant colors and a fun wordmark ensure the brand catches eyes from the road and sticks in customers' minds.",
        image: '/assets/img/portfolio/6.png',
      },
    ],
    relatedSlugs: ['the-clayground', 'presa-solutions', 'bloom-wellness'],
  },

  'marina-neptune': {
    title: 'Gym',
    hero: '/assets/img/portfolio/7.png',
    liveLink: 'https://glistening-llama-1935ae.netlify.app/',
    description:
      'High-energy branding and video content for a fitness center — capturing the intensity and community spirit that drives members to keep coming back.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Fitness & Wellness',
    services: ['Video Production', 'Branding', 'Social Media'],
    sections: [
      {
        heading: 'Energy in Every Frame',
        body: 'Dynamic footage of real workouts and member stories create authentic content that resonates with fitness enthusiasts.',
        image: '/assets/img/portfolio/7.png',
      },
    ],
    relatedSlugs: ['drone-reel', 'bloom-wellness', 'peak-adventure'],
  },

  'wheatherhead-johnson': {
    title: 'Weatheread Johnson Realty',
    hero: '/assets/img/portfolio/8.png',
    liveLink: 'https://classy-cupcake-a04156.netlify.app/',
    description:
      'A sophisticated digital presence for a commercial real estate firm — showcasing properties and building investor confidence through elegant design.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Commercial Real Estate',
    services: ['Web Design', 'Branding', 'Photography'],
    sections: [
      {
        heading: 'Premium Property Showcase',
        body: 'Large imagery and clean property cards let listings speak for themselves, while filters make searching effortless.',
        image: '/assets/img/portfolio/8.png',
      },
    ],
    relatedSlugs: ['dealer-network', 'cre-landing', 'coastal-realty'],
  },

  'dental-practice': {
    title: 'Dental Practice Site',
    hero: '/assets/img/portfolio/9.png',
    liveLink: 'https://starlit-cassata-efbf5c.netlify.app/',
    description:
      'A comprehensive dental practice website designed to educate patients, highlight specialties, and drive appointment bookings.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Healthcare, Dental',
    services: ['Web Design', 'SEO', 'Content Writing'],
    sections: [
      {
        heading: 'Patient Education First',
        body: 'Detailed service pages with clear explanations help patients understand procedures before their visit, reducing anxiety and building trust.',
        image: '/assets/img/portfolio/9.png',
      },
    ],
    relatedSlugs: ['ar-51', 'vorex', 'rim-manufacturing'],
  },

  'presa-solutions': {
    title: 'Klean',
    hero: '/assets/img/portfolio/10.png',
    liveLink: 'https://snazzy-semifreddo-bb9437.netlify.app/',
    description:
      'Minimalist brand identity for a cleaning products company — communicating purity, effectiveness, and eco-consciousness through restrained design.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Consumer Goods, Cleaning',
    services: ['Branding', 'Packaging Design', 'Logo Design'],
    sections: [
      {
        heading: 'Clean by Design',
        body: 'Whitespace, soft colors, and simple iconography mirror the product promise — clean, pure, and effective.',
        image: '/assets/img/portfolio/10.png',
      },
      {
        heading: 'Shelf-Ready Packaging',
        body: "Packaging designs optimized for retail visibility while maintaining the brand's minimal, premium aesthetic.",
      },
    ],
    relatedSlugs: ['the-clayground', 'verde-organics', 'bloom-wellness'],
  },

  'drone-reel': {
    title: 'Commercial Drone Reel',
    hero: '/assets/img/portfolio/11.png',
    liveLink: 'https://adorable-chimera-06ce63.netlify.app/',
    description:
      'Cinematic aerial footage compiled into a commercial reel — showcasing real estate, events, and landscapes from breathtaking perspectives.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Video Production, Aerial',
    services: ['Video Production', 'Drone Photography', 'Editing'],
    sections: [
      {
        heading: 'Perspective Changes Everything',
        body: 'Aerial cinematography reveals properties, venues, and landscapes in ways ground-level footage simply cannot match.',
        image: '/assets/img/portfolio/11.png',
      },
    ],
    relatedSlugs: ['marina-neptune', 'wheatherhead-johnson', 'cre-landing'],
  },

  'dealer-network': {
    title: 'Dealer Network',
    hero: '/assets/img/portfolio/1.png',
    description:
      'A centralized platform connecting commercial real estate dealers with property listings, market data, and collaboration tools — streamlining the deal-making process from lead to close.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Commercial Real Estate',
    services: ['Web Design', 'UI/UX', 'Data Visualization', 'Custom Development'],
    sections: [
      {
        heading: 'Connecting the Commercial Ecosystem',
        body: 'The commercial real estate market is often fragmented. We set out to build a "Dealer Network" that acts as a single source of truth for brokers, investors, and property managers.\n\nThe challenge was to take complex property data and present it in a way that was both intuitive and actionable for high-stakes decision makers.',
        image: '/assets/img/portfolio/2.png',
      },
      {
        heading: 'Data-Driven Insights',
        body: 'We integrated real-time market analytics and interactive maps, allowing dealers to visualize trends and property performance at a glance. By prioritizing user experience, we reduced the time spent on manual research by over 40%.',
      },
      {
        heading: 'Seamless Collaboration',
        body: 'Built-in communication tools and shared document repositories ensure that all parties are on the same page, accelerating the due diligence phase and closing deals faster than ever before.',
      },
    ],
    relatedSlugs: ['wheatherhead-johnson', 'cre-landing', 'coastal-realty'],
  },

  'brand-system': {
    title: 'Brand System',
    hero: '/assets/img/portfolio/13.png',
    description:
      'A comprehensive brand system with guidelines, templates, and assets — ensuring visual consistency and professional authority across every customer touchpoint.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Branding, Design Systems',
    services: ['Branding', 'Brand Guidelines', 'Design System', 'Asset Creation'],
    sections: [
      {
        heading: 'The Foundation of Visual Authority',
        body: 'A brand is more than just a logo. For this project, we developed a holistic brand system that defines how the company looks, speaks, and acts across all platforms.\n\nOur goal was to create a "Visual North Star" that would guide the team as they scaled, ensuring that every piece of content—from a social post to a billboard—felt unmistakably like the brand.',
        image: '/assets/img/portfolio/13.png',
      },
      {
        heading: 'Consistency at Scale',
        body: 'We delivered a comprehensive Brand Bible that covers logo usage, typography, color theory, and even photography style. This ensures that whether a junior designer or an external agency is creating assets, the results are always on-brand.',
      },
      {
        heading: 'Operationalizing Design',
        body: 'Beyond the static guidelines, we provided a suite of editable templates for decks, stationary, and digital ads, empowering the internal marketing team to produce high-quality work without constant design bottlenecks.',
      },
    ],
    relatedSlugs: ['nexus-tech', 'ember-creative', 'atlas-financial'],
  },

  'portfolio-template': {
    title: 'Portfolio Template',
    hero: '/assets/img/portfolio/14.png',
    description:
      'A versatile portfolio website template designed for creative professionals — balancing high-performance code with a minimalist aesthetic to let the work speak for itself.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Web Design, Creative',
    services: ['Web Design', 'UI/UX', 'Frontend Development', 'React'],
    sections: [
      {
        heading: 'Letting the Work Take Center Stage',
        body: 'Creatives need a digital home that showcases their talent without distracting from it. We designed this template with a "content-first" philosophy, using whitespace and clean typography to frame each project like a piece of art in a gallery.\n\nThe challenge was creating a layout that was both rigid enough to look professional and flexible enough to accommodate different types of work, from photography to copywriting.',
        image: '/assets/img/portfolio/14.png',
      },
      {
        heading: 'Performance Meets Aesthetics',
        body: 'Built using React and Tailwind CSS, the template is blazing fast and fully responsive. We optimized image loading and animations to ensure a smooth, premium experience on every device—crucial for making a strong first impression on potential clients.',
      },
    ],
    relatedSlugs: ['ar-51', 'vorex', 'dental-practice'],
  },

  'cre-landing': {
    title: 'CRE Landing Page',
    hero: '/assets/img/portfolio/15.png',
    description:
      'A high-converting landing page for commercial real estate — built to capture investor leads with compelling property data, social proof, and frictionless contact forms.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Commercial Real Estate',
    services: ['Web Design', 'Conversion Optimization', 'Copywriting', 'SEO'],
    sections: [
      {
        heading: 'Designing for High-Value Leads',
        body: 'In Commercial Real Estate, a single lead can represent millions in potential revenue. We designed this landing page with a laser focus on conversion, guiding visitors from their initial curiosity to a direct inquiry.\n\nWe moved away from generic "Contact Us" pages in favor of a value-driven approach that highlights property scarcity and investment potential.',
        image: '/assets/img/portfolio/15.png',
      },
      {
        heading: 'The Psychology of Trust',
        body: 'By integrating trust signals—client logos, case study highlights, and clear bios—we addressed investor skepticism head-on. The result was a 150% increase in lead quality compared to the client\'s previous site.',
      },
    ],
    relatedSlugs: ['wheatherhead-johnson', 'dealer-network', 'coastal-realty'],
  },

  'savanna-coffee': {
    title: 'Savanna Coffee Roasters',
    hero: '/assets/img/portfolio/3.png',
    description:
      'A warm, artisanal brand identity for a specialty coffee roaster — evoking the richness of African coffee culture through earthy tones, hand-drawn elements, and tactile packaging.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Food & Beverage, Coffee',
    services: ['Branding', 'Logo Design', 'Packaging Design', 'Print Design'],
    sections: [
      {
        heading: 'Rooted in Origin',
        body: 'The brand draws inspiration from Kenyan coffee heritage — warm ochres, deep browns, and organic textures tell the story of beans from farm to cup.',
        image: '/assets/img/portfolio/3.png',
      },
      {
        heading: 'Packaging That Tells a Story',
        body: 'Each blend features unique hand-illustrated label art that highlights the region of origin, roast profile, and tasting notes — turning every bag into a collectible experience.',
      },
      {
        heading: 'Cohesive Brand Touchpoints',
        body: "From café signage to loyalty cards, every detail reinforces the brand's promise of quality, authenticity, and craftsmanship.",
      },
    ],
    testimonial: {
      quote: 'Zurinty captured exactly what we envisioned — a brand that feels as rich and authentic as our coffee. Customers recognize us instantly now.',
      author: 'James K.',
      role: 'Founder, Savanna Coffee Roasters',
    },
    relatedSlugs: ['harvest-kitchen', 'verde-organics', 'bloom-wellness'],
  },

  'nexus-tech': {
    title: 'Nexus Tech Solutions',
    hero: '/assets/img/portfolio/5.png',
    description:
      'A sleek, modern brand identity for a technology consulting firm — balancing innovation with trust through sharp geometry, a bold color system, and clean typography.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Technology, IT Consulting',
    services: ['Branding', 'Logo Design', 'Brand Guidelines', 'Web Design'],
    sections: [
      {
        heading: 'Precision Meets Innovation',
        body: 'Geometric forms and a confident blue-to-teal gradient convey technical expertise while remaining approachable to non-technical decision makers.',
        image: '/assets/img/portfolio/5.png',
      },
      {
        heading: 'Scalable Brand System',
        body: "Comprehensive guidelines ensure the brand looks consistent whether it's on a business card, a conference booth, or a 60-page proposal document.",
      },
    ],
    testimonial: {
      quote: "Our rebrand positioned us as a premium consultancy. We've seen a noticeable increase in enterprise-level inquiries since the launch.",
      author: 'David M.',
      role: 'CEO, Nexus Tech Solutions',
    },
    relatedSlugs: ['atlas-financial', 'ember-creative', 'brand-system'],
  },

  'bloom-wellness': {
    title: 'Bloom Wellness Spa',
    hero: '/assets/img/portfolio/6.png',
    description:
      'A serene, rejuvenating brand identity for a premium wellness spa — soft palettes, flowing forms, and elegant typography invite relaxation before the visit even begins.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Health & Wellness, Spa',
    services: ['Branding', 'Logo Design', 'Interior Signage', 'Print Design'],
    sections: [
      {
        heading: 'Calm by Design',
        body: 'Soft sage greens, blush pinks, and flowing watercolor textures create a visual language that mirrors the tranquility of the spa experience.',
        image: '/assets/img/portfolio/6.png',
      },
      {
        heading: 'From Digital to Physical',
        body: 'The brand extends seamlessly from the website to in-spa materials — menu cards, room signage, and product labels all share the same serene aesthetic.',
      },
    ],
    relatedSlugs: ['savanna-coffee', 'verde-organics', 'harvest-kitchen'],
  },

  'peak-adventure': {
    title: 'Peak Adventure Co.',
    hero: '/assets/img/portfolio/10.png',
    description:
      'A bold, energetic brand for an outdoor adventure company — capturing the thrill of exploration through dynamic visuals, rugged typography, and an adventurous color palette.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Travel, Outdoor Recreation',
    services: ['Branding', 'Logo Design', 'Merchandise Design', 'Social Media'],
    sections: [
      {
        heading: 'Built for the Bold',
        body: 'A mountain-inspired logomark, earthy greens, and burnt orange create a brand that feels at home on a trail sign or an Instagram feed.',
        image: '/assets/img/portfolio/10.png',
      },
      {
        heading: 'Adventure-Ready Merchandise',
        body: "Branded gear — caps, water bottles, and tees — turns customers into ambassadors, extending the brand's reach to every summit and campsite.",
      },
    ],
    testimonial: {
      quote: 'The brand perfectly captures the spirit of adventure. Our merchandise practically sells itself now.',
      author: 'Sarah W.',
      role: 'Director, Peak Adventure Co.',
    },
    relatedSlugs: ['marina-neptune', 'ember-creative', 'skyline-architecture'],
  },

  'coastal-realty': {
    title: 'Coastal Realty Group',
    hero: '/assets/img/portfolio/3.png',
    description:
      'A refined, coastal-inspired brand identity for a boutique real estate firm — evoking beachside luxury and reliability through a sophisticated maritime palette.',
    headquarters: 'Mombasa, Kenya',
    industry: 'Real Estate',
    services: ['Branding', 'Logo Design', 'Stationery', 'Property Brochures'],
    sections: [
      {
        heading: 'Luxury on the Coast',
        body: 'Deep ocean blues, sandy neutrals, and gold accents reflect the premium coastal properties the firm represents.',
        image: '/assets/img/portfolio/3.png',
      },
      {
        heading: 'Premium Print Collateral',
        body: 'Property brochures with rich photography, elegant layouts, and embossed details leave a lasting impression with prospective buyers.',
      },
    ],
    relatedSlugs: ['wheatherhead-johnson', 'atlas-financial', 'skyline-architecture'],
  },

  'ember-creative': {
    title: 'Ember Creative Studio',
    hero: '/assets/img/portfolio/5.png',
    description:
      'A vibrant brand refresh for a creative agency — igniting their visual identity with fiery gradients, bold type, and a confident new voice.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Creative Services, Design Agency',
    services: ['Branding', 'Brand Refresh', 'Brand Guidelines', 'Web Design'],
    sections: [
      {
        heading: 'Reigniting the Brand',
        body: "The agency's original identity had grown stale. We injected energy with warm gradients from amber to coral, paired with sharp sans-serif typography.",
        image: '/assets/img/portfolio/5.png',
      },
      {
        heading: 'A System That Flexes',
        body: 'Modular brand elements allow the team to create on-brand presentations, proposals, and social content without design bottlenecks.',
      },
    ],
    testimonial: {
      quote: 'We help other companies with their brands, so ours had to be exceptional. Zurinty absolutely delivered.',
      author: 'Liam O.',
      role: 'Creative Director, Ember Studio',
    },
    relatedSlugs: ['nexus-tech', 'brand-system', 'atlas-financial'],
  },

  'harvest-kitchen': {
    title: 'Harvest Kitchen & Bar',
    hero: '/assets/img/portfolio/6.png',
    description:
      'A rustic-modern brand for a farm-to-table restaurant — blending organic warmth with contemporary elegance to reflect a menu rooted in fresh, local ingredients.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Food & Beverage, Restaurant',
    services: ['Branding', 'Logo Design', 'Menu Design', 'Interior Signage'],
    sections: [
      {
        heading: 'Farm Meets Fine Dining',
        body: 'Textured kraft backgrounds, hand-lettered accents, and a palette of forest green and warm cream bridge the gap between rustic charm and modern sophistication.',
        image: '/assets/img/portfolio/6.png',
      },
      {
        heading: 'Menu as Brand Experience',
        body: 'The menu design mirrors the brand — seasonal illustrations, thoughtful typography, and storytelling that connects diners to the source of their meal.',
      },
    ],
    relatedSlugs: ['savanna-coffee', 'bloom-wellness', 'verde-organics'],
  },

  'atlas-financial': {
    title: 'Atlas Financial Partners',
    hero: '/assets/img/portfolio/10.png',
    description:
      'A commanding brand identity for a financial advisory firm — projecting stability, expertise, and forward-thinking through a refined visual system.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Finance, Advisory',
    services: ['Branding', 'Logo Design', 'Brand Guidelines', 'Stationery'],
    sections: [
      {
        heading: 'Confidence in Every Detail',
        body: 'A globe-inspired logomark, deep navy palette, and a restrained serif typeface communicate the gravitas and global perspective clients expect.',
        image: '/assets/img/portfolio/10.png',
      },
      {
        heading: 'Professional Stationery Suite',
        body: "Letterheads, envelopes, and presentation folders with foil-stamped logos ensure every client interaction reinforces the firm's premium positioning.",
      },
    ],
    relatedSlugs: ['nexus-tech', 'coastal-realty', 'ember-creative'],
  },

  'verde-organics': {
    title: 'Verde Organics',
    hero: '/assets/img/portfolio/3.png',
    description:
      'An eco-conscious brand identity for an organic skincare line — communicating purity, sustainability, and natural beauty through botanical illustrations and earthy textures.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Beauty, Organic Skincare',
    services: ['Branding', 'Logo Design', 'Packaging Design', 'Label Design'],
    sections: [
      {
        heading: 'Nature as the North Star',
        body: "Botanical line drawings, a muted green-and-cream palette, and recycled paper textures make the brand's commitment to nature unmistakable.",
        image: '/assets/img/portfolio/3.png',
      },
      {
        heading: 'Sustainable Packaging',
        body: "Refillable glass containers with minimalist labels reduce waste while elevating the unboxing experience — beauty that's kind to the planet.",
      },
    ],
    testimonial: {
      quote: 'Our customers love the packaging almost as much as the products. The brand tells our sustainability story perfectly.',
      author: 'Grace N.',
      role: 'Founder, Verde Organics',
    },
    relatedSlugs: ['savanna-coffee', 'bloom-wellness', 'presa-solutions'],
  },

  'skyline-architecture': {
    title: 'Skyline Architecture',
    hero: '/assets/img/portfolio/5.png',
    description:
      'A bold, structural brand identity for an architecture firm — reflecting precision, creativity, and vision through geometric forms and a monochromatic palette.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Architecture, Design',
    services: ['Branding', 'Logo Design', 'Stationery', 'Portfolio Design'],
    sections: [
      {
        heading: 'Structure in Identity',
        body: "Angular letterforms and a grid-based logo echo the firm's architectural discipline — every line intentional, every space considered.",
        image: '/assets/img/portfolio/5.png',
      },
      {
        heading: 'Portfolio That Wins Projects',
        body: "A beautifully designed project portfolio — both print and digital — presents the firm's work with the same precision they bring to their buildings.",
      },
    ],
    testimonial: {
      quote: 'The brand feels like one of our buildings — clean lines, purposeful design, nothing superfluous. Exactly right.',
      author: 'Arch. Peter K.',
      role: 'Principal, Skyline Architecture',
    },
    relatedSlugs: ['coastal-realty', 'nexus-tech', 'atlas-financial'],
  },

  'trellis-replica': {
    title: 'Trellis',
    hero: '/assets/img/portfolio/trellis-macbook.png',
    description:
      'Trellis is a Business Resource Planning (BRP) system—a dynamic, connected platform that helps small businesses organize their people, processes, and priorities in one place. It is designed to deliver high-quality operational clarity to growing teams, without the cost of a seasoned executive or the complexity of enterprise software.',
    headquarters: 'Muskegon, Michigan',
    industry: 'Software, Information Technology, Business and Finance',
    services: ['Website Design & Development', 'Brand Collateral', 'UI/UX Design'],
    sections: [
      {
        heading: 'Translating Brand Identity into Tangible Design',
        body: 'Trellis came to JSL with established brand standards featuring a bold color palette and dynamic gradients—elements that immediately sparked our creative interest. However, their identity guidelines had not yet been applied to any printed materials, and their website wasn\'t fully capturing the intended aesthetic or meeting marketing expectations.',
        image: '/assets/img/portfolio/trellis-4.png',
      },
      {
        heading: 'The Trellis Digital Experience',
        body: 'The new Trellis website features a dark-themed layout illuminated by vibrant flares of color—reminiscent of the northern lights in a night sky—that evoke a sense of technology and wonder. Dynamic patterns of orange, blue, and green 3D waves add visual consistency and guide visitors through a cohesive narrative.',
        image: '/assets/img/portfolio/trellis-5.png',
      },
      {
        heading: 'Balancing Aesthetics and Usability',
        body: 'The motion and scrolling effects integrated into the live Trellis site play a key role in delivering the seamless online experience the design set out to achieve. Subtle movement and dynamic color enhancements draw the user\'s attention, making their journey through the site both engaging and enjoyable.',
        image: '/assets/img/portfolio/trellis-6.png',
      },
    ],
    testimonial: {
      quote: 'JSL made the process so smooth—listening to my feedback and creating a website that truly represents our vision. The integration works perfectly, and the design is exactly what I envisioned!',
      author: 'STEPHANIE S.',
      role: 'Product Owner',
    },
    relatedSlugs: ['nexus-tech', 'brand-system', 'skyline-architecture'],
  },
}

/* ------------------------------------------------------------------ */
/*  Fallback                                                          */
/* ------------------------------------------------------------------ */
function fallback(slug: string): CaseStudyData {
  const title = slug
    .split('-')
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join(' ')
  return {
    title,
    hero: '/assets/img/portfolio/2.png',
    description:
      'A creative project delivered by Zurinty Marketing — combining strategy, design, and execution to achieve outstanding results.',
    headquarters: 'Nairobi, Kenya',
    industry: 'Branding',
    services: ['Branding', 'Design'],
    sections: [],
    relatedSlugs: [],
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function CaseStudy() {
  const { slug = '' } = useParams()
  const data = studies[slug] ?? fallback(slug)

  const allSlugs = Object.keys(studies)

  return (
    <div className="bg-navy-900 text-white min-h-screen selection:bg-brand-400 selection:text-navy-900">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Hero Mockup/Image */}
        <section className="pt-20 pb-12 lg:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
             <p className="text-brand-400 font-bold uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-up">
              Case Study
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tightest leading-[0.9] mb-8 animate-fade-in-up delay-100">
              {data.title}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <img
                src={data.hero}
                alt={data.title}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Overview & Metadata */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Main Intro */}
              <div className="lg:col-span-8">
                <div className="inline-block h-1.5 w-24 bg-brand-500 mb-10" />
                <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 leading-tight font-light mb-8">
                  {data.description}
                </p>
              </div>

              {/* Sidebar Metadata (Glassmorphism) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-bold text-brand-400 uppercase tracking-[0.2em] mb-3">Headquarters</h3>
                      <p className="text-lg text-white font-semibold">{data.headquarters}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-brand-400 uppercase tracking-[0.2em] mb-3">Industry</h3>
                      <p className="text-lg text-white font-semibold">{data.industry}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-brand-400 uppercase tracking-[0.2em] mb-3">Services</h3>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {data.services.map((s, idx) => (
                          <span key={idx} className="text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    {data.liveLink && (
                      <div className="pt-4">
                        <a
                          href={data.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center px-6 py-3 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
                        >
                          Visit Live Site
                          <span className="ml-2">↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections (Alternating) */}
        {data.sections.map((s, i) => (
          <section key={i} className={`py-24 ${i % 2 === 1 ? 'bg-white/5 backdrop-blur-sm' : ''}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8 tracking-tight">
                    {s.heading}
                  </h2>
                  <div className="text-lg sm:text-xl text-gray-400 leading-relaxed space-y-6">
                    {s.body.split('\n').map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>
                </div>
                {s.image && (
                  <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={s.image}
                      alt={s.heading}
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Testimonial */}
        {data.testimonial && (
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-500/5 mix-blend-overlay" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="text-7xl font-serif text-brand-500 mb-12 opacity-50 italic">“</div>
              <p className="text-3xl sm:text-5xl font-bold text-white leading-[1.15] mb-12 italic tracking-tightest">
                {data.testimonial.quote}
              </p>
              <div className="inline-flex items-center gap-6">
                <div className="h-0.5 w-12 bg-brand-500" />
                <div className="text-left">
                  <p className="text-xl font-black text-white">{data.testimonial.author}</p>
                  <p className="text-brand-400 font-bold uppercase tracking-widest text-xs mt-1">{data.testimonial.role}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-600 to-emerald-400 p-12 sm:p-24 group shadow-[0_20px_60px_-15px_rgba(5,150,105,0.4)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay grayscale group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative text-center max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-8">
                  Ready to Polish Your Online Presence?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
                  We love a challenge and making the digital world more functional and beautiful.
                </p>
                <NavLink
                  to="/contact"
                  className="inline-flex px-12 py-5 bg-navy-900 text-white font-black rounded-full hover:bg-black hover:scale-105 transition-all shadow-2xl uppercase tracking-widest text-sm"
                >
                  Get Your Free Quote
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Carousel */}
        <section className="py-32 bg-navy-950/50 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <p className="text-brand-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Case Studies</p>
                <h2 className="text-4xl sm:text-6xl font-black text-white">
                  Keep Exploring.
                </h2>
              </div>
              <NavLink
                to="/portfolio"
                className="group inline-flex items-center gap-4 text-white font-bold"
              >
                <span className="border-b-2 border-brand-500 pb-1">View All Work</span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-500 text-navy-900 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </NavLink>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allSlugs
                .filter((s) => s !== slug)
                .slice(0, 3)
                .map((rs) => {
                  const related = studies[rs]
                  if (!related) return null
                  return (
                    <NavLink
                      key={rs}
                      to={`/portfolio/${rs}`}
                      className="group relative block overflow-hidden rounded-[2rem] bg-navy-800 border border-white/5 aspect-[4/5]"
                    >
                      <img
                        src={related.hero}
                        alt={related.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent p-10 flex flex-col justify-end">
                        <p className="text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">{related.industry}</p>
                        <h3 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                          {related.title}
                        </h3>
                      </div>
                    </NavLink>
                  )
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
