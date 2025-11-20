import React from 'react';
import { Facebook, Twitter, Dribbble } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white py-20 px-8 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-16 text-sm text-gray-400">
        <div className="flex gap-4 items-center order-last md:order-first mt-8 md:mt-0">
          <div className="border border-white/20 p-3 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
            <Facebook className="w-4 h-4" />
          </div>
          <div className="border border-white/20 p-3 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
            <Twitter className="w-4 h-4" />
          </div>
          <div className="border border-white/20 p-3 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
            <Dribbble className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase tracking-wider mb-6">Navigation</h5>
            <p onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer transition-colors">À Propos</p>
            <p onClick={() => onNavigate('pricing')} className="hover:text-white cursor-pointer transition-colors">Nos Forfaits</p>
            <p onClick={() => onNavigate('licenses')} className="hover:text-white cursor-pointer transition-colors">Mentions Légales</p>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase tracking-wider mb-6">Paris (Siège)</h5>
            <p>12 Avenue des Champs-Élysées</p>
            <p>75008 Paris, France</p>
            <p className="text-white font-bold pt-2">+33 1 45 67 89 10</p>
          </div>

          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase tracking-wider mb-6">Lyon</h5>
            <p>45 Rue de la République</p>
            <p>69002 Lyon, France</p>
            <p className="text-white font-bold pt-2">+33 4 72 34 56 78</p>
          </div>
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold text-white">MINAN</div>
            <p className="text-xs">© 2024 - Minan Sécurité</p>
            <p className="text-xs">Excellence & Discrétion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;