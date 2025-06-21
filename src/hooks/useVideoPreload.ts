import { useState, useEffect } from 'react';  

export default function useVideoPreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = src;
    video.load();
    
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        const progress = (bufferedEnd / duration) * 100;
        setLoadProgress(progress);
        
        // Consider loaded when we have enough buffered content
        if (progress > 25 || video.readyState >= 3) {
          setIsLoaded(true);
        }
      }
    };
    
    const handleCanPlay = () => {
      setIsLoaded(true);
    };
    
    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [src]);

  return { isLoaded, loadProgress };
}