import { NavLink } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#00d2aa] to-[#00b894] rounded-[3rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,184,148,0.4)] p-10 md:p-16 relative group text-center">
          {/* Background image overlay with low opacity */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay grayscale group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-5xl font-black text-[#1e1e3f] leading-tight tracking-tight uppercase">
              Ready to Start Your Own Project?
            </h2>
            
            <p className="text-white text-3xl md:text-6xl font-black leading-none tracking-tightest">
              We Are Ready and Waiting to Update, Polish, and Shine Your Website!
            </p>
            
            <p className="text-[#1e1e3f] text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
              We love a challenge and making the digital world more functional and beautiful.
            </p>
            
            <div className="pt-8">
              <NavLink
                to="/contact"
                className="inline-flex px-12 py-5 bg-[#1e1e3f] text-white font-black rounded-full hover:bg-black hover:scale-105 transition-all shadow-2xl uppercase tracking-[0.2em] text-sm"
              >
                Request a Quote
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
