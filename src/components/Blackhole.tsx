import React, { useEffect, useState } from 'react';

export default function Video() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVideoLoaded(true), 100); // Pequeno delay para suavizar o efeito
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed top-[70px] left-0 w-full h-screen flex justify-center items-center z-[-1] overflow-hidden transform -translate-y-1/2">
      <video 
        autoPlay
        muted
        loop
        preload="auto"
        className={`rotate-180 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : ''}`}
      >
        <source 
          src="/blackhole.mp4" 
          type="video/mp4"
        />
      </video>
    </div>
  );
}
