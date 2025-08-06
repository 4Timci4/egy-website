import { FeaturesSection } from '@/components/FeaturesSection';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import NeonNavBar from '@/components/NeonNavBar';
import { Footer } from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <NeonNavBar />
      <div className="pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}