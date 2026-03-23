interface ImageShowcaseProps {
  images?: string[];
}

const ImageShowcase = ({ images = ["/assets/img/portfolio/trellis-1.png", "/assets/img/portfolio/trellis-2.png", "/assets/img/portfolio/trellis-3.png"] }: ImageShowcaseProps) => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top Sequence Image */}
        <div className="flex justify-center relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white">
          <img 
            src={images[0]} 
            alt="Project showcase 1" 
            className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-[1.02]" 
          />
        </div>

        {/* Bottom Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-12">
          <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-[1.01]">
            <img 
              src={images[1] || images[0]} 
              alt="Project showcase 2" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-3xl bg-white transition-all duration-700 hover:scale-[1.01]">
            <img 
              src={images[2] || images[0]} 
              alt="Project showcase 3" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
