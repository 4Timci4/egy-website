export const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                🎨 3D Sanat & Tasarım
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                3D Model
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Portfolyosu
                </span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Profesyonel 3D modelleme, animasyon ve görselleştirme hizmetleri.
                Yaratıcı tasarımlar ve yenilikçi çözümlerle projelerinizi hayata geçiriyorum.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105">
                Portfolyoyu İncele
              </button>
              <button className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                İletişime Geç
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-white/60">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-white/60">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-white/60">Memnuniyet</div>
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
                      <div className="text-green-400">from &apos;futuristic-web&apos;</div>
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
  );
};