"use client"

import { useRef, useState, useEffect, Suspense, Component } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Html, useProgress } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

// Hata yakalama bileşeni
class ErrorBoundary extends Component<{fallback: React.ReactNode, children: React.ReactNode}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("3D model yüklenirken hata:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Yükleme göstergesi
const Loader = () => {
  const { progress } = useProgress();
  return <Html center><div className="text-white text-xl font-mono">%{Math.round(progress)} yükleniyor</div></Html>;
};

// FBX Karakter Modeli Bileşeni
const CharacterModel: React.FC<{ position?: [number, number, number], scale?: number, rotationSpeed?: number }> = ({
  position = [0, 0, 0],
  scale = 1,
  rotationSpeed = 0.3
}) => {
  const group = useRef<THREE.Group>(null!);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  
  // FBX modelini yükle - try/catch ile hata yönetimi
  let fbx;
  try {
    fbx = useLoader(FBXLoader, '/character.fbx');
  } catch (error) {
    // useLoader hata fırlattığında, ErrorBoundary bunu yakalayacaktır
    // Bu kod çalışmayacak, sadece tip güvenliği için
    console.error("FBX model yükleme hatası:", error);
    throw error;
  }

  useEffect(() => {
    if (fbx) {
      try {
        // Model yüklendi, materyal ve transformasyonları ayarla
        fbx.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Materyal ayarları - modelin orijinal materyallerini koruyarak ek ayarlar yapabilirsiniz
            if (child.material) {
              child.material.needsUpdate = true;
              child.material.side = THREE.DoubleSide;
              child.castShadow = true;
              child.receiveShadow = true;
            }
          }
        });
        
        // Modelin yüklendiğini işaretle
        setModelLoaded(true);
      } catch (e) {
        setModelError("Model işlenirken hata oluştu");
        console.error("Model işleme hatası:", e);
      }
    }
  }, [fbx]);
  
  // Modeli döndürme animasyonu
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * rotationSpeed) * 0.2;
    }
  });

  // Hata durumunda bilgilendirici bir mesaj göster
  if (modelError) {
    return (
      <Html center>
        <div className="bg-red-800/80 text-white p-4 rounded-lg">
          <p className="text-lg font-bold">Model yüklenemedi</p>
          <p>{modelError}</p>
        </div>
      </Html>
    );
  }

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive
        object={fbx}
        dispose={null}
        scale={0.01} // FBX modelinin boyutuna göre ayarlayın
      />
    </group>
  );
};

// Yedek Model (FBX yüklenemezse gösterilecek)
const FallbackModel: React.FC<{ position?: [number, number, number], scale?: number }> = ({
  position = [0, 0, 0],
  scale = 1
}) => {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Basit bir insan figürü */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#f1c27d" roughness={0.5} metalness={0.2} />
      </mesh>
      
      <mesh position={[0, 0.75, 0]}>
        <capsuleGeometry args={[0.2, 0.7, 16, 32]} />
        <meshStandardMaterial color="#FF6B6B" roughness={0.6} metalness={0.1} />
      </mesh>
      
      <mesh position={[-0.3, 0.75, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <capsuleGeometry args={[0.08, 0.5, 16, 32]} />
        <meshStandardMaterial color="#FF6B6B" roughness={0.6} metalness={0.1} />
      </mesh>
      
      <mesh position={[0.3, 0.75, 0]} rotation={[0, 0, Math.PI / 4]}>
        <capsuleGeometry args={[0.08, 0.5, 16, 32]} />
        <meshStandardMaterial color="#FF6B6B" roughness={0.6} metalness={0.1} />
      </mesh>
      
      <mesh position={[-0.15, 0.2, 0]}>
        <capsuleGeometry args={[0.09, 0.4, 16, 32]} />
        <meshStandardMaterial color="#4D4AE8" roughness={0.6} metalness={0.1} />
      </mesh>
      
      <mesh position={[0.15, 0.2, 0]}>
        <capsuleGeometry args={[0.09, 0.4, 16, 32]} />
        <meshStandardMaterial color="#4D4AE8" roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
};

// Karakterin etrafında süzülen 3D nesneler
const FloatingObjects: React.FC = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[-1, 1, 0.5]}>
        <mesh>
          <torusGeometry args={[0.15, 0.05, 16, 32]} />
          <meshStandardMaterial color="#00FFFF" roughness={0.3} metalness={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.2} position={[1.2, 0.5, 0.8]}>
        <mesh>
          <dodecahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial color="#FF3E9D" roughness={0.3} metalness={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.0} position={[0.5, 1.4, -0.5]}>
        <mesh>
          <icosahedronGeometry args={[0.17, 0]} />
          <meshStandardMaterial color="#FFDE59" roughness={0.3} metalness={0.8} />
        </mesh>
      </Float>
    </>
  );
};

// Ana 3D sahne
const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Suspense fallback={<Loader />}>
        {/* FBX dosyası yüklendiyse CharacterModel, yüklenemediyse FallbackModel göster */}
        <ErrorBoundary fallback={<FallbackModel position={[0, -0.5, 0]} scale={1.2} />}>
          <CharacterModel position={[0, -0.5, 0]} scale={1.2} />
        </ErrorBoundary>
        <FloatingObjects />
        <Environment preset="studio" />
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.6}
          scale={10}
          blur={2}
          far={4}
          color="#704d9d"
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
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
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
              <Scene />
            </Canvas>
            
            {/* Canvas üzerine bindirilen bilgiler */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 p-4 text-white text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-500 h-3 w-3 rounded-full animate-pulse"></div>
                  <span className="font-mono">Character Prototype v2.5</span>
                </div>
                <div className="font-mono opacity-70 text-xs">3D Model Önizleme</div>
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