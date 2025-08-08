import Image from "next/image";

export default function MainContent() {
  return (
    <main className="max-w-xl" style={{ marginLeft: '50px' }}>
      {/* Name Title - Left-aligned at same height as navigation */}
      <header className="text-left py-0">
        <Image 
          src="/title.png" 
          alt="Boemare" 
          width={400} 
          height={100}
          className="mb-2"
          priority
        />
        <p className="text-lg text-gray-600 mb-8">Pablo Berlanga Boemare</p>
      </header>

      <section className="mb-4">
        <h2 className="font-bold mb-2">Some things about me:</h2>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-none pl-3">
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>I&apos;m building how AI can play with off-grid live data at the Bay.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-gray-500">•</span>
            <span>Before this, I spent 6 months between the Congo jungle and the Andes figuring out the hardware that would enable this, 3 years as a research engineer at INSERM, McDonalds, and CREST, while studying computer science between St Andrews and École Polytechnique [on leave]</span>
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
            <span>My current world view is a synthesis of ideas I call the rhetoric of life, pooling from Prometheanism, Accelerationism, Humanism, Sumak Kawsay and the Noble Sauvage.</span>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="font-bold mb-2">Some things I&apos;m interested in:</h2>
        <ul className="space-y-2 text-gray-700 leading-relaxed list-none pl-3">
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