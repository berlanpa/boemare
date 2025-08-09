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
    "title": "Invent and Wander",
    "author": "Jeff Bezos",
    "slug": "invent-and-wander",
    "coverImage": "https://m.media-amazon.com/images/I/615Swk-5V7L.jpg",
    "spineColor": "#F7F8F2",
    "textColor": "#C09566",
    "date": "February 25, 2025",
    "rating": 7,
    "description": [
      "A collection of Jeff Bezos' writing including his Amazon shareholder letters, speeches, and other thoughts.",
      "His writing all focuses on a few important big ideas that he takes very seriously: long-term thinking, customer-obsession, focusing on the things that don't change, high standards, fast vs. careful decision making, his willingness to pay for many experiments to win big, etc. These few ideas are deeply embedded in Amazon's culture and are largely responsible for it's success.",
      "Jeff is an unusually clear thinker and communicator, even among great CEOs. He is also more inclined toward the aesthetic and social aspects of value creation than I expected. I enjoyed reading his space colony vision for Blue Origin, which sharply contrasts Elon's colonize Mars vision for SpaceX.",
      "Worth reading for Jeff's evergreen wisdom articulated in his own words. Skip past the repetitive parts and focus on the importance of the message.",
    ]
  },
  {
    "title": "The 38 Letters from J.D. Rockefeller to His Son",
    "author": "John D. Rockefeller Jr.",
    "slug": "38-letters",
    "coverImage": "https://m.media-amazon.com/images/I/61aKbyBIZFL.jpg",
    "spineColor": "#2B1B1B",
    "textColor": "#FFF",
    "date": "February 20, 2025",
    "rating": 7,
    "description": [
      "Letters John D. Rockefeller wrote to his son on his philosophy of achievement that led him to his success in the oil business. The content is similar to other good success psychology books but Rockefeller's writing style and injection of anecdotes from his life make this more unique",
      "Not the most complete or concise coverage of the topic, but a worthwhile reading experience with a few misses and several great letters.",
    ]
  },
  {
    "title": "The Tao of Charlie Munger",
    "author": "David Clark",
    "slug": "the-tao-of-munger",
    "coverImage": "https://m.media-amazon.com/images/I/61BS6cbp8QL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#EF4222",
    "textColor": "#FFF",
    "date": "February 18, 2025",
    "rating": 6,
    "description": [
      "Poor Charlie's Almanack",
      "If you've read Berkshire shareholder letters or the variety of other writings that mention Buffet and Munger, most of this book will come as helpful reminders rather than new ideas.",
    ]
  },
  {
    "title": "Insanely Simple",
    "author": "Ken Segall",
    "slug": "insanely-simple",
    "coverImage": "https://m.media-amazon.com/images/I/51lSdyP-MWL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#FFF",
    "textColor": "#000",
    "date": "January 20, 2025",
    "rating": 6,
    "description": [
      "Think Different",
      "Silhouettes",
      "Simplicity is often massively undervalued. As organizations grow, the debt associated with complexity compounds. Apple avoided this by dedicating constant attention toward simplification. This book focuses on how Steve Jobs specifically implemented this obsession with simplicity in his organizations.",
      "The key ideas in this book would stand to benefit every leader and organization. However, the book does get slightly repetitive after the first few chapters.",
    ]
  },
  {
    "title": "Goddesses in Everywoman",
    "author": "Jean Shinoda Bolen",
    "slug": "goddesses-in-everywoman",
    "coverImage": "/reading/goddesses-in-everywoman.png",
    "spineColor": "#000",
    "textColor": "#FFF",
    "date": "December 28, 2024",
    "rating": 7,
    "description": [
      "King Warrior Magician Lover",
      "The archetypes are not meant to be mutually exclusive, but instead describe the different aspects of the female psychology that can naturally coexist. She focuses on the dependent female roles like the wife (Hera), mother (Demeter), and daughter (Persephone), as well as the independent roles like separation from men (Artemis), cooperation with men (Athena), and indifference toward men (Hestia), along with the wildcard lover archetype (Aprhodite).",
      "Surprisingly good observations about each archetypes behavior in each stage of life, marriage, work, sexuality, and preferences in partners. Many of her predictions were spot on for women in my life.",
      "The book is primarily designed to help women grow into mature femininity, but I would also consider this essential reading for all men.",
    ]
  },
  {
    "title": "Finite and Infinite Games",
    "author": "James P. Carse",
    "slug": "finite-and-infinite-games",
    "coverImage": "https://m.media-amazon.com/images/I/718XJQKpOdL._AC_UF894,1000_QL80_.jpg",
    "spineColor": "#FFF",
    "textColor": "#000",
    "date": "December 25, 2024",
    "rating": 5,
    "description": [
      "Very abstract book about the relationship between man and nature, and the games we partake in through our existence. Some really thought-provoking ideas interspersed with unjustified assertions and unrelated examples. Lacking in structure, concision, or clear articulation. More like a collection of interesting thoughts from James P. Carse.",
      "Useful metaphors to apply to developing a life philosophy, specifically around framing life as an infinite game where play is the priority. This approach aligns with many eastern philosophies. Good observations on man's attempt to control nature, and the indifference of nature to man. Most topics covered better in other places.",
    ]
  },
  {
    "title": "King, Warrior, Magician, Lover",
    "author": "Robert Moore & Douglas Gilette",
    "slug": "king-warrior-magician-lover",
    "coverImage": "https://m.media-amazon.com/images/I/71U5F4rRYQL.jpg",
    "spineColor": "#215E7A",
    "textColor": "#FFF",
    "date": "November 29, 2024",
    "rating": 8,
    "description": [
      "Immature masculinity runs rampant in modern society due to the collapse of social functions like ritual intitiation and the lack of mature masculine role models. This boyish masculinity is the source of unwarranted aggression, infidelity, and insecurity projected into the world.",
      "This book offers a reflection on masculinity by presenting the 4 archetypes of immature boyhood and the 4 archetypes of mature masculinity.",
      "Each archetype resonates heavily and aligns with mens' behavior. The mature masculine archetypes are each worthy points of aspiration. I didn't fully appreciate the value and relevance of psychological archetypes until I read this book.",
      "The authors are highly reflective on the state of masculinity and femininity in modern civilization and inject their own wisdom throughout the book. They present their observations through the lens of Jungian psychology.",
    ]
  },
  {
    "title": "Civilization and its Dicontents",
    "author": "Sigmund Freud",
    "slug": "civilization-and-its-discontents",
    "coverImage": "/reading/civilization-and-its-discontents.png",
    "spineColor": "#6E8E67",
    "textColor": "#FFF",
    "date": "November 28, 2024",
    "rating": 5,
    "description": [
      "Civilization must suppress humans' natural sexual and aggressive desires to enable cooperation at scale. This suppression of desires naturally leads to increased discontent. Freud suggests that all civilizations may inherently create more psychological suffering for individuals due to this effect.",
      "An insightful idea but Freud's justification here is lacking. I expected him to focus on the suppression of primal desires to prevent violence. Instead, he suggests that the existence of social norms and morals causes individuals to suffer more as they feel guilty about their true desires. This is a far less compelling argument.",
      "This book also feels more like Freud thinking out loud rather than him presenting an argument that has already been fully synthesized. In general, I find that his psychological theories tend more toward opinionated narratives, rather than beautifully synthesized fundamentals that are empirically justified.",
    ]
  },
  {
    "title": "My Life In Advertising & Scientific Advertising",
    "author": "Claude C. Hopkins",
    "slug": "scientific-advertising",
    "coverImage": "https://m.media-amazon.com/images/I/51aUvhRhTsL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#FFF",
    "textColor": "#000",
    "date": "November 19, 2024",
    "rating": 7,
    "description": [
      "Claude Hopkins reflects on his lifetime of advertising experience and distills the principles of advertising that he has learned from it.",
      "He builds everything from the idea that advertising should be treated the same as in-person on-on-one sales. He focuses on understanding the needs of the common man and catering to them. His advertising approach emphasizes simplicity and working with human psychology over untargeted attention seeking and embellishment.",
      "David Ogilvy, the \\",
      "My Life in Advertising",
      "Scientific Advertising",
    ]
  },
  {
    "title": "The Compound Effect",
    "author": "Darren Hardy",
    "slug": "the-compound-effect",
    "coverImage": "https://m.media-amazon.com/images/I/610QDSRlLYL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#FFF",
    "textColor": "#DE240D",
    "date": "November 11, 2024",
    "rating": 8,
    "description": [
      "The elements of success framed from the perspective of compounding yourself through small but intentional choices. Though he talks about typical self-help topics, Darren Hardy writes about them with a unique level of clarity.",
      "I find his framing in this book to be the most effective and insightful presentation of the personal operating system that enables achievement.",
      "He also gives sensible explanations for common empirical ideas that are often unnecessarily associated with mysticism, like the law of attraction.",
    ]
  },
  {
    "title": "What Has the Government Done to our Money?",
    "author": "Murray N. Rothbard",
    "slug": "what-has-the-government-done-to-our-money",
    "coverImage": "https://m.media-amazon.com/images/I/71tHGRFGrcL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#221E12",
    "textColor": "#F48D2E",
    "date": "October 28, 2024",
    "rating": 8,
    "description": [
      "A concise and insightful explanation of the fundamentals of money. Builds into an argument against government control of money through central banking.",
      "Money is nothing but an ordinary commodity that starts to become a medium of exchange. All the other uses of money stem from this primary utility.",
      "Rothbard suggests that free market forces are perfectly capable of maintaining a functional currency. Then, he shows us that governments have used subtle coercion over time to artifically control the money supply and give themselves power, using central banking, fiat currencies, and inflation.",
    ]
  },
  {
    "title": "Courage: The Joy of Living Dangerously",
    "author": "Osho",
    "slug": "courage",
    "coverImage": "https://m.media-amazon.com/images/I/91V4hG5qhqL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#71BF85",
    "textColor": "#FFF",
    "date": "October 24, 2024",
    "rating": 5,
    "description": [
      "A compilation of Osho's spoken lectures on courage and risk-taking. This sentence from the book captures his perspective well: \\",
      "Truly living and growing means constantly going into the unknown and taking risk. Courage is not the lack of fear, but the willingness to take risk in spite of fear.",
      "The core ideas of this book are valuable, but the editorial work is lacking. Many of the lectures the editors selected don't directly build on the central theme, and many questionable ideas are presented without justification, like the idea that love is the exact opposite of fear.",
    ]
  },
  {
    "title": "The Outsiders",
    "author": "William N. Thorndike Jr.",
    "slug": "the-outsiders",
    "coverImage": "https://m.media-amazon.com/images/I/61Cth988JcL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#241E20",
    "textColor": "#83CFD5",
    "date": "September 4, 2024",
    "rating": 8,
    "description": [
      "A look into the exceptional capital allocation abilities of eight unconventional CEOs in completely unrelated industries who all outperformed the market and competitors by a massive margin.",
      "Thorndike highlights how each CEO combined long-term thinking with what he calls the \\",
      "He tries to make it seem like this is the only valid skillset that has led to exceptional outcomes in public markets, which seems particularly inaccurate in the technology sector (for now, at least). Regardless, the framework introduced in this book is insightful.",
    ]
  },
  {
    "title": "The Personal MBA",
    "author": "Josh Kaufman",
    "slug": "the-personal-mba",
    "coverImage": "https://m.media-amazon.com/images/I/71X8XbSy7xL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#B68945",
    "textColor": "#FFF",
    "date": "September 2, 2024",
    "rating": 7,
    "description": [
      "A collection of principles to understand every important aspect of building a great business.",
      "Josh Kaufman highlights the 5 core functions of business: value creation, marketing, sales, value delivery, and finance. Next, he covers the human brain and how to work with yourself and others. Finally, he covers how to understand, analyze, and improve systems.",
      "These categories sound simple, and most people are broadly familiar with all of them. However, Kaufman covers the first principles of each topic in a uniquely thorough way.",
    ]
  },
  {
    "title": "Industrial Society and Its Future",
    "author": "Ted Kaczynski",
    "slug": "the-unabomber-manifesto",
    "coverImage": "https://m.media-amazon.com/images/I/51yJT2VKPpL._SY780_.jpg",
    "spineColor": "#DCC9AB",
    "textColor": "#82040A",
    "date": "August 27, 2024",
    "rating": 6,
    "description": [
      "The New York Times",
      "Everyone needs the ability to create and achieve challenging goals. Kazcynski argues that technology is making all goals either to easy or too hard, leaving no good goals for most of society, and causing widespread distress.",
      "Though his conclusion is incorrect, his observations on the psychology of leftism, the tendency for society to shape people and force them into it's molds, and the necessity of the power process are insightful.",
    ]
  },
  {
    "title": "Architecture: Form, Space, and Order",
    "author": "Francis D.K. Ching",
    "slug": "architecture-form-space-order",
    "coverImage": "https://m.media-amazon.com/images/I/81O5ssvpOJL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#24418F",
    "textColor": "#FFF",
    "date": "August 19, 2024",
    "rating": 2,
    "description": [
      "Considered a classic introduction to the simplest principles of architecture. I expected an explanation of design and aesthetics in architecture built up from the elements of form, space, and order. Instead, the book was mostly nice drawings, fluff, and a laundry list of unmotivated concepts.",
      "Ching goes over every single shape and element (ex: line, circle, square, plane) at a painstaking pace and injects his flowery commentary everywhere without saying much of substance. He presents each idea without explaining why it's relevant or how it can be used to any practical end.",
      "The fact that this book is highly regarded is surprising to me, and reflects on the nature of modern architectural education. It seems like the author is trying to create the perception of abstractness and complexity to make his field seem more artistic and skillful.",
    ]
  },
  {
    "title": "The Anatomy of the State",
    "author": "Murray N. Rothbard",
    "slug": "the-anatomy-of-the-state",
    "coverImage": "https://m.media-amazon.com/images/I/612I-AiG69L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#D2CBB9",
    "textColor": "#6F011F",
    "date": "August 19, 2024",
    "rating": 8,
    "description": [
      "Concise first-principled explanation of the role of government. Takes an anarcho-capitalist lens on the view of the state.",
      "The state is the entity that siphons resources through coercion and intimidation as opposed to production and trade. It requires intellectuals to uphold its place in society and fears the opinions of independent dissenting individuals. Attempts to check the power of the state with any sovereign body inevitably lead to the eventual expansion of state power.",
      "This negative characterization of the state may fail to acknowledge a few genuinely positive and important functions that the government carries out, but it is directionally correct, non-consensus, and highly insightful.",
    ]
  },
  {
    "title": "The Real Estate Game",
    "author": "William J. Poorvu",
    "slug": "the-real-estate-game",
    "coverImage": "https://m.media-amazon.com/images/I/71HKmu7DH9L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#B43620",
    "textColor": "#FFF",
    "date": "August 18, 2024",
    "rating": 6,
    "description": [
      "A straightforward introduction to real estate by William J. Poorvu, a successful real estate investor who taught about the topic at Harvard Business School for over 30 years.",
      "He covers all the stages of the real estate game: ideation, commitment, development, operations, and harvesting returns. In each stage, he discusses common pitfalls and all the steps to success.",
      "He highlights the diversity of valid strategies that real estate uniquely affords, leaving room for entrepreneurs to carve their own paths based on ttheir preferences in risk tolerance, active vs. passive strategies, aesthetics, environmental impact, and much more.",
      "Great for quickly familiarizing yourself with the scope of the entire real estate business and the details of every element involved. Lacking in the impressive concision, contrarian insight, or unique perspective that would make the book interesting for people not directly involved in the industry.",
    ]
  },
  {
    "title": "The Essays of Warren Buffet",
    "author": "Lawrence A. Cunningham",
    "slug": "the-essays-of-warren-buffet",
    "coverImage": "https://m.media-amazon.com/images/I/71Uh5iMqrqL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#076C98",
    "textColor": "#FFF",
    "date": "August 12, 2024",
    "rating": 9,
    "description": [
      "The best selections from Warren Buffet's Berkshire Hathaway shareholder letters organized into a comprehensive breakdown of his investing philosophy. Important lessons on corporate governance, common stock markets, long-term investing, valuation, accounting, and much more.",
      "Buffet explains the fundamentals of each of these topics with a simplicity and clarity I have never seen before. He frequently injects his wit and humor.",
      "Berkshire is one of the only companies in the world that has managed to intentionally control the shareholders, volatility, and valuation of their own stock. This exceptional outcome is the result of Munger and Buffet treating all shareholders as business partners, a unique perspective which manifests in all of Buffet's writing.",
      "An incredible introduction to investing and business and an inspiring account of the outliar success and management of Berkshire Hathaway.",
    ]
  },
  {
    "title": "Poor Charlie's Alamanack",
    "author": "Peter D. Kaufman",
    "slug": "poor-charlies-almanack",
    "coverImage": "https://m.media-amazon.com/images/I/81vgkcr86iL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#0E0C56",
    "textColor": "#CCC787",
    "date": "August 6, 2024",
    "rating": 6,
    "description": [
      "A compilation of Charlie Munger's best speeches. He focuses on the importance of building multi-disciplinary knowledge and understanding \\",
      "Excellent essays on the psychology of human misjudgement, the surprisingly destructive nature of bad practice in corporate accounting, and using the first principles of psychology to design a plan for a $2T business.",
      "His speeches often don't translate well to writing; the transcribed format misses out on delivery and audience reactions, and the pacing and concision are suboptimal for a book.",
      "Many of the topics lacked broad relevance. Rather than presenting a full picture of Munger's thinking, this book felt like a small slice of some of his ideas with lots of repetition across chapters.",
    ]
  },
  {
    "title": "The Interpretation of Financial Statements",
    "author": "Benjamin Graham",
    "slug": "the-interpretation-of-financial-statements",
    "coverImage": "https://m.media-amazon.com/images/I/61q5ViYnY1L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#BB7438",
    "textColor": "#FFF",
    "date": "July 31, 2024",
    "rating": 6,
    "description": [
      "Straightforward guide to interpreting the financial statements of publicly traded company. Graham shows you how to think about each of the items on the balance sheet and income statement, and the pitfalls that can mislead prospective investors.",
      "Analysis of financial statements is far from sufficient to make good investment decisions, but it is a necessary tool for an investor to prevent avoidable losses, and to evaluate when a stock may be undervalued.",
    ]
  },
  {
    "title": "Elon Musk",
    "author": "Walter Isaacson",
    "slug": "elon-musk",
    "coverImage": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg",
    "spineColor": "#000",
    "textColor": "#FFF",
    "date": "July 27, 2024",
    "rating": 8,
    "description": [
      "Wow. Being surrounded by Elon's life is incredible. Isaacson does an excellent job highlighting the right stories to provide a full picture of Elon and let you draw your own conclusions.",
      "Elon is exceptionally agentic. He has a strong belief in his ability to turn ideas from imagination into reality. He is aggressively first-principled and focused on product and engineering over everything else. He constantly gravitates toward risk and takes dangerous, often costly bets.",
      "On the other hand, Elon is also deeply flawed, mercurial, and immature. He frequently has manic outbursts and his personal life is full of drama.",
      "Isaacson implies that Elon's flaws are necessary for his success. Instead, I see his success as an affirmation that you can achieve incredible results with a wide variety of dispositions and despite massive personal faults, as long as you possess a few essential qualities.",
    ]
  },
  {
    "title": "Simple Steps to Impossible Dreams",
    "author": "Steven K. Scott",
    "slug": "simple-steps-to-impossible-dreams",
    "coverImage": "https://m.media-amazon.com/images/I/71jz7Wk8KLS._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#28529A",
    "textColor": "#FFF",
    "date": "July 19, 2024",
    "rating": 6,
    "description": [
      "Everyone has dreams. Most people never achieve them. This book guides you to avoid this fate in your own life.",
      "It shows you how to break the chains that keep most people from even trying to achieve their dreams, like the fear of failure and avoidance of criticism. Then it shows you the skills necessary to actually takeoff to success in every area of your life.",
      "Think And Grow Rich",
    ]
  },
  {
    "title": "Tantra Illuminated",
    "author": "Christopher D. Wallis",
    "slug": "tantra-illuminated",
    "coverImage": "https://m.media-amazon.com/images/I/71cADCsR9mL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#1E0C34",
    "textColor": "#E5C759",
    "date": "July 13, 2024",
    "rating": 8,
    "description": [
      "The most thorough and well written book on the philosophy and history of non-dual Tantra.",
      "Tantra has nothing to do with sex, though it has been completely misconstrued to be associated with it in the West. This book focuses on one non-dual strain of Tantra known as Kashmir Shaivism, which provides a philosophy for enlightened living that emphasizes both liberation and active life, and highlights the beauty of existence and the joy of creation.",
      "The author provides excellent explanations for the entire belief system that indicate his own spiritual understanding and covers the important history behind the tradition.",
      "People who are curious should start with Buddhism or Vedanta instead of Kashmir Shaivism. This book will be most interesting for experienced meditators who are already familiar with non-dualism and looking for a more aesthetic and integrated non-dual philosophy.",
    ]
  },
  {
    "title": "Bone",
    "author": "Jeff Smith",
    "slug": "bone",
    "coverImage": "https://m.media-amazon.com/images/I/81JleckryOL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#263137",
    "textColor": "#CF4C52",
    "date": "July 11, 2024",
    "rating": 7,
    "description": [
      "The Lord of The Rings",
      "Avatar The Last Airbender",
      "The rest of the series gets less interesting as it plays out a linear plot, falls into standard fantasy tropes, and deviates from Smith's strengths in an attempt to expand its scope. I was unsatisfied with the ending and found it to be inconsistent with the character development of the main cast.",
      "Worth reading for the aesthetic of the Bone world and the incredible first few books, especially if you are familiar with the series from your childhood.",
    ]
  },
  {
    "title": "Recruiting",
    "author": "Ryan Breslow",
    "slug": "recruiting",
    "coverImage": "https://m.media-amazon.com/images/I/41jojP3003L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#4772B6",
    "textColor": "#FFF",
    "date": "July 3, 2024",
    "rating": 6,
    "description": [
      "Fundraising",
      "The most useful part are when Ryan provides examples of his individual hiring emails for cold-outreach, people going through the hiring process, offer letters, and messages trying to close executive recruits, as well as little tips for making the process smoother and more positive.",
      "Aside from this, he mainly reiterates standard startup hiring practice without adding extra insight or clarity; the people you hire become the company you build, keep a high bar, don't compromise on it, always be recruiting, intentionally curate culture.",
    ]
  },
  {
    "title": "The Parasitic Mind",
    "author": "Gad Saad",
    "slug": "the-parasitic-mind",
    "coverImage": "https://m.media-amazon.com/images/I/71oSh-sum2L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#E2E54C",
    "textColor": "#72609F",
    "date": "July 2, 2024",
    "rating": 6,
    "description": [
      "Elon recommendation that's clearly an inspiration behind how he's running X.About the idea pathogen's in Western society which have slowly encroached on the pursuit of truth.",
      "Gad Saad is a Lebanese Jew who escaped the civil war in Lebanon. This book is his reflection on the corruption of freedom and truth in the West. This trend poses an existential threat to the ethos that made the United States what it is today.",
      "I wish there was more focus on the emergence and spread of idea pathogens and why they're dangerous. Instead, there's an excessive focus on Gad's personal political beliefs. Though his beliefs may be right or wrong, I expect that his selection of unnecessarily pollarizing topics allienates a large section of the total mature audience which he could speak to.",
      "Many of the later sections felt somewhat insufficient, like Gad's discussion of nomological networks and call to action, but the broader topic is important for everyone to be aware of, especially in the United States.",
    ]
  },
  {
    "title": "Thinking in Bets",
    "author": "Annie Duke",
    "slug": "thinking-in-bets",
    "coverImage": "https://m.media-amazon.com/images/I/71WOIOz0ihL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#F14723",
    "textColor": "#000",
    "date": "June 27, 2024",
    "rating": 7,
    "description": [
      "The correct framework for all long-term decision making. Reality is fundamentally unpredictable. Don't try to perfectly map out the future. Don't develop a dependence on certainty. Don't fear risk and failure. Life is a game of poker, not chess.",
      "Instead of thinking in certainties, think in bets. Map out the possibilities, then assign probabilities to each. Make decisions thoughtfully and understand the risk you take on, but don't avoid failure.",
      "Failure in the short-term is inevitable in a probabilistic world. But success in the long-term is inevitable for those who constantly evaluate bets, make decisions, take on risk, and update beliefs to improve future decisions.",
      "This framework may seem obvious, but few people have internalized its implications and practice it with their lives. Read for the wisdom of one of the best female poker players of all time applying her philosophy to life decisions and company building.",
    ]
  },
  {
    "title": "The Startup of You",
    "author": "Reid Hoffman & Ben Casnocha",
    "slug": "the-startup-of-you",
    "coverImage": "https://m.media-amazon.com/images/I/717wa59NjSL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#2D96AB",
    "textColor": "#FFF",
    "date": "June 23, 2024",
    "rating": 7,
    "description": [
      "Modern career advice that everyone should read, especially those that haven't been exposed to the world of startups. Proposes a highly agentic compounding career approach that emphasizes success against the rapidly adapting job markets we see today.",
      "This philosophy will only become more relevant as technology displaces more industries and forces people to adapt quickly or become obselete.",
    ]
  },
  {
    "title": "Enlightenment Is Your Nature",
    "author": "Osho",
    "slug": "enlightenment-is-your-nature",
    "coverImage": "https://m.media-amazon.com/images/I/81hdDy0K0dL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#46B8AE",
    "textColor": "#FFF",
    "date": "June 14, 2024",
    "rating": 9,
    "description": [
      "My favorite book about self-realization. Osho explains everything important with perfect concision and insight, and also stays unserious which makes his perspective refreshing.",
      "He synthesizes all the wisdom from Advaita, Kashmir Shaivism, Christianity, and Buddhism into a single view on reality that reflects the original teachings of each tradition. This view is not meant to be taken on belief, but to be validated empirically in your direct experience.",
      "He emphasizes that self-realization is not a crazy goal, but is a simple reality to be easily relaxed into. This is an important message for those who have been learning from spiritual wisdom, since this process often turns into an intellectual one where insights don't translate to lived experience, and the idea of Enlightenment gets cast into an unreachable ideal.",
    ]
  },
  {
    "title": "You Can Negotiate Anything",
    "author": "Herb Cohen",
    "slug": "you-can-negotiate-anything",
    "coverImage": "https://m.media-amazon.com/images/I/71bxIO7BvGL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#FFE202",
    "textColor": "#443E43",
    "date": "June 12, 2024",
    "rating": 7,
    "description": [
      "Everything is negotiable. All authority can be challenged. Most people negotiate far less often than they should. Realizing this is a big mental unlock and agency boost.",
      "This book will show you that negotiation is primarily about power, and that you actually have power you don't recognize in most situations. An excellent primer on all the core principles of negotiation, with entertaining real life scenarios to build intuition for each concept.",
    ]
  },
  {
    "title": "Pimp",
    "author": "Iceberg Slim",
    "slug": "pimp",
    "coverImage": "https://m.media-amazon.com/images/I/71I5YoXi2cL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#EC1D25",
    "textColor": "#FFF",
    "date": "June 2, 2024",
    "rating": 4,
    "description": [
      "The life story of the renowned Chicago pimp Iceberg Slim. He tells his story as it is, with all the gory details. His writing style is raw, crass, and highly readable.",
      "The most negative, vile, degenerate book that I've ever read, but also an interesting and unique account. I had to binge this book in one day to isolate the degeneracy. You can get a sense for what the book will be like by reading the first page of the introduction.",
      "For what it is, Iceberg Slim actually did an excellent job writing this book. My low rating is just for how toxic and unproductive the topic is, though there are certainly some useful lessons for those looking for them.",
      "I wouldn't recommend it to most people, but for those comfortable with the depraved walks of life and intrigued to psychologically explore, I can promise the most jarring and out-of-distribution reading experience you'll have.",
    ]
  },
  {
    "title": "Shiva Sutras",
    "author": "Swami Lakshmanjoo",
    "slug": "shiva-sutras",
    "coverImage": "https://m.media-amazon.com/images/I/71o491sClFL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#E3A869",
    "textColor": "#000",
    "date": "May 30, 2024",
    "rating": 7,
    "description": [
      "Shiva Sutras",
      "Spanda Karika",
      "Vijnana Bhairava Tantra",
      "Kashmir Shaivism is the richest and most beautiful philosophy of life I've found anywhere. It provides an approach to enlightened living that's fully compatible with self-actualization through career (and modern society by extension), and emphasizes the inherent significance of artistic expression.",
      "Though the philosophy of these books is excellent, the English translations and explanations are lacking. The translations aren't explained in a way that best delivers the insight behind the texts, so I had to dig through a lot of different sources to fully understand the philosophy.",
      "Tantra Illuminated",
    ]
  },
  {
    "title": "Systems Medicine",
    "author": "Uri Alon",
    "slug": "systems-medicine",
    "coverImage": "https://m.media-amazon.com/images/I/71HuTc-BXcL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#F2F6DD",
    "textColor": "#000",
    "date": "May 29, 2024",
    "rating": 8,
    "description": [
      "A first principled breakdown of diseases, covering hormone circuit malfunctions, autoimmune disorders, and aging-related diseases. With a few simple ideas, he manages to explain the majority of illnesses relevant to humans.",
      "Excellent overview of the causes of aging and how we may prevent them. Also provides \\",
      "Antifragile",
    ]
  },
  {
    "title": "Antifragile",
    "author": "Nassim Taleb",
    "slug": "antifragile",
    "coverImage": "https://m.media-amazon.com/images/I/61cmwTmON3L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#D35D2D",
    "textColor": "#FFF",
    "date": "May 16, 2024",
    "rating": 8,
    "description": [
      "antifragile",
      "He highlights how everything that has stood the test of time is antifragile, and shows us how to use antifragility to understand the world, improve our decision making, and build more robust systems.",
      "He constantly makes fun of people he disagrees with throughout the book, making his writing unique and entertaining (and also very salty, likely distasteful to some).",
      "via negativa",
    ]
  },
  {
    "title": "High Output Management",
    "author": "Andy Grove",
    "slug": "high-output-management",
    "coverImage": "https://m.media-amazon.com/images/I/71nEIG8sm5L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#203586",
    "textColor": "#EC8933",
    "date": "May 3, 2024",
    "rating": 9,
    "description": [
      "An insightful guide to management strategy and tactics, formed by Andy Grove's decades of experience leading Intel. The only reference I've found that explains all of management in terms of its first principles.",
      "Opinionated in the best way possible. Grove has personally experimented with all the different approaches to common management challenges, and presents the belief system he has developed from this experience with conviction.",
    ]
  },
  {
    "title": "The Lessons of History",
    "author": "Will & Ariel Durant",
    "slug": "the-lessons-of-history",
    "coverImage": "https://m.media-amazon.com/images/I/61hTpG9gLFL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    "spineColor": "#000",
    "textColor": "#20B7E1",
    "date": "May 1, 2024",
    "rating": 9,
    "description": [
      "The Story of Civilization",
      "It highlights what history teaches us about biology, morals, character, religion, economics, government, war, and more. By turning to the past, it also reveals many of the unintuitive empirical truths about human nature & civilization.",
      "Beyond their insights on history, they also offer a beautiful perspective on what it means to be a historian, what history has to offer us, and what progress means for humanity.",
    ]
  },
  {
    "title": "Why Greatness Cannot Be Planned",
    "author": "Kenneth Stanley & Joel Lehman",
    "slug": "why-greatness-cannot-be-planned",
    "coverImage": "https://m.media-amazon.com/images/I/61PPmbZPGxL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#C6D6E3",
    "textColor": "#604788",
    "date": "April 27, 2024",
    "rating": 7,
    "description": [
      "Definite objectives dominate modern incentive structures. But achieving ambitious goals & defining innovation rarely comes from optimizing toward such objectives. You may disagree with this premise right now.",
      "This book will explain why the premise is both true, and critically important. It will show you why it's so easy to retro-actively misattribute what led to the great creations of the past - which is exactly what society has done.",
      "It then provides an alternative approach to achieve greatness that has truly enabled all great science, innovation, arts, and progress - a strategy focused on individual stepping stones instead of big detailed plans.",
      "30 minute talk",
    ]
  },
  {
    "title": "Solaris",
    "author": "Stanislaw Lem",
    "slug": "solaris",
    "coverImage": "https://m.media-amazon.com/images/I/51yQl6pPpeL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#F15024",
    "textColor": "#FFF",
    "date": "April 23, 2024",
    "rating": 4,
    "description": [
      "Unique alien-contact sci-fi with great ideas that suffer from incomplete execution. Explores the possibility of true communication with alien intelligence and highlights the futility of academia trying to fit the incomprehensible into boxes understandable by humans.",
      "Many interesting themes that aren't fully explored to their potential, like the nature of identity, and the definition of intelligence.",
      "Great perspective on the covert closed-mindedness of humans to true space exploration, summed up well by this sentence from the book - “we don’t want to conquer the Cosmos, we simply want to extend the boundaries of Earth to the frontiers of the Cosmos.”",
      "Lem also loves to write long expositions about the history of science around Solaris, which are great for world-building but are a painful read. I also read the original English translation, which the author himself dissaproves of which may have contributed to my dislike. Reading the new translation may change my opinion.",
    ]
  },
  {
    "title": "Feeling is the Secret",
    "author": "Neville Goddward",
    "slug": "feeling-is-the-secret",
    "coverImage": "https://m.media-amazon.com/images/I/41lfR05m7ZL.jpg",
    "spineColor": "#DEC6AA",
    "textColor": "#62442A",
    "date": "April 15, 2024",
    "rating": 8,
    "description": [
      "Think And Grow Rich",
      "Powerful lessons about the relationship between the conscious & the subconscious, and how to use this knowledge to enable creation.",
      "Best introduced with an excerpt from Neville - \\",
      "If this excerpt sounds like bullshit to you, this book is not for you. If you recognize the truth in it, you will enjoy the rest of the book.",
    ]
  },
  {
    "title": "Mindset",
    "author": "Carol Dweck",
    "slug": "mindset",
    "coverImage": "https://m.media-amazon.com/images/I/71wEDMAAnOL._SL1500_.jpg",
    "spineColor": "#FFF",
    "textColor": "#000",
    "date": "March 31, 2024",
    "rating": 7,
    "description": [
      "People with fixed mindsets believe the qualities that determine their success are predetermined. People with growth mindsets believe these qualities can be developed through their own intentional direction and effort. Carol Dweck explores the outcomes of people with each mindset in-terms of personal success, sports, business, and relationships and shows the importance of adopting a growth mindset.",
      "This book was far better than I expected, in part because I underestimated how critical the growth mindset is. After reading, I'm reminded that this mindset is not just a useful, but a necessary ingredient for all sustainable forms of success. Its also the root of the most antifragile approach to personal growth in anything, which involves constant action, observation, and iteration.",
    ]
  },
  {
    "title": "Chip War",
    "author": "Chris Miller",
    "slug": "chip-war",
    "coverImage": "https://m.media-amazon.com/images/I/71hMs9v7P6L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#FFF",
    "textColor": "#887549",
    "date": "March 27, 2024",
    "rating": 7,
    "description": [
      "The entire history of the semiconductor industry. Covers the stories of all the famous founders & scientists involved, the important technical breakthroughs, the developments in the manufacturing value chain, and the geopolitical forces that have shaped and been shaped by this technology.",
      "Interesting to learn about the dynamics of how economic incentives have made this the most rapidly innovating industry in human history. Also made me appreciate the urgency of the United States vs. China conflict over who controls the chip manufacturing supply chain.",
    ]
  },
  {
    "title": "Common Stocks & Uncommon Profits",
    "author": "Philip A. Fisher",
    "slug": "common-stocks-and-uncommon-profits",
    "coverImage": "https://m.media-amazon.com/images/I/61tzuAYGKqL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#006B5D",
    "textColor": "#FFF",
    "date": "March 24, 2024",
    "rating": 8,
    "description": [
      "One of Warren Buffet's two favorite books on investing. The guide to the most effective and proven strategy for retail investors.",
      "Fisher advocates for a long-term approach where you ignore short-term price action, and focus on identifying a small number of very high quality companies with great management and large growth opportunities, buying them while under-valued, and then never selling.",
      "He shows you how this strategy has always offered the opportunity to make massive returns, and he breaks down the specifics of how to identify great companies and what mistakes to avoid.",
      "Beyond stocks, this book offers timeless insight on investing as a whole and is essential reading for everyone.",
    ]
  },
  {
    "title": "The Goal: A Process of Ongoing Improvement",
    "author": "Eliyahu Goldratt",
    "slug": "the-goal",
    "coverImage": "https://m.media-amazon.com/images/I/81Kuc8tojoL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#005578",
    "textColor": "#FFF",
    "date": "March 17, 2024",
    "rating": 3,
    "description": [
      "One of the 3 books Jeff Bezos requires all executives at Amazon to read. Also the most painstakingly boring book I've finished in a long time (only finished because I was reading it with a friend).",
      "Theory of Constraints",
      "The philosophy itself, which teaches the importance of operational excellence and focusing on bottlenecks, is critical and deeply insightful.",
      "However, the narrative is dragged out far longer than it needs to be, with an irrelevant side plot about the factory owners failing marriage, and every sentence of insight taking several chapters of predictable dialogue to be revealed. All the useful information in the book could be condensed into less than a page, and the stories don't contribute enough effective intuition building to justify their length.",
    ]
  },
  {
    "title": "Immune",
    "author": "Philipp Dettmer",
    "slug": "immune",
    "coverImage": "https://m.media-amazon.com/images/I/91GTGsONnrL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#FFAB00",
    "textColor": "#FFF",
    "date": "March 11, 2024",
    "rating": 9,
    "description": [
      "An introduction to the immune system written by the founder of Kurzgesagt that far exceeded my expectations. Philipp Dettmer breaks down this traditionally unapproachable subject so well that it feels simple and intuitive.",
      "He's done a great job sharing his appreciation for the beauty & elegance of the defense systems our bodies have somehow developed through natural selection. He also constantly uses useful analogies and interjects with his own entertaining commentary, making the book highly readable.",
    ]
  },
  {
    "title": "The Surrender Experiment",
    "author": "Michael A. Singer",
    "slug": "the-surrender-experiment",
    "coverImage": "https://m.media-amazon.com/images/I/91pI+zj6phL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#3480a5",
    "textColor": "#FFF",
    "date": "March 10, 2024",
    "rating": 8,
    "description": [
      "Are we better off fighting with reality to bring our desires into existence, or letting go of our desires and allowing our will to be directed by the same forces of reality that created the perfection of the universe?",
      "Michael Singer dedicated his life to answering this question. This book is about his unexpected journey to creating a multi-billion dollar company through complete surrender.",
      "His story highlights the surprising unpredictability of life and challenges the consensus views on how to live. His lifestyle synthesizes the wisdom of eastern philosophy with youthful ambition and the will to create.",
      "It has changed my perspective on embracing uncertainty and opened my mind to the possibilities of achievement aligned with inner tranquility and the beauty of following the flow of life.",
    ]
  },
  {
    "title": "Refactoring UI",
    "author": "Adam Wathan & Steve Schoger",
    "slug": "refactoring-ui",
    "coverImage": "https://www.refactoringui.com/_next/static/media/book.5380927448c9872170bbc9fc9e5828c4.png",
    "spineColor": "#131F2D",
    "textColor": "#fff",
    "date": "February 28, 2024",
    "rating": 5,
    "description": [
      "A guide to UI design, written by the creators of Tailwind CSS. I was hoping for insight on the first-principles of great web design along with more tactical tips. Instead, this book focuses entirely on tactics.",
      "It leaves you with many useful suggestions to improve the visual appeal of web interfaces, but not much around how to think like a designer.",
    ]
  },
  {
    "title": "Think And Grow Rich",
    "author": "Napoleon Hill",
    "slug": "think-and-grow-rich",
    "coverImage": "https://www.naphill.org/wp-content/uploads/think-and-grow-rich-original-hardcover.png",
    "spineColor": "#FFCA7E",
    "textColor": "#08153B",
    "date": "February 20, 2024",
    "rating": 8,
    "description": [
      "The defining work on the principles and pscyhology of achievement. This book is famous, but still underrated. It isn't about becoming rich - it's about achieving anything you desire. The philosophy can be applied to building wealth and everything else worthwhile.",
      "It guides you through the thirteen steps to achievement, starting with creating a burning desire for a well-defined future. Each one is an insightful and unintuitive lesson demanding reflection.",
      "Everyone should read and reference this book as many times as necessary for its principles to be fully adopted and applied - they're that critical to success.",
      "If you feel like you're drifting through life without direction, spending your time working toward the dreams of others without your own dream, and you don't want to remain that way, you especially have to read this.",
    ]
  },
  {
    "title": "Steal Like An Artist",
    "author": "Austin Kleon",
    "slug": "steal-like-an-artist",
    "coverImage": "/reading/steal-like-an-artist.png",
    "spineColor": "#251E20",
    "textColor": "#fff",
    "date": "February 14, 2024",
    "rating": 7,
    "description": [
      "A short and highly readable book about how to hone your craft as an artist. Similar to \\",
      "Good insights on the importance of taking inspiration from other places, curating your taste, staying creative & consistent, and sharing your work with the world.",
    ]
  },
  {
    "title": "Wild Problems",
    "author": "Russ Roberts",
    "slug": "wild-problems",
    "coverImage": "https://m.media-amazon.com/images/I/81jfAzU2VNL._AC_UY436_FMwebp_QL65_.jpg",
    "spineColor": "#F9FAF5",
    "textColor": "#28337C",
    "date": "January 29, 2024",
    "rating": 8,
    "description": [
      "Life is made up of decisions. Most of these decisions can be evaluated using ordinary decision making frameworks using specific optimization functions.",
      "But some of these decisions - like deciding where to live, who to marry, and what to do with your life - force you to make life-defining choices with incomplete information to questions with no obvious answers.",
      "This book is about how to deal with these \\",
      "I read it after making a big decision in my life, and all the advice resonated in hindsight. I wish I had read it sooner so I could have made the decision with more confidence.",
    ]
  },
  {
    "title": "Organizing Genius",
    "author": "Warren Bennis & Patricia Ward Biederman",
    "slug": "organizing-genius",
    "coverImage": "https://m.media-amazon.com/images/I/71-nnn-PPAL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#D8324B",
    "textColor": "#FFF",
    "date": "January 20, 2024",
    "rating": 7,
    "description": [
      "Snow White and the Seven Dwarves",
      "Reading the stories of these groups helps to develop your own intuitions, although I wish the stories were told in more detail. The list of insights at the end about the commonalities between great groups could have used more development.",
    ]
  },
  {
    "title": "7 Powers: The Foundations of Business Strategy",
    "author": "Hamilton Helmer",
    "slug": "7-powers",
    "coverImage": "https://m.media-amazon.com/images/I/61ZScoZzPLL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#1D2F47",
    "textColor": "#FFF",
    "date": "January 17, 2024",
    "rating": 9,
    "description": [
      "The defining work on business strategy. This book contains an exhaustive list of the business strategies that yield long-term value, framed in the context of benefits offered to incumbents and barriers to competitors.",
      "Beyond it's exploration of strategy, it provides a high-level map of building companies that's often missing in the way startup common knowledge is communicated, and is critical to understanding the big picture.",
      "The examples in this book are concise and strictly add to the main points, which is refreshing compared with the standard unnecessary use of stories in many books.",
    ]
  },
  {
    "title": "The Dark Forest",
    "author": "Cixin Liu",
    "slug": "the-dark-forest",
    "coverImage": "https://m.media-amazon.com/images/I/81jxpQ+uHZL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#171516",
    "textColor": "#FBA10C",
    "date": "December 30, 2023",
    "rating": 7,
    "description": [
      "The Dark Forest",
      "The book struggles in its character development and pacing at times. Its slow to get started with its sci-fi plot, which many people criticize, although I enjoyed Liu's writing in the first half regardless.",
      "It became a slog midway through the book to the point where I didn't want to finish, but I held out to read the ending. There are some plot holes in the build up, but the ending was mind-blowing and worth it.",
    ]
  },
  {
    "title": "The Great CEO Within",
    "author": "Matt Mochary",
    "slug": "the-great-ceo-within",
    "coverImage": "https://m.media-amazon.com/images/I/71UA9NsGIBL._SL1500_.jpg",
    "spineColor": "#000",
    "textColor": "#8C3154",
    "date": "December 24, 2023",
    "rating": 7,
    "description": [
      "Matt Mochary coaches the CEOs of Coinbase, Plaid, Reddit, Brex, OpenAI, Flexport, Rippling, and many more multi-billion dollar tech companies. This book is his guide to being an effective CEO.",
      "The most valuable part is his guide to the individual habits that make a great CEO - he lays out the ideal execution system & best-practices for wellbeing.",
      "The rest of the book provides tactics for running each unit of a startup. He provides a good overview of every important concern, although many of these topics are more thoroughly covered in other tactical startup books.",
    ]
  },
  {
    "title": "Disciplined Entrepreneurship",
    "author": "Bill Aulet",
    "slug": "disciplined-entrepreneurship",
    "coverImage": "https://img.perlego.com/books/RM_Books/wiley_hlvwyirv/9781118720813_300_450.webp",
    "spineColor": "#FFF",
    "textColor": "#000",
    "date": "December 22, 2023",
    "rating": 7,
    "description": [
      "A rigorous first-principled approach to starting businesses that will give you confidence that you're working on something with J-curve potential.",
      "Goes over selecting and evaluating a market, understanding customer needs and decision making, designing a business model, validating key assumptions, and developing a product plan.",
      "The concepts are simple, but many founders skip some of these steps and suffer because of it.",
    ]
  },
  {
    "title": "Blitzscaling",
    "author": "Reid Hoffman",
    "slug": "blitzscaling",
    "coverImage": "https://m.media-amazon.com/images/I/81C2N5KUVwL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#D71D22",
    "textColor": "#FFF",
    "date": "December 19, 2023",
    "rating": 8,
    "description": [
      "Blitzscaling is the process of scaling a company by strategically prioritizing rapid growth above everything else. The largest software companies, including Google, LinkedIn, Facebook, Uber, Airbnb, etc. have successfully used this strategy to reach massive scale.",
      "This book covers how to execute a blitzscaling strategy and mitigate its negative effects. The idea of scaling rapidly to dominate the market after hitting PMF gives me an adrenaline rush.",
    ]
  },
  {
    "title": "Getting Things Done",
    "author": "David Allen",
    "slug": "getting-things-done",
    "coverImage": "https://s3-us-west-2.amazonaws.com/justsaywen/books/getting-things-done.jpg",
    "spineColor": "#2dbef7",
    "textColor": "#fff",
    "date": "December 8, 2023",
    "rating": 6,
    "description": [
      "This book reduces the art of execution to its most essential form and structures it into a set of memorable principles.",
      "Worth reading the first part for its philosophy on productivity. The second part gets into tactical advice which is several decades outdated.",
    ]
  },
  {
    "title": "The War of Art",
    "author": "Steven Pressfield",
    "slug": "the-war-of-art",
    "coverImage": "https://m.media-amazon.com/images/I/41ET8OFVFCL.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "November 24, 2023",
    "rating": 8,
    "description": [
      "Anyone who strives to create faces Resistance at some point on their journey. Resistance is what prevents us from achieving what we want to, and it comes in many forms. This book is about how to identify & defeat Resistance.",
      "It presents a unique attitude toward creation that focuses on remembering the nature of Resistance, overcoming it through consistency, and maintaining humility and appreciation for the divinity from which art flows through us.",
    ]
  },
  {
    "title": "The Gardener and the Carpenter",
    "author": "Alison Gopnik",
    "slug": "the-gardener-and-the-carpenter",
    "coverImage": "https://m.media-amazon.com/images/I/51gWcz9GINL.jpg",
    "spineColor": "#39340A",
    "textColor": "#fff",
    "date": "November 23, 2023",
    "rating": 8,
    "description": [
      "A book about the philosophy, neuroscience, and psychology of caring for children written by a grandmother who also runs a cognitive and developmental science lab at Berkeley.",
      "Her sentences are full of wisdom, and her mindset toward raising children is beautiful - \\",
      "She presents a full picture of the evolutionary roots of parenting and uses this to inform her advice. She does a good job of exploring the nuances of raising children in each age group, and offers perspective on how we can use the science of parenting to improve the education system.",
    ]
  },
  {
    "title": "Fundraising",
    "author": "Ryan Breslow",
    "slug": "fundraising",
    "coverImage": "https://m.media-amazon.com/images/I/41P2A1V3CHL._AC_UF350,350_QL50_.jpg",
    "spineColor": "#EE6157",
    "textColor": "#fff",
    "date": "October 28, 2023",
    "rating": 9,
    "description": [
      "A concise and tactical guide to fundraising with everything you need to know. Must-read for anyone planning to raise venture capital.",
      "Ryan has formed his intuitions on the topic the hard way through trial-and-error, and has the results to backup his strategies with his company Bolt raising huge venture rounds.",
      "His framework for an ideal pitch is also the perfect minimal narrative to explain any venture-scalable company.",
    ]
  },
  {
    "title": "Mandukya Karika",
    "author": "Swami Gaudapada",
    "slug": "mandukya-karika",
    "coverImage": "https://m.media-amazon.com/images/I/A10lXKbBQtL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#D44824",
    "textColor": "#FFF",
    "date": "September 13, 2023",
    "rating": 6,
    "description": [
      "Mandukya Upanishad",
      "Advaita Vedanta",
      "It's filled with great analogies for understanding non-dualism, along with several overly religious or complex descriptions that could benefit from simplification.",
    ]
  },
  {
    "title": "High Growth Handbook",
    "author": "Elad Gil",
    "slug": "high-growth-handbook",
    "coverImage": "https://m.media-amazon.com/images/I/41nTX5NVGKL.jpg",
    "spineColor": "#282F3F",
    "textColor": "#008560",
    "date": "September 1, 2023",
    "rating": 7,
    "description": [
      "A value dense tactical guide on growing a company from initial success to scale.",
      "Many books focus on how to build something customer's want. Many books focus on how to operate a large company. Few explain how to scale from Series A to IPO, since few people have successfully accomplished this.",
      "Useful insights for early founders to develop awareness of problems they'll face later, although most people need to worry about getting to Series A first. I'll come back and read this book again when I'm in this stage of building a company, and I'm sure the advice will resonate even more.",
    ]
  },
  {
    "title": "Several Short Sentences About Writing",
    "author": "Verlyn Klinkenborg",
    "slug": "several-short-sentences-about-writing",
    "coverImage": "https://ecx.images-amazon.com/images/I/41Pls-a1fEL.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "July 29, 2023",
    "rating": 10,
    "description": [
      "This is the most insightful book on writing I've read. The author's philosophy is simple: the sentence is the fundamental unit of writing. If you focus on making each sentence great, your writing will be great.",
      "He gives practical tips on how to improve your sentences by eliminating non-essential words and he shares his method for sentence creation.",
      "Beyond the quality of the author's writing philosophy, the book is written with a level of intention and concision I didn't know was possible.",
      "Zero to One",
    ]
  },
  {
    "title": "Start With Why",
    "author": "Simon Sinek",
    "slug": "start-with-why",
    "coverImage": "https://m.media-amazon.com/images/I/71K9EcfzJ4L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#fff",
    "textColor": "#f51d5a",
    "date": "July 28, 2023",
    "rating": 5,
    "description": [
      "The core concept of this book is important, but it could've been better explained in a 5 page blog post than in this 300 page book.",
      "The idea that you should start with the \\",
      "Unfortunately, the book spends hundreds of pages explaining to you why \\",
      "Instead, I wanted to see more explanation about how to actually start with why. The book also missed out on how relevant it's philosophy is to personal decisions.",
    ]
  },
  {
    "title": "The Changing World Order",
    "author": "Ray Dalio",
    "slug": "the-changing-world-order",
    "coverImage": "https://m.media-amazon.com/images/I/41c7pa262UL._SX327_BO1,204,203,200_.jpg",
    "spineColor": "#000",
    "textColor": "#fff",
    "date": "July 25, 2023",
    "rating": 8,
    "description": [
      "All great nations go through cycles of rise and decline. With this in mind, Ray Dalio develops a framework based on key indicators to evaluate where in its cycle a nation is. Using this framework, he makes the case that the United States is on the decline from it's peak, and that China will be the next dominant global power.",
      "This book is dense with insights about how societies function, how great nations are created, how power dynamics shift over time, etc. I'd consider this essential reading for anyone curious about how the world works.",
    ]
  },
  {
    "title": "On Writing Well",
    "author": "William Zinsser",
    "slug": "on-writing-well",
    "coverImage": "https://m.media-amazon.com/images/I/71bIiz4wX0L._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#289eed",
    "textColor": "#fff",
    "date": "April 15, 2023",
    "rating": 9,
    "description": [
      "Several Short Sentences on Writing",
      "William Zinsser has a minimalist approach to writing that focuses on stripping out everything unnecessary and making sure that every word serves a purpose.",
      "He also has great perspective on the purpose of writing and what writing in your own voice actually means.",
    ]
  },
  {
    "title": "The Three-Body Problem",
    "author": "Cixin Liu",
    "slug": "the-three-body-problem",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg",
    "spineColor": "#365d9c",
    "textColor": "#fff",
    "date": "March 14, 2023",
    "rating": 7,
    "description": [
      "Unique spin on the contact with aliens theme with a compelling reveal. It's also nice variety to have the backdrop of the Chinese cultural revolution; an uncharacteristic and unique setting for a typical sci-fi novel.",
    ]
  },
  {
    "title": "Principles",
    "author": "Ray Dalio",
    "slug": "principles",
    "coverImage": "https://dansilvestre.com/wp-content/uploads/2021/05/principles.jpg",
    "spineColor": "#000",
    "textColor": "#fff",
    "date": "February 25, 2023",
    "rating": 7,
    "description": [
      "I scanned the section on Dalio's life and skipped to his principles. The principles are more like meta-principles on how to prioritize.",
      "Most were too broad to extract actionable insights from, but they were all thought-provoking.",
      "The most valuable idea I extracted from the book was the concept of creating an explicit set of personal principles for decision making. Personal principles are usually implicit and come from inuition - making them explicit is valuable.",
    ]
  },
  {
    "title": "How the World Really Works",
    "author": "Vaclav Smil",
    "slug": "how-the-world-really-works",
    "coverImage": "https://m.media-amazon.com/images/I/71sPHfi9-FL.jpg",
    "spineColor": "#f55236",
    "textColor": "#000",
    "date": "Feb 17, 2023",
    "rating": 6,
    "description": [
      "More like how fossil fuels underlie core systems that the world depends on. A climate book on how technologists overestimate how easy it is for technology to displace current fossil fuel dependence.",
      "It shows why the energy, materials, and food production systems will likely depend on fossil fuels for longer than we expect.",
      "Vaclav Smil has a purist writing approach. He believes in only writing facts without injecting opinion or his own thoughts.",
      "It makes the book unbiased but also lacking in narrative or insight, making it hard to get through. I appreciated (but didn't fully agree with) his opposition toward techno-optimism since it's a less common perspective in my environments.",
    ]
  },
  {
    "title": "Good to Great",
    "author": "Jim Collins",
    "slug": "good-to-great",
    "coverImage": "https://m.media-amazon.com/images/I/513OnP4AwTL.jpg",
    "spineColor": "#ed2a1c",
    "textColor": "#fff",
    "date": "Feb 10, 2023",
    "rating": 6,
    "description": [
      "A few simple ideas on how to turn a good company into a consistently great company, backed by a data-driven study on real companies.",
      "The strategies are all intuitive. This is also more of a correlative study than a causational one, so it's hard to say that the factors Collins choose's to highlight are the exclusive set necessary to succeed.",
    ]
  },
  {
    "title": "The Courage To Be Disliked",
    "author": "Fumitake Koga & Ichiro Kishim",
    "slug": "the-courage-to-be-disliked",
    "coverImage": "https://m.media-amazon.com/images/I/41BwbfHl3ML.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "Feb 4, 2023",
    "rating": 5,
    "description": [
      "A highly readable philosophy book about the beliefs and psychology of Alfred Adler, a lesser known rival and equal to Freud and Jung. Told in the format of a young skeptical student debating with a wise old philosopher in Japan, which was a very creative and digestable way to teach philosophy.",
      "The philosophy has some novel ideas, but it plays too much in extremes (like saying that \\",
      "The student-teacher dialogue could also use improvement. The student should have been directing his questions at debunking the teacher's arguments, but instead he just rejects every statement the teacher says. Most of the ideas are covered better in other books.",
    ]
  },
  {
    "title": "Ego is the Enemy",
    "author": "Ryan Holiday",
    "slug": "ego-is-the-enemy",
    "coverImage": "https://m.media-amazon.com/images/I/41Lq9V+gtHL._AC_SY400_.jpg",
    "spineColor": "#0c486b",
    "textColor": "#fff",
    "date": "January 30, 2023",
    "rating": 8,
    "description": [
      "Excellent required reading for all ambitious young people that want to build successful careers.",
      "Covers almost all of the classic pitfalls of ego that plight young people - especially those in Gen Z exposed to startups & Silicon Valley at a young age (a group that includes most of my friends and me).",
      "Each chapter is a new powerful lesson on restraint, humility, attitude, and more. The chapter on \\",
    ]
  },
  {
    "title": "Affective Neuroscience",
    "author": "Jaak Panksepp",
    "slug": "affective-neuroscience",
    "coverImage": "https://m.media-amazon.com/images/I/51fthTPjQ8L._AC_SY1000_.jpg",
    "spineColor": "#000",
    "textColor": "#fff",
    "date": "January 18, 2023",
    "rating": 8,
    "description": [
      "A perfect introduction to the neuroscience of emotions, taught by one of its most insightful teachers.",
      "Panksepp covers emotional systems from a variety of perspectives, laying out neuroanatomical, neurobiological, and neurochemical foundations, while taking into account relevant psychology an philosophy.",
      "This textbook goes far beyond telling the facts. Panksepp also lays out his thought-provoking personal insights and theories.",
      "He often takes a step back from the facts to offer computational and philosophical theories about the brain, appreciate the beauty behind different aspects of neuroscience, or to offer thoughtful reflections on the nature of emotions.",
    ]
  },
  {
    "title": "The Last Question",
    "author": "Isaac Asimov",
    "slug": "the-last-question",
    "coverImage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375886757l/18299452.jpg",
    "spineColor": "#000",
    "textColor": "#fff",
    "date": "December 18, 2022",
    "rating": 9,
    "description": [
      "Isaac Asimov said this was his favorite of his own writing, which made me curious to read it.",
    ]
  },
  {
    "title": "Awaken the Giant Within",
    "author": "Tony Robbins",
    "slug": "awaken-the-giant-within",
    "coverImage": "https://cdn.slidesharecdn.com/ss_thumbnails/anthonyrobbins-awakenthegiantwithinupdated-111020031504-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds",
    "spineColor": "#b38e32",
    "textColor": "#000",
    "date": "December 17, 2022",
    "rating": 6,
    "description": [
      "From the title, I expected that this would be more about manifestation and the psychology of achieving big results. Instead, it's more about emotional regulation and mastery of your mind.",
      "The most valuable concept is the process of neuro-associative conditioning, where Robbins shows you how to control your motivations and actions by conditioning your brain.",
      "The examples are dated now, which made it less engaging, and some of his messages are communicated better in other books, but the core psychological principles are valuable and worth reading.",
    ]
  },
  {
    "title": "Six Easy Pieces",
    "author": "Richard Feynman",
    "slug": "six-easy-pieces",
    "coverImage": "https://schoolworkhelper.net/wp-content/uploads/2012/05/Six-Easy-Pieces.jpeg",
    "spineColor": "#f22411",
    "textColor": "#340b52",
    "date": "December 17, 2022",
    "rating": 4,
    "description": [
      "My rating here is an unpopular opinion, given that Feynman is one of the best physics teachers of all time, and this series is typically considered excellent.",
      "I think I expected more perspective-shifting insight on how to intuitively understand different principles of physics in unique ways, which I found at times, but there was also a substantial amount repetition from standard high-school physics, with similar pedagogical approaches.",
      "My rating is mainly motivated by my expectation of more unique insight characteristic of Feynman, which I didn't find much of in this book. Still a good explanation of the relevant physics.",
    ]
  },
  {
    "title": "The Almanack of Naval Ravikant",
    "author": "Eric Jorgenson",
    "slug": "the-almanack-of-naval-ravikant",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "December 13, 2022",
    "rating": 8,
    "description": [
      "I went into the book expecting another iteration of self-help or life advice books, but ended up really liking it. The author organizes all of Naval's online advice into a nice structure around achieving happiness and financial freedom in life.",
      "Very high readability, like reading through a series of tweet storms for the entire book, and great boiled down insights on time allocation, what to optimize for, how to be happy, and more.",
    ]
  },
  {
    "title": "On The Shortness of Life",
    "author": "Seneca",
    "slug": "on-the-shortness-of-life",
    "coverImage": "https://m.media-amazon.com/images/I/41HlG+jCHDL._AC_SY780_.jpg",
    "spineColor": "#192859",
    "textColor": "#fff",
    "date": "November 5, 2022",
    "rating": 8,
    "description": [
      "Seneca has one message here which is quite simple: life is short, but we make it much shorter by spending time on things that are unimportant.",
      "As simple as it is, it's necessary reminder, and Seneca delivers it in a unique way that brings up relevant points and makes you seriously think about how you're spending your time.",
    ]
  },
  {
    "title": "From Third World To First",
    "author": "Lee Kuan Yew",
    "slug": "from-third-world-to-first",
    "coverImage": "https://m.media-amazon.com/images/I/41QFuIPHVOL._AC_SY780_.jpg",
    "spineColor": "#000",
    "textColor": "#fff",
    "date": "October 11, 2022",
    "rating": 7,
    "description": [
      "Lee Kuan Yew accomplished one of the most impressive feats of all time - he turned Singapore from a third-world to first-world country under his leadership alone.",
      "This book is his reflection on how he did it, with insights on everything from leadership and diplomacy to economics and gardening.",
      "I read the first section about the foundations of each major Singaporean department and learned a lot. I skipped over the rest, which covered Singaporean history and diplomacy.",
    ]
  },
  {
    "title": "Building An Elite Organization",
    "author": "Don Wenner",
    "slug": "building-an-elite-organization",
    "coverImage": "https://m.media-amazon.com/images/I/41dfmBIUJQS._AC_SY780_.jpg",
    "spineColor": "#245cab",
    "textColor": "#fff",
    "date": "August 23, 2022",
    "rating": 7,
    "description": [
      "A good overview of the frameworks needed to build a high performing organization.",
      "Mostly focused on building out hiring pipelines and attracting talent, leading effectively and strategic planning, and effective execution at a team level.",
      "The first half was good, then it got repetitive toward the end.",
    ]
  },
  {
    "title": "Zero to One",
    "author": "Peter Thiel",
    "slug": "zero-to-one",
    "coverImage": "https://m.media-amazon.com/images/I/51zGCdRQXOL._AC_UF894,1000_QL80_.jpg",
    "spineColor": "#5e7fa6",
    "textColor": "#fff",
    "date": "July 3, 2022",
    "rating": 9,
    "description": [
      "The bible of starting a massive technology company. Anyone interested in startups needs to read this.",
      "The first principles on (1) what to work on (2) how to work on it to create massive value and (3) how to capture part of the value to build a valuable company.",
    ]
  },
  {
    "title": "The Graveyard Book",
    "author": "Neil Gaiman",
    "slug": "the-graveyard-book",
    "coverImage": "https://m.media-amazon.com/images/I/51f63bXc2NL.jpg",
    "spineColor": "#0e1653",
    "textColor": "#fff",
    "date": "August 4, 2021",
    "rating": 7,
    "description": [
      "Loved this book in middle school so I decided to read it again. It still has the same dark and uneasy tone, along with the bittersweet inevitability of how Bod's life will need to end up that makes it a nice read.",
      "I didn't like it as much as when I was younger - but maybe because it's easier to appreciate closer to the age and mentality of Bod.",
    ]
  },
  {
    "title": "Endurance: Shackleton's Incredible Voyage",
    "author": "Alfred Lansing",
    "slug": "endurance-shackletons-incredible-voyage",
    "coverImage": "https://m.media-amazon.com/images/I/51nbCCBDUEL.jpg",
    "spineColor": "#000",
    "textColor": "#fff",
    "date": "July 26, 2021",
    "rating": 5,
    "description": [
      "A crazy story about grit and the limits of the human will.",
      "It follows the famous crew assembled by Ernest Shackleton to try to make the first succesful expedition across Antarctica - except their boat gets trapped in ice near the beginning of their voyage, and they're forced to survive the brutal Arctic winter.",
      "Stories like these are always a gratitude shock - they put things into perspective for how bad things could be. The book got very slow at points, but still an interesting read.",
    ]
  },
  {
    "title": "Flowers for Algernon",
    "author": "Daniel Keyes",
    "slug": "flowers-for-algernon",
    "coverImage": "https://prodimage.images-bn.com/pimages/9780156030304_p0_v6_s1200x630.jpg",
    "spineColor": "#e02f2f",
    "textColor": "#fff",
    "date": "July 15, 2021",
    "rating": 10,
    "description": [
      "This book is written as if it were the journal of the mentally challenged Charlie Gordon, who undergoes an experimental surgery to increase his intelligence.",
      "It's a beautiful story, as well as an exploration of the effects of intelligence on the human psyche, but I also especially love the attention to detail in each character's psychology.",
      "It felt like every interaction with each character was written with careful consideration of each indiviuals temperament and motivating functions, allowing the reader to effectively understand their personalities and goals through subtle signals, just like you could in real life.",
    ]
  },
  {
    "title": "Range",
    "author": "David Epstein",
    "slug": "range",
    "coverImage": "https://m.media-amazon.com/images/I/7176ym1cKkL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#6befe0",
    "textColor": "#000",
    "date": "July 3, 2021",
    "rating": 2,
    "description": [
      "I was excited at the concept of a book about generalists and why being a generalist is useful. Was expecting some insight on how to be a generalist effectively and some of the potential downsides.",
      "Instead it basically just turned into one of the classic \\",
    ]
  },
  {
    "title": "Choice Upanishads",
    "author": "Avula Parthasarathy",
    "slug": "choice-upanishads",
    "coverImage": "https://cdn.exoticindia.com/images/products/original/books-2019/uad518.jpg",
    "spineColor": "#030226",
    "textColor": "#fff",
    "date": "June 26, 2021",
    "rating": 4,
    "description": [
      "A breakdown of the Upanishads by Parthasarthy. A decent analysis of the texts and explains some concepts well.",
      "When it comes to the more difficult Upanishads, especially those covering non-dualism, Parthasarthy gives an unnecessarily flowery and poetic explanation in a way that wouldn't be helpful for people new to the concepts.",
      "Generally good just because the Upanishads themselves have a lot of wisdom within them.",
    ]
  },
  {
    "title": "The Charisma Myth",
    "author": "Olivia Fox Cabane",
    "slug": "the-charisma-myth",
    "coverImage": "https://m.media-amazon.com/images/I/51VDzOa-ykL._AC_SY780_.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "June 20, 2021",
    "rating": 5,
    "description": [
      "From the blurb, I expected a first principled breakdown of charisma and what creates it, and some insightful and actionable steps to increase it. Instead, there are some decent generic tips on how to increase your confidence, but nothing really new or groundbreaking.",
      "How to Win Friends And Influence People",
      "The Art of Mingling",
    ]
  },
  {
    "title": "Moonwalking with Einstein",
    "author": "Joshua Foer",
    "slug": "moonwalking-with-einstein",
    "coverImage": "https://upload.wikimedia.org/wikipedia/en/5/59/Moonwalking_with_einstein.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "June 19, 2021",
    "rating": 7,
    "description": [
      "About how to hack your memory, and the world of memory competitions.",
      "You learn the strategy that all professional memory competitors use to memorize long lists, called \\",
    ]
  },
  {
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "slug": "a-brief-history-of-time",
    "coverImage": "https://m.media-amazon.com/images/I/51+GySc8ExL._AC_SY780_.jpg",
    "spineColor": "#06073d",
    "textColor": "#fff",
    "date": "June 16, 2021",
    "rating": 5,
    "description": [
      "The history of our universe, but with too much unmotivated technical detail and not enough context.",
      "I love technical details when they're explained well, but Hawking often dives into details without ever framing them with why they're relevant.",
      "The readability wasn't great either - I was hoping for a narrative about the history of the universes creation with technical details to fill in the gaps, but instead it was several losely strung together technical details without any broader narrative.",
    ]
  },
  {
    "title": "This Is Marketing",
    "author": "Seth Godin",
    "slug": "this-is-marketing",
    "coverImage": "https://m.media-amazon.com/images/I/51UYILvuvtL._AC_SY780_.jpg",
    "spineColor": "#f57a1d",
    "textColor": "#000",
    "date": "June 10, 2021",
    "rating": 6,
    "description": [
      "Seth Godin presents an unconventionally personal and holistic view of marketing.",
      "He provides lots of useful frameworks to think about how to approach marketing for your own business, and what it takes to market a product well.",
      "The book didn't resonate as much with me on my first read, but when I read it again, I suspect that I'll get more out of it and my rating will increase.",
    ]
  },
  {
    "title": "Life 3.0",
    "author": "Max Tegmark",
    "slug": "life-3-0",
    "coverImage": "https://m.media-amazon.com/images/I/41oUl8JqogL.jpg",
    "spineColor": "#180b26",
    "textColor": "#fff",
    "date": "June 4, 2021",
    "rating": 7,
    "description": [
      "A broad introduction to what the future of AI and general intelligence could hold for humanity, and the ethical consierations that should be taken into account as we move forward.",
      "The thought experiment in the introduction is a cool imagination of what general intelligence could look like.",
      "The book has become slighlty outdated with the recent developments in AI.",
    ]
  },
  {
    "title": "The ABC Murders",
    "author": "Agatha Christie",
    "slug": "the-abc-murders",
    "coverImage": "https://m.media-amazon.com/images/I/51Bi5EIJZKL._AC_SY1000_.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "May 28, 2021",
    "rating": 6,
    "description": [
      "Murder on the Orient Express",
      "And Then There Were None",
      "This one felt more like a regular mystery book - still entertaining and enjoyable, but not at the same level as those books.",
    ]
  },
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "slug": "atomic-habits",
    "coverImage": "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
    "spineColor": "#fffff0",
    "textColor": "#222",
    "date": "May 25, 2021",
    "rating": 8,
    "description": [
      "The definitive book on building habits. I hesitated to read it because I thought it would be like most self-help books with a few simple concepts that are generally intuitive.",
      "I was very wrong. The book is extremely information-dense with useful strategies to effectively build habits. Every new chapter introduces new actionable tips.",
      "Building habits is a critical skill, so reading this book is critical.",
    ]
  },
  {
    "title": "When Breath Becomes Air",
    "author": "Paul Kalanithi",
    "slug": "when-breath-becomes-air",
    "coverImage": "https://m.media-amazon.com/images/I/41csVfG7xxL._AC_SY780_.jpg",
    "spineColor": "#fff3d4",
    "textColor": "#000",
    "date": "May 20, 2021",
    "rating": 6,
    "description": [
      "A memoir by a neurosurgeon who was diagnosed with stage IV lung cancer at 36. The book is a reflection on his life and his experiences with death. The letter to his daughter at the end was beautiful.",
    ]
  },
  {
    "title": "Top 5 Regrets of the Dying",
    "author": "Bronnie Ware",
    "slug": "top-5-regrets-of-the-dying",
    "coverImage": "https://m.media-amazon.com/images/I/51564Zn2Q4L._AC_SY780_.jpg",
    "spineColor": "#f0e16e",
    "textColor": "#111f59",
    "date": "May 16, 2021",
    "rating": 6,
    "description": [
      "The author, who has been a palliative care nurse for many years, shares what she's learned about life from the most common regrets of her dying patients.",
      "The regrets are a good reminder for everyone - although they aren't anything unexpected.",
    ]
  },
  {
    "title": "The Way of the Superior Man",
    "author": "David Deida",
    "slug": "the-way-of-the-superior-man",
    "coverImage": "https://m.media-amazon.com/images/I/51u5pkflgoL._AC_SY780_.jpg",
    "spineColor": "#c28348",
    "textColor": "#000",
    "date": "May 9, 2021",
    "rating": 3,
    "description": [
      "A controversial but thought-provoking book on how men should act toward women. Many interesting ideas, mixed with Deida's unjustified claims stated as if they were apparent fact.",
      "I gave it a low rating because there are many arbitrary/unjustified ideas that are somewhat destructive to spread - but I actually do like how unconventional Deida's ideas are and he has many good tactical tips around maintaining attraction and sexual polarity in relationships.",
    ]
  },
  {
    "title": "A Thousand Brains",
    "author": "Jeff Hawkins",
    "slug": "a-thousand-brains",
    "coverImage": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609237769l/54503521.jpg",
    "spineColor": "fff",
    "textColor": "#000",
    "date": "May 6, 2021",
    "rating": 5,
    "description": [
      "An interesting new theory for thinking about how brain systems operate at a high-level. Hawkins argues for the significance of independent cortical-columns in the brain as individual functional units to synthesize information.",
      "The theory seems plausible but unlikely to capture the full picture, which can describe most theories.",
      "I wish the book went into more technical detail on the theory itself and it's implications, but instead only the first third of the book is dedicated to it.",
      "The next two-thirds of the book are Hawkins talking about his theories on AI and the future of humanity, which are unrelated and also a bit incongruous.",
    ]
  },
  {
    "title": "DMT: The Spirit Molecule",
    "author": "Rick Strassman",
    "slug": "dmt-the-spirit-molecule",
    "coverImage": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780892819270/dmt-the-spirit-molecule-9780892819270_hr.jpg",
    "spineColor": "#605ed1",
    "textColor": "#fff",
    "date": "May 1, 2021",
    "rating": 5,
    "description": [
      "Accounts from the father of American psychedelic research on the nature of DMT experiences as observed during the first ever clinical trials of the drug.",
      "An interesting book for anyone curious about psychedelics. The book has many patient trip stories which is useful at first, but can get repetitive.",
    ]
  },
  {
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "slug": "sapiens",
    "coverImage": "https://m.media-amazon.com/images/I/51Pe5D36rML._AC_SY780_.jpg",
    "spineColor": "#faf6e8",
    "textColor": "#000",
    "date": "March 29, 2021",
    "rating": 7,
    "description": [
      "A creative non-traditional history book about humanity that explores how stories have our species.",
      "The core concept is that religions, businesses, language and much more are all shared myths. This lens casts a more high-clarity perspective on the world.",
    ]
  },
  {
    "title": "The Power of Now",
    "author": "Eckart Tolle",
    "slug": "the-power-of-now",
    "coverImage": "https://upload.wikimedia.org/wikipedia/en/6/66/TPON_Cover_LG.jpg",
    "spineColor": "#f0eda8",
    "textColor": "#222",
    "date": "February 8, 2021",
    "rating": 7,
    "description": [
      "The core message of spirituality condensed into an accessible format that focuses on the importance of the moment as a path toward self-realization. Great first book on the topic since it's easier to understand than most eastern philosophy. This is a good entrypoint for people curious about understand the Self.",
    ]
  },
  {
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "slug": "how-to-win-friends-and-influence-people",
    "coverImage": "https://m.media-amazon.com/images/I/718LOQ8ecyL._AC_UF1000,1000_QL80_.jpg",
    "spineColor": "#3cbd9f",
    "textColor": "#000",
    "date": "Jan 9, 2021",
    "rating": 8,
    "description": [
      "The definitive handbook on being a genuine, likeable, influential, and positive-sum person with many practical tips and anecdotes.",
      "It would be great if everyone operated with this philosophy.",
      "The 48 Laws of Power",
    ]
  },
  {
    "title": "On Intelligence",
    "author": "Jeff Hawkins",
    "slug": "on-intelligence",
    "coverImage": "https://m.media-amazon.com/images/I/41PbdH-FFEL._AC_SY780_.jpg",
    "spineColor": "#2f68c9",
    "textColor": "#fff",
    "date": "December 27, 2020",
    "rating": 9,
    "description": [
      "On the theory of intelligence, how its created in the brain, and how we could replicate it in machines.",
      "The best explanation on the neuroscientific basis of intelligence. Hawkins highlights the intuitions behind the key principles that enable intelligence in the brain: hierarchical structure, memory-prediction frameworks, invariant representations, and auto-associations.",
      "The book was written several decades ago before modern day deep learning. Impressively, many of the most defining advancements in AI directly correspond with the implementation of concepts he highlights here.",
    ]
  },
  {
    "title": "Give and Take",
    "author": "Adam Grant",
    "slug": "give-and-take",
    "coverImage": "https://m.media-amazon.com/images/I/41g19LU9EIL.jpg",
    "spineColor": "#fff",
    "textColor": "#000",
    "date": "2019",
    "rating": 7,
    "description": [
      "Grant lays out three styles of building interpersonal relationships: givers, takers, and matchers.",
      "He goes over how each strategy plays out, and tries to figure out what the optimal style is over different time horizons (I won't spoil the conclusion).",
      "The framework of thinking about relationships in this way is useful, and highlights the importance of positive-sum people.",
      "He attempts to position the book as if the ideas come from research and data, which I find to be over-conclusive, but his intuitions seem correct to me.",
    ]
  }
]
