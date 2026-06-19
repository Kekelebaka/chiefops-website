'use client';

import { useState, useEffect } from 'react';

export function RobotMascot({ className = '' }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-80 h-80">
        {/* Robot Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-40 bg-primary-orange rounded-full shadow-lg">
          {/* Eyes */}
          <div className="absolute top-12 left-16 w-4 h-4 bg-black rounded-full"></div>
          <div className="absolute top-12 right-16 w-4 h-4 bg-black rounded-full"></div>
          
          {/* Eyes with animation */}
          <div className={`absolute top-12 left-16 w-4 h-4 bg-black rounded-full transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}></div>
          <div className={`absolute top-12 right-16 w-4 h-4 bg-black rounded-full transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}></div>
          
          {/* Pupils */}
          <div className="absolute top-13 left-17 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-13 right-17 w-1.5 h-1.5 bg-white rounded-full"></div>
          
          {/* Mouth (speaker/smile) */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white rounded-full"></div>
          
          {/* Antenna */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-primary-navy rounded-full"></div>
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-teal rounded-full"></div>
          
          {/* Blush effect */}
          <div className={`absolute top-20 left-8 w-6 h-6 bg-pink-200 rounded-full opacity-60 transition-opacity duration-300 ${pulse ? 'opacity-80' : 'opacity-40'}`}></div>
          <div className={`absolute top-20 right-8 w-6 h-6 bg-pink-200 rounded-full opacity-60 transition-opacity duration-300 ${pulse ? 'opacity-80' : 'opacity-40'}`}></div>
        </div>

        {/* Robot Body */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-56 h-40 bg-primary-navy rounded-xl shadow-lg">
          {/* Screen Display */}
          <div className="absolute top-6 left-8 right-8 h-16 bg-primary-teal rounded-lg flex items-center justify-center">
            <div className="text-primary-navy font-bold text-xs animate-pulse">CHIEF OPS</div>
          </div>
          
          {/* Buttons */}
          <div className="absolute top-28 left-8 right-8 flex justify-center gap-2">
            <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
            <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
            <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
          </div>
        </div>

        {/* Robot Arms */}
        <div className="absolute top-36 left-0 w-16 h-6 bg-primary-navy rounded-r-full"></div>
        <div className="absolute top-36 right-0 w-16 h-6 bg-primary-navy rounded-l-full"></div>
        
        {/* Robot Hands */}
        <div className="absolute top-34 -left-8 w-8 h-8 bg-primary-orange rounded-full"></div>
        <div className="absolute top-34 -right-8 w-8 h-8 bg-primary-orange rounded-full"></div>

        {/* Robot Legs */}
        <div className="absolute top-64 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-primary-navy rounded-t-xl">
          {/* Feet */}
          <div className="absolute -bottom-4 left-4 w-16 h-6 bg-primary-orange rounded-t-lg"></div>
          <div className="absolute -bottom-4 right-4 w-16 h-6 bg-primary-orange rounded-t-lg"></div>
        </div>

        {/* Floating particles effect */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-12 w-2 h-2 bg-primary-teal rounded-full animate-float"></div>
            <div className="absolute top-20 left-12 w-2 h-2 bg-primary-orange rounded-full animate-float animation-delay-500"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-float animation-delay-1000"></div>
          </>
        )}
      </div>

      {/* Tagline for robot */}
      <div className="mt-8 text-center">
        <p className="text-primary-orange font-semibold text-lg">Your AI Co-Pilot</p>
        <p className="text-gray-500 text-sm mt-1">Building business operating systems</p>
      </div>
    </div>
  );
}
