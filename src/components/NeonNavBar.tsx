'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  url: string;
}

interface VintageNavBarProps {
  name?: string;
  items?: NavItem[];
  className?: string;
}

const VintageNavBar: React.FC<VintageNavBarProps> = ({
  name = "Ezgi Aydeniz",
  items = [
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Portfolyo', url: '/portfolio' },
    { name: 'Hizmetler', url: '/services' },
    { name: 'Hakkımda', url: '#about' },
    { name: 'İletişim', url: '#contact' }
  ],
  className
}) => {
  const [activeTab, setActiveTab] = useState('Ana Sayfa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (itemName: string, url: string) => {
    setActiveTab(itemName.toLowerCase());
    setIsMenuOpen(false);

    if (url.startsWith('#') && url.length > 1) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm ${className || ''}`}>
      {/* Decorative border top */}
      <div className="w-full h-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Name section */}
        <div className="text-center py-6 border-b border-purple-500/20">
          <h1 className="text-3xl md:text-4xl font-bold text-white/90 tracking-wide">
            {name}
          </h1>
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 mt-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            <div className="w-2 h-2 bg-purple-400/50 rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          </div>
        </div>

        {/* Navigation section */}
        <div className="flex justify-between items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex items-center space-x-8">
              {items.map((item, index) => {
                const isActive = activeTab === item.name.toLowerCase();
                const isLast = index === items.length - 1;

                return (
                  <React.Fragment key={item.name}>
                    <Link
                      href={item.url}
                      onClick={() => handleNavClick(item.name, item.url)}
                      className={`relative text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                        isActive
                          ? 'text-purple-400'
                          : 'text-white/80'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                      )}
                    </Link>
                    {!isLast && (
                      <div className="text-white/40 text-sm">|</div>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
            >
              <Github size={20} />
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-purple-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 max-h-96 pb-4'
              : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {items.map((item) => {
              const isActive = activeTab === item.name.toLowerCase();

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => handleNavClick(item.name, item.url)}
                  className={`text-center py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-white/80 hover:text-purple-400 hover:bg-purple-500/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Social Media Icons - Mobile */}
          <div className="flex justify-center items-center space-x-6 mt-6 pt-4 border-t border-purple-500/20">
            <Link
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors duration-300"
            >
              <Github size={24} />
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative border bottom */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
    </header>
  );
};

export default VintageNavBar;