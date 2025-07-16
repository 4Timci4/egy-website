export const FeaturesSection = ({
  features = [
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
  ],
}) => {
  return (
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
          {features.map((feature, index) => (
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
  );
};