"use client"

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useFBX, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// FBX Model Bileşeni
type CharacterModelProps = {
  position?: [number, number, number];
  scale?: number;
};

const CharacterModel: React.FC<CharacterModelProps> = ({
  position = [0, 0, 0],
  scale = 0.005 // FBX modeller genellikle çok büyük olduğundan ölçeği daha da küçültüyoruz
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
      
      // Tip koruma (type guard) fonksiyonları
      const isMeshStandardMaterial = (material: THREE.Material): material is THREE.MeshStandardMaterial => {
        return material.type === 'MeshStandardMaterial';
      };
      
      const isMeshPhongMaterial = (material: THREE.Material): material is THREE.MeshPhongMaterial => {
        return material.type === 'MeshPhongMaterial';
      };
      
      const isMeshPhysicalMaterial = (material: THREE.Material): material is THREE.MeshPhysicalMaterial => {
        return material.type === 'MeshPhysicalMaterial';
      };
      
      const hasEnvMap = (material: THREE.Material): material is THREE.Material & { envMap: THREE.Texture | null } => {
        return 'envMap' in material;
      };
      
      const hasReflectivity = (material: THREE.Material): material is THREE.Material & { reflectivity: number } => {
        return 'reflectivity' in material;
      };
      
      const hasMap = (material: THREE.Material): material is THREE.Material & { map: THREE.Texture | null } => {
        return 'map' in material && material.map !== undefined;
      };
      
      const hasRoughness = (material: THREE.Material): material is THREE.Material & { roughness: number } => {
        return 'roughness' in material;
      };
      
      const hasMetalness = (material: THREE.Material): material is THREE.Material & { metalness: number } => {
        return 'metalness' in material;
      };
      
      // Özel materyal oluşturan veya mevcut materyali düzenleyen fonksiyon
      const applyCustomMaterialWithReflection = (originalMaterial: THREE.Material): THREE.Material => {
        if (!originalMaterial) return originalMaterial;
        
        // Materyalin bir kopyasını oluştur
        let material = originalMaterial;
        
        // ReflectionFactor değerini originalMaterial'dan al (varsa)
        let reflectionFactor = 0.05; // Çok düşük yansıma
        if (originalMaterial.userData && originalMaterial.userData.reflectionFactor !== undefined) {
          reflectionFactor = originalMaterial.userData.reflectionFactor;
        }
        
        // EnvMap'i tamamen kapat
        if (hasEnvMap(material)) {
          material.envMap = null;
        }
        
        if (hasReflectivity(material)) {
          material.reflectivity = 0;
        }
        
        // Roughness'i arttırarak yüzeyi daha mat yap
        if (hasRoughness(material)) {
          material.roughness = 0.9; // Maksimum mat yüzey
        }
        
        // Metalness'i minimuma indir
        if (hasMetalness(material)) {
          material.metalness = 0; // Tamamen metalik olmayan
        }
        
        material.needsUpdate = true;
        
        // Texture ayarları
        if (hasMap(material) && material.map !== null) {
          material.map.anisotropy = 16;
        }
        
        return material;
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
    }
  }, [fbx, scene]);

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={fbx} />
    </group>
  );
};


// Ana 3D sahne
const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={0.5} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.1} />
      <hemisphereLight args={['#ffffff', '#606060', 0.3]} />
      
      <Suspense fallback={null}>
        <CharacterModel position={[0, -1, 0]} scale={0.015} />
        
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
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

// Ana Hero bileşeni
export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde animasyon için
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#090420] to-[#240643]">
      {/* Arka plan parçacıkları */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 container mx-auto px-4 py-16 min-h-screen items-center">
        {/* Sol İçerik Bölümü */}
        <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
              🎮 3D KARAKTER TASARIMCISI
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold">
              <span className="block text-white">Karakterlere</span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">Ruh Katıyorum</span>
            </h1>
            
            <p className="text-xl text-purple-100/80 max-w-xl">
              Oyunlar ve dijital dünyalar için yaratıcı, ifade dolu karakterler tasarlıyorum. 
              Hayal ettiğiniz kahramanları gerçeğe dönüştürüyorum.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-semibold shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
              Portfolyoyu İncele
            </button>
            
            <button className="px-8 py-4 border border-purple-500/30 backdrop-blur-sm rounded-full text-purple-300 font-semibold hover:bg-purple-900/20 transition-all duration-300">
              İletişime Geç
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8 text-center">
            <div className="space-y-1 backdrop-blur-sm bg-purple-900/10 rounded-xl p-4 border border-purple-500/10">
              <div className="text-3xl font-bold text-white">120+</div>
              <div className="text-purple-300/80 text-sm">Karakter</div>
            </div>
            <div className="space-y-1 backdrop-blur-sm bg-purple-900/10 rounded-xl p-4 border border-purple-500/10">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-purple-300/80 text-sm">Yıl Deneyim</div>
            </div>
            <div className="space-y-1 backdrop-blur-sm bg-purple-900/10 rounded-xl p-4 border border-purple-500/10">
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-purple-300/80 text-sm">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
        
        {/* Sağ 3D Model Bölümü */}
        <div className={`lg:col-span-3 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="w-full h-[500px] lg:h-[700px] relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_50px_rgba(142,68,173,0.3)]">
            <Canvas
              key={process.env.NODE_ENV === 'development' ? Date.now() : 'production'}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
              camera={{ position: [0, 0, 5], fov: 45 }}
              shadows="soft"
              performance={{ min: 0.5 }}
              frameloop="demand"
            >
              <Scene />
            </Canvas>
            
            {/* Yükleme göstergesi */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#090420]/80">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-purple-300 font-medium">3D Model Yükleniyor...</p>
                </div>
              </div>
            )}
            
            {/* Canvas üzerine bindirilen bilgiler */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 p-4 text-white text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-500 h-3 w-3 rounded-full animate-pulse"></div>
                  <span className="font-mono">Lupi1.fbx - Custom Character</span>
                </div>
                <div className="font-mono opacity-70 text-xs">
                  Modeli döndürmek için tıklayıp sürükleyin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Alt kısım süslemeleri */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#240643] to-transparent"></div>
    </section>
  );
};