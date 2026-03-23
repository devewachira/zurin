import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ImageMarquee from '../components/ImageMarquee'

export default function SEOStrategy() {
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/1.png" alt="Background" className="w-full h-full object-cover" />
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
              SEO Strategy +
              <br />
              Management
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              Search Engine Optimization is a critical component to any digital marketing strategy. Our team implements
              both proven and effective strategies—from technical SEO to on‑page optimizations—to help you get found and
              win organic traffic.
            </p>
            <div className="mt-8 flex gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Strategies That Work */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Zurinty Marketing Uses SEO
              <br />
              Strategies That Actually Work
            </h2>
            <p className="mt-6 text-gray-700">
              We begin each engagement with a comprehensive SEO audit of your site. From there, we develop a roadmap to
              resolve issues and drive sustainable growth over time.
            </p>
            {/* Inline video trigger */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-900">Zurinty Essential Services</span>
              <button
                onClick={() => setOpenVideo(true)}
                className="relative inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition"
                aria-label="Play SEO Strategy video"
              >
                <svg className="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <span className="text-sm font-semibold text-gray-900">Search Engine Optimization</span>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              'Extensive keyword research',
              'High‑quality link building',
              'Keyword‑targeted blog posts & pages',
              'Localized SEO efforts',
              'SEO‑friendly site structure & design',
              'Mobile‑friendly modifications',
              'Site speed optimization',
              'Meta data & accessible coding',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div className="font-semibold text-gray-900 capitalize">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our SEO Audits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-8 left-24 bg-emerald-600 w-28 h-28 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                <img src="/assets/img/portfolio/2.png" alt="SEO audit" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">Our SEO Audits</h3>
              <p className="mt-6 text-gray-700">
                An SEO audit is just as it sounds – it’s an audit (analysis) of your online business’ SEO (factors that affect how easily you are found online). Our SEO audits take into account your website’s technical features, on-page and off-page ranking factors, as well as competition within your industry.
              </p>
              <p className="mt-4 text-gray-700">
                The difference between our SEO audits and the free ones you can scrape together online, is that ours are comprehensive, discerning, and will be explained to you in detail during our meeting. An SEO audit is only as helpful as it is understandable, and we make sure you understand it all.
              </p>
              <p className="mt-4 text-gray-700">
                Our SEO audits serve as a roadmap and game plan as to where your currently at, where we should go next, and how to best get to your ranking and traffic goals. Essentially, any SEO strategy without an SEO audit proceeding it, is partially blind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">Our Strategic Process</h3>
              <p className="mt-6 text-gray-700">
                After strategy, we implement changes across your site—prioritizing the highest‑impact fixes first. As work
                rolls out, you start to see results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-8 right-12 bg-emerald-400/70 w-44 h-44 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                <img src="/assets/img/portfolio/3.png" alt="Strategy" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Full‑bleed */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div className="relative h-[620px]">
          {/* Background image */}
          <img
            src="/assets/img/portfolio/4.png"
            alt="SEO background"
            className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
          />
          {/* Green overlays */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-emerald-400/95 via-emerald-500/95 to-teal-500/95" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-emerald-500/40 mix-blend-multiply" />

          {/* Content */}
          <div className="absolute inset-0 z-20">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
              <div className="text-white">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
                  SEO is a Powerful Tool
                  <br className="hidden sm:block" />
                  for Businesses Online
                </h3>
                <p className="mt-6 max-w-3xl text-white/90">
                  One thing is certain — SEO isn’t going anywhere anytime soon. Over the years SEO has remained a critically
                  important tool when it comes to marketing businesses online. Take a look at the stats below to see what
                  we’re talking about.
                </p>

                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white/95">
                  {[
                    { p: '53%', d: 'of all trackable website traffic comes from organic search.' },
                    { p: '61%', d: 'of B2B marketers say SEO generates more leads than any other channel.' },
                    { p: '70%', d: 'of online marketers agree that SEO is better than PPC for generating sales online.' },
                    { p: '51%', d: 'of smartphone users have discovered a new company while searching on their phone.' },
                  ].map((s) => (
                    <div key={s.p}>
                      <div className="text-3xl md:text-4xl font-extrabold">{s.p}</div>
                      <div className="mt-2 text-sm leading-snug pr-4">{s.d}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-xs text-white/80">
                  <span className="opacity-90">Sources:</span>
                  <a href="#" className="underline mx-2 hover:text-white">Brightedge.com</a>
                  <span className="opacity-70">|</span>
                  <a href="#" className="underline mx-2 hover:text-white">Hubspot: State of Marketing</a>
                  <span className="opacity-70">|</span>
                  <a href="#" className="underline mx-2 hover:text-white">Hubspot: Marketing Statistics</a>
                  <span className="opacity-70">|</span>
                  <a href="#" className="underline mx-2 hover:text-white">Backlinko: Search Engine Ranking</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee (optional for visual continuity) */}
      <div className="-mt-8">
        <ImageMarquee />
      </div>

      {/* Keyword Research Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              The Critical Importance of
              <br className="hidden sm:block" />
              Keyword Research
            </h3>
            <p className="mt-6 text-gray-700">
              Before we start creating your SEO strategy, it’s important to make sure the proper keyword research has been
              done. In short, keyword research identifies the words and phrases already being searched most often within your
              niche by your target audience.
            </p>
          <p className="mt-4 text-gray-700">
              Let’s say you sell tacos (good for you!). Who is searching for tacos and what would they type into Google? Maybe
              they’re searching for phrases like “best tacos near me” or “Mexican restaurants in Nairobi.” If they’re in your
              area, you want to be sure your business appears at the top of that customer’s search results.
            </p>
            <p className="mt-4 text-gray-700">
              Once you know what those words are, you can begin planning content and optimizing pages so your site shows up for
              the terms people are already searching.
            </p>
          </div>
          <div>
          <p className="text-gray-700">
              Or, let’s say the customer is looking for a taco restaurant in Nairobi. They might search for “best tacos in
              Nairobi.” If your taco restaurant is in Nairobi, you want to make sure that your website appears at the top of
              those search results too.
            </p>
            <p className="mt-4 text-gray-700">
              It may sound complicated, but what it really comes down to is this — your business needs to appear in the search
              results for the keywords related to your industry that people are already searching for.
            </p>
            <p className="mt-4 text-gray-700">
              With the right keyword research and SEO strategy, you can outrank competitors in the search engines and bring
              more qualified traffic to your website.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4" onClick={() => setOpenVideo(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="SEO Strategy Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-full w-10 h-10 shadow-lg grid place-items-center"
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
