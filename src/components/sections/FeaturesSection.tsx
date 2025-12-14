import { useEffect, useRef, useState } from 'react';
import { FloatingIsland } from '@/components/characters/FloatingIsland';
import { BlobCharacter } from '@/components/characters/BlobCharacter';
import { cn } from '@/lib/utils';
import { Wand2, Palette, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Interactive Magic',
    description: 'Every element responds to your touch, creating a living, breathing experience.',
    color: 'coral' as const,
    island: 'grass' as const,
  },
  {
    icon: Palette,
    title: 'Vibrant Worlds',
    description: 'Explore beautifully crafted environments filled with color and wonder.',
    color: 'mint' as const,
    island: 'crystal' as const,
  },
  {
    icon: Sparkles,
    title: 'Playful Animations',
    description: 'Smooth, delightful animations that bring every moment to life.',
    color: 'lavender' as const,
    island: 'cloud' as const,
  },
  {
    icon: Heart,
    title: 'Joyful Experience',
    description: 'Designed to spark happiness and create memorable moments.',
    color: 'sky' as const,
    island: 'grass' as const,
  },
];

export const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-dreamy relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <FloatingIsland variant="cloud" size="sm" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-30">
        <FloatingIsland variant="grass" size="sm" />
      </div>

      <div className="container px-6">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            A World of <span className="gradient-text">Wonder</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes our storyverse special
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'group relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-2',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon with Character */}
              <div className="flex items-start gap-6 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-coral" />
                  </div>
                  {/* Mini character peeking */}
                  <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <BlobCharacter color={feature.color} size="sm" wavesOnHover={false} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>

              {/* Floating island decoration */}
              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <FloatingIsland variant={feature.island} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
