import NeonNavBar from '../components/NeonNavBar';

// TODO: Add more interactive animations and micro-interactions
// FUTURE: Implement dark/light theme toggle with smooth transitions

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Modern Neon Navigation */}
      <NeonNavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  🚀 Futuristik Web Deneyimi
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Modern Neon
                  <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Web Tasarımı
                  </span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed">
                  Next.js 15 ve React 19 ile güçlendirilmiş, neon efektleri ve modern tasarım prensipleri ile oluşturulmuş
                  yüksek performanslı web uygulaması. Geleceğin web deneyimini bugün yaşayın.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105">
                  Hemen Başla
                </button>
                <button className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                  Demo İzle
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">99%</div>
                  <div className="text-sm text-white/60">Performans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50ms</div>
                  <div className="text-sm text-white/60">Yükleme</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100+</div>
                  <div className="text-sm text-white/60">Bileşen</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-black/40 border border-cyan-500/30 backdrop-blur-xl rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_6px_rgba(239,68,68,0.6)]"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_6px_rgba(234,179,8,0.6)]"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.6)]"></div>
                    </div>
                    <div className="bg-black/60 border border-cyan-500/20 rounded-lg p-4">
                      <div className="text-sm font-mono">
                        <div className="text-cyan-400">import</div>
                        <div className="text-purple-400">NeonApp</div>
                        <div className="text-green-400">from 'futuristic-web'</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
                      <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-4/5 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/5 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">
              Neden <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">NeonApp</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Futuristik web teknolojileri ile oluşturulmuş, neon efektli özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Yüksek Performans",
                description: "Next.js 15 ve React 19 ile optimize edilmiş hızlı yükleme süreleri"
              },
              {
                icon: "🎨",
                title: "Neon Tasarım",
                description: "Futuristik neon efektleri ile modern ve etkileyici arayüz"
              },
              {
                icon: "🔒",
                title: "Güvenli",
                description: "En son güvenlik standartları ile korumalı veri işleme"
              },
              {
                icon: "📱",
                title: "Mobil Uyumlu",
                description: "Tüm cihazlarda mükemmel neon görünüm ve kullanım deneyimi"
              },
              {
                icon: "🚀",
                title: "Hızlı Geliştirme",
                description: "TypeScript desteği ile hızlı ve güvenli kod geliştirme"
              },
              {
                icon: "🌙",
                title: "Gece Modu",
                description: "Neon efektleri ile göz alıcı karanlık tema desteği"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 bg-black/40 border border-cyan-500/30 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-cyan-500/30 backdrop-blur-xl rounded-3xl p-12 text-white shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Rakamlarla NeonApp
              </h2>
              <p className="text-xl text-white/70">Futuristik performans metrikleri</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "1M+", label: "Aktif Kullanıcı" },
                { number: "99.9%", label: "Uptime" },
                { number: "50ms", label: "Ortalama Yanıt" },
                { number: "24/7", label: "Destek" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    {stat.number}
                  </div>
                  <div className="text-lg text-white/70 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Geleceğe <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Hazır</span> mısınız?
          </h2>
          <p className="text-xl text-white/70">
            Futuristik neon web deneyimini bugün başlatın. Ücretsiz deneme ile tüm neon özellikleri keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105">
              Neon Deneyimi Başlat
            </button>
            <button className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-cyan-500/30 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">NeonApp</span>
              </div>
              <p className="text-white/70">
                Futuristik neon teknolojileri ile güçlendirilmiş yeni nesil uygulama platformu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Ürün</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Özellikler</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Dokümantasyon</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Şirket</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Kariyer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Destek</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Durum</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/30 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2025 NeonApp. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
