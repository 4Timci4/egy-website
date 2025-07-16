"use client"

import { useState, useEffect } from 'react';

// Ana Hero bileşeni
export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde animasyon için
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#090420] to-[#240643]">
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        {/* İçerik Bölümü */}
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
              🎮 3D KARAKTER TASARIMCISI
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold">
              <span className="block text-white">Karakterlere</span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">Ruh Katıyorum</span>
            </h1>
            
            <p className="text-xl text-purple-100/80 max-w-2xl mx-auto">
              Oyunlar ve dijital dünyalar için yaratıcı, ifade dolu karakterler tasarlıyorum.
              Hayal ettiğiniz kahramanları gerçeğe dönüştürüyorum.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-semibold shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
              Portfolyoyu İncele
            </button>
            
            <button className="px-8 py-4 border border-purple-500/30 backdrop-blur-sm rounded-full text-purple-300 font-semibold hover:bg-purple-900/20 transition-all duration-300">
              İletişime Geç
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="space-y-1 backdrop-blur-sm bg-purple-900/10 rounded-xl p-4 border border-purple-500/10">
              <div className="text-3xl font-bold text-white">120+</div>
              <div className="text-purple-300/80 text-sm">Karakter</div>
            </div>
            <div className="space-y-1 backdrop-blur-sm bg-purple-900/10 rounded-xl p-4 border border-purple-500/10">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-purple-300/80 text-sm">Yıl Deneyim</div>
            </div>
            <div className="space-y-1 backdrop-blur-sm bg-purple-900/10 rounded-xl p-4 border border-purple-500/10">
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-purple-300/80 text-sm">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Alt kısım süslemeleri */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#240643] to-transparent"></div>
    </section>
  );
};