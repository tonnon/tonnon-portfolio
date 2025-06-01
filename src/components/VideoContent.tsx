import React, { useRef, useEffect } from 'react';

interface VideoContentProps {
  isLoaded: boolean;
}

const VideoContent = ({ isLoaded }: VideoContentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Optimize video performance when it's loaded
    if (isLoaded) {
      // Make sure video is playing
      video.play().catch(err => console.error('Error playing video:', err));
    }
  }, [isLoaded]);
  
  return (
    <video 
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={`w-full h-full object-cover opacity-0 transition-opacity duration-500 ${isLoaded ? 'opacity-40' : ''}`}
      style={{
        transform: 'scale(0.75) rotate(180deg)', // Scale down to reduce memory usage
        objectFit: 'cover',
        willChange: 'transform', // Hardware acceleration hint
      }}
    >
      <source 
        src="/blackhole.mp4" 
        type="video/mp4"
      />
    </video>
  );
};

export default VideoContent; 