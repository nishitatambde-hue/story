import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface ParticleFieldProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const defaultColors = [
  'bg-coral/30',
  'bg-mint/30',
  'bg-lavender/30',
  'bg-sky/30',
  'bg-neon-cyan/20',
  'bg-neon-pink/20',
];

export const ParticleField = ({
  count = 20,
  colors = defaultColors,
  className,
}: ParticleFieldProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -20,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, [count, colors]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={cn('absolute rounded-full particle', particle.color)}
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
