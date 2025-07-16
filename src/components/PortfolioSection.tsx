export const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Mimari Görselleştirme",
      category: "Mimari",
      image: "🏢",
      description: "Modern ofis binası 3D modeli ve render çalışması"
    },
    {
      title: "Karakter Tasarımı",
      category: "Oyun",
      image: "🎮",
      description: "Oyun karakteri modelleme ve animasyon projesi"
    },
    {
      title: "Ürün Görselleştirme",
      category: "E-ticaret",
      image: "📱",
      description: "Teknoloji ürünleri için fotorealistik render"
    },
    {
      title: "İç Mekan Tasarımı",
      category: "Mimari",
      image: "🛋️",
      description: "Lüks otel lobisi 3D görselleştirme projesi"
    },
    {
      title: "Araç Modelleme",
      category: "Otomotiv",
      image: "🚗",
      description: "Spor araba 3D modeli ve animasyon çalışması"
    },
    {
      title: "VR Deneyimi",
      category: "VR/AR",
      image: "🥽",
      description: "Sanal gerçeklik için interaktif 3D çevre tasarımı"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Portfolyo</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Gerçekleştirdiğim 3D modelleme ve görselleştirme projelerinden örnekler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group bg-black/40 border border-cyan-500/30 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
              <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105">
            Tüm Projeleri Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};