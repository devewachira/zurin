interface ContentSectionProps {
  title: string;
  body: string;
  images: string[];
  imageAlts?: string[];
  columns?: 1 | 2;
  reversed?: boolean;
  centered?: boolean;
}

const ContentSection = ({ title, body, images, imageAlts, columns = 1, reversed = false, centered = false }: ContentSectionProps) => {
  if (centered) {
    return (
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#32a386] mb-8 leading-tight tracking-tight">
              {title}
            </h2>
            <div className="text-[#737c85] text-lg md:text-xl leading-relaxed space-y-6 text-center">
              {body.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="w-full">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={imageAlts?.[i] || `${title} image ${i + 1}`}
                className="w-full h-auto rounded-3xl shadow-xl"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'md:order-2' : ''} space-y-8`}>
            <div className="h-1.5 w-16 bg-[#32a386] rounded-full mb-10" />
            <h2 className="text-3xl md:text-5xl font-black text-[#0e1724] mb-8 leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-[#737c85] text-lg md:text-xl leading-relaxed mb-12 text-justify">
              {body}
            </p>
          </div>
          <div className={`${reversed ? 'md:order-1' : ''} space-y-8`}>
            <div className={`grid ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2 gap-6' : 'grid-cols-1'}`}>
              {images.map((src, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                  <img
                    src={src}
                    alt={imageAlts?.[i] || `${title} image ${i + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0e1724]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
