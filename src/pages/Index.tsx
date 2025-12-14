import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { CharacterShowcase } from '@/components/sections/CharacterShowcase';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { StorytellingSection } from '@/components/sections/StorytellingSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <section id="characters">
          <CharacterShowcase />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="story">
          <StorytellingSection />
        </section>
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
