"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { SparklesCore } from "@/components/ui/sparkles"

const exampleImages = [
  {
    url: "https://i.ibb.co/WNYgSMw6/Moly7.png",
    author: "Branislav Rodman",
    link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://drive.google.com/file/d/1AFClJQgfswNfxDP0yTpsj0wUTm9ft_BJ/view?usp=drive_link",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc",
  },
  {
    url: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Mathilde Langevin",
    link: "https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0",
    title: "A table topped with two wine glasses and plates",
  },
]

export const HeroSection = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate])

  return (
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden pt-32">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-full h-96">
        <SparklesCore
          id="tsparticlesbottom"
          background="transparent"
          minSize={0.8}
          maxSize={2.0}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#06b6d4"
        />
      </div>
      <div
        className="flex w-full h-full justify-center items-center relative"
        ref={scope}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8"
            >
              Acme
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-64 mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Creative Digital Studio
            </motion.p>
          </div>
        </div>
        
        <Floating sensitivity={-1} className="overflow-hidden">
          <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[0].url}
              alt={exampleImages[0].title}
              className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[10%] left-[32%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[1].url}
              alt={exampleImages[1].title}
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[2%] left-[53%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[2].url}
              alt={exampleImages[2].title}
              className="w-28 h-40 md:w-40 md:h-52 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[0%] left-[83%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[3].url}
              alt={exampleImages[3].title}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[40%] left-[2%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[4].url}
              alt={exampleImages[4].title}
              className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[70%] left-[77%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[7].url}
              alt={exampleImages[7].title}
              className="w-28 h-28 md:w-36 md:h-48 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={4} className="top-[73%] left-[15%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[5].url}
              alt={exampleImages[5].title}
              className="w-40 md:w-52 h-full object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[80%] left-[50%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[6].url}
              alt={exampleImages[6].title}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg"
            />
          </FloatingElement>
        </Floating>
      </div>
    </section>
  )
}