import { NavLink } from 'react-router-dom'
import { InlineWidget } from 'react-calendly'

export default function ConsultationCard() {
  return (
    <section className="relative py-20 sm:py-32 text-white overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <img src="/assets/img/laptop.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="rounded-3xl bg-white overflow-hidden shadow-2xl ring-1 ring-white/10 order-2 lg:order-1 h-[650px]">
            <InlineWidget
              url="https://calendly.com/mejoarwachira/consultation"
              styles={{
                height: '100%',
                minWidth: '320px'
              }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">Contact Us</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Book Your Free <span className="text-emerald-500">30 Minute</span> Consultation
            </h2>
            <p className="mt-8 text-xl text-emerald-50/80 max-w-2xl leading-relaxed">
              Every business is unique. We offer customized solutions aligned to your needs—launching new sites or redesigns with performance, accessibility, and SEO baked in.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink to="/contact" className="rounded-full bg-emerald-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-600 transition transform hover:-translate-y-1 active:scale-95">
                More Ways to Connect
              </NavLink>
              <a href="tel:+254743573360" className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/20 transition active:scale-95">
                Call Us Directly
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
               <div>
                  <div className="text-3xl font-bold text-emerald-500">100+</div>
                  <div className="text-sm text-emerald-100/60 uppercase tracking-widest font-bold mt-1">Projects Delivered</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-emerald-500">24/7</div>
                  <div className="text-sm text-emerald-100/60 uppercase tracking-widest font-bold mt-1">Expert Support</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
