import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function VirtualAssistant() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const strategyItems = [
    'Executive & Personal Assistance',
    'Administrative Support',
    'Content Creation & Marketing',
    'Social Media Strategy & Management',
    'Graphic Design & Branding',
    'Web Development & Technical Support',
    'Online Advertising & Campaigns',
    'Creative Support',
    'Strategic Support',
    'Specialized Consulting'
  ]

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/10.png" alt="Background" className="w-full h-full object-cover" />
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
             Virtual Assistant
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              Your mission matters too much to get buried in admin tasks. 
              Zurinty Marketing & Web Design Virtual Assistants connects you with exceptional  VAs who understand your goals and take pride in helping you create a lasting impact.
            </p>
            <div className="mt-8 flex gap-4">
              <NavLink to="/portfolio" className="btn btn-primary btn-pill">Our Work</NavLink>
              <NavLink to="/contact" className="btn btn-outline-white btn-pill">Request a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Content Is King */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              WE BELIEVE IN MAKING TIME FOR WHAT MATTERS.
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                Leading a growing organization requires both vision and attention to detail. Managing operations can overtake your calendar and cloud your focus, 
                leading to overwhelm and burnout. Our remote team of virtual professionals handles the daily tasks that drain your energy and slow your progress. 
                We’re here to provide the support you need to keep moving forward – while we take care of the rest. Leading a purpose-driven organization 
                requires both vision and impact. 
                While you’re focused on creating change, managing daily operations can overtake your calendar and cloud your mission. That’s where we come in.
              </p>
              <p>
                We’re here for the Do Gooders – the Reformers, Helpers, and Changemakers. Our remote team of virtual professionals handles the daily tasks that drain your 
                energy, giving you space to drive real impact. Whether you’re a nonprofit, social enterprise, or mission-driven innovator, we provide the support you need 
                to keep moving forward while we take care of the rest.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[480px] mx-auto lg:ml-auto">
              <img src="/assets/img/portfolio/1.png" alt="Team creating content" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
          </div>
        </div>
      </div>

      {/* Enter JSL Marketing & Web Design */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute -top-6 right-28 bg-emerald-500 w-24 h-24 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[520px]">
                <img src="/assets/img/portfolio/2.png" alt="Content workshop" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
                Zurinty Marketing & Web Design – Virtual Assistant Services
              </h3>
              <p className="mt-6 text-gray-700">
                We handle the heavy lifting for your business operations so you can focus on growth and strategy. W
                e’ll learn your goals, understand your workflow, and provide support that keeps your business running smoothly and efficiently.
              </p>
              <div className="mt-8">
                <div className="text-lg font-bold text-navy-900">Your Personal Content Marketing Strategy Might Include:</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {strategyItems.map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="font-semibold text-gray-900">{i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Heavy Hitters */}
      <div className="py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div className="text-base md:text-lg font-semibold text-gray-900 mb-4">The Heavy Hitters</div>
          <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-normal text-emerald-600 mb-6">
           Why VA + AI is a Smarter Investment
          </h3>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl ">
            AI can do a lot, but it can’t do everything. That’s where we come in.
          </p>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl ">
            By combining intelligent tools with real human insight, our virtual assistants amplify your productivity without sacrificing strategy, personalization, 
            or leadership capacity. Think of it as the ultimate power-up for your business: repetitive tasks get handled faster, decisions become easier, 
            and your time is freed to focus on growth and vision.
          </p>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl ">
           With VA + AI, you’ll reclaim hours, reduce mental clutter, and delegate with confidence—knowing that every task is managed thoughtfully, efficiently, and with a human touch that technology alone can’t replicate. 
          </p>
        </div>
      </div>

      {/* Blogging split section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141a2a] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 font-semibold">Blogging</div>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Streamlined Support 
                <br />
                + Operational Efficiency
              </h2>
              <p className="mt-8 text-white/85">
                Through our Virtual Assistant services at Zurinty, we help you manage the day-to-day tasks that slow down your business so you can focus on growth. 
                We can handle one-off projects, but it’s usually most effective to have consistent support that keeps your operations running smoothly.
              </p>
              <p className="mt-4 text-white/85">
                In fact, many of our clients choose ongoing VA support, which allows them to reclaim hours, reduce stress, and maintain steady progress on key initiatives.
              </p>
              <p className="mt-4 text-white/85">
                Our talented team of virtual assistants has supported businesses across a wide range of industries, and chances are good that we’ve managed workflows and tasks similar to yours.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-10 bg-gradient-to-br from-emerald-500 to-teal-600 w-44 h-40 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/img/portfolio/3.png"
                  alt="Blogging collaboration"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogging cards */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="absolute inset-x-0 top-0 h-72 bg-[#141a2a]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Virtual Assistance = Time & Efficiency</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
               A skilled Virtual Assistant is a crucial part of growing your business efficiently. They help you reclaim hours, streamline your operations, and stay on top of tasks so you can focus on leadership and growth.

By delegating administrative, operational, and routine responsibilities, you establish a system that works for you—letting you lead with strategy while your VA keeps everything running smoothly behind the scenes.
              </p>
              <NavLink to="/blog" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                Experience the Difference a VA Can Make!
                <svg className="ml-2 w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                </svg>
              </NavLink>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Virtual Assistance + Efficiency = Business Growth</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
               From an operational standpoint, having a skilled Virtual Assistant manage your administrative tasks, scheduling, and daily workflows can help your business run smoother and more efficiently over time. Basically, the more consistent support you have handling routine tasks, the more time you free up to focus on strategy, growth, and leadership.
              </p>
              <NavLink to="/services/seo-strategy" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
               Learn More About How a VA Can Transform Your Workflow
                <svg className="ml-2 w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Copywriting split + checklist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 left-24 bg-emerald-500 w-28 h-28 rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <img
                src="/assets/img/portfolio/4.png"
                alt="Typing on laptop"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="text-emerald-500 font-semibold">VA</div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Virtual Assistance


              <br />
             Skilled Support for the Win
            </h2>
            <p className="mt-6 text-gray-700">
              Running a business isn’t just about ideas—you also need time, organization, and consistent execution to bring those ideas to life. A Virtual Assistant helps you handle the day-to-day tasks that keep your business moving, so you can focus on strategy, growth, and leadership.
            </p>
            <p className="mt-4 text-gray-700">
              The impact of a skilled VA is powerful. We can help you reclaim hours, streamline operations, and create systems that work for you—giving you the freedom to focus on what matters most.
            </p>

            <div className="mt-10">
              <div className="text-xl font-extrabold text-navy-900">
               Some Virtual Assistant Services We Can Help You With Include:
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    'Email & Calendar Management',
                    'Project Management & Task Tracking',
                    'Travel & Appointment Booking',
                    'Data Entry & Document Management',
                    'Customer Support & HR Assistance',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div className="font-semibold text-gray-900">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    'Bookkeeping & Financial Tracking',
                    'Social Media Scheduling & Monitoring',
                    'Online Tools & Platform Management',
                    'Research & Reporting',
                    'Personal Assistance & Workflow Optimization',
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
        </div>
      </div>

      {/* CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            {/* Background image */}
            <img
              src="/assets/img/portfolio/co1.png"
              alt="People collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/95 via-emerald-500/90 to-teal-500/95 mix-blend-multiply" />

            {/* Content */}
            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-white text-center">
              <div className="text-sm font-extrabold uppercase tracking-wider text-white/90">Ready To Get Started?</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Jump Start Your Productivity
                <br />
                With a Skilled Virtual Assistant by 
                <br className="hidden sm:block" />
                Your Side.
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/95 text-sm sm:text-base leading-relaxed">
                Whether you need ongoing administrative support, help managing projects, or assistance with day-to-day operations, our team is ready to help your business run smoothly and efficiently. Give us a call at 254743573360 or fill out the form below to get started today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ (short) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
    q: 'What tasks can a Virtual Assistant handle?', 
    a: 'Email management, calendar scheduling, data entry, customer support, bookkeeping, social media assistance, research, and more—customized to your business needs.' 
  },
  { 
    q: 'How do you ensure tasks are completed efficiently?', 
    a: 'We use project management tools, clear workflows, and regular check-ins to keep everything on track and aligned with your priorities.' 
  },
  { 
    q: 'Can your VA adapt to our business processes?', 
    a: 'Absolutely. We learn your systems and preferences to seamlessly integrate and support your existing workflows.' 
  },
  { 
    q: 'Do you provide ongoing support or only one-time assistance?', 
    a: 'Both options are available. You can hire a VA for a single project, or retain ongoing support for long-term productivity and operational continuity.' 
  }
          ].map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="bg-gray-100 hover:bg-gray-200 rounded-2xl p-6 text-left transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-bold text-navy-900 text-lg pr-4">{faq.q}</h4>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {openFaq === idx ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    )}
                  </svg>
                </div>
              </div>
              {openFaq === idx && (
                <p className="mt-4 text-gray-700">{faq.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
