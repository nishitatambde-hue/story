import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FloatingIslandProps {
  variant?: 'grass' | 'cloud' | 'crystal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
  parallaxSpeed?: number;
}

const variantStyles = {
  grass: {
    base: 'bg-gradient-to-b from-mint to-secondary',
    top: 'bg-gradient-to-b from-mint-light to-mint',
    accent: 'bg-lemon',
  },
  cloud: {
    base: 'bg-gradient-to-b from-card to-muted',
    top: 'bg-card',
    accent: 'bg-sky-light',
  },
  crystal: {
    base: 'bg-gradient-to-b from-lavender to-sky',
    top: 'bg-gradient-to-br from-lavender-light to-sky-light',
    accent: 'bg-neon-cyan',
  },
};

const sizeStyles = {
  sm: { width: 'w-32', height: 'h-20', topHeight: 'h-8' },
  md: { width: 'w-48', height: 'h-28', topHeight: 'h-12' },
  lg: { width: 'w-64', height: 'h-36', topHeight: 'h-16' },
};

export const FloatingIsland = ({
  variant = 'grass',
  size = 'md',
  className,
  children,
  parallaxSpeed = 1,
}: FloatingIslandProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = variantStyles[variant];
  const sizes = sizeStyles[size];
  const parallaxOffset = scrollY * 0.1 * parallaxSpeed;

  return (
    <div
      className={cn('relative animate-float', className)}
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      {/* Island Top (flat surface) */}
      <div
        className={cn(
          sizes.width,
          sizes.topHeight,
          styles.top,
          'rounded-t-[50%] relative z-10'
        )}
      >
        {/* Grass/Surface Details */}
        {variant === 'grass' && (
          <>
            <div className="absolute -top-2 left-1/4 w-2 h-4 bg-mint rounded-full" />
            <div className="absolute -top-3 left-1/3 w-1.5 h-5 bg-secondary rounded-full" />
            <div className="absolute -top-2 right-1/4 w-2 h-4 bg-mint rounded-full" />
          </>
        )}
        
        {/* Crystal Shards */}
        {variant === 'crystal' && (
          <>
            <div className="absolute -top-4 left-1/3 w-3 h-6 bg-neon-cyan opacity-80 rotate-12" 
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            <div className="absolute -top-6 right-1/3 w-4 h-8 bg-lavender opacity-80 -rotate-6" 
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </>
        )}

        {/* Content on island */}
        <div className="absolute inset-0 flex items-end justify-center pb-2">
          {children}
        </div>
      </div>

      {/* Island Bottom (rocky/organic shape) */}
      <div
        className={cn(
          sizes.width,
          sizes.height,
          styles.base,
          'rounded-b-[60%] rounded-t-none shadow-float relative'
        )}
      >
        {/* Rock details */}
        <div className={cn('absolute bottom-1/4 left-1/4 w-6 h-4 rounded-full opacity-30', styles.accent)} />
        <div className={cn('absolute bottom-1/3 right-1/3 w-4 h-3 rounded-full opacity-20', styles.accent)} />
      </div>

      {/* Shadow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-foreground/10 rounded-[50%] blur-md"
      />
    </div>
  );
};
