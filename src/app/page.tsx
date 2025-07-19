"use client";

import { BackgroundEffects } from '../components/BackgroundEffects';
import VintageNavBar from '../components/NeonNavBar';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { useModelPreloader } from '../hooks/use-model-preloader';

export default function Home() {
  // Ana sayfa yüklenirken karakteri preload et
  useModelPreloader();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <VintageNavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}
