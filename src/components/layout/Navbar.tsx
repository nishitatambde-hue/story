import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BlobCharacter } from '@/components/characters/BlobCharacter';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Characters', href: '#characters' },
  { label: 'Features', href: '#features' },
  { label: 'Story', href: '#story' },
  { label: 'About', href: '#about' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <BlobCharacter color="coral" size="sm" wavesOnHover={false} hasEyes={false} />
            <span className="font-display text-xl font-bold group-hover:text-coral transition-colors">
              Storyverse
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="mt-2">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
