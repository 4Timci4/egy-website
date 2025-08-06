"use client";

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useFBX, ContactShadows, PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';
import { SimpleLoadingScreen } from './LoadingScreen';

// Optimized Character Model Component
type CharacterModelProps = {
  position?: [number, number, number];
  scale?: number;
  onLoad?: () => void;
  modelPath?: string;
};

const CharacterModel: React.FC<CharacterModelProps> = ({
  position = [0, 0, 0],
  scale = 0.01,
  onLoad,
  modelPath = '/Lupi1.fbx'
}) => {
  const group = useRef<THREE.Group>(null!);
  const fbx = useFBX(modelPath);
  const { scene, invalidate } = useThree();
  
  // Optimized animation with performance consideration
  useFrame((state) => {
    if (group.current) {
      // Smoother, more efficient rotation
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
      // Request invalidation for on-demand rendering
      invalidate();
    }
  });

  useEffect(() => {
    if (!fbx) return;
    
    // Global console.warn override for FBX warnings
    const originalWarn = console.warn;
    const originalError = console.error;
    
    // Suppress all FBX related warnings and errors
    console.warn = (...args) => {
      const message = args.join(' ');
      if (message.includes('FBXLoader') ||
          message.includes('map is not supported in three.js') ||
          message.includes('ReflectionFactor') ||
          message.includes('ShininessExponent') ||
          message.includes('THREE.FBXLoader')) {
        return;
      }
      originalWarn.apply(console, args);
    };
    
    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('FBXLoader') ||
          message.includes('map is not supported in three.js')) {
        return;
      }
      originalError.apply(console, args);
    };
    
    // Center the model
    fbx.position.set(0, 0, 0);
    
    // Material optimization function
    const optimizeMaterial = (originalMaterial: THREE.Material): THREE.Material => {
      if (!originalMaterial) return originalMaterial;
      
      const newMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8,
        metalness: 0.1,
        envMapIntensity: 0.3,
      });
      
      // Copy texture if exists with proper type checking
      if ('map' in originalMaterial && originalMaterial.map) {
        const texture = originalMaterial.map as THREE.Texture;
        newMaterial.map = texture;
        texture.anisotropy = Math.min(16, texture.anisotropy || 1);
      }
      
      // Copy color if exists
      if ('color' in originalMaterial) {
        const materialWithColor = originalMaterial as THREE.Material & { color: THREE.Color };
        newMaterial.color = materialWithColor.color;
      }
      
      newMaterial.needsUpdate = true;
      return newMaterial;
    };
    
    // Traverse and optimize
    fbx.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Optimize materials
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material = child.material.map(optimizeMaterial);
          } else {
            child.material = optimizeMaterial(child.material);
          }
        }
        
        // Enable shadows efficiently
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Optimize geometry if needed
        if (child.geometry) {
          child.geometry.computeBoundingSphere();
        }
      }
    });
    
    // Model loaded callback
    if (onLoad) {
      onLoad();
    }
    
    // Force invalidation after model setup
    invalidate();
    
    // Cleanup: restore original console functions
    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, [fbx, scene, onLoad, invalidate]);

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={fbx} />
    </group>
  );
};

// Low Quality Fallback Component
const LowQualityCharacter: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { invalidate } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
      invalidate();
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, -1, 0]} castShadow receiveShadow>
      <boxGeometry args={[1, 2, 0.5]} />
      <meshStandardMaterial
        color="#8b5cf6"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
};

// Optimized Scene Component
type SceneProps = {
  onModelLoad?: () => void;
  isLowPerformance?: boolean;
  modelPath?: string;
};

const Scene: React.FC<SceneProps> = ({ onModelLoad, isLowPerformance = false, modelPath }) => {
  const { invalidate } = useThree();
  
  return (
    <>
      {/* Optimized lighting setup */}
      <ambientLight intensity={isLowPerformance ? 0.4 : 0.3} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={isLowPerformance ? 0.6 : 0.8}
        castShadow={!isLowPerformance}
        shadow-mapSize-width={isLowPerformance ? 512 : 1024}
        shadow-mapSize-height={isLowPerformance ? 512 : 1024}
      />
      {!isLowPerformance && (
        <>
          <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={0.6} castShadow />
          <pointLight position={[-5, -5, -5]} intensity={0.2} />
          <pointLight position={[5, -5, 5]} intensity={0.2} color="#ffffff" />
        </>
      )}
      <hemisphereLight args={['#ffffff', '#8080ff', 0.3]} />
      
      {/* Nested Suspense Strategy */}
      <Suspense fallback={<LowQualityCharacter />}>
        <CharacterModel position={[0, -1, 0]} scale={0.015} onLoad={onModelLoad} modelPath={modelPath} />
      </Suspense>
      
      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={isLowPerformance ? 0.2 : 0.3}
        scale={12}
        blur={isLowPerformance ? 1.5 : 2.5}
        far={5}
        color="#350c50"
      />
      
      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        maxDistance={10}
        minDistance={2}
        enableDamping={true}
        dampingFactor={0.05}
        onEnd={() => {
          // Trigger invalidation when user interaction ends
          invalidate();
        }}
      />
    </>
  );
};

