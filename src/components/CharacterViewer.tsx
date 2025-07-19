"use client"

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useFBX, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// FBX Model Bileşeni
type CharacterModelProps = {
  position?: [number, number, number];
  scale?: number;
  onLoad?: () => void;
};

const CharacterModel: React.FC<CharacterModelProps> = ({
  position = [0, 0, 0],
  scale = 0.01,
  onLoad
}) => {
  const group = useRef<THREE.Group>(null!);
  const fbx = useFBX('/Lupi1.fbx');
  const { scene } = useThree();
  
  // Modeli hafifçe döndürme animasyonu
  useFrame((state) => {
    if (group.current) {
      // Daha yavaş ve daha hafif dönüş
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
    }
  });

  useEffect(() => {
    // FBX modellerinde malzemeleri ve ışığı iyileştirme
    if (fbx) {
      // Modelin orijinal konumunu merkeze getir
      fbx.position.set(0, 0, 0);
      
      // HMR için cache temizleme
      if (process.env.NODE_ENV === 'development') {
        fbx.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => {
                mat.needsUpdate = true;
                if (mat.map) mat.map.needsUpdate = true;
              });
            } else {
              child.material.needsUpdate = true;
              if (child.material.map) child.material.map.needsUpdate = true;
            }
          }
        });
      }
      
      // Modelin yönünü düzelt (gerekirse)
      // fbx.rotation.set(0, Math.PI, 0); // Y ekseninde 180 derece döndürmek için
      
      // Tip koruma (type guard) fonksiyonu
      const hasMap = (material: THREE.Material): material is THREE.Material & { map: THREE.Texture | null } => {
        return 'map' in material && material.map !== undefined;
      };
      
      // Özel materyal oluşturan veya mevcut materyali düzenleyen fonksiyon
      const applyCustomMaterialWithReflection = (originalMaterial: THREE.Material): THREE.Material => {
        if (!originalMaterial) return originalMaterial;
        
        // Yeni MeshStandardMaterial oluştur
        const newMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 1.0,
          metalness: 0.0,
          emissive: new THREE.Color(0x000000),
          emissiveIntensity: 0.0,
          envMap: null,
        });
        
        // Orijinal materyalden texture bilgilerini kopyala
        if (hasMap(originalMaterial) && originalMaterial.map !== null) {
          newMaterial.map = originalMaterial.map;
          newMaterial.map.anisotropy = 16;
        }
        
        // Orijinal materyalden renk bilgisini kopyala
        if ('color' in originalMaterial) {
          const materialWithColor = originalMaterial as THREE.Material & { color: THREE.Color };
          newMaterial.color = materialWithColor.color;
        }
        
        newMaterial.needsUpdate = true;
        
        return newMaterial;
      };
      
      // Modelin tüm materyallerini işleyelim
      fbx.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Materyal işlemleri
          if (child.material) {
            // Tek materyal veya materyal dizisi için işlem yap
            if (Array.isArray(child.material)) {
              child.material = child.material.map(applyCustomMaterialWithReflection);
            } else {
              child.material = applyCustomMaterialWithReflection(child.material);
            }
          }
          
          // Gölgeleri etkinleştirme
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      // Model yüklendikten sonra callback çağır
      if (onLoad) {
        onLoad();
      }
    }
  }, [fbx, scene, onLoad]);

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={fbx} />
    </group>
  );
};

// Ana 3D sahne
type SceneProps = {
  onModelLoad?: () => void;
};

const Scene: React.FC<SceneProps> = ({ onModelLoad }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={0.6} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.2} />
      <pointLight position={[5, -5, 5]} intensity={0.2} color="#ffffff" />
      <hemisphereLight args={['#ffffff', '#8080ff', 0.3]} />
      
      <Suspense fallback={null}>
        <CharacterModel position={[0, -1, 0]} scale={0.015} onLoad={onModelLoad} />
        
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.3}
          scale={12}
          blur={2.5}
          far={5}
          color="#350c50"
        />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        maxDistance={10}
        minDistance={2}
      />
    </>
  );
};

// Ana CharacterViewer bileşeni
export const CharacterViewer: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const handleModelLoad = () => {
    setIsModelLoaded(true);
  };
  
  return (
    <div className="w-full h-[600px] lg:h-[700px] relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_50px_rgba(142,68,173,0.3)]">
      <Canvas
        key={process.env.NODE_ENV === 'development' ? Date.now() : 'production'}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows="soft"
        performance={{ min: 0.5 }}
        frameloop="demand"
      >
        <Scene onModelLoad={handleModelLoad} />
      </Canvas>
      
      {/* Yükleme göstergesi */}
      {!isModelLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#090420]/80">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-purple-300 font-medium">Karakter yükleniyor...</p>
          </div>
        </div>
      )}
      
      {/* Canvas üzerine bindirilen bilgiler */}
      <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 p-4 text-white text-sm">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-pink-500 h-3 w-3 rounded-full animate-pulse"></div>
          <div className="font-mono opacity-70 text-xs">
            Modeli döndürmek için tıklayıp sürükleyin
          </div>
        </div>
      </div>
    </div>
  );
};