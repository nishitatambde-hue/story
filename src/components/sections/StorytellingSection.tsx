import { useEffect, useRef, useState } from 'react';
import { BlobCharacter } from '@/components/characters/BlobCharacter';
import { FloatingIsland } from '@/components/characters/FloatingIsland';
import { cn } from '@/lib/utils';

const storyScenes = [
  {
    title: 'The Beginning',
    content: 'In a world painted with pastels and filled with wonder, our story begins...',
    character: 'coral' as const,
    align: 'left' as const,
  },
  {
    title: 'The Discovery',
    content: 'Curious creatures emerge from every corner, each with a tale to tell and a friendship to offer.',
    character: 'mint' as const,
    align: 'right' as const,
  },
  {
    title: 'The Adventure',
    content: 'Together, they embark on journeys across floating islands and through enchanted forests.',
    character: 'lavender' as const,
    align: 'left' as const,
  },
  {
    title: 'The Magic',
    content: 'Every scroll reveals new wonders, every interaction sparks a moment of pure joy.',
    character: 'sky' as const,
    align: 'right' as const,
  },
];

export const StorytellingSection = () => {
  const [visibleScenes, setVisibleScenes] = useState<boolean[]>([]);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sceneRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleScenes((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Connecting Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Your <span className="gradient-text">Story</span> Unfolds
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scroll through chapters of wonder as the narrative comes alive
          </p>
        </div>

        {/* Story Scenes */}
        <div className="space-y-24 md:space-y-32">
          {storyScenes.map((scene, index) => (
            <div
              key={scene.title}
              ref={(el) => (sceneRefs.current[index] = el)}
              className={cn(
                'flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000',
                scene.align === 'right' && 'md:flex-row-reverse',
                visibleScenes[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              )}
            >
              {/* Character Side */}
              <div className="flex-1 flex justify-center relative">
                <div className="relative">
                  <BlobCharacter color={scene.character} size="xl" />
                  <FloatingIsland
                    variant="cloud"
                    size="sm"
                    className={cn(
                      'absolute -top-8',
                      scene.align === 'left' ? '-right-8' : '-left-8'
                    )}
                  />
                </div>
                {/* Scene number */}
                <div className="absolute -top-4 -left-4 md:hidden w-8 h-8 rounded-full bg-coral flex items-center justify-center text-card font-display font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Timeline Node (desktop only) */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral to-neon-pink flex items-center justify-center shadow-character">
                  <span className="font-display font-bold text-card">{index + 1}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-3xl font-bold mb-4">{scene.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{scene.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
