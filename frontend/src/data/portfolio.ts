export type Category = 'Branding' | 'Web Design' | 'Commercial Real Estate' | 'Video'

export type WorkItem = {
  id: number
  title: string
  slug: string
  category: Category
  image: string
  link?: string
}

export const ALL_CATEGORIES: Category[] = [
  'Branding',
  'Web Design',
  'Commercial Real Estate',
  'Video',
]

export const PORTFOLIO_ITEMS: WorkItem[] = [
  { id: 1, title: 'Dentist website', slug: 'ar-51', category: 'Web Design', image: '/assets/img/portfolio/4.png', link: 'https://comfy-horse-e7613d.netlify.app/' },
  { id: 2, title: 'TEMBEA WEBSITE', slug: 'rim-manufacturing', category: 'Web Design', image: '/assets/img/portfolio/7.png', link: 'https://aesthetic-gumption-f22415.netlify.app/'  },
  { id: 3, title: 'REPAIR', slug: 'the-clayground', category: 'Branding', image: '/assets/img/portfolio/6.png', link: 'https://gleaming-biscuit-04ace2.netlify.app/' },
  { id: 4, title: 'HELP', slug: 'vorex', category: 'Web Design', image: '/assets/img/portfolio/9.png', link: 'https://glistening-banoffee-90dd4c.netlify.app/'},
  { id: 5, title: 'law firm', slug: 'ios-concept', category: 'Branding', image: '/assets/img/portfolio/3.png', link: 'https://fascinating-narwhal-80efbd.netlify.app/' },
  { id: 6, title: 'wash me', slug: 'clover-esthetics', category: 'Branding', image: '/assets/img/portfolio/5.png', link: 'https://merry-semifreddo-e703aa.netlify.app/' },
  { id: 7, title: 'gym', slug: 'marina-neptune', category: 'Video', image: '/assets/img/portfolio/2.png', link: 'https://glistening-llama-1935ae.netlify.app/' },
  { id: 8, title: 'Weatheread Johnson Realty', slug: 'wheatherhead-johnson', category: 'Commercial Real Estate', image: '/assets/img/portfolio/1.png', link: 'https://classy-cupcake-a04156.netlify.app/' },
  { id: 9, title: 'Dental Practice Site', slug: 'dental-practice', category: 'Web Design', image: '/assets/img/portfolio/10.png', link: 'https://starlit-cassata-efbf5c.netlify.app/'},
  { id: 10, title: 'klean', slug: 'presa-solutions', category: 'Branding', image: '/assets/img/portfolio/11.png', link: 'https://snazzy-semifreddo-bb9437.netlify.app/'},
  { id: 11, title: 'Commercial Drone Reel', slug: 'drone-reel', category: 'Video', image: '/assets/img/portfolio/drone.png' },
  { id: 12, title: 'Dealer Network', slug: 'dealer-network', category: 'Commercial Real Estate', image: '/assets/img/portfolio/co9.png' },
  { id: 13, title: 'Brand System', slug: 'brand-system', category: 'Branding', image: '/assets/img/portfolio/w10.png' },
  { id: 14, title: 'Portfolio Template', slug: 'portfolio-template', category: 'Web Design', image: '/assets/img/portfolio/peace/8.png' },
  { id: 15, title: 'CRE Landing Page', slug: 'cre-landing', category: 'Commercial Real Estate', image: '/assets/img/portfolio/tours/8.png' },
  { id: 16, title: 'Savanna Coffee Roasters', slug: 'savanna-coffee', category: 'Branding', image: '/assets/img/portfolio/aviance/9.png' },
  { id: 17, title: 'Nexus Tech Solutions', slug: 'nexus-tech', category: 'Branding', image: '/assets/img/portfolio/alive/9.png' },
  { id: 18, title: 'Bloom Wellness Spa', slug: 'bloom-wellness', category: 'Branding', image: '/assets/img/portfolio/cath/9.png' },
  { id: 19, title: 'Peak Adventure Co.', slug: 'peak-adventure', category: 'Branding', image: '/assets/img/portfolio/marvis/12.png' },
  { id: 20, title: 'Coastal Realty Group', slug: 'coastal-realty', category: 'Commercial Real Estate', image: '/assets/img/portfolio/dallas/9.png' },
  { id: 21, title: 'Ember Creative Studio', slug: 'ember-creative', category: 'Branding', image: '/assets/img/portfolio/wbf/9.png' },
  { id: 22, title: 'Harvest Kitchen & Bar', slug: 'harvest-kitchen', category: 'Branding', image: '/assets/img/portfolio/pro/9.png' },
  { id: 23, title: 'Atlas Financial Partners', slug: 'atlas-financial', category: 'Branding', image: '/assets/img/portfolio/lamar/9.png' },
  { id: 24, title: 'Verde Organics', slug: 'verde-organics', category: 'Branding', image: '/assets/img/portfolio/real/9.png' },
  { id: 25, title: 'Skyline Architecture', slug: 'skyline-architecture', category: 'Branding', image: '/assets/img/portfolio/bright/9.png' },
]
