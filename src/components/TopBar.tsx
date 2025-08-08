export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-white z-30">
      {/* Mobile navigation inside the top bar */}
      <div className="md:hidden h-full flex items-center justify-center">
        <nav className="flex items-center gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Reading</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Writing</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Deep Dives</a>
          <span className="mx-2 text-gray-300">|</span>
          <a href="https://x.com/_boemare" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a>
          <a href="https://github.com/berlanpa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
        </nav>
      </div>
    </div>
  );
} 