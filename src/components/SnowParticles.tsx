'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function SnowParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }));
    
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle: Particle = {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
        };
        return [...prev.slice(-49), newParticle];
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes snowFall {
          to {
            transform: translateY(100vh) translateX(var(--tx));
            opacity: 0;
          }
        }

        .snow-particle {
          position: absolute;
          top: -10px;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          --tx: 0px;
        }

        .snow-particle::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3));
          border-radius: 50%;
        }
      `}</style>
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="snow-particle"
          style={{
            left: `${particle.left}%`,
            animation: `snowFall ${particle.duration}s linear ${particle.delay}s infinite`,
            '--tx': `${(Math.random() - 0.5) * 30}px`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}
