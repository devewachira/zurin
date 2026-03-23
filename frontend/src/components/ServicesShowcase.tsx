import { NavLink } from 'react-router-dom'

export default function ServicesShowcase() {
  const services = [
    {
      title: 'Website Design & Development',
      description: 'Your web design is the first impression for your online customers, make sure it is a good one.',
      icon: '/assets/img/portfolio/co2.png'
    },
    {
      title: 'Brand Development', 
      description: 'From logos, branded material, messaging, and more, building a cohesive brand is critically important.',
      icon: '/assets/img/portfolio/dr1.png'
    },
    {
      title: 'Search Engine Optimization',
      description: 'SEO is the foundation of every digital marketing or website design plan, and we can help create a strategy.',
      icon: '/assets/img/portfolio/dr2.png'
    },
    {
      title: 'Content Marketing',
      description: 'Content is king and putting out valuable, consistent content is paramount in representing your brand and your website.',
      icon: '/assets/img/portfolio/01.png'
    },
    {
      title: 'Digital Marketing',
      description: 'From advertising to lead generation, having a solid digital marketing plan in place is critical to online success.',
      icon: '/assets/img/portfolio/10.png'
    },
    {
      title: 'Photography & Video Production',
      description: 'Zurinty is dedicated to bringing your vision to life through compelling and industry specific visual media.',
      icon: '/assets/img/portfolio/1.png'
    }
  ]
  
  return (
    <section className="bg-navy-900 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-sm uppercase tracking-widest text-emerald-500 font-bold mb-4">Our Specialties</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            Comprehensive Digital Solutions for Nairobi's Leading Brands
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-8 h-8"
                  style={{filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'}}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
          
          {/* Green CTA Card */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 text-white bg-gradient-to-br from-emerald-500 to-teal-700 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Looking for something else?
              </h3>
              <p className="mb-8 text-emerald-50/90 leading-relaxed">
                Whether you need Web Design, SEO, Brand Development, or Content Marketing, Zurinty always has your back with bespoke strategies tailored to your business needs.
              </p>
            </div>

            <NavLink
              to="/services"
              className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-emerald-700 shadow-xl transition-all hover:bg-emerald-50 hover:scale-105 active:scale-95"
            >
              Explore All Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4.5A.75.75 0 0 1 3.75 12Z" clipRule="evenodd" />
              </svg>
            </NavLink>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
