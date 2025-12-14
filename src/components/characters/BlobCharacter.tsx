import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface BlobCharacterProps {
  color?: 'coral' | 'mint' | 'lavender' | 'sky';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  hasEyes?: boolean;
  wavesOnHover?: boolean;
  style?: React.CSSProperties;
}

const colorClasses = {
  coral: 'bg-gradient-to-br from-coral to-neon-pink',
  mint: 'bg-gradient-to-br from-mint to-neon-cyan',
  lavender: 'bg-gradient-to-br from-lavender to-sky',
  sky: 'bg-gradient-to-br from-sky to-mint',
};

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const eyeSizes = {
  sm: { eye: 'w-3 h-4', pupil: 'w-1.5 h-2', gap: 'gap-1.5' },
  md: { eye: 'w-4 h-5', pupil: 'w-2 h-2.5', gap: 'gap-2' },
  lg: { eye: 'w-5 h-6', pupil: 'w-2.5 h-3', gap: 'gap-3' },
  xl: { eye: 'w-7 h-9', pupil: 'w-3.5 h-4', gap: 'gap-4' },
};

export const BlobCharacter = ({
  color = 'coral',
  size = 'md',
  className,
  hasEyes = true,
  wavesOnHover = true,
  style,
}: BlobCharacterProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const rect = blobRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / 50;
      const deltaY = (e.clientY - centerY) / 50;
      setMousePos({ x: Math.max(-5, Math.min(5, deltaX)), y: Math.max(-5, Math.min(5, deltaY)) });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeSize = eyeSizes[size];

  return (
    <div
      ref={blobRef}
      className={cn(
        'relative cursor-pointer transition-transform duration-300',
        isHovered && wavesOnHover && 'animate-wiggle',
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Blob Body */}
      <div
        className={cn(
          sizeClasses[size],
          colorClasses[color],
          'animate-blob shadow-character transition-all duration-300',
          isHovered && 'scale-110'
        )}
      />

      {/* Eyes */}
      {hasEyes && (
        <div className={cn('absolute inset-0 flex items-center justify-center', eyeSize.gap)}>
          {/* Left Eye */}
          <div className={cn(eyeSize.eye, 'bg-card rounded-full relative overflow-hidden')}>
            <div
              className={cn(eyeSize.pupil, 'bg-foreground rounded-full absolute transition-all duration-100')}
              style={{
                left: `calc(50% - 0.5rem + ${mousePos.x}px)`,
                top: `calc(50% - 0.5rem + ${mousePos.y}px)`,
              }}
            />
            {/* Highlight */}
            <div className="absolute w-1 h-1 bg-card rounded-full top-1 right-1 opacity-80" />
          </div>

          {/* Right Eye */}
          <div className={cn(eyeSize.eye, 'bg-card rounded-full relative overflow-hidden')}>
            <div
              className={cn(eyeSize.pupil, 'bg-foreground rounded-full absolute transition-all duration-100')}
              style={{
                left: `calc(50% - 0.5rem + ${mousePos.x}px)`,
                top: `calc(50% - 0.5rem + ${mousePos.y}px)`,
              }}
            />
            {/* Highlight */}
            <div className="absolute w-1 h-1 bg-card rounded-full top-1 right-1 opacity-80" />
          </div>
        </div>
      )}

      {/* Blush Cheeks */}
      {isHovered && (
        <>
          <div className="absolute bottom-1/4 left-1 w-3 h-2 bg-coral-light rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-1/4 right-1 w-3 h-2 bg-coral-light rounded-full opacity-60 animate-pulse" />
        </>
      )}

      {/* Waving Arm on Hover */}
      {isHovered && wavesOnHover && (
        <div className="absolute -right-4 top-1/3 animate-wave-hand origin-bottom-left">
          <div className={cn('w-3 h-8 rounded-full', colorClasses[color])} />
        </div>
      )}
    </div>
  );
};
