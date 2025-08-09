export interface Writing {
  title: string
  date: string
  url: string
  slug: string
  external: boolean
  description?: string
  image?: string
  html?: string
}

export const writings: Writing[] = [
  {
    title: "just filmed a bonobo eating my ethernet so i taught it to troubleshoot wifi",
    date: "15 July 2025",
    url: "/writing/bonobo-eating-ethernet",
    slug: "bonobo-eating-ethernet",
    external: false,
    description: "read time: probably longer than your commute - grab a tea",
    html: `<p><em>read time: probably longer than your commute - grab a tea</em></p>

<h3>september – when i promised myself i’d “just focus on finals”</h3>
<p>i came into my last year of uni with the kind of vow every over-extended 21-year-old eventually makes: no side hustles, no startups, no shiny distractions, just graduate.</p>
<p>didn’t last a month.</p>
<p>grades no longer gave me that stomach-tightening, nose-to-the-grindstone panic they used to. interviews for commodity-trading schemes? ghosted. “safe” master’s options? felt like concrete shoes. so i started sniffing around the edges of tech that still felt hard, still felt frontier.</p>
<p>One-week in Eastern Congo interviewing mercenaries, UN washed-officials, idols (de Merode ;) and profitable tech in nature looked impossible enough.</p>

<h3>the accidental nature nerd origin story</h3>
<p>Confession: I was never the “dude-with-zoology-posters” kid. My plush-lion phase lasted maybe three photo albums, tops. I grew up chasing Wi-Fi bars, not butterflies. So when friends hear I’m hanging cameras in the jungle they’re like, “new Pablo DLC?” Same energy as when your buddy from accounting suddenly starts doing Iron-Man triathlons. Weird flex but okay (foreshadowing maybe).</p>
<p>Rewind to September. Senior year of my math-comp-sci degree. I sell off every side hustle (RIP greasy spoon food-analytics SaaS) and promise myself:</p>
<p>This year = monk mode.</p>
<p>No startups, no ski trips, no 3 a.m. Figma benders. Just grades.</p>
<p>That lasted… eleven days. Then I did what every totally-not-distracted student does: priced out mountaineering expeditions on Google Flights. Fast-forward to 5 700 m on Aconcagua, tent zipped shut against a white-out, me scrolling Twitter courtesy of a shiny pizza-box called Starlink. Twenty Chilean pesos per megabit and I’m binge-watching Narcos above the cloudline. Brain goes ding!</p>
<p>“Wait. If I can crush Netflix up here, why are conservationists still hiking three days to swap SD cards in busted camera traps?”</p>
<p>That was the lightning bolt. Thank you, Elon, snowstorm, and my inability to enjoy Márquez on a Kindle.</p>

<h3>san francisco - two weeks of terror & clarity</h3>
<p>i crashed at Founders Inc. (“Hogwarts for builders”) hoping to polish a SaaS for restaurant chains again. one week in, heart rate flat-lined - zero joy. everyone around me was shipping B2B features; i kept doodling jungle sensor pods.</p>
<p>missionary > mercenary - that’s the campus mantra. it stuck. still, with midterms looming and family sanity on the line, i flew home. unfinished, embarrassed, but carrying the seed.</p>
<p>p.s: sf was actually beautiful, ill talk more about it someday.</p>

<h3>the 3 a.m. email that changed everything</h3>
<p>on my birthday, 03:00, insomnia. i cold-email Microsoft’s AI for Good lab (“hey, i might have a park in Congo that’ll test your new SPARROW edge units —- wanna talk?”).</p>
<p>reply in five minutes: “let’s jump on a call.”</p>
<p>momentum unlocked.</p>
<p>next step: find a park crazy enough to host prototype hardware. enter Salonga National Park, DRC - 36 000 km² of swamp forest, bonobos, forest elephants, zero cell signal. the director answered in Spanish (lucky break) and said yes.</p>

<h3>why edge-ai in the jungle even matters</h3>
<p><strong>real-time telemetry = proof</strong><br/>if a park can stream HD video of a living bonobo family or measure carbon flux daily, it can finally sell biodiversity credits, eco-tourism, and research access instead of begging for grants.</p>
<p><strong>deterrence through visibility</strong><br/>Poachers hate cameras. rangers love instant gunshot alerts. same device, different ML model.</p>
<p><strong>ego, not monolith</strong><br/>the hardware is a solar-powered Jetson Orin Nano brain with a Starlink mouth. plug in thermal cams, acoustic mics, micro-lidar, whatever the research question demands. swap sensors like iPhone lenses.</p>
<p><strong>content flywheel</strong><br/>24/7 live feeds → AI-edited shorts → TikTok & Twitch → fandom → funding. nature becomes Netflix, and the forest pays its own rent.</p>

<h3>july - boots in the mud</h3>
<p>i’m writing this from Yokelelu base: a half-built deck, generator fumes, mosquito buzz, but full bars (Starlink dish arrives tomorrow). our Microsoft units are still in customs limbo - Congo logistics roulette - so i’m hacking together sacrificial prototypes from surveillance cameras and scavenged solar panels.</p>
<p>first mission:<br/> — position five rigs along the bonobo habituation trails<br/> — train models to flag movement patterns (lateral knuckle-walk vs human gait)<br/> — notify trackers via pings</p>
<p>if we pull that off without a device getting repurposed into a village water bucket, we’ll expand to Iyono’s elephant mineral bay and start 3-D mapping clearings with the Flip drone.</p>

<h3>why i’m all-in</h3>
<p>Because the planet’s “protected” areas are broke. Because humans protect what we can measure. Because climate models, carbon credits, and biodiversity bonds are starving for ground-truth pixels.</p>
<p>Also, honestly, because I’m addicted to ridiculously hard problems that smell like diesel and mud. The defense industry waved six-figure signing bonuses. I chose this because it feels like building internet infrastructure for the other 85 % of Earth that doesn’t have a Starbucks - yet.</p>
<p>If we nail this, parks stop operating like charities and start acting like data-rich utilities. Rangers get body cams, not IOUs. Local kids learn Python instead of ivory routes. And maybe - just maybe - when we start terraforming Mars we’ll know how to keep ecosystems profitable enough to survive.</p>

<h3>what’s next</h3>
<p>august: devices clear customs (manifesting).</p>
<p>september: live-stream the first bonobo troop; cut a trailer; test pay-per-view.</p>
<p>october: hardware v2 design sprint in Europe; raise seed.</p>
<p>2026+: 10 000 units, every biome, zero black boxes left.</p>
<p>if it works, awesome - we’ll have built the telemetry layer for Earth.<br/>if it fails, at least the ants got a fancy new bucket.</p>

<h3>epilogue - bonobo troubleshooting handbook</h3>
<p>Yesterday a juvenile bonobo yanked the ethernet, stared at the blinking LED, and tried to eat the RJ45. I swear I felt seen. We all just want connection, right?</p>
<p>Anyway, thanks for reading my jungle ramble. Time to sign off before the satellite constellation dips below the horizon and my draft gets eaten by packet loss.</p>
<p>Catch you in the next episode - maybe titled “just tried to teach an elephant to reboot linux and now my keyboard smells like mud”.</p>
<p>Peace ✌️</p>`
  },
  {
    title: "from math olympiads to machetes: a nerd’s detour into the jungle",
    date: "1 August 2025",
    url: "/writing/from-math-olympiads-to-machetes",
    slug: "from-math-olympiads-to-machetes",
    external: false,
    html: `<h3>tldr;</h3>
<p>grew up country-hopping with two humanitarian parents → got hooked on remote everything</p>
<p>loved numbers & computers as much as indiana jones reruns → spent teen years bouncing between math olympiads and action movies</p>
<p>tested my tech-for-good theory across energy, health, and fast-food data gigs → learned impact ≠ corporate comfort</p>
<p>a failed quant-trading interview + a summer in senegal watching migrant boats launched → forced a hard pivot</p>
<p>realized nature is the ultimate playground for nerdy problem-solving → booked a one-way ticket to the congo basin</p>
<p>that’s the prologue - the “what i’m actually building out here” drops in part 2</p>

<h3>prelude: the itch that never left</h3>
<p>I grew up in the margins of the map.</p>
<p>Diplomatic passports, dusty Land Cruisers, and a stack of well-thumbed National Geographic magazines were my normal. My parents were humanitarians first, diplomats later, and perpetual nomads always. We hopped on occasional village clinics in West Africa to embassy housing in OUA the way most families move between suburbs.</p>
<p>Every new posting came with its own smell: diesel, mango, rain-on-red-clay. And every night, when the generator coughed itself to sleep, I’d crack open a flashlight and re-watch Indiana Jones on a scratched DVD. Somewhere between the boulder chase and the snake pit I decided that “grown-up me” would also live in places where GPS drops to zero bars. That conviction stuck - even when life tried to drag me toward polished glass towers and corporate cafeterias.</p>

<h3>quest #1: numbers over noise</h3>
<p>There was just one problem: I wasn’t built to dig up relics or wield a machete.</p>
<p>What lit me up were patterns - the sneaky symmetries of an equation, the elegance of a proof. By fourteen I was skipping recess to grind Math Olympiad problems, convinced that a medal would unlock some secret club of geniuses. Spoiler: I never made the finals. Turns out improvising brand-new methods under a ticking clock is a terrible tournament strategy. (did come second in Informatics tho.)</p>
<p>But the failures did two things:<br/>Confirmed my north star. Win or lose, math felt like home.<br/>Taught me the cost of winging it. Good intentions don’t beat deliberate practice.</p>
<p>Those lessons keep boomeranging back in this story.</p>

<h3>when boats & borders rewired the mission</h3>
<p>Covid gave me a gap year, chasing the Mediterranean migration crisis. 4 long years in Europe and all I wanted was to go back to the mud. In Senegal I watched homemade canoes push off before dawn, stuffed with kids my age betting their lives on Europe. Later, on rescue skiffs with a group I met in high school, I realized the opposition had drones, frigates, four engines for every one of ours. Out-spent, out-muscled… it was the first time “impact” felt like a math problem with brutal constraints.</p>
<p>Lesson etched in bone: money isn’t evil - it’s fuel. Humanitarian dreams without a revenue engine stall at the dock. Startups, for all their hype, at least play by the rules of cash flow.</p>

<h3>quest #2: the four-summer experiment</h3>
<p>University arrived. I carved out a personal rule: treat every summer as a lab to test one of the big four survival systems - energy, health, food, nature. The theory was simple: if I could blend hard tech with one of those pillars, I’d eventually stumble onto work that mattered and scratched my Mr. Jones itch.</p>
<p><strong>Summer 1 – Wind & kilowatts</strong><br/>Paris professors, wind-farm telemetry, regression models. My first real data set. I learned Python the way sailors learn storms: by nearly sinking the ship.</p>
<p><strong>Summer 2 – Lungs & machine vision</strong><br/>INSERM lab benches, CT scans of asthmatic patients, hours lost inside NumPy. Here I tasted full autonomy - defining the objective and the method. I’d trade a chunk of salary for that feeling any day.</p>
<p><strong>Summer 3 – Burgers & big-mac data</strong><br/>Nepotism break: a friend of Mom’s ran the McDonald’s franchise network on Réunion Island. I dove into time-series sales, campaign lift, and the uncanny overlaps between a Big Mac and a cheeseburger’s bill of materials. Corporate life suddenly seemed… cozy. Too cozy.</p>
<p><strong>Later that summer – Quant, code, chaos</strong><br/>The “let’s-try-everything” end of summer: quant-trading drills with my brother, LeetCode marathons, big-tech interviews. He landed a desk on a trading floor; I collected rejection emails and an existential crisis. Perfect.</p>

<h3>the inner tug-of-war</h3>
<p>By graduation I was split between two personas:</p>
<p><em>The Analyst</em> - happiest in a terminal window, optimizing SQL queries.</p>
<p><em>The Adventurer</em> - craving remote field camps and problems you can’t debug from WeWork.</p>
<p>Corporate recruiters loved the first guy. Thirteen-year-old me kept whispering about lost temples and endangered forests. I tried ignoring him; he refused.</p>

<h3>pattern recognition: the jungle keeps calling</h3>
<p>Late-night journal review:<br/>remote childhood ➜ comfort in isolation<br/>movie obsessions ➜ appetite for risk<br/>math + code ➜ leverage in data-dense domains<br/>humanitarian backdrop ➜ intolerance for performative impact</p>
<p>Plug those variables into any greedy algorithm and the output blinks <strong>CONSERVATION TECH</strong>.</p>
<p>Protecting ecosystems is a puzzle stitched from biology, logistics, and edge-AI - exactly the sort of interdisciplinary my brain likes to wrestle. More importantly, the field is starving for engineers who can wrangle datasets as easily as they trek through swamp.</p>

<h3>the decision</h3>
<p>So I stopped refreshing LinkedIn, booked a one-way ticket to Kinshasa, and drafted a two-page plan titled “Starlink and AI give us live Into the Wild.” VCs in SF called it reckless; for the first time in years my gut called it aligned.</p>

<h3>epilogue (for now)</h3>
<p>I’m writing these words a few clicks south of the equator, where the night sky feels illegally bright and the nearest café Wi-Fi is a two-day pirogue ride away. The work itself - the hardware mishaps, the bonobo trackers, the elephant footprints, the why behind all this madness - that’s a saga for part 2.</p>
<p>But if you’ve ever felt torn between spreadsheets and skylines, between comfort and conviction, maybe my breadcrumb trail helps. Sometimes the map you’re supposed to draw looks less like a straight line and more like vines looped around an old ruin.</p>
<p>See you deeper in the jungle.</p>`
  }
]