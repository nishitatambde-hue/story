import { cn } from '@/lib/utils';

interface WaveDecorationProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
  flip?: boolean;
}

export const WaveDecoration = ({
  position = 'bottom',
  color = 'fill-background',
  className,
  flip = false,
}: WaveDecorationProps) => {
  return (
    <div
      className={cn(
        'absolute left-0 right-0 w-full overflow-hidden',
        position === 'top' ? 'top-0' : 'bottom-0',
        flip && 'rotate-180',
        className
      )}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn('w-full h-16 md:h-24', color)}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  );
};

export const BlobDecoration = ({
  className,
  color = 'coral',
}: {
  className?: string;
  color?: 'coral' | 'mint' | 'lavender' | 'sky';
}) => {
  const colorClasses = {
    coral: 'from-coral/30 to-neon-pink/20',
    mint: 'from-mint/30 to-neon-cyan/20',
    lavender: 'from-lavender/30 to-sky/20',
    sky: 'from-sky/30 to-mint/20',
  };

  return (
    <div
      className={cn(
        'absolute w-64 h-64 rounded-blob animate-blob bg-gradient-to-br blur-3xl',
        colorClasses[color],
        className
      )}
    />
  );
};
