import React, { useRef, useEffect, useState } from 'react';

interface VideoContentProps {
  isLoaded: boolean;
}

const VideoContent = ({ isLoaded }: VideoContentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoCanPlay, setVideoCanPlay] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleCanPlay = () => {
      setVideoCanPlay(true);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    
    if (isLoaded && videoCanPlay) {
      video.play().catch(err => console.error('Error playing video:', err));
    }
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isLoaded, videoCanPlay]);
    return (
    <div className="relative w-full h-full">
      {/* Preview Image - shown while video is loading */}
      <img
        src="/blackhole-poster.jpg"
        alt="Blackhole preview"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded && videoCanPlay ? 'opacity-0' : 'opacity-40'
        }`}
        style={{
          transform: 'scale(0.75) rotate(180deg)',
          objectFit: 'cover',
          willChange: 'transform',
        }}
      />
      
      {/* Video Element */}
      <video 
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded && videoCanPlay ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          transform: 'scale(0.75) rotate(180deg)',
          objectFit: 'cover',
          willChange: 'transform',
        }}
      >
        <source 
          src="/blackhole.mp4" 
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoContent; 