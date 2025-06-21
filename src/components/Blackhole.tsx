import React, { useEffect, useState, lazy, Suspense } from 'react';
import useVideoPreload from '@/hooks/useVideoPreload';

const VideoContent = lazy(() => import('./VideoContent'));

export default function Video() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isLoaded, loadProgress } = useVideoPreload('/blackhole.mp4');
  useEffect(() => {
    if (isLoaded) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="fixed top-[70px] left-0 w-full h-screen flex justify-center items-center z-[-1] overflow-hidden transform -translate-y-1/2">
      <Suspense fallback={
        <div className="w-full h-full">
          <img
            src="/blackhole-poster.jpg"
            alt="Blackhole loading"
            className="w-full h-full object-cover opacity-40"
            style={{
              transform: 'scale(0.75) rotate(180deg)',
              objectFit: 'cover',
            }}
          />
        </div>
      }>
        <VideoContent isLoaded={videoLoaded} />
      </Suspense>
    </div>
  );
}
