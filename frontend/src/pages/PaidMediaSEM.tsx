import { NavLink } from 'react-router-dom'

export default function PaidMediaSEM() {
  const platformsLeft = ['Google Ads', 'Facebook', 'LinkedIn', 'Reddit', 'Snapchat', 'Twitter']
  const platformsRight = ['Instagram', 'YouTube', 'Bing', 'AdRoll', 'RevContent', 'And More!']

  const Check = () => (
    <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/skyline.png" alt="Background" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <div className="text-emerald-400 font-semibold">Essential Services</div>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Paid Media & SEM
              </h1>
              <p className="mt-8 text-white/85 max-w-2xl">
                Whether you’re a new business in need of quick results, or an established company looking to increase leads back to your website, paid media and SEM may just be exactly what you need.
              </p>
              <div className="mt-8 flex gap-4">
                <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
                <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is SEM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              What Is SEM
              <br className="hidden sm:block" />
              or Paid Media?
            </h2>
            <p className="mt-6 text-gray-700">
              SEM is the pay‑to‑play version of SEO. Instead of slowly climbing the search results organically, you can pay to
              appear at the top of Google, on social platforms, or in someone’s feed to reach your audience right now.
            </p>
            <p className="mt-4 text-gray-700">
              From pay‑per‑click ads to Facebook, Google, and Instagram campaigns — sometimes it pays to… well… pay.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 right-14 bg-emerald-500 w-28 h-28 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[460px] mx-auto lg:ml-auto">
              <img src="/assets/img/laptop.jpg" alt="Meeting" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>

      {/* SEO vs SEM */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px]">
                <img src="/assets/img/dallas-collage.png" alt="Team" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
                SEO vs SEM And Why
                <br className="hidden sm:block" />
                You Need Both
              </h3>
              <p className="mt-6 text-gray-700">
                SEM can get you customers almost immediately while SEO is still climbing. We often recommend combining both to
                capture near‑term demand and build durable organic growth over time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Where can I promote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Where Can I
              <br className="hidden sm:block" />
              Promote?
            </h3>
            <p className="mt-6 text-gray-700">
              Depending on your industry, there are many platforms that can give you a boost toward meeting your goals and
              getting in front of your desired audience.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-4">
              <div>
                {platformsLeft.map((p) => (
                  <div key={p} className="flex items-start gap-3 py-1">
                    <Check />
                    <div className="font-semibold text-gray-900">{p}</div>
                  </div>
                ))}
              </div>
              <div>
                {platformsRight.map((p) => (
                  <div key={p} className="flex items-start gap-3 py-1">
                    <Check />
                    <div className="font-semibold text-gray-900">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 left-20 bg-emerald-400 w-36 h-36 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[460px] mx-auto lg:mr-0">
              <img src="/assets/img/laptop.jpg" alt="Man at desk" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <div className="relative">
              <img src="/assets/img/skyline.png" alt="Green BG" className="w-full h-[360px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 opacity-95" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 sm:px-10 lg:px-12">
                  <p className="text-center text-sm font-semibold text-white/90">Ready To Get Started?</p>
                  <h4 className="mt-2 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-4xl mx-auto">
                    At JSL, We Can Help You Do the Keyword Research for Your Niche and
                    Develop a Solid SEO Strategy.
                  </h4>
                  <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto">
                    Fill out the contact form below, and we’ll get in touch with you to get the ball rolling! Zurinty Marketing & Web
                    Design proudly serves SEO clients in Nairobi, Kenya and the surrounding areas.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <NavLink to="/contact" className="btn btn-outline-white btn-pill">Contact Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}