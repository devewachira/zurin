import { NavLink } from 'react-router-dom'

const services = [
  { title: 'Website Design & Development', desc: 'Make a great first impression with user‑friendly design.', to: '/services/website-design' },
  { title: 'Brand Development', desc: 'Messaging, visuals, and cohesive brand systems.', to: '/services/brand-development' },
  { title: 'Search Engine Optimization', desc: 'Technical + on‑page SEO to drive organic traffic.', to: '/services/seo-strategy' },
  { title: 'Content Marketing', desc: 'Plan, produce, and promote content that converts.', to: '/services/content-marketing' },
  { title: 'Photography & Video', desc: 'Compelling visuals to tell your story.', to: '/services/photography-video' },
  { title: 'Digital Marketing', desc: 'Integrated cross‑channel campaigns that grow demand.', to: '/services/digital-marketing' },
  { title: 'Email Marketing', desc: 'Lifecycle campaigns with measurable ROI.', to: '/services/email-marketing' },
  { title: 'Paid Media & SEM', desc: 'Predictable growth via paid search and social.', to: '/services/paid-media' },
  { title: 'Data Analytics', desc: 'Dashboards, attribution, and insights for smarter decisions.', to: '/services/data-analytics' },
  { title: 'Public Relations (PR)', desc: 'Earned media, press outreach, and reputation management.', to: '/services/public-relations' },
  { title: 'AI Automations', desc: 'Automate workflows with AI agents and integrations.', to: '/services/ai-automations' },
  { title: 'Virtual Assistant', desc: 'Flexible support for marketing ops and content tasks.', to: '/services/virtual-assistant' },
]

export default function ServicesMegaMenu({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1000px] max-w-[92vw] rounded-2xl border border-gray-200 bg-white shadow-2xl z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {services.map((s) => (
          <NavLink
            key={s.title}
            to={s.to}
            className="group rounded-xl p-4 hover:bg-emerald-500/10 transition"
            onClick={onClose}
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500/15">•</span>
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-emerald-700">{s.title}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
              </div>
            </div>
          </NavLink>
        ))}
        <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 flex flex-col justify-between">
          <div>
            <div className="font-extrabold text-xl">Ready to Start?</div>
            <p className="mt-2 text-white/90">Reach out to our team today. We’re happy to answer questions.</p>
          </div>
          <NavLink to="/contact" className="mt-6 inline-flex items-center font-semibold">
            Get in touch
            <span aria-hidden className="ml-2">→</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
