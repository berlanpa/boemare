import Link from 'next/link'

export default function Nav({ active }: { active: 'home' | 'reading' | 'writing' | 'deep-dives' }) {
  return (
    <div className="w-full relative">
      {/* Desktop top spacer bar to match original fixed bar (only visible ≥ lg) */}
      <div className="hidden lg:block w-full bg-white h-16 fixed top-0 z-50" aria-hidden="true" />

      {/* Mobile top bar */}
      <div className="flex items-center justify-between fixed top-0 h-12 z-50 left-0 w-full border-b border-gray-200 bg-white lg:hidden">
        <div className="max-w-prose mx-auto px-8 w-full flex justify-between">
          <div className="flex items-center space-x-8">
            <Link className={`text-gray-500 hover:text-black`} href="/">Home</Link>
            <Link className={`text-gray-500 hover:text-black ${active === 'reading' ? 'text-black' : ''}`} href="/reading">Reading</Link>
            <Link className={`text-gray-500 hover:text-black ${active === 'writing' ? 'text-black' : ''}`} href="/writing">Writing</Link>
          </div>
        </div>
      </div>

      {/* Desktop sidebar: wrapper is absolute to anchor next to the centered container; inner stack is fixed */}
      <div className="hidden lg:block absolute right-full mr-40">
        <div className="flex flex-col fixed">
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-[smaller]">NAVIGATION</p>
            <Link className={`transition text-gray-500 hover:text-black text-lg`} href="/">Home</Link>
            <Link className={`transition ${active === 'reading' ? 'text-black' : 'text-gray-500 hover:text-black'} text-lg`} href="/reading">Reading</Link>
            <Link className={`transition ${active === 'writing' ? 'text-black' : 'text-gray-500 hover:text-black'} text-lg`} href="/writing">Writing</Link>
            <Link className={`transition text-gray-500 hover:text-black text-lg`} href="/deep-dives">Deep Dives</Link>
          </div>
          <div className="flex flex-col space-y-2 mt-10">
            <p className="font-bold text-[smaller]">FIND ME ON</p>
            <a className="transition text-gray-500 hover:text-black text-lg" target="_blank" href="https://x.com/_boemare" rel="noopener noreferrer">Twitter</a>
            <a className="transition text-gray-500 hover:text-black text-lg" target="_blank" href="https://github.com/berlanpa" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}


