'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to build<br/><span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-gray-600">the future?</span></h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Whether it's a new project, a collaboration inquiry, or just a chat about technology, I'm always open to talking.
          </p>

          <a href="mailto:hello@solomonbright.com" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-200 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" /> Say Hello
            </span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex items-center justify-center gap-6"
        >
           <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:text-white text-gray-400 transition-all">
             <Github className="w-5 h-5" />
           </a>
           <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:text-white text-gray-400 transition-all">
             <Linkedin className="w-5 h-5" />
           </a>
           <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:text-white text-gray-400 transition-all">
             <Twitter className="w-5 h-5" />
           </a>
        </motion.div>
        
        <div className="mt-12 text-sm text-gray-600">
          © {new Date().getFullYear()} Solomon Bright. Designed with intent.
        </div>
      </div>
    </section>
  );
}
