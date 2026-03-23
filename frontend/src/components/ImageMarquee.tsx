import { NavLink } from 'react-router-dom'
import { PORTFOLIO_ITEMS } from '../data/portfolio'

export default function ImageMarquee() {
  const marqueeItems = PORTFOLIO_ITEMS

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row justify-between items-end gap-6">
        <div>
           <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">Recent Project Showcases</h2>
           <p className="mt-2 text-gray-500 text-lg">A glimpse into the digital experiences we've crafted.</p>
        </div>
        <NavLink to="/portfolio" className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-2 group">
           View All Projects
           <span className="group-hover:translate-x-1 transition-transform">→</span>
        </NavLink>
      </div>

      <div className="relative">
        {/* Inline keyframes for seamless RTL scroll */}
        <style>{`
          @keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
        <div
          className="flex gap-6 sm:gap-8 w-max px-4 sm:px-6 lg:px-8 hover:[animation-play-state:paused]"
          style={{ animation: 'marquee-rtl 60s linear infinite' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const isExternal = !!item.link;
            const cardProps = isExternal
              ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: `/portfolio/${item.slug}` }
            const CardComponent: any = isExternal ? 'a' : NavLink;

            return (
              <CardComponent
                key={`${item.id}-${i}`}
                {...cardProps}
                className="group shrink-0 w-72 sm:w-80 md:w-96 bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 block relative ring-1 ring-gray-100"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-black">{item.title}</h3>
                    <p className="text-emerald-400 text-sm font-bold mt-2">View Case Study</p>
                  </div>
                </div>
              </CardComponent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
