'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`mx-auto max-w-2xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}
        >
            <Link href="/" className="text-white font-bold text-xl tracking-wider">SB.</Link>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
              <Link href="#about" className="hover:text-white transition-colors duration-300">About</Link>
              <Link href="#projects" className="hover:text-white transition-colors duration-300">Projects</Link>
              <Link href="#experience" className="hover:text-white transition-colors duration-300">Experience</Link>
              <Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link>
            </div>
            <Link href="#contact" className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
              Let's Talk
            </Link>
        </motion.nav>
      </div>
    </header>
  );
}
