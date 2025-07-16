import { PortfolioSection } from '@/components/PortfolioSection';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import NeonNavBar from '@/components/NeonNavBar';
import { Footer } from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <NeonNavBar />
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Portfolyo</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              3D modelleme ve görselleştirme projelerimizin detaylı sunumu
            </p>
          </div>
        </div>
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
}