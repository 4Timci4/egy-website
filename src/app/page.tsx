import { BackgroundEffects } from '../components/BackgroundEffects';
import VintageNavBar from '../components/NeonNavBar';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <VintageNavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}
