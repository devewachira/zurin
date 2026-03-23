import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function AiAutomations() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const strategyItems = [
    'WhatsApp Agent – Your AI Customer Service Rep',
    'Voice Agent – AI Phone Assistant',
    'Website Integration – Smart Lead Capture',
    'Email Automation – Smart Inbox Management',
    'AI Training & Enablement – Individual + Corporate',
    'Custom Workflow Automation – For Complex Needs',
    'Social Media AI Manager – Intelligent Posting & Engagement',
    'AI Chatbot for E-Commerce – 24/7 Sales Assistant',
    'Document Processing AI – Smart Data Extraction',
    'Predictive Analytics AI – Smarter Business Decisions!'
  ]

  return (
    <section>
      {/* Hero */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-white py-16 sm:py-24">
        <div className="absolute inset-0">
          <img src="/assets/img/portfolio/4.png" alt="Background" className="w-full h-full object-cover" />
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
              AI Automations
            </h1>
            <p className="mt-8 text-white/85 max-w-2xl">
              Having a clear strategy is critical for AI automations. Well-designed workflows collect, process, 
              and act on data efficiently—whether through emails, notifications, task automation, reporting, or multi-step decision logic.
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
              The Future Doesn’t Wait. "Automation Runs the Show"
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
               In a world where speed and accuracy define success, manual workflows are a roadblock. 
               AI automations take over repetitive tasks, streamline operations, and keep work flowing seamlessly.


              </p>
              <p>
                Old habits like manual approvals, scattered processes, and repetitive reporting slow teams down. 
Intelligent automation simplifies, accelerates, and transforms the way work gets done.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-full md:w-[420px] lg:w-[480px] mx-auto lg:ml-auto">
              <img src="/assets/img/portfolio/co1.png" alt="Team creating content" className="w-full h-full object-cover aspect-[3/4]" />
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
                <img src="/assets/img/portfolio/co2.png" alt="Content workshop" className="w-full h-full object-cover aspect-[3/4]" />
              </div>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Explore Our AI Solutions At Zurinty Marketing & Web Design
              </h3>
              <p className="mt-6 text-gray-700">
                Whether it’s automating customer interactions, managing leads, sending targeted communications, or analyzing data for smarter decisions, our platform adapts to your business needs. From small enterprises to growing organizations, 
                our AI solutions empower you to work faster, smarter, and more efficiently—ensuring every customer touchpoint is seamless and impactful.
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
            Empowering African SMEs with Smart Automation
          </h3>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl ">
            Small and medium-sized enterprises across Africa face unique challenges—limited resources, growing customer demands, and intense competition. Our platform brings enterprise-grade AI automation within reach, 
            enabling businesses of any size to streamline operations, improve efficiency, and focus on growth without the burden of costly infrastructure.
          </p>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl ">
Designed with accessibility and affordability in mind, our tools don’t compromise on capability. From automated customer service and lead management to workflow optimization and data-driven insights, 
SMEs can leverage the same powerful technology that large enterprises use—without the steep learning curve or budget constraints.
          </p>
          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-xl ">
We understand that technology adoption can be daunting, which is why we provide hands-on support every step of the way. Our team works closely with your business to implement solutions tailored to your needs, 
ensuring you get maximum value from AI automation while building long-term operational resilience.
          </p>
        </div>
      </div>

      {/* Blogging split section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141a2a] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 font-semibold">Automation</div>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Smart Workflow Automation
                <br />
                + AI Solutions
              </h2>
              <p className="mt-8 text-white/85">
                With our AI automation services, we help businesses streamline repetitive tasks, improve efficiency, and deliver better customer experiences. 
                From handling customer inquiries to managing leads and optimizing internal workflows, our tools take care of the routine so your 
                team can focus on what truly matters. You can start with a single automation, 
                but the real power comes from building a suite of smart workflows that work together seamlessly.
              </p>
              <p className="mt-4 text-white/85">
                Many of our clients choose to implement multiple automations across departments—sales, customer support, marketing, and operations. Once the ball gets rolling, 
                the time savings and productivity gains quickly add up, letting businesses respond faster, reduce errors, and scale without adding headcount.
              </p>
              <p className="mt-4 text-white/85">
               Whether you’re a startup, an SME, or a larger enterprise, we design solutions tailored to your processes, ensuring each automation fits naturally 
               into your workflow and delivers measurable results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-10 bg-gradient-to-br from-emerald-500 to-teal-600 w-44 h-40 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/img/portfolio/dr1.png"
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
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">AI Automations = Operational Excellence</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                AI automations are a crucial part of scaling your business efficiently. They help you streamline repetitive tasks, reduce errors, and free your team to focus 
                on high-value work. By implementing smart workflows, you position your business as reliable, responsive, and technologically forward—building 
                trust with both customers and employees.
              </p>
              <NavLink to="/blog" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                Discover How AI Can Transform Your Business!
                <svg className="ml-2 w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                </svg>
              </NavLink>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-navy-900">AI Automations + Efficiency = Growth</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From an operational standpoint, implementing AI automations across key workflows—while targeting the right processes—can help your business save time, 
                reduce errors, and scale faster. Basically, the more repetitive tasks you automate intelligently, the more your team can focus on high-value work that 
                drives growth.
              </p>
              <NavLink to="/services/seo-strategy" className="mt-6 inline-flex items-center font-semibold text-navy-900 hover:text-emerald-600">
                Learn More About AI Automation
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
                src="/assets/img/portfolio/dr2.png"
                alt="Typing on laptop"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="text-emerald-500 font-semibold">AI Automations</div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-emerald-600">
              Smart Automations
              <br />
             That Work for You
            </h2>
            <p className="mt-6 text-gray-700">
              Running a business isn’t just about ideas—it’s about execution. Repetitive tasks, slow workflows, and missed opportunities can hold your team back. 
              AI automations help you take care of the routine, letting you focus on what really matters: growing your business and delighting your customers.
            </p>
            <p className="mt-4 text-gray-700">
              Automation isn’t just about saving time—it’s about working smarter, reducing errors, and creating consistency across every process. 
              We can help you harness the power of AI to streamline operations, respond faster to customers, and scale without adding overhead.
            </p>

            <div className="mt-10">
              <div className="text-xl font-extrabold text-navy-900">
               Some AI Automation Areas We Can Help You With Include:
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    'Customer Service Chatbots & WhatsApp Agents',
                    'Voice Assistants & Phone Automation',
                    'Email Automation & Smart Inbox Management',
                    'Lead Capture & Qualification',
                    'Workflow Automation & Task Routing',
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
                    'Predictive Analytics & Insights',
                    'Appointment Booking & Reservation Management',
                    'Data Extraction & Document Processing',
                    'Social Media Posting & Engagement Automation',
                    'Custom Integrations & Enterprise Workflows',
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
              src="/assets/img/portfolio/01.png"
              alt="People collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/95 via-emerald-500/90 to-teal-500/95 mix-blend-multiply" />

            {/* Content */}
            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-white text-center">
              <div className="text-sm font-extrabold uppercase tracking-wider text-white/90">Ready To Get Started?</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Jump Start Your Marketing Efforts
                <br />
                With Intelligent AI Automations.
                <br className="hidden sm:block" />
              
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-white/95 text-sm sm:text-base leading-relaxed">
                Whether you’re looking to automate customer service, streamline workflows, or implement a full suite of AI solutions, our team is ready to help on your next big project. Give us a call at 254743573360 or fill out the form below to get started right away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ (short) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: 'What types of AI automations do you offer?', a: 'Customer service chatbots, voice assistants, lead capture, email automation, workflow automation, predictive analytics, and custom integrations.' },
{ q: 'How do you measure automation success?', a: 'We track time saved, error reduction, task completion rates, response times, and overall operational efficiency with dashboards tied to your goals.' },
{ q: 'Can your automations match our business processes?', a: 'Yes. We analyze your workflows and customize automations to fit your unique operations perfectly.' },
{ q: 'Do you provide automation setup only?', a: 'We can deliver full setup, ongoing management, optimization, or consulting based on your business needs.' },
{ q: 'Is AI automation difficult to integrate?', a: 'Not at all. Our team ensures smooth integration with your existing systems, tools, and platforms.' },
{ q: 'Can automations handle multiple channels?', a: 'Yes. We can automate processes across email, messaging apps, phone systems, social media, and internal tools.' },
{ q: 'Do you provide training for our team?', a: 'Absolutely. We offer workshops, tutorials, and hands-on guidance so your team can leverage automations effectively.' },
{ q: 'How secure is our data?', a: 'Security is a top priority. All automations follow strict protocols and integrate with secure platforms to protect sensitive information.' },
{ q: 'Can automations scale as we grow?', a: 'Yes. Our solutions are designed to grow with your business, handling more tasks, users, and workflows without extra overhead.' },
{ q: 'Do you offer ongoing support?', a: 'Yes. We provide continuous support, monitoring, and optimization to ensure your automations keep performing at their best.' },
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
