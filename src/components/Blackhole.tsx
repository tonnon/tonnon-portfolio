import React from 'react';

export default function Video() {
  return (
    <div className="fixed top-[-385px] left-0 w-full h-screen flex justify-center items-center z-[-1] overflow-hidden">
      <video 
        autoPlay
        muted
        loop
        className="rotate-180 w-full h-full object-cover opacity-80"
      >
        <source 
          src="/blackhole.mp4" 
          type="video/mp4"
        />
      </video>
    </div>
  );
}
