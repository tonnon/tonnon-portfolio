
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeFilter, setActiveFilter }) => {
  const logoInnerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const logoInner = logoInnerRef.current;
    if (!logoInner) return;
    
    // Create slower pulsating animation for the logo
    const animateLogo = () => {
      const time = Date.now() * 0.0005; // Slowed down
      const pulse = Math.sin(time * 0.8) * 0.15 + 0.85;
      
      // Apply dynamic box shadow for glow effect
      logoInner.style.boxShadow = `0 0 ${10 * pulse}px ${5 * pulse}px rgba(147, 112, 219, ${0.6 * pulse})`;
    };
    
    const intervalId = setInterval(animateLogo, 16); // ~60fps
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-20">
      <div className="glass py-4 px-6 backdrop-blur-lg bg-black/30 border-t-0">
        <nav className="mw-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center transition-all duration-700 animate-pulse-slow">
              <div 
                ref={logoInnerRef} 
                className="h-6 w-6 rounded-full bg-black transition-all duration-500"
              ></div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass backdrop-blur-md bg-black/20">
            {[
              {id: 'Todos', label: 'All'}, 
              {id: 'Websites', label: 'Websites'}, 
              {id: 'Jogos', label: 'Games'}
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveFilter(item.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === item.id 
                    ? "bg-purple-700 text-white shadow-lg" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/tonnon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lucastonnon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
