"use client";

import { Character } from '@/data/characters';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    router.push(`/portfolio/${character.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${character.name} karakterini görüntüle`}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-75 transition duration-300"></div>
      
      <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-xl overflow-hidden shadow-lg group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300">
        
        {/* Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-pink-900/20 overflow-hidden">
          {!imageError ? (
            <>
              <img
                src={character.image}
                alt={character.name}
                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-400">
              <div className="text-6xl mb-4">🎭</div>
              <p className="text-sm opacity-70">Görsel Yükleniyor</p>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-purple-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Detayları Gör
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              {character.name}
            </h3>
            <p className="text-lg text-purple-400 font-medium">{character.title}</p>
          </div>
          
          <p className="text-white/70 text-base line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
            {character.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {character.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {character.tags.length > 3 && (
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400/70 text-xs font-medium">
                +{character.tags.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center pt-2 border-t border-purple-500/20">
            <div className="flex items-center space-x-4 text-xs text-white/60">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                {character.details.polygonCount}
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                {character.details.software[0]}
              </span>
            </div>
            <div className="text-purple-400 text-xs opacity-70">
              {character.details.creationDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};