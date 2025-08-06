import { BackgroundEffects } from '@/components/BackgroundEffects';
import NeonNavBar from '@/components/NeonNavBar';
import { Footer } from '@/components/Footer';

export default function ServicesPage() {
  const features = [
    {
      icon: "🎯",
      title: "3D Modelleme",
      description: "Profesyonel 3D modelleme ve tasarım hizmetleri ile projelerinizi hayata geçiriyorum"
    },
    {
      icon: "🎬",
      title: "Animasyon",
      description: "Etkileyici 3D animasyonlar ve motion graphics ile hikayenizi anlatın"
    },
    {
      icon: "🏗️",
      title: "Mimari Görselleştirme",
      description: "Mimari projeleriniz için fotorealistik render ve görselleştirme"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      <NeonNavBar />
      <div className="pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="services" className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">3D Hizmetlerim</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Profesyonel 3D modelleme ve görselleştirme hizmetleri ile projelerinizi hayata geçiriyorum
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-black/40 border border-cyan-500/30 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/70 group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}