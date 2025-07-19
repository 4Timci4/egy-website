"use client";

import { useEffect } from 'react';
import { useFBX } from '@react-three/drei';

export const useModelPreloader = () => {
  useEffect(() => {
    // Ana sayfa yüklendiğinde karakteri preload et
    try {
      useFBX.preload('/Lupi1.fbx');
      console.log('🚀 3D karakter modeli preload edildi');
    } catch (error) {
      console.warn('⚠️ Model preload hatası:', error);
    }
  }, []);
};

// Global preload fonksiyonu - component dışından da çağrılabilir
export const preloadCharacterModel = () => {
  useFBX.preload('/Lupi1.fbx');
};