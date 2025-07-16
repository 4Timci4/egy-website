import { CharacterViewer } from '@/components/CharacterViewer';
import NeonNavBar from '@/components/NeonNavBar';
import { Footer } from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090420] to-[#240643] relative overflow-hidden">
      <NeonNavBar />
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[600px]">
            <CharacterViewer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}