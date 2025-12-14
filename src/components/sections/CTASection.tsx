import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BlobCharacter } from '@/components/characters/BlobCharacter';
import { ParticleField } from '@/components/effects/ParticleField';
import { cn } from '@/lib/utils';
import { Rocket, Mail } from 'lucide-react';

export const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-sunset relative overflow-hidden">
      <ParticleField count={15} />

      <div className="container px-6 relative z-10">
        <div
          className={cn(
            'max-w-4xl mx-auto text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Decorative Characters */}
          <div className="flex justify-center gap-4 mb-8">
            <BlobCharacter color="coral" size="md" className="animate-bounce-soft" />
            <BlobCharacter color="mint" size="sm" className="animate-bounce-soft" style={{ animationDelay: '0.2s' }} />
            <BlobCharacter color="lavender" size="md" className="animate-bounce-soft" style={{ animationDelay: '0.4s' }} />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Begin Your{' '}
            <span className="gradient-text">Adventure?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of explorers who have discovered the magic of our storyverse. 
            Your journey starts with a single click.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              <Rocket className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Launch Into the Storyverse
            </Button>
            <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              Get Updates
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint" />
              <span className="text-sm">10,000+ Happy Explorers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-coral" />
              <span className="text-sm">Award-Winning Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-lavender" />
              <span className="text-sm">100% Delightful</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-card">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
};
