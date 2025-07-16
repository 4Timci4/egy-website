export const CTASection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-white">
          Projenizi <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Hayata</span> Geçirelim
        </h2>
        <p className="text-xl text-white/70">
          3D modelleme ve görselleştirme projeleriniz için benimle iletişime geçin. Ücretsiz konsültasyon ile başlayalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105">
            Ücretsiz Konsültasyon
          </button>
          <button className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
            Portfolyoyu İncele
          </button>
        </div>
      </div>
    </section>
  );
};