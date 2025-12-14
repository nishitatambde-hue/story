import { BlobCharacter } from '@/components/characters/BlobCharacter';

export const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background relative overflow-hidden">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <BlobCharacter color="coral" size="sm" wavesOnHover={false} hasEyes={false} />
              <span className="font-display text-2xl font-bold">Storyverse</span>
            </div>
            <p className="text-background/70 text-sm">
              Where imagination meets interaction. Creating joyful digital experiences since 2024.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Characters</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Worlds</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-background transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Storyverse. All rights reserved.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorative Characters */}
      <div className="absolute bottom-4 right-8 opacity-20">
        <BlobCharacter color="mint" size="lg" wavesOnHover={false} />
      </div>
    </footer>
  );
};
