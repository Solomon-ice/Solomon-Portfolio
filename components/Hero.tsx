'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
         <Scene />
      </div>
      
      {/* Particles Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         <Particles />
      </div>

     
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
           className="relative mb-5 sm:mb-6"
        >
          <div className="relative h-28 w-28 rounded-full bg-linear-to-b from-white/20 to-transparent p-1 shadow-[0_0_50px_rgba(255,255,255,0.1)] sm:h-36 sm:w-36 md:h-44 md:w-44">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-white/10">
              <Image 
                src="/images/me.png" 
                alt="Solomon Billot"
                fill
                className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                priority
              />
            </div>
          </div>
          <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl -z-10 animate-pulse" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
           animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
           transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm sm:mb-8">
              
             <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Software Engineer</span>
          </div>
        </motion.div>
        <span className="relative flex h-3 gap-2  justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>

        </span>
        <span className='text-xs font-semibold tracking-widest uppercase text-gray-300'>Hello there, I'm</span>

        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="mb-5 max-w-4xl bg-linear-to-b from-white via-white/90 to-white/35 bg-clip-text text-[clamp(3rem,12vw,8rem)] font-bold leading-[0.9] text-transparent sm:mb-6"
        >
          Solomon Billot
        </motion.h1>

        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
           className="mb-9 max-w-2xl text-base font-light leading-7 text-gray-300 sm:mb-11 sm:text-lg md:text-xl md:leading-8"
        >
          I build immersive, high-performance web experiences with modern engineering, thoughtful interaction, and clean visual systems.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
           className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#projects" className="relative group inline-flex min-h-12 items-center overflow-hidden rounded-full bg-white px-7 py-3 font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] sm:px-8 sm:py-4">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
          <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:px-8 sm:py-4">
            Contact Me
          </a>
        </motion.div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 z-0 h-[min(80vw,800px)] w-[min(80vw,800px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px] mix-blend-screen pointer-events-none" />
    </section>
  );
}
