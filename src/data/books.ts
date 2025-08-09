export interface Book {
  title: string
  author: string
  slug: string
  coverImage: string
  spineColor: string
  textColor: string
  date: string
  rating: number
  description: string[]
}

export const books: Book[] = [
  {
    title: "Dune",
    author: "Frank Herbert",
    slug: "dune",
    coverImage: "https://m.media-amazon.com/images/I/71oO1E-XPuL._UF1000,1000_QL80_.jpg",
    spineColor: "#eac481",
    textColor: "#eee",
    date: "August 7, 2025",
    rating: 9,
    description: [
      "The most convincing exploration of ecology as power: water, myth, and logistics as the real weapons of empire.",
      "Some gender politics and messianic vibes have aged awkwardly, but the systems-level world-building is still unmatched.",
      "Great calibration for thinking about resource constraints, local knowledge, and long-horizon stewardship."
    ]
  },
  {
    title: "Inventing the Future",
    author: "Nick Srnicek & Alex Williams",
    slug: "inventing-the-future",
    coverImage: "https://www.versobooks.com/cdn/shop/files/getimage_7a26128b-c06c-42d8-b3d1-1dc256b1ef8d.jpg?v=1754281875",
    spineColor: "#FF5A1F",
    textColor: "#111827",
    date: "August 1, 2025",
    rating: 8,
    description: [
      "A left-accelerationist playbook: platform power, automation, post-work politics, and why movements need concrete demands.",
      "Optimistic timelines and state capacity assumptions are debatable, but the strategy lens is clarifying.",
      "Useful to contrast ‘build vs. lobby’: it argues you must do both, intentionally."
    ]
  },
  {
    title: "Ways of Being",
    author: "James Bridle",
    slug: "ways-of-being",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqod-7vner8LPj3Bi0HZBB9Pk_Sab1w50vPQ&s",
    spineColor: "#9e9f5a",
    textColor: "#E6F4F1",
    date: "July 20, 2025",
    rating: 7,
    description: [
      "A tour of more-than-human intelligence—animals, plants, and machines—and the ethics that follow.",
      "Occasionally hand-wavy and anecdotal, but it nudges builders to widen the design aperture beyond the human.",
      "Pairs well with field work: read, then go sit with a forest sensor feed."
    ]
  },
  {
    title: "How Forests Think",
    author: "Eduardo Kohn",
    slug: "how-forests-think",
    coverImage: "https://www.ucpress.edu/_next/image?url=https%3A%2F%2Fwebfiles.ucpress.edu%2Fcoverimage%2Fisbn13%2F9780520276116.jpg&w=1920&q=90",
    spineColor: "#f1f1f1",
    textColor: "#333",
    date: "July 5, 2025",
    rating: 8,
    description: [
      "Semiotics in the rainforest: what if forests ‘mean’ things before humans interpret them?",
      "Not a methods textbook; it’s a mind-expander that makes tech folk less anthropocentric.",
      "Great antidote to dashboard reductionism when you’re deploying sensors in living systems."
    ]
  },
  {
    title: "The Extended Mind",
    author: "Annie Murphy Paul",
    slug: "the-extended-mind",
    coverImage: "https://m.media-amazon.com/images/I/71KHwYQb7FL._UF1000,1000_QL80_.jpg",
    spineColor: "#F5F1E8",
    textColor: "#1F2937",
    date: "June 28, 2025",
    rating: 7,
    description: [
      "Embodied, situated, and distributed cognition for everyday work and learning.",
      "Some pop-psych repetition, but the applications to tool and workspace design are instantly useful.",
      "Read it to structure teams, field kits, and note-taking so thinking actually extends outside heads."
    ]
  },
  {
    title: "Seeing Like a State",
    author: "James C. Scott",
    slug: "seeing-like-a-state",
    coverImage: "https://yale-university-press-uk.imgix.net/covers/9780300246759.jpg",
    spineColor: "#e0ddda",
    textColor: "#333",
    date: "June 10, 2025",
    rating: 9,
    description: [
      "A masterclass in why top-down ‘legibility’ breaks fragile systems and erases local know-how.",
      "If you deploy tech into rural ecologies without reading this, prepare to re-learn painful lessons.",
      "Sharp, humbling, and evergreen; pairs perfectly with on-the-ground co-design."
    ]
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    slug: "designing-data-intensive-applications",
    coverImage: "https://archive.org/services/img/designing-data-intensive-applications-th/full/pct:200/0/default.jpg",
    spineColor: "#F1f1f1",
    textColor: "#B91C1C",
    date: "May 24, 2025",
    rating: 10,
    description: [
      "The canonical map of storage, streams, replication, consensus, and correctness under failure.",
      "Every design review becomes crisper after this: you’ll stop arguing preferences and start trading properties.",
      "Dense but pure signal—your off-grid video/telemetry stack will thank you."
    ]
  },
  {
    title: "Making Embedded Systems (2nd ed.)",
    author: "Elecia White",
    slug: "making-embedded-systems-2e",
    coverImage: "https://www.oreilly.com/covers/urn:orm:book:9781449308889/400w/",
    spineColor: "#F1f1f1",
    textColor: "#738b37",
    date: "May 9, 2025",
    rating: 8,
    description: [
      "Practical firmware craft: interrupts, power budgets, RTOS choices, testing in the messy real world.",
      "Opinionated in the right places; it saves you months of avoidable edge-case pain.",
      "If your device must survive rain, dust, and bad power, start here."
    ]
  },
  {
    title: "Introduction to Remote Sensing (6th ed.)",
    author: "James B. Campbell, Randolph H. Wynne & Valerie A. Thomas",
    slug: "introduction-to-remote-sensing-6e",
    coverImage: "https://www.guilford.com/covers/large/9781462549405.jpg",
    spineColor: "#497169",
    textColor: "#EAF2FF",
    date: "April 27, 2025",
    rating: 7,
    description: [
      "Survey-level reference on platforms, sensors, preprocessing, and interpretation.",
      "Dry in parts, but indispensable when you’re stitching UAS, satellite, and ground truth.",
      "Keep it on your shelf for band math and error budgets, not inspiration."
    ]
  },
  {
    title: "The Wizard and the Prophet",
    author: "Charles C. Mann",
    slug: "the-wizard-and-the-prophet",
    coverImage: "https://m.media-amazon.com/images/I/71vT2ih9mRL._UF1000,1000_QL80_.jpg",
    spineColor: "#EADBC5",
    textColor: "#2F5F2D",
    date: "April 12, 2025",
    rating: 8,
    description: [
      "Borlaug vs. Vogt: abundance through tech vs. restraint through limits.",
      "Balanced enough that both camps will complain—always a good sign.",
      "A clean frame for energy, food, and water decisions you’ll actually make."
    ]
  },
  {
    title: "Sand Talk",
    author: "Tyson Yunkaporta",
    slug: "sand-talk",
    coverImage: "https://cdn.shopify.com/s/files/1/0625/6679/3413/files/Sand_20Talk.jpg?v=1716737125",
    spineColor: "#f3c543",
    textColor: "#333",
    date: "March 30, 2025",
    rating: 7,
    description: [
      "Indigenous pattern literacy as operating system: story, kinship, and stewardship.",
      "Playful and nonlinear; some claims won’t land for empiricists, but the metaphors stick.",
      "Read it to de-center yourself before designing with communities."
    ]
  },
  {
    title: "Congo: The Epic History of a People",
    author: "David Van Reybrouck",
    slug: "congo-epic-history",
    coverImage: "https://m.media-amazon.com/images/I/81wU3wnYXJL._UF1000,1000_QL80_.jpg",
    spineColor: "#daad64",
    textColor: "#D8ECF6",
    date: "March 14, 2025",
    rating: 9,
    description: [
      "A sweeping, humane history of the DRC—from pre-colonial to present—with voices you rarely hear.",
      "Long, yes; also the best context you can carry into fieldwork and storytelling.",
      "Makes every policy hot-take feel under-informed (because it is)."
    ]
  },
  {
    title: "Design for the Real World",
    author: "Victor Papanek",
    slug: "design-for-the-real-world",
    coverImage: "https://m.media-amazon.com/images/I/61PHFayjDVL._UF1000,1000_QL80_.jpg",
    spineColor: "#fef8df",
    textColor: "#333",
    date: "February 25, 2025",
    rating: 7,
    description: [
      "Ethics and appropriate technology before those were cool.",
      "Parts are stuck in 1970s battles, but the core demand—useful, repairable, contextual design—ages beautifully.",
      "Sharp compass for building ‘beautiful things at scale’ without delusion."
    ]
  },
  {
    title: "Where Is My Flying Car?",
    author: "J. Storrs Hall",
    slug: "where-is-my-flying-car",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1537823874i/42036377.jpg",
    spineColor: "#557ab5",
    textColor: "#E6EEF7",
    date: "February 10, 2025",
    rating: 6,
    description: [
      "A pro-abundance audit: energy density, policy drag, and why progress stalled.",
      "Persuasive in diagnosing stagnation; cherry-picks in places and hand-waves social complexity.",
      "Read for optimism fuel, not for program management."
    ]
  },
  {
    title: "Gorillas in the Mist",
    author: "Dian Fossey",
    slug: "gorillas-in-the-mist",
    coverImage: "https://m.media-amazon.com/images/I/71+7TLOlDoL._UF1000,1000_QL80_.jpg",
    spineColor: "#4a953a",
    textColor: "#EAF7EF",
    date: "January 26, 2025",
    rating: 7,
    description: [
      "Field science as memoir: grit, obsession, and the birth of a movement.",
      "Dated methods and some ethical blind spots—useful to see how the discipline evolved.",
      "Still a visceral reminder of what’s at stake in central Africa."
    ]
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    slug: "cien-anos-de-soledad",
    coverImage: "https://m.media-amazon.com/images/I/91TvVQS7loL._UF1000,1000_QL80_.jpg",
    spineColor: "#f2dba7",
    textColor: "#333",
    date: "January 12, 2025",
    rating: 9,
    description: [
      "Time loops, lineages, and the weight of place—magical realism as systems thinking.",
      "Not ‘practical,’ but it sharpens taste for narrative structure and symbolism.",
      "If you build media, this is nutrition for your storytelling cortex."
    ]
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    slug: "steve-jobs-isaacson",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg",
    spineColor: "#eee",
    textColor: "#111111",
    date: "December 22, 2024",
    rating: 5,
    description: [
      "Fast, mythic, and highly readable—also heavy on survivor bias and hero worship.",
      "Great anecdotes on taste, focus, and end-to-end product control; thin on team cost accounting.",
      "Controversial take: aspiring founders should pair this with books on systems and operations to avoid cosplay."
    ]
  },
  {
    title: "Elon Musk",
    author: "Walter Isaacson",
    slug: "elon-musk-isaacson",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693900622i/198586342.jpg",
    spineColor: "#000000",
    textColor: "#E5E7EB",
    date: "December 8, 2024",
    rating: 6,
    description: [
      "An operatic portrait of intensity, vertical integration, and chaos as method.",
      "Instructive on manufacturing courage; ethically and interpersonally messy.",
      "Read for lessons on execution under pressure—discard the nihilism."
    ]
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    slug: "the-art-of-war",
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781626860605/the-art-of-war-9781626860605_hr.jpg",
    spineColor: "#c0664e",
    textColor: "#F6E3C7",
    date: "November 23, 2024",
    rating: 4,
    description: [
      "Terse aphorisms about deception and terrain, endlessly misapplied to quarterly OKRs.",
      "Better as a historical artifact than a business bible.",
      "Controversial take: your org needs clear comms and real metrics, not koans."
    ]
  },
  {
    title: "Build: An Unorthodox Guide to Making Things Worth Making",
    author: "Tony Fadell",
    slug: "build-tony-fadell",
    coverImage: "https://m.media-amazon.com/images/I/71hP6RPS8eL._UF1000,1000_QL80_.jpg",
    spineColor: "#eee",
    textColor: "#333",
    date: "November 9, 2024",
    rating: 8,
    description: [
      "A pragmatic product-and-org playbook from someone who shipped the future twice.",
      "Some Apple-specific quirks don’t generalize, but the hiring, taste, and launch sections are gold.",
      "Skimmable, quotable, and immediately actionable for early teams."
    ]
  }
]
