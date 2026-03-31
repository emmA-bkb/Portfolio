'use client';

import { useEffect, useState } from 'react';

interface MoneyParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function MoneyRain() {
  const [particles, setParticles] = useState<MoneyParticle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles: MoneyParticle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 3,
    }));
    
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle: MoneyParticle = {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 6 + Math.random() * 3,
        };
        return [...prev.slice(-19), newParticle];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const moneySymbols = ['$', '€', '💳', '💰'];

  return (
    <>
      <style>{`
        @keyframes moneyFall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .money-particle {
          position: absolute;
          top: -30px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
      
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="money-particle"
          style={{
            left: `${particle.left}%`,
            animation: `moneyFall ${particle.duration}s linear ${particle.delay}s infinite`,
            color: ['#FFD700', '#00FF00', '#FF6B9D', '#00D4FF'][index % 4],
          } as React.CSSProperties}
        >
          {moneySymbols[index % moneySymbols.length]}
        </div>
      ))}
    </>
  );
}
