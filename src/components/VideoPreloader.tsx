import { useEffect } from 'react';

// List of videos to preload
const videosToPreload = ['/blackhole.mp4'];

const VideoPreloader = () => {
  useEffect(() => {
    const videoElements = videosToPreload.map(src => {
      const videoEl = document.createElement('video');
      videoEl.style.display = 'none';
      videoEl.muted = true;
      videoEl.preload = 'auto';
      
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
  }, []);
  
  return null;
};

export default VideoPreloader; 