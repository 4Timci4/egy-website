"use client";

import { Html, useProgress } from '@react-three/drei';

type LoadingScreenProps = {
  fallbackText?: string;
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  fallbackText = "Karakter yükleniyor..." 
}) => {
  const { progress, loaded, total } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-6 p-8">
        {/* Ana loading circle */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-500/20 rounded-full"></div>
          <div 
            className="absolute inset-0 w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
            style={{
              transform: `rotate(${(progress / 100) * 360}deg)`,
              transition: 'transform 0.3s ease'
            }}
          ></div>
          
          {/* İç yüzde göstergesi */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-purple-300 font-bold text-sm">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center space-y-2">
          <p className="text-purple-300 font-medium text-lg">
            {fallbackText}
          </p>
          <p className="text-purple-400/70 text-sm font-mono">
            {loaded} / {total} assets
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-purple-900/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Loading animation dots */}
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </Html>
  );
};

export const SimpleLoadingScreen: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#090420]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-purple-300 font-medium">Model hazırlanıyor...</p>
      </div>
    </div>
  );
};