import { notFound } from 'next/navigation';
import { CharacterViewer } from '@/components/CharacterViewer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import NeonNavBar from '@/components/NeonNavBar';
import { Footer } from '@/components/Footer';
import { getCharacterById } from '@/data/characters';
import Link from 'next/link';
interface CharacterDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CharacterDetailPage({ params }: CharacterDetailPageProps) {
  const { id } = await params;
  const character = getCharacterById(id);

  if (!character) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <NeonNavBar />
      
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 rounded-lg text-purple-300 hover:text-purple-200 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Portfolyoya Dön
            </Link>
          </div>

          {/* Character Header */}
          <div className="mb-12 text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {character.name}
              </span>
            </h1>
            <p className="text-2xl text-purple-300 font-medium">{character.title}</p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">{character.description}</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* 3D Viewer */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-32">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🎭</span>
                  </div>
                  3D Model
                </h2>
                <CharacterViewer modelPath={character.modelPath} />
              </div>
            </div>

            {/* Character Details */}
            <div className="order-1 lg:order-2 space-y-8">
              
              {/* Tags */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-purple-400">#</span>
                  Etiketler
                </h3>
                <div className="flex flex-wrap gap-3">
                  {character.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium backdrop-blur-sm hover:bg-purple-500/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="text-cyan-400">⚙️</span>
                  Teknik Detaylar
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Yazılımlar</h4>
                    <div className="space-y-1">
                      {character.details.software.map((software, index) => (
                        <div key={index} className="text-white/70 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          {software}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Render Engine</h4>
                    <p className="text-white/70">{character.details.renderEngine}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Polygon Sayısı</h4>
                    <p className="text-white/70">{character.details.polygonCount}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Proje Türü</h4>
                    <p className="text-white/70">{character.details.projectType}</p>
                  </div>
                </div>
              </div>

              {/* Textures */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">🎨</span>
                  Texture Maps
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {character.details.textures.map((texture, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-pink-500/20 border border-pink-500/30 rounded-lg text-pink-300 text-sm font-medium text-center backdrop-blur-sm"
                    >
                      {texture}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">📋</span>
                  Proje Bilgisi
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Oluşturulma Tarihi:</span>
                    <span className="text-cyan-300 font-medium">{character.details.creationDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Proje Durumu:</span>
                    <span className="text-green-400 font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Tamamlandı
                    </span>
                  </div>
                </div>
              </div>

              {/* Gallery Preview */}
              {character.gallery && character.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-yellow-400">🖼️</span>
                    Galeri
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {character.gallery.map((image: string, index: number) => (
                      <div
                        key={index}
                        className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="text-purple-400 text-sm">Yakında</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Generate static params for known characters (optional, for better performance)
export async function generateStaticParams() {
  return [
    { id: 'lupi' },
    { id: 'warrior' },
    { id: 'robot' },
    { id: 'creature' },
  ];
}