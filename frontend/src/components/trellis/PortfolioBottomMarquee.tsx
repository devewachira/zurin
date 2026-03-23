import { NavLink } from "react-router-dom";
import { PORTFOLIO_ITEMS } from "../../data/portfolio";

const PortfolioBottomMarquee = () => {
  // Use a subset or all items
  const items = PORTFOLIO_ITEMS.slice(0, 8);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <p className="text-[#32a386] font-black uppercase tracking-[0.3em] text-sm mb-4">Our Portfolio</p>
        <h2 className="text-4xl md:text-6xl font-black text-[#1e1e3f] leading-tight tracking-tightest mb-8">
          <span className="text-[#32a386]">Want to See More?</span> Check Out<br />More of Our Recent Work!
        </h2>
        <NavLink
          to="/portfolio"
          className="group inline-flex items-center gap-4 text-[#1e1e3f] font-black text-sm uppercase tracking-widest hover:text-[#32a386] transition-all"
        >
          View Our Portfolio
          <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-[#32a386] group-hover:border-[#32a386] group-hover:translate-x-1 transition-all">
            →
          </span>
        </NavLink>
      </div>

      <div className="relative">
        <style>{`
          @keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
        <div
          className="flex gap-6 sm:gap-8 w-max hover:[animation-play-state:paused]"
          style={{ animation: 'marquee-rtl 40s linear infinite' }}
        >
          {[...items, ...items].map((item, i) => (
            <NavLink
              key={i}
              to={`/portfolio/${item.slug}`}
              className="group shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-white rounded-[2rem] overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e3f] via-[#1e1e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
                  <p className="text-[#32a386] text-[0.6rem] font-bold uppercase tracking-[0.3em] mb-4">View Project</p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBottomMarquee;
