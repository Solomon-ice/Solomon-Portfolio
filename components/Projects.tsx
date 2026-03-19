'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'; // using Next Image requires configured host. We will use a placeholder or div if needed.

export default function Projects() {
  const projects = [
    {
      title: "Nebula Protocol",
      category: "DeFi Platform",
      desc: "A frictionless decentralized exchange built on a custom rollup.",
      tech: ["Next.js", "Solidity", "Tailwind", "Three.js"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Aura Workspace",
      category: "SaaS App",
      desc: "An AI-powered contextual workspace for remote teams.",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Quantum Engine",
      category: "Open Source",
      desc: "A blazingly fast physics engine developed in Rust and WebAssembly.",
      tech: ["Rust", "WASM", "WebGL"],
      color: "from-emerald-500/20 to-teal-500/20",
    }
  ];

  return (
    <section id="projects" className="py-32 relative z-20 bg-black/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Works</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: i * 0.2 }}
               className="group relative rounded-3xl overflow-hidden glass border border-white/5"
             >
                <div className={`absolute inset-0 bg-linear-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-12">
                     <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">{proj.category}</span>
                     <div className="p-2 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                       <ArrowUpRight className="w-4 h-4 text-white" />
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{proj.title}</h3>
                  <p className="text-gray-400 mb-8 grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
