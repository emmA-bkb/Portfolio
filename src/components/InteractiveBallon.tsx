'use client';

import { useRef, useState } from 'react';

export default function InteractiveBallon() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const imgCenterX = rect.left + rect.width / 2;
    const imgCenterY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate distance and direction
    const distX = imgCenterX - mouseX;
    const distY = imgCenterY - mouseY;

    // Normalize and apply force
    const distance = Math.sqrt(distX * distX + distY * distY);
    const force = Math.max(0, 200 - distance) / 5;

    const newOffsetX = (distX / distance) * force || 0;
    const newOffsetY = (distY / distance) * force || 0;

    setOffsetX(newOffsetX);
    setOffsetY(newOffsetY);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setOffsetX(0);
    setOffsetY(0);
  };

  return (
    <div 
      className="flex items-center justify-center w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes shake {
          0% { transform: translate(0px, 0px); }
          25% { transform: translate(1px, 1px); }
          50% { transform: translate(-1px, -1px); }
          75% { transform: translate(1px, -1px); }
          100% { transform: translate(0px, 0px); }
        }
        
        .shake-animation {
          animation: shake 0.8s ease-in-out infinite;
        }
        
        .interactive-container {
          position: relative;
          display: inline-block;
          width: 100%;
          max-width: 28rem;
        }
        
        .balloon-image {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
      <div className="interactive-container">
        <img
          ref={imageRef}
          src={`/Ballon.png?t=${Date.now()}`}
          alt="Balloon"
          className={`balloon-image ${!isHovering ? 'shake-animation' : ''}`}
          style={{ 
            transform: isHovering ? `translate(${offsetX}px, ${offsetY}px)` : undefined,
            transformOrigin: 'center',
          }}
        />
      </div>
    </div>
  );
}
