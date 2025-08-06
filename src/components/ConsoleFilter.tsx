'use client';

import { useEffect } from 'react';

const ConsoleFilter = () => {
  useEffect(() => {
    // Console uyarılarını filtreleme
    const originalWarn = console.warn;

    console.warn = function(message, ...args) {
      // FBXLoader uyarılarını filtrele
      if (typeof message === 'string' && 
          (message.includes('ShininessExponent map is not supported') ||
           message.includes('ReflectionFactor map is not supported') ||
           message.includes('THREE.FBXLoader:'))) {
        return; // Bu uyarıları gösterme
      }
      
      // Diğer uyarıları normal şekilde göster
      originalWarn.call(console, message, ...args);
    };

    // Cleanup function - component unmount olduğunda original fonksiyonu geri yükle
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return null; // Bu component hiçbir şey render etmez
};

export default ConsoleFilter;