import { NavLink } from 'react-router-dom'
import ImageMarquee from '../components/ImageMarquee'

export default function PhotographyVideo() {
  const steps = [
    {
      title: 'Development & Planning',
      copy: "The process begins with development and planning. We'll start by getting to know you, your business, and your goals. From there, we'll create a plan for your photography and video production project that aligns with your objectives and resonates with your audience."
    },
    {
      title: 'Production',
      copy: "Once the plan is in place, we'll start production! Our team of professionals will handle all aspects of the shoot, from lighting and sound to directing and capturing the perfect shots. We use high-quality equipment and techniques to ensure your brand is represented in the best possible light."
    },
    {
      title: 'Post-Production',
      copy: "After the shoot, we'll move into post-production. This is where the magic happens! Our editors will work their magic to bring your photography and video production project to life, from color grading and sound design to adding graphics and special effects."
    }
  ]

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/co2.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#141a2a]/90" />
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
          <div className="max-w-3xl">
            <div className="text-emerald-400 font-semibold">Essential Services</div>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Photography &
              <br />
              Video Production
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              High‑quality photography and video production help your brand stand out and connect at a deeper, more
              personal level. From headshots and website imagery to animated videos and promotional spots, we create
              visuals that tell your story and move people to act.
            </p>
            <div className="mt-8 flex gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Capturing Your Brand in Motion & Still Images
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Photography and video production are essential elements of your digital marketing strategy. They help you tell your brand's story in a way that resonates with your audience and builds trust and credibility.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you need headshots for your team, product photography for your e-commerce site, or promotional videos for your brand, we'll help you create visuals that stand out and drive results.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <img 
              src="/assets/img/portfolio/dr1.png" 
              alt="Photography session" 
              className="relative rounded-2xl shadow-2xl ring-1 ring-black/10 w-full max-w-lg mx-auto object-cover aspect-[4/3]" 
            />
          </div>
        </div>
      </div>

      {/* Why Photography and Video Production? */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy-900/10 rounded-full blur-3xl" />
              <img 
                src="/assets/img/portfolio/dr2.png" 
                alt="Video production set" 
                className="relative rounded-2xl shadow-2xl ring-1 ring-black/10 w-full max-w-lg mx-auto object-cover aspect-[4/3]" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
                Why Photography and Video Production?
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                In today's digital world, attention is the new currency. Photography and video production help you capture that attention and keep it. They help you stand out in a crowded marketplace and connect with your audience on a more personal level.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Build trust and credibility with high-quality visuals',
                  'Increase engagement on your website and social media',
                  'Tell your brand story in a more compelling way',
                  'Humanize your brand and connect with your audience',
                  'Improve your SEO and drive more organic traffic',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Proven Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-600">Our Proven Process</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We follow a proven three-step process to ensure that every photography and video production project is a success.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <NavLink to="/contact" className="mt-8 inline-flex btn btn-primary btn-pill px-6 py-3">Request A Quote</NavLink>
        </div>
      </div>

      {/* Image Marquee */}
      <ImageMarquee />

      {/* Video Content Grid */}
      <div className="bg-[#141a2a] text-white py-20 sm:py-28 overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-4">Our Specialties</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Photography & Video Production Services
              </h2>
              <div className="mt-10 grid gap-6">
                {[
                  { title: 'Commercial Photography', text: 'Capturing high-quality images for your website and marketing materials.' },
                  { title: 'Video Production', text: 'Creating compelling promotional videos, social media content, and more.' },
                  { title: 'Animation & Graphics', text: 'Adding dynamic animations and special effects to your video projects.' },
                  { title: 'Aerial Photography & Video', text: 'Capturing stunning aerial footage with high-quality drones.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-emerald-400">{item.title}</h3>
                    <p className="mt-2 text-white/80 leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
              <NavLink to="/contact" className="btn btn-primary btn-pill px-6 py-3 mt-8">Request A Quote</NavLink>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
              <img 
                src="/assets/img/portfolio/01.png" 
                alt="Production equipment" 
                className="relative rounded-2xl shadow-2xl ring-1 ring-white/10 w-full max-w-md mx-auto object-cover aspect-[4/5]" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Capture Your Brand in Motion? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-navy-900/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Ready to Capture Your Brand in Motion?</h2>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              Whether you need headshots, product photography, or promotional videos, our team is ready to help you capture your brand in the best possible light.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <NavLink to="/portfolio" className="btn btn-outline-white btn-pill">See Our Work</NavLink>
              <NavLink to="/contact" className="btn bg-white text-emerald-600 hover:bg-gray-100 btn-pill font-semibold">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Start your Next Project with JSL Today! */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 left-24 bg-emerald-600 w-28 h-28 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img src="/assets/img/portfolio/10.png" alt="Final project meeting" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Start your Next Project with Zurinty Today!
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We're passionate about helping businesses stand out and drive results through high-quality photography and video production. Give us a call at 254743573360 or fill out the form below to get started right away. We look forward to working with you!
            </p>
            <NavLink to="/contact" className="mt-8 inline-flex btn btn-primary btn-pill px-8 py-3">Start a Project</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
