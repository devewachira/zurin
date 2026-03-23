export default function DallasTipsFullBleed() {
  const Card = ({ stat, text }: { stat: string; text: string }) => (
    <div className="group rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-gray-100 hover:ring-emerald-500/30">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-4xl sm:text-5xl font-black text-emerald-600 leading-none group-hover:scale-110 transition-transform">{stat}</div>
        <p className="text-base sm:text-lg text-gray-700 leading-snug font-medium">{text}</p>
      </div>
    </div>
  )

  return (
    <section className="bg-gray-50 py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6 uppercase tracking-wider">
              2025 Industry Insights
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight leading-tight">
              Nairobi Website Design <span className="text-emerald-600">Tips in 2025</span>
            </h2>
            <p className="mt-8 text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
              In 2025, businesses in the Nairobi area can leverage innovative strategies and
              techniques to enhance their website design and maximize their impact in the competitive digital
              landscape.
            </p>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl">
              One key aspect is prioritizing user experience (UX) and usability. Ensuring that your website is
              intuitive to navigate, visually appealing, and responsive across devices is paramount for engaging
              visitors and keeping them on your site longer.
            </p>
          </div>
          <div className="space-y-6">
            <Card stat="80%" text="The Nairobi area contains more than 80% of businesses who have invested in professional website design." />
            <Card stat="10K+" text="Nairobi-based website design agencies have created over ten thousand successful websites for local businesses." />
            <Card stat="40%" text="Nairobi-designed professional websites experience an average increase in user engagement by forty percent." />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 md:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <Card stat="95%" text="Approximately 95% of users consider the design of a website crucial to their trust in a business." />
            <Card stat="25%" text="Nairobi has witnessed a growth of 25% in the demand for responsive web design services over the past year." />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
              Effective website design in 2025 requires a strategic approach that prioritizes user experience,
              embraces innovation, and leverages the expertise of professionals.
            </h3>
            <div className="mt-8 h-1 w-20 bg-emerald-500 rounded-full" />
            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              By focusing on website architecture, navigation, performance optimization, and creative design elements,
              businesses can create compelling online experiences that resonate with their audience and drive meaningful
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
