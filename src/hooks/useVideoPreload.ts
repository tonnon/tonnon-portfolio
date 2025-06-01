import { useState, useEffect } from 'react';

/**
 * Custom hook to preload video
 * @param src Video source URL
 * @returns Object containing loading status
 */
export default function useVideoPreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Create video element
    const video = document.createElement('video');
    let totalSize = 0;
    let loadedSize = 0;

    // Set up progress monitoring
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'arraybuffer';

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        totalSize = event.total;
        loadedSize = event.loaded;
        const newProgress = Math.round((loadedSize / totalSize) * 100);
        setProgress(newProgress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'video/mp4' });
        const objectUrl = URL.createObjectURL(blob);
        
        video.src = objectUrl;
        video.load();

        video.oncanplaythrough = () => {
          setIsLoaded(true);
          // Clean up
          URL.revokeObjectURL(objectUrl);
        };
      }
    };

    xhr.send();

    return () => {
      xhr.abort();
      video.oncanplaythrough = null;
    };
  }, [src]);

  return { isLoaded, progress };
} 