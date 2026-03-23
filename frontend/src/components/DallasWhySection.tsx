import { NavLink } from 'react-router-dom'

export default function DallasWhySection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <h2 className="col-span-full max-w-[60ch] md:max-w-[60ch] text-brand-600 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Understanding the critical role of web design in the Nairobi market and how it impacts your business success.
          </h2>
          <div>
            <h3 className="text-xl font-bold">
              The “Why” of Professional Web Development in Nairobi, Kenya: It’s Your Reason. Your Purpose.
            </h3>
            <p className="mt-4 text-gray-700">
              Professional design in today’s digital marketing age is an idea that cannot be overstated. As an internet
              marketing agency, we understand that in most cases, it is the first point of contact between your business
              and potential customers. Our digital marketing services are designed to complement our web development
              efforts, ensuring a cohesive and effective online strategy. It serves as a virtual storefront, reflecting
              your brand identity, values, and credibility.
            </p>
            <p className="mt-4 text-gray-700">
              At Zurinty in Nairobi, we understand the critical role that effective web design plays in attracting and
              retaining visitors, converting leads into customers, and ultimately driving business growth.
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              Professional site design goes beyond just aesthetics. While a visually appealing layout is essential for
              capturing attention, design is also important to make sure that your website is user‑friendly, intuitive to
              navigate, and optimized for performance across all devices. Our team of expert web designers in Nairobi,
              Kenya, combines creativity with technical expertise to create websites that not only look great but also
              function flawlessly.
            </p>
            <p className="mt-4 text-gray-700">
              From the moment visitors land on your site, they should be guided seamlessly through the user journey—from
              browsing your products or services to making a purchase or inquiry. Our Nairobi website design team
              specializes in crafting engaging website layouts that prioritize user experience, resulting in higher
              conversion rates and improved customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-gray-700">
                We ensure that your site is hosted on reliable servers, your domain is properly registered, and robust
                security measures are in place to protect against cyber threats. Additionally, we provide ongoing website
                maintenance services to keep your site running smoothly and up‑to‑date with the latest trends and
                technologies. Whether it’s refining website navigation, tweaking layout elements, or implementing targeted
                marketing strategies, our team leverages analytics insights to continuously improve your online presence.
              </p>
              <p className="mt-4 text-gray-700">
                Incorporating website analytics into the design process allows us to track user behavior, measure
                performance, and make data‑driven decisions to optimize your site for better results.
              </p>
            </div>
            <div className="mt-6">
              <NavLink to="/resources" className="btn btn-primary btn-pill">Learn More With Zurinty Resources!</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
