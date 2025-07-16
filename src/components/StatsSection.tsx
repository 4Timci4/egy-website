export const StatsSection = ({
  stats = [
    { number: "150+", label: "Tamamlanan Proje" },
    { number: "25+", label: "Mutlu Müşteri" },
    { number: "5+", label: "Yıl Deneyim" },
    { number: "24/7", label: "Destek" }
  ],
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-cyan-500/30 backdrop-blur-xl rounded-3xl p-12 text-white shadow-[0_0_50px_rgba(6,182,212,0.2)]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rakamlarla Başarı
            </h2>
            <p className="text-xl text-white/70">3D tasarım ve modelleme alanındaki deneyimim</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
  );
};