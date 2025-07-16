import { BackgroundEffects } from '../components/BackgroundEffects';
import NeonNavBar from '../components/NeonNavBar';
import { HeroSection } from '../components/HeroSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { StatsSection } from '../components/StatsSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <NeonNavBar />
      <HeroSection />
      <PortfolioSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
