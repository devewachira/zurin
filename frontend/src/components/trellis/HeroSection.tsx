interface HeroSectionProps {
  title: string;
  image: string;
}

const HeroSection = ({ title, image }: HeroSectionProps) => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Navy Background Section */}
      <div className="bg-[#1e1e3f] pt-32 pb-48 md:pt-40 md:pb-64 text-center relative">
        <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-none">
            {title}
          </h1>
        </div>
        
        {/* MacBook Mockup - Perfectly bisected by the navy/white border */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-5xl px-6">
          <img
            src={image}
            alt={`${title} mockup`}
            className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>

      {/* Landing Floor / White Section start - Provides the bottom background for the laptop */}
      <div className="h-48 md:h-80 bg-white relative z-0"></div>
    </section>
  );
};

export default HeroSection;
