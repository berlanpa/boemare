import Image from "next/image";

export default function MainContent() {
  return (
    <main className="max-w-xl md:ml-[50px] ml-2 pr-4 md:pr-0">
      {/* Name Title - Left-aligned at same height as navigation */}
      <header className="text-left py-0">
        <div className="mb-2">
          <Image 
            src="/title.png" 
            alt="Boemare" 
            width={400} 
            height={100}
            className="mb-0 w-[280px] md:w-[400px] h-auto"
            priority
          />
        </div>
        <p className="text-base md:text-lg text-gray-600 mb-8">Pablo Berlanga Boemare</p>
      </header>

      <section className="mb-4">
        <h2 className="font-bold mb-2">Some things about me:</h2>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-none pl-2 md:pl-3">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>I&apos;m building  in the Bay how AI can play with off-grid live data.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>
              Before this, I spent 6 months between the{" "}
              <a href="https://salonga.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Congo</a>
              {" "}jungle and the{" "}
              <a href="https://youtu.be/9UtKELjpWCk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Andes</a>
              {" "}figuring out the hardware that would enable this, 3 years as a research engineer at{" "}
              <a href="https://idesp.umontpellier.fr/en/accueil-english/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">INSERM</a>
              ,{" "}
              <a href="https://www.mcdonaldsreunion.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">McDonalds</a>
              , and{" "}
              <a href="https://crest.science/about-2/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CREST</a>
              , while studying computer science between{" "}
              <a href="https://www.st-andrews.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">St Andrews</a>
              {" "}and{" "}
              <a href="https://www.polytechnique.edu/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">École Polytechnique</a>
              {" "}[on leave]
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>I love creating [design, software, startups] and camping with wifi. Startups are special because they let you create beautiful things for a world I wanna preserve.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>I see society as constrained collaboration. Startups are the most flexible vehicle for it, and, done right, capitalism steers them toward abundance.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>My personal philosophy grew as I moved from the Pacific, to Central Africa, to Europe.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
                          <span>My current world view is a synthesis of ideas I call the rhetoric of life, pooling from{" "}
                <a href="https://en.wikipedia.org/wiki/Prometheanism" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Prometheanism</a>
                ,{" "}
                <a href="https://kclpure.kcl.ac.uk/ws/portalfiles/portal/104129607/Williams_and_Srnicek._Accelerate_.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Accelerationism</a>
                ,{" "}
                <a href="https://www.mhra.org.uk/pdf/td-20-9.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Humanism</a>
                ,{" "}
                <a href="https://en.wikipedia.org/wiki/Sumak_kawsay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sumak Kawsay</a>
                {" "}and the{" "}
                Rousseau&apos;s{" "}
                <a href="https://en.wikipedia.org/wiki/Noble_savage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Noble Sauvage</a>
                .
              </span>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="font-bold mb-2">Some things I&apos;m interested in:</h2>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-none pl-2 md:pl-3">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Sensory Intelligence. How minds and devices perceive and empathize with the world, and simple tools that sharpen perception.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Exploring. Endurance training; long days outside hiking, swimming, cycling and expeditions. I will experience as much of this in the future.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Craft. Clean design, photography, music, and cooking good food. Drawn to whoever chases mastery and shows deep care in what they create.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>I like people who take things into their own hands.</span>
          </li>
        </ul>
      </section>

      <footer className="text-gray-700 mb-16">
        <p>
          Checkout my{" "}
          <a href="#" className="text-blue-600 hover:underline">reading</a>,{" "}
          <a href="#" className="text-blue-600 hover:underline">writing</a> and{" "}
          <a href="#" className="text-blue-600 hover:underline">deep dives</a>
          .
        </p>
      </footer>
    </main>
  );
} 