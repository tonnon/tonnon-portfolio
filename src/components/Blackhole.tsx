import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import useVideoPreload from '@/hooks/useVideoPreload';

const VideoContent = lazy(() => import('./VideoContent'));

export default function Video() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isLoaded } = useVideoPreload('/blackhole.mp4');

  useEffect(() => {
    if (isLoaded) {
      setVideoLoaded(true);
    }
  }, [isLoaded]);

  return (
    <div className="fixed top-[70px] left-0 w-full h-screen flex justify-center items-center z-[-1] overflow-hidden transform -translate-y-1/2">
      <Suspense fallback={null}>
        <VideoContent isLoaded={videoLoaded} />
      </Suspense>
    </div>
  );
}
