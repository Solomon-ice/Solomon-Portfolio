'use client';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Sparkles } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <Code2 className="w-8 h-8 text-cyan-400" />, title: "Clean Arch", desc: "Writing code that scales elegantly." },
    { icon: <Globe2 className="w-8 h-8 text-purple-400" />, title: "Web3 Ready", desc: "Building decentralized futures." },
    { icon: <Cpu className="w-8 h-8 text-pink-400" />, title: "Performance", desc: "Optimizing every nanosecond." },
    { icon: <Sparkles className="w-8 h-8 text-teal-400" />, title: "UI/UX Magic", desc: "Crafting pixel-perfect interfaces." }
  ];

  return (
    <section id="about" className="py-32 relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mb-8 rounded-full" />
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a software engineer passionate about crafting immersive digital experiences that sit at the intersection of design and engineering. My work is driven by a desire to push boundaries—leveraging modern web technologies to build applications that are not only performant and scalable, but also visually engaging and intuitive.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
I specialize in developing responsive, high-performance web applications using tools like Next.js, React, and modern animation libraries. My approach combines clean architecture with attention to detail, ensuring that every product I build is both technically sound and aesthetically refined.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
