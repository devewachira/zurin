import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function DigitalMarketing() {
  const [openVideo, setOpenVideo] = useState(false)
  const [step, setStep] = useState(0)
  const steps = [
    {
      label: 'Step One:',
      title: 'Initial Analysis + Research',
      blurb:
        "Our process is actually quite simple. We begin developing each of our digital marketing strategies by sitting down with you one‑on‑one to fully discover your marketing needs. We take a look at your strengths and weaknesses as a brand, along with potential opportunities and challenges that we might face along the way. We'll also dive into your current analytics and see what strategies you currently have in place. This helps us to determine what's working for you and what isn't.",
    },
    {
      label: 'Step Two:',
      title: 'Establish Marketing Goals',
      blurb:
        "Once we've completed our initial analysis and research, and we’ve gotten a clear picture of your current web presence, your competition, and what you’re looking for, we'll move on to establishing marketing goals. These goals are important because they will help us measure the success of your digital marketing campaign and also let us know if we need to make any tweaks as we go along. We focus on establishing SMART goals, meaning goals that are specific, measurable, attainable, relevant, and timely.",
    },
    {
      label: 'Step Three:',
      title: 'Define the Digital Strategy',
      blurb:
        "After the marketing goals have been set, we’ll take a look at the various digital marketing strategies available and decide which ones would be most beneficial to your unique digital marketing needs. Your strategy might include anything from SEO and PPC ad campaigns to blogging, content marketing and social media marketing. Very likely, we will recommend some combination based on your specific marketing needs and goals. We always want to make sure you see results, which is why suggestions may vary.",
    },
    {
      label: 'Step Four:',
      title: 'Set the Strategy in Motion',
      blurb:
        "What happens after the strategy is defined? The Zurinty digital marketing team gets started doing the heavy lifting — implementing the strategy across your various online platforms. It usually takes approximately two weeks — one month to get everything initially set up, and then from there we will constantly monitor results and make tweaks to the strategy and plan as needed to get you the best results. Our number one goal is for you and your business to be successful online, and we won’t rest until that happens!",
    },
  ] as const
  const canPrev = step > 0
  const canNext = step < steps.length - 1
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
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
            <img src="/assets/img/portfolio/co1.png" alt="JSL" className="h-10 w-10 mb-6" />
            <div className="text-emerald-400 font-semibold tracking-wide">Essential Services</div>
            <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight">Digital Marketing</h1>
            <p className="mt-6 text-white/85 leading-relaxed">
              Connecting with clients and potential customers online is what digital marketing is all about. Having a solid
              digital marketing strategy for your brand is extremely important in today’s increasingly digital world. However,
              creating a digital marketing strategy can be a bit daunting, given that there is so much at stake and so much can go
              into it. At Zurinty, we’ll work with you to formulate an individualized and hyper‑targeted plan that will work perfectly
              for your unique marketing needs.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-emerald-500 text-4xl sm:text-5xl font-extrabold">Digital Marketing That
              <br />Works
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Having a solid digital marketing strategy for your brand is extremely important in today’s increasingly digital
              world. However, creating a digital marketing strategy can be a bit daunting, given that there is so much at stake and
              so much can go into it.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At Zurinty Marketing, we are passionate about working with each of our clients to formulate an individualized and
              hyper‑targeted plan that will work perfectly for their needs and their business.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/img/portfolio/co2.png"
              alt="Digital marketing team"
              className="rounded-2xl shadow-xl border w-full max-w-[520px] lg:ml-auto"
            />
          </div>
        </div>
      </section>

      {/* Video teaser */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button
              className="group inline-flex items-center gap-4"
              onClick={() => setOpenVideo(true)}
            >
              <span className="relative inline-grid h-16 w-16 place-items-center rounded-full ring-2 ring-emerald-500">
                <span className="absolute inset-0 rounded-full ring-2 ring-emerald-500/50 animate-ping" />
                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white text-emerald-600 shadow">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="font-semibold text-gray-800">
                <span className="text-gray-500">JSL Essential Series</span> · Digital Marketing
              </span>
            </button>
          </div>
        </div>
      </div>

      {openVideo && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&modestbranding=1&rel=0"
              title="Digital Marketing"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute -top-3 -right-3 rounded-full bg-white text-gray-700 shadow p-2"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Strategies section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-28 w-40 rounded-2xl bg-emerald-400" />
            <img
              src="/assets/img/portfolio/dr1.png"
              alt="Team collaborating"
              className="relative rounded-2xl shadow-xl border w-full max-w-[560px]"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              Some of the Strategies We Utilize in Our
              <br />Individualized Digital Marketing Plans Include:
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-x-12 gap-y-3 text-gray-700">
              {[
                'Content Marketing',
                'Email Marketing',
                'PPC + Social Media Ads',
                'Social Media Marketing',
                'Strategic Blogging',
                'SEO Strategy',
                'SEM Strategy',
                'Inbound Marketing',
                'Lead Generation',
                'And More!',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20 8l-1.4-1.4z" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-gray-600 font-semibold">A Customized Approach</div>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Our <span className="text-emerald-500">Digital Marketing</span>
              <br />Process
            </h2>
            <p className="mt-6 text-gray-700 max-w-xl">
              No two companies are alike, so we don’t expect our clients to all have the same goals or needs—that’s why we customize
              and individualize each digital marketing strategy and plan to cater to you.
            </p>
          </div>

          <div>
            <div className="rounded-2xl bg-white shadow-2xl border p-6 sm:p-8">
              <div className="text-emerald-600 font-semibold">{steps[step].label}</div>
              <h3 className="mt-1 text-2xl font-extrabold text-gray-900">{steps[step].title}</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">{steps[step].blurb}</p>
              <hr className="my-6" />
              <div className="flex items-center justify-between">
                <button
                  className={`inline-flex items-center gap-2 font-semibold ${canPrev ? 'text-gray-900' : 'text-gray-400'}`}
                  onClick={() => canPrev && setStep((s) => s - 1)}
                  disabled={!canPrev}
                >
                  <span className={`grid h-8 w-8 place-items-center rounded-full border ${canPrev ? 'border-emerald-500 text-emerald-600' : 'border-gray-300 text-gray-300'}`}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </span>
                  Previous
                </button>
                <button
                  className={`inline-flex items-center gap-2 font-semibold ${canNext ? 'text-gray-900' : 'text-gray-400'}`}
                  onClick={() => canNext && setStep((s) => s + 1)}
                  disabled={!canNext}
                >
                  Next
                  <span className={`grid h-8 w-8 place-items-center rounded-full border ${canNext ? 'border-emerald-500 text-emerald-600' : 'border-gray-300 text-gray-300'}`}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 12z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials split */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl p-10 bg-gradient-to-br from-[#0f1630] to-[#1c275a] text-white shadow-2xl">
              <div className="text-emerald-400 text-4xl">“</div>
              <p className="mt-4 leading-relaxed text-white/90">
                Zurinty helped me meet my SEO goals. They beat expectations and I saw results much sooner than anticipated. If you need help with SEO, Zurinty is definitely the company for you!
              </p>
              <div className="mt-6 font-semibold">Bryce L.</div>
            </div>
          </div>
          <div>
            <div className="text-gray-600 font-semibold">Our Accolades</div>
            <h2 className="mt-2 text-4xl font-extrabold">
              <span className="text-emerald-500">Testimonials</span>
            </h2>
            <p className="mt-4 text-gray-700 max-w-xl">
              We love putting beautiful websites and collateral out into the world, and though we don’t do it for the praise — it doesn’t hurt. See what some of our clients have to say, or reach out to us for references!
            </p>
            <NavLink to="/portfolio" className="mt-6 inline-flex btn btn-primary btn-pill">Read More Reviews</NavLink>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src="/assets/img/laptop.jpg" alt="background" className="absolute inset-0 h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-500/90" />
            <div className="relative text-center text-white px-6 py-20 sm:py-28">
              <div className="font-semibold text-white/90">Ready to Get Started?</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Take Your Brand to the Next Level With
                <br />a Growth‑Focused Digital Marketing
                <br />Strategy
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/90">
                We’ve worked with clients in a variety of industries, so we have experience delivering amazing results for all sorts of clients, all across the board. Give us a call at 0743-573-360 or fill out the contact form below to get started right away. We look forward to working with you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
