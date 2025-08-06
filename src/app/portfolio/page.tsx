import { CharacterCard } from '@/components/CharacterCard';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import NeonNavBar from '@/components/NeonNavBar';
import { Footer } from '@/components/Footer';
import { characters, Character } from '@/data/characters';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <NeonNavBar />
      
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolyo
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              3D karakterlerim ve projelerim. Her birinin detaylarını incelemek için tıklayın.
            </p>
            <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>{characters.length} Karakter</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                <span>Interaktif 3D Görüntüleme</span>
              </div>
            </div>
          </div>

          {/* Characters Grid */}
          {/* Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {characters.map((character: Character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          {/* Coming Soon Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium">Yeni karakterler yakında...</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}