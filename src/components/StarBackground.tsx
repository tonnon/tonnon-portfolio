import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  pulse: number;
  pulseSpeed: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initStars = () => {
      const stars: Star[] = [];
      const density = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.03 + 0.005,
          pulse: Math.random(),
          pulseSpeed: Math.random() * 0.002 + 0.001
        });
      }
      
      starsRef.current = stars;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      initStars();
    };

    window.addEventListener('resize', resize);
    resize();

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach(star => {
        star.pulse += star.pulseSpeed;
        if (star.pulse > 1) star.pulse = 0;
        
        const pulseFactor = Math.sin(star.pulse * Math.PI * 2) * 0.3 + 0.7;
        const currentSize = star.size * pulseFactor;
        const currentOpacity = star.opacity * pulseFactor;
        
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, currentSize * 3
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(210, 210, 255, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
        
        star.y += star.speed;
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    let animationFrameId: number;
    const animate = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black/50"
    />
  );
};

export default StarBackground;
