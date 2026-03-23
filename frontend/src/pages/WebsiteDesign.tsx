import { NavLink } from 'react-router-dom'
import ImageMarquee from '../components/ImageMarquee'
import { useState } from 'react'

export default function WebsiteDesign() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const processSteps = [
    {
      label: 'Phase One:',
      title: 'Planning and Research',
      copy: "The process begins with our first meeting. We'll start by getting to know you, your business style, your brand identity, and your goals for your new website. From there we'll take a deeper dive into your industry, your competitors, and of course, your target audience. All of this initial planning and research is critical because it will serve as the foundation for your new website redesign.",
    },
    {
      label: 'Phase Two:',
      title: 'Design and Development',
      copy: "Once the 'blueprint' for your website is set, our web design gurus and technical geniuses will start doing the heavy lifting – bringing your custom website design to life! We focus on creating a seamless user experience (UX) and a visually stunning user interface (UI) while ensuring that your website is fully optimized for search engines.",
    },
    {
      label: 'Phase Three:',
      title: 'Testing and Launch',
      copy: "Before we go live, we'll thoroughly test your website to ensure that everything is working perfectly. From mobile responsiveness to site speed and security, we'll make sure that your website is ready to impress your audience. Once we're satisfied, we'll launch your new website and start driving traffic to it!",
    },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % processSteps.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/co1.png" alt="Background" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <div className="text-emerald-400 font-semibold">Essential Services</div>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Web Design &
                <br />
                Development
              </h1>
              <p className="mt-8 sm:mt-10 text-white/85 max-w-2xl">
                Our web design team shines at bringing together all the necessary pieces for a seamless, stunning, and superior website. We write SEO‑friendly web content and design beautiful, branded images to compliment the technical “skeleton” of your website — and to drive better conversions!
              </p>
              <div className="mt-8 flex gap-4">
                <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
                <NavLink to="/contact" className="btn btn-outline-white btn-pill">Hire Us!</NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Website Design Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Website Design That Captures Your Brand’s Look, Feel, & Values
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed max-w-2xl">
              Building a website isn’t just about the code. It’s about creating a space where your customers can truly experience your brand. We’ll help you create a website that is as unique as your business!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {[
              {
                title: 'High Quality Imagery',
                text: 'From lifestyle shots to products, high‑quality imagery is critical for your website.',
              },
              {
                title: 'Branding & Graphics',
                text: 'Your brand’s visual identity is everything online. We ensure your brand stays consistent.',
              },
              {
                title: 'Copywriting Services',
                text: 'We help you find your brand’s voice and communicate it effectively to your audience.',
              },
              {
                title: 'SEO Strategy',
                text: 'We’ll build your site with SEO in mind to help you rank higher in search results.',
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="h-1 bg-emerald-500 w-12 mb-6" />
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Process Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141a2a] text-white py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
              <img
                src="/assets/img/portfolio/co2.png"
                alt="Website design team"
                className="relative rounded-2xl shadow-2xl ring-1 ring-white/10 w-full max-w-md mx-auto object-cover aspect-[4/5]"
              />
              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-emerald-500 text-white p-6 rounded-2xl shadow-2xl max-w-xs transform rotate-2">
                <p className="text-sm font-semibold leading-relaxed">
                  "The web design team at Zurinty truly captured our brand’s essence. Our new website is stunning!"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                  <div className="text-xs font-bold">— Happy Client</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-4">Our Methodology</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Our Comprehensive Web Design Process
              </h2>
              <div className="mt-10 space-y-8">
                {/* Step Slider */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-emerald-400 font-bold mb-2">{processSteps[currentSlide].label}</div>
                  <h3 className="text-2xl font-bold mb-4">{processSteps[currentSlide].title}</h3>
                  <p className="text-white/80 leading-relaxed">{processSteps[currentSlide].copy}</p>
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
              <NavLink to="/contact" className="mt-4 inline-flex items-center btn btn-outline-white btn-pill text-sm">Get a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* All of Our Web Designs Are */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 right-[130px] bg-emerald-500 w-32 h-32 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[380px] lg:w-[420px]">
              <img
                src="/assets/img/portfolio/dr1.png"
                alt="Building architecture"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="absolute -bottom-12 -left-8 bg-navy-900 text-white rounded-2xl p-8 shadow-2xl max-w-sm">
              <h3 className="text-2xl font-bold text-emerald-400">Need Proof?</h3>
              <p className="text-xl font-bold mt-1">Check Out Our Case Studies.</p>
              <NavLink to="/portfolio" className="mt-4 inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all">
                Read Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              All of Our Web Designs Are:
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                'Fully Custom & Tailored To Your Brand',
                'Optimized For Search Engines (SEO)',
                'Responsive Across All Devices',
                'Fast, Secure, & Scalable',
                'Integrated With Marketing Tools',
                'User‑Centric & Conversion‑Focused',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div className="font-semibold text-gray-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* We Design Beautiful Things */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-600">
            We Design Beautiful Things.
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Zurinty Marketing & Design is devoted to creating custom designs built for you and your business, no one else. That's why Zurinty is the trusted digital marketing agency.
          </p>
          <NavLink to="/portfolio" className="mt-8 inline-flex btn btn-primary btn-pill px-8 py-4 text-lg">
            View Our Portfolio
          </NavLink>
        </div>
      </div>

      {/* Image Marquee */}
      <div className="-mt-16 sm:-mt-24 pt-0">
        <ImageMarquee />
      </div>

      {/* We Love Creating Unique Web Design Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600 max-w-4xl">
          We Love Creating Unique Web Design Projects for Our Unique Clients Across Varied Industries...
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-navy-900 font-bold">
          {[
            'Legal & Attorneys',
            'Healthcare & Medical',
            'Real Estate & Construction',
            'Technology & SaaS',
            'E-commerce & Retail',
            'Non-Profits & NGOs',
            'Professional Services',
            'And So Much More!',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="text-navy-900 text-lg font-bold">
            Are You Ready To Be Our Next Success Story?
          </div>
          <NavLink to="/contact" className="mt-10 inline-flex btn btn-primary btn-pill px-8 py-3 text-base">
            Get Started Today!
          </NavLink>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-navy-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How long does it take to build a website?', a: 'The timeline varies based on the scope of the project, but most websites take between 4 to 8 weeks from initial planning to launch.' },
              { q: 'Can I update the content on my own?', a: 'Yes! We build our websites on user‑friendly platforms like WordPress or Webflow, and we provide training so you can manage your content with ease.' },
              { q: 'Will my website be mobile‑friendly?', a: 'Absolutely. Every website we design is fully responsive, ensuring a seamless experience across all devices – from smartphones to desktops.' },
              { q: 'Do you provide website maintenance?', a: 'Yes, we offer ongoing maintenance and support packages to ensure your website stays secure, up‑to‑date, and performant.' },
            ].map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-bold text-navy-900">{faq.q}</h4>
                  <div className={`w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </div>
                {openFaq === idx && (
                  <p className="mt-4 text-gray-700">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
