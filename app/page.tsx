import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="max-w-prose mx-auto px-4 mt-16 pb-8 relative">
      <Nav active="home" />
      <article>
        <img src="/title.svg" alt="Boemare" className="h-[120px] md:h-[144px] filter invert drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-sm" />
        <p className="mt-2 flex items-center gap-2">
          <span className="hidden sm:inline">Pablo Berlanga Boemare</span>
          <span className="hidden sm:inline" aria-hidden="true">•</span>
          <span>berlanpa [at] gmail [dot] com</span>
        </p>

        <p><strong>Some things about me:</strong></p>
        <ul>
          <li>I'm building how AI can play with off-grid live data at <a className="hover:underline" href="https://www.livetheresidency.com/" target="_blank" rel="noopener noreferrer">the Residency</a>.</li>
          <li>
            Before this, I spent 6 months between the <a className="hover:underline" href="https://salonga.org/" target="_blank" rel="noopener noreferrer">Congo</a> jungle and the <a className="hover:underline" href="https://youtu.be/9UtKELjpWCk" target="_blank" rel="noopener noreferrer">Andes</a> figuring out the hardware that would enable this, 3 years as a research engineer at <a className="hover:underline" href="https://idesp.umontpellier.fr/en/accueil-english/" target="_blank" rel="noopener noreferrer">INSERM</a>, <a className="hover:underline" href="https://www.mcdonaldsreunion.com/" target="_blank" rel="noopener noreferrer">McDonalds</a>, and <a className="hover:underline" href="https://crest.science/about-2/" target="_blank" rel="noopener noreferrer">CREST</a>, while studying computer science between <a className="hover:underline" href="https://www.st-andrews.ac.uk/" target="_blank" rel="noopener noreferrer">St Andrews</a> and <a className="hover:underline" href="https://www.polytechnique.edu/en" target="_blank" rel="noopener noreferrer">École Polytechnique</a> [on leave]
          </li>
          <li>I love creating [design, software, startups] and camping with wifi. Startups are special because they let you create beautiful things for a world I wanna preserve.</li>
          <li>I see society as constrained collaboration. Startups are the most flexible vehicle for it, and, done right, capitalism steers them toward abundance.</li>
          <li>My personal philosophy grew as I moved from the Pacific, to Central Africa, to Europe.</li>
          <li>My current world view is a synthesis of ideas I call the rhetoric of life, pooling from <a className="hover:underline" href="https://en.wikipedia.org/wiki/Prometheanism" target="_blank" rel="noopener noreferrer">Prometheanism</a>, <a className="hover:underline" href="https://kclpure.kcl.ac.uk/ws/portalfiles/portal/104129607/Williams_and_Srnicek._Accelerate_.pdf" target="_blank" rel="noopener noreferrer">Accelerationism</a>, <a className="hover:underline" href="https://www.mhra.org.uk/pdf/td-20-9.pdf" target="_blank" rel="noopener noreferrer">Humanism</a>, <a className="hover:underline" href="https://en.wikipedia.org/wiki/Sumak_kawsay" target="_blank" rel="noopener noreferrer">Sumak Kawsay</a> and the Rousseau's <a className="hover:underline" href="https://en.wikipedia.org/wiki/Noble_savage" target="_blank" rel="noopener noreferrer">Noble Sauvage</a>.</li>
        </ul>

        <p><strong>Some things I'm interested in:</strong></p>
        <ul>
          <li>Sensory Intelligence. How minds and devices perceive and empathize with the world, and simple tools that sharpen perception.</li>
          <li>Exploring. Endurance training; long days outside hiking, swimming, cycling and expeditions. I will experience as much of this in the future.</li>
          <li>Craft. Clean design, photography, music, and cooking good food. Drawn to whoever chases mastery and shows deep care in what they create.</li>
          <li>I like people who take things into their own hands.</li>
        </ul>

        <p>
          Checkout my <a className="hover:underline" href="/reading">reading</a>, <a className="hover:underline" href="/writing">writing</a>, and <a className="hover:underline" href="/deep-dives">deep dives</a>.
        </p>

        
      </article>
    </main>
  )
}


