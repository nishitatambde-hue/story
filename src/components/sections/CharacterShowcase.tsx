import { useEffect, useRef, useState } from 'react';
import { BlobCharacter } from '@/components/characters/BlobCharacter';
import { cn } from '@/lib/utils';

interface Character {
  name: string;
  color: 'coral' | 'mint' | 'lavender' | 'sky';
  personality: string;
  description: string;
}

const characters: Character[] = [
  {
    name: 'Bubbles',
    color: 'coral',
    personality: 'The Cheerful Guide',
    description: 'Always ready with a smile and a wave, Bubbles leads explorers through new adventures with boundless enthusiasm.',
  },
  {
    name: 'Minty',
    color: 'mint',
    personality: 'The Calm Thinker',
    description: 'With a cool head and gentle nature, Minty helps solve puzzles and brings peace to any situation.',
  },
  {
    name: 'Lavvy',
    color: 'lavender',
    personality: 'The Dreamy Artist',
    description: 'Head in the clouds but heart in creativity, Lavvy paints the world with imagination and wonder.',
  },
  {
    name: 'Skye',
    color: 'sky',
    personality: 'The Bold Explorer',
    description: 'Fearless and curious, Skye ventures into unknown territories and discovers hidden treasures.',
  },
];

export const CharacterShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/5 rounded-full blur-3xl" />

      <div className="container px-6">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Characters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each character brings their unique personality to guide you through the storyverse. 
            Hover over them to say hello!
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={cn(
                'flex flex-col items-center gap-4 p-6 rounded-3xl transition-all duration-500 cursor-pointer',
                activeIndex === index ? 'bg-muted scale-105' : 'hover:bg-muted/50',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveIndex(index)}
            >
              <BlobCharacter
                color={character.color}
                size="lg"
                wavesOnHover={true}
              />
              <div className="text-center">
                <h3 className="font-display text-xl font-bold">{character.name}</h3>
                <p className="text-sm text-muted-foreground">{character.personality}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Character Description */}
        <div
          className={cn(
            'max-w-2xl mx-auto text-center p-8 rounded-3xl bg-muted transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="text-lg text-foreground">{characters[activeIndex].description}</p>
        </div>
      </div>
    </section>
  );
};
