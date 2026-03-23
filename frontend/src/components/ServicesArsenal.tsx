function Icon({ name }: { name: string }) {
  const cls = 'h-6 w-6 stroke-current'
  switch (name) {
    case 'web':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M8 8l-4 4 4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8l4 4-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20h4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'brand':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <path d="M12 6v12M6 12h12" strokeWidth="2" />
        </svg>
      )
    case 'seo':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="10" cy="10" r="6" strokeWidth="2" />
          <path d="M14.5 14.5L20 20" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'content':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="5" y="4" width="14" height="16" rx="2" strokeWidth="2" />
          <path d="M8 8h8M8 12h8M8 16h6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'digital':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M4 12h6l3 3V9l-3 3H4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="12" r="2" strokeWidth="2" />
        </svg>
      )
    case 'photo':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="6" width="18" height="14" rx="2" strokeWidth="2" />
          <circle cx="12" cy="13" r="3" strokeWidth="2" />
          <path d="M7 6l2-2h6l2 2" strokeWidth="2" />
        </svg>
      )
    case 'social':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M7 11v8M7 11a4 4 0 118 0v8M3 11h18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
          <path d="M3 7l9 6 9-6" strokeWidth="2" />
        </svg>
      )
    case 'analytics':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M4 20V6m0 14h16M8 20v-6M12 20v-10M16 20v-4" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 13l3-3 3 2 4-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'pr':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M3 10v4a2 2 0 002 2h3l5 3V5l-5 3H5a2 2 0 00-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'va':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="12" cy="7" r="3" strokeWidth="2" />
          <path d="M5 20v-1a6 6 0 0114 0v1M4 12h2M18 12h2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <path d="M8 12h8M12 8v8" strokeWidth="2" />
        </svg>
      )
  }
}

export default function ServicesArsenal() {
  const items = [
    {
      key: 'web',
      title: 'Web Design & Development',
      desc: 'Your web design is the first impression for your online customers—make sure it’s a good one.',
      to: '/services/website-design',
    },
    { key: 'brand', title: 'Brand Development', desc: 'From logos, branded material, messaging, and more, building a cohesive brand is critical.', to: '/services/brand-development' },
    {
      key: 'seo',
      title: 'Search Engine Optimization',
      desc: 'SEO is the foundation of every digital marketing or web design plan. We help create a strategy.',
      to: '/services/seo-strategy',
    },
    { key: 'content', title: 'Content Marketing', desc: 'Publishing valuable, consistent content is paramount in representing your brand.', to: '/services/content-marketing' },
    { key: 'digital', title: 'Digital Marketing', desc: 'Advertising to lead generation—have a solid plan in place for online success.', to: '/services/digital-marketing' },
    {
      key: 'photo',
      title: 'Photography & Video Production',
      desc: 'Bring your vision to life through compelling and industry‑specific visual media.',
      to: '/services/photography-video',
    },
    { key: 'email', title: 'Email Marketing', desc: 'With excellent ROI, lifecycle email is a smart investment.', to: '/services/email-marketing' },
    { key: 'paid', title: 'Paid Media & SEM', desc: 'Grow online with both Search Engine Optimization and paid media.', to: '/services#paid' },
    { key: 'analytics', title: 'Data Analytics', desc: 'Dashboards, attribution, and insights for smarter decisions.', to: '/services#analytics' },
    { key: 'pr', title: 'Public Relations (PR)', desc: 'Earned media, press outreach, and reputation management.', to: '/services#pr' },
    { key: 'ai', title: 'AI Automations', desc: 'Automate workflows with AI agents and integrations.', to: '/services#ai' },
    { key: 'va', title: 'Virtual Assistant', desc: 'Flexible support for marketing ops and content tasks.', to: '/services#va' },
  ]

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#111737] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="uppercase text-emerald-400 font-semibold tracking-widest">Our Services</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Zuriminty Has an Arsenal of Solutions at Your Disposal for All of Your Digital Marketing Needs.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 text-emerald-400 grid place-items-center">
                <Icon name={it.key} />
              </div>
              <h3 className="mt-4 text-2xl font-bold">{it.title}</h3>
              <p className="mt-3 text-white/80 max-w-md">{it.desc}</p>
              <a href={it.to || '/services'} className="mt-4 inline-flex items-center text-emerald-400 font-semibold">
                Learn More <span aria-hidden className="ml-2">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
