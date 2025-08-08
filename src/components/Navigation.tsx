export default function Navigation() {
  return (
    <nav className="hidden md:block fixed top-16 w-48 z-40" style={{ left: 'calc(50% - 450px)' }}>
      <div className="mb-8">
        <h2 className="font-bold text-sm mb-4">NAVIGATION</h2>
        <ul className="space-y-2 text-[1.1rem] text-gray-500">
          <li ><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Reading</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Writing</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Deep Dives</a></li>
        </ul>
      </div>
      
      <div>
        <h2 className="font-bold text-sm mb-4">FIND ME ON</h2>
        <ul className="space-y-2 text-[1.1rem] text-gray-500">
          <li><a href="https://x.com/_boemare" className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://github.com/berlanpa" className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
} 