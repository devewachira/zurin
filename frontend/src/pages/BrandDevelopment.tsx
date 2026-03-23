import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImageMarquee from '../components/ImageMarquee';

export default function BrandDevelopment() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const brandingCards = [
    {
      title: 'Naming and Messaging',
      description: 'From social posts to blogs to website copy, your voice should be consistent. Let us help your brand stay true!'
    },
    {
      title: 'High Quality Logo Design',
      description: 'Your logo is an integral part of your brand. It can promote awareness, recognition, and should accurately represent your whole company.'
    },
    {
      title: 'Brand Collateral',
      description: 'From business cards to pens, magnets to coffee mugs, you deserve branded swag. Anything you need, we can create!'
    },
    {
      title: 'Digital Marketing',
      description: 'Your visual identity is everything online. Make sure you are giving clear, consistent, and clean visuals to your audience, always!'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % brandingCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/dr2.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#141a2a]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-white transition-colors group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </NavLink>
          </div>
          <div className="max-w-2xl">
            <div className="text-emerald-400 font-semibold text-lg">Essential Services</div>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Brand Development
            </h1>
            <p className="mt-8 text-lg text-white/90 leading-relaxed">
              It's the little things – the tone, the voice, the look, the feel, the messages, the values. All of those little things add up to create one big thing – your unique brand. At Zurinty we are passionate about building better brands online – brands that stand out from the competition and really make a statement in a memorable way.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill px-8 py-3">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill px-8 py-3">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes a Brand? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
          What Makes a Brand?
        </h2>
        <p className="mt-6 text-gray-700 max-w-3xl">
          There's a lot that goes into building a brand from the ground up – or even giving an existing brand a bit of a facelift – and we're committed to walking through the process with you every step of the way.
        </p>
      </div>

      {/* Video Section with Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500">
            <div className="aspect-video flex items-center justify-center relative">
              <img 
                src="/assets/img/portfolio/01.png" 
                alt="Brand development video" 
                className="w-full h-full object-cover opacity-60"
              />
              <button className="absolute w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-gray-900">
              We Offer a Variety of Brand Development Services, Including:
            </h3>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                'Concept Creation',
                'Logo Design',
                'Brand Messaging',
                'Image Creation',
                'Website Design',
                'Print Material',
                'Copywriting',
                'White Papers',
                'Blog Creation',
                'Social Media',
                'Content Marketing',
                'External Promo',
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="font-semibold text-gray-900">{service}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The JSL Marketing Branding Package */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            {/* Image with overlay */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/assets/img/portfolio/10.png" 
                alt="Brand package" 
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Animated Card Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#1a1f3a] p-6 flex flex-col justify-between">
                {/* Card Content with Fade Transition */}
                <div className="relative flex-1">
                  {brandingCards.map((card, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === activeSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Dot Indicators */}
                <div className="flex gap-2 mt-4">
                  {brandingCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeSlide 
                          ? 'w-6 bg-emerald-400' 
                          : 'w-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              The Zurinty Marketing Branding Package
            </h2>
            <p className="mt-6 text-gray-700">
              Need help with your name, logo, or even your business' voice? We have designers who live to develop brands from the ground up.
            </p>
            <NavLink to="/contact" className="mt-8 inline-flex btn btn-primary btn-pill px-8 py-3">
              Request a Quote
            </NavLink>
          </div>
        </div>
      </div>

      {/* Need a Website? */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
                Need a Website?
              </h2>
              <p className="mt-6 text-gray-700">
                Our web design gurus are standing by to learn your 'why', your style, your values, and your brand so that we can accurately reflect it in your new website! Whether it's a five pager or a hundred and fifty pages – we will build it, and they will come!
              </p>
              <NavLink to="/services/website-design" className="mt-8 inline-flex btn btn-primary btn-pill px-8 py-3">
                Web Design & Development
              </NavLink>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-emerald-500 rounded-3xl -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-gradient-to-br from-emerald-400 to-teal-500 p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <img 
                    src="/assets/img/portfolio/1.png" 
                    alt="Website mockup" 
                    className="rounded-lg w-full aspect-video object-cover"
                  />
                </div>
                <div className="mt-6 bg-white rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-emerald-600 uppercase">Read!</div>
                    <div className="text-sm font-bold text-gray-900">Zurinty Case Study: Towni</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Services? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-navy-900 rounded-3xl -z-10" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 transform rotate-3">
                <img 
                  src="/assets/img/portfolio/2.png" 
                  alt="Design example 1" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 transform -rotate-3 mt-8">
                <img 
                  src="/assets/img/portfolio/3.png" 
                  alt="Design example 2" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white rounded-2xl p-6 shadow-2xl max-w-xs z-20">
              <div className="text-sm font-bold text-emerald-600 uppercase">Read!</div>
              <div className="mt-1 text-lg font-bold text-gray-900">Zurinty Case Study: Disability Advocates</div>
              <NavLink to="/portfolio" className="mt-3 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Design Services?
            </h2>
            <p className="mt-6 text-gray-700">
              Our design services can create clean, modern, unique, and interesting visuals for both online and real-life! From iconography to custom graphics to banners and business cards – learn more about the many ways design can elevate your brand, your business, and your bottom line!
            </p>
            <NavLink to="/services" className="mt-8 inline-flex btn btn-primary btn-pill px-8 py-3">
              Creative Services
            </NavLink>
          </div>
        </div>
      </div>

      {/* Image Marquee */}
      <ImageMarquee />

      {/* Testimonials */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Heading and copy */}
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Our Accolades</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-600 mb-4">Testimonials</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We love putting beautiful websites and collateral out into the world, and though we don't do it for the praise – it doesn't hurt. See what some of our clients have to say, or reach out to us for references!
              </p>
              <NavLink to="/testimonials" className="inline-flex btn btn-primary btn-pill px-8 py-3">Read More Reviews</NavLink>
            </div>

            {/* Right - Testimonial card */}
            <div className="bg-gradient-to-br from-[#111836] to-[#1a1f3a] rounded-2xl p-10 text-white shadow-2xl">
              <div className="text-6xl text-emerald-400 -mt-2 mb-4 leading-none">“</div>
              <p className="text-white/95 leading-relaxed">
                Zurinty helped me meet my SEO goals. They beat expectations and I saw results much sooner than anticipated. If you need help with SEO, JSL is definitely the company for you!
              </p>
              <div className="mt-6 font-semibold text-white">Bryce L.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0">
          <img 
            src="/assets/img/portfolio/4.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/90 via-emerald-600/85 to-teal-600/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Ready to Build Your Brand?
          </h2>
          <p className="mt-6 text-xl text-white/95 max-w-3xl mx-auto">
            Let's create something amazing together. Our team is ready to help you stand out from the competition.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/portfolio" className="btn btn-outline-white btn-pill px-8 py-4 text-lg">View Our Work</NavLink>
            <NavLink to="/contact" className="btn bg-white text-emerald-600 hover:bg-gray-100 btn-pill px-8 py-4 text-lg font-semibold">
              Get Started Today
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
