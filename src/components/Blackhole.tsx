import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import useVideoPreload from '@/hooks/useVideoPreload';

const VideoContent = lazy(() => import('./VideoContent'));

export default function Video() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isLoaded, progress } = useVideoPreload('/blackhole.mp4');

  useEffect(() => {
    if (isLoaded) {
      setVideoLoaded(true);
    }
  }, [isLoaded]);

  return (
    <div className="fixed top-[70px] left-0 w-full h-screen flex justify-center items-center z-[-1] overflow-hidden transform -translate-y-1/2">
      {/* Loading indicator */}
      {!videoLoaded && progress > 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full"></div>
            <div 
              className="absolute inset-0 border-2 border-purple-500 rounded-full" 
              style={{ 
                clipPath: `polygon(0 0, 100% 0, 100% ${progress}%, 0 ${progress}%)` 
              }}
            ></div>
          </div>
        </div>
      )}
      
      <Suspense fallback={null}>
        {/* Lazy load the actual video component */}
        <VideoContent isLoaded={videoLoaded} />
      </Suspense>
    </div>
  );
}
