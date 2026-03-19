'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Senior Creative Technologist",
      company: "Stellar Agency",
      desc: "Leading the development of award-winning immersive web experiences using WebGL and advanced React architectures."
    },
    {
      year: "2022 - 2024",
      role: "Frontend Engineer",
      company: "Quantum Software",
      desc: "Architected micro-frontends and built high-performance dashboards that handle real-time data streaming."
    },
    {
      year: "2020 - 2022",
      role: "Full Stack Developer",
      company: "Nebula Labs",
      desc: "Developed scalable APIs and interactive UI components for various enterprise startups."
    }
  ];

  return (
    <section id="experience" className="py-32 relative z-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-emerald-500 rounded-full mb-16" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500/50 before:via-white/10 before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(52,211,153,0.3)] z-10 transition-transform duration-300 group-hover:scale-125">
                <div className="w-3 h-3 bg-emerald-400 rounded-full" />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 rounded-2xl group-hover:border-emerald-500/30 transition-colors"
               >
                <div className="flex flex-col mb-4">
                  <span className="text-emerald-400 font-mono text-sm mb-2">{exp.year}</span>
                  <h3 className="text-white text-xl font-bold">{exp.role}</h3>
                  <span className="text-gray-400 font-medium">{exp.company}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
