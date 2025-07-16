export const Footer = () => {
  return (
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
  );
};