import TopBar from "../components/TopBar";
import Navigation from "../components/Navigation";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <TopBar />

      {/* Main Content Container - Centered */}
      <div className="pt-16 relative z-10 flex justify-center">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
}
