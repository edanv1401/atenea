import React from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
}

export function ParticleBackground({ className = '', particleCount = 50 }: ParticleBackgroundProps) {
  const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  React.useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1
    }));
    setParticles(newParticles);
  }, [particleCount]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${10 + Math.random() * 20}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(20px); }
        }
      `}</style>
    </div>
  );
}
