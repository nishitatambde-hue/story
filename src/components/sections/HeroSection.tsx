import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BlobCharacter } from '@/components/characters/BlobCharacter';
import { FloatingIsland } from '@/components/characters/FloatingIsland';
import { ParticleField } from '@/components/effects/ParticleField';
import { BlobDecoration } from '@/components/effects/WaveDecoration';
import { Sparkles, Play, ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Ambient Particles */}
      <ParticleField count={30} />

      {/* Background Decorations */}
      <BlobDecoration className="top-20 -left-32 opacity-60" color="coral" />
      <BlobDecoration className="bottom-40 -right-20 opacity-50" color="mint" />
      <BlobDecoration className="top-1/2 left-1/3 opacity-40" color="lavender" />

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20">
        {/* Text Content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-muted-foreground">Welcome to the Storyverse</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Where Stories{' '}
            <span className="gradient-text">Come Alive</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 font-body">
            Step into a world where imagination flows freely. Our whimsical characters guide you through 
            interactive experiences that spark joy and wonder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl" className="group">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="xl">
              Meet the Characters
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden lg:flex items-center gap-2 mt-16 text-muted-foreground animate-bounce-soft">
            <ArrowDown className="w-4 h-4" />
            <span className="text-sm">Scroll to explore</span>
          </div>
        </div>

        {/* Character Showcase */}
        <div
          className={`flex-1 relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Character */}
          <div className="relative flex items-center justify-center">
            <BlobCharacter color="coral" size="xl" className="z-20" />
            
            {/* Floating Islands Around */}
            <FloatingIsland
              variant="grass"
              size="sm"
              className="absolute -top-8 -left-8"
              parallaxSpeed={0.5}
            />
            <FloatingIsland
              variant="cloud"
              size="sm"
              className="absolute top-0 -right-4"
              parallaxSpeed={1.5}
            />
            <FloatingIsland
              variant="crystal"
              size="sm"
              className="absolute -bottom-4 left-0"
              parallaxSpeed={0.8}
            />

            {/* Supporting Characters */}
            <BlobCharacter
              color="mint"
              size="md"
              className="absolute -top-16 right-8 z-10"
            />
            <BlobCharacter
              color="lavender"
              size="sm"
              className="absolute bottom-8 -right-8 z-10"
            />
            <BlobCharacter
              color="sky"
              size="sm"
              className="absolute -bottom-8 left-16 z-10"
            />
          </div>

          {/* Glow Effect Behind Main Character */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-card">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
};