// Performance Monitor Component
const AdaptivePerformance: React.FC<{
  onPerformanceChange?: (isLowPerformance: boolean) => void
}> = ({ onPerformanceChange }) => {
  const setDpr = useThree(state => state.setDpr);

  return (
    <PerformanceMonitor
      onIncline={() => {
        setDpr(2);
        onPerformanceChange?.(false);
      }}
      onDecline={() => {
        setDpr(1);
        onPerformanceChange?.(true);
      }}
      onFallback={() => {
        setDpr(0.5);
        onPerformanceChange?.(true);
      }}
      flipflops={3}
    />
  );
};

// Main CharacterViewer Component
type CharacterViewerProps = {
  modelPath?: string;
};

export const CharacterViewer: React.FC<CharacterViewerProps> = ({ modelPath }) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleModelLoad = () => {
    setIsModelLoaded(true);
    setLoadingProgress(100);
  };

  const handlePerformanceChange = (lowPerf: boolean) => {
    setIsLowPerformance(lowPerf);
  };

  useEffect(() => {
    // Simulate loading progress for better UX
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 95 && !isModelLoaded) {
          clearInterval(interval);
          return 95;
        }
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isModelLoaded]);
  
  return (
    <div className="w-full h-[600px] lg:h-[700px] relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_50px_rgba(142,68,173,0.3)]">
      <Canvas
        key={process.env.NODE_ENV === 'development' ? Date.now() : 'production'}
        dpr={[1, 2]}
        gl={{
          antialias: !isLowPerformance,
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows={!isLowPerformance ? "soft" : false}
        performance={{ min: 0.5 }}
        frameloop="demand"
      >
        <AdaptivePerformance onPerformanceChange={handlePerformanceChange} />
        <Scene onModelLoad={handleModelLoad} isLowPerformance={isLowPerformance} modelPath={modelPath} />
      </Canvas>
      
      {/* Enhanced Loading Screen */}
      {!isModelLoaded && (
        <Suspense fallback={<SimpleLoadingScreen />}>
          <div className="absolute inset-0 flex items-center justify-center bg-[#090420]/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-6">
              {/* Progress Circle */}
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgb(139, 92, 246)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - loadingProgress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-300 font-bold text-lg">
                    {Math.round(loadingProgress)}%
                  </span>
                </div>
              </div>
              
              {/* Loading Text */}
              <div className="text-center space-y-2">
                <p className="text-purple-300 font-medium text-xl">
                  3D Karakter Yükleniyor
                </p>
                <p className="text-purple-400/70 text-sm">
                  {loadingProgress < 30 && "Model indiriliyor..."}
                  {loadingProgress >= 30 && loadingProgress < 60 && "Materyaller hazırlanıyor..."}
                  {loadingProgress >= 60 && loadingProgress < 90 && "Optimizasyon yapılıyor..."}
                  {loadingProgress >= 90 && "Son kontroller..."}
                </p>
              </div>
              
              {/* Loading Animation */}
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: '0.6s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </Suspense>
      )}
      
      {/* Performance Indicator */}
      {isModelLoaded && isLowPerformance && (
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 backdrop-blur-sm">
          <span className="text-yellow-300 text-xs font-medium">Düşük Performans Modu</span>
        </div>
      )}
      
      {/* Interactive Instructions */}
      <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 p-4 text-white text-sm">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 w-3 rounded-full animate-pulse"></div>
          <div className="font-mono opacity-70 text-xs">
            Modeli döndürmek için tıklayıp sürükleyin • Yakınlaştırmak için kaydırın
          </div>
        </div>
      </div>
    </div>
  );
};