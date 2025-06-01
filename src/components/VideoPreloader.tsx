import { useEffect } from 'react';

// List of videos to preload
const videosToPreload = ['/blackhole.mp4'];

const VideoPreloader = () => {
  useEffect(() => {
    // Create hidden video elements and start loading them
    const videoElements = videosToPreload.map(src => {
      const videoEl = document.createElement('video');
      videoEl.style.display = 'none';
      videoEl.muted = true;
      videoEl.preload = 'auto';
      
      // Create source element
      const sourceEl = document.createElement('source');
      sourceEl.src = src;
      sourceEl.type = 'video/mp4';
      videoEl.appendChild(sourceEl);
      
      // Append to body to start loading
      document.body.appendChild(videoEl);
      
      // Force loading to start
      videoEl.load();
      
      return videoEl;
    });
    
    // Clean up function to remove elements
    return () => {
      videoElements.forEach(el => {
        if (document.body.contains(el)) {
          document.body.removeChild(el);
        }
      });
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default VideoPreloader; 