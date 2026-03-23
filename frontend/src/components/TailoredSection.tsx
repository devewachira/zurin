export default function TailoredSection() {
  return (
<section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <h3 className="mt-1 text-4xl sm:text-5xl font-bold tracking-tight text-green-600">
  How Zurinty Tailors Web Development To Meet Your Business Needs
</h3>

        <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="text-gray-600">
  <p style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '20px' }}>
    At Zurinty Marketing, we believe that a one-size-fits-all approach simply doesn’t cut it in the world of web development. 
    Each business has its own unique goals, target audience, and brand identity, and our mission is to create a web presence 
    that reflects these distinct characteristics.
  </p>

  <p>
    Our process begins with a deep dive into understanding your business. We collaborate closely with you to gather insights 
    into your objectives, brand values, and the specific needs of your target audience. This foundational understanding allows 
    us to craft a web development strategy that aligns perfectly with your overall digital marketing goals.
  </p>
</div>
          <p className="text-gray-600">
           Our team of expert web designers and developers combines creative web design with technical prowess to deliver websites that are not only visually stunning but also highly functional. We stay abreast of the latest technologies and design trends to ensure your website is modern, user-friendly, and optimized for search engines.

This means your site will not only look great but also perform exceptionally well across all devices, providing a seamless user experience.

Whether you’re looking to establish a robust online presence, boost your website’s conversion rates, or enhance your brand’s online reputation, our web development services are designed to help you succeed online. We focus on creating custom web designs that resonate with your target audience and reflect your brand’s unique identity.
          </p>
        </div>
        
        {/* Image Grid Section - 7 Images */}
        <div className="mt-16">
          <div className="grid grid-cols-12 gap-3" style={{height: '500px'}}>
            {/* Image 1: Left tall image */}
            <div className="col-span-2 row-span-2">
              <img 
                src="/assets/img/dallas-collage.png" 
                alt="Office meeting space" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 2: Top middle */}
            <div className="col-span-2 h-36">
              <img 
                src="/assets/img/portfolio/1.png" 
                alt="Team collaboration" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 3: Top center */}
            <div className="col-span-2 h-36">
              <img 
                src="/assets/img/skyline.png" 
                alt="City skyline" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 4: Top right medium */}
            <div className="col-span-3 h-36">
              <img 
                src="/assets/img/portfolio/2.png" 
                alt="Person working at desk" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 5: Right tall image */}
            <div className="col-span-3 row-span-2">
              <img 
                src="/assets/img/portfolio/3.png" 
                alt="City aerial view" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 6: Bottom large center */}
            <div className="col-span-5" style={{height: '220px'}}>
              <img 
                src="/assets/img/portfolio/4.png" 
                alt="Women working together" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Image 7: Bottom right stacked images */}
            <div className="col-span-2" style={{height: '220px'}}>
              <div className="h-1/2 mb-1.5">
                <img 
                  src="/assets/img/laptop.jpg" 
                  alt="Laptop and coffee" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-1/2">
                <img 
                  src="/assets/img/portfolio/co1.png" 
                  alt="Workspace setup" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
