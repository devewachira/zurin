interface TestimonialSectionProps {
  quote?: string;
  author?: string;
  role?: string;
}

const TestimonialSection = ({ 
  quote = "JSL made the process so smooth—listening to my feedback and creating a website that truly represents The Clayground's vibe. The booking integration works perfectly, and the design is exactly what I envisioned!",
  author = "STEPHANIE S.",
  role = "Owner of The Clayground"
}: TestimonialSectionProps) => {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1e1e3f] rounded-[2.5rem] py-12 md:py-16 px-8 md:px-16 text-center shadow-3xl relative overflow-hidden group transition-all duration-700 hover:scale-[1.01]">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#32a386]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Green Quote Icon */}
            <div className="flex justify-center mb-12">
              <svg 
                className="w-16 h-16 text-[#32a386] opacity-90" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H5.017V21H6.017Z" />
              </svg>
            </div>

            <blockquote className="text-white text-xl md:text-3xl font-bold leading-relaxed mb-12 tracking-tightest">
              "{quote}"
            </blockquote>

            <div className="space-y-2">
              <p className="text-white font-black text-2xl uppercase tracking-widest">
                {author}
              </p>
              <p className="text-[#737c85] text-sm font-bold uppercase tracking-[0.2em]">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
