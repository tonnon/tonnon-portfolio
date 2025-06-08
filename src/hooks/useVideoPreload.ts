import { useState, useEffect } from 'react';  
export default function useVideoPreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = src;
    video.load();
    
    video.oncanplaythrough = () => {
      setIsLoaded(true);
    };

    return () => {
      video.oncanplaythrough = null;
    };
  }, [src]);

  return { isLoaded };
} 