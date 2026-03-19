'use client';
import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();

    const particles: { x: number; y: number; s: number; sx: number; sy: number; life: number }[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 1.5 + 0.5,
        sx: (Math.random() - 0.5) * 0.3,
        sy: (Math.random() - 0.5) * 0.3 - 0.2, // Slight upward drift
        life: Math.random() * 100
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.sx;
        p.y += p.sy;
        p.life -= 0.1;
        
        if (p.life <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = 100;
        }

        const opacity = Math.min(p.life / 20, 1) * 0.4;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full opacity-60 absolute pointer-events-none" />;
}
