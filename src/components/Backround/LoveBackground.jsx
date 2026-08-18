import React, { useMemo } from 'react';
import './LoveBackground.css';

export default function LoveBackground() {
  const hearts = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 8}px`,
      delay: `${Math.random() * 25}s`,
      duration: `${Math.random() * 20 + 15}s`,
      opacity: Math.random() * 0.35 + 0.15,
    }));
  }, []);

  return (
    <div className="love-bg-container">
      <div className="love-bg-gradient" />
      <div className="hearts-wrapper">
        {hearts.map((heart) => (
          <svg
            key={heart.id}
            className="floating-heart"
            style={{
              left: heart.left,
              width: heart.size,
              height: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              opacity: heart.opacity,
            }}
            viewBox="0 0 32 29.6"
            fill="currentColor"
          >
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        ))}
      </div>
    </div>
  );
}
