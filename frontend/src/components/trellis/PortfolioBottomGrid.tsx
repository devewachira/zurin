import { NavLink } from "react-router-dom";

const PortfolioBottomGrid = () => {
  const items = [
    { title: 'Dentist Website', slug: 'ar-51', img: '/assets/img/portfolio/1.png' },
    { title: 'TEMBEA Website', slug: 'rim-manufacturing', img: '/assets/img/portfolio/2.png' },
    { title: 'REPAIR', slug: 'the-clayground', img: '/assets/img/portfolio/3.png' },
    { title: 'HELP', slug: 'vorex', img: '/assets/img/portfolio/4.png' },
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <NavLink
              key={item.slug}
              to={`/portfolio/${item.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl transition-all duration-700 hover:-translate-y-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e3f] via-[#1e1e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 text-left">
                 <p className="text-[#32a386] text-[0.6rem] font-bold uppercase tracking-[0.3em] mb-4">View Project</p>
                 <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                 </h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBottomGrid;
