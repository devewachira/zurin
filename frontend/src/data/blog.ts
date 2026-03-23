export type Section = {
  heading: string
  body: string[]
  image?: string
  imageAlt?: string
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  sections: Section[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'llm-search-optimization-next-layer-visibility',
    title: 'LLM Search Optimization: The Next Layer of Visibility',
    date: 'October 27, 2025',
    excerpt:
      'Your current SEO strategy still does the heavy lifting. But learning how to optimize for this next wave—LLM search optimization helps!',
    image:
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1600&auto=format&fit=crop',
    sections: [
      {
        heading: 'Why LLM Search Matters',
        body: [
          'Large Language Models are becoming a discovery surface. Users ask questions and receive synthesized answers rather than ten blue links.',
          'Brands that structure content for retrieval augmented generation (RAG) and answer-style summaries will see compounding impact.',
        ],
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
        imageAlt: 'AI dashboard on laptop',
      },
      {
        heading: 'Optimization Playbook',
        body: [
          'Create authoritative topic clusters with clean internal linking.',
          'Add FAQ patterns, concise summaries, and unambiguous definitions near the top of pages.',
          'Publish datasets, glossaries, and step‑by‑step procedures that are easy to quote.',
        ],
      },
      {
        heading: 'Measuring Lift',
        body: [
          'Track how branded and non‑brand queries surface you inside AI overviews and chat answers.',
          'Watch assisted conversions from question keywords and dwell time on explainer pages.',
        ],
      },
    ],
  },
  {
    slug: 'evolving-world-of-email-marketing-2025',
    title: 'The Evolving World of Email Marketing in 2025',
    date: 'October 16, 2025',
    excerpt:
      'Email keeps evolving: smarter filtering, AI summaries, and stricter consent rules. Here’s how to adapt your program.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    sections: [
      {
        heading: 'The Impact of AI',
        body: [
          'AI writing assistants are great at outlines and variations. Use them to brainstorm subject lines and simplify copy—never to fabricate facts.',
          'Inbox providers increasingly summarize messages. Lead with utility: the first sentence should fully explain the benefit.',
        ],
        image:
          'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop',
        imageAlt: 'Team reviewing analytics on tablet',
      },
      {
        heading: 'Longer Sales Cycles',
        body: [
          'Macroeconomic shifts extend decision timelines. Build nurture arcs that educate, not just promote.',
          'Use progressive profiling and content personalization to keep momentum without pressure.',
        ],
      },
      {
        heading: 'Spam & New Regulations',
        body: [
          'Save proof of opt‑in, offer a visible one‑click unsubscribe, and limit cadence to value‑driven sends.',
          'Quality beats quantity—engagement is a reputation signal that protects deliverability.',
        ],
      },
      {
        heading: 'What To Do Next',
        body: [
          'Refresh your welcome series, add a product‑led tutorial, and test a monthly digest with scannable sections.',
        ],
      },
    ],
  },
  {
    slug: '4-ways-to-get-better-leads-small-business',
    title: '4 Ways To Get Better Leads as a Small Business',
    date: 'September 25, 2025',
    excerpt:
      'Practical steps to improve lead quality without exploding spend.',
    image:
      'https://images.unsplash.com/photo-1556742046-cf6e22b4fbb3?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Tighten Targeting', body: ['Narrow locations, industries, and problems you solve.'] },
      { heading: 'Clarify the Offer', body: ['Your CTA should promise a tangible outcome, not a generic “contact us”.'] },
      { heading: 'Qualify Early', body: ['Short forms with one screening question reduce noise while staying friction‑light.'] },
      { heading: 'Close the Loop', body: ['Pipe outcomes back to ad platforms for smarter optimization.'] },
    ],
  },
  {
    slug: 'what-research-says-about-brand-loyalty-small-business',
    title: 'What the Research Says About Brand Loyalty & Small Business',
    date: 'September 11, 2025',
    excerpt:
      'Loyalty emerges from consistency, community, and context—not just discounts.',
    image:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Consistency', body: ['Familiarity compounds; set brand guardrails and stick to them.'] },
      { heading: 'Community', body: ['Invite participation: reviews, UGC, and events create ownership.'] },
      { heading: 'Context', body: ['Tailor the experience to moments—what the customer is doing right now.'] },
    ],
  },
  {
    slug: 'how-do-i-get-my-website-on-first-page-of-google',
    title: 'How Do I Get My Website to the First Page of Google',
    date: 'August 28, 2025',
    excerpt:
      'Foundational on‑page, helpful content, and legit backlinks—no gimmicks required.',
    image:
      'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Technical Hygiene', body: ['Fast, mobile‑first, and indexable. Core Web Vitals matter.'] },
      { heading: 'Helpful Content', body: ['Answer search intent directly. Provide steps, tools, costs, and pitfalls.'] },
      { heading: 'Authority', body: ['Earn links by shipping resources worth citing—guides, data, and templates.'] },
    ],
  },
  {
    slug: 'why-is-my-website-loading-slowly',
    title: 'Why Is My Website Loading Slowly?',
    date: 'August 14, 2025',
    excerpt:
      'Diagnose images, scripts, and network bottlenecks with a simple checklist.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Images', body: ['Serve modern formats (AVIF/WebP), size correctly, and lazy‑load below the fold.'] },
      { heading: 'JavaScript', body: ['Defer non‑critical code and remove unused packages. Hydrate only what you need.'] },
      { heading: 'Network', body: ['Use HTTP/2+, CDN caching, and preconnect to critical domains.'] },
    ],
  },
  {
    slug: 'how-to-write-compelling-sales-collateral',
    title: 'How To Write Compelling Sales Collateral',
    date: 'July 24, 2025',
    excerpt:
      'Shift from features to outcomes. Show the before/after state with proof.',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Narrative', body: ['Problem → Tension → Resolution. Keep the thread tight.'] },
      { heading: 'Evidence', body: ['Mini case studies, metrics, and screenshots beat generic claims.'] },
      { heading: 'Design', body: ['Typography hierarchy and white space improve comprehension.'] },
    ],
  },
  {
    slug: 'writing-a-brand-style-guide-101',
    title: 'Writing a Brand Style Guide 101',
    date: 'July 10, 2025',
    excerpt:
      'Codify your brand so teams can ship fast without breaking things.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Essentials', body: ['Logo usage, color, type, voice, and accessibility.'] },
      { heading: 'Components', body: ['Buttons, forms, cards—document code and content rules.'] },
      { heading: 'Governance', body: ['Review cadence and ownership keep the guide alive.'] },
    ],
  },
  {
    slug: '5-ways-to-maximize-your-ad-spend',
    title: '5 Ways To Maximize Your Ad Spend',
    date: 'June 26, 2025',
    excerpt:
      'Squeeze more from the same budget with creative, audiences, and measurement.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Creative Iteration', body: ['Ship weekly variants; let data pick winners.'] },
      { heading: 'Lifecycle Bidding', body: ['Bid by journey stage—not all clicks are equal.'] },
      { heading: 'Attribution', body: ['Use modeled conversions and lift tests to avoid under‑investment.'] },
    ],
  },
  {
    slug: 'how-to-grow-your-business-youtube-presence',
    title: 'How To Grow Your Business YouTube Presence',
    date: 'June 12, 2025',
    excerpt:
      'From topics to thumbnails: how to earn watch time and trust.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Format', body: ['Hooks in 5 seconds, chapters, and clear CTAs.'] },
      { heading: 'Thumbnails', body: ['Readable faces + verbs. Test constantly.'] },
      { heading: 'Distribution', body: ['Embed in posts, email, and repurpose as shorts.'] },
    ],
  },
  {
    slug: '4-ways-to-accelerate-purchase',
    title: '4 Ways To Accelerate Purchase',
    date: 'May 29, 2025',
    excerpt:
      'Reduce friction and increase clarity to help buyers move forward.',
    image:
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Comparison Tables', body: ['Show tiers and trade‑offs honestly.'] },
      { heading: 'Social Proof', body: ['Place relevant proof beside critical CTAs.'] },
      { heading: 'Guarantees', body: ['Risk‑reversal calms last‑mile anxiety.'] },
    ],
  },
  {
    slug: '3-differences-between-brick-and-mortar-and-ecommerce',
    title: '3 Differences Between Brick & Mortar and E‑commerce Marketing',
    date: 'May 15, 2025',
    excerpt:
      'Same customer, different context. Adjust messaging and measurement.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Local Intent', body: ['Physical proximity changes channel mix and conversion windows.'] },
      { heading: 'Inventory', body: ['Real‑time stock and pickup options affect creative.'] },
      { heading: 'Attribution', body: ['Use store visit and point‑of‑sale signals.'] },
    ],
  },
  {
    slug: 'tips-and-tricks-building-customer-loyalty-program',
    title: 'Tips & Tricks for Building a Customer Loyalty Program',
    date: 'April 24, 2025',
    excerpt:
      'Design a program that rewards behavior, not just spending.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    sections: [
      { heading: 'Earning Rules', body: ['Reward actions that predict retention: referrals, reviews, and repeats.'] },
      { heading: 'Perks', body: ['Exclusive access beats blanket discounts.'] },
      { heading: 'Ops', body: ['Make redemption instant and transparent to avoid frustration.'] },
    ],
  },
]

export const getPostBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug)
