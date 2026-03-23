'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "TypeScript", "React", "Next.js", "Three.js", 
    "Tailwind CSS", "Framer Motion", "Node.js", "Dart", "C#",
    "React Native", "Python", "Express", "MongoDB","Git","Github","SQL", "Flutter"
  ];

  return (
    <section id="skills" className="py-32 relative z-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Arsenal</h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-16" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 rounded-full glass border border-white/10 text-gray-300 font-medium cursor-default hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
