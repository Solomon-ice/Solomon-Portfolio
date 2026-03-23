'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
         <Scene />
      </div>
      
      {/* Particles Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         <Particles />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
           animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
           transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
             <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Software Engineer</span>
          </div>
        </motion.div>

        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-linear-to-b from-white via-white/90 to-white/30"
        >
          Solomon Billot
        </motion.h1>

        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
           className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed"
        >
        I’m a software engineer focused on building immersive, high-performance digital experiences. I blend modern web technologies with thoughtful design to create products that are not only functional, but visually compelling and intuitive.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <a href="#projects" className="relative group overflow-hidden px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300 inline-block shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
        </motion.div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />
    </section>
  );
}
