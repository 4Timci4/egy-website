export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  modelPath: string;
  image: string;
  tags: string[];
  details: {
    software: string[];
    renderEngine: string;
    polygonCount: string;
    textures: string[];
    creationDate: string;
    projectType: string;
  };
  gallery?: string[];
}

export const characters: Character[] = [
  {
    id: "lupi",
    name: "Lupi",
    title: "Fantasy Karakter",
    description: "Detaylı fantasy karakteri. Yüksek kaliteli modeling ve texturing ile hazırlanmış.",
    modelPath: "/Lupi1.fbx",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23000000'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23a855f7' font-size='24' font-family='Arial'%3E🎭%3C/text%3E%3Ctext x='50%25' y='65%25' text-anchor='middle' fill='%23ffffff' font-size='16' font-family='Arial'%3ELupi%3C/text%3E%3C/svg%3E",
    tags: ["Fantasy", "Character", "Game Ready", "High Poly"],
    details: {
      software: ["Blender", "Substance Painter", "ZBrush"],
      renderEngine: "Cycles",
      polygonCount: "25.000 tris",
      textures: ["Diffuse", "Normal", "Roughness", "Metallic"],
      creationDate: "2024",
      projectType: "Personal Project"
    },
    gallery: [
      "/characters/lupi-1.jpg",
      "/characters/lupi-2.jpg", 
      "/characters/lupi-3.jpg"
    ]
  },
  {
    id: "warrior",
    name: "Medieval Savaşçı",
    title: "Zırhlı Karakter",
    description: "Ortaçağ tarzı zırhlı savaşçı karakteri. PBR materyal workflow ile hazırlanmış.",
    modelPath: "/Lupi1.fbx",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23000000'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23ef4444' font-size='24' font-family='Arial'%3E⚔️%3C/text%3E%3Ctext x='50%25' y='65%25' text-anchor='middle' fill='%23ffffff' font-size='16' font-family='Arial'%3ESavaşçı%3C/text%3E%3C/svg%3E",
    tags: ["Medieval", "Warrior", "Armor", "PBR"],
    details: {
      software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
      renderEngine: "Arnold",
      polygonCount: "30.000 tris",
      textures: ["Albedo", "Normal", "Roughness", "Metallic", "AO"],
      creationDate: "2024",
      projectType: "Commission"
    }
  },
  {
    id: "robot",
    name: "Sci-Fi Robot",
    title: "Mecha Karakter",
    description: "Gelecek tarzı robot karakteri. Hard surface modeling teknikleri kullanılmış.",
    modelPath: "/Lupi1.fbx",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23000000'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%2306b6d4' font-size='24' font-family='Arial'%3E🤖%3C/text%3E%3Ctext x='50%25' y='65%25' text-anchor='middle' fill='%23ffffff' font-size='16' font-family='Arial'%3ERobot%3C/text%3E%3C/svg%3E",
    tags: ["Sci-Fi", "Robot", "Mecha", "Hard Surface"],
    details: {
      software: ["3ds Max", "Substance Designer", "KeyShot"],
      renderEngine: "V-Ray",
      polygonCount: "40.000 tris",
      textures: ["Diffuse", "Normal", "Specular", "Emission"],
      creationDate: "2024",
      projectType: "Portfolio"
    }
  },
  {
    id: "creature",
    name: "Alien Yaratık",
    title: "Organik Karakter",
    description: "Yaratık tasarımı ve organik modeling. Detaylı sculpting teknikleri.",
    modelPath: "/Lupi1.fbx",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23000000'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%2310b981' font-size='24' font-family='Arial'%3E👽%3C/text%3E%3Ctext x='50%25' y='65%25' text-anchor='middle' fill='%23ffffff' font-size='16' font-family='Arial'%3EYaratık%3C/text%3E%3C/svg%3E",
    tags: ["Alien", "Creature", "Organic", "Sculpting"],
    details: {
      software: ["ZBrush", "Blender", "Substance Painter"],
      renderEngine: "Cycles",
      polygonCount: "50.000 tris",
      textures: ["Albedo", "Normal", "Subsurface", "Roughness"],
      creationDate: "2024",
      projectType: "Concept Art"
    }
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find((character: Character) => character.id === id);
};