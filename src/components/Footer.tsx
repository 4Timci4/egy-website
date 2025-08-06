import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/80 to-black backdrop-blur-sm text-white">
      {/* Decorative border top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ezgi Aydeniz
              </span>
            </div>
            <p className="text-white/70">
              Profesyonel 3D sanat ve tasarım hizmetleri ile yaratıcı projelerinizi hayata geçirin.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="#"
                className="text-white/60 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Hizmetler</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/services" className="hover:text-purple-400 transition-colors duration-300">3D Modelleme</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors duration-300">Karakter Tasarımı</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors duration-300">3D Animasyon</Link></li>
            </ul>
          </div>
          
          {/* Portfolio */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Portfolyo</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/portfolio" className="hover:text-purple-400 transition-colors duration-300">3D Projeler</Link></li>
              <li><Link href="/portfolio" className="hover:text-purple-400 transition-colors duration-300">Karakter Galeris</Link></li>
              <li><Link href="/portfolio" className="hover:text-purple-400 transition-colors duration-300">Animasyonlar</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Destek</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="#contact" className="hover:text-purple-400 transition-colors duration-300">İletişim</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors duration-300">SSS</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors duration-300">Yardım</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Decorative separator */}
        <div className="flex justify-center items-center space-x-4 mt-8 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          <div className="w-2 h-2 bg-purple-400/50 rounded-full"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-white/70">
          <p>&copy; 2025 Ezgi Aydeniz. Tüm hakları saklıdır.</p>
        </div>
      </div>
      
      {/* Decorative border bottom */}
      <div className="w-full h-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30"></div>
    </footer>
  );
};