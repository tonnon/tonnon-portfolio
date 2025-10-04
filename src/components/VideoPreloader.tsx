import { useEffect, useState } from 'react';

// List of videos to preload
const videosToPreload = ['/blackhole.mp4'];

const VideoPreloader = () => {
  const [shouldPreload, setShouldPreload] = useState(false);

  useEffect(() => {
    // Only preload video when user is about to interact
    const handleUserInteraction = () => {
      setShouldPreload(true);
      // Remove listeners after first interaction
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Start preloading on user interaction
    document.addEventListener('mousemove', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (!shouldPreload) return;

    const videoElements = videosToPreload.map(src => {
      const videoEl = document.createElement('video');
      videoEl.style.display = 'none';
      videoEl.muted = true;
      videoEl.preload = 'metadata'; // Changed from 'auto' to 'metadata'
      
      const sourceEl = document.createElement('source');
      sourceEl.src = src;
      sourceEl.type = 'video/mp4';
      videoEl.appendChild(sourceEl);
      
      document.body.appendChild(videoEl);
      
      videoEl.load();
      
      return videoEl;
    });
    
    return () => {
      videoElements.forEach(el => {
        if (document.body.contains(el)) {
          document.body.removeChild(el);
        }
      });
    };
  }, [shouldPreload]);
  
  return null;
};

export default VideoPreloader; 