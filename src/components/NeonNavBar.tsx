'use client';

import React, { useState } from 'react';
import { Home, User, Briefcase, FileText, Search, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface NeonNavBarProps {
  items?: NavItem[];
  className?: string;
}

const NeonNavBar: React.FC<NeonNavBarProps> = ({ 
  items = [
    { name: 'Ana Sayfa', url: '#', icon: Home },
    { name: 'Portfolyo', url: '#portfolio', icon: Briefcase },
    { name: 'Hizmetler', url: '#services', icon: User },
    { name: 'Hakkımda', url: '#about', icon: FileText },
    { name: 'İletişim', url: '#contact', icon: Search }
  ],
  className 
}) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (itemName: string, url: string) => {
    setActiveTab(itemName.toLowerCase());
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    if (url.startsWith('#') && url.length > 1) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${className || ''}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 bg-black/20 border border-cyan-500/30 backdrop-blur-xl py-2 px-2 rounded-2xl shadow-2xl">
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl -z-10" />
        
        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] -z-10" />
        
        {items.map((item) => {
          const isActive = activeTab === item.name.toLowerCase();

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.url)}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-white/80 hover:text-cyan-400 hover:scale-105 active:scale-95 ${
                isActive ? 'text-cyan-400' : ''
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Active state with neon glow */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300" />
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300" />
            </button>
          );
        })}
        
        {/* Search icon with glow */}
        <button className="relative p-3 text-white/80 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 active:scale-90">
          <Search size={18} />
          <div className="absolute inset-0 rounded-full bg-cyan-500/0 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-3 bg-black/20 border border-cyan-500/30 backdrop-blur-xl rounded-xl text-white shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <div className="absolute inset-0 rounded-xl border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] -z-10" />
        </button>

        {/* Mobile menu */}
        <div
          className={`absolute top-16 left-0 right-0 bg-black/20 border border-cyan-500/30 backdrop-blur-xl rounded-2xl shadow-2xl transition-all duration-200 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 -translate-y-5 scale-95 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 rounded-2xl border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] -z-10" />
          
          <div className="p-4 space-y-2">
            {items.map((item) => {
              const isActive = activeTab === item.name.toLowerCase();

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.url)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 w-full text-left text-white/80 hover:text-cyan-400 hover:translate-x-1 active:scale-98 ${
                    isActive ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]' : ''
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonNavBar;